import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', style, ...props }: ButtonProps) {
  return <button style={{ ...styles.base, ...styles[variant], ...styles.sizes[size], ...style }} {...props} />
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    border: 'none',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s ease',
  },
  primary: {
    background: 'linear-gradient(135deg, #D4A843, #F0D68A)',
    color: '#0A1628',
  },
  secondary: {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
  },
  ghost: {
    background: 'transparent',
    color: '#D4A843',
  },
  sizes: {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
  }
}
