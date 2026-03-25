-- ============================================================
-- Cripto Para Todos — lesson questions log
-- Run this in your Supabase SQL editor
-- ============================================================

-- Logs every question a user asks via the in-lesson helper (Lupe).
-- Useful for reviewing what users are confused about and improving content.

CREATE TABLE IF NOT EXISTS public.lesson_questions (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_slug   TEXT NOT NULL,
  lesson_title  TEXT NOT NULL,
  question      TEXT NOT NULL,
  answer        TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.lesson_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own questions"
  ON public.lesson_questions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own questions"
  ON public.lesson_questions FOR SELECT
  USING (auth.uid() = user_id);
