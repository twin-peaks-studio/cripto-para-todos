import type { Lesson } from './types'

export const LESSONS: Lesson[] = [
  // ═══════════════════════════════════════════════
  // LECCIÓN 1 — ¿Qué es el cripto?
  // ═══════════════════════════════════════════════
  {
    slug: 'que-es-el-cripto',
    title: '¿Qué es el cripto?',
    emoji: '💰',
    subtitle: 'Entiende qué es una criptomoneda y cómo funciona el blockchain',
    color: 'bg-sage-100',
    textColor: 'text-sage-900',
    xp: 100,
    quizQuestionCount: 5,
    content: [
      {
        type: 'paragraph',
        html: 'Una <strong>criptomoneda</strong> es dinero que existe solo en forma digital — no hay billetes ni monedas físicas que puedas tocar. No lo controla ningún banco ni ningún gobierno. En cambio, funciona gracias a una tecnología llamada <strong>blockchain</strong>.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el cuaderno compartido',
        html: 'Imagina que en tu vecindario todos llevan un cuaderno donde anotan quién le pagó a quién. Cuando Rosa le paga $20 a Carmen, todos en el vecindario lo anotan en su cuaderno al mismo tiempo. Nadie puede borrar ni cambiar un pago porque <strong>todos tienen una copia idéntica</strong>. Si alguien intenta hacer trampa y cambiar una anotación, el resto del vecindario lo detecta de inmediato. Eso es exactamente cómo funciona el blockchain — pero en lugar de un vecindario, son millones de computadoras en todo el mundo.',
      },
      {
        type: 'paragraph',
        html: 'El blockchain es un registro digital compartido por miles de computadoras al mismo tiempo, en todo el mundo. Nadie lo controla solo — es como si fuera propiedad de todos y de nadie al mismo tiempo. Cada transacción queda grabada para siempre y nadie puede borrarla ni falsificarla.',
      },
      {
        type: 'paragraph',
        html: 'El blockchain es público — cualquier persona puede ver las transacciones. Pero no se ven los nombres de las personas, solo números de cuenta (como un apodo secreto). Es <strong>transparente y privado al mismo tiempo</strong>.',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿En qué se diferencia del dinero normal?',
      },
      {
        type: 'table',
        headers: ['Dinero normal (dólar)', 'Criptomoneda (Bitcoin)'],
        rows: [
          ['Lo controla el gobierno y los bancos', 'Nadie lo controla — es descentralizado'],
          ['Se puede imprimir más cuando se necesita', 'La cantidad está fija — no se puede fabricar más'],
          ['Necesitas un banco para guardarlo', 'Tú eres tu propio banco'],
          ['Si el banco cierra, el gobierno lo protege (FDIC)', 'Sin protección del gobierno'],
          ['Valor relativamente estable día a día', 'Precio muy variable — puede subir o bajar mucho'],
          ['Las transacciones son privadas (solo tu banco las ve)', 'Las transacciones son públicas (pero anónimas)'],
        ],
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el correo electrónico del dinero',
        html: 'Cuando el correo electrónico llegó, muchos se preguntaron: "¿Para qué necesito esto si ya tengo correo físico?" Hoy en día, nadie manda cartas para comunicarse rápidamente. Las criptomonedas son parecidas al correo electrónico — son una forma de mover valor de una persona a otra, en cualquier parte del mundo, <strong>sin necesitar un intermediario</strong> (como un banco) que lo apruebe o que cobre comisión.',
      },
      {
        type: 'paragraph',
        html: 'La mayoría de personas que empiezan con cripto lo hacen a través de una plataforma conocida como <strong>Coinbase</strong> o <strong>Kraken</strong>. Esto se llama una cuenta <em>custodial</em> — funciona igual que cualquier cuenta en internet: te registras con tu correo y una contraseña, y si la olvidas, la recuperas por correo. La plataforma guarda las claves de tu cripto por ti. <strong>Importante:</strong> a diferencia de un banco, tu cripto en estas plataformas no está asegurado por el gobierno — si la plataforma es hackeada o cierra, no hay garantía de recuperación.<br><br>A medida que aprendes más, quizás escuches sobre tener tu propia <strong>billetera o wallet</strong>. Eso es diferente — se llama <em>auto-custodia</em>. En ese caso, <em>tú</em> controlas una clave especial de 12 a 24 palabras llamada <strong>frase semilla</strong>. Quien tenga esas palabras tiene acceso total a tu cripto — y si las pierdes, nadie en el mundo puede ayudarte a recuperarlo. Como principiante, no necesitas llegar ahí todavía.',
      },
      {
        type: 'warn',
        title: '⚠️ Importante recordar desde el principio',
        html: 'El cripto puede subir y bajar mucho en poco tiempo. No es como tener dinero en el banco. <strong>Nunca inviertas dinero que no puedas permitirte perder completamente.</strong> Esta regla es la más importante de toda la guía.',
      },
      {
        type: 'video',
        embedId: 'V9Kr2SujqHw',
        title: 'HOY SÍ vas a entender QUÉ es el BLOCKCHAIN',
        channel: 'Dot CSV',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 2 — Bitcoin
  // ═══════════════════════════════════════════════
  {
    slug: 'bitcoin',
    title: 'Bitcoin',
    emoji: '₿',
    subtitle: 'La primera criptomoneda — qué es, por qué es escasa y cómo se determina su precio',
    color: 'bg-amber-100',
    textColor: 'text-amber-700',
    xp: 100,
    quizQuestionCount: 5,
    content: [
      {
        type: 'paragraph',
        html: 'Bitcoin fue la primera criptomoneda del mundo. Fue creada en 2009 por una persona (o grupo) que usó el nombre <strong>Satoshi Nakamoto</strong>. Nadie sabe quién es en realidad — es uno de los grandes misterios del mundo digital. Satoshi publicó el código del Bitcoin en internet y desapareció.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el oro que cabe en tu teléfono',
        html: 'El oro vale porque es escaso — hay una cantidad limitada en la Tierra y es difícil extraerlo. Bitcoin funciona exactamente igual, pero en versión digital: solo pueden existir <strong>21 millones de bitcoins en total</strong>, nunca más. Están escritos así en el código y nadie puede cambiarlo. Es como si alguien hubiera creado una mina de oro de tamaño fijo y cuando se acaba, se acaba. Esa escasez es lo que hace que mucha gente lo vea como un "oro digital".',
      },
      {
        type: 'info',
        html: '<strong>Dato importante:</strong> De los 21 millones de bitcoins posibles, ya se han creado más de 19 millones. Los que faltan se van liberando muy lentamente con el tiempo. Se estima que el último bitcoin se creará alrededor del año 2140.',
      },
      {
        type: 'paragraph',
        html: 'Hoy en día, un solo bitcoin puede costar decenas de miles de dólares. Pero <strong>no tienes que comprar un bitcoin completo</strong>. Puedes comprar una fracción muy pequeña — tan pequeño como $10 o $20 dólares. Bitcoin se puede dividir en partes muy pequeñas.',
      },
      {
        type: 'info',
        html: '<strong>Dato curioso:</strong> La unidad más pequeña de Bitcoin se llama un <em>Satoshi</em>, en honor a su creador misterioso. 1 Bitcoin = 100,000,000 satoshis. Cuando compras $20 de bitcoin, estás comprando miles de satoshis. No necesitas comprar uno "entero".',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Cómo se determina el precio de Bitcoin?',
      },
      {
        type: 'paragraph',
        html: 'El precio de Bitcoin sube cuando más personas lo quieren comprar y baja cuando muchas personas lo quieren vender. No hay ninguna empresa ni gobierno que fije el precio — lo determina el mercado libre, millones de personas comprando y vendiendo en todo el mundo.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — las entradas del concierto',
        html: 'Imagina que hay exactamente 100 entradas para el concierto más esperado del año. Hay 10,000 personas que las quieren. ¿Qué pasa? El precio sube porque hay más demanda que oferta. Con Bitcoin pasa lo mismo: solo hay 21 millones en total, y cada año más personas, empresas e instituciones los quieren. Cuando más gente quiere comprar de lo que hay disponible, el precio sube. Cuando muchos quieren vender al mismo tiempo, el precio baja.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — las joyas de la abuela',
        html: 'Imagina que tu abuela tiene un collar de oro antiguo, único en el mundo. Si mucha gente lo quiere, puede pedir más dinero por él. Si nadie lo quiere en ese momento, vale menos — aunque siga siendo el mismo collar. Bitcoin es similar: su valor no depende de que alguien lo "respalde" oficialmente, sino de cuánta gente cree en él y lo quiere tener.',
      },
      {
        type: 'warn',
        title: '⚠️ El precio puede cambiar mucho y rápido',
        html: 'El precio de Bitcoin ha subido más de 10,000% en ciertos períodos históricos, pero también ha caído más del 70% en otros momentos. En 2022, cayó de $68,000 a $16,000 en menos de un año. Este nivel de cambio se llama <strong>volatilidad</strong> y es uno de los riesgos más importantes que debes entender antes de invertir.',
      },
      {
        type: 'video',
        embedId: 'C-3aYnhF6Io',
        title: 'Bitcoin: 4 claves para entenderlo y sus riesgos',
        channel: 'BBC News Mundo',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 3 — Ethereum y otras monedas
  // ═══════════════════════════════════════════════
  {
    slug: 'ethereum-y-otras',
    title: 'Ethereum y otras monedas',
    emoji: '⟠',
    subtitle: 'Más allá del Bitcoin — qué son las altcoins y cuáles son más confiables',
    color: 'bg-blue-50',
    textColor: 'text-blue-800',
    xp: 100,
    quizQuestionCount: 5,
    content: [
      {
        type: 'paragraph',
        html: 'Bitcoin no es la única criptomoneda. Existen miles de ellas. Las que no son Bitcoin se llaman <strong>altcoins</strong> (monedas alternativas, del inglés "alternative coins"). La más importante y reconocida de todas las altcoins es <strong>Ethereum (ETH)</strong>.',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Qué es Ethereum?',
      },
      {
        type: 'paragraph',
        html: 'Ethereum fue creado en 2015 por un joven programador llamado <strong>Vitalik Buterin</strong>. A diferencia de Bitcoin, que fue diseñado principalmente como dinero digital, Ethereum fue diseñado como una <strong>plataforma de programación</strong>. Los desarrolladores pueden construir aplicaciones, juegos y servicios financieros encima de Ethereum, similar a cómo los programadores construyen apps para iPhone o Android.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — Bitcoin es el oro, Ethereum es la electricidad',
        html: 'Imagina que Bitcoin es como el <strong>oro</strong> — algo que guardas como reserva de valor, como ahorro. Ethereum es más como la <strong>electricidad de un edificio</strong> — se usa para hacer funcionar todo lo que está adentro. Sin electricidad, los ascensores, las luces y los aparatos no funcionan. Sin Ethereum, muchas aplicaciones y servicios del mundo digital no pueden funcionar. Son complementarios, no competidores directos.',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Qué son los contratos inteligentes?',
      },
      {
        type: 'paragraph',
        html: 'Una de las cosas más especiales de Ethereum son los <strong>contratos inteligentes</strong> (smart contracts). Son acuerdos digitales que se ejecutan automáticamente cuando se cumplen ciertas condiciones — sin necesidad de abogados, notarios ni intermediarios.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la máquina de dulces automática',
        html: 'Imagina una máquina de dulces: metes una moneda, oprimes el botón del dulce que quieres, y la máquina te lo da automáticamente. No necesitas hablar con nadie, no necesitas que alguien confíe en ti — la máquina simplemente sigue las reglas programadas. Un contrato inteligente funciona igual: "Si Luis paga $X antes del viernes, automáticamente se transfiere la propiedad a su nombre." No hay intermediario, no hay demora, no hay posibilidad de que alguien se olvide o haga trampa.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Otras criptomonedas — las altcoins',
      },
      {
        type: 'paragraph',
        html: 'Además de Bitcoin y Ethereum, existen miles de otras criptomonedas. Algunas tienen propósitos específicos, otras son simplemente experimentos, y muchas no tienen ningún valor real. Algunas de las más conocidas incluyen <strong>Solana (SOL)</strong>, <strong>Cardano (ADA)</strong>, <strong>Litecoin (LTC)</strong>, y <strong>Ripple (XRP)</strong>.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el mercado de artesanías',
        html: 'Imagina un mercado donde Bitcoin es el <strong>dólar americano</strong> — lo conoce todo el mundo, es estable en comparación y es el más aceptado. Ethereum es como el <strong>euro</strong> — también muy establecido y usado ampliamente. Las demás altcoins son como las monedas de países pequeños o billetes de colección: algunas pueden valer algo, muchas no valen casi nada, y es muy difícil saber cuáles serán las próximas en tener valor.',
      },
      {
        type: 'warn',
        title: '⚠️ Cuidado con las altcoins desconocidas',
        html: 'Hay miles de criptomonedas que prometen hacerte rica rápidamente. La gran mayoría pierde todo su valor o desaparece en pocos años. <strong>Bitcoin y Ethereum son las más establecidas</strong> por tener más de una década de historia. Antes de comprar cualquier otra criptomoneda, investiga mucho. Si alguien te recomienda una moneda desconocida diciendo que va a explotar pronto, eso es casi siempre una señal de alarma.',
      },
      {
        type: 'video',
        embedId: '36t2S6NeUgU',
        title: 'Qué es Ethereum: explicación sencilla en español',
        channel: 'Bolsa para principiantes',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 4 — Minería y acciones de minería
  // ═══════════════════════════════════════════════
  {
    slug: 'mineria-y-acciones',
    title: 'Minería y acciones de minería',
    emoji: '⛏️',
    subtitle: 'Cómo se crean los bitcoins y cómo funcionan las empresas mineras',
    color: 'bg-purple-50',
    textColor: 'text-purple-900',
    xp: 100,
    quizQuestionCount: 5,
    content: [
      {
        type: 'paragraph',
        html: 'Los bitcoins no los crea un banco ni un gobierno. Se "minan" — no con pico y pala como el oro real, sino con computadoras muy potentes que resuelven problemas matemáticos extremadamente complejos. Cuando una computadora resuelve el problema primero, recibe una cantidad de bitcoin nuevo como recompensa. A esto se le llama <strong>minería de Bitcoin</strong>.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el concurso de matemáticas',
        html: 'Imagina un concurso nacional de matemáticas donde miles de participantes reciben el mismo problema difícil al mismo tiempo. La persona que lo resuelve primero gana un premio en efectivo. Cada 10 minutos hay un problema nuevo. Las computadoras mineras hacen exactamente esto — compiten entre sí para resolver el problema del momento, y la ganadora recibe bitcoins. Es un trabajo real que consume una cantidad enorme de electricidad.',
      },
      {
        type: 'info',
        html: '<strong>Dato interesante:</strong> La red de minería de Bitcoin consume más electricidad que algunos países enteros. Por eso las empresas mineras buscan ubicarse donde la electricidad sea barata — cerca de represas hidroeléctricas, parques solares o eólicos.',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Qué son las empresas mineras de Bitcoin?',
      },
      {
        type: 'paragraph',
        html: 'Hoy en día, la minería individual es casi imposible — las computadoras necesarias son tan caras y especializadas que solo las empresas grandes pueden hacerlo de manera rentable. Estas empresas construyen enormes centros de datos llenos de computadoras mineras que funcionan las 24 horas del día.',
      },
      {
        type: 'paragraph',
        html: 'Algunas de estas empresas mineras son públicas — cotizan en la bolsa de valores y cualquier persona puede comprar sus acciones. <strong>HUT 8</strong> (símbolo HUT) es un ejemplo conocido, pero hay otras como Marathon Digital Holdings (MARA), Riot Platforms (RIOT) y CleanSpark (CLSK).',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la mina de oro vs. las acciones de la minera',
        html: 'Hay dos formas de beneficiarte del precio del oro: (1) <strong>Comprar oro directamente</strong> — tienes el metal en tu poder. Si sube el precio, tú te beneficias directamente. (2) <strong>Comprar acciones de una empresa minera de oro</strong> — eres dueño de una parte de la empresa que extrae el oro. Si el precio del oro sube y la empresa trabaja bien, tus acciones también suben. Pero si la empresa tiene problemas — malos gerentes, costos altos, deudas — tus acciones pueden bajar aunque el oro siga caro. Con Bitcoin funciona exactamente igual.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Comprar Bitcoin directamente vs. acciones mineras',
      },
      {
        type: 'table',
        headers: ['Característica', 'Bitcoin directo', 'Acciones de empresa minera'],
        rows: [
          ['¿Dónde se compra?', 'Exchange (Coinbase, Kraken, etc.)', 'Bolsa de valores (Schwab, Fidelity, Robinhood)'],
          ['¿Qué posees?', 'Bitcoin directamente', 'Parte de una empresa'],
          ['Riesgo principal', 'Solo precio del Bitcoin', 'Precio del Bitcoin + riesgos de la empresa'],
          ['¿Requiere cuenta cripto?', 'Sí', 'No — usa tu cuenta de inversión normal'],
          ['¿Más volátil?', 'Volátil', 'Generalmente más volátil que Bitcoin'],
          ['Protección del gobierno', 'Ninguna', 'SIPC protege cuentas de corretaje'],
        ],
      },
      {
        type: 'warn',
        title: '⚠️ Las acciones mineras tienen doble riesgo',
        html: 'Cuando compras acciones de una empresa minera, el precio puede bajar por <strong>dos razones</strong>: (1) si cae el precio de Bitcoin, y (2) si la empresa tiene sus propios problemas — deudas, altos costos de electricidad, malos gerentes, competencia fuerte, o errores estratégicos. Históricamente, las acciones mineras bajan más que Bitcoin cuando el mercado cae, y suben más cuando sube. Mayor riesgo, mayor volatilidad en ambas direcciones.',
      },
      {
        type: 'video',
        embedId: 'GjOs_W3wilc',
        title: 'Cómo funciona la minería de criptomonedas',
        channel: 'Xataka',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 5 — Riesgos
  // ═══════════════════════════════════════════════
  {
    slug: 'riesgos',
    title: 'Riesgos del cripto',
    emoji: '⚠️',
    subtitle: 'Educación honesta sobre todo lo que puede salir mal — es esencial saberlo',
    color: 'bg-rose-50',
    textColor: 'text-rose-800',
    xp: 125,
    quizQuestionCount: 5,
    content: [
      {
        type: 'warn',
        title: 'Regla número uno — antes de todo lo demás',
        html: '<strong>Nunca inviertas dinero que no puedas permitirte perder completamente.</strong> El cripto es una inversión de alto riesgo. No es como tener dinero en el banco. Esto no es exageración — es la realidad del mercado.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 1 — Volatilidad extrema',
      },
      {
        type: 'paragraph',
        html: 'El precio del cripto puede cambiar de manera drástica en muy poco tiempo. Bitcoin ha subido más del 1,000% en períodos positivos, pero también ha caído más del 70% en períodos negativos. En 2022, Bitcoin cayó de $68,000 a $16,000 en menos de un año — una pérdida del 76%. Es completamente normal que tu inversión valga mucho menos de lo que pagaste en algún momento.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la montaña rusa',
        html: 'Imagina subir a una montaña rusa donde no sabes cuándo sube ni cuándo baja, y puedes bajar a cualquier velocidad en cualquier momento. Eso es invertir en cripto. Las personas que han ganado dinero con cripto generalmente son las que tuvieron paciencia para aguantar las bajadas sin vender. Pero eso requiere mucha fortaleza emocional y sobre todo <strong>no necesitar ese dinero pronto</strong>.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 2 — Sin protección del gobierno',
      },
      {
        type: 'paragraph',
        html: 'El dinero en tu cuenta bancaria está protegido por el gobierno a través del <strong>FDIC</strong> — hasta $250,000 por persona. Si el banco cierra, recuperas tu dinero. El cripto <strong>no tiene ninguna protección similar</strong>. Si la plataforma donde guardas tu cripto cierra, es hackeada, o desaparece, puedes perder todo sin ningún recurso legal.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — cuenta bancaria vs. caja fuerte en casa',
        html: 'Una cuenta en Coinbase es como una cuenta bancaria: el banco (Coinbase) guarda tu dinero, tú tienes un usuario y contraseña, y si la olvidas te pueden ayudar. Pero si el banco falla, dependes de que alguien te lo devuelva. Una billetera propia (auto-custodia) es como una caja fuerte en tu casa: nadie más tiene la llave, nadie puede quitarte lo tuyo — pero si pierdes la combinación, tampoco hay nadie que pueda abrirla por ti. Por eso dicen "not your keys, not your coins" — si la plataforma guarda tus claves, estás confiando en ella.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 3 — Error humano irreversible',
      },
      {
        type: 'paragraph',
        html: 'En el mundo del cripto, muchos errores no se pueden deshacer. Si mandas cripto a la dirección equivocada, se pierde para siempre — no hay "cancelar", no hay servicio al cliente que lo recupere.<br><br>Si tienes tu propia billetera (auto-custodia), la clave que protege todo es la <strong>frase semilla</strong> — esas 12 a 24 palabras especiales. Si olvidas la contraseña de tu billetera pero tienes la frase semilla, puedes recuperar todo en un dispositivo nuevo. Pero si pierdes la frase semilla, el acceso se pierde para siempre — no importa cuánta tecnología o cuántos abogados tengas. Se estima que millones de bitcoins están bloqueados para siempre porque sus dueños perdieron su frase semilla. <strong>Si usas Coinbase u otra plataforma, este riesgo no aplica</strong> — ellos gestionan las claves por ti.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 4 — Estafas sofisticadas',
      },
      {
        type: 'paragraph',
        html: 'El mundo del cripto está lleno de fraudes, y las personas mayores son especialmente el objetivo. Los estafadores saben que el cripto es confuso y usan esa confusión para robar dinero. Si alguien te promete ganancias garantizadas, te presiona para invertir rápido, o te pide que mandes cripto antes de recibir algo — es una estafa. <strong>La próxima lección cubre todo esto en detalle</strong> porque es extremadamente importante.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 5 — Impuestos (IRS)',
      },
      {
        type: 'paragraph',
        html: 'En los Estados Unidos, las ganancias de cripto se reportan al <strong>IRS</strong> y pagan impuestos, igual que cualquier otra inversión. Cada vez que vendes cripto por más de lo que pagaste, tienes una ganancia de capital que debes declarar. Es tu responsabilidad mantener registros de todo — cuándo compraste, cuánto pagaste, cuándo vendiste y por cuánto.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 6 — Incertidumbre regulatoria',
      },
      {
        type: 'paragraph',
        html: 'Los gobiernos de todo el mundo están todavía decidiendo cómo regular el cripto. En algunos países ya lo han restringido fuertemente. En Estados Unidos, las reglas cambian constantemente. Cambios en las leyes pueden afectar el precio o la disponibilidad del cripto en cualquier momento.',
      },
      {
        type: 'checklist',
        items: [
          'Solo invierte lo que puedes perder al 100% sin que afecte tu vida',
          'Nunca te apresures — las "oportunidades únicas" son señal de alerta',
          'Si alguien te presiona para invertir rápido, es una estafa',
          'Las ganancias garantizadas no existen en cripto — absolutamente nunca',
          'No inviertas bajo la presión de nadie, ni de familia',
          'Guarda tus contraseñas en papel, en lugar seguro en casa',
          'Diversifica — no pongas todo en una sola moneda',
          'Si algo parece demasiado bueno para ser verdad, es porque no es verdad',
          'Guarda registro de todo para el IRS',
        ],
      },
      {
        type: 'video',
        embedId: 'i2Jz12gOEL4',
        title: 'Lo que no te cuentan de invertir en criptomonedas',
        channel: 'CNN en Español',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 6 — Protégete de estafas
  // ═══════════════════════════════════════════════
  {
    slug: 'protegete-de-estafas',
    title: 'Protégete de las estafas',
    emoji: '🛡️',
    subtitle: 'Las estafas de cripto son muy comunes — aprende a reconocerlas y protegerte',
    color: 'bg-red-50',
    textColor: 'text-red-900',
    xp: 175,
    quizQuestionCount: 7,
    content: [
      {
        type: 'warn',
        title: '🚨 La regla más importante de toda esta guía',
        html: '<strong>Ninguna persona legítima — ningún banco, ninguna plataforma, ningún experto, ningún familiar — te pedirá jamás tus contraseñas, tu frase semilla, ni que mandes cripto primero para recibir algo después.</strong> Si alguien te pide cualquiera de estas cosas, es una estafa. Sin excepción.',
      },
      {
        type: 'paragraph',
        html: 'Las estafas de cripto son especialmente peligrosas porque los pagos en cripto son <strong>irreversibles</strong>. A diferencia de una tarjeta de crédito donde puedes disputar el cargo, o una transferencia bancaria que a veces se puede revertir, el cripto enviado a un estafador está perdido para siempre. Por eso los estafadores aman el cripto.',
      },
      {
        type: 'scam-entry',
        name: '"Te doblo el dinero" — Estafas de regalo falso',
        emoji: '🎭',
        how: 'Los estafadores crean cuentas falsas en redes sociales haciéndose pasar por Elon Musk, Bill Gates, u otras celebridades. Publican mensajes como: "Estoy celebrando mi cumpleaños — manda 0.1 Bitcoin y te mando 0.2 de vuelta." A veces incluso hacen transmisiones en vivo falsas con videos reales de estas personas. Cuando envías el cripto, desaparece para siempre.',
        analogy: 'Es como si alguien pusiera un letrero en la calle diciendo: "Tira un billete de $100 por esta ranura y te devolvemos $200." Nadie hace eso en la vida real — es un robo disfrazado de regalo.',
        redFlags: [
          'Prometen devolverte más de lo que mandas',
          'Usan nombres de celebridades o figuras conocidas',
          'Dicen que es por tiempo limitado',
          'El perfil de redes sociales es reciente o tiene pocos seguidores reales',
          'No hay forma de contactar a la celebridad real para verificar',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Estafas románticas — el novio o novia virtual',
        emoji: '💔',
        how: 'Alguien te contacta en redes sociales o apps de citas. Son muy amables, guapos/as, y te dedican mucho tiempo durante semanas o meses. Construyen una relación emocional profunda. Luego, "de casualidad" mencionan que invierten en cripto y están ganando mucho dinero. Te ofrecen ayudarte. O de repente tienen una emergencia — un accidente, un problema con aduana, una deuda — y necesitan cripto urgentemente. Una vez que mandas el cripto, desaparecen.',
        analogy: 'Es como conocer a alguien en el mercado que se vuelve tu mejor amigo/a durante meses, te regala atención y tiempo, y cuando ya confías en esa persona al 100%, te pide prestado dinero para una "emergencia terrible" y nunca vuelves a verle.',
        redFlags: [
          'Nunca quieren hablar por videollamada (o usan excusas para no hacerlo)',
          'Sus fotos se ven demasiado perfectas (usa búsqueda inversa de imágenes para verificar)',
          'Dicen estar en el extranjero — militares, médicos, ingenieros en alta mar',
          'La relación avanza muy rápido emocionalmente',
          'Eventualmente mencionan cripto, inversiones, o una emergencia que necesita dinero',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Suplantación de familiar — "Abuela, soy yo"',
        emoji: '👪',
        how: 'Recibes un mensaje de texto, llamada, o mensaje de WhatsApp de alguien que dice ser tu nieto/a, hijo/a, o familiar cercano. Dice que tuvo un accidente, está en problemas con la ley, o necesita ayuda urgente. Te piden que mandes dinero en cripto a una dirección específica y que no le digas a nadie más de la familia. A veces usan voces falsas creadas con inteligencia artificial.',
        analogy: 'Es la versión moderna de la estafa clásica del "nieto en apuros". Antes llamaban por teléfono. Ahora usan WhatsApp, mensajes de texto, y hasta pueden imitar la voz con tecnología. La urgencia y el secreto son las señales clave.',
        redFlags: [
          'Piden que lo mantengas en secreto de otros familiares',
          'Crean una urgencia extrema — "necesito el dinero ahora mismo"',
          'Piden cripto específicamente (porque no se puede recuperar)',
          'Dicen estar en un lugar donde no puedes llamarles directamente',
          'La historia cambia si haces preguntas',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Inversiones con ganancias garantizadas',
        emoji: '📈',
        how: 'Alguien — un conocido, un contacto en redes sociales, o incluso un "experto" — te ofrece una "oportunidad de inversión" en cripto que promete ganancias fijas: "te garantizo el 30% mensual", "duplicamos tu dinero en 90 días", "plataforma exclusiva que siempre sube". Al principio te pueden mostrar ganancias falsas en pantalla. Cuando quieres retirar tu dinero, hay problemas, excusas, más cargos, hasta que desaparece todo.',
        analogy: 'En el mundo de las inversiones legítimas, nadie puede garantizar ganancias fijas. Ni los mejores bancos del mundo, ni Warren Buffett. Si alguien te garantiza un porcentaje fijo de ganancia, está mintiendo. Es como alguien que dice que puede predecir exactamente el resultado de cada partido de fútbol — imposible.',
        redFlags: [
          '"Garantizamos" o "aseguramos" cualquier porcentaje de ganancia',
          'El rendimiento prometido es muy superior al de inversiones normales',
          'Presionan para que inviertas rápido antes de que "se acaben los cupos"',
          'Dificultan el retiro del dinero con excusas o cargos adicionales',
          'La plataforma no tiene dirección física ni información verificable',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Gurús falsos en redes sociales',
        emoji: '📱',
        how: 'En Instagram, TikTok, YouTube y WhatsApp abundan personas que muestran carros de lujo, ropa cara y viajes exóticos, diciendo que todo lo lograron con cripto. Ofrecen vender sus "señales" (tips de cuándo comprar y vender), cursos carísimos, o invitación a grupos privados de "inversión". La riqueza que muestran es falsa o fue ganada vendiéndote sus cursos a ti, no con cripto.',
        analogy: 'Es como alguien que se viste de médico en internet, muestra fotos en hospitales lujosos, y te cobra por "recetas exclusivas". No verificaste si realmente estudió medicina. En cripto, cualquiera puede decir que es experto — muy pocos realmente lo son.',
        redFlags: [
          'Muestran riqueza excesiva — carros de lujo, mansiones, yates — sin contexto verificable',
          'Cobran por "señales", grupos VIP, o acceso a información exclusiva',
          'Presionan para que actúes rápido ("esta señal vence en 2 horas")',
          'No tienen historial verificable de predicciones acertadas',
          'Piden que recomiendes el grupo a otros (modelo de pirámide)',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Phishing — correos y mensajes falsos',
        emoji: '🎣',
        how: 'Recibes un correo electrónico o mensaje de texto que parece ser de Coinbase, PayPal, el IRS, o tu banco. El diseño se ve oficial y profesional. El mensaje dice que tu cuenta fue hackeada, que tienes un pago pendiente, o que debes verificar tu identidad inmediatamente. Te lleva a un sitio web falso que luce idéntico al real. Si introduces tu contraseña o frase semilla, los estafadores la capturan y vacían tu cuenta.',
        analogy: 'Es como recibir una carta que parece ser del banco con el logo exacto y todo, pidiéndote que llames a un número de teléfono. Cuando llamas, no es tu banco — es un estafador que ya tiene toda la información de tu carta y quiere convencerte de darle más datos.',
        redFlags: [
          'El correo viene de una dirección extraña (ej: support@coinbase-security.net en lugar de coinbase.com)',
          'Crea urgencia — "tu cuenta será suspendida en 24 horas"',
          'Pide que entres tu contraseña, frase semilla o número de tarjeta',
          'El enlace en el mensaje no lleva al sitio real (pasa el dedo por encima sin tocar para ver el destino)',
          'Errores de ortografía o gramática en el mensaje',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Soporte técnico falso',
        emoji: '💻',
        how: 'Recibes una llamada o aparece una ventana emergente en tu teléfono o computadora diciendo que tu dispositivo o cuenta fue hackeada. La persona que llama dice ser de Microsoft, Apple, Coinbase, o tu banco. Te pide que descargues un programa de acceso remoto para "arreglar el problema". Una vez que lo haces, tienen control total de tu dispositivo y pueden ver tus contraseñas y vaciar tus cuentas.',
        analogy: 'Ninguna empresa legítima te llama por teléfono sin que tú lo hayas solicitado primero para decirte que tu computadora tiene un virus. Es como si un "médico" apareciera en tu puerta sin cita para decirte que estás enfermo y que necesita entrar a tu casa a revisar todo.',
        redFlags: [
          'Te llaman sin que hayas pedido ayuda',
          'Piden que descargues software de acceso remoto (TeamViewer, AnyDesk, etc.)',
          'Crean pánico diciéndote que tu cuenta o dispositivo está en peligro inmediato',
          'Piden que pagues en cripto para "resolver el problema" o "asegurar tu cuenta"',
          'Una ventana emergente con un número de teléfono para llamar',
        ],
      },
      {
        type: 'scam-entry',
        name: 'Urgencia y FOMO — "Solo quedan 2 horas"',
        emoji: '⏰',
        how: 'Un estafador crea una sensación de urgencia artificial para que no tengas tiempo de pensar ni de consultar con alguien de confianza. Frases como "esta oportunidad desaparece esta noche", "solo quedan 3 cupos", "el precio sube mañana y perderás tu oportunidad", "tienes que decidir ahora". El objetivo es que actúes por miedo antes de que tu sentido común te detenga.',
        analogy: 'Los vendedores de electrodomésticos a veces dicen "esta oferta es solo hoy". Eso puede ser verdad en una tienda real. Pero en el mundo de las inversiones, las verdaderas oportunidades no desaparecen en 2 horas. Si alguien te presiona para tomar una decisión financiera urgente, eso es la señal más clara de que algo está mal.',
        redFlags: [
          '"Solo quedan pocas horas/días para esta oportunidad"',
          '"El precio sube mañana — actúa hoy"',
          '"Cupos limitados — no te quedes sin lugar"',
          'Presión para que no consultes con tu familia o un asesor',
          'Cualquier decisión financiera que requiera actuar en menos de 24 horas',
        ],
      },
      {
        type: 'warn',
        title: '🚨 Repite esto hasta memorizarlo',
        html: '<strong>Ninguna persona legítima te pedirá tus contraseñas, tu frase semilla, ni que mandes cripto primero.</strong><br><br>Si tienes duda sobre si algo es una estafa, la respuesta correcta siempre es esperar, no hacer nada, y consultar con alguien de confianza antes de actuar. El tiempo siempre está de tu lado cuando se trata de proteger tu dinero.',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 7 — Por qué puede subir el valor
  // ═══════════════════════════════════════════════
  {
    slug: 'por-que-sube-el-valor',
    title: '¿Por qué puede subir el valor?',
    emoji: '📈',
    subtitle: 'Los factores que pueden impulsar el precio — presentados con contexto de riesgo',
    color: 'bg-emerald-50',
    textColor: 'text-emerald-900',
    xp: 100,
    quizQuestionCount: 5,
    content: [
      {
        type: 'info',
        html: '<strong>Nota importante:</strong> Esta lección explica factores que <em>podrían</em> influir en el precio del cripto. No es una recomendación de inversión ni una predicción. El mercado es impredecible y el valor puede bajar tanto como puede subir.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Factor 1 — Oferta limitada y demanda creciente',
      },
      {
        type: 'paragraph',
        html: 'La regla más básica del mercado: cuando hay poca cantidad de algo y mucha gente lo quiere, el precio sube. Bitcoin tiene las dos condiciones al mismo tiempo: cantidad máxima fija (21 millones) y demanda que ha ido creciendo con el tiempo.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el terreno frente al mar',
        html: 'Los terrenos frente al mar son caros porque no se pueden fabricar más — hay una cantidad fija de costa en el mundo. Si cada año más personas quieren vivir frente al mar, el precio de esos terrenos tiende a subir. Bitcoin tiene una característica similar: la cantidad total es fija para siempre, programada en su código. Si la demanda crece, el precio tiene presión alcista.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Factor 2 — El Halving (La reducción a la mitad)',
      },
      {
        type: 'paragraph',
        html: 'Cada aproximadamente 4 años, la recompensa que reciben los mineros de Bitcoin se reduce a la mitad. Este evento se llama el <strong>Halving</strong>. Cuando hay menos bitcoin nuevo entrando al mercado, la escasez aumenta. Los halvings históricos de 2012, 2016 y 2020 han sido seguidos de períodos de precios más altos, aunque no de manera inmediata ni garantizada. El último halving fue en abril de 2024.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la cosecha de café',
        html: 'Imagina que una región produce 1,000 sacos de café especial al mes. De repente, una nueva ley reduce la cosecha permitida a 500 sacos al mes. Si la cantidad de personas que quieren ese café sigue igual o crece, el precio por saco muy probablemente va a subir. El halving de Bitcoin hace algo parecido: reduce la nueva oferta que llega al mercado.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Factor 3 — Adopción institucional',
      },
      {
        type: 'paragraph',
        html: 'Durante años, el cripto fue visto como algo marginal. Eso ha cambiado significativamente. En enero de 2024, el gobierno de EE.UU. aprobó los primeros <strong>ETFs de Bitcoin al contado</strong> — fondos de inversión donde grandes instituciones financieras como BlackRock, Fidelity y Vanguard pueden ofrecer Bitcoin a sus clientes. Esto abrió la puerta a billones de dólares en inversión institucional.',
      },
      {
        type: 'paragraph',
        html: 'Además, empresas conocidas como MicroStrategy, Tesla y Square han incluido Bitcoin en sus reservas corporativas. Cada vez más empresas aceptan cripto como forma de pago. Todo esto representa nueva demanda que antes no existía.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el barrio que se pone de moda',
        html: 'Imagina un vecindario donde antes solo vivían artistas y personas jóvenes con poco dinero. De repente, grandes empresas y restaurantes famosos abren locales ahí. El barrio se vuelve "cool". Los precios de las propiedades suben porque ahora hay más demanda — y más demanda de un tipo diferente (institucional, no solo individual). La adopción masiva del cripto por instituciones grandes tiene un efecto similar.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Factor 4 — Uso real en el mundo',
      },
      {
        type: 'paragraph',
        html: 'Cada año más personas usan cripto para pagos reales, especialmente en países con monedas inestables. En El Salvador, Bitcoin es moneda de curso legal. Millones de personas usan cripto para enviar remesas a sus familias en otros países de manera más rápida y barata que los servicios tradicionales. A más uso real, más demanda del activo.',
      },
      {
        type: 'warn',
        title: '⚠️ Estos factores no garantizan que el precio siga subiendo',
        html: 'El mercado de cripto es impredecible. Noticias negativas, nuevas regulaciones, pánico generalizado, o problemas técnicos pueden causar caídas enormes sin previo aviso. Históricamente el precio ha subido a largo plazo, pero el camino ha tenido bajadas del 50%, 70% y hasta 90%. <strong>Ningún análisis puede predecir con certeza lo que pasará.</strong>',
      },
      {
        type: 'video',
        embedId: '1SzQ1lS0cP8',
        title: 'Bitcoin: ¿qué hace que su precio suba y baje tan fácilmente?',
        channel: 'DW Español',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LECCIÓN 8 — Consejos para invertir
  // ═══════════════════════════════════════════════
  {
    slug: 'consejos-para-invertir',
    title: 'Consejos para invertir',
    emoji: '✅',
    subtitle: 'Guía práctica y conservadora para comenzar — si decides hacerlo',
    color: 'bg-teal-50',
    textColor: 'text-teal-900',
    xp: 125,
    quizQuestionCount: 5,
    content: [
      {
        type: 'info',
        html: 'Esta lección asume que ya entiendes los riesgos de la lección anterior y que estás considerando comenzar con una cantidad pequeña. Estos consejos son conservadores y están pensados para protegerte, no para hacerte rica rápido.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 1 — Empieza muy pequeño',
      },
      {
        type: 'paragraph',
        html: 'Si quieres experimentar con cripto, empieza con una cantidad que puedas perder completamente sin que afecte tu vida. Muchas personas comienzan con $25 o $50 solo para aprender cómo funciona — ver cómo comprar, cómo se mueve el precio, cómo retirarlo. Esto es una inversión en educación, no en ganancia.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la muestra del mercado',
        html: 'Cuando vas al mercado y la señora te ofrece una muestra de su queso nuevo, no compras cinco kilos sin haberlo probado primero. Empezar pequeño en cripto es como esa muestra — pruebas cómo funciona, ves si te sientes cómoda con los altibajos, y decides si quieres más.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 2 — Usa plataformas establecidas y reconocidas',
      },
      {
        type: 'paragraph',
        html: 'No todas las plataformas de cripto son iguales. Usa plataformas que tienen años de historia, millones de usuarios, y están reguladas. Algunos ejemplos confiables son <strong>Coinbase</strong> (muy fácil de usar, tiene versión en español), <strong>Kraken</strong>, y para acciones, tu corredor de bolsa habitual (Fidelity, Schwab, Robinhood). Evita plataformas desconocidas que alguien te recomendó en redes sociales.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 3 — No vendas por pánico',
      },
      {
        type: 'paragraph',
        html: 'Cuando el precio baja mucho — y va a bajar, es inevitable — muchas personas se asustan y venden, convirtiendo una pérdida temporal en una pérdida permanente. Los inversionistas que han tenido mejores resultados históricamente son los que aguantaron los momentos difíciles sin vender. Esto solo es posible si <strong>invertiste dinero que no necesitas a corto plazo</strong>.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la planta que crece despacio',
        html: 'Si plantas un árbol de mango y al mes no tiene frutos, no lo arrancas de raíz. Lo riegas y esperas. Algunas personas en cripto plantan su semilla y la sacan antes de que madure porque se asustaron con una tormenta. Las tormentas son normales — son parte del proceso.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 4 — Diversifica',
      },
      {
        type: 'paragraph',
        html: 'No pongas todos tus ahorros en cripto, ni todo el cripto en una sola moneda. Si decides invertir en cripto, que sea solo una pequeña parte de tus inversiones totales. El resto en cosas más estables: cuentas de ahorro, bonos del gobierno, fondos de inversión diversificados. El cripto puede ser un pequeño complemento, no toda la estrategia.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — no pongas todos los huevos en una canasta',
        html: 'Si cargas todos tus huevos en una sola canasta y tropiezas, los pierdes todos. Si los distribuyes en varias canastas, un tropiezo solo rompe algunos. En inversiones, esto se llama diversificación — es uno de los principios más importantes de las finanzas personales.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 5 — Guarda registro de todo para el IRS',
      },
      {
        type: 'paragraph',
        html: 'En EE.UU., las ganancias de cripto se declaran al IRS como ganancias de capital. Guarda un registro simple: fecha de compra, cuánto pagaste, fecha de venta, cuánto recibiste. Puede ser en un cuaderno o en una hoja de cálculo. Si no guardas registros, la temporada de impuestos puede ser muy complicada.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 6 — Protege tus contraseñas como si fueran dinero en efectivo',
      },
      {
        type: 'paragraph',
        html: 'Tu <strong>frase semilla</strong> (seed phrase) — una serie de 12 o 24 palabras — es la llave maestra de tu cripto. Quien la tenga, tiene tu cripto. Escríbela a mano en papel y guárdala en un lugar físico seguro en tu casa. <strong>Nunca</strong> la fotografíes, la guardes en tu teléfono, la mandes por correo o por WhatsApp, ni se la des a nadie — absolutamente nadie.',
      },
      {
        type: 'checklist',
        items: [
          'Empieza con una cantidad pequeña que puedas perder completamente',
          'Usa solo plataformas reconocidas con años de historia',
          'No vendas en pánico cuando el precio baje — ya va a bajar',
          'El cripto debe ser solo una pequeña parte de tus inversiones totales',
          'Guarda registro de compras y ventas para tus impuestos',
          'Escribe tu frase semilla en papel y guárdala en lugar seguro',
          'Nunca compartas contraseñas ni frase semilla con nadie',
          'Consulta con un asesor financiero antes de invertir cantidades significativas',
        ],
      },
      {
        type: 'info',
        html: '<strong>Lo más importante:</strong> El mejor inversionista no es el que gana más rápido, sino el que no pierde lo que no puede permitirse perder. La paciencia y la cautela son tus mejores herramientas.',
      },
    ],
  },
]

// ═══════════════════════════════════════════════
// GLOSARIO
// ═══════════════════════════════════════════════
export const GLOSSARY_ENTRIES = [
  {
    term: 'Bitcoin (BTC)',
    emoji: '₿',
    definition: 'La primera criptomoneda del mundo, creada en 2009. Solo existirán 21 millones de bitcoins en total. Muchos la llaman "oro digital" porque es escasa y sirve como reserva de valor.',
  },
  {
    term: 'Ethereum (ETH)',
    emoji: '⟠',
    definition: 'La segunda criptomoneda más importante. A diferencia de Bitcoin, Ethereum es una plataforma para crear aplicaciones y contratos inteligentes. Fue creada en 2015 por Vitalik Buterin.',
  },
  {
    term: 'Blockchain',
    emoji: '🔗',
    definition: 'Un registro digital compartido por miles de computadoras al mismo tiempo. Nadie puede cambiarlo porque todos tienen una copia. Es como un cuaderno que todos tienen y todos vigilan.',
  },
  {
    term: 'Altcoin',
    emoji: '🪙',
    definition: 'Cualquier criptomoneda que no sea Bitcoin. Ethereum, Solana, Cardano son altcoins. Existen miles, la mayoría muy riesgosas o sin valor real.',
  },
  {
    term: 'Wallet (billetera digital)',
    emoji: '👛',
    definition: 'El lugar donde "guardas" tu cripto. No guarda cripto físicamente — guarda las contraseñas que te dan acceso a tu cripto en el blockchain. Puede estar en una plataforma (exchange) o en un dispositivo propio.',
  },
  {
    term: 'Exchange',
    emoji: '🏦',
    definition: 'Una plataforma donde puedes comprar y vender criptomonedas. Ejemplos: Coinbase, Kraken, Binance. Es como una casa de cambio digital. No todas son igualmente seguras.',
  },
  {
    term: 'Llave privada / Frase semilla',
    emoji: '🔑',
    definition: 'Tu contraseña maestra del cripto. La frase semilla son 12 o 24 palabras que la representan. Si la pierdes, pierdes tu cripto para siempre. Si alguien la roba, puede quedarse con todo. Guárdala solo en papel.',
  },
  {
    term: 'Minería',
    emoji: '⛏️',
    definition: 'El proceso de usar computadoras muy potentes para crear nuevos bitcoins resolviendo problemas matemáticos complejos. La computadora que resuelve el problema primero recibe bitcoin como recompensa.',
  },
  {
    term: 'Halving',
    emoji: '✂️',
    definition: 'Cada 4 años aproximadamente, la recompensa de los mineros se reduce a la mitad. Hay menos bitcoin nuevo disponible, lo que puede aumentar la escasez. El último halving fue en abril de 2024.',
  },
  {
    term: 'ETF de Bitcoin',
    emoji: '📊',
    definition: 'Un fondo de inversión que sigue el precio de Bitcoin, aprobado en EE.UU. en 2024. Permite invertir en Bitcoin a través de una cuenta de bolsa tradicional sin comprar cripto directamente.',
  },
  {
    term: 'Volatilidad',
    emoji: '📉',
    definition: 'Cuánto sube y baja el precio. El cripto tiene volatilidad muy alta — puede subir o bajar 20% en un solo día. Es la razón principal de su riesgo como inversión.',
  },
  {
    term: 'FOMO',
    emoji: '😰',
    definition: '"Fear Of Missing Out" — miedo a perderse una oportunidad. Los estafadores usan el FOMO para presionarte a actuar rápido sin pensar. Si sientes urgencia de invertir ahora mismo, es una señal de alarma.',
  },
  {
    term: 'Satoshi',
    emoji: '🔬',
    definition: 'La unidad más pequeña de Bitcoin. 1 Bitcoin = 100,000,000 satoshis. No necesitas comprar un bitcoin entero — puedes comprar fracciones muy pequeñas por pocos dólares.',
  },
  {
    term: 'Contrato inteligente',
    emoji: '📋',
    definition: 'Un acuerdo digital que se ejecuta automáticamente cuando se cumplen ciertas condiciones, sin necesidad de intermediarios. Es la base de muchas aplicaciones en Ethereum.',
  },
  {
    term: 'Satoshi Nakamoto',
    emoji: '👤',
    definition: 'El nombre (o seudónimo) de la persona o grupo que creó Bitcoin en 2009. Nadie sabe quién es en realidad. Publicó el código del Bitcoin y desapareció misteriosamente.',
  },
  {
    term: 'Descentralizado',
    emoji: '🌐',
    definition: 'Sin un centro de control único. Bitcoin y Ethereum no tienen un jefe ni una empresa dueña — funcionan gracias a miles de computadoras en todo el mundo que trabajan juntas.',
  },
  {
    term: 'Frase semilla (seed phrase)',
    emoji: '📝',
    definition: 'Una serie de 12 o 24 palabras que es la llave maestra de tu cripto. Es extremadamente importante guardarla solo en papel, en un lugar seguro, y nunca compartirla con nadie.',
  },
  {
    term: 'FDIC',
    emoji: '🏛️',
    definition: 'La Federal Deposit Insurance Corporation — entidad del gobierno de EE.UU. que protege el dinero en cuentas bancarias hasta $250,000. El cripto NO tiene esta protección.',
  },
]
