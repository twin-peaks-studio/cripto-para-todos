'use client'

import { useState } from 'react'
import type { GlossaryEntry } from '@/lib/content/types'
import QuizContainer from '@/components/quiz/QuizContainer'
import { LESSON_XP } from '@/lib/xp'

interface GlosarioClientProps {
  entries: GlossaryEntry[]
  lessonProgress: { quiz_passed?: boolean } | null
  totalXP: number
  glosarioText: string
}

export default function GlosarioClient({
  entries,
  lessonProgress,
  totalXP,
  glosarioText,
}: GlosarioClientProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const alreadyPassed = lessonProgress?.quiz_passed === true

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-100 text-amber-700 mb-3">
          📖 Referencia
        </div>
        <h1 className="font-display font-bold text-teal-900 text-3xl mb-2">
          Glosario de palabras
        </h1>
        <p className="text-brown-700 text-lg leading-relaxed">
          Si no recuerdas una palabra, búscala aquí. Todo explicado de manera simple.
        </p>
      </div>

      {!showQuiz ? (
        <>
          {/* Glossary entries */}
          <div className="space-y-3 mb-8">
            {entries.map((entry) => (
              <div
                key={entry.term}
                className="bg-white border-2 border-cream-300 rounded-2xl px-5 py-4 shadow-warm"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{entry.emoji}</span>
                  <div>
                    <div className="font-display font-bold text-teal-900 text-lg mb-1">
                      {entry.term}
                    </div>
                    <p className="text-brown-700 leading-relaxed text-[1.05rem]">
                      {entry.definition}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quiz CTA */}
          <div className="bg-white border-2 border-cream-300 rounded-3xl p-6 text-center shadow-warm">
            <div className="text-4xl mb-3">✨</div>
            <h2 className="font-display font-bold text-teal-900 text-2xl mb-2">
              {alreadyPassed ? '¡Glosario completado!' : '¿Recuerdas los términos?'}
            </h2>
            <p className="text-brown-700 text-base mb-5">
              {alreadyPassed
                ? 'Puedes hacer el quiz otra vez para practicar con palabras nuevas.'
                : 'Haz el quiz del glosario para ganar +75 XP.'}
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="w-full bg-teal-900 hover:bg-teal-800 text-white font-display font-bold text-xl rounded-2xl py-4 transition-colors"
            >
              {alreadyPassed ? '🔄 Quiz otra vez' : '🧠 Hacer el quiz →'}
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white border-2 border-cream-300 rounded-3xl p-6 shadow-warm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-100 text-amber-700">
              🧠 Quiz — Glosario
            </div>
          </div>
          <QuizContainer
            lessonSlug="glosario"
            lessonTitle="Glosario de palabras de cripto"
            lessonContentText={glosarioText}
            questionCount={5}
            xpReward={LESSON_XP['glosario'] ?? 75}
            currentXP={totalXP}
            onComplete={() => {}}
            onReviewLesson={() => setShowQuiz(false)}
          />
        </div>
      )}
    </div>
  )
}
