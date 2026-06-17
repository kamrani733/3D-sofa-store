'use client'

import { useEffect, useState } from 'react'
import { useTheme, tokens } from '../store/scrollStore'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const theme = useTheme((s) => s.theme)
  const toggle = useTheme((s) => s.toggle)

  // Avoid hydration mismatch: render a stable placeholder until mounted.
  useEffect(() => setMounted(true), [])

  const t = tokens[theme]

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'تغییر به حالت روشن' : 'تغییر به حالت تاریک'}
      style={{
        position: 'fixed',
        top: '1.5rem',
        // In RTL the "top-right" corner is the inline-start; we want the
        // toggle pinned to the top-left corner regardless of direction.
        left: '1.5rem',
        right: 'auto',
        zIndex: 100,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.55rem 1rem',
        borderRadius: '999px',
        border: `1px solid ${t.accent}`,
        background: theme === 'dark' ? 'rgba(15,13,10,0.6)' : 'rgba(244,240,232,0.7)',
        color: t.text,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.8rem',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = t.accent
        e.currentTarget.style.color = t.bg
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          theme === 'dark' ? 'rgba(15,13,10,0.6)' : 'rgba(244,240,232,0.7)'
        e.currentTarget.style.color = t.text
      }}
    >
      <span style={{ fontSize: '1rem', lineHeight: 1 }}>
        {mounted ? (theme === 'dark' ? '☀' : '☾') : '·'}
      </span>
      <span>
        {mounted ? (theme === 'dark' ? 'حالت روشن' : 'حالت تاریک') : 'قالب'}
      </span>
    </button>
  )
}
