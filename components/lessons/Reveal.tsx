'use client'

import { useState } from 'react'

interface RevealProps {
  prompt: string
  answer: string
}

export default function Reveal({ prompt, answer }: RevealProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">💭</span>
        <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
          ¿Lo sabes?
        </span>
      </div>

      <p className="font-display font-semibold text-teal-900 text-lg leading-snug mb-4">
        {prompt}
      </p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold text-base rounded-2xl py-3 border-2 border-blue-200 hover:border-blue-300 transition-all"
        >
          Toca para ver la respuesta →
        </button>
      ) : (
        <div
          className="bg-white border-2 border-blue-200 rounded-2xl px-5 py-4 text-brown-900 text-base leading-relaxed animate-pop-in lesson-prose"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  )
}
