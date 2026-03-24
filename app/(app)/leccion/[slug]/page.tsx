import { notFound, redirect } from 'next/navigation'
import { LESSONS } from '@/lib/content/lessons'
import { createClient } from '@/lib/supabase/server'
import { LESSON_XP } from '@/lib/xp'
import LessonPageClient from './LessonPageClient'
import { blocksToPlainText } from '@/lib/content/toPlainText'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return LESSONS.map(l => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const lesson = LESSONS.find(l => l.slug === slug)
  if (!lesson) return {}
  return {
    title: `${lesson.emoji} ${lesson.title} — Cripto Para Todos`,
  }
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params
  const lesson = LESSONS.find(l => l.slug === slug)
  if (!lesson) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // Get this lesson's progress + total XP
  const [{ data: lessonProgress }, { data: allProgress }] = await Promise.all([
    supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('lesson_slug', slug)
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

  const plainText = blocksToPlainText(lesson.content)

  return (
    <LessonPageClient
      lesson={lesson}
      lessonProgress={lessonProgress}
      totalXP={totalXP}
      lessonContentText={plainText}
      xpReward={LESSON_XP[lesson.slug] ?? 100}
    />
  )
}
