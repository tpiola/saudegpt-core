import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function GlassCard({ children, style }: GlassCardProps) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      ...style
    }}>
      {children}
    </div>
  )
}
