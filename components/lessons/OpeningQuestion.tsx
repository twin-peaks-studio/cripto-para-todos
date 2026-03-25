'use client'

import { useState, useRef } from 'react'
import type { OpeningQuestionOption } from '@/lib/content/types'

interface OpeningQuestionProps {
  question: string
  options: OpeningQuestionOption[]
  onContinue: () => void
}

export default function OpeningQuestion({ question, options, onContinue }: OpeningQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const cardBottomRef = useRef<HTMLDivElement>(null)

  function handleSelect(i: number) {
    setSelected(i)
    // Scroll to the sentinel at the very bottom of the card so the full
    // card container (including padding + rounded corners) is visible
    setTimeout(() => {
      cardBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 50)
  }

  return (
    <div className="my-6 bg-teal-900 rounded-3xl p-6 text-white">
      <div className="text-sm font-semibold text-teal-300 uppercase tracking-wide mb-3">
        Antes de empezar
      </div>
      <p className="font-display font-bold text-xl leading-snug mb-5">{question}</p>

      <div className="space-y-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-all border-2 ${
              selected === i
                ? 'bg-white text-teal-900 border-white'
                : 'bg-teal-800 text-white border-teal-700 hover:border-teal-400 hover:bg-teal-700'
            }`}
          >
            {opt.text}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="mt-5 animate-pop-in">
          <div className="bg-teal-800 rounded-2xl px-4 py-3 text-teal-100 text-base leading-relaxed mb-4">
            {options[selected].response}
          </div>
          <button
            onClick={onContinue}
            className="w-full bg-amber-400 hover:bg-amber-300 text-teal-900 font-display font-bold text-lg rounded-2xl py-3 transition-colors"
          >
            Continuar a la lección →
          </button>
        </div>
      )}
      {/* Sentinel at the very bottom of the card — ensures full card is visible on scroll */}
      <div ref={cardBottomRef} />
    </div>
  )
}
