'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  color: string
  delay: number
  size: number
}

const COLORS = ['#D97706', '#2D7A5F', '#1B4332', '#F59E0B', '#40916C', '#FBBF24']

export function CorrectAnimation({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-bounce-in">
      {children}
    </div>
  )
}

export function WrongAnimation({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-shake">
      {children}
    </div>
  )
}

export function LessonCompleteAnimation({ onDone }: { onDone?: () => void }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.6,
      size: 6 + Math.random() * 8,
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => {
      onDone?.()
    }, 2500)

    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.x}%`,
            top: '50%',
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  )
}
