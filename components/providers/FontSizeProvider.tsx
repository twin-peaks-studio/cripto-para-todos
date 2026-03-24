'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type FontSize = 'small' | 'medium' | 'large'

interface FontSizeContextType {
  fontSize: FontSize
  increase: () => void
  decrease: () => void
}

const FontSizeContext = createContext<FontSizeContextType>({
  fontSize: 'medium',
  increase: () => {},
  decrease: () => {},
})

const SIZES: FontSize[] = ['small', 'medium', 'large']

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('medium')

  useEffect(() => {
    const saved = localStorage.getItem('fontSize') as FontSize | null
    if (saved && SIZES.includes(saved)) {
      setFontSize(saved)
      document.documentElement.dataset.fontSize = saved
    }
  }, [])

  const apply = useCallback((size: FontSize) => {
    setFontSize(size)
    localStorage.setItem('fontSize', size)
    document.documentElement.dataset.fontSize = size
  }, [])

  const increase = useCallback(() => {
    const idx = SIZES.indexOf(fontSize)
    if (idx < SIZES.length - 1) apply(SIZES[idx + 1])
  }, [fontSize, apply])

  const decrease = useCallback(() => {
    const idx = SIZES.indexOf(fontSize)
    if (idx > 0) apply(SIZES[idx - 1])
  }, [fontSize, apply])

  return (
    <FontSizeContext.Provider value={{ fontSize, increase, decrease }}>
      {children}
    </FontSizeContext.Provider>
  )
}

export function useFontSize() {
  return useContext(FontSizeContext)
}
