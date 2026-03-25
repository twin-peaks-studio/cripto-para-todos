# Pedagogy Guide — Cripto Para Todos

> **Purpose:** This document defines the evidence-based learning principles that govern all course content, structure, and UX decisions on this platform. Any change to lessons, quizzes, progression, or feedback must be evaluated against these principles before implementation.
>
> **Audience:** Women 40–65, Spanish-speaking, beginner-level, mobile-first, self-paced. No instructor. Many have never engaged with financial education in a formal setting.

---

## Core Pedagogical Premise

This platform teaches conceptual financial literacy — not procedural skills. The goal is not "how to buy Bitcoin step by step" but rather "do I understand what Bitcoin is, why it has value, and how to protect myself from being misled about it?" That distinction changes everything about how content should be designed:

- **Conceptual learning requires building mental models**, not memorizing facts.
- **Transfer is the goal** — can a user recognize a scam in the wild? Can she evaluate an investment claim her nephew makes? Can she protect her seed phrase without being told to?
- **Misconceptions are more dangerous than ignorance.** Wrong beliefs about crypto (it's anonymous, it's a guaranteed investment, all wallets work the same way) are deeply held and must be directly confronted, not just replaced with correct facts.
- **Self-efficacy matters as much as knowledge.** If a user feels stupid during or after a lesson, she will not return. Every design decision must protect her confidence.

---

## Strategy 1: Retrieval Practice (Testing Effect)

### What the Research Says
Actively pulling information from memory is dramatically more effective than re-reading or re-watching content. The act of retrieval itself — not just exposure — strengthens memory traces.

- **Effect size: g = 0.50–0.61** (Rowland 2014; Adesope et al. 2017) — one of the two highest-evidence strategies in educational psychology
- Transfer effect: **d = 0.40** (Pan & Rickard 2018) — retrieval practice improves ability to apply knowledge to new situations, not just recall facts
- Effect is stronger when: (a) feedback is given after retrieval, (b) retrieval is effortful, (c) content is complex
- A mix of question formats (multiple choice + true/false + scenario-based) produces the strongest results

### Current State on This Platform
✅ End-of-lesson quizzes exist (one retrieval event per lesson)
❌ No mid-lesson retrieval checkpoints
❌ No cross-lesson retrieval (concepts from Lesson 1 are never tested again in later lessons)
❌ Quizzes are only multiple choice; no scenario-based or short-answer questions

### Opportunities

**1. Mid-Lesson Checkpoints**
After each major section within a lesson (every 3–5 min of reading), a single-question checkpoint. Not graded — just activates retrieval before the learner continues. Format: one multiple choice or true/false question. No fail state. Immediately shows correct answer + brief explanation.

> Example in Lesson 1 (¿Qué es el cripto?): After the blockchain section, ask:
> "¿Cuántas personas tienen una copia de la blockchain?" → All computers on the network.

**2. Cross-Lesson Review ("Repaso rápido")**
A review mode on the home dashboard that resurfaces 3–5 questions from lessons the user completed more than 24 hours ago. Draws from a pool of questions across all completed lessons. Earns a small XP reward. This is the single highest-ROI feature not yet built — it combines retrieval practice + spaced repetition in one UI.

**3. Scenario-Based Quiz Questions**
At least 1 of the 5 quiz questions per lesson should be a "¿Qué harías tú?" scenario. These force application (transfer), not just recall.

> Example: "Tu vecina te dice que invirtió $500 en una criptomoneda nueva y en una semana ganó $5,000. ¿Qué piensas?" → Options: (a) Pedirle que te enseñe / (b) Investigar antes de creer / (c) Invertir de inmediato también.

**4. Progressive Quiz Difficulty**
First 1–2 questions in each quiz: straightforward recall. Last 1–2 questions: application or scenario-based. This respects the beginner's need for early wins while building toward transfer.

---

## Strategy 2: Spaced Repetition (Distributed Practice)

### What the Research Says
Revisiting material after it has partially faded from memory is more effective than any amount of concentrated re-study. The forgetting curve is steep: ~50% of new information is forgotten within 1 hour; ~70% within a week without reinforcement.

- **High utility** (Dunlosky et al. 2013) — one of only two strategies rated "high utility" across all learning contexts
- The spacing interval should grow over time: review at 1 day, 3 days, 7 days, 14 days, 30 days
- The effect is amplified when spaced review is combined with retrieval (not re-reading)

### Current State on This Platform
❌ Zero spaced repetition. Once a lesson is completed, its content is never revisited.
❌ XP is only awarded once per lesson — no incentive to return to completed material.

### Opportunities

**1. Home Dashboard Review Cards**
After completing a lesson, a review card appears on the home dashboard at increasing intervals (Day 1, Day 3, Day 7). Each card presents 2–3 questions from completed lessons. Earns a small XP reward (10–20 XP) to make return visits feel worthwhile.

