import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Header from '@/components/navigation/Header'
import { FontSizeProvider } from '@/components/providers/FontSizeProvider'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  // Fetch profile and completed lessons
  const [{ data: profile }, { data: progress }] = await Promise.all([
    supabase.from('profiles').select('first_name').eq('id', user.id).single(),
    supabase.from('lesson_progress').select('lesson_slug').eq('user_id', user.id).eq('quiz_passed', true),
  ])

  const completedLessons = (progress ?? []).map((p: { lesson_slug: string }) => p.lesson_slug)
  const firstName = profile?.first_name ?? ''

  return (
    <FontSizeProvider>
      <div className="min-h-screen bg-cream-100">
        <Header completedLessons={completedLessons} firstName={firstName} />
        <main className="max-w-3xl mx-auto px-4 pb-16 pt-6">
          {children}
        </main>
      </div>
    </FontSizeProvider>
  )
}
