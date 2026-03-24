interface InfoBoxProps {
  html: string
}

export default function InfoBox({ html }: InfoBoxProps) {
  return (
    <div className="my-6 rounded-2xl border-2 border-teal-200 bg-teal-50 px-5 py-4">
      <div
        className="text-teal-900 leading-relaxed text-[1.05rem]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
