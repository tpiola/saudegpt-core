'use client'

import React, { createContext, useContext } from 'react'

interface Theme {
  colors: {
    navy: string
    gold: string
    accent: string
    background: string
    text: string
  }
}

const defaultTheme: Theme = {
  colors: {
    navy: '#0A1628',
    gold: '#D4A843',
    accent: '#F0D68A',
    background: '#0A1628',
    text: '#FFFFFF',
  }
}

const ThemeContext = createContext<Theme>(defaultTheme)

export function ThemeProvider({ children, theme }: { children: React.ReactNode; theme?: Partial<Theme> }) {
  const merged = theme ? { ...defaultTheme, ...theme, colors: { ...defaultTheme.colors, ...theme?.colors } } : defaultTheme
  return <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