**2. Lesson-Opener Recall Prompt**
When a user starts Lesson 3, show a one-question warm-up from Lesson 1 or 2 before the new content begins. "Antes de empezar, recordemos algo de la última lección..."

**3. Spaced Quiz Regeneration**
Because quiz questions are AI-generated fresh each time, re-taking a quiz after a spacing interval naturally creates a spaced retrieval event. The "🔄 Hacer el quiz otra vez" button on completed lessons is already in place — the missing piece is a nudge that surfaces it at the right time interval (not just passively available).

**4. End-of-Course Cumulative Review**
After the final lesson (or Glosario), offer a cumulative "Gran Repaso" quiz pulling from all 8 lessons. Awards a final XP bonus. This is the highest-stakes retrieval event and the most powerful memory consolidation moment in the entire course.

---

## Strategy 3: Elaborative Interrogation & Self-Explanation

### What the Research Says
Prompting learners to ask "why does this make sense?" and to explain concepts in their own words forces deeper processing than passive reading. This is especially powerful for **conceptual** topics (like financial literacy) where the goal is building a mental model, not memorizing a procedure.

- Self-explanation outperforms elaborative interrogation alone for factual recall and conceptual understanding
- The mechanism: building connections between new and existing knowledge strengthens both retrieval and transfer
- **Especially effective for adult learners** — adults have richer prior experience to connect new knowledge to; activating that experience is the highest-leverage pedagogical move for this demographic

### Current State on This Platform
✅ "Piénsalo así" analogy boxes exist in every lesson — this is passive self-explanation scaffolding (well-designed)
❌ Analogy boxes are read, not responded to — the learner never generates their own explanation
❌ No prior knowledge activation at the start of lessons

### Opportunities

**1. Lesson-Opening Activation Question**
Before the first paragraph of each lesson, a single open-ended or reflective prompt. Not a quiz question — just something that activates the learner's existing mental model before new content is introduced. No right or wrong answer. Has a "Continuar" button.

> Example for Lección: Riesgos:
> "¿Alguna vez perdiste dinero de una manera que no esperabas? ¿Qué aprendiste de eso?"

> Example for Lección: ¿Qué es el cripto?:
> "¿Has escuchado hablar de Bitcoin antes? ¿Qué es lo primero que te viene a la mente?"

This activates schema, reduces cognitive resistance to new ideas, and makes the content feel personally relevant — all of which amplify retention.

**2. "En tus propias palabras" Reflection Prompt**
After a key "Piénsalo así" box, add an optional prompt: "¿Cómo le explicarías esto a una amiga?" with a simple free-text box (no submission required — just the act of trying to generate the explanation is the pedagogical event). A "No sé cómo explicarlo todavía" button is available as a low-pressure exit.

**3. Analogy Completion**
Instead of showing the full analogy, show the first half and ask the learner to complete it:
> "La blockchain es como un cuaderno donde todos en el vecindario anotan quién le pagó a quién. Eso significa que si alguien intenta cambiar un pago... ¿qué pasaría?"
→ Options: (a) Solo esa persona lo sabría / (b) Todos lo verían / (c) Nadie se daría cuenta

This converts a passive analogy box into an active retrieval + elaboration event.

---

## Strategy 4: Elaborated Feedback

### What the Research Says
Feedback is among the most powerful variables in all of education.

- **Effect size: d = 0.73** (Hattie 2009) — one of the highest in educational research
- Simple right/wrong feedback is weak. **Elaborated feedback** — explaining *why* an answer is wrong and connecting it to the underlying concept — outperforms simple correctness feedback for conceptual learning.
- For self-paced learners with no instructor, feedback text is the **only** misconception-correction mechanism in the system.
- Feedback that references the analogy used in the lesson is especially effective because it creates retrieval-to-analogy connections.
- **Encouraging framing** on wrong answers ("¡Casi! El concepto clave aquí es...") preserves self-efficacy. Harsh or neutral failure feedback suppresses motivation and reduces return visits.

### Current State on This Platform
❌ Feedback on wrong answers is likely basic (correct/incorrect display only)
❌ No connection between wrong-answer feedback and lesson analogies
❌ No misconception-specific counter-content

### Opportunities

**1. Per-Question Wrong-Answer Explanations**
Every quiz question should have a custom explanation for wrong answers that:
- States why the chosen answer is incorrect (not just what the correct one is)
- References the analogy from the lesson: "Recuerda que dijimos que la blockchain es como un cuaderno compartido..."
- Uses encouraging tone: "¡Buen intento! Esto confunde a mucha gente."

This requires the quiz generation prompt to include `explanation` fields per question, not just `correct` flags.

