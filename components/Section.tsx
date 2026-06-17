'use client'

import { useEffect, useRef } from 'react'

interface SectionProps {
  id: string
  label: string
  title: string
  body: string
  align: 'left' | 'right'
}

export default function Section({ id, label, title, body, align }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null)

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
    <section id={id} style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 5vw' }}>
      <div ref={ref} style={{ maxWidth: '380px', marginLeft: align === 'right' ? 'auto' : undefined, textAlign: align === 'right' ? 'right' : 'left' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', color: '#a08c6e', textTransform: 'uppercase', marginBottom: '1.2rem' }}>{label}</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.2rem', color: '#e8e0d4' }}>{title}</h2>
        <p style={{ fontSize: '0.9rem', color: '#7a6e61', lineHeight: 1.8 }}>{body}</p>
      </div>
    </section>
  )
}
