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
    <section id={id} className="h-screen  text-right flex items-center px-[5vw]">
      <div
        ref={ref}
        className="max-w-[420px] pointer-events-auto"
        style={{
          marginLeft: align === 'left' ? 'auto' : undefined,
          marginRight: align === 'right' ? 'auto' : undefined,
        }}
      >
        <p 
          className="text-[0.75rem] mb-[1.2rem]"
          style={{ color: t.accent }}
        >
          {label}
        </p>
        <h2
          className="text-[clamp(1.8rem,3vw,2.8rem)] hero-title-nastaliq font-light mb-5 leading-[1.3]"
          style={{ 
            color: t.text 
          }}
        >
          {title}
        </h2>
        <p 
          className="text-[0.95rem] leading-[2]"
          style={{ color: t.muted }}
        >
          {body}
        </p>
      </div>
    </section>
  )
}