'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTheme, tokens } from '../store/scrollStore'

type Category = {
  no: string
  label: string
  image: string
  description: string
}

const categories: Category[] = [
  {
    no: '۰۱',
    label: 'سرویس خواب',
    image: '/images/sec1.png',
    description: 'آرامش و ظرافت برای اتاق خواب',
  },
  {
    no: '۰۲',
    label: 'مبل راحتی',
    image: '/images/sec2.png',
    description: 'راحتی روزمره با طراحی ماندگار',
  },
  {
    no: '۰۳',
    label: 'ناهارخوری',
    image: '/images/sec3.jpg',
    description: 'تجمع خانواده پیرامون میزی زیبا',
  },
]

export default function CategoryGallery() {
  const theme = useTheme((s) => s.theme)
  const t = tokens[theme]
  const sectionRef = useRef<HTMLElement>(null)

  // Reveal cards with a staggered fade-up as the section enters the viewport.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'))
    cards.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(40px)'
    })
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            card.style.transition = `opacity 0.8s ease ${i * 120}ms, transform 0.8s ease ${i * 120}ms`
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cardBorder =
    theme === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)'

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-[4rem] md:py-[5rem] lg:py-[6rem] px-[5vw]"
      style={{ background: t.bg }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-right">
          <p className="text-[0.8rem] mb-3" style={{ color: t.accent }}>
            ۰۵ — دسته‌بندی محصولات
          </p>
          <h2
            className="text-[clamp(2.8rem,4vw,4.8rem)] hero-title-nastaliq font-light mb-4 leading-[1.2]"
            style={{ color: t.text }}
          >
            دسته‌بندی‌های اصلی
          </h2>
          <p
            className="max-w-[620px] text-[0.95rem] my-[1rem] leading-[1.9]"
            style={{ color: t.muted }}
          >
            مجموعه‌ای منتخب از مبلمان دست‌ساز؛ هر دسته با هویت و کارکرد مختص خود،
            فضایی متفاوت برای خانه شما می‌سازد.
          </p>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 equal cols desktop. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {categories.map((category) => (
            <article
              key={category.label}
              data-reveal
              className="group relative cursor-pointer overflow-hidden rounded-[1.25rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ border: `1px solid ${cardBorder}` }}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Readability gradient over the lower half of the image. */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(15,13,10,0.88) 0%, rgba(15,13,10,0.40) 45%, rgba(15,13,10,0) 72%)',
                  }}
                />

                {/* Index badge (top-right / RTL start). */}
                <span
                  className="absolute top-4 right-4 rounded-full px-3 py-1 text-[0.7rem] tracking-[0.15em] backdrop-blur-sm"
                  style={{
                    color: '#f4f0e8',
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                >
                  {category.no}
                </span>

                {/* Label block (bottom). */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-right sm:p-6">
                  <span
                    className="block h-px w-10 transition-all duration-500 group-hover:w-16"
                    style={{ background: t.accent, marginLeft: 'auto' }}
                  />
                  <h3 className="mt-3 text-[1.3rem] font-light leading-tight text-white sm:text-[1.5rem]">
                    {category.label}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-white/70">
                    {category.description}
                  </p>
                  <div className="mt-4 flex translate-x-2 items-center justify-end gap-2 text-[0.8rem] text-white/90 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <span>مشاهده مجموعه</span>
                    <span aria-hidden>←</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
