"use client";
import dynamic from "next/dynamic";
import HeroText from "../components/HeroText";
import Section from "../components/Section";
import ProductShowcase from "../components/ProductShowcase";
import { useTheme, tokens } from "../store/scrollStore";
import Footer from "@/components/Footer";

const SofaCanvas = dynamic(() => import("../components/SofaCanvas"), {
  ssr: false,
});

export default function Home() {
  const theme = useTheme((s) => s.theme);
  const t = tokens[theme];

  return (
    <div
      className="p-10"
      style={{
        background: t.bg,
        color: t.text,
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Fixed 3D canvas background */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <SofaCanvas />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="h-screen flex flex-col justify-end  pb-[8vh]">
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

        <ProductShowcase />
        <Footer />
      </div>
    </div>
  );
}
