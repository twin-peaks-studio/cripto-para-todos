interface BridgeProps {
  html: string
}

export default function Bridge({ html }: BridgeProps) {
  return (
    <div className="bg-teal-900 rounded-3xl px-6 py-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🔗</span>
        <span className="text-sm font-semibold text-teal-300 uppercase tracking-wide">
          ¿Para qué me sirve esto?
        </span>
      </div>
      <div
        className="text-teal-100 text-base leading-relaxed [&_strong]:text-white [&_em]:text-teal-200"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
