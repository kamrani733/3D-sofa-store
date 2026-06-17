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
      <p className="text-xs text-[#a08c6e] mb-5">
        مزون وِرا — تأسیس ۱۹۲۳
      </p>
      <h1 className="font-['Vazirmatn','Tahoma',Georgia,serif] text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.15] text-[#e8e0d4]">
        جایی که تجمل<br />به فرمی درمی‌یابد.
      </h1>
      <p className="mt-8 text-xs text-[#7a6e61]">
        برای کاوش اسکرول کنید ↓
      </p>
    </div>
  )
}