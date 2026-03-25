# Cripto Para Todos — Design System

> **For Claude:** Read this document before making any UI or component changes. Applying the wrong color, shadow, radius, or spacing is a design regression. Treat these tokens as immutable design laws — don't approximate or substitute.

---

## 1. Design Philosophy

**Warm, trustworthy, accessible.** Every visual decision must reduce anxiety, not add to it. Our audience is Spanish-speaking women 40–65 who may be skeptical of technology. The interface must feel:

- **Warm** — cream backgrounds, teal greens, amber accents. Never cold, sterile, or corporate.
- **Legible** — large base font, generous line height, high contrast text on every surface.
- **Spacious** — breathing room between elements. Never crowded or overwhelming.
- **Confident** — rounded corners, soft shadows, friendly emoji icons. Not playful/childish — warm and professional.

---

## 2. Color Tokens

All colors are defined in `tailwind.config.ts`. Never use arbitrary hex values inline — always use a named token.

### Primary Palette — Teal (Brand / Trust)

| Token | Hex | Usage |
|-------|-----|-------|
| `teal-950` | `#0D2B22` | Deepest shadow, rarely used |
| `teal-900` | `#1B4332` | **Primary brand color.** Dark cards (opening-question, bridge, nav header). Never text on cream bg. |
| `teal-800` | `#2D6A4F` | Secondary teal surfaces, hover states on dark backgrounds |
| `teal-700` | `#40916C` | Interactive borders on light surfaces (hover), icon accents |

### Accent Palette — Amber (Action / Warmth)

| Token | Hex | Usage |
|-------|-----|-------|
| `amber-50` | `#FFFBEB` | Very subtle amber background (avoid; prefer cream-100) |
| `amber-100` | `#FEF3C7` | Scenario card background, light amber fills |
| `amber-200` | `#FDE68A` | Warn box border, decorative |
| `amber-400` | `#FBBF24` | **Primary CTA button background.** High-visibility action buttons. |
| `amber-500` | `#F59E0B` | CTA hover state |
| `amber-600` | `#D97706` | Focus ring color, amber text on light backgrounds |
| `amber-700` | `#B45309` | Amber heading text, scenario labels |

### Background Palette — Cream (Rest / Neutral)

| Token | Hex | Usage |
|-------|-----|-------|
| `cream-50` | `#FEFCF8` | Elevated card backgrounds (slightly warmer than page bg) |
| `cream-100` | `#FBF8F4` | **Page background.** Also QuickCheck card bg. |
| `cream-200` | `#F5EFE6` | Section dividers, zebra stripes in tables |
| `cream-300` | `#EDE3D5` | Borders on light components (default card border) |

### Text Palette — Brown (Legible / Warm)

| Token | Hex | Usage |
|-------|-----|-------|
| `brown-900` | `#2C1A0E` | **Primary body text.** Maximum contrast on cream. |
| `brown-700` | `#6B4E3D` | Secondary text, subheadings, label text |
| `brown-500` | `#9E7B6A` | Tertiary / helper text, timestamps |
| `brown-300` | `#C9A99A` | Placeholder text, disabled states, decorative |

### Semantic Palette — Sage (Success / Correct)

| Token | Hex | Usage |
|-------|-----|-------|
| `sage-900` | `#1A4731` | Success text on light backgrounds |
| `sage-700` | `#2D7A5F` | Success border, checkmark icon |
| `sage-100` | `#D1FAE5` | Correct-answer highlight, misconception "La realidad" bg |

### Semantic Palette — Rose (Error / Warning / Danger)

| Token | Hex | Usage |
|-------|-----|-------|
| `rose-700` | `#BE123C` | Error text |
| `rose-100` | `#FFE4E6` | Wrong-answer highlight, myth bg in misconception |

> **Note on Tailwind defaults:** Our config *extends* Tailwind's default palette, but for teal, amber, cream, brown, sage, and rose — always use our custom tokens. Do not use Tailwind's built-in `green-*`, `yellow-*`, `gray-*`, etc. unless explicitly approved.

---

## 3. Typography

### Fonts

