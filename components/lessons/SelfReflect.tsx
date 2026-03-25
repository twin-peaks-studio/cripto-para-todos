'use client'

import { useState } from 'react'

interface SelfReflectProps {
  prompt: string
}

export default function SelfReflect({ prompt }: SelfReflectProps) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="my-6 bg-purple-50 border-2 border-purple-200 rounded-3xl px-5 py-4 flex items-center gap-3">
        <span className="text-2xl">✨</span>
        <p className="text-purple-900 text-base font-medium">
          {text.trim()
            ? '¡Excelente! Explicarlo con tus propias palabras es una de las mejores formas de aprender.'
            : 'Perfecto. Puedes volver a este concepto cuando quieras.'}
        </p>
      </div>
    )
  }

  return (
    <div className="my-6 bg-purple-50 border-2 border-purple-200 rounded-3xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">✍️</span>
        <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
          Reflexión personal
        </span>
      </div>

      <p className="font-display font-semibold text-teal-900 text-lg leading-snug mb-1">
        {prompt}
      </p>
      <p className="text-brown-500 text-sm mb-4">(Nadie va a leer esto — es solo para ti)</p>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Escribe lo que se te ocurra..."
        rows={3}
        className="w-full bg-white border-2 border-purple-200 rounded-2xl px-4 py-3 text-brown-900 text-base placeholder-brown-300 resize-none focus:outline-none focus:border-purple-400 transition-colors mb-3"
      />

      <div className="flex gap-3">
        <button
          onClick={() => setDone(true)}
          className="flex-1 bg-purple-700 hover:bg-purple-600 text-white font-bold text-base rounded-2xl py-3 transition-colors"
        >
          Listo
        </button>
        <button
          onClick={() => setDone(true)}
          className="flex-1 text-purple-600 hover:text-purple-800 text-base font-medium py-3 transition-colors"
        >
          Continuar sin responder
        </button>
      </div>
    </div>
  )
}
