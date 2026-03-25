export type BlockType =
  | 'paragraph'
  | 'heading'
  | 'analogy'
  | 'warn'
  | 'info'
  | 'checklist'
  | 'table'
  | 'video'
  | 'scam-entry'
  | 'opening-question'
  | 'quick-check'
  | 'scenario'
  | 'misconception'
  | 'reveal'
  | 'bridge'
  | 'self-reflect'

// ─── Existing blocks ────────────────────────────────────────────────────────

export interface ParagraphBlock {
  type: 'paragraph'
  html: string
}

export interface HeadingBlock {
  type: 'heading'
  level: 2 | 3
  text: string
}

export interface AnalogyBlock {
  type: 'analogy'
  label?: string
  html: string
}

export interface WarnBlock {
  type: 'warn'
  title: string
  html: string
}

export interface InfoBlock {
  type: 'info'
  html: string
}

export interface ChecklistBlock {
  type: 'checklist'
  items: string[]
}

export interface TableBlock {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export interface VideoBlock {
  type: 'video'
  embedId: string
  title: string
  channel: string
}

export interface ScamEntryBlock {
  type: 'scam-entry'
  name: string
  emoji: string
  how: string
  analogy: string
  redFlags: string[]
}

// ─── Interactive blocks (Strategy 11) ───────────────────────────────────────

export interface OpeningQuestionOption {
  text: string
  response: string // warm acknowledgment shown after selection
}

export interface OpeningQuestionBlock {
  type: 'opening-question'
  question: string
  options: OpeningQuestionOption[]
}

export interface QuickCheckOption {
  text: string
  correct?: boolean
  explanation: string // shown after any selection
}

export interface QuickCheckBlock {
  type: 'quick-check'
  question: string
  options: QuickCheckOption[]
}

export interface ScenarioChoice {
  text: string
  consequence: string // explanation shown after selection
}

export interface ScenarioBlock {
  type: 'scenario'
  setup: string
  choices: ScenarioChoice[]
}

export interface MisconceptionBlock {
  type: 'misconception'
  myth: string    // "Mucha gente cree que..."
  reality: string // "En realidad..."
}

export interface RevealBlock {
  type: 'reveal'
  prompt: string  // the question or setup
  answer: string  // revealed on tap, supports HTML
}

export interface BridgeBlock {
  type: 'bridge'
  html: string    // 2–4 sentences connecting lesson to investment goal
}

export interface SelfReflectBlock {
  type: 'self-reflect'
  prompt: string  // reflection question
}

// ─── Union type ─────────────────────────────────────────────────────────────

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | AnalogyBlock
  | WarnBlock
  | InfoBlock
  | ChecklistBlock
  | TableBlock
  | VideoBlock
  | ScamEntryBlock
  | OpeningQuestionBlock
  | QuickCheckBlock
  | ScenarioBlock
  | MisconceptionBlock
  | RevealBlock
  | BridgeBlock
  | SelfReflectBlock

export interface Lesson {
  slug: string
  title: string
  emoji: string
  subtitle: string
  color: string           // Tailwind bg color for the lesson badge
  textColor: string       // Tailwind text color
  xp: number
  quizQuestionCount: number
  content: ContentBlock[]
}

export interface GlossaryEntry {
  term: string
  emoji: string
  definition: string
}
