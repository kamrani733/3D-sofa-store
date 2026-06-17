'use client'
import { useEffect, useRef } from 'react'
import { useTheme, tokens } from '../store/scrollStore'

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme((s) => s.theme)
  const t = tokens[theme]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.4s ease, transform 1.4s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  return (
    <div ref={ref}>
      <p style={{ fontSize: '0.8rem', color: t.accent, marginBottom: '1.2rem' }}>
        مزون وِرا — تأسیس ۱۹۲۳
      </p>
      <h1
        className="text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.15]"
        style={{ fontFamily: 'var(--font-vazirmatn), var(--font-nazanin), serif', color: t.text }}
      >
        جایی که تجمل<br />به فرمی درمی‌یابد.
      </h1>
      <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: t.muted }}>
        برای کاوش اسکرول کنید ↓
      </p>
    </div>
  )
}
