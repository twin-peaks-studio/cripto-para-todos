# Claude Instructions — Cripto Para Todos

## Design System Guardrail (MANDATORY)

**Any time you are asked to make changes involving:**
- Creating or modifying any UI component (`components/**/*.tsx`)
- Editing lesson block components (`components/lessons/*.tsx`)
- Changing any color, spacing, border, radius, shadow, or typography class
- Adding new visual states (hover, focus, selected, disabled, error, success)
- Building new content block types
- Any CSS changes in `app/globals.css` or `tailwind.config.ts`

**You MUST:**
1. Read `docs/DESIGN_SYSTEM.md` before planning or writing any code
2. Only use color tokens defined in `tailwind.config.ts` — never arbitrary hex values
3. Follow the exact border-radius rules: `rounded-3xl` outer containers, `rounded-2xl` inner elements
4. Always use `border-2` (never `border` or `border-4`) for card borders
5. Verify the component surface color matches the established system (Section 8 of DESIGN_SYSTEM.md)
6. Never apply `lesson-prose` to components with dark (teal-900/teal-800) backgrounds
7. Check Section 12 (Do/Don't) before finalizing any component

**When adding new components:**
- Follow the eyebrow label pattern (Section 13)
- Confirm all Tailwind tokens used actually exist in `tailwind.config.ts`
- Maintain the 44px minimum touch target (global in globals.css)

This is non-negotiable. A wrong color token silently produces no output (Tailwind purges it). An unused or wrong token looks identical in the editor but breaks in production.

---

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

### Static blocks
```
paragraph      — html string (supports <strong>, <em>)
heading        — level 2 or 3, text string
analogy        — label? + html → amber card "💡 Piénsalo así"
warn           — title + html → rose card (danger/scam alerts)
info           — html → teal-50 card (supplementary info)
checklist      — items: string[] → sage checkmarks
table          — headers: string[] + rows: string[][] → overflow-scrollable
video          — embedId + title + channel → YouTube embed
scam-entry     — name + emoji + how + analogy + redFlags
```

### Interactive blocks (7 types)
```
opening-question — question + options[{text, response}] → dark teal gate card; ALWAYS first block
quick-check      — question + options[{text, correct?, explanation}] → cream quiz card
scenario         — setup + choices[{text, consequence}] → amber decision card
misconception    — myth + reality → rose/sage two-panel card
reveal           — prompt + answer (html) → blue progressive-disclosure card
bridge           — html → dark teal "¿Para qué me sirve esto?" connector
self-reflect     — prompt → purple free-text reflection card
```

Full component specs, usage rules, and design tokens: `docs/DESIGN_SYSTEM.md` Section 8.
Pedagogy usage rules and rhythm principles: `docs/PEDAGOGY.md` Strategy 11.
