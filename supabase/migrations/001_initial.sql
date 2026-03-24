-- ============================================================
-- Cripto Para Todos — initial schema
-- Run this in your Supabase SQL editor
-- ============================================================

-- Profiles table (extends auth.users with name)
CREATE TABLE IF NOT EXISTS public.profiles (
  id           UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name   TEXT NOT NULL DEFAULT '',
  last_name    TEXT NOT NULL DEFAULT '',
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Lesson progress table
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_slug   TEXT NOT NULL,
  completed     BOOLEAN DEFAULT FALSE,
  quiz_passed   BOOLEAN DEFAULT FALSE,
  quiz_score    INTEGER DEFAULT 0,
  xp_earned     INTEGER DEFAULT 0,
  completed_at  TIMESTAMPTZ,
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_slug)
);

ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress"
  ON public.lesson_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
  ON public.lesson_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON public.lesson_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- User preferences (font size, onboarding seen)
CREATE TABLE IF NOT EXISTS public.user_preferences (
  user_id          UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  font_size        TEXT DEFAULT 'medium' CHECK (font_size IN ('small', 'medium', 'large')),
  onboarding_seen  BOOLEAN DEFAULT FALSE,
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own preferences"
  ON public.user_preferences FOR ALL
  USING (auth.uid() = user_id);

-- Auto-create profile + preferences on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', '')
  );

  INSERT INTO public.user_preferences (user_id)
  VALUES (NEW.id);

  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
