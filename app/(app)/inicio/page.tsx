import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LESSONS } from '@/lib/content/lessons'
import { getLevelForXP, getNextLevel, getProgressToNextLevel, TOTAL_XP } from '@/lib/xp'
import Link from 'next/link'
import OnboardingModal from '@/components/onboarding/OnboardingModal'

export const metadata = { title: 'Inicio — Cripto Para Todos' }

export default async function InicioPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: profile }, { data: progress }, { data: prefs }] = await Promise.all([
    supabase.from('profiles').select('first_name, last_name').eq('id', user.id).single(),
    supabase.from('lesson_progress').select('*').eq('user_id', user.id),
    supabase.from('user_preferences').select('onboarding_seen').eq('user_id', user.id).single(),
  ])

  const firstName = profile?.first_name ?? ''
  const completedSlugs = new Set(
    (progress ?? [])
      .filter((p: { quiz_passed: boolean }) => p.quiz_passed)
      .map((p: { lesson_slug: string }) => p.lesson_slug)
  )
  const totalXP = (progress ?? []).reduce(
    (sum: number, row: { xp_earned: number }) => sum + (row.xp_earned ?? 0),
    0
  )

  const level = getLevelForXP(totalXP)
  const nextLevel = getNextLevel(totalXP)
  const progressPct = getProgressToNextLevel(totalXP)
  const completedCount = LESSONS.filter(l => completedSlugs.has(l.slug)).length
  const glosarioDone = completedSlugs.has('glosario')
  const showOnboarding = !prefs?.onboarding_seen

  return (
    <>
      {showOnboarding && <OnboardingModal userId={user.id} />}

      {/* Hero welcome */}
      <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-3xl p-6 mb-6 text-white overflow-hidden relative">
        <div className="absolute right-4 top-4 text-8xl opacity-10 font-display select-none">₿</div>
        <div className="relative">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-1">
            Bienvenida{firstName ? `, ${firstName}` : ''}
          </div>
          <h1 className="font-display font-bold text-3xl leading-tight mb-2">
            Aprende sobre cripto<br />a tu ritmo
          </h1>
          <p className="text-white/75 text-base leading-relaxed">
            Sigue las lecciones en orden. Cada una tiene una analogía fácil de entender y un quiz para reforzar lo aprendido.
          </p>
        </div>
      </div>

      {/* XP / Level card */}
      <div className="bg-white border-2 border-cream-300 rounded-3xl p-5 mb-6 shadow-warm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-brown-500 text-sm font-medium mb-0.5">Tu nivel actual</div>
            <div className="font-display font-bold text-teal-900 text-xl flex items-center gap-2">
              {level.emoji} {level.name}
            </div>
          </div>
          <div className="text-right">
            <div className="text-brown-500 text-sm font-medium mb-0.5">XP total</div>
            <div className="font-bold text-amber-600 text-xl">{totalXP} XP</div>
          </div>
        </div>

        {/* XP progress bar */}
        <div className="w-full bg-cream-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-amber-500 h-3 rounded-full transition-all duration-700"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {nextLevel && (
          <div className="text-brown-500 text-sm mt-1.5">
            {progressPct}% hacia {nextLevel.emoji} {nextLevel.name}
          </div>
        )}
        {!nextLevel && (
          <div className="text-amber-600 text-sm mt-1.5 font-semibold">
            ⭐ ¡Nivel máximo alcanzado!
          </div>
        )}

        {/* Completion count */}
        <div className="mt-3 pt-3 border-t border-cream-200 flex items-center gap-2">
          <div className="flex gap-1">
            {LESSONS.map(l => (
              <div
                key={l.slug}
                className={`w-3 h-3 rounded-full ${
                  completedSlugs.has(l.slug) ? 'bg-sage-700' : 'bg-cream-300'
                }`}
              />
            ))}
          </div>
          <span className="text-brown-600 text-sm font-medium">
            {completedCount} de {LESSONS.length} lecciones completadas
          </span>
        </div>
      </div>

      {/* Lesson list */}
      <h2 className="font-display font-bold text-teal-900 text-2xl mb-4">Lecciones</h2>
      <div className="space-y-3">
        {LESSONS.map((lesson, index) => {
          const done = completedSlugs.has(lesson.slug)
          // A lesson is unlocked if it's the first, already done, or the previous is done
          const prevDone = index === 0 || completedSlugs.has(LESSONS[index - 1].slug) || done

          return (
            <Link
              key={lesson.slug}
              href={`/leccion/${lesson.slug}`}
              className={`block bg-white border-2 rounded-3xl p-5 shadow-warm transition-all duration-200
                ${done
                  ? 'border-sage-700/40 hover:border-sage-700'
                  : prevDone
                  ? 'border-cream-300 hover:border-amber-400 hover:shadow-warm-lg'
                  : 'border-cream-200 opacity-60'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
                  ${done ? 'bg-sage-100' : lesson.color}`}>
                  {done ? '✅' : lesson.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="font-display font-bold text-teal-900 text-lg leading-tight">
                      {lesson.title}
                    </span>
                    {done && (
                      <span className="text-xs bg-sage-100 text-sage-900 font-semibold px-2 py-0.5 rounded-full">
                        Completada
                      </span>
                    )}
                  </div>
                  <p className="text-brown-600 text-sm leading-snug">{lesson.subtitle}</p>
                  <div className="mt-2 text-amber-600 text-sm font-semibold">
                    +{lesson.xp} XP
                  </div>
                </div>
                <div className="text-brown-400 text-xl flex-shrink-0 mt-1">›</div>
              </div>
            </Link>
          )
        })}

        {/* Glosario */}
        <Link
          href="/glosario"
          className={`block bg-white border-2 rounded-3xl p-5 shadow-warm transition-all duration-200
            ${glosarioDone
              ? 'border-sage-700/40 hover:border-sage-700'
              : 'border-cream-300 hover:border-amber-400 hover:shadow-warm-lg'
            }`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${glosarioDone ? 'bg-sage-100' : 'bg-amber-50'}`}>
              {glosarioDone ? '✅' : '📖'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className="font-display font-bold text-teal-900 text-lg">
                  Glosario de palabras
                </span>
                {glosarioDone && (
                  <span className="text-xs bg-sage-100 text-sage-900 font-semibold px-2 py-0.5 rounded-full">
                    Completada
                  </span>
                )}
              </div>
              <p className="text-brown-600 text-sm leading-snug">
                Todas las palabras del cripto explicadas de manera simple
              </p>
              <div className="mt-2 text-amber-600 text-sm font-semibold">+75 XP con quiz</div>
            </div>
            <div className="text-brown-400 text-xl flex-shrink-0 mt-1">›</div>
          </div>
        </Link>
      </div>

      {/* Reminder box */}
      <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-3xl px-5 py-4">
        <p className="text-amber-900 text-base leading-relaxed">
          <strong>💡 Consejo:</strong> Si no recuerdas una palabra, ve al{' '}
          <Link href="/glosario" className="underline font-semibold">Glosario</Link>.
          Puedes volver a este sitio siempre que quieras repasar. ¡No hay prisa!
        </p>
      </div>
    </>
  )
}
