'use client'

import Image from 'next/image'
import { useTheme, tokens } from '../store/scrollStore'

type Product = {
  name: string
  style: string
  price: string
  feature: string
  image: string
}

const products: Product[] = [
  {
    name: 'مبل سانا',
    style: 'کلاسیک طراحانه',
    price: '۴٬۴۰۰ یورو',
    feature: 'ارتفاع پشتی متوسط، بالش‌های لطیف و پایه‌های مخفی.',
    image: '/images/proudct/1.jpeg',
  },
  {
    name: 'مبل آریا',
    style: 'حرفه‌ای راحت',
    price: '۵٬۲۰۰ یورو',
    feature: 'پشتی بلند، نشیمن عمیق و پایه‌های پنهان.',
    image: '/images/proudct/3.jpeg',
  },
  {
    name: 'مبل اوانا',
    style: 'معاصر جمع‌وجور',
    price: '۳٬۷۵۰ یورو',
    feature: 'بدون دسته، نشیمن عریض و پایه‌های فلزی کوتاه.',
    image: '/images/proudct/4.jpg',
  },
]

export default function ProductShowcase() {
  const theme = useTheme((s) => s.theme)
  const t = tokens[theme]

  const cardBg = theme === 'dark' ? '#1a1815' : '#faf7f2'
  const cardBorder = theme === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)'
  const divider = theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'

  return (
    <section
      id="products"
      className="min-h-screen py-[5rem] md:py-[6rem] px-[5vw]"
      style={{ background: t.bg }}
    >
      {/* Centered, width-capped container so cards breathe on large screens. */}
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-right">
          <p className="text-[0.8rem] mb-3" style={{ color: t.accent }}>
            ۰۴ — پیشنهادهای ویژه
          </p>
          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-light mb-4 leading-[1.2]"
            style={{
              fontFamily: 'var(--font-vazirmatn), var(--font-nazanin), serif',
              color: t.text,
            }}
          >
            مجموعه مبل‌های اختصاصی
          </h2>
          <p
            className="max-w-[620px] text-[0.95rem] my-[1rem] leading-[1.9]"
            style={{ color: t.muted }}
          >
            هر مدل با توجه به تعادل بین زیبایی و عملکرد انتخاب شده است. این بخش
            کارت‌های ساده و متمرکز را ارائه می‌دهد تا محصول‌ها به شکلی واضح و
            مستقل دیده شوند.
          </p>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 equal cols desktop. */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex rounded-[1rem] p-[1rem] gap-[1rem] flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f2f0eb]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col p-5 text-right">
                <p className="text-[0.75rem] font-medium mb-2" style={{ color: t.accent }}>
                  {product.style}
                </p>
                <h3
                  className="text-xl font-light my-[1rem]"
                  style={{ color: t.text }}
                >
                  {product.name}
                </h3>
                <p className="text-[0.9rem] leading-[1.8] mb-[1rem]" style={{ color: t.muted }}>
                  {product.feature}
                </p>

                <div
                  className="mt-auto p-[1rem] border-t text-left flex justify-end"
                  style={{ borderColor: divider }}
                >
                  <span className="text-base font-semibold" style={{ color: t.accent }}>
                    {product.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
