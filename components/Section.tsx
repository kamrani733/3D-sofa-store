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
    <section id={id} className="h-screen flex items-center px-[5vw]">
      <div
        ref={ref}
        className={`max-w-[380px] ${align === 'right' ? 'ml-auto text-right' : 'text-left'}`}
      >
        <p className="text-[0.65rem] tracking-[0.35em] text-[#a08c6e] uppercase mb-5">
          {label}
        </p>
        <h2 className="font-['Georgia',serif] text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.2] mb-5 text-[#e8e0d4]">
          {title}
        </h2>
        <p className="text-sm text-[#7a6e61] leading-loose">
          {body}
        </p>
      </div>
    </section>
  )
}