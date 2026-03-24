import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { GLOSSARY_ENTRIES } from '@/lib/content/lessons'
import GlosarioClient from './GlosarioClient'
import { blocksToPlainText } from '@/lib/content/toPlainText'

export const metadata = { title: '📖 Glosario — Cripto Para Todos' }

// Build plain text for glosario quiz
const GLOSARIO_CONTENT = GLOSSARY_ENTRIES.map(
  e => `${e.term}: ${e.definition}`
).join('\n\n')

export default async function GlosarioPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: progress }, { data: allProgress }] = await Promise.all([
    supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('lesson_slug', 'glosario')
      .single(),
    supabase
      .from('lesson_progress')
      .select('xp_earned')
      .eq('user_id', user.id),
  ])

  const totalXP = (allProgress ?? []).reduce(
    (sum: number, row: { xp_earned: number }) => sum + (row.xp_earned ?? 0),
    0
  )

  return (
    <GlosarioClient
      entries={GLOSSARY_ENTRIES}
      lessonProgress={progress}
      totalXP={totalXP}
      glosarioText={GLOSARIO_CONTENT}
    />
  )
}
