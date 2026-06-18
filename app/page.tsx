"use client";
import dynamic from "next/dynamic";
import HeroText from "../components/HeroText";
import Section from "../components/Section";
import ProductShowcase from "../components/ProductShowcase";
import CategoryGallery from "../components/CategoryGallery";
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

        <Section
          id="craftsmanship"
          label="۰۱ — هنر صنعت داخلی"
          title="هنر ایرانی و مدرنیته جهانی"
          body="هر محصول در کارگاه‌های ایران طراحی و ساخته می‌شود تا هم راحتی روزمره و هم اصالت سنتی را در فضای خانه شما به‌همراه داشته باشد."
          align="left"
        />
        <Section
          id="comfort"
          label="۰۲ — آرامش خانگی"
          title="راحتی مطابق با سبک زندگی ایرانی"
          body="کوسن‌های نرم، پشتی‌های حمایت‌کننده و پارچه‌های قابل تنفس، تجربه‌ای راحت و دنج برای خانواده‌های ایرانی فراهم می‌کند."
          align="right"
        />
        <Section
          id="heritage"
          label="۰۳ — هویت ایرانی"
          title="میراث طراحی داخلی ایران"
          body="با الهام از فرهنگ و سلیقه ایرانی، هر مبلمان داستانی از زیبایی ایرانی و کیفیت ماندگار را بازگو می‌کند."
          align="left"
        />

        <ProductShowcase />
        <CategoryGallery />

        <Footer />
      </div>
    </div>
  );
}
