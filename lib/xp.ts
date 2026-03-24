export const LESSON_XP: Record<string, number> = {
  'que-es-el-cripto': 100,
  'bitcoin': 100,
  'ethereum-y-otras': 100,
  'mineria-y-acciones': 100,
  'riesgos': 125,
  'protegete-de-estafas': 175, // most important — higher XP
  'por-que-sube-el-valor': 100,
  'consejos-para-invertir': 125,
  'glosario': 75,
}

export const TOTAL_XP = Object.values(LESSON_XP).reduce((a, b) => a + b, 0)

export type Level = {
  name: string
  emoji: string
  minXP: number
  maxXP: number
  color: string
  bgColor: string
}

export const LEVELS: Level[] = [
  { name: 'Principiante', emoji: '🌱', minXP: 0,   maxXP: 99,   color: 'text-brown-700', bgColor: 'bg-cream-200' },
  { name: 'Curiosa',      emoji: '🔍', minXP: 100,  maxXP: 274,  color: 'text-amber-700', bgColor: 'bg-amber-100' },
  { name: 'Aprendiz',     emoji: '📚', minXP: 275,  maxXP: 499,  color: 'text-teal-800',  bgColor: 'bg-sage-100' },
  { name: 'Conocedora',   emoji: '💡', minXP: 500,  maxXP: 749,  color: 'text-teal-700',  bgColor: 'bg-sage-100' },
  { name: 'Experta',      emoji: '⭐', minXP: 750,  maxXP: 9999, color: 'text-amber-600', bgColor: 'bg-amber-100' },
]

export function getLevelForXP(xp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return LEVELS[i]
  }
  return LEVELS[0]
}

export function getNextLevel(xp: number): Level | null {
  const current = getLevelForXP(xp)
  const idx = LEVELS.findIndex(l => l.name === current.name)
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null
}

export function getProgressToNextLevel(xp: number): number {
  const current = getLevelForXP(xp)
  const next = getNextLevel(xp)
  if (!next) return 100
  const range = next.minXP - current.minXP
  const earned = xp - current.minXP
  return Math.min(100, Math.round((earned / range) * 100))
}
