'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface OnboardingModalProps {
  userId: string
}

const STEPS = [
  {
    emoji: '₿',
    title: 'Bienvenida a Cripto Para Todos',
    body: 'Este sitio es solo para ti. Aquí aprenderás todo sobre el dinero digital, a tu ritmo, en español.',
  },
  {
    emoji: '1️⃣',
    title: 'Sigue las lecciones en orden',
    body: 'Empieza por la primera lección y avanza una a una. Cada lección tiene ejemplos fáciles de entender y un video.',
  },
  {
    emoji: '🧠',
    title: 'Haz el quiz al terminar cada lección',
    body: 'Al final de cada lección hay un quiz corto. Las preguntas son nuevas cada vez — así puedes repasar cuantas veces quieras.',
  },
  {
    emoji: '📖',
    title: 'El Glosario es tu amigo',
    body: 'Si no recuerdas una palabra, ve al Glosario. Ahí están todas las palabras del cripto explicadas de manera muy simple.',
  },
  {
    emoji: '☰',
    title: 'El botón "Menú" está siempre arriba',
    body: 'Para moverte entre secciones, toca el botón "Menú" en la barra de arriba. Se abre una lista con todo el contenido.',
  },
]

export default function OnboardingModal({ userId }: OnboardingModalProps) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  async function markSeen() {
    const supabase = createClient()
    await supabase
      .from('user_preferences')
      .upsert({ user_id: userId, onboarding_seen: true, updated_at: new Date().toISOString() })
  }

  async function handleClose() {
    await markSeen()
    setVisible(false)
  }

  if (!visible) return null

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  return (
    <div className="fixed inset-0 z-50 bg-teal-950/90 flex items-center justify-center p-4">
      <div className="bg-teal-900 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
        {/* Progress dots */}
        <div className="flex gap-2 justify-center pt-6 pb-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === step
                  ? 'bg-amber-400 w-6 h-2.5'
                  : i < step
                  ? 'bg-amber-400/50 w-2.5 h-2.5'
                  : 'bg-white/20 w-2.5 h-2.5'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="px-7 py-6 text-center">
          <div className="text-6xl mb-4">{current.emoji}</div>
          <h2 className="font-display font-bold text-white text-2xl leading-snug mb-3">
            {current.title}
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            {current.body}
          </p>
        </div>

        {/* Nav demo on step 4 */}
        {step === 4 && (
          <div className="mx-6 mb-5 bg-teal-800 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center justify-between bg-teal-700 rounded-xl px-4 py-3 border border-white/10">
              <span className="text-amber-400 font-semibold text-sm">🏠 Inicio</span>
              <span className="bg-white/15 border border-white/30 text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                ☰ Menú
              </span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="px-6 pb-8 space-y-3">
          <button
            onClick={isLast ? handleClose : () => setStep(s => s + 1)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-teal-950 font-display font-bold text-xl rounded-2xl py-4 transition-colors"
          >
            {isLast ? '¡Empezar a aprender! →' : 'Siguiente →'}
          </button>
          {!isLast && (
            <button
              onClick={handleClose}
              className="w-full text-white/40 hover:text-white/70 text-base py-2 transition-colors"
            >
              Saltar introducción
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
