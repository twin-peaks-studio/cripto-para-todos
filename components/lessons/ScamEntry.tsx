interface ScamEntryProps {
  name: string
  emoji: string
  how: string
  analogy: string
  redFlags: string[]
}

export default function ScamEntry({ name, emoji, how, analogy, redFlags }: ScamEntryProps) {
  return (
    <div className="my-6 rounded-2xl border-2 border-rose-200 bg-white overflow-hidden shadow-warm">
      {/* Header */}
      <div className="bg-rose-700 px-5 py-4">
        <div className="text-3xl mb-1">{emoji}</div>
        <h3 className="font-display font-bold text-white text-xl leading-snug">{name}</h3>
      </div>

      <div className="px-5 py-4 space-y-4">
        {/* How it works */}
        <div>
          <div className="text-sm font-bold text-rose-700 uppercase tracking-wide mb-1.5">
            ¿Cómo funciona?
          </div>
          <p className="text-brown-900 leading-relaxed text-[1.05rem]">{how}</p>
        </div>

        {/* Analogy */}
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-3">
          <div className="font-display font-bold text-amber-700 text-sm mb-1.5">💡 Piénsalo así</div>
          <p className="text-amber-900 leading-relaxed text-[1.05rem]">{analogy}</p>
        </div>

        {/* Red flags */}
        <div>
          <div className="text-sm font-bold text-rose-700 uppercase tracking-wide mb-2">
            🚩 Señales de alerta
          </div>
          <ul className="space-y-1.5">
            {redFlags.map((flag, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[1.05rem] text-brown-900">
                <span className="text-rose-600 font-bold mt-0.5 flex-shrink-0">✕</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rule reminder */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3">
          <p className="text-rose-800 font-semibold text-sm leading-relaxed">
            🚨 Recuerda: <em>Ninguna persona legítima te pedirá tus contraseñas, tu frase semilla, ni que mandes cripto primero.</em>
          </p>
        </div>
      </div>
    </div>
  )
}
