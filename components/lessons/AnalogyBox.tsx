interface AnalogyBoxProps {
  label?: string
  html: string
}

export default function AnalogyBox({ label = '💡 Piénsalo así', html }: AnalogyBoxProps) {
  return (
    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-5 py-4">
      <div className="font-display font-bold text-amber-700 text-base mb-2">{label}</div>
      <div
        className="text-amber-900 leading-relaxed text-[1.05rem]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
