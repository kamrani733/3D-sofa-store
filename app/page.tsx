'use client'
import dynamic from 'next/dynamic'
import HeroText from '../components/HeroText'
import Section from '../components/Section'

const SofaCanvas = dynamic(() => import('../components/SofaCanvas'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-[#0f0d0a] text-[#e8e0d4]">
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
          <p className="text-[0.7rem] tracking-[0.35em] text-[#a08c6e] uppercase">
            سفارش دهید
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-['Georgia',serif] font-light">
            از ۴٬۲۰۰ یورو
          </h2>
          <button
            className="border border-[#a08c6e] text-[#a08c6e] bg-transparent px-10 py-4 text-[0.7rem] tracking-[0.3em] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#a08c6e] hover:text-[#0f0d0a]"
          >
            درخواست مشاوره
          </button>
        </section>
      </div>
    </main>
  )
}