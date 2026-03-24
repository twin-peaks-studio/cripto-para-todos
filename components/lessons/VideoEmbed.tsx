'use client'

import { useState, useEffect } from 'react'

interface VideoEmbedProps {
  embedId: string
  title: string
  channel: string
}

export default function VideoEmbed({ embedId, title, channel }: VideoEmbedProps) {
  // null = checking, true = available, false = unavailable
  const [available, setAvailable] = useState<boolean | null>(null)
  const youtubeUrl = `https://www.youtube.com/watch?v=${embedId}`

  useEffect(() => {
    // YouTube oEmbed returns 401/404 if video is unembeddable or unavailable
    fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(youtubeUrl)}&format=json`)
      .then(r => setAvailable(r.ok))
      .catch(() => setAvailable(false))
  }, [embedId, youtubeUrl])

  return (
    <div className="my-6 rounded-2xl overflow-hidden border-2 border-cream-300 bg-white shadow-warm">
      <div className="px-4 py-3 bg-cream-200 border-b border-cream-300">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="text-brown-700 text-sm font-semibold">Video recomendado</span>
            </div>
            <div className="font-semibold text-brown-900 text-base leading-snug">{title}</div>
            <div className="text-brown-500 text-sm mt-0.5">Canal: {channel}</div>
          </div>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 ml-3 text-sm font-semibold text-red-600 hover:text-red-700 underline underline-offset-2"
          >
            Ver en YouTube ↗
          </a>
        </div>
      </div>

      {available === null && (
        // Skeleton while checking
        <div className="w-full bg-cream-100 animate-pulse" style={{ paddingBottom: '56.25%' }} />
      )}

      {available === false && (
        <div className="flex flex-col items-center justify-center py-10 px-6 text-center bg-cream-50">
          <div className="text-4xl mb-3">🎬</div>
          <p className="text-brown-700 font-semibold mb-1">Este video no está disponible aquí</p>
          <p className="text-brown-500 text-sm mb-4">
            Puedes verlo directamente en YouTube — es el mismo contenido.
          </p>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-2xl transition-colors text-base"
          >
            Ver en YouTube →
          </a>
        </div>
      )}

      {available === true && (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${embedId}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
    </div>
  )
}
