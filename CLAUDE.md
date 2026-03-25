# Claude Instructions — Cripto Para Todos

## Pedagogy Guardrail (MANDATORY)

**Any time you are asked to make changes involving:**
- Lesson content (adding, editing, or restructuring any lesson in `lib/content/lessons.ts`)
- Quiz logic, question format, or scoring (anything in `components/quiz/` or `app/api/quiz/`)
- Course progression, XP rewards, or level structure
- Feedback text shown to users after correct/incorrect answers
- New UI features related to learning flow (review modes, checkpoints, etc.)

**You MUST:**
1. Read `docs/PEDAGOGY.md` before planning or writing any code
2. Explicitly state which pedagogy principles the change aligns with (or violates)
3. Flag any anti-patterns the change might introduce (see the Anti-Patterns table in PEDAGOGY.md)
4. Apply the relevant checklist items from the "Pedagogy Checklist for Content Changes" section

This is non-negotiable. Do not skip this step even for "small" content edits — a single poorly-framed wrong-answer message or a badly structured question can meaningfully harm self-efficacy and retention for this audience.

---

## Project Overview

A crypto financial literacy web app for Spanish-speaking women ages 40–65. Beginner level. Mobile-first. Self-paced. No instructor.

**Full project memory and stack details:** See auto-memory (loaded automatically per session).

**Pedagogy reference:** `docs/PEDAGOGY.md` — defines all evidence-based learning principles for this platform.

---

## Key Principles (Always Active)

### Audience First
- Users are older adults with no crypto background. Every decision — copy, UI, progression, feedback — must protect their confidence and reduce cognitive friction.
- Self-efficacy matters as much as knowledge transfer. If a user feels stupid, she will not return.
- Examples must be grounded in LATAM financial reality: remittances, exchange rate anxiety, informal savings, distrust of formal banking.

### Content Quality Bar
- Every lesson must answer "¿Para qué me sirve esto?" within the first scroll.
- Every new concept must have a "Piénsalo así" analogy box.
- Misconceptions must be explicitly addressed — not just replaced with correct facts.
- Language must be warm, direct, and jargon-free (or jargon with immediate plain-language definition).

### No Harm Defaults
- Never use shame-framing on wrong answers. Always use encouraging, motivational language.
- Never add time pressure, countdowns, or competitive elements.
- Never make XP or lesson completion the only path to feeling rewarded — partial progress deserves acknowledgment.

---

## Architecture Notes

- `lib/content/lessons.ts` — all lesson content as structured TypeScript blocks (paragraphs, headings, analogies, warns, infos, checklists, tables, videos, scam-entries)
- `components/quiz/QuizContainer.tsx` — manages all quiz states (idle → loading → in_progress → passed → failed → error)
- `app/api/quiz/route.ts` — generates questions via Claude 3 Haiku; uses in-memory cache; LESSON_TOPICS map provides topic descriptions
- `app/(app)/leccion/[slug]/LessonPageClient.tsx` — manages lesson view ↔ quiz view toggle and next-lesson routing
- `lib/xp.ts` — XP level definitions

## Content Block Types (for lessons.ts)
```
paragraph   — html string (supports <strong>, <em>)
heading     — level 2 or 3, text string
analogy     — label + html (the "Piénsalo así" boxes)
warn        — title + html (amber warning boxes)
info        — html (teal info boxes)
checklist   — items array of strings
table       — headers array + rows array of arrays
video       — embedId + title + channel
scam-entry  — name + emoji + how + analogy + redFlags
```

New interactive blocks: opening-question, quick-check, scenario, misconception, reveal, bridge, self-reflect — see docs/PEDAGOGY.md Strategy 11 for full specs and usage rules.