**2. "Mucha gente cree que..." Misconception Blocks**
Add a new content block type: `misconception`. Appears mid-lesson before the section most likely to generate wrong beliefs. Pattern:
> "⚠️ Mucha gente cree que Bitcoin es completamente anónimo. En realidad, todas las transacciones son públicas — solo que no tienen nombre adjunto. Es como escribir en un cuaderno donde todos pueden ver los números pero no los nombres."

This preemptively corrects the wrong mental model before the quiz tests it.

**3. Contextual Hint System**
On a second wrong answer to the same question (if retaking), show a hint that points directly to the relevant lesson section: "Pista: vuelve a la parte del cuaderno compartido en la lección."

---

## Strategy 5: Dual Coding (Verbal + Visual)

### What the Research Says
Verbal and visual information are processed by partially independent cognitive systems. Presenting information in both forms creates two independent retrieval pathways in memory — making recall more reliable and robust.

- **Picture superiority effect**: Images are consistently remembered better than words alone
- **Modality effect**: Audio narration + visual outperforms text + visual (two separate channels vs. one)
- **Redundancy warning**: A visual that just repeats the text adds no benefit and can impair learning by overloading the visual-verbal integration system. Visuals must *complement*, not duplicate.
- For older adults, visual anchors are particularly valuable because they reduce cognitive demand during the encoding phase.

### Current State on This Platform
❌ App is entirely text-based; no diagrams or visual metaphors
✅ Analogy boxes create strong verbal mental images (partial dual coding through language)
✅ Emojis provide lightweight visual anchors (better than nothing)

### Opportunities

**1. One Visual Per Key Concept**
Each lesson's most important concept should have a simple accompanying illustration or diagram:
- Lesson 1: A neighborhood ledger diagram (blockchain visualization)
- Lesson 2 (Bitcoin): A stack of 21 million gold coins with a "cap" label
- Lesson 3 (Ethereum): A vending machine vs. a bank teller comparison diagram
- Lesson 4 (Minería): A mining pick hitting a block with a reward coin
- Lesson 5 (Riesgos): A risk pyramid (safe → medium → high risk)
- Lesson 6 (Estafas): Red flag icons next to scam patterns
- Lesson 7 (Valor): Supply/demand scale illustration
- Lesson 8 (Inversión): Pie chart of a diversified portfolio

These do not need to be photorealistic — simple line-art or flat-design icons are more effective (less cognitive noise).

**2. Visual Progress Through the Lesson**
A subtle visual "reading map" at the top of each lesson showing how many sections it has and which one the user is on. Reduces cognitive load by removing uncertainty about "how much is left."

**3. Concept Summary Cards**
At the end of each lesson, a visual "key takeaways" card: 3–4 bullet points with an icon per point. This acts as a visual-verbal summary that supports dual encoding of the most important concepts.

---

## Strategy 6: Cognitive Load Management

### What the Research Says
Working memory holds approximately 4 items simultaneously. For novice learners — especially older adults with slower processing speed — cognitive overload is the primary dropout driver.

- **Worked example effect size: 0.52** (Crissman 2006) — showing a complete walkthrough before asking questions dramatically reduces unproductive cognitive effort
- **Chunking**: Breaking content into small, sequentially revealed units reduces intrinsic cognitive load
- **Split-attention effect**: Forcing learners to integrate two separate information sources (e.g., a diagram and its caption in different locations) is cognitively costly; keep related elements together
- **Expertise reversal**: As learners progress, scaffolding should be gradually removed — excessive support for advanced learners actually impairs performance

### Current State on This Platform
⚠️ Lessons may be long single-scroll pages — unknown how many concepts per scroll
⚠️ No scaffolding on early quiz questions
✅ Analogy-first structure reduces intrinsic load (familiar → unfamiliar)

### Opportunities

**1. Lesson Chunking with Section Markers**
Each lesson is divided into named sections with a visual separator. A section should contain one concept. Reading time estimate per section ("~2 min"). This reduces uncertainty and lets users exit/return to a known position.

**2. Worked Example as First Quiz Question**
The first question in any quiz should be the most supported — essentially a recall question about something stated explicitly in the lesson, not inference or application. This ensures users get at least one correct answer early (self-efficacy) and establishes a success foundation before harder questions.

**3. Progressive Disclosure for Complex Topics**
On complex topics (wallets, seed phrases, mining), lead with the simplest version first and add depth in a collapsible "Quiero saber más" section. Users who want more get it; users who are already overwhelmed are not penalized.

**4. One Concept Per Screen (Mobile)**
On mobile screens, each scroll position should ideally contain one complete thought. Avoid orphaned headings, half-cut analogy boxes, or questions that require scrolling up to answer.

---

## Strategy 7: Microlearning

### What the Research Says
Content broken into 3–5 minute standalone units significantly outperforms longer sessions for adult learners.

