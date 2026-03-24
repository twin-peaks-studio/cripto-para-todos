import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { LESSON_XP } from '@/lib/xp'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { lessonSlug, quizScore, quizPassed } = await req.json()

  if (!lessonSlug) {
    return NextResponse.json({ error: 'Falta el slug de la lección' }, { status: 400 })
  }

  const xpEarned = quizPassed ? (LESSON_XP[lessonSlug] ?? 100) : 0

  if (quizPassed) {
    // Passed: full upsert — mark as completed with XP
    const { error } = await supabase
      .from('lesson_progress')
      .upsert(
        {
          user_id: user.id,
          lesson_slug: lessonSlug,
          completed: true,
          quiz_passed: true,
          quiz_score: quizScore ?? 0,
          xp_earned: xpEarned,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,lesson_slug' }
      )

    if (error) {
      console.error('Progress save error:', error)
      return NextResponse.json({ error: 'No se pudo guardar el progreso' }, { status: 500 })
    }
  } else {
    // Failed: check if the lesson was already passed — never downgrade a passing record
    const { data: existing } = await supabase
      .from('lesson_progress')
      .select('quiz_passed')
      .eq('user_id', user.id)
      .eq('lesson_slug', lessonSlug)
      .single()

    if (existing?.quiz_passed) {
      // Already passed — only update the latest score, preserve completion status
      const { error } = await supabase
        .from('lesson_progress')
        .update({ quiz_score: quizScore ?? 0, updated_at: new Date().toISOString() })
        .eq('user_id', user.id)
        .eq('lesson_slug', lessonSlug)

      if (error) {
        console.error('Progress update error:', error)
        return NextResponse.json({ error: 'No se pudo guardar el progreso' }, { status: 500 })
      }
    } else {
      // Not previously passed — save the failed attempt
      const { error } = await supabase
        .from('lesson_progress')
        .upsert(
          {
            user_id: user.id,
            lesson_slug: lessonSlug,
            completed: false,
            quiz_passed: false,
            quiz_score: quizScore ?? 0,
            xp_earned: 0,
            completed_at: null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,lesson_slug' }
        )

      if (error) {
        console.error('Progress save error:', error)
        return NextResponse.json({ error: 'No se pudo guardar el progreso' }, { status: 500 })
      }
    }
  }

  return NextResponse.json({ success: true, xpEarned })
}

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('lesson_progress')
    .select('*')
    .eq('user_id', user.id)

  if (error) {
    return NextResponse.json({ error: 'No se pudo obtener el progreso' }, { status: 500 })
  }

  return NextResponse.json(data)
}
