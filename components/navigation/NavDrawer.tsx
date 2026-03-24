'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export const LESSONS = [
  { slug: 'que-es-el-cripto',      label: '¿Qué es el cripto?',          emoji: '1️⃣' },
  { slug: 'bitcoin',               label: 'Bitcoin',                      emoji: '2️⃣' },
  { slug: 'ethereum-y-otras',      label: 'Ethereum y otras',             emoji: '3️⃣' },
  { slug: 'mineria-y-acciones',    label: 'Minería y acciones',           emoji: '4️⃣' },
  { slug: 'riesgos',               label: 'Riesgos',                      emoji: '5️⃣' },
  { slug: 'protegete-de-estafas',  label: 'Protégete de estafas',         emoji: '🛡️' },
  { slug: 'por-que-sube-el-valor', label: 'Por qué sube el valor',        emoji: '7️⃣' },
  { slug: 'consejos-para-invertir','label': 'Consejos para invertir',     emoji: '8️⃣' },
]

export const REFERENCE_PAGES = [
  { href: '/glosario', label: 'Glosario de palabras', emoji: '📖' },
]

interface NavDrawerProps {
  isOpen: boolean
  onClose: () => void
  completedLessons: string[]
  firstName: string
}

export default function NavDrawer({ isOpen, onClose, completedLessons, firstName }: NavDrawerProps) {
  const pathname = usePathname()
  const router = useRouter()
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Trap focus & prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      drawerRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 h-full w-[min(320px,88vw)] bg-teal-900 z-50 flex flex-col
          transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <div>
            <div className="font-display text-amber-400 text-lg font-bold">₿ Menú</div>
            {firstName && (
              <div className="text-white/60 text-sm mt-0.5">Hola, {firstName} 👋</div>
            )}
          </div>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white rounded-xl w-11 h-11 flex items-center justify-center text-xl transition-colors"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        {/* Home link */}
        <div className="px-3 pt-4 pb-1">
          <Link
            href="/inicio"
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors
              ${pathname === '/inicio'
                ? 'bg-amber-500/20 text-amber-400'
                : 'text-white/80 hover:bg-white/8 hover:text-white'
              }`}
          >
            <span className="w-8 text-center text-xl">🏠</span>
            <span>Inicio</span>
          </Link>
        </div>

        {/* Lessons */}
        <div className="px-5 pt-4 pb-1">
          <div className="text-white/35 text-xs font-bold tracking-widest uppercase">
            Lecciones
          </div>
        </div>
        <ul className="px-3 pb-2 space-y-0.5">
          {LESSONS.map((lesson) => {
            const href = `/leccion/${lesson.slug}`
            const isActive = pathname === href
            const isDone = completedLessons.includes(lesson.slug)

            return (
              <li key={lesson.slug}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-colors
                    ${isActive
                      ? 'bg-amber-500/20 text-amber-400 font-semibold'
                      : 'text-white/80 hover:bg-white/8 hover:text-white font-medium'
                    }`}
                >
                  <span className="w-8 text-center text-xl flex-shrink-0">{lesson.emoji}</span>
                  <span className="flex-1 leading-snug">{lesson.label}</span>
                  {isDone && (
                    <span className="text-sage-700 text-lg flex-shrink-0">✅</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Reference */}
        <div className="px-5 pt-3 pb-1">
          <div className="text-white/35 text-xs font-bold tracking-widest uppercase">
            Referencia
          </div>
        </div>
        <ul className="px-3 pb-2">
          {REFERENCE_PAGES.map((page) => {
            const isActive = pathname === page.href
            const slug = page.href.replace('/', '')
            const isDone = completedLessons.includes(slug)
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-colors
                    ${isActive
                      ? 'bg-amber-500/20 text-amber-400 font-semibold'
                      : 'text-white/80 hover:bg-white/8 hover:text-white font-medium'
                    }`}
                >
                  <span className="w-8 text-center text-xl">{page.emoji}</span>
                  <span className="flex-1">{page.label}</span>
                  {isDone && (
                    <span className="text-sage-700 text-lg flex-shrink-0">✅</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Bottom */}
        <div className="mt-auto px-4 py-5 border-t border-white/10 space-y-2">
          <button
            onClick={handleLogout}
            className="w-full text-left text-white/50 hover:text-white/80 text-sm px-4 py-3 rounded-xl hover:bg-white/8 transition-colors font-medium"
          >
            🚪 Cerrar sesión
          </button>
        </div>
      </aside>
    </>
  )
}
