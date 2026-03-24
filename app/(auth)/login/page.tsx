'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      if (error.message.includes('Email not confirmed')) {
        setError('Necesitas confirmar tu correo electrónico primero. Revisa tu bandeja de entrada.')
      } else if (error.message.includes('Invalid login')) {
        setError('El correo o la contraseña no son correctos. Por favor intenta de nuevo.')
      } else {
        setError(`Error al entrar: ${error.message}`)
      }
      setLoading(false)
    } else {
      router.push('/inicio')
      router.refresh()
    }
  }

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="font-display text-5xl text-amber-600 mb-2">₿</div>
        <h1 className="font-display text-3xl font-bold text-teal-900">
          Cripto Para Todos
        </h1>
        <p className="text-brown-700 mt-2 text-lg">Bienvenida — entra a tu cuenta</p>
      </div>

      <div className="bg-white rounded-3xl shadow-warm-lg p-8 border border-cream-300">
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-semibold text-brown-900 mb-2 text-lg">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border-2 border-cream-300 rounded-2xl px-4 py-3 text-lg focus:border-amber-500 focus:outline-none transition-colors bg-cream-50"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold text-brown-900 mb-2 text-lg">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border-2 border-cream-300 rounded-2xl px-4 py-3 text-lg focus:border-amber-500 focus:outline-none transition-colors bg-cream-50"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-rose-100 border border-rose-700/20 text-rose-700 rounded-2xl px-4 py-3 text-base font-medium">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-900 hover:bg-teal-800 active:bg-teal-950 text-white font-display font-bold text-xl rounded-2xl py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando...' : 'Entrar →'}
          </button>
        </form>

        <p className="text-center text-brown-700 mt-6 text-base">
          ¿No tienes cuenta?{' '}
          <Link href="/registro" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-600">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  )
}
