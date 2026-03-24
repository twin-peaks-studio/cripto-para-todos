interface WarnBoxProps {
  title: string
  html: string
}

export default function WarnBox({ title, html }: WarnBoxProps) {
  return (
    <div className="my-6 rounded-2xl border-2 border-rose-300 bg-rose-50 px-5 py-4">
      <div className="font-semibold text-rose-800 text-base mb-2">{title}</div>
      <div
        className="text-rose-900 leading-relaxed text-[1.05rem]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