| Family | Variable | Usage |
|--------|----------|-------|
| `Fraunces` | `font-display` | Headings, lesson titles, CTA button text, question prompts. Optical size 9–144. Warm serif — implies trust and editorial quality. |
| `Plus Jakarta Sans` | `font-sans` (default) | All body text, labels, UI text. Modern, highly legible at small sizes. |

### Scale

The base font size is user-controlled via `[data-font-size]` on `<html>`:

| Setting | Base Size |
|---------|-----------|
| Small | 16px |
| Medium (default) | 18px |
| Large | 21px |

All `rem`-based sizes scale automatically. Always use `rem`, never `px` for text.

### Type Roles

| Role | Classes | Example Use |
|------|---------|-------------|
| Page title / Hero | `font-display font-bold text-4xl leading-tight` | Lesson title on lesson page |
| Section heading H2 | `font-display font-bold text-teal-900 text-2xl mt-8 mb-3 leading-snug` | Major section break in lesson |
| Section heading H3 | `font-display font-bold text-teal-800 text-xl mt-6 mb-2 leading-snug` | Sub-section in lesson |
| Component question | `font-display font-semibold text-teal-900 text-lg leading-snug` | Inside interactive blocks (QuickCheck, Reveal, etc.) |
| Body prose | `lesson-prose` class (font-size 1.05rem, line-height 1.8, color #4A3728) | Lesson paragraphs only |
| Body UI | `text-base text-brown-900 leading-relaxed` | Card text, descriptions |
| Label / eyebrow | `text-sm font-semibold uppercase tracking-wide` + semantic color | Block type labels ("Comprueba lo que aprendiste") |
| Helper / meta | `text-sm text-brown-500` | "Nadie va a leer esto", timestamps |
| Placeholder | `placeholder-brown-300` | Textarea placeholders |

**⚠️ Warning — `lesson-prose` on dark backgrounds:** The `.lesson-prose` CSS class forces `color: #4A3728` via a global rule. Never apply `lesson-prose` inside dark-background components (teal-900, teal-800). Use Tailwind arbitrary variants instead: `[&_strong]:text-white [&_em]:text-teal-200`.

---

## 4. Spacing & Layout

### Spacing Scale

We use Tailwind's default 4px grid. Key values:

| Token | Size | Use |
|-------|------|-----|
| `gap-2` | 8px | Tight icon-label pairs |
| `gap-3` | 12px | Between choice buttons in interactive blocks |
| `gap-5` | 20px | Between card sections |
| `px-4 py-3` | 16/12px | Standard button padding |
| `px-5 py-4` | 20/16px | Card inner padding (compact) |
| `p-5` | 20px | Card padding (interactive blocks) |
| `p-6` | 24px | Card padding (prominent / hero cards) |
| `mb-3` | 12px | After block label / eyebrow |
| `mb-4` | 16px | After question prompt |
| `mb-5` | 20px | After heading in paragraph prose |
| `my-6` | 24px vertical | Standard block margin (most interactive components) |
| `my-8` | 32px vertical | Bridge block (slightly more breathing room) |
| `space-y-6` | 24px | Between lesson content blocks in LessonContent |

### Container & Max Width

Lesson content is naturally constrained by the parent layout. Never add explicit max-width inside lesson components — the layout file controls this.

### Touch Targets

All interactive elements must be **minimum 44px tall** — enforced globally in `globals.css`. Never shrink a button below this.

---

## 5. Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `rounded-2xl` | 16px | Buttons, option pills, inner cards, table cells |
| `rounded-3xl` | 24px | Block containers (all interactive lesson components) |
| `rounded-full` | 50% | Circular badges (checklist checkmarks, XP icons) |

**Rule:** The outer container of every lesson block is `rounded-3xl`. Interactive elements inside (buttons, option rows) are `rounded-2xl`. Never mix — a button inside a `rounded-3xl` card must be `rounded-2xl`.

---

## 6. Shadows

| Token | Value | Use |
|-------|-------|-----|
| `shadow-warm` | `0 4px 24px rgba(44,26,14,0.08)` | Standard card elevation (lesson cards on dashboard) |
| `shadow-warm-lg` | `0 8px 40px rgba(44,26,14,0.12)` | Modal-like elevated surfaces, quiz panel |

**Rule:** Most lesson content blocks do not use shadows — they rely on `border-2` for definition. Shadows are reserved for cards that sit on top of other content (modals, quiz panels, dashboard lesson cards).

---

## 7. Borders

| Pattern | Use |
|---------|-----|
| `border-2 border-cream-300` | Default container on cream background |
| `border-2 border-amber-300` | Analogy box, Scenario card, WarnBox |
| `border-2 border-rose-200` | Misconception myth panel, WarnBox |
| `border-2 border-teal-200` | InfoBox |
| `border-2 border-purple-200` | SelfReflect card |
| `border-2 border-blue-200` | Reveal card |
| `border-2 border-sage-700` | Correct answer highlight |
| `border-2 border-rose-300` | Wrong answer highlight |
| `border-2 border-white` | Selected option on dark (OpeningQuestion) |

**Rule:** Always `border-2` (2px) — never `border` (1px) or `border-4`. The visual weight of 2px is calibrated for our audience's visual acuity.

---

## 8. Component Library

### 8.1 Lesson Content Blocks — Static

#### `AnalogyBox` — `💡 Piénsalo así`
```
Container: bg-amber-50 border-2 border-amber-300 rounded-2xl px-5 py-4 my-6
Label: font-display font-bold text-amber-700 text-base mb-2
Content: text-amber-900 leading-relaxed text-[1.05rem]
```
**Use:** After every major new concept. Required for all lessons. Label defaults to "💡 Piénsalo así" — can be overridden.

#### `InfoBox` — General info callout
```
Container: bg-teal-50 border-2 border-teal-200 rounded-2xl px-5 py-4 my-6
Content: text-teal-900 leading-relaxed text-[1.05rem]
```
**Use:** Supplementary information, factual callouts, non-critical tips.

#### `WarnBox` — Warning / danger alert
```
Container: bg-rose-50 border-2 border-rose-300 rounded-2xl px-5 py-4 my-6  ← note: rounded-2xl (not 3xl)
Title: font-semibold text-rose-800 text-base mb-2
Content: text-rose-900 leading-relaxed text-[1.05rem]
```
**Use:** Scam alerts, high-stakes warnings, irreversible actions. Sparingly — max 2 per lesson.

#### `Misconception` — Myth vs. Reality panel
```
Container: rounded-3xl overflow-hidden border-2 border-rose-200 my-6
Myth panel: bg-rose-50 px-5 py-4 | icon: ✗ text-rose-500 | label: "Mito común" text-xs font-bold text-rose-500 uppercase | text: text-rose-900 text-base
Reality panel: bg-sage-100 px-5 py-4 border-t-2 border-rose-200 | icon: ✓ text-sage-700 | label: "La realidad" text-xs font-bold text-sage-700 uppercase | text: text-sage-900 text-base
```
**Use:** When a common wrong belief must be explicitly corrected. More effective than simply stating the truth.

---

### 8.2 Lesson Content Blocks — Interactive

#### `OpeningQuestion` — Lesson gate / activation
```
Container: bg-teal-900 rounded-3xl p-6 text-white my-6
Eyebrow: text-sm font-semibold text-teal-300 uppercase tracking-wide mb-3
Question: font-display font-bold text-xl leading-snug mb-5
Option (unselected): bg-teal-800 text-white border-2 border-teal-700 rounded-2xl px-4 py-3 hover:border-teal-400 hover:bg-teal-700
Option (selected): bg-white text-teal-900 border-2 border-white rounded-2xl px-4 py-3
Response box: bg-teal-800 rounded-2xl px-4 py-3 text-teal-100 text-base mt-5 mb-4
CTA button: bg-amber-400 hover:bg-amber-300 text-teal-900 font-display font-bold text-lg rounded-2xl py-3 w-full
```
**Behavior:** Renders before lesson content. Disappears when user clicks "Continuar a la lección →". Content below scrolls into view. Only one per lesson, always first block.

#### `QuickCheck` — Knowledge check (formative)
```
Container: bg-cream-100 border-2 border-cream-300 rounded-3xl p-5 my-6
Eyebrow icon: 🧩 | label: text-sm font-semibold text-brown-700 uppercase tracking-wide
Question: font-display font-semibold text-teal-900 text-lg leading-snug mb-4
Option (default): bg-white text-brown-900 border-2 border-cream-300 rounded-2xl px-4 py-3 hover:border-teal-700 hover:bg-teal-50
Option (selected correct): bg-sage-100 text-sage-900 border-2 border-sage-700
Option (selected wrong): bg-rose-50 text-rose-800 border-2 border-rose-300 (no shake)
Option (correct, not selected): bg-sage-100 text-sage-900 border-2 border-sage-700
Option (other, dimmed): bg-white text-brown-400 border-2 border-cream-200 opacity-60
Icon prefix correct: ✓ | Icon prefix wrong: →
Feedback correct: bg-sage-100 text-sage-900 border border-sage-700/30 rounded-2xl px-4 py-3 mt-4 animate-pop-in
Feedback wrong: bg-amber-50 text-amber-900 border border-amber-300 rounded-2xl px-4 py-3 mt-4 animate-pop-in
Feedback prefix: font-semibold mr-1 | "¡Correcto! " or "No exactamente — "
```
**Rules:** Never say "Incorrecto". Never add shake/jiggle animation on wrong. Always show the correct answer. One correct option per question. Use after key concepts to reinforce retrieval.

#### `Scenario` — Decision scenario (applied learning)
```
Container: bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 my-6
Eyebrow icon: 🤔 | label: text-sm font-semibold text-amber-700 uppercase tracking-wide
Setup text: text-brown-900 text-base leading-relaxed mb-5 (supports whitespace-pre-line)
Choice button: bg-white text-brown-900 border-2 border-amber-200 rounded-2xl px-4 py-3 font-medium hover:border-amber-400 hover:bg-amber-50
Selected choice display: bg-white border-2 border-amber-300 rounded-2xl px-4 py-3 mb-3
  Label: text-sm text-amber-700 font-semibold block mb-1 "Tu elección:"
  Text: text-brown-900 text-base
Consequence: bg-teal-50 border border-teal-700/20 rounded-2xl px-4 py-3 text-teal-900 text-base leading-relaxed mb-4
Reset link: text-amber-700 hover:text-amber-900 text-sm font-medium underline "Ver otras respuestas"
```
**Rules:** No single "correct" choice — all choices are valid paths. Consequence text explains trade-offs without judgment. "Ver otras respuestas" always available so users can explore safely.

#### `Reveal` — Progressive disclosure (curiosity trigger)
```
Container: bg-blue-50 border-2 border-blue-200 rounded-3xl p-5 my-6
Eyebrow icon: 💭 | label: text-sm font-semibold text-blue-700 uppercase tracking-wide
Prompt: font-display font-semibold text-teal-900 text-lg leading-snug mb-4
Reveal button: bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold text-base rounded-2xl py-3 border-2 border-blue-200 hover:border-blue-300 w-full
Answer box: bg-white border-2 border-blue-200 rounded-2xl px-5 py-4 text-brown-900 text-base leading-relaxed animate-pop-in lesson-prose
```
**Rules:** Use for "do you know this?" moments before delivering the answer. `lesson-prose` on the answer box is safe here because it's white background.

#### `Bridge` — Investment relevance connector
```
Container: bg-teal-900 rounded-3xl px-6 py-5 my-8
Eyebrow icon: 🔗 | label: text-sm font-semibold text-teal-300 uppercase tracking-wide
Content: text-teal-100 text-base leading-relaxed [&_strong]:text-white [&_em]:text-teal-200
```
**Rules:** NEVER use `lesson-prose` here — it forces dark brown text invisible on dark bg. Always use `[&_strong]:text-white [&_em]:text-teal-200` for inline HTML styling. Use at lesson end to connect concepts to the investment goal.

#### `SelfReflect` — Personal reflection (metacognition)
```
Container: bg-purple-50 border-2 border-purple-200 rounded-3xl p-5 my-6
Eyebrow icon: ✍️ | label: text-sm font-semibold text-purple-700 uppercase tracking-wide
Prompt: font-display font-semibold text-teal-900 text-lg leading-snug mb-1
Helper: text-brown-500 text-sm mb-4 "(Nadie va a leer esto — es solo para ti)"
Textarea: bg-white border-2 border-purple-200 rounded-2xl px-4 py-3 text-brown-900 text-base placeholder-brown-300 focus:border-purple-400 resize-none rows=3
Primary button: bg-purple-700 hover:bg-purple-600 text-white font-bold text-base rounded-2xl py-3 flex-1
Secondary button: text-purple-600 hover:text-purple-800 text-base font-medium py-3 flex-1
Completion state: bg-purple-50 border-2 border-purple-200 rounded-3xl px-5 py-4 flex items-center gap-3
  Icon: ✨ text-2xl | Message: text-purple-900 text-base font-medium
```
**Rules:** Always show "Continuar sin responder". Never required. Text is never submitted or stored. Use once per lesson maximum.

---

### 8.3 Navigation & Layout Components

#### Primary CTA Button
```
bg-amber-400 hover:bg-amber-300 text-teal-900 font-display font-bold text-lg rounded-2xl px-6 py-3
```
Use for: "Continuar a la lección →", "Comenzar quiz", "Siguiente lección"

#### Secondary / Ghost Button
```
text-teal-700 hover:text-teal-900 text-base font-medium (underline optional)
```
Use for: "Ver otras respuestas", "Continuar sin responder", "Hacer el quiz otra vez"

#### Lesson Card (Dashboard)
```
bg-white rounded-3xl shadow-warm p-6 border border-cream-300
```

#### Quiz Panel
```
bg-white rounded-3xl shadow-warm-lg p-6 max-w-2xl mx-auto
```

---

## 9. Interactive State System

### Focus
Global in `globals.css`: `outline: 3px solid #D97706 (amber-600); outline-offset: 3px; border-radius: 6px;`
Never override `:focus-visible`. This is the accessibility anchor.

### Hover on Dark Backgrounds (teal-900 surface)
```
hover:border-teal-400 hover:bg-teal-700
```

### Hover on Light Backgrounds (cream/white surface)
```
hover:border-teal-700 hover:bg-teal-50
```

### Disabled State
```
opacity-60 (do not use pointer-events-none alone — screen readers need disabled attribute)
```

### Animation Usage
| Animation | Class | Use |
|-----------|-------|-----|
| pop-in | `animate-pop-in` | Feedback messages, revealed answers — elements appearing after interaction |
| fade-up | `animate-fade-up` | Page-level content appearing |
| scale-in | `animate-scale-in` | Badges, XP rewards |
| Bounce-in | `animate-bounce-in` | Achievement unlocks |

**Rule:** Never animate more than one element simultaneously. No looping animations on content that stays on screen.

---

## 10. Emoji as Icons

All block-type labels use emoji as the leading icon. These are always `text-lg` (1.125rem) and sit in a `flex items-center gap-2` row alongside the label text.

| Block | Emoji | Label |
|-------|-------|-------|
| Opening Question | (none — full dark card) | "Antes de empezar" |
| Analogy | 💡 | "Piénsalo así" (or custom label) |
| Info | (none) | — |
| Warn | (none) | custom title prop |
| QuickCheck | 🧩 | "Comprueba lo que aprendiste" |
| Scenario | 🤔 | "Situación real" |
| Misconception | ✗/✓ | "Mito común" / "La realidad" |
| Reveal | 💭 | "¿Lo sabes?" |
| Bridge | 🔗 | "¿Para qué me sirve esto?" |
| SelfReflect | ✍️ | "Reflexión personal" |

**Rule:** Never use emoji as decorative elements outside these established patterns without design review. Never use emoji inside body text — only in labels.

---

## 11. Accessibility Rules

1. **Color alone never conveys meaning.** Correct/wrong states always pair color with an icon (✓ / →) and text prefix ("¡Correcto!" / "No exactamente —").
2. **All interactive elements have min 44px touch targets** — enforced in `globals.css`.
3. **Focus ring must never be removed** — the amber `:focus-visible` ring is required for keyboard users.
4. **Text contrast:**
   - Light surfaces: `brown-900` (`#2C1A0E`) on `cream-100` → contrast ratio ~13:1 ✅
   - Dark surfaces: `white` on `teal-900` (`#1B4332`) → contrast ratio ~10:1 ✅
   - Never use `brown-300` or `teal-300` as body text — eyebrow labels only.
5. **`disabled` attribute + `opacity-60`:** Always set HTML `disabled` on buttons when they're non-interactive — not just visual styling.
6. **`dangerouslySetInnerHTML` content** must only come from trusted TypeScript content files (lessons.ts). Never from user input or external APIs.
7. **Font size control:** Respect the `[data-font-size]` system — never hardcode `px` font sizes in lesson components.

---

## 12. Do / Don't Reference

| ✅ Do | ❌ Don't |
|-------|---------|
| Use `rounded-3xl` for block containers | Use `rounded-xl` or `rounded-lg` for outer cards |
| Use `border-2` on all cards | Use `border` (1px) for card borders |
| Use `text-brown-900` for body text | Use `text-gray-*` or `text-black` |
| Use `bg-cream-100` for neutral backgrounds | Use `bg-gray-50` or `bg-white` as a page bg |
| Use `font-display` for questions and CTAs | Use `font-sans` for lesson questions |
| Use `animate-pop-in` for revealed feedback | Use `transition` alone without animation class |
| Apply `[&_strong]:text-white` on dark bg components | Apply `lesson-prose` on dark bg components |
| Use `text-amber-700` for amber labels | Use `text-yellow-*` (wrong palette) |
| Use `sage-100` for success backgrounds | Use `green-100` or `emerald-100` |
| Gate content below opening-question | Let user read content before answering |
| Show correct answer after any QuickCheck selection | Only reveal correct on wrong answer |
| "No exactamente — " for wrong answers | "Incorrecto" or "Respuesta incorrecta" |
| min-h-[44px] or `py-3` on buttons | Tiny buttons with `py-1` |

---

## 13. Adding New Components

When creating any new UI component for this app:

1. **Pick colors only from the named token palette** (Section 2). No arbitrary hex.
2. **Use `rounded-3xl` for outer container, `rounded-2xl` for inner elements**.
3. **Always `border-2`** — never `border` or `border-4`.
4. **Choose an appropriate surface color:**
   - Dark / high-emphasis → `bg-teal-900 text-white` (OpeningQuestion, Bridge)
   - Warm / active → `bg-amber-50 border-amber-300` (Scenario, AnalogyBox)
   - Neutral / quiz → `bg-cream-100 border-cream-300` (QuickCheck)
   - Alert → `bg-rose-50 border-rose-200` (Warn, Misconception myth)
   - Success → `bg-sage-100 border-sage-700` (correct states)
   - Reflective → `bg-purple-50 border-purple-200` (SelfReflect)
   - Info → `bg-blue-50 border-blue-200` (Reveal)
   - Neutral info → `bg-teal-50 border-teal-200` (InfoBox)
5. **Eyebrow label pattern:** `<span className="text-lg">{emoji}</span><span className="text-sm font-semibold {color} uppercase tracking-wide">{label}</span>` inside `<div className="flex items-center gap-2 mb-3">`.
6. **Question text pattern:** `font-display font-semibold text-teal-900 text-lg leading-snug mb-4`.
7. **Test the component with `lesson-prose` sibling elements** to confirm no CSS bleed.
8. **Verify all colors exist in tailwind.config.ts** — Tailwind purges unused classes; a token not in config produces no output.

---

## 14. File Locations

| Type | Location |
|------|----------|
| Color tokens, fonts, radius, shadows, animations | `tailwind.config.ts` |
| Global CSS (lesson-prose, fonts, animations, focus ring) | `app/globals.css` |
| Lesson block components | `components/lessons/*.tsx` |
| Quiz components | `components/quiz/*.tsx` |
| Layout components | `components/layout/*.tsx` (if exists) or `app/(app)/layout.tsx` |
| Shared UI primitives | `components/ui/*.tsx` (if exists) |
| All lesson content data | `lib/content/lessons.ts` |
| Type definitions | `lib/content/types.ts` |
