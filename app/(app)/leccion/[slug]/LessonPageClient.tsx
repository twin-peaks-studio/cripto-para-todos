'use client'

import { useState, useEffect, useRef } from 'react'
import type { Lesson } from '@/lib/content/types'
import LessonContent from '@/components/lessons/LessonContent'
import QuizContainer from '@/components/quiz/QuizContainer'
import { LESSONS } from '@/lib/content/lessons'
import { useRouter } from 'next/navigation'

interface LessonProgressRow {
  quiz_passed?: boolean
  quiz_score?: number
  completed?: boolean
}

interface LessonPageClientProps {
  lesson: Lesson
  lessonProgress: LessonProgressRow | null
  totalXP: number
  lessonContentText: string
  xpReward: number
}

type PageView = 'lesson' | 'quiz'

export default function LessonPageClient({
  lesson,
  lessonProgress,
  totalXP,
  lessonContentText,
  xpReward,
}: LessonPageClientProps) {
  const router = useRouter()
  const [view, setView] = useState<PageView>('lesson')

  // Compute next destination after this lesson
  const lessonIndex = LESSONS.findIndex(l => l.slug === lesson.slug)
  const rawNext = lessonIndex >= 0 && lessonIndex < LESSONS.length - 1 ? LESSONS[lessonIndex + 1] : null
  // After the last lesson, send them to the Glosario
  const nextLesson = rawNext
    ? { slug: rawNext.slug, title: rawNext.title, emoji: rawNext.emoji, href: `/leccion/${rawNext.slug}` }
    : lessonIndex === LESSONS.length - 1
      ? { slug: 'glosario', title: 'Glosario de palabras', emoji: '📖', href: '/glosario' }
      : null
  const [reachedBottom, setReachedBottom] = useState(false)
  const [justPassed, setJustPassed] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Track when user scrolls to the bottom of the lesson content
  useEffect(() => {
    if (reachedBottom || view !== 'lesson') return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setReachedBottom(true) },
      { threshold: 0.1 }
    )
    if (bottomRef.current) observer.observe(bottomRef.current)
    return () => observer.disconnect()
  }, [reachedBottom, view])

  const alreadyPassed = lessonProgress?.quiz_passed === true || justPassed

  return (
    <div>
      {/* Lesson header */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 ${lesson.color} ${lesson.textColor}`}>
          <span>{lesson.emoji}</span>
          <span>{lesson.title}</span>
        </div>
        <h1 className="font-display font-bold text-teal-900 text-3xl leading-tight mb-2">
          {lesson.title}
        </h1>
        <p className="text-brown-700 text-lg leading-relaxed">{lesson.subtitle}</p>

        {alreadyPassed && (
          <div className="mt-3 inline-flex items-center gap-2 bg-sage-100 text-sage-900 border border-sage-700/30 rounded-xl px-4 py-2 text-sm font-semibold">
            ✅ Lección completada
          </div>
        )}
      </div>

      {view === 'lesson' ? (
        <>
          <LessonContent blocks={lesson.content} />

          {/* Sentinel element — when this is visible, user has reached the bottom */}
          <div ref={bottomRef} />

          {/* Quiz CTA — always shown, but copy changes before/after reading */}
          <div className="mt-10 bg-white border-2 border-cream-300 rounded-3xl p-6 text-center shadow-warm">
            <div className="text-4xl mb-3">{reachedBottom ? '✨' : '📖'}</div>
            <h2 className="font-display font-bold text-teal-900 text-2xl mb-2">
              {reachedBottom ? '¡Terminaste de leer!' : 'Sigue leyendo para continuar'}
            </h2>
            <p className="text-brown-700 text-base mb-5 leading-relaxed">
              {alreadyPassed
                ? nextLesson
                  ? 'Ya completaste esta lección. Continúa con la siguiente o practica el quiz de nuevo.'
                  : 'Ya completaste esta lección. Puedes hacer el quiz de nuevo para practicar con preguntas nuevas.'
                : reachedBottom
                ? `Ahora demuestra lo que aprendiste. Necesitas responder bien ${Math.ceil(lesson.quizQuestionCount * 0.8)} de ${lesson.quizQuestionCount} preguntas para completar la lección.`
                : 'Lee toda la lección y luego podrás hacer el quiz.'}
            </p>

            <div className="space-y-3">
              {alreadyPassed && nextLesson ? (
                <>
                  <button
                    onClick={() => router.push(nextLesson.href)}
                    className="w-full bg-teal-900 hover:bg-teal-800 text-white font-display font-bold text-xl rounded-2xl py-4 transition-colors"
                  >
                    {nextLesson.emoji} {nextLesson.title} →
                  </button>
                  <button
                    onClick={() => { setView('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="w-full text-brown-500 hover:text-brown-700 text-base font-medium py-3 transition-colors"
                  >
                    🔄 Hacer el quiz otra vez
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setView('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className="w-full bg-teal-900 hover:bg-teal-800 text-white font-display font-bold text-xl rounded-2xl py-4 transition-colors"
                >
                  {alreadyPassed ? '🔄 Hacer el quiz otra vez' : '🧠 Hacer el quiz →'}
                </button>
              )}

              <button
                onClick={() => router.push('/inicio')}
                className="w-full text-brown-500 hover:text-brown-700 text-base font-medium py-3 transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Quiz view — QuizContainer stays mounted and manages ALL its own states */
        <div className="bg-white border-2 border-cream-300 rounded-3xl p-6 shadow-warm">
          <div className="text-center mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${lesson.color} ${lesson.textColor}`}>
              🧠 Quiz — {lesson.title}
            </div>
          </div>

          <QuizContainer
            lessonSlug={lesson.slug}
            lessonTitle={lesson.title}
            lessonContentText={lessonContentText}
            questionCount={lesson.quizQuestionCount}
            xpReward={xpReward}
            currentXP={totalXP}
            nextLesson={nextLesson}
            onComplete={(passed) => {
              if (passed) setJustPassed(true)
            }}
            onReviewLesson={() => { setView('lesson'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          />
        </div>
      )}
    </div>
  )
}
