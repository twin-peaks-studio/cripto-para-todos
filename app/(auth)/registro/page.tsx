'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function RegistroPage() {
  const router = useRouter()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setInfo('')

    if (form.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    setLoading(true)
    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
        },
      },
    })

    if (error) {
      if (error.message.includes('rate limit') || error.message.includes('email')) {
        setError('Demasiados intentos. Espera unos minutos e intenta de nuevo.')
      } else if (error.message.includes('already registered') || error.message.includes('already exists')) {
        setError('Este correo ya tiene una cuenta. Entra con tu contraseña en la página de inicio de sesión.')
      } else {
        setError(`Hubo un problema: ${error.message}`)
      }
      setLoading(false)
    } else if (data.session) {
      // Logged in immediately (email confirmation is OFF)
      router.push('/inicio')
      router.refresh()
    } else if (data.user && !data.session) {
      // Email confirmation is ON — user created but not logged in yet
      setInfo('✅ ¡Cuenta creada! Revisa tu correo y haz clic en el enlace de confirmación para activar tu cuenta.')
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
        <p className="text-brown-700 mt-2 text-lg">Crea tu cuenta gratuita</p>
      </div>

      <div className="bg-white rounded-3xl shadow-warm-lg p-8 border border-cream-300">
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block font-semibold text-brown-900 mb-2 text-base">
                Nombre
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={form.firstName}
                onChange={e => update('firstName', e.target.value)}
                className="w-full border-2 border-cream-300 rounded-2xl px-4 py-3 text-base focus:border-amber-500 focus:outline-none transition-colors bg-cream-50"
                placeholder="María"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-semibold text-brown-900 mb-2 text-base">
                Apellido
              </label>
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={form.lastName}
                onChange={e => update('lastName', e.target.value)}
                className="w-full border-2 border-cream-300 rounded-2xl px-4 py-3 text-base focus:border-amber-500 focus:outline-none transition-colors bg-cream-50"
                placeholder="González"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-brown-900 mb-2 text-lg">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={e => update('email', e.target.value)}
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
              autoComplete="new-password"
              required
              minLength={6}
              value={form.password}
              onChange={e => update('password', e.target.value)}
              className="w-full border-2 border-cream-300 rounded-2xl px-4 py-3 text-lg focus:border-amber-500 focus:outline-none transition-colors bg-cream-50"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          {info && (
            <div className="bg-sage-100 border border-sage-700/30 text-sage-900 rounded-2xl px-4 py-3 text-base font-medium">
              {info}
            </div>
          )}

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
            {loading ? 'Creando cuenta...' : '¡Crear mi cuenta! →'}
          </button>
        </form>

        <p className="text-center text-brown-700 mt-6 text-base">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-600">
            Entra aquí
          </Link>
        </p>
      </div>
    </div>
  )
}
