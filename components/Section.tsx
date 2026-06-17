'use client'
import { useEffect, useRef } from 'react'
import { useTheme, tokens } from '../store/scrollStore'

interface SectionProps {
  id: string
  label: string
  title: string
  body: string
  align: 'left' | 'right'
}

export default function Section({ id, label, title, body, align }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme((s) => s.theme)
  const t = tokens[theme]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 1s ease, transform 1s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className="h-screen flex items-center px-[5vw]">
      <div
        ref={ref}
        style={{
          maxWidth: '420px',
          // In RTL, align="right" sits at the start (right) edge,
          // align="left" at the end (left) edge.
          marginLeft: align === 'left' ? 'auto' : undefined,
          marginRight: align === 'right' ? 'auto' : undefined,
          textAlign: align,
        }}
      >
        <p style={{ fontSize: '0.75rem', color: t.accent, marginBottom: '1.2rem' }}>
          {label}
        </p>
        <h2
          className="text-[clamp(1.8rem,3vw,2.8rem)] font-light mb-5"
          style={{ fontFamily: 'var(--font-vazirmatn), var(--font-nazanin), serif', lineHeight: 1.3, color: t.text }}
        >
          {title}
        </h2>
        <p style={{ fontSize: '0.95rem', color: t.muted, lineHeight: 2 }}>
          {body}
        </p>
      </div>
    </section>
  )
}
