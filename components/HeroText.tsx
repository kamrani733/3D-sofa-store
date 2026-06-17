'use client'

import { useEffect, useRef } from 'react'

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null)

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
      <p style={{ fontSize: '0.75rem', color: '#a08c6e', marginBottom: '1.2rem' }}>
        مزون وِرا — تأسیس ۱۹۲۳
      </p>
      <h1 style={{ fontFamily: "'Vazirmatn', 'Tahoma', Georgia, serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 300, lineHeight: 1.15, color: '#e8e0d4' }}>
        جایی که تجمل<br />به فرمی درمی‌یابد.
      </h1>
      <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#7a6e61' }}>
        برای کاوش اسکرول کنید ↓
      </p>
    </div>
  )
}
