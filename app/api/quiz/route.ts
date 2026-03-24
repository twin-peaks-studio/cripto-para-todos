import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// ── In-memory cache ──────────────────────────────────────────────────────────
// Caches a pool of questions per lesson so the API is only called once per
// lesson per server lifetime. Subsequent calls shuffle and return a subset.

interface Question {
  type: 'multiple_choice' | 'true_false' | 'scenario'
  question: string
  options?: string[]
  correctIndex?: number
  correct?: boolean
  explanation: string
}

const questionCache = new Map<string, Question[]>()

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Topic descriptions ────────────────────────────────────────────────────────
// One sentence per lesson — replaces sending the full lesson text (~2000 tokens).
// Claude already knows about crypto; it just needs the topic focus.
const LESSON_TOPICS: Record<string, string> = {
  '¿Qué es el cripto?':        'qué es una criptomoneda, cómo funciona el blockchain como un cuaderno compartido, y por qué nadie lo controla',
  'Bitcoin':                    'Bitcoin: quién lo creó, por qué es escaso (límite de 21 millones), el Halving, y cómo se determina su precio',
  'Ethereum y otras monedas':   'Ethereum como plataforma para aplicaciones descentralizadas, diferencia con Bitcoin, y cómo evaluar altcoins desconocidas',
  'Minería y acciones de minería': 'cómo se minan los bitcoins con computadoras potentes, qué son las empresas mineras, y el doble riesgo de sus acciones',
  'Riesgos del cripto':         'volatilidad, falta de protección gubernamental, irreversibilidad de transacciones, y la regla de solo invertir lo que puedes perder',
  'Protégete de las estafas':   'estafas comunes en cripto: phishing, falsos expertos, pig butchering, urgencia artificial, y cómo reconocer y evitar cada una',
  '¿Por qué puede subir el valor?': 'factores que pueden subir el precio del cripto: escasez, adopción institucional, Halving, países que lo adoptan — siempre con contexto de riesgo',
  'Consejos para invertir':     'consejos prácticos y conservadores para principiantes: empezar pequeño, usar exchanges reconocidos, guardar la frase semilla, no invertir por FOMO',
  'Glosario de palabras':       'términos clave de cripto: blockchain, wallet, frase semilla, exchange, altcoin, FOMO, Halving, DeFi, NFT, stablecoin',
}

export async function POST(req: NextRequest) {
  // Auth check
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  // lessonContent is accepted but intentionally not used — sending full lesson
  // text was expensive (~2000 tokens). Claude knows crypto; we just need the topic.
  const { lessonTitle, questionCount } = await req.json()

  if (!lessonTitle) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  const count = questionCount ?? 5

  // ── Cache hit ────────────────────────────────────────────────────────────────
  const cached = questionCache.get(lessonTitle)
  if (cached && cached.length >= count) {
    console.log(`⚡ Cache hit for: "${lessonTitle}"`)
    return NextResponse.json({ questions: shuffle(cached).slice(0, count) })
  }

  // ── Generate ─────────────────────────────────────────────────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API key no configurada' }, { status: 500 })
  }

  const topic = LESSON_TOPICS[lessonTitle] ?? lessonTitle
  const prompt = `Crea exactamente ${count} preguntas de quiz en español sobre: ${topic}.

AUDIENCIA: adultos mayores hispanohablantes que nunca han estudiado cripto. Muchos no son muy tecnológicos.

NIVEL: principiante absoluto. Las preguntas deben poder responderse con sentido común después de leer una breve introducción al tema.

PERMITIDO preguntar sobre:
- Conceptos básicos explicados con analogías simples (ej. "el blockchain es como un cuaderno compartido")
- Situaciones de la vida real (estafas, consejos, decisiones cotidianas)
- Hechos simples y memorables (ej. límite de 21 millones de Bitcoin)
- Qué hacer o no hacer en situaciones comunes

PROHIBIDO — nunca incluyas:
- Jerga técnica sin explicar: hash rate, mempool, UTXO, proof-of-work, nonce, gas fees, wei
- Preguntas sobre código, protocolos, o mecánicas internas
- Cálculos matemáticos o fórmulas
- Precios específicos o fechas exactas
- Conceptos avanzados: DeFi, Layer 2, sharding, staking mechanics, oracles
- Preguntas que requieren conocimiento previo de tecnología o finanzas

FORMATO — mezcla estos tipos:
- multiple_choice: 4 opciones, una correcta
- true_false: verdadero o falso
- scenario: situación real ("Tu amigo/nieto/vecino te dice X — ¿qué haces?") con 4 opciones

Reglas de estilo: preguntas claras sin trampa, respuestas incorrectas plausibles pero claramente erróneas, máximo 20 palabras por opción, explicaciones alentadoras y en lenguaje simple.

Responde SOLO con JSON válido, sin texto adicional:
{"questions":[{"type":"multiple_choice","question":"...","options":["...","...","...","..."],"correctIndex":0,"explanation":"..."},{"type":"true_false","question":"...","correct":true,"explanation":"..."},{"type":"scenario","question":"...","options":["...","...","...","..."],"correctIndex":2,"explanation":"..."}]}`

  try {
    const client = new Anthropic({ apiKey })
    console.log(`🧠 Generating quiz pool for: "${lessonTitle}"`)

    const message = await client.messages.create({
      model: 'claude-3-haiku-20240307', // 3-4x cheaper than Haiku 4.5
      max_tokens: 1500,                  // enough for 5-7 detailed questions
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content[0].type === 'text' ? message.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON en la respuesta')

    const pool: { questions: Question[] } = JSON.parse(jsonMatch[0])
    console.log(`✅ Pool generated: ${pool.questions?.length} questions — cached`)

    questionCache.set(lessonTitle, pool.questions ?? [])
    return NextResponse.json({ questions: pool.questions ?? [] })

  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error)
    console.error('❌ Quiz generation error:', errMsg)
    return NextResponse.json({ error: `No se pudo generar el quiz: ${errMsg}` }, { status: 500 })
  }
}
