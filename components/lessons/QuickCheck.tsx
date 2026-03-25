'use client'

import { useState } from 'react'
import type { QuickCheckOption } from '@/lib/content/types'

interface QuickCheckProps {
  question: string
  options: QuickCheckOption[]
}

export default function QuickCheck({ question, options }: QuickCheckProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const answered = selected !== null
  const isCorrect = answered && options[selected].correct === true

  return (
    <div className="my-6 bg-cream-100 border-2 border-cream-300 rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🧩</span>
        <span className="text-sm font-semibold text-brown-600 uppercase tracking-wide">
          Comprueba lo que aprendiste
        </span>
      </div>

      <p className="font-display font-semibold text-teal-900 text-lg leading-snug mb-4">
        {question}
      </p>

      <div className="space-y-2">
        {options.map((opt, i) => {
          let btnClass = 'w-full text-left px-4 py-3 rounded-2xl text-base transition-all border-2 '
          if (!answered) {
            btnClass += 'bg-white text-brown-900 border-cream-300 hover:border-teal-700 hover:bg-teal-50'
          } else if (i === selected) {
            btnClass += isCorrect
              ? 'bg-sage-100 text-sage-900 border-sage-700'
              : 'bg-rose-50 text-rose-800 border-rose-300'
          } else if (opt.correct && answered) {
            btnClass += 'bg-sage-100 text-sage-900 border-sage-700'
          } else {
            btnClass += 'bg-white text-brown-400 border-cream-200 opacity-60'
          }

          return (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              className={btnClass}
            >
              <span className="flex items-center gap-2">
                {answered && opt.correct && <span>✓</span>}
                {answered && i === selected && !opt.correct && <span>→</span>}
                {opt.text}
              </span>
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`mt-4 rounded-2xl px-4 py-3 text-base leading-relaxed animate-pop-in ${
          isCorrect
            ? 'bg-sage-100 text-sage-900 border border-sage-700/30'
            : 'bg-amber-50 text-amber-900 border border-amber-300'
        }`}>
          <span className="font-semibold mr-1">{isCorrect ? '¡Correcto! ' : 'No exactamente — '}</span>
          {options[selected].explanation}
        </div>
      )}
    </div>
  )
}
