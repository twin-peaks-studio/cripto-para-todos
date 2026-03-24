'use client'

import { useState, useCallback, useEffect } from 'react'
import QuizQuestion, { type Question } from './QuizQuestion'
import { LessonCompleteAnimation } from './CelebrationAnimation'
import { getLevelForXP, getNextLevel } from '@/lib/xp'

interface QuizContainerProps {
  lessonSlug: string
  lessonTitle: string
  lessonContentText: string
  questionCount: number
  xpReward: number
  currentXP: number
  onComplete: (passed: boolean, xpEarned: number) => void
  onReviewLesson: () => void
}

type QuizState = 'idle' | 'loading' | 'in_progress' | 'passed' | 'failed' | 'error'

export default function QuizContainer({
  lessonSlug,
  lessonTitle,
  lessonContentText,
  questionCount,
  xpReward,
  currentXP,
  onComplete,
  onReviewLesson,
}: QuizContainerProps) {
  const [state, setState] = useState<QuizState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showCelebration, setShowCelebration] = useState(false)
  const [loadError, setLoadError] = useState('')

  const loadQuiz = useCallback(async () => {
    setState('loading')
    setLoadError('')
    setCurrentIndex(0)
    setAnswers([])

    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonTitle,
          lessonContent: lessonContentText,
          questionCount,
        }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || 'Error al generar el quiz')
      }

      const data = await res.json()
      if (!data.questions?.length) throw new Error('No se recibieron preguntas')

      setQuestions(data.questions)
      setState('in_progress')
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Error desconocido'
      console.error('Quiz load error:', msg)
      setLoadError(msg)
      setState('error')
    }
  }, [lessonTitle, lessonContentText, questionCount])

  async function saveProgress(passed: boolean, score: number, attempt = 1) {
    try {
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonSlug, quizScore: score, quizPassed: passed }),
      })
      // If auth cookie not ready yet (e.g. right after registration), retry once
      if (!res.ok && res.status === 401 && attempt === 1) {
        await new Promise(r => setTimeout(r, 1500))
        return saveProgress(passed, score, 2)
      }
      if (!res.ok) {
        console.error('Error saving progress:', res.status, await res.text().catch(() => ''))
      }
    } catch (e) {
      console.error('Error saving progress:', e)
    }
  }

  function handleAnswer(correct: boolean) {
    const newAnswers = [...answers, correct]
    setAnswers(newAnswers)

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(i => i + 1), 300)
    } else {
      const correctCount = newAnswers.filter(Boolean).length
      const score = Math.round((correctCount / questions.length) * 100)
      const passed = correctCount >= Math.ceil(questions.length * 0.8)

      setTimeout(async () => {
        await saveProgress(passed, score)
        if (passed) {
          setShowCelebration(true)
          setState('passed')
          onComplete(true, xpReward)
        } else {
          setState('failed')
          onComplete(false, 0)
        }
      }, 600)
    }
  }

  const correctCount = answers.filter(Boolean).length
  const newXP = currentXP + xpReward
  const levelBefore = getLevelForXP(currentXP)
  const levelAfter = getLevelForXP(newXP)
  const leveledUp = state === 'passed' && levelBefore.name !== levelAfter.name

  // ── IDLE — pre-quiz screen ──────────────────────────────────
  if (state === 'idle') {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🧠</div>
        <h2 className="font-display text-2xl font-bold text-teal-900 mb-3">
          ¿Lista para el quiz?
        </h2>
        <p className="text-brown-700 text-lg mb-6 leading-relaxed max-w-sm mx-auto">
          Se generarán <strong>{questionCount} preguntas</strong> basadas en esta lección.
          Necesitas responder bien <strong>{Math.ceil(questionCount * 0.8)} de {questionCount}</strong> para completarla.
        </p>
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl px-5 py-4 mb-6 text-left max-w-sm mx-auto">
          <div className="font-bold text-amber-700 mb-1">🌟 Recompensa</div>
          <div className="text-amber-900 text-lg">+{xpReward} XP al completar</div>
        </div>
        <button
          onClick={loadQuiz}
          className="bg-teal-900 hover:bg-teal-800 text-white font-display font-bold text-xl rounded-2xl px-10 py-4 transition-colors"
        >
          ¡Empezar el quiz! →
        </button>
      </div>
    )
  }

  // ── LOADING ──────────────────────────────────────────────────
  if (state === 'loading') {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4 animate-bounce">✨</div>
        <p className="text-brown-700 text-lg font-medium">Preparando tus preguntas...</p>
        <p className="text-brown-500 text-base mt-2">Solo un momento</p>
      </div>
    )
  }

  // ── ERROR ────────────────────────────────────────────────────
  if (state === 'error') {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">😔</div>
        <p className="text-rose-700 font-semibold text-lg mb-2">Hubo un problema</p>
        <p className="text-brown-600 mb-6 text-sm">{loadError}</p>
        <button
          onClick={loadQuiz}
          className="bg-teal-900 text-white font-bold text-lg rounded-2xl px-8 py-4 hover:bg-teal-800 transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    )
  }

  // ── IN PROGRESS ──────────────────────────────────────────────
  if (state === 'in_progress') {
    return (
      <div>
        {questions[currentIndex] && (
          <QuizQuestion
            key={currentIndex}
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    )
  }

  // ── PASSED ───────────────────────────────────────────────────
  if (state === 'passed') {
    return (
      <>
        {showCelebration && (
          <LessonCompleteAnimation onDone={() => setShowCelebration(false)} />
        )}
        <div className="text-center py-6 animate-pop-in">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="font-display text-3xl font-bold text-teal-900 mb-2">
            ¡Excelente trabajo!
          </h2>
          <p className="text-brown-700 text-lg mb-1">
            Respondiste correctamente <strong>{correctCount} de {questions.length}</strong> preguntas.
          </p>
          <p className="text-brown-500 text-base mb-6">
            Esta lección está completada. ¡Estás aprendiendo muy bien! 🌟
          </p>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl px-6 py-4 mb-4 inline-block">
            <div className="font-display font-bold text-amber-700 text-xl">
              +{xpReward} XP ganados ⭐
            </div>
          </div>

          {leveledUp && (
            <div className="bg-teal-50 border-2 border-teal-700 rounded-2xl px-6 py-4 mb-4 mx-auto max-w-xs">
              <div className="text-3xl mb-1">{levelAfter.emoji}</div>
              <div className="font-display font-bold text-teal-900 text-xl">¡Subiste de nivel!</div>
              <div className="text-teal-700 font-semibold">
                Ahora eres: {levelAfter.name} {levelAfter.emoji}
              </div>
            </div>
          )}

          <div className="space-y-3 mt-4 max-w-xs mx-auto">
            <button
              onClick={() => { window.location.href = '/inicio' }}
              className="w-full bg-teal-900 hover:bg-teal-800 text-white font-display font-bold text-xl rounded-2xl py-4 transition-colors"
            >
              Volver al inicio →
            </button>
            <button
              onClick={loadQuiz}
              className="w-full text-brown-500 hover:text-brown-700 text-base font-medium py-3 transition-colors"
            >
              🔄 Hacer el quiz otra vez
            </button>
          </div>
        </div>
      </>
    )
  }

  // ── FAILED ───────────────────────────────────────────────────
  if (state === 'failed') {
    return (
      <div className="text-center py-6 animate-pop-in">
        <div className="text-5xl mb-4">💪</div>
        <h2 className="font-display text-2xl font-bold text-teal-900 mb-2">
          ¡Casi lo logras!
        </h2>
        <p className="text-brown-700 text-lg mb-2">
          Respondiste bien <strong>{correctCount} de {questions.length}</strong> preguntas.
        </p>
        <p className="text-brown-700 text-base mb-6 leading-relaxed max-w-sm mx-auto">
          Necesitabas <strong>{Math.ceil(questions.length * 0.8)}</strong> para aprobar.
          Repasa la lección y vuelve a intentarlo — las preguntas serán diferentes cada vez.
        </p>

        <div className="space-y-3 max-w-xs mx-auto">
          <button
            onClick={onReviewLesson}
            className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-lg rounded-2xl py-4 border-2 border-amber-300 transition-colors"
          >
            📖 Repasar la lección
          </button>
          <button
            onClick={loadQuiz}
            className="w-full bg-teal-900 hover:bg-teal-800 text-white font-display font-bold text-lg rounded-2xl py-4 transition-colors"
          >
            🔄 Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

  return null
}
