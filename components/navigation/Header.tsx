'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import NavDrawer, { LESSONS, REFERENCE_PAGES } from './NavDrawer'
import { useFontSize } from '@/components/providers/FontSizeProvider'

interface HeaderProps {
  completedLessons: string[]
  firstName: string
}

function getCurrentPageLabel(pathname: string): string {
  if (pathname === '/inicio') return '🏠 Inicio'
  if (pathname === '/glosario') return '📖 Glosario'

  const lessonSlug = pathname.replace('/leccion/', '')
  const lesson = LESSONS.find(l => l.slug === lessonSlug)
  if (lesson) return `${lesson.emoji} ${lesson.label}`

  const refPage = REFERENCE_PAGES.find(p => p.href === pathname)
  if (refPage) return `${refPage.emoji} ${refPage.label}`

  return 'Cripto Para Todos'
}

export default function Header({ completedLessons, firstName }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const { fontSize, increase, decrease } = useFontSize()

  const currentLabel = getCurrentPageLabel(pathname)

  return (
    <>
      {/* Main header bar */}
      <header className="bg-teal-900 border-b-4 border-amber-500 sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Site title */}
          <div className="flex-shrink-0">
            <div className="font-display text-amber-400 font-bold text-xl leading-tight">
              ₿ Cripto Para Todos
            </div>
          </div>

          {/* Font size + menu */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Font size controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={decrease}
                disabled={fontSize === 'small'}
                aria-label="Texto más pequeño"
                className="bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors"
              >
                A−
              </button>
              <button
                onClick={increase}
                disabled={fontSize === 'large'}
                aria-label="Texto más grande"
                className="bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-xl transition-colors"
              >
                A+
              </button>
            </div>

            {/* Menu button */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú de navegación"
              className="bg-white/12 hover:bg-white/22 border border-white/25 text-white rounded-xl px-4 h-10 flex items-center gap-2 font-semibold text-base transition-colors"
            >
              <span className="text-lg leading-none">☰</span>
              <span>Menú</span>
            </button>
          </div>
        </div>

        {/* Current page label */}
        <div className="bg-teal-800 border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 py-2">
            <span className="text-amber-400 font-semibold text-base">{currentLabel}</span>
          </div>
        </div>
      </header>

      <NavDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        completedLessons={completedLessons}
        firstName={firstName}
      />
    </>
  )
}
