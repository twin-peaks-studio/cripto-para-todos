'use client'

import { useState } from 'react'
import { CorrectAnimation, WrongAnimation } from './CelebrationAnimation'

export interface Question {
  type: 'multiple_choice' | 'true_false' | 'scenario'
  question: string
  options?: string[]
  correctIndex?: number
  correct?: boolean
  explanation: string
}

interface QuizQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (correct: boolean) => void
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | boolean | null>(null)
  const [revealed, setRevealed] = useState(false)

  const isCorrect = (choice: number | boolean): boolean => {
    if (question.type === 'true_false') {
      return choice === question.correct
    }
    return choice === question.correctIndex
  }

  function handleSelect(choice: number | boolean) {
    if (revealed) return
    setSelected(choice)
    setRevealed(true)
    const correct = isCorrect(choice)
    setTimeout(() => onAnswer(correct), 1400)
  }

  // Build options list
  const options: Array<{ label: string; value: number | boolean }> =
    question.type === 'true_false'
      ? [
          { label: 'Verdadero', value: true },
          { label: 'Falso', value: false },
        ]
      : (question.options ?? []).map((opt, i) => ({ label: opt, value: i }))

  const correct = revealed && selected !== null ? isCorrect(selected) : null

  const Wrapper = correct === true ? CorrectAnimation : correct === false ? WrongAnimation : ({ children }: { children: React.ReactNode }) => <>{children}</>

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex gap-1.5">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i < questionNumber - 1
                  ? 'bg-sage-700 w-6'
                  : i === questionNumber - 1
                  ? 'bg-amber-500 w-8'
                  : 'bg-cream-300 w-6'
              }`}
            />
          ))}
        </div>
        <span className="text-brown-500 text-sm font-medium">
          {questionNumber} de {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border-2 border-cream-300 shadow-warm p-5 mb-4">
        <div className="text-xs font-bold text-brown-500 uppercase tracking-widest mb-3">
          {question.type === 'true_false'
            ? '¿Verdadero o Falso?'
            : question.type === 'scenario'
            ? '🤔 Situación real'
            : 'Pregunta'}
        </div>
        <p className="font-semibold text-brown-900 text-lg leading-snug">{question.question}</p>
      </div>

      {/* Options */}
      <Wrapper>
        <div className="space-y-3">
          {options.map((opt) => {
            const isSelected = selected === opt.value
            const isRight = isCorrect(opt.value)
            let style =
              'w-full text-left border-2 rounded-2xl px-5 py-4 font-medium text-lg leading-snug transition-all duration-200 '

            if (!revealed) {
              style += 'border-cream-300 bg-white hover:border-amber-400 hover:bg-amber-50 active:scale-[0.98] cursor-pointer text-brown-900'
            } else if (isRight) {
              style += 'border-sage-700 bg-sage-100 text-sage-900 cursor-default'
            } else if (isSelected && !isRight) {
              style += 'border-rose-400 bg-rose-50 text-rose-800 cursor-default'
            } else {
              style += 'border-cream-200 bg-cream-50 text-brown-400 cursor-default'
            }

            return (
              <button
                key={String(opt.value)}
                className={style}
                onClick={() => handleSelect(opt.value)}
                disabled={revealed}
              >
                <span className="flex items-center gap-3">
                  {revealed && isRight && <span className="text-sage-700 text-xl flex-shrink-0">✓</span>}
                  {revealed && isSelected && !isRight && <span className="text-rose-600 text-xl flex-shrink-0">✗</span>}
                  {!revealed && <span className="w-5 flex-shrink-0" />}
                  <span>{opt.label}</span>
                </span>
              </button>
            )
          })}
        </div>
      </Wrapper>

      {/* Explanation */}
      {revealed && (
        <div
          className={`mt-4 rounded-2xl px-5 py-4 text-base leading-relaxed animate-fade-up ${
            correct
              ? 'bg-sage-100 border-2 border-sage-700 text-sage-900'
              : 'bg-rose-50 border-2 border-rose-300 text-rose-900'
          }`}
        >
          <div className="font-bold mb-1.5 text-lg">
            {correct ? '🎉 ¡Correcto!' : '🤔 No exactamente...'}
          </div>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