- Positive effects across diverse domains (Senandheera et al. 2024 systematic review)
- An RCT with elderly participants using 3–4 minute video clips showed significant literacy gains vs. standard instruction
- Higher completion rates; ability to repeat modules significantly improves retention
- **Especially relevant for this audience**: women 40–65 on mobile are likely engaging during short windows (waiting room, commute, 10 minutes before bed) — designing for interrupted, resumed sessions is essential

### Current State on This Platform
✅ Lessons are self-contained units
❌ Within a lesson, content is one long scroll with no sub-unit structure
❌ XP is awarded only on full lesson completion — no reward for partial progress
❌ No session resume point (re-opening a lesson always starts at the top)

### Opportunities

**1. Sub-Lesson Sections with Micro-Checkpoints**
Each lesson is divided into named reading sections (~3 min each). A section ends with a single non-graded question (no fail state). Completing a section saves progress automatically.

**2. Partial XP for Partial Completion**
If a user reads 60% of a lesson and closes the app, award partial XP (e.g., 40% of lesson XP) for the sections completed. This is critical for this demographic — a session interrupted mid-lesson should still feel rewarding.

**3. "Continúa donde lo dejaste" Resume State**
When a user re-opens a lesson they started but didn't finish, take them directly to the section they left off — not the beginning.

**4. Reading Time Estimates**
Every lesson and every section shows a reading time: "Esta lección: ~10 min" / "Esta sección: ~2 min". This directly reduces anxiety for users who are unsure whether they have enough time to engage.

---

## Strategy 8: Interleaving (Cross-Lesson Practice)

### What the Research Says
Mixing questions from different topics during practice forces learners to identify *which* concept applies — not just *how* to execute a known one. This builds the kind of discriminative judgment needed for real-world financial decisions.

- **Effect size: g = 0.42** (Brunmair & Richter 2019 meta-analysis)
- **CRITICAL CAVEAT**: Interleaving is harmful for novices who haven't yet established foundational knowledge. The research is unambiguous: blocked practice first, interleaved practice later.
- Optimal sequence: complete each lesson in order (blocked) → introduce mixed review after lesson 4

### Current State on This Platform
✅ Sequential lesson structure (blocked) is correct for initial learning
❌ No cross-lesson mixing in review or quiz contexts

### Opportunities

**1. "Repaso Mezclado" After Lesson 4**
After completing the 4th lesson, a new option appears on the home dashboard: "Repaso mezclado." This is a 5-question quiz pulling from all completed lessons — including questions the user got wrong before. Rewards XP.

**2. End-of-Course Interleaved Assessment**
After the final lesson, a 10-question comprehensive quiz that mixes concepts from all 8 lessons. This is the most powerful interleaving event and doubles as a final self-assessment. Framed as: "¿Cuánto has aprendido? Pon a prueba todo lo que sabes."

**3. No Interleaving During Initial Learning**
Do not mix concepts within a single lesson. Each lesson should stay focused on its own topic. Cross-concept connections should only appear in the review/spaced context.

---

## Strategy 9: Gamification

### What the Research Says
Game mechanics (XP, levels, badges, progress bars) sustain motivation for self-paced learners by satisfying three core psychological needs (Self-Determination Theory): competence, autonomy, and relatedness.

- **SMD = 0.34 for enjoyment/satisfaction in older adults** (JMIR Aging 2025)
- Effective when: rewards are tied to meaningful progress, levels have cultural resonance, focus is on personal improvement (not competition)
- **Gamification fatigue**: motivation drops sharply when game mechanics feel arbitrary or unrelated to learning meaning
- **Leaderboards demotivate beginners** when they see an uncloseable gap
- **Time pressure and countdown mechanics increase anxiety** in older adults — avoid entirely

### Current State on This Platform
✅ XP system exists
✅ Level names are culturally resonant (Principiante → Curiosa → Aprendiz → Conocedora → Experta)
✅ Level-up celebration animation on quiz completion
❌ No streak mechanic or habit formation loop
❌ XP only earnable once per lesson — no return visit reward
❌ No progress visualization within a lesson (how far through am I?)

### Opportunities

**1. Streak Mechanic**
A "días seguidos" counter visible on the home dashboard. Even a 2-day streak earns a small XP bonus. This creates a daily return habit without competitive pressure.

**2. Lesson Progress Bar**
A visual progress bar within each lesson showing how far through the content the user is. Reduces anxiety about "how much is left" and gives micro-dopamine hits as it fills.

**3. Review XP**
Spaced review sessions ("Repaso rápido") award 10–20 XP per completion. This makes revisiting old material feel rewarding instead of like remediation. Critical for sustaining engagement after the course is "complete."

**4. Milestone Messages**
At the halfway point of the course (after lesson 4), a special message acknowledging the milestone: "¡Llegaste a la mitad! Ya conoces más de cripto que el 90% de la gente." These micro-celebrations sustain motivation through the "valley of disappointment" mid-course.

**5. Completion Badge System (Future)**
Each lesson earns a small topic-specific badge (₿ for Bitcoin, 🛡️ for Estafas, etc.) displayed on the user's profile. Visual proof of progress that is personally meaningful and sharable.

---

## Strategy 10: Andragogy — Adult Learning Principles (Knowles)

### What the Research Says
Adult learners are categorically different from children in how they learn. Malcolm Knowles' six principles of andragogy are highly validated for this demographic:

1. **Self-concept**: Adults are self-directed; they resist being told what to think
2. **Experience**: Adults have a rich reservoir of experience that is the richest resource for their own learning
3. **Readiness**: Adults are ready to learn when content is relevant to their real-life situation
4. **Orientation**: Adults learn best when content is immediately applicable, not stored for theoretical future use
5. **Motivation**: Adults are internally motivated; external rewards (XP) should support, not replace, internal motivation
6. **Need to know**: Adults want to know *why* they are learning something before they engage with it

### Opportunities Across the Platform

**1. "¿Para qué me sirve esto?" at the Start of Every Lesson**
Each lesson subtitle or opening sentence should directly answer the practical relevance question. Don't start with a definition — start with a real-life scenario the learner recognizes.

> Not: "Bitcoin es la primera criptomoneda del mundo."
> Better: "Si alguna vez escuchaste hablar de Bitcoin y no supiste qué decir, esta lección te da el lenguaje para entenderlo — y para saber si vale la pena considerarlo."

**2. Examples Grounded in This Audience's Financial Reality**
The most effective examples for this demographic are not abstract American finance examples. They should reference:
- Remittances and sending money across borders (highly relevant for Latin American users)
- Exchange rate anxiety (dollar/peso volatility)
- Distrust of formal banking systems (significant in LATAM)
- Informal savings systems (tandas, rifas)
- Protecting money from inflation

These are the actual mental frameworks this audience uses to evaluate financial decisions. Connecting crypto concepts to them creates immediate relevance and leverages existing schema.

**3. Agency Framing (Not Fear Framing)**
The risk and scam lessons must preserve agency. Framing should be: "Aquí está lo que debes saber para tomar buenas decisiones" — not "aquí está todo lo que puede salir mal." Fear-based financial education suppresses engagement and self-efficacy. Agency-based education improves both.

---

## Strategy 11: Interactive Block System (UX + Pedagogy)

### The Core Problem with Passive Reading

Every lesson currently follows the same pattern: paragraph → analogy → paragraph → table → video → quiz. The learner is a passive recipient throughout, then suddenly asked to retrieve information she never actively engaged with. This is the least effective learning mode known to educational psychology (Dunlosky et al. 2013 — re-reading rated "low utility").

**The solution is not gamification. It is rhythm.**

No more than 3–4 paragraphs of pure reading should appear without a moment that shifts the learner from passive to active — even for 10 seconds. This is called the **Receive → Engage → Receive → Engage** rhythm, and it should be the structural backbone of every lesson.

### The Rhythm Principle

```
RECEIVE → ENGAGE → RECEIVE → ENGAGE → RECEIVE → ENGAGE
(read)    (do)     (read)    (do)     (read)    (do)
```

"Engage" does not always mean answering a question. It means anything that requires the learner to DO something: predict, choose, reflect, respond, or decide. Even a 10-second tap-to-reveal creates an active encoding moment stronger than a paragraph read passively.

### Design Principles for Interactions

- **Warm, not gamified.** Interactions should feel like a conversation with a knowledgeable friend, not a game show. No points, timers, streaks, or scores within lessons.
- **No penalty for wrong answers.** Every wrong-answer response should be encouraging and explanatory: "Buen intento — esto confunde a mucha gente. Lo que realmente pasa es..."
- **Always resolve immediately.** The learner should never be left in doubt. Every interaction resolves with the correct understanding before the lesson continues.
- **Mobile-first interaction design.** All interactions are tap-based, single-step, large touch targets. No drag-and-drop, no typing required (except optional self-reflect).
- **Respectful of intelligence.** This audience is 40–65, educated in life experience. Interactions should feel substantive, not childish. The tone is always peer-to-peer, never teacher-to-student.

### The 7 New Block Types

---

#### 1. `opening-question`
**Pedagogical basis:** Pre-testing effect (g = 0.36 — attempting to answer before learning improves subsequent encoding); prior knowledge activation (andragogy — adults anchor new knowledge to existing experience).

**What it does:** The very first thing the learner sees before any lesson content. A single question that surfaces existing beliefs or prior knowledge. No right or wrong answer. Requires a selection to continue. Each option shows a warm, personalized 1-sentence acknowledgment before the lesson begins.

**When to use:** Every lesson, always first. The question should surface a belief the lesson will either confirm, correct, or expand.

