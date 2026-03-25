'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LessonHelperProps {
  lessonSlug: string
  lessonTitle: string
}

export default function LessonHelper({ lessonSlug, lessonTitle }: LessonHelperProps) {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleOpen() {
    setOpen(true)
    setTimeout(() => textareaRef.current?.focus(), 300)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleReset() {
    setAnswer('')
    setQuestion('')
    setError('')
    setTimeout(() => textareaRef.current?.focus(), 100)
  }

  async function handleSubmit() {
    if (!question.trim() || loading) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.trim(),
          lessonSlug,
          lessonTitle,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setAnswer(data.answer)
    } catch {
      setError('No se pudo obtener una respuesta. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── Floating trigger button ───────────────────────────────────────── */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-4 z-40 flex items-center gap-2 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg transition-colors"
        aria-label="Hacer una pregunta a tu tutora"
      >
        <span className="text-base">💬</span>
        <span>¿Tienes una pregunta?</span>
      </button>

      {/* ── Bottom sheet ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-teal-900/40 z-50"
              onClick={handleClose}
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-cream-50 rounded-t-3xl shadow-xl"
            >
              <div className="p-6 max-h-[80vh] overflow-y-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-0.5">
                      Tu tutora
                    </p>
                    <h2 className="font-display font-bold text-teal-900 text-xl">
                      Lupe 💬
                    </h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-brown-400 hover:text-brown-700 text-3xl leading-none w-10 h-10 flex items-center justify-center transition-colors"
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {!answer ? (
                    /* ── Question input ──────────────────────────────────── */
                    <motion.div
                      key="input"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-4"
                    >
                      <p className="text-brown-600 text-sm leading-relaxed">
                        Pregúntame cualquier duda sobre esta lección. Estoy aquí para ayudarte.
                      </p>
                      <textarea
                        ref={textareaRef}
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                        placeholder="¿Qué no quedó claro? ¿Qué quieres entender mejor?"
                        rows={3}
                        className="w-full border-2 border-cream-300 rounded-2xl px-4 py-3 text-teal-900 bg-white placeholder:text-brown-400 text-base resize-none focus:outline-none focus:border-teal-700 transition-colors leading-relaxed"
                        onKeyDown={e => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSubmit()
                          }
                        }}
                      />
                      {error && (
                        <p className="text-rose-600 text-sm">{error}</p>
                      )}
                      <button
                        onClick={handleSubmit}
                        disabled={!question.trim() || loading}
                        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-display font-bold text-lg rounded-2xl py-3.5 transition-colors"
                      >
                        {loading ? '✨ Pensando...' : 'Preguntar →'}
                      </button>
                    </motion.div>
                  ) : (
                    /* ── Answer ─────────────────────────────────────────── */
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-4"
                    >
                      {/* User question */}
                      <div className="bg-teal-900 rounded-2xl px-4 py-3">
                        <p className="text-xs font-semibold text-teal-400 mb-1">Tu pregunta</p>
                        <p className="text-cream-100 text-sm leading-relaxed">{question}</p>
                      </div>

                      {/* Lupe's answer */}
                      <div className="bg-white border-2 border-cream-300 rounded-2xl px-4 py-4">
                        <p className="text-xs font-semibold text-teal-600 mb-2">💬 Lupe responde</p>
                        <p className="text-teal-900 text-base leading-relaxed">{answer}</p>
                      </div>

                      {/* Ask another */}
                      <button
                        onClick={handleReset}
                        className="w-full border-2 border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white font-display font-bold text-base rounded-2xl py-3 transition-colors"
                      >
                        Hacer otra pregunta
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
