'use client'

import { useState, useRef } from 'react'
import type { ScenarioChoice } from '@/lib/content/types'

interface ScenarioProps {
  setup: string
  choices: ScenarioChoice[]
}

export default function Scenario({ setup, choices }: ScenarioProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const cardBottomRef = useRef<HTMLDivElement>(null)

  function handleSelect(i: number) {
    setSelected(i)
    setTimeout(() => {
      cardBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 50)
  }

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🤔</span>
        <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
          Situación real
        </span>
      </div>

      <p className="text-brown-900 text-base leading-relaxed mb-5 whitespace-pre-line">
        {setup}
      </p>

      {selected === null ? (
        <div className="space-y-3">
          {choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium bg-white text-brown-900 border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all"
            >
              {choice.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="animate-pop-in">
          <div className="bg-white rounded-2xl border-2 border-amber-300 px-4 py-3 mb-3">
            <span className="text-sm text-amber-700 font-semibold block mb-1">Tu elección:</span>
            <span className="text-brown-900 text-base">{choices[selected].text}</span>
          </div>
          <div className="bg-teal-50 border border-teal-700/20 rounded-2xl px-4 py-3 text-teal-900 text-base leading-relaxed mb-4">
            {choices[selected].consequence}
          </div>
          <button
            onClick={() => setSelected(null)}
            className="text-amber-700 hover:text-amber-900 text-sm font-medium underline"
          >
            Ver otras respuestas
          </button>
        </div>
      )}
      <div ref={cardBottomRef} className="scroll-mb-6" />
    </div>
  )
}