**Content spec:**
```
{
  type: 'opening-question',
  question: string,
  options: Array<{
    text: string,
    response: string  // warm acknowledgment shown after selection
  }>
}
```

**Example:**
```
Question: "¿Qué es lo primero que piensas cuando escuchas 'Bitcoin'?"
Options:
  "Es muy arriesgado" → "Eso es muy común. Esta lección te va a dar
                          más contexto para evaluar ese riesgo."
  "No sé qué es" → "Perfecto punto de partida. Vamos paso a paso."
  "La gente gana mucho dinero" → "Eso es parte de la historia —
                                   y también hay otra parte.
                                   Vamos a ver las dos."
```

---

#### 2. `quick-check`
**Pedagogical basis:** Retrieval practice (g = 0.50–0.61); mid-content retrieval checkpoints are more effective than end-only quizzes; elaborated feedback (d = 0.73).

**What it does:** A single question embedded directly after the concept it tests. Not graded. No fail state. Shows correct answer + 1-sentence explanation immediately. Feedback references the analogy from the lesson where possible.

**When to use:** After each major concept section within a lesson. Target: 2–3 per lesson. Always placed immediately after the content it tests, not at the end.

**Content spec:**
```
{
  type: 'quick-check',
  question: string,
  options: Array<{
    text: string,
    correct?: boolean,
    explanation: string  // shown after any selection
  }>
}
```

**Rules:**
- Only one correct answer
- Wrong answer explanation must reference the lesson analogy when possible
- Correct answer explanation adds one piece of information beyond what was in the text
- Never say "Incorrecto" — use "No exactamente..." or "Casi — ..."

---

#### 3. `scenario`
**Pedagogical basis:** Scenario-based transfer learning (d = 0.40 for transfer vs. recall-only); social learning (named characters make situations concrete and personally relevant).

**What it does:** A brief real-life situation involving a named character. The learner chooses what she would do or advise. Both/all paths lead to useful learning — there is no "you lose" branch. Every path resolves with an explanation and then continues to the lesson.

**When to use:** When a concept has a direct real-world application decision. Best placed after 2–3 concepts have been introduced, so the scenario can integrate multiple ideas. Target: 1–2 per lesson.

**Content spec:**
```
{
  type: 'scenario',
  setup: string,        // the situation description
  choices: Array<{
    text: string,
    consequence: string  // what happens + why, shown after selection
  }>
}
```

**Rules:**
- Use recurring character names from the lesson analogies (Rosa, Carmen, María)
- Every choice must be respectfully treated — even the wrong choice gets an explanatory response, not a rebuke
- Consequence text should be 2–3 sentences max
- After reading consequence, learner taps "Continuar" to proceed

---

#### 4. `misconception`
**Pedagogical basis:** Conceptual change theory — presenting correct information alone does not replace wrong prior beliefs; the wrong belief must be named and directly confronted first (Chi 2008; Vosniadou 2013).

**What it does:** A visually distinct block that explicitly names a common wrong belief and corrects it. Not a question — a clear "myth vs. reality" statement. Especially critical for financial literacy, where folk theories are deeply held and dangerous.

**When to use:** Before or immediately after any concept that commonly activates a wrong prior belief. Every lesson should have at least 1. The scam lesson should have several.

**Content spec:**
```
{
  type: 'misconception',
  myth: string,     // "Mucha gente cree que..."
  reality: string   // "En realidad..."
}
```

**Visual design:** Two-column or two-row format. Myth in a muted red/orange tone with ✗. Reality in teal/green with ✓. Visually memorable so it stands out from regular paragraph reading.

---

#### 5. `reveal`
**Pedagogical basis:** Curiosity gap effect — posing a question before providing the answer creates a motivational state that improves encoding of the answer (Loewenstein 1994); prediction + feedback learning effect.

**What it does:** Shows a question or prompt, requires a single tap to reveal the answer. The learner is implicitly invited to form a prediction before tapping. The reveal moment creates a stronger memory trace than reading the fact directly in a paragraph.

**When to use:** For surprising facts, key statistics, or "the answer to the question you've been wondering about" moments. Best for numerical facts or counterintuitive truths. Target: 1 per lesson.

**Content spec:**
```
{
  type: 'reveal',
  prompt: string,   // the question or "do you know...?" setup
  answer: string    // revealed on tap, can include HTML
}
```

---

#### 6. `bridge`
**Pedagogical basis:** Advance organizers (Ausubel 1960 — connecting new knowledge to meaningful goals improves retention 15–20%); andragogy principle of immediate relevance — adults need to know "why am I learning this?" before encoding happens optimally.

**What it does:** A short block at the end of each lesson that explicitly connects what was just learned to the central course question: understanding crypto/Bitcoin as an investment asset. Not interactive — but pedagogically essential. Answers "¿para qué me sirve esto?" before the learner asks it.

