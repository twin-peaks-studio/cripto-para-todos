import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { LESSONS } from '@/lib/content/lessons'
import type { ContentBlock } from '@/lib/content/types'

// ── Helpers ───────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

/**
 * Extracts readable context from lesson content blocks.
 * Gives Haiku enough to answer accurately without sending the full raw HTML.
 */
function extractLessonContext(blocks: ContentBlock[]): string {
  const lines: string[] = []

  for (const block of blocks) {
    switch (block.type) {
      case 'heading':
        lines.push(`## ${block.text}`)
        break
      case 'paragraph':
        lines.push(stripHtml(block.html))
        break
      case 'analogy':
        if (block.label) lines.push(block.label.replace(/💡\s*/, ''))
        lines.push('Analogía: ' + stripHtml(block.html))
        break
      case 'info':
        lines.push(stripHtml(block.html))
        break
      case 'warn':
        lines.push(`⚠️ ${block.title}: ${stripHtml(block.html)}`)
        break
      case 'misconception':
        lines.push(`Mito: "${block.myth}" — Realidad: ${block.reality}`)
        break
      case 'bridge':
        lines.push(stripHtml(block.html))
        break
      case 'reveal':
        lines.push(`Pregunta: ${block.prompt} — Respuesta: ${stripHtml(block.answer)}`)
        break
      case 'checklist':
        lines.push(block.items.join(' | '))
        break
      case 'quick-check':
        lines.push(`Comprobación: ${block.question}`)
        break
      case 'opening-question':
        lines.push(`Pregunta inicial: ${block.question}`)
        break
    }
  }

  return lines.filter(Boolean).join('\n')
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Auth check
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { question, lessonSlug, lessonTitle } = await req.json()

  if (!question?.trim() || !lessonSlug || !lessonTitle) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  // Build lesson context from structured content
  const lesson = LESSONS.find(l => l.slug === lessonSlug)
  const context = lesson
    ? extractLessonContext(lesson.content)
    : `Esta es la lección sobre: ${lessonTitle}`

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API key no configurada' }, { status: 500 })
  }

  const systemPrompt = `Eres "Lupe", una tutora paciente y cálida de "Cripto Para Todos" — una app de educación financiera para mujeres hispanohablantes de 40 a 65 años que están aprendiendo sobre criptomonedas por primera vez.

La usuaria está leyendo la lección: "${lessonTitle}"

Contenido de la lección (para tu referencia):
${context}

Tu rol:
Eres una tutora, no un asesor financiero. Puedes explicar libremente qué es algo, cómo funciona, y si tiene relación con el cripto — incluyendo empresas, acciones, noticias, o términos que no aparezcan literalmente en la lección. Si alguien pregunta "¿qué es HUT 8?" o "¿esta acción tiene que ver con cripto?", explícalo con claridad.

Reglas:
- Responde en español sencillo, cálido y directo. Máximo 3–4 oraciones.
- Usa analogías del mundo cotidiano si ayuda a explicar (mercado, ahorro, vecindario, etc.).
- Nunca uses jerga técnica sin explicar inmediatamente qué significa en palabras simples.
- Nunca recomiendes comprar, vender, o invertir en nada específico. Puedes explicar qué es algo; no puedes decir si es buena o mala inversión.
- Si la pregunta no tiene ninguna relación con cripto o finanzas, redirige amablemente: "Esa pregunta está fuera de mi área, pero con gusto te ayudo con dudas sobre esta lección."
- Termina siempre con una nota breve de ánimo o afirmación.`

  try {
    const client = new Anthropic({ apiKey })
    console.log(`💬 Lupe answering question for lesson: "${lessonTitle}"`)

    const message = await client.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: question.trim() }],
    })

    const answer = message.content[0].type === 'text' ? message.content[0].text : ''

    // Log to Supabase for content review
    const { error: dbError } = await supabase.from('lesson_questions').insert({
      user_id: user.id,
      lesson_slug: lessonSlug,
      lesson_title: lessonTitle,
      question: question.trim(),
      answer,
    })

    if (dbError) {
      console.error('⚠️ Failed to log question:', dbError.message)
      // Non-fatal — still return the answer
    }

    return NextResponse.json({ answer })

  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error)
    console.error('❌ Ask error:', errMsg)
    return NextResponse.json({ error: 'No se pudo responder la pregunta' }, { status: 500 })
  }
}
