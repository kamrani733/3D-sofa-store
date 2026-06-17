'use client'
import dynamic from 'next/dynamic'
import HeroText from '../components/HeroText'
import Section from '../components/Section'
import ThemeToggle from '../components/ThemeToggle'
import { useTheme, tokens } from '../store/scrollStore'

const SofaCanvas = dynamic(() => import('../components/SofaCanvas'), { ssr: false })

export default function Home() {
  const theme = useTheme((s) => s.theme)
  const t = tokens[theme]

  return (
    <main style={{ background: t.bg, color: t.text, transition: 'background 0.4s ease, color 0.4s ease' }}>
      <ThemeToggle />

      {/* Fixed 3D canvas background */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <SofaCanvas />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="h-screen flex flex-col justify-end px-[5vw] pb-[8vh]">
          <HeroText />
        </section>

        {/* Content sections */}
        <Section
          id="craftsmanship"
          label="۰۱ — دست‌ساز"
          title="ساخته‌شده برای ابدیت"
          body="هر مبل توسط صنعتگران ماهر ایتالیایی شکل می‌گیرد، با ترکیب مواد غنی و میراثی چند دهه‌ای."
          align="left"
        />
        <Section
          id="comfort"
          label="۰۲ — آسایش"
          title="طراحی‌شده بر اساس بدن"
          body="کوسن‌های نرم اما حمایت‌کننده و روکش‌های مجلل، پناهگاهی در دل فضای نشیمن شما می‌سازند."
          align="right"
        />
        <Section
          id="heritage"
          label="۰۳ — میراث"
          title="یک قرن ذوق ظریف"
          body="مِزون ورا که در سال ۱۹۲۳ در فلورانس تأسیس شد، متمایزترین اقامتگاه‌های اروپا را مبله کرده است."
          align="left"
        />

        {/* CTA section */}
        <section className="h-screen flex flex-col items-center justify-center gap-8">
          <p style={{ fontSize: '0.8rem', color: t.accent }}>
            سفارش دهید
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-light"
            style={{ fontFamily: 'var(--font-vazirmatn), var(--font-nazanin), serif', color: t.text }}
          >
            از ۴٬۲۰۰ یورو
          </h2>
          <button
            style={{
              border: `1px solid ${t.accent}`,
              color: t.accent,
              background: 'transparent',
              padding: '1rem 2.5rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = t.accent
              e.currentTarget.style.color = t.bg
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = t.accent
            }}
          >
            درخواست مشاوره
          </button>
        </section>
      </div>
    </main>
  )
}
