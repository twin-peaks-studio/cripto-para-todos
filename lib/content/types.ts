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