**When to use:** Always at the end of every lesson, immediately before the video and quiz. One per lesson, every lesson.

**Content spec:**
```
{
  type: 'bridge',
  html: string  // 2–4 sentences connecting lesson concept to investment goal
}
```

**Rules:**
- Must reference a specific concept from the lesson just completed
- Must explicitly connect forward to the investment understanding goal
- Tone: warm and forward-looking, not a summary ("Ahora entiendes X. Eso importa para la pregunta central porque...")
- Never just a lesson summary — must answer "why does this matter for investing?"

---

#### 7. `self-reflect`
**Pedagogical basis:** Self-explanation effect (Chi et al. 1994 — generating your own explanation is dramatically more effective for conceptual retention than re-reading); elaborative interrogation.

**What it does:** An optional reflection prompt. A free-text area that is never submitted, never evaluated, never seen by anyone. Just the act of attempting to generate an explanation in the learner's own words is the learning event. Can be skipped with a "Continuar" button.

**When to use:** After the most complex analogy or concept in a lesson. Never more than once per lesson. Always optional. Best framing: "¿Cómo le explicarías esto a una amiga?"

**Content spec:**
```
{
  type: 'self-reflect',
  prompt: string  // the reflection question
}
```

**Rules:**
- Always optional — prominent "Continuar sin responder" button
- Explicit privacy note: "(Nadie va a leer esto — es solo para ti)"
- Never use language that implies the learner should know the answer
- The text area should be low-pressure: placeholder text like "Escribe lo que se te ocurra..."

---

### Standard Lesson Template

Every lesson should follow this structural template:

```
1. opening-question        ← activates prior knowledge
2. paragraph (relevance hook)  ← answers "¿para qué me sirve esto?"
3. [content section 1]
   - paragraph(s)
   - analogy
   - quick-check OR reveal
4. [content section 2]
   - misconception (if applicable)
   - paragraph(s)
   - analogy
   - scenario
5. [content section 3]
   - paragraph(s)
   - warn/info boxes
   - self-reflect (optional, for most complex concept)
6. bridge               ← connects to investment goal
7. video
```

**Golden rule:** No more than 3–4 paragraphs of pure reading without one interactive element.

---

### Updated Pedagogy Checklist for Content Changes

When adding or editing any lesson content block, also verify:

- [ ] Does the lesson open with an `opening-question` that activates prior beliefs?
- [ ] Is there a personal relevance hook ("¿para qué me sirve esto?") in the first paragraph?
- [ ] Are there 2–3 `quick-check` blocks placed immediately after the concepts they test?
- [ ] Is there at least 1 `scenario` block that forces a real-world application decision?
- [ ] Is there at least 1 `misconception` block for the most commonly held wrong belief about this topic?
- [ ] Is there a `bridge` block at the end connecting this lesson to the investment understanding goal?
- [ ] Does the lesson follow the Receive → Engage → Receive → Engage rhythm?
- [ ] Are all wrong-answer responses encouraging and explanatory (not "Incorrecto")?
- [ ] Is every interactive element mobile-friendly (tap-based, large targets)?

---

## Pedagogy Checklist for Content Changes

Before adding, editing, or restructuring any lesson, quiz, or progression element, verify against this checklist:

### Content Changes
- [ ] Does this lesson/section open with a personal relevance hook? ("¿Para qué me sirve esto?")
- [ ] Does it activate prior knowledge before introducing new concepts?
- [ ] Is there at least one "Piénsalo así" analogy box per major concept?
- [ ] Are complex concepts chunked into sections of ~3 min each?
- [ ] Does the most important concept have or warrant a visual element?
- [ ] Are there any common misconceptions about this topic that should be pre-emptively addressed with a `misconception` block?
- [ ] Is the language free of jargon, or does jargon have immediate plain-language definitions?
- [ ] Does the lesson answer "¿Para qué me sirve esto?" before the end of the first scroll?

### Quiz Changes
- [ ] Does at least 1 of the 5 questions test application/transfer, not just recall?
- [ ] Is the first question achievable (confidence-building recall)?
- [ ] Does every question have a custom wrong-answer explanation that references the lesson analogy?
- [ ] Are questions scenario-based where possible ("¿Qué harías tú...?")?
- [ ] Does the pass/fail screen use encouraging language regardless of outcome?
- [ ] Is the fail screen framing motivational rather than shame-inducing?

### Progression / UX Changes
- [ ] Does the change respect cognitive load? (One concept per screen, no split-attention)
- [ ] Does partial completion earn some reward? (Microlearning principle)
- [ ] Is the change free of time-pressure mechanics? (Older adult anxiety)
- [ ] Does the change support spaced return visits? (Spaced repetition principle)
- [ ] Is the motivation framing personal progress, not competition?

---

## Feature Backlog (Prioritized by Evidence Strength)

