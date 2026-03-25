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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: '¿Qué es lo primero que piensas cuando escuchas la palabra "Bitcoin"?',
        options: [
          {
            text: 'Es muy arriesgado o es para criminales',
            response: 'Eso es lo más común. Esta lección te da contexto real para evaluar ese riesgo — y separar los mitos de la realidad.',
          },
          {
            text: 'No sé exactamente qué es',
            response: 'Perfecto punto de partida. Vamos desde el principio, sin asumir nada.',
          },
          {
            text: 'La gente gana mucho dinero con eso',
            response: 'Eso es parte de la historia — y también hay otra parte importante. Esta lección te muestra las dos.',
          },
          {
            text: 'Un familiar o amigo me habló de eso',
            response: 'Muy común. Al terminar esta lección vas a poder tener esa conversación con mucho más contexto.',
          },
        ],
      },

      // ── Sección 1: ¿Qué es? ─────────────────────────────────────────────
      {
        type: 'paragraph',
        html: 'Cada vez más personas — incluyendo muchas en América Latina — buscan formas de proteger sus ahorros frente al alza de precios, la inestabilidad de monedas locales, o simplemente quieren entender de qué habla todo el mundo. Esta lección te da el lenguaje para entender qué es el cripto, antes de decidir si es algo para ti.',
      },
      {
        type: 'paragraph',
        html: 'Una <strong>criptomoneda</strong> es dinero que existe solo en forma digital — no hay billetes ni monedas físicas que puedas tocar. No lo controla ningún banco ni ningún gobierno. En cambio, funciona gracias a una tecnología llamada <strong>blockchain</strong>.',
      },
      {
        type: 'reveal',
        prompt: '¿Quién controla las reglas y el precio de Bitcoin?',
        answer: '<strong>Nadie.</strong> No hay banco central ni gobierno que lo controle. Las reglas están escritas en el código y nadie puede cambiarlas. El precio lo determinan millones de personas comprando y vendiendo en todo el mundo — igual que el precio del oro o de cualquier cosa que la gente valora.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el cuaderno compartido',
        html: 'Imagina que en tu vecindario todos llevan un cuaderno donde anotan quién le pagó a quién. Cuando Rosa le paga $20 a Carmen, <em>todos</em> en el vecindario lo anotan en su cuaderno al mismo tiempo. Nadie puede borrar ni cambiar un pago porque <strong>todos tienen una copia idéntica</strong>. Si alguien intenta hacer trampa y cambiar una anotación, el resto del vecindario lo detecta de inmediato. Eso es exactamente cómo funciona el blockchain — pero en lugar de un vecindario, son millones de computadoras en todo el mundo.',
      },
      {
        type: 'paragraph',
        html: 'El blockchain es un registro digital compartido por miles de computadoras al mismo tiempo, en todo el mundo. Nadie lo controla solo — es como si fuera propiedad de todos y de nadie al mismo tiempo. Cada transacción queda grabada para siempre y nadie puede borrarla ni falsificarla.',
      },
      {
        type: 'quick-check',
        question: '¿Verdadero o falso? Si alguien tuviera suficiente dinero, podría cambiar una transacción en el blockchain.',
        options: [
          {
            text: 'Verdadero — con suficiente poder se puede todo',
            explanation: 'No exactamente. Como todos tienen una copia idéntica, cambiar una transacción requeriría cambiar las copias de millones de computadoras al mismo tiempo — prácticamente imposible. Eso es lo que hace al blockchain tan seguro.',
          },
          {
            text: 'Falso — todos tienen una copia idéntica',
            correct: true,
            explanation: 'Correcto. Cambiar una sola copia no sirve de nada porque las otras millones de copias no coincidirían. Es como intentar falsificar un documento cuando todos los testigos del mundo tienen la copia original.',
          },
        ],
      },

      // ── Sección 2: ¿Cómo se diferencia del dinero normal? ───────────────
      {
        type: 'heading',
        level: 2,
        text: '¿En qué se diferencia del dinero normal?',
      },
      {
        type: 'misconception',
        myth: 'El cripto es secreto y anónimo — nadie sabe quién hace qué transacción, por eso lo usan los criminales.',
        reality: 'El blockchain es completamente público. Cualquier persona puede ver todas las transacciones. Lo que no se ve es el nombre — solo la dirección de código. Es más transparente que un banco, no menos. Por eso los investigadores y gobiernos han podido rastrear y recuperar fondos en casos de fraude.',
      },
      {
        type: 'table',
        headers: ['Dinero normal (dólar)', 'Criptomoneda (Bitcoin)'],
        rows: [
          ['Lo controla el gobierno y los bancos', 'Nadie lo controla — es descentralizado'],
          ['Se puede imprimir más cuando se necesita', 'La cantidad está fija — no se puede fabricar más'],
          ['Necesitas un banco para guardarlo', 'Tú puedes ser tu propio banco'],
          ['Si el banco cierra, el gobierno lo protege (FDIC)', 'Sin protección del gobierno'],
          ['Valor relativamente estable día a día', 'Precio muy variable — puede subir o bajar mucho'],
          ['Las transacciones son privadas (solo tu banco las ve)', 'Las transacciones son públicas (pero sin nombres)'],
        ],
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el correo electrónico del dinero',
        html: 'Cuando el correo electrónico llegó, muchos se preguntaron: "¿Para qué necesito esto si ya tengo correo físico?" Hoy en día, nadie manda cartas para comunicarse rápidamente. Las criptomonedas son parecidas al correo electrónico — son una forma de mover valor de una persona a otra, en cualquier parte del mundo, <strong>sin necesitar un intermediario</strong> (como un banco) que lo apruebe o que cobre comisión.',
      },
      {
        type: 'scenario',
        setup: 'Tu amiga Carmen está considerando abrir una cuenta en Coinbase para comprar sus primeros $50 de Bitcoin. Su hija le dice: "Mamá, no lo hagas — el cripto es para lavado de dinero."\n\n¿Qué es lo más importante que Carmen debería saber para responder a eso?',
        choices: [
          {
            text: 'Que su hija tiene razón — el blockchain es secreto y los criminales lo usan mucho',
            consequence: 'En realidad es lo contrario. El blockchain es completamente público — todas las transacciones son visibles para cualquier persona. Precisamente por eso los investigadores han podido rastrear y recuperar fondos en múltiples casos de fraude. El dinero en efectivo es mucho más difícil de rastrear que el cripto.',
          },
          {
            text: 'Que el blockchain es público, pero el dinero en efectivo es más difícil de rastrear',
            consequence: '¡Exacto! Las transacciones de cripto son públicas y rastreables, aunque no muestran nombres. Esto hace que el cripto sea menos opaco que el efectivo para fines ilegales. Lo importante para Carmen es entender los riesgos reales: la volatilidad del precio y la falta de protección del gobierno — no el anonimato.',
          },
          {
            text: 'Que Coinbase es completamente segura porque está regulada',
            consequence: 'Coinbase es una plataforma seria y regulada, pero "regulada" no significa que el gobierno garantice tu dinero si algo sale mal. A diferencia de un banco, el cripto en Coinbase no está asegurado por el FDIC. Carmen debe empezar con una cantidad pequeña que pueda permitirse perder.',
          },
        ],
      },

      // ── Sección 3: ¿Cómo lo guardo? ─────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: '¿Cómo se guarda el cripto?',
      },
      {
        type: 'paragraph',
        html: 'La mayoría de personas que empiezan con cripto lo hacen a través de una plataforma como <strong>Coinbase</strong> o <strong>Kraken</strong>. Esto se llama una cuenta <em>custodial</em> — funciona como cualquier cuenta en internet: te registras con tu correo y contraseña, y si la olvidas, la recuperas por correo. La plataforma guarda las claves de tu cripto por ti. <strong>Importante:</strong> a diferencia de un banco, tu cripto en estas plataformas no está asegurado por el gobierno — si la plataforma es hackeada o cierra, no hay garantía de recuperación.',
      },
      {
        type: 'paragraph',
        html: 'A medida que aprendes más, quizás escuches sobre tener tu propia <strong>billetera o wallet</strong>. Eso es diferente — se llama <em>auto-custodia</em>. En ese caso, <em>tú</em> controlas una clave especial de 12 a 24 palabras llamada <strong>frase semilla</strong>. Quien tenga esas palabras tiene acceso total a tu cripto. Si las pierdes, nadie en el mundo puede ayudarte a recuperarlo. Como principiante, no necesitas llegar ahí todavía.',
      },
      {
        type: 'self-reflect',
        prompt: '¿Cuál es la diferencia entre tener cripto en Coinbase y tener tu propia billetera? Intenta explicarlo con tus propias palabras.',
      },
      {
        type: 'warn',
        title: '⚠️ La regla más importante desde el principio',
        html: 'El cripto puede subir y bajar mucho en poco tiempo. No es como tener dinero en el banco. <strong>Nunca inviertas dinero que no puedas permitirte perder completamente.</strong> Esta regla aparece en cada lección porque es la más importante de toda la guía.',
      },

      // ── Puente ───────────────────────────────────────────────────────────
      {
        type: 'bridge',
        html: 'Ahora entiendes la base: qué es el blockchain, por qué nadie lo controla, y cómo se guarda el cripto. Todo esto existe porque Bitcoin resolvió algo que ningún banco había podido hacer: crear dinero genuinamente <em>escaso</em> en el mundo digital. En la siguiente lección vas a entender exactamente por qué esa escasez es la razón principal por la que mucha gente ve a Bitcoin como una posible inversión — y también por qué otros no están de acuerdo.',
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: '¿Qué has escuchado sobre Bitcoin que más te llama la atención — o te genera más dudas?',
        options: [
          {
            text: 'Que su precio sube y baja muchísimo',
            response: 'Exacto — y eso tiene una explicación concreta. Esta lección te enseña por qué pasa eso y cómo pensarlo antes de decidir si invertir.',
          },
          {
            text: 'Que hay gente que se hizo millonaria con él',
            response: 'Es verdad — y también hay quienes perdieron mucho. Esta lección te explica qué hace que el precio suba y baje, para que entiendas los dos lados.',
          },
          {
            text: 'Que nadie sabe quién lo creó',
            response: '¡Es un misterio real! Vamos a ver eso — y lo más importante: cómo funciona y si tiene sentido para ti como inversión.',
          },
          {
            text: 'Que solo hay una cantidad limitada',
            response: 'Eso es exactamente la clave. La escasez de Bitcoin es lo que más impacta su precio — y lo vamos a ver a fondo en esta lección.',
          },
        ],
      },

      // ── Sección 1: Qué es Bitcoin ────────────────────────────────────────
      {
        type: 'paragraph',
        html: 'Bitcoin fue la primera criptomoneda del mundo. Fue creada en 2009 por una persona (o grupo) que usó el nombre <strong>Satoshi Nakamoto</strong>. Nadie sabe quién es en realidad — es uno de los grandes misterios del mundo digital. Satoshi publicó el código del Bitcoin en internet para que cualquiera pudiera usarlo, y luego desapareció.',
      },
      {
        type: 'reveal',
        prompt: '¿Cuántos bitcoins pueden existir en total — para siempre?',
        answer: 'Exactamente <strong>21 millones</strong>, nunca uno más. Eso está escrito en el código original de Satoshi y nadie puede cambiarlo — ni gobiernos, ni empresas, ni los propios usuarios. De esos 21 millones, ya se han creado más de 19 millones. Los que faltan se liberan muy lentamente y el último se creará cerca del año 2140.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el oro que cabe en tu teléfono',
        html: 'El oro vale porque es escaso: hay una cantidad limitada en la Tierra y extraerlo cuesta mucho. Bitcoin funciona igual, pero en digital: <strong>solo existen 21 millones</strong> y nadie puede crear más. Es como si hubiera una mina de oro de tamaño fijo — cuando se acaba, se acaba. Por eso mucha gente lo llama "oro digital".',
      },
      {
        type: 'quick-check',
        question: '¿Por qué el límite de 21 millones de bitcoins es importante para su valor?',
        options: [
          {
            text: 'Porque los gobiernos lo decidieron así para controlarlo mejor',
            explanation: 'Al contrario — ningún gobierno controla Bitcoin. El límite está en el código original y ninguna autoridad puede cambiarlo. Es precisamente esa independencia lo que atrae a mucha gente.',
          },
          {
            text: 'Porque la escasez hace que algo pueda valer más si más gente lo quiere',
            correct: true,
            explanation: '¡Exacto! Cuando algo es limitado y la demanda crece, el precio tiende a subir. Bitcoin tiene un tope fijo para siempre — al contrario del dinero normal, que los gobiernos pueden imprimir en cantidad ilimitada.',
          },
          {
            text: 'No es importante — el precio depende solo de las noticias',
            explanation: 'Las noticias influyen en el corto plazo, pero la escasez es uno de los fundamentos de por qué Bitcoin tiene valor en absoluto. Sin ese límite sería como cualquier moneda que se puede imprimir infinitamente.',
          },
        ],
      },
      {
        type: 'paragraph',
        html: 'Hoy un solo bitcoin puede costar decenas de miles de dólares, pero <strong>no tienes que comprar uno entero</strong>. Puedes comprar una fracción — con $10 o $20 ya estás participando. La unidad más pequeña se llama <em>satoshi</em> (en honor al creador): 1 bitcoin = 100,000,000 satoshis.',
      },

      // ── Sección 2: ¿Por qué sube y baja el precio? ──────────────────────
      {
        type: 'heading',
        level: 2,
        text: '¿Por qué sube y baja el precio de Bitcoin?',
      },
      {
        type: 'paragraph',
        html: 'No hay banco ni gobierno que fije el precio de Bitcoin. Lo determinan millones de personas comprando y vendiendo en todo el mundo — igual que el precio del oro, del café o de una casa. Cuando más gente quiere comprar que vender, el precio sube. Cuando más gente quiere vender, baja.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — las entradas del concierto',
        html: 'Imagina 100 entradas para el concierto del año con 10,000 personas que las quieren. El precio sube automáticamente porque hay más demanda que oferta. Con Bitcoin pasa lo mismo: hay un máximo fijo de 21 millones, y cada año más personas, empresas e instituciones los quieren. <strong>Más demanda + oferta fija = precio más alto</strong>. Y cuando muchos venden al mismo tiempo — el precio cae igual de rápido.',
      },
      {
        type: 'misconception',
        myth: '"Bitcoin no tiene valor real porque no está respaldado por nada — ni oro, ni un gobierno."',
        reality: 'El dólar tampoco está respaldado por oro desde 1971. El valor del dinero viene de que mucha gente confía en él y lo acepta. Bitcoin tiene valor porque millones de personas en el mundo lo reconocen, lo aceptan como pago, y confían en que su código es seguro e inmutable. Su "respaldo" es la escasez + la red global de usuarios.',
      },
      {
        type: 'warn',
        title: '⚠️ El precio puede cambiar mucho y rápido',
        html: 'Bitcoin ha subido más de 10,000% en ciertos períodos históricos — pero también ha caído más del 70% en otros momentos. En 2022 cayó de $68,000 a $16,000 en menos de un año. Este nivel de cambio se llama <strong>volatilidad</strong> y es uno de los riesgos más importantes que debes entender antes de invertir.',
      },
      {
        type: 'scenario',
        setup: 'Compraste $200 de Bitcoin hace 6 meses. Hoy valen $100 — perdiste la mitad. Tus amigas te dicen cosas diferentes.',
        choices: [
          {
            text: '"Vende ya, antes de perder más" — y vendes todo',
            consequence: 'Es una decisión válida si ese dinero lo necesitas. Pero históricamente, quienes vendieron en las caídas grandes de Bitcoin y esperaron a que bajara más, luego vieron que el precio se recuperó. Vender en pánico es la forma más común de perder dinero en mercados volátiles.',
          },
          {
            text: '"No toco nada — esto es largo plazo" — y esperas',
            consequence: 'Esta estrategia ha funcionado históricamente para Bitcoin, que ha superado sus mínimos anteriores en cada ciclo. Pero requiere poder esperar años, y no hay garantía de que eso vuelva a ocurrir. Solo funciona si el dinero que usaste es dinero que podías permitirte perder.',
          },
          {
            text: '"Compro más ahora que está barato" — y añades $100 más',
            consequence: 'Esto se llama "promediar a la baja" (DCA). Si crees en el activo largo plazo, comprar más cuando baja reduce tu precio promedio de compra. Es una estrategia usada por inversores experimentados, pero también requiere tolerancia real al riesgo — porque podría bajar aún más.',
          },
        ],
      },
      {
        type: 'self-reflect',
        prompt: '¿Cuánto dinero te sentirías cómoda arriesgando en Bitcoin — sabiendo que podría caer a la mitad?',
      },
      {
        type: 'bridge',
        html: 'Ahora entiendes los dos pilares de Bitcoin: <strong>escasez fija</strong> (nunca más de 21 millones) y <strong>precio por oferta y demanda</strong> (millones de personas decidiendo). Esos dos elementos son exactamente por qué muchos lo ven como inversión — y por qué es tan volátil al mismo tiempo. En la siguiente lección vas a conocer Ethereum y otras monedas que funcionan diferente y tienen usos distintos.',
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: '¿Alguien te ha hablado de una criptomoneda específica — aparte de Bitcoin?',
        options: [
          {
            text: 'Sí — me recomendaron una que "va a explotar pronto"',
            response: 'Eso pasa mucho, y es exactamente lo que vamos a aprender a evaluar. Esta lección te da las herramientas para saber cuándo una recomendación tiene sentido y cuándo es una señal de alerta.',
          },
          {
            text: 'He escuchado de Ethereum pero no sé bien qué es',
            response: 'Perfecto. Ethereum es la segunda más importante después de Bitcoin, y tiene un propósito muy diferente. Vamos a ver exactamente qué hace y por qué importa.',
          },
          {
            text: 'No, solo sé de Bitcoin',
            response: 'Muy bien. Esta lección te muestra el ecosistema completo — qué más existe, qué tiene valor real y qué es mejor evitar.',
          },
          {
            text: 'He escuchado de muchas pero no sé cuáles son confiables',
            response: 'Esa confusión es totalmente normal — hay miles. Esta lección te da los criterios clave para distinguir las confiables de las que no lo son.',
          },
        ],
      },

      // ── Sección 1: El ecosistema ─────────────────────────────────────────
      {
        type: 'paragraph',
        html: 'Bitcoin no es la única criptomoneda. Existen miles de ellas. Las que no son Bitcoin se llaman <strong>altcoins</strong> (monedas alternativas). La más importante y reconocida es <strong>Ethereum (ETH)</strong>.',
      },
      {
        type: 'reveal',
        prompt: '¿Cuántas criptomonedas diferentes existen en el mundo hoy?',
        answer: 'Más de <strong>20,000 criptomonedas</strong> existen en el mercado. La gran mayoría no tiene valor real ni uso práctico. Solo un puñado — Bitcoin, Ethereum, y algunas otras — tienen historial real, uso activo y comunidades grandes. Esto significa que elegir bien importa muchísimo.',
      },

      // ── Sección 2: Ethereum ──────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: '¿Qué es Ethereum?',
      },
      {
        type: 'paragraph',
        html: 'Ethereum fue creado en 2015 por <strong>Vitalik Buterin</strong>, un joven programador. A diferencia de Bitcoin — diseñado principalmente como dinero digital — Ethereum fue diseñado como una <strong>plataforma de programación</strong>. Los desarrolladores pueden construir aplicaciones y servicios financieros encima de él, como se construyen apps para un teléfono.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — Bitcoin es el oro, Ethereum es la electricidad',
        html: 'Bitcoin es como el <strong>oro</strong>: lo guardas como reserva de valor. Ethereum es más como la <strong>electricidad del edificio</strong>: hace funcionar todo lo que está adentro. Sin electricidad, nada funciona. Sin Ethereum, muchas aplicaciones del mundo digital no pueden operar. Son complementarios — no competidores directos.',
      },
      {
        type: 'quick-check',
        question: '¿Cuál es la diferencia principal entre Bitcoin y Ethereum?',
        options: [
          {
            text: 'Bitcoin es más caro, por eso vale más',
            explanation: 'El precio no define el propósito. Bitcoin fue diseñado como dinero digital y reserva de valor. Ethereum fue diseñado como plataforma para construir aplicaciones. Son herramientas con fines distintos.',
          },
          {
            text: 'Bitcoin es principalmente dinero digital; Ethereum es una plataforma para construir aplicaciones',
            correct: true,
            explanation: '¡Exacto! Por eso muchos los ven como complementos, no como competidores. Cada uno tiene un rol diferente en el ecosistema digital.',
          },
          {
            text: 'No hay diferencia real — ambos son lo mismo con distinto nombre',
            explanation: 'Son muy diferentes en diseño y propósito. Bitcoin tiene un límite fijo de 21 millones y es principalmente dinero. Ethereum no tiene ese límite fijo y su valor viene del uso de su red para aplicaciones.',
          },
        ],
      },

      // ── Sección 3: Smart contracts ───────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: '¿Qué son los contratos inteligentes?',
      },
      {
        type: 'paragraph',
        html: 'La función más especial de Ethereum son los <strong>contratos inteligentes</strong>. Son acuerdos digitales que se ejecutan automáticamente cuando se cumplen ciertas condiciones — sin abogados, notarios ni intermediarios.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la máquina de dulces automática',
        html: 'Metes una moneda, oprimes el botón, y la máquina te da el dulce automáticamente. No necesitas hablar con nadie. Un contrato inteligente funciona igual: "Si la compradora paga $X antes del viernes, automáticamente se transfiere la escritura a su nombre." Sin intermediarios, sin demoras, sin posibilidad de que alguien haga trampa.',
      },

      // ── Sección 4: Las altcoins ──────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Otras criptomonedas — cómo pensar en ellas',
      },
      {
        type: 'paragraph',
        html: 'Además de Bitcoin y Ethereum, existen miles de altcoins. Algunas tienen usos reales: <strong>Solana (SOL)</strong>, <strong>Cardano (ADA)</strong>, <strong>Litecoin (LTC)</strong>, <strong>Ripple (XRP)</strong>. Muchas otras no tienen ningún propósito real.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — monedas en un mercado internacional',
        html: 'Bitcoin es el <strong>dólar</strong> — lo conoce el mundo entero. Ethereum es el <strong>euro</strong> — establecido y ampliamente usado. Las demás altcoins son como monedas de países pequeños o billetes de colección: algunas valen algo, muchas no valen casi nada, y es difícil saber cuáles tendrán valor en el futuro.',
      },
      {
        type: 'misconception',
        myth: '"Si Bitcoin es bueno, las otras criptomonedas también lo son — solo hay que elegir la correcta."',
        reality: 'Bitcoin tiene 15+ años de historial, millones de usuarios y es el único reconocido como activo por gobiernos e instituciones financieras. La mayoría de las altcoins son especulación pura — muchas han perdido el 90-100% de su valor. El historial importa mucho más que la promesa.',
      },
      {
        type: 'warn',
        title: '⚠️ Cuidado con las recomendaciones de altcoins desconocidas',
        html: 'Si alguien te dice que una moneda desconocida "va a explotar pronto" o que tienes que comprar ya, eso es casi siempre una señal de alarma. <strong>Bitcoin y Ethereum son las más establecidas</strong> por más de una década de historia real. Antes de comprar cualquier otra criptomoneda, investiga mucho.',
      },
      {
        type: 'scenario',
        setup: 'Tu prima te manda un mensaje: "Acabo de meter $500 en una nueva moneda llamada AquaCoin. Ya subió 200% esta semana. ¡Métele dinero antes de que siga subiendo! Solo dura hasta el fin de semana."',
        choices: [
          {
            text: 'Le meto $200 — si ya subió 200%, imagínate si sigue',
            consequence: 'Las subidas rápidas y artificiales son una señal clásica de manipulación de mercado. Cuando algo "solo dura hasta el fin de semana", significa que el tiempo de presión es artificial. La mayoría de estas monedas desaparecen después del pico, dejando a los últimos compradores con pérdidas totales.',
          },
          {
            text: 'Le pregunto: ¿qué problema resuelve AquaCoin? ¿Quién está detrás?',
            consequence: 'Excelente instinto. Cualquier inversión seria puede responder esas preguntas. Si la respuesta es vaga o solo habla del precio, eso es suficiente señal para no entrar. Las mejores inversiones tienen propósito claro, equipo conocido e historial verificable.',
          },
          {
            text: 'No le meto nada — si yo no la conozco, mejor no',
            consequence: 'Válida y segura. No invertir en lo que no entiendes es una de las reglas más importantes. "No sé suficiente" es una razón perfectamente legítima para pasar. En cripto, el miedo a perderse algo (FOMO) es una de las causas más comunes de pérdidas.',
          },
        ],
      },
      {
        type: 'bridge',
        html: 'Ahora entiendes el ecosistema: <strong>Bitcoin como reserva de valor</strong>, <strong>Ethereum como plataforma de aplicaciones</strong>, y miles de altcoins con calidad muy variable. La próxima lección explica cómo se crean los bitcoins y cómo funcionan las empresas que hacen eso — lo cual es otro ángulo para participar en este mercado.',
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: '¿Sabías que hay dos formas de "participar" en Bitcoin sin comprar Bitcoin directamente?',
        options: [
          {
            text: 'No, pensé que solo se podía comprar Bitcoin',
            response: 'Hay más opciones. Esta lección te explica cómo se crean los bitcoins y cómo las empresas que hacen eso cotizan en la bolsa — igual que cualquier acción.',
          },
          {
            text: 'He escuchado algo sobre acciones de cripto pero no entiendo bien',
            response: 'Vamos a ver exactamente eso. La diferencia entre comprar Bitcoin directamente y comprar acciones de una empresa minera tiene implicaciones importantes de riesgo.',
          },
          {
            text: 'Sé que hay minería pero no sé cómo funciona',
            response: 'Perfecto. Minería es cómo se crean los bitcoins nuevos — y es un negocio enorme. Vamos a ver cómo funciona y qué significa para ti como inversora.',
          },
          {
            text: 'Alguien me mencionó acciones de HUT 8 o Marathon',
            response: 'Esas son empresas mineras de Bitcoin. Esta lección te explica exactamente qué hacen, cómo ganar dinero con ellas, y qué riesgos adicionales tienen comparado con comprar Bitcoin directamente.',
          },
        ],
      },

      // ── Sección 1: Minería ───────────────────────────────────────────────
      {
        type: 'paragraph',
        html: 'Los bitcoins no los crea un banco ni un gobierno. Se "minan" — no con pico y pala, sino con computadoras muy potentes que resuelven problemas matemáticos complejos. La primera computadora que resuelve el problema recibe bitcoin nuevo como recompensa. A esto se le llama <strong>minería de Bitcoin</strong>.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el concurso de matemáticas',
        html: 'Imagina miles de participantes recibiendo el mismo problema difícil al mismo tiempo. El primero en resolverlo gana un premio en efectivo. Cada 10 minutos hay un problema nuevo. Las computadoras mineras hacen exactamente eso — compiten entre sí, y la ganadora recibe bitcoins. Es trabajo real que consume enormes cantidades de electricidad.',
      },
      {
        type: 'info',
        html: '<strong>Dato:</strong> La red de minería de Bitcoin consume más electricidad que algunos países enteros. Por eso las empresas mineras buscan ubicarse donde la electricidad sea barata — cerca de represas hidroeléctricas, parques solares o eólicos.',
      },
      {
        type: 'quick-check',
        question: '¿Quién decide cuántos bitcoins se crean cada día?',
        options: [
          {
            text: 'Los gobiernos — ellos regulan cuánto se puede minar',
            explanation: 'Ningún gobierno controla la creación de Bitcoin. Las reglas están en el código original de Satoshi — son matemáticas, no políticas. Los mineros las siguen porque el código lo exige.',
          },
          {
            text: 'El código de Bitcoin — las reglas están programadas y no las puede cambiar nadie',
            correct: true,
            explanation: '¡Correcto! El ritmo de creación de nuevos bitcoins está programado para siempre en el código. Aproximadamente cada 10 minutos se crean algunos bitcoins nuevos, y esa cantidad se reduce a la mitad cada 4 años (el "halving").',
          },
          {
            text: 'Las empresas mineras — ellas deciden cuánto producir según la demanda',
            explanation: 'Las empresas mineras no controlan la cantidad — solo compiten para resolver los problemas matemáticos. La cantidad de bitcoin que se crea está fijada por el código, independientemente de cuántas mineras participen.',
          },
        ],
      },

      // ── Sección 2: Empresas mineras ─────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: '¿Qué son las empresas mineras de Bitcoin?',
      },
      {
        type: 'paragraph',
        html: 'Hoy la minería individual es prácticamente imposible — las computadoras necesarias son tan caras y especializadas que solo las empresas grandes pueden hacerlo de manera rentable. Estas empresas construyen enormes centros de datos con computadoras mineras que funcionan las 24 horas.',
      },
      {
        type: 'paragraph',
        html: 'Algunas de estas empresas son públicas — cotizan en la bolsa y cualquier persona puede comprar sus acciones. <strong>HUT 8</strong> (símbolo HUT) es un ejemplo, junto con Marathon Digital (MARA), Riot Platforms (RIOT) y CleanSpark (CLSK).',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la mina de oro vs. las acciones de la minera',
        html: '(1) <strong>Comprar oro directamente</strong>: tienes el metal. Si sube el precio, te beneficias directamente. (2) <strong>Comprar acciones de una minera de oro</strong>: eres dueña de parte de la empresa que extrae el oro. Si el precio sube y la empresa funciona bien, tus acciones suben. Pero si la empresa tiene problemas — malos gerentes, deudas, costos altos — tus acciones pueden bajar aunque el oro siga caro. Con Bitcoin funciona exactamente igual.',
      },

      // ── Sección 3: Comparación ───────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Bitcoin directo vs. acciones mineras — ¿cuál elegir?',
      },
      {
        type: 'table',
        headers: ['Característica', 'Bitcoin directo', 'Acciones de empresa minera'],
        rows: [
          ['¿Dónde se compra?', 'Exchange (Coinbase, Kraken)', 'Bolsa (Schwab, Fidelity, Robinhood)'],
          ['¿Qué posees?', 'Bitcoin directamente', 'Parte de una empresa'],
          ['Riesgo principal', 'Solo precio del Bitcoin', 'Precio de Bitcoin + riesgos de la empresa'],
          ['¿Requiere cuenta cripto?', 'Sí', 'No — usa tu cuenta de inversión normal'],
          ['Volatilidad', 'Alta', 'Generalmente más alta que Bitcoin'],
          ['Protección del gobierno', 'Ninguna', 'SIPC protege cuentas de corretaje'],
        ],
      },
      {
        type: 'warn',
        title: '⚠️ Las acciones mineras tienen doble riesgo',
        html: 'El precio puede bajar por <strong>dos razones independientes</strong>: (1) si cae el precio de Bitcoin, y (2) si la empresa tiene sus propios problemas — deudas, costos altos de electricidad, malos gerentes, competencia. Históricamente, las acciones mineras caen más que Bitcoin cuando el mercado baja, y suben más cuando sube. Mayor volatilidad en ambas direcciones.',
      },
      {
        type: 'scenario',
        setup: 'Tienes $300 que quieres invertir en Bitcoin. Una amiga te dice que compres acciones de Marathon Digital (MARA) en lugar de Bitcoin — "suben más cuando Bitcoin sube". Tu otra amiga dice que compres Bitcoin directo en Coinbase.',
        choices: [
          {
            text: 'Compro MARA — si sube más cuando sube Bitcoin, mejor',
            consequence: 'Es verdad que las acciones mineras suelen amplificar los movimientos de Bitcoin — suben más, pero también bajan más. MARA bajó más del 90% en el mercado bajista de 2022, comparado con el 75% de Bitcoin. Además, tiene riesgos propios de empresa: deudas, gestión, competencia. Es una apuesta de mayor riesgo dentro de una apuesta ya de alto riesgo.',
          },
          {
            text: 'Compro Bitcoin directo en Coinbase — más simple',
            consequence: 'Esta es la opción más directa. Tu inversión sigue exactamente el precio de Bitcoin sin el riesgo adicional de una empresa específica. Es más simple de entender, de rastrear, y para muchos inversores es el punto de entrada más apropiado. La regla general: si no entiendes bien cómo funciona una empresa, es difícil evaluar si conviene.',
          },
          {
            text: 'Divido — $150 en cada uno',
            consequence: 'La diversificación siempre es razonable. Pero aquí hay que notar que ambos activos están muy correlacionados — cuando Bitcoin baja, MARA normalmente baja aún más. No es la misma diversificación que mezclar cripto con bonos o acciones de otra industria.',
          },
        ],
      },
      {
        type: 'bridge',
        html: 'Ahora entiendes que hay <strong>múltiples ángulos</strong> para participar en el mercado de Bitcoin: comprarlo directamente, o invertir en las empresas que lo producen. Cada opción tiene su propio perfil de riesgo. La siguiente lección va al corazón de todo: cuáles son los riesgos reales del cripto y cómo pensar en ellos honestamente.',
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: 'Cuando piensas en invertir en cripto, ¿qué es lo que más te preocupa?',
        options: [
          {
            text: 'Perder todo el dinero que invierta',
            response: 'Esa preocupación es completamente válida — y esta lección te da el contexto honesto para entender exactamente cuánto puedes perder y cuándo. El conocimiento es la mejor protección.',
          },
          {
            text: 'No entender bien cómo funciona y cometer un error',
            response: 'Los errores en cripto pueden ser costosos e irreversibles. Esta lección cubre exactamente eso — qué errores son comunes y cómo evitarlos desde el principio.',
          },
          {
            text: 'Que sea una estafa o que me roben',
            response: 'Las estafas son reales y muy sofisticadas. Esta lección toca los riesgos generales, y la siguiente está dedicada completamente a reconocer y evitar estafas específicas.',
          },
          {
            text: 'Que suba y baje tanto que no pueda dormir',
            response: 'La volatilidad extrema es uno de los riesgos más reales del cripto. Esta lección te ayuda a entender exactamente qué nivel de cambio es normal — y si puedes con eso emocionalmente.',
          },
        ],
      },

      {
        type: 'warn',
        title: 'Regla número uno — antes de todo lo demás',
        html: '<strong>Nunca inviertas dinero que no puedas permitirte perder completamente.</strong> El cripto es una inversión de alto riesgo. No es como tener dinero en el banco. Esto no es exageración — es la realidad del mercado.',
      },

      // ── Riesgo 1 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 1 — Volatilidad extrema',
      },
      {
        type: 'paragraph',
        html: 'El precio del cripto puede cambiar dramáticamente en muy poco tiempo. Bitcoin ha subido más del 1,000% en períodos positivos, pero también ha caído más del 70% en períodos negativos. En 2022, Bitcoin cayó de $68,000 a $16,000 en menos de un año — pérdida del 76%. Es completamente normal que tu inversión valga mucho menos de lo que pagaste.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la montaña rusa',
        html: 'Imagina subir a una montaña rusa donde no sabes cuándo sube ni cuándo baja, y puede bajar a cualquier velocidad en cualquier momento. Las personas que han ganado dinero con cripto generalmente son las que aguantaron las bajadas sin vender. Pero eso requiere mucha fortaleza emocional y sobre todo <strong>no necesitar ese dinero pronto</strong>.',
      },
      {
        type: 'reveal',
        prompt: '¿Cuánto cayó Bitcoin en su peor año? ¿Serías capaz de aguantar eso sin vender?',
        answer: 'En 2022, Bitcoin cayó de <strong>$68,000 a $16,000</strong> — una caída del 76% en menos de 12 meses. Si hubieras invertido $1,000, habrían valido $240. La mayoría de las personas que invirtieron en ese pico vendieron con pánico y perdieron permanentemente. Solo quienes pudieron esperar (y tenían el dinero para hacerlo) recuperaron y superaron esa pérdida.',
      },

      // ── Riesgo 2 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 2 — Sin protección del gobierno',
      },
      {
        type: 'paragraph',
        html: 'El dinero en tu cuenta bancaria está protegido por el <strong>FDIC</strong> — hasta $250,000. Si el banco cierra, recuperas tu dinero. El cripto <strong>no tiene ninguna protección similar</strong>. Si la plataforma es hackeada, cierra, o desaparece (como pasó con FTX en 2022), puedes perder todo sin ningún recurso legal.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — cuenta bancaria vs. caja fuerte en casa',
        html: 'Una cuenta en Coinbase es como una cuenta bancaria: si olvidas la contraseña te ayudan. Pero si la plataforma falla, dependes de que alguien te devuelva el dinero. Una billetera propia es como una caja fuerte en casa: nadie puede quitarte lo tuyo, pero si pierdes la combinación no hay nadie que la abra. "Not your keys, not your coins."',
      },

      // ── Riesgo 3 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 3 — Error humano irreversible',
      },
      {
        type: 'paragraph',
        html: 'En cripto, muchos errores no tienen vuelta atrás. Si mandas cripto a la dirección equivocada, se pierde para siempre — no hay "cancelar" ni servicio al cliente que lo recupere. Si usas tu propia billetera, la <strong>frase semilla</strong> (12–24 palabras) es la llave de todo. Si la pierdes, pierdes el acceso permanentemente. Se estima que millones de bitcoins están bloqueados para siempre por esta razón. <strong>Si usas Coinbase, este riesgo no aplica</strong> — ellos gestionan las claves.',
      },
      {
        type: 'quick-check',
        question: 'Si envías Bitcoin a la dirección equivocada por error, ¿qué pasa?',
        options: [
          {
            text: 'Puedes cancelar la transacción si actúas en los primeros 10 minutos',
            explanation: 'No existe esa ventana de cancelación en Bitcoin. Una vez confirmada la transacción en la blockchain, es permanente e irreversible. Nadie — ni Coinbase, ni el gobierno, ni nadie — puede revertirla.',
          },
          {
            text: 'Se pierde para siempre — no hay forma de recuperarlo',
            correct: true,
            explanation: '¡Correcto! Por eso es tan importante verificar la dirección antes de enviar. El cripto fue diseñado para ser irreversible — eso lo hace seguro contra fraudes bancarios, pero también significa que los errores son permanentes.',
          },
          {
            text: 'Coinbase o la plataforma pueden recuperarlo si reportas el error',
            explanation: 'Las plataformas no tienen poder para revertir transacciones en la blockchain. Coinbase no controla la red de Bitcoin — solo te ayuda a acceder a ella. Una vez enviado, está enviado.',
          },
        ],
      },

      // ── Riesgos 4-6 ──────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 4 — Estafas sofisticadas',
      },
      {
        type: 'paragraph',
        html: 'El mundo del cripto está lleno de fraudes. Los estafadores usan la confusión para robar. Si alguien te promete ganancias garantizadas, te presiona para invertir rápido, o te pide que mandes cripto primero — es una estafa. <strong>La siguiente lección cubre esto en detalle</strong> porque es extremadamente importante.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 5 — Impuestos (IRS)',
      },
      {
        type: 'paragraph',
        html: 'En Estados Unidos, las ganancias de cripto se reportan al <strong>IRS</strong> igual que cualquier inversión. Cada vez que vendes cripto por más de lo que pagaste, tienes una ganancia de capital que debes declarar. Guarda registros de todo — cuándo compraste, cuánto pagaste, cuándo vendiste.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Riesgo 6 — Incertidumbre regulatoria',
      },
      {
        type: 'paragraph',
        html: 'Los gobiernos del mundo todavía están decidiendo cómo regular el cripto. En algunos países ya lo han restringido fuertemente. En EE.UU., las reglas cambian. Cambios en las leyes pueden afectar el precio o la disponibilidad del cripto en cualquier momento.',
      },
      {
        type: 'checklist',
        items: [
          'Solo invierte lo que puedes perder al 100% sin que afecte tu vida',
          'Nunca te apresures — las "oportunidades únicas" son señal de alerta',
          'Las ganancias garantizadas no existen en cripto — nunca',
          'No inviertas bajo la presión de nadie, ni de familia',
          'Guarda tus contraseñas en papel, en lugar seguro',
          'Diversifica — no pongas todo en una sola moneda',
          'Si algo parece demasiado bueno para ser verdad, no lo es',
          'Guarda registro de todo para el IRS',
        ],
      },
      {
        type: 'self-reflect',
        prompt: '¿Cuál de estos riesgos te parece más difícil de manejar personalmente? ¿La volatilidad, la falta de protección, o el miedo a cometer errores?',
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: '¿Alguien alguna vez te ha contactado ofreciéndote una oportunidad de cripto que parecía demasiado buena?',
        options: [
          {
            text: 'Sí — y no sabía si era legítima o no',
            response: 'Eso es exactamente lo que esta lección resuelve. Vas a aprender a reconocer las señales de alerta antes de que sea tarde.',
          },
          {
            text: 'No todavía, pero quiero saber cómo reconocerlas',
            response: 'El mejor momento para aprender esto es antes de que te pase. Esta lección te da las herramientas exactas para reconocer cada tipo de estafa.',
          },
          {
            text: 'Creo que ya fui víctima de algo así',
            response: 'Lamentablemente pasa mucho. Esta lección te ayuda a entender qué pasó y cómo protegerte en el futuro. No es tu culpa — estas estafas están diseñadas por expertos.',
          },
          {
            text: 'He visto cuentas de "expertos" en redes sociales prometiendo ganancias',
            response: 'Eso es una de las estafas más comunes. Esta lección cubre exactamente ese caso y cómo identificar si alguien es real o un fraude.',
          },
        ],
      },
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
        type: 'scenario',
        setup: 'Son las 11pm. Recibes un WhatsApp de un número desconocido: "Hola, soy Carlos de soporte de Coinbase. Detectamos actividad sospechosa en tu cuenta. Para protegerla necesitamos que nos confirmes tu frase semilla ahora mismo o la cuenta será suspendida en 30 minutos."',
        choices: [
          {
            text: 'Les doy la frase semilla — no quiero que suspendan mi cuenta',
            consequence: 'Esto es exactamente lo que el estafador quiere. Coinbase NUNCA te pedirá tu frase semilla — ni por WhatsApp, ni por correo, ni por teléfono. La frase semilla es solo tuya. Si la compartes, el estafador tiene acceso total y permanente a todo tu cripto. La urgencia y el horario nocturno son señales diseñadas para que no pienses bien.',
          },
          {
            text: 'No respondo nada y al día siguiente entro directamente a coinbase.com para verificar mi cuenta',
            consequence: 'Perfecto. Esta es exactamente la respuesta correcta. Si hubiera un problema real con tu cuenta, seguirá existiendo mañana. La urgencia artificial ("30 minutos") es la herramienta principal del estafador. Verificar directamente en el sitio oficial — nunca por un enlace que te mandaron — es la forma segura de confirmar.',
          },
          {
            text: 'Les pregunto más información antes de hacer nada',
            consequence: 'Preguntar más es mejor que actuar de inmediato, pero ten cuidado: los estafadores son hábiles y pueden inventar respuestas convincentes. El estándar correcto es no dar ninguna información y verificar por tu cuenta directamente en el sitio oficial. Recuerda: ningún soporte legítimo necesita tu frase semilla.',
          },
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: 'Si tuvieras que adivinar: ¿qué crees que hace que el precio de Bitcoin suba?',
        options: [
          {
            text: 'Que más personas quieran comprarlo',
            response: 'Exactamente — y hay más detrás de eso. Esta lección explica los cuatro factores principales que crean esa demanda, y por qué algunos son más sostenibles que otros.',
          },
          {
            text: 'Las noticias y lo que dice la gente famosa',
            response: 'Las noticias y figuras públicas sí mueven el precio a corto plazo — pero no son los únicos factores. Esta lección te muestra los fundamentales más estructurales que importan a largo plazo.',
          },
          {
            text: 'Honestamente no sé — parece que sube y baja sin razón',
            response: 'Esa sensación es común. El cripto parece caótico desde afuera, pero hay factores identificables que lo mueven. Esta lección los explica de manera que puedas empezar a entender el patrón.',
          },
          {
            text: 'Que sea más escaso cada vez, como el oro',
            response: 'Eso es uno de los cuatro factores principales — y es muy importante. Esta lección profundiza en la escasez y los otros tres elementos que juntos explican la tesis de inversión.',
          },
        ],
      },
      {
        type: 'info',
        html: '<strong>Nota:</strong> Esta lección explica factores que <em>podrían</em> influir en el precio. No es una recomendación de inversión ni una predicción. El mercado es impredecible y el valor puede bajar tanto como puede subir.',
      },

      // ── Factor 1 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Factor 1 — Oferta limitada y demanda creciente',
      },
      {
        type: 'paragraph',
        html: 'La regla más básica del mercado: cuando hay poca cantidad de algo y mucha gente lo quiere, el precio sube. Bitcoin tiene las dos condiciones: cantidad máxima fija (21 millones para siempre) y demanda que ha crecido con el tiempo.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el terreno frente al mar',
        html: 'Los terrenos frente al mar son caros porque no se pueden fabricar más. Si cada año más personas quieren uno, el precio sube. Bitcoin tiene esa misma característica: cantidad fija para siempre. Si la demanda crece y la oferta no puede crecer, el precio tiene presión al alza.',
      },

      // ── Factor 2 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Factor 2 — El Halving (reducción a la mitad)',
      },
      {
        type: 'paragraph',
        html: 'Cada ~4 años, la recompensa que reciben los mineros de Bitcoin se reduce a la mitad — esto se llama el <strong>Halving</strong>. Menos bitcoin nuevo entrando al mercado significa más escasez. Los halvings de 2012, 2016, 2020 han sido seguidos de períodos de precios más altos, aunque no de manera inmediata ni garantizada. El último fue en abril de 2024.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la cosecha de café',
        html: 'Una región produce 1,000 sacos de café especial al mes. Una nueva ley reduce eso a 500 sacos. Si la demanda sigue igual o crece, el precio por saco sube. El halving de Bitcoin hace lo mismo: reduce la nueva oferta, aumentando la escasez artificialmente cada 4 años.',
      },
      {
        type: 'quick-check',
        question: '¿Qué hace exactamente el Halving de Bitcoin?',
        options: [
          {
            text: 'Divide el precio de Bitcoin a la mitad',
            explanation: 'El halving no divide el precio — divide la recompensa que reciben los mineros. Eso afecta cuánto bitcoin nuevo entra al mercado, lo cual puede influir en el precio, pero no lo divide directamente.',
          },
          {
            text: 'Reduce a la mitad la cantidad de bitcoin nuevo que se crea cada día',
            correct: true,
            explanation: '¡Correcto! Cada ~4 años, los mineros reciben la mitad de bitcoins por su trabajo. Eso significa menos oferta nueva, lo cual históricamente ha creado condiciones para precios más altos — aunque no hay garantía.',
          },
          {
            text: 'Ocurre cuando el precio baja un 50% y sirve para estabilizarlo',
            explanation: 'El halving es un evento programado en el código — ocurre cada ~210,000 bloques de transacciones (aproximadamente 4 años), sin importar el precio. No está relacionado con las caídas de precio.',
          },
        ],
      },

      // ── Factor 3 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Factor 3 — Adopción institucional',
      },
      {
        type: 'paragraph',
        html: 'En enero de 2024, EE.UU. aprobó los primeros <strong>ETFs de Bitcoin al contado</strong> — fondos donde instituciones como BlackRock y Fidelity ofrecen Bitcoin a millones de clientes. Esto abrió la puerta a billones de dólares en inversión que antes no podían entrar al mercado. Empresas como MicroStrategy y Tesla también tienen Bitcoin en sus reservas.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — el barrio que se pone de moda',
        html: 'Un vecindario de artistas y estudiantes de repente recibe grandes empresas y restaurantes famosos. Los precios de las propiedades suben — no porque el vecindario cambió, sino porque llegó un nuevo tipo de comprador con más capital. La llegada de instituciones financieras al cripto tiene ese efecto: más demanda, de mayor escala.',
      },

      // ── Factor 4 ─────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Factor 4 — Uso real en el mundo',
      },
      {
        type: 'paragraph',
        html: 'Cada año más personas usan cripto para pagos reales, especialmente en países con monedas inestables. En El Salvador, Bitcoin es moneda de curso legal. Millones usan cripto para enviar remesas a sus familias de manera más rápida y barata que los servicios tradicionales. A más uso real, más demanda constante del activo.',
      },
      {
        type: 'misconception',
        myth: '"Si entiendo por qué sube el precio, puedo predecir cuándo comprar y cuándo vender."',
        reality: 'Conocer los factores fundamentales es valioso, pero no da capacidad de predecir el mercado a corto plazo. Incluso los analistas profesionales fallan constantemente. El cripto reacciona a noticias inesperadas, regulaciones, pánico colectivo y factores imprevisibles. La estrategia más documentada que funciona para la mayoría es la de largo plazo con montos que no necesitas.',
      },
      {
        type: 'warn',
        title: '⚠️ Estos factores no garantizan que el precio siga subiendo',
        html: 'Noticias negativas, regulaciones nuevas, o pánico generalizado pueden causar caídas enormes sin previo aviso. Históricamente el precio ha subido a largo plazo, pero el camino ha tenido bajadas del 50%, 70% y 90%. <strong>Ningún análisis puede predecir con certeza lo que pasará.</strong>',
      },
      {
        type: 'bridge',
        html: 'Ya entiendes los <strong>cuatro factores</strong> que pueden mover el precio de Bitcoin: escasez fija, halvings cada 4 años, adopción institucional, y uso real. Con esto tienes el marco completo para entender por qué mucha gente lo ve como activo de inversión — y también por qué puede ser muy riesgoso. La última lección convierte todo esto en pasos prácticos concretos.',
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

      // ── Activación ──────────────────────────────────────────────────────
      {
        type: 'opening-question',
        question: 'Después de todo lo que aprendiste — ¿cómo te sientes sobre la posibilidad de invertir en cripto?',
        options: [
          {
            text: 'Lista para empezar con algo pequeño',
            response: 'Eso es exactamente el lugar correcto para empezar. Esta lección te da el camino concreto paso a paso para hacerlo de manera segura y consciente.',
          },
          {
            text: 'Todavía tengo dudas — no estoy segura',
            response: 'Las dudas son completamente válidas y muy inteligentes. Esta lección no te va a presionar — te da los principios para que puedas tomar una decisión informada, cuando estés lista, si lo decides.',
          },
          {
            text: 'Creo que no es para mí — es demasiado riesgo',
            response: 'Esa es una decisión completamente respetable y puede ser la correcta para tu situación. Esta lección te deja los consejos por si cambias de opinión, y te confirma que no invertir también es una decisión válida.',
          },
          {
            text: 'Quiero entender el proceso antes de decidir',
            response: 'Perfecto. Esta lección te lleva paso a paso por cómo funciona el proceso de compra, qué plataformas usar, y qué hacer después — sin presión para tomar ninguna decisión hoy.',
          },
        ],
      },
      {
        type: 'info',
        html: 'Esta lección asume que ya entiendes los riesgos y que estás considerando empezar con una cantidad pequeña. Estos consejos son conservadores y están pensados para protegerte, no para hacerte rica rápido.',
      },

      // ── Consejo 1 ────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 1 — Empieza muy pequeño',
      },
      {
        type: 'paragraph',
        html: 'Empieza con una cantidad que puedas perder completamente sin que afecte tu vida. Muchas personas comienzan con $25 o $50 solo para aprender cómo funciona — ver cómo comprar, cómo se mueve el precio, cómo retirarlo. Esto es una inversión en educación, no en ganancia.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la muestra del mercado',
        html: 'Cuando la señora del mercado te ofrece una muestra de su queso nuevo, no compras cinco kilos sin haberlo probado. Empezar pequeño en cripto es esa muestra — pruebas cómo funciona, ves si te sientes cómoda con los altibajos, y decides si quieres más.',
      },

      // ── Consejo 2 ────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 2 — Usa plataformas establecidas',
      },
      {
        type: 'paragraph',
        html: 'Usa plataformas con años de historia, millones de usuarios, y regulación. Opciones confiables: <strong>Coinbase</strong> (fácil, tiene español), <strong>Kraken</strong>, y para acciones mineras tu corredor habitual (Fidelity, Schwab, Robinhood). Evita plataformas desconocidas que alguien te recomendó en redes sociales.',
      },
      {
        type: 'quick-check',
        question: 'Alguien en redes te recomienda una plataforma de cripto que "da mejores rendimientos que Coinbase". ¿Qué haces?',
        options: [
          {
            text: 'La pruebo con $50 — si funciona, meto más',
            explanation: 'El problema es que estas plataformas fraudulentas suelen mostrar "ganancias" falsas al principio para ganar confianza. Cuando intentas retirar, el dinero desaparece. El historial verificable importa mucho más que las promesas.',
          },
          {
            text: 'Busco esa plataforma independientemente para ver su historial y regulación antes de hacer nada',
            correct: true,
            explanation: '¡Correcto! Verificar de manera independiente — no usando los links o información que te dieron — es el paso clave. Busca reseñas en fuentes neutrales, verifica si está registrada como broker, y busca quejas. Si no encuentras historial verificable, no la uses.',
          },
          {
            text: 'Como me la recomendó alguien conocido, debe ser confiable',
            explanation: 'Desafortunadamente, muchas estafas se propagan a través de personas conocidas que ya fueron víctimas — y ahora sin saberlo invitan a otros. El origen de la recomendación no garantiza legitimidad. Siempre verifica independientemente.',
          },
        ],
      },

      // ── Consejo 3 ────────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 3 — No vendas por pánico',
      },
      {
        type: 'paragraph',
        html: 'Cuando el precio baja — y va a bajar, es inevitable — muchas personas venden por miedo, convirtiendo una pérdida temporal en permanente. Los inversores con mejores resultados históricamente son los que aguantaron sin vender. Esto solo es posible si <strong>invertiste dinero que no necesitas a corto plazo</strong>.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — la planta que crece despacio',
        html: 'Si plantas un árbol de mango y al mes no tiene frutos, no lo arrancas. Lo riegas y esperas. Algunas personas en cripto sacan su inversión en la primera tormenta. Las tormentas son normales — son parte del ciclo.',
      },

      // ── Consejos 4-6 ─────────────────────────────────────────────────────
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 4 — Diversifica',
      },
      {
        type: 'paragraph',
        html: 'No pongas todos tus ahorros en cripto, ni todo el cripto en una sola moneda. El cripto debe ser solo una pequeña parte de tus inversiones totales. El resto en cosas más estables: cuentas de ahorro, bonos, fondos de inversión. El cripto es un complemento, no toda la estrategia.',
      },
      {
        type: 'analogy',
        label: '💡 Piénsalo así — no pongas todos los huevos en una canasta',
        html: 'Si cargas todos tus huevos en una canasta y tropiezas, los pierdes todos. Distribuidos en varias canastas, un tropiezo solo rompe algunos. Eso es diversificación — uno de los principios más importantes de las finanzas personales.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 5 — Guarda registro para el IRS',
      },
      {
        type: 'paragraph',
        html: 'En EE.UU., las ganancias de cripto se declaran al IRS como ganancias de capital. Guarda un registro simple: fecha de compra, cuánto pagaste, fecha de venta, cuánto recibiste. Un cuaderno o hoja de cálculo sirve. Sin registros, los impuestos se complican mucho.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Consejo 6 — Protege tu frase semilla como si fuera efectivo',
      },
      {
        type: 'paragraph',
        html: 'Tu <strong>frase semilla</strong> (12 o 24 palabras) es la llave maestra. Quien la tiene, tiene tu cripto. Escríbela a mano en papel, guárdala en lugar físico seguro. <strong>Nunca</strong> la fotografíes, guardes en el teléfono, mandes por WhatsApp, ni se la des a nadie.',
      },
      {
        type: 'checklist',
        items: [
          'Empieza con una cantidad pequeña que puedas perder completamente',
          'Usa solo plataformas reconocidas con años de historia',
          'No vendas en pánico cuando el precio baje',
          'El cripto debe ser solo una pequeña parte de tus inversiones totales',
          'Guarda registro de compras y ventas para tus impuestos',
          'Escribe tu frase semilla en papel y guárdala en lugar seguro',
          'Nunca compartas contraseñas ni frase semilla con nadie',
          'Consulta con un asesor financiero antes de invertir cantidades significativas',
        ],
      },
      {
        type: 'self-reflect',
        prompt: 'Habiendo terminado el curso: ¿qué cambió en tu entendimiento del cripto? ¿Qué harías diferente ahora comparado con antes de empezar?',
      },
      {
        type: 'bridge',
        html: '🎉 <strong>Completaste el curso.</strong> Ahora entiendes qué es el cripto, cómo funciona el blockchain, por qué Bitcoin tiene valor, qué lo hace subir y bajar, cuáles son los riesgos reales, cómo protegerte de estafas, y cómo empezar de manera conservadora si lo decides. Eso es más de lo que sabe la mayoría de la gente. El siguiente paso es tuyo.',
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
