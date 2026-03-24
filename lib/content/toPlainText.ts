import type { ContentBlock } from './types'

/**
 * Converts lesson content blocks into a plain-text string
 * suitable for sending to the quiz AI as context.
 */
export function blocksToPlainText(blocks: ContentBlock[]): string {
  return blocks
    .map(block => {
      switch (block.type) {
        case 'paragraph':
          return stripHtml(block.html)
        case 'heading':
          return `\n## ${block.text}\n`
        case 'analogy':
          return `[ANALOGÍA - ${block.label ?? 'Piénsalo así'}]: ${stripHtml(block.html)}`
        case 'warn':
          return `[ADVERTENCIA - ${block.title}]: ${stripHtml(block.html)}`
        case 'info':
          return `[DATO IMPORTANTE]: ${stripHtml(block.html)}`
        case 'checklist':
          return block.items.map(item => `• ${item}`).join('\n')
        case 'table':
          return [
            block.headers.join(' | '),
            ...block.rows.map(row => row.join(' | ')),
          ].join('\n')
        case 'video':
          return `[VIDEO: ${block.title} — ${block.channel}]`
        case 'scam-entry':
          return [
            `[ESTAFA: ${block.name}]`,
            `Cómo funciona: ${block.how}`,
            `Analogía: ${block.analogy}`,
            `Señales de alerta: ${block.redFlags.join('; ')}`,
          ].join('\n')
        default:
          return ''
      }
    })
    .filter(Boolean)
    .join('\n\n')
}

function stripHtml(html: string): string {
  return html
    .replace(/<strong>/gi, '')
    .replace(/<\/strong>/gi, '')
    .replace(/<em>/gi, '')
    .replace(/<\/em>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .trim()
}
