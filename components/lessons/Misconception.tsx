interface MisconceptionProps {
  myth: string
  reality: string
}

export default function Misconception({ myth, reality }: MisconceptionProps) {
  return (
    <div className="my-6 rounded-3xl overflow-hidden border-2 border-rose-200">
      <div className="bg-rose-50 px-5 py-4 flex gap-3 items-start">
        <span className="text-rose-500 font-bold text-lg mt-0.5 flex-shrink-0">✗</span>
        <div>
          <div className="text-xs font-bold text-rose-500 uppercase tracking-wide mb-1">
            Mito común
          </div>
          <p className="text-rose-900 text-base leading-relaxed">{myth}</p>
        </div>
      </div>
      <div className="bg-sage-50 px-5 py-4 flex gap-3 items-start border-t-2 border-rose-200">
        <span className="text-sage-700 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
        <div>
          <div className="text-xs font-bold text-sage-700 uppercase tracking-wide mb-1">
            La realidad
          </div>
          <p className="text-sage-900 text-base leading-relaxed">{reality}</p>
        </div>
      </div>
    </div>
  )
}