| Priority | Feature | Strategy | Evidence |
|---|---|---|---|
| 🔴 P0 | Elaborated wrong-answer feedback with analogy callbacks | Elaborated Feedback | d = 0.73 |
| 🔴 P0 | Spaced review cards on home dashboard ("Repaso rápido") | Spaced Repetition + Retrieval | g = 0.50–0.61 |
| 🟠 P1 | Lesson-opening prior knowledge activation prompt | Andragogy + Elaborative Interrogation | Moderate-High |
| 🟠 P1 | "Mucha gente cree que..." misconception blocks | Elaborated Feedback + Conceptual Learning | High for financial literacy |
| 🟠 P1 | Mid-lesson single-question checkpoints | Retrieval Practice | g = 0.50–0.61 |
| 🟠 P1 | Per-lesson visual (diagram/illustration) for key concept | Dual Coding | Picture superiority effect |
| 🟡 P2 | Partial XP for partial lesson completion | Microlearning + Gamification | High completion rate impact |
| 🟡 P2 | Lesson section markers + reading time estimates | Microlearning + Cognitive Load | High for older adults |
| 🟡 P2 | End-of-course interleaved "Gran Repaso" quiz | Interleaving + Retrieval | g = 0.42 |
| 🟡 P2 | Lesson resume from last position | Microlearning | Completion rate |
| 🟢 P3 | Daily streak mechanic + streak XP bonus | Gamification + Habit Formation | SMD = 0.34 |
| 🟢 P3 | Milestone message at lesson 4 midpoint | Gamification + Self-Efficacy | Moderate |
| 🟢 P3 | "Repaso Mezclado" cross-lesson quiz after lesson 4 | Interleaving | g = 0.42 (only after foundations) |
| 🟢 P3 | "En tus propias palabras" self-explanation prompts | Self-Explanation | Moderate-High |
| 🔵 P4 | Concept summary card at lesson end (visual + text) | Dual Coding + Retrieval | Moderate |
| 🔵 P4 | Lesson completion badge system | Gamification | Moderate |
| 🔵 P4 | Analogy completion (fill-in-the-blank analogy boxes) | Elaborative Interrogation | Moderate |

---

## What NOT To Do (Anti-Patterns)

These practices are explicitly contra-indicated by the research for this audience:

| Anti-Pattern | Why It's Harmful | Research Basis |
|---|---|---|
| Leaderboards / ranking vs. other users | Demotivates beginners who see uncloseable gap | SDT; Gamification fatigue research |
| Countdown timers on quizzes | Increases anxiety in older adults; impairs performance | Cognitive load + older adult UX research |
| Shame-framing on wrong answers | Suppresses self-efficacy; reduces return visit rate | Self-efficacy + Financial education research |
| Interleaving content within a new lesson | Harmful for novice learners without foundational knowledge | Brunmair & Richter 2019; Undesirable difficulty |
| Long unbroken text walls | High dropout; cognitive overload | Microlearning + CLT |
| Abstract examples with no personal relevance | Fails andragogy principle; no schema activation | Knowles; CRP (Culturally Relevant Pedagogy) |
| Re-reading as a review mechanism | One of the least effective study strategies known | Dunlosky et al. 2013 |
| One-size-fits-all feedback (right/wrong only) | Fails to correct misconceptions; low transfer | Hattie 2009; Conceptual learning research |
| Fear-based risk framing | Suppresses agency; reduces engagement | Andragogy; self-efficacy research |
| Requiring lesson completion for any XP | Punishes interrupted sessions; alienates mobile users | Microlearning; adult learner autonomy |

---

## Sources

- Rowland, C. A. (2014). The effect of testing versus restudy on retention: A meta-analytic review. *Psychological Bulletin, 140*(6), 1432–1463.
- Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. *Review of Educational Research, 87*(3), 659–701.
- Pan, S. C., & Rickard, T. C. (2018). Transfer of test-enhanced learning: Meta-analytic review. *Psychological Bulletin, 144*(7), 710–756.
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58.
- Brunmair, M., & Richter, T. (2019). Similarity matters: A meta-analysis of interleaved learning. *Psychological Bulletin, 145*(11), 1029–1052.
- Hattie, J. (2009). *Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement.* Routledge.
- Knowles, M. S. (1984). *Andragogy in Action.* Jossey-Bass.
- Sweller, J. (1988). Cognitive load during problem solving. *Cognitive Science, 12*(2), 257–285.
- Paivio, A. (1990). *Mental Representations: A Dual Coding Approach.* Oxford University Press.
- Coggins, P. E., et al. (2024). Culturally relevant financial literacy. *Cogent Education.*
- JMIR Aging (2025). Effectiveness of gamification on enjoyment/satisfaction in older adults.
- Senandheera, H. N., et al. (2024). Microlearning beyond boundaries: A systematic review. *Heliyon.*
