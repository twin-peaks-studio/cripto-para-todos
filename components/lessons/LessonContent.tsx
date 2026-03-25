'use client'

import { useState } from 'react'
import type { ContentBlock } from '@/lib/content/types'
import AnalogyBox from './AnalogyBox'
import WarnBox from './WarnBox'
import InfoBox from './InfoBox'
import VideoEmbed from './VideoEmbed'
import ScamEntry from './ScamEntry'
import OpeningQuestion from './OpeningQuestion'
import QuickCheck from './QuickCheck'
import Scenario from './Scenario'
import Misconception from './Misconception'
import Reveal from './Reveal'
import Bridge from './Bridge'
import SelfReflect from './SelfReflect'

interface LessonContentProps {
  blocks: ContentBlock[]
}

export default function LessonContent({ blocks }: LessonContentProps) {
  // If the lesson starts with an opening-question, gate the rest of the
  // content behind it until the learner has made a selection.
  const firstBlock = blocks[0]
  const hasOpeningQuestion = firstBlock?.type === 'opening-question'
  const [openingDone, setOpeningDone] = useState(!hasOpeningQuestion)

  const contentBlocks = hasOpeningQuestion ? blocks.slice(1) : blocks

  return (
    <div className="space-y-6">
      {/* Opening question gate */}
      {hasOpeningQuestion && firstBlock.type === 'opening-question' && (
        <OpeningQuestion
          question={firstBlock.question}
          options={firstBlock.options}
          onContinue={() => setOpeningDone(true)}
        />
      )}

      {/* Main lesson content — revealed after opening question is answered */}
      {openingDone && contentBlocks.map((block, i) => {
        switch (block.type) {

          // ── Existing blocks ──────────────────────────────────────────────

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

          // ── Interactive blocks ───────────────────────────────────────────

          case 'opening-question':
            // Handled above as the gate — skip if it appears mid-content
            return null

          case 'quick-check':
            return (
              <QuickCheck
                key={i}
                question={block.question}
                options={block.options}
              />
            )

          case 'scenario':
            return (
              <Scenario
                key={i}
                setup={block.setup}
                choices={block.choices}
              />
            )

          case 'misconception':
            return (
              <Misconception
                key={i}
                myth={block.myth}
                reality={block.reality}
              />
            )

          case 'reveal':
            return (
              <Reveal
                key={i}
                prompt={block.prompt}
                answer={block.answer}
              />
            )

          case 'bridge':
            return <Bridge key={i} html={block.html} />

          case 'self-reflect':
            return <SelfReflect key={i} prompt={block.prompt} />

          default:
            return null
        }
      })}
    </div>
  )
}
