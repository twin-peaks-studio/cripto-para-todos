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
  onOpeningAnswered?: () => void
}

export default function LessonContent({ blocks, onOpeningAnswered }: LessonContentProps) {
  // If the lesson starts with an opening-question, gate the rest of the
  // content behind it until the learner has made a selection.
  const firstBlock = blocks[0]
  const hasOpeningQuestion = firstBlock?.type === 'opening-question'
  const [openingDone, setOpeningDone] = useState(!hasOpeningQuestion)

  const contentBlocks = hasOpeningQuestion ? blocks.slice(1) : blocks

  function handleContinue() {
    setOpeningDone(true)
    onOpeningAnswered?.()
    // Scroll to the very top of the page so the lesson title is visible
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 50)
  }

  return (
    <div>
      {/* Opening question gate — hidden once answered */}
      {hasOpeningQuestion && !openingDone && firstBlock.type === 'opening-question' && (
        <OpeningQuestion
          question={firstBlock.question}
          options={firstBlock.options}
          onContinue={handleContinue}
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
              // Section break: divider line above (except at the very top) + amber left accent
              return (
                <div
                  key={i}
                  className={i > 0 ? 'mt-14 pt-8 border-t-2 border-cream-300 mb-1' : 'mt-6 mb-1'}
                >
                  <h2 className="font-display font-bold text-teal-900 text-2xl leading-snug pl-4 border-l-4 border-amber-400">
                    {block.text}
                  </h2>
                </div>
              )
            }
            return (
              <h3
                key={i}
                className="font-display font-bold text-teal-800 text-xl mt-8 mb-3 leading-snug"
              >
                {block.text}
              </h3>
            )

          // Callout boxes — prominent, needs breathing room
          case 'analogy':
            return (
              <div key={i} className="my-8">
                <AnalogyBox label={block.label} html={block.html} />
              </div>
            )

          case 'warn':
            return (
              <div key={i} className="my-8">
                <WarnBox title={block.title} html={block.html} />
              </div>
            )

          // Info — lower visual weight, slightly tighter
          case 'info':
            return (
              <div key={i} className="my-6">
                <InfoBox html={block.html} />
              </div>
            )

          case 'checklist':
            return (
              <ul key={i} className="my-6 space-y-3">
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
              <div key={i} className="my-8 table-scroll">
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
              <div key={i} className="my-8">
                <VideoEmbed
                  embedId={block.embedId}
                  title={block.title}
                  channel={block.channel}
                />
              </div>
            )

          case 'scam-entry':
            return (
              <div key={i} className="my-8">
                <ScamEntry
                  name={block.name}
                  emoji={block.emoji}
                  how={block.how}
                  analogy={block.analogy}
                  redFlags={block.redFlags}
                />
              </div>
            )

          // ── Interactive blocks — most breathing room ──────────────────────

          case 'opening-question':
            // Handled above as the gate — skip if it appears mid-content
            return null

          case 'quick-check':
            return (
              <div key={i} className="my-10">
                <QuickCheck
                  question={block.question}
                  options={block.options}
                />
              </div>
            )

          case 'scenario':
            return (
              <div key={i} className="my-10">
                <Scenario
                  setup={block.setup}
                  choices={block.choices}
                />
              </div>
            )

          case 'misconception':
            return (
              <div key={i} className="my-8">
                <Misconception
                  myth={block.myth}
                  reality={block.reality}
                />
              </div>
            )

          case 'reveal':
            return (
              <div key={i} className="my-10">
                <Reveal
                  prompt={block.prompt}
                  answer={block.answer}
                />
              </div>
            )

          case 'bridge':
            return (
              <div key={i} className="my-10">
                <Bridge html={block.html} />
              </div>
            )

          case 'self-reflect':
            return (
              <div key={i} className="my-10">
                <SelfReflect prompt={block.prompt} />
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
