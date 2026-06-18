'use client'

import Image from 'next/image'
import { useTheme, tokens } from '../store/scrollStore'

const categories = [
  { label: 'سرویس خواب', image: '/images/sec1.png' },
  { label: 'مبل راحتی', image: '/images/sec2.png' },
  { label: 'ناهارخوری', image: '/images/sec3.jpg' },
]

export default function CategoryGallery() {
  const theme = useTheme((s) => s.theme)
  const t = tokens[theme]

  return (
    <section id="categories" className="py-[4rem] px-[5vw]" style={{ background: t.bg }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 text-right">
          <p className="text-[0.8rem] mb-3 " style={{ color: t.accent }}>
            ۰۵ — دسته‌بندی محصولات
          </p>
          <h2
            className="text-[clamp(4.8rem,4vw,2.6rem)] hero-title-nastaliq font-light leading-[1.2]"
            style={{
               color: t.text,
            }}
          >
            دسته‌بندی‌های اصلی
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.label}
              className="overflow-hidden rounded-[1.5rem] bg-transparent"
            >
              <div className="relative h-[260px] sm:h-[320px]">
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="py-4 text-right px-2">
                <p className="text-sm font-medium" style={{ color: t.text }}>
                  {category.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
