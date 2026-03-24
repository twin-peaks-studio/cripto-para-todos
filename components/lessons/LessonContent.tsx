import type { ContentBlock } from '@/lib/content/types'
import AnalogyBox from './AnalogyBox'
import WarnBox from './WarnBox'
import InfoBox from './InfoBox'
import VideoEmbed from './VideoEmbed'
import ScamEntry from './ScamEntry'

interface LessonContentProps {
  blocks: ContentBlock[]
}

export default function LessonContent({ blocks }: LessonContentProps) {
  return (
    <div className="space-y-1">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={i}
                className="lesson-prose mb-5"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            )

          case 'heading':
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  className="font-display font-bold text-teal-900 text-2xl mt-8 mb-3 leading-snug"
                >
                  {block.text}
                </h2>
              )
            }
            return (
              <h3
                key={i}
                className="font-display font-bold text-teal-800 text-xl mt-6 mb-2 leading-snug"
              >
                {block.text}
              </h3>
            )

          case 'analogy':
            return <AnalogyBox key={i} label={block.label} html={block.html} />

          case 'warn':
            return <WarnBox key={i} title={block.title} html={block.html} />

          case 'info':
            return <InfoBox key={i} html={block.html} />

          case 'checklist':
            return (
              <ul key={i} className="my-5 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[1.05rem] text-brown-900">
                    <span className="w-6 h-6 rounded-full bg-sage-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )

          case 'table':
            return (
              <div key={i} className="my-6 table-scroll">
                <table className="w-full border-collapse rounded-2xl overflow-hidden text-[1rem]">
                  <thead>
                    <tr className="bg-teal-900 text-white">
                      {block.headers.map((h, j) => (
                        <th key={j} className="px-4 py-3 text-left font-semibold text-sm">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className={j % 2 === 0 ? 'bg-cream-100' : 'bg-white'}>
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-3 text-brown-900 border-b border-cream-300 leading-snug">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'video':
            return (
              <VideoEmbed
                key={i}
                embedId={block.embedId}
                title={block.title}
                channel={block.channel}
              />
            )

          case 'scam-entry':
            return (
              <ScamEntry
                key={i}
                name={block.name}
                emoji={block.emoji}
                how={block.how}
                analogy={block.analogy}
                redFlags={block.redFlags}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
