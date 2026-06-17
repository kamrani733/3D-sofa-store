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

  return (
    <section
      id="products"
      className="min-h-screen py-[6rem] px-[5vw] text-right"
      style={{ background: t.bg }}
    >
      <div className="">
        <div className="mb-12">
          <p className="text-[0.85rem] mb-10" >
            ۰۴ — پیشنهادهای ویژه
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-light mb-4 leading-[1.15]"
            style={{ fontFamily: 'var(--font-vazirmatn), var(--font-nazanin), serif', color: t.text }}
          >
            مجموعه مبل‌های اختصاصی
          </h2>
          <p className="max-w-[620px] text-[0.95rem] leading-[2]" style={{ color: t.muted }}>
            هر مدل با توجه به تعادل بین زیبایی و عملکرد انتخاب شده است. این بخش کارت‌های ساده و متمرکز را ارائه می‌دهد تا محصول‌ها به شکلی واضح و مستقل دیده شوند.
          </p>
        </div>

        <div className="grid rounded gap-8 grid-cols-3 ">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                background: theme === 'dark' ? '#1a1815' : '#faf7f2',
              }}
            >
              <div className="relative h-[260px] w-full overflow-hidden bg-[#f2f0eb]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="flex-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] font-medium" style={{ color: t.accent }}>
                    {product.style}
                  </p>
                  <h3 className="text-xl font-light mt-2 mb-3" style={{ color: t.text }}>
                    {product.name}
                  </h3>
                 
                  <p className="text-sm" style={{ color: t.text }}>
                    {product.feature}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}>
                  <span className="text-base text-left font-semibold" style={{ color: t.accent }}>
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}