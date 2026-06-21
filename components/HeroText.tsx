"use client";
import { useEffect, useRef } from "react";
import { useTheme, tokens } from "../store/scrollStore";

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme((s) => s.theme);
  const t = tokens[theme];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.4s ease, transform 1.4s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <div
      ref={ref}
      className="hero-text-root"
      style={{
        '--hero-text': t.text,
        '--hero-accent': t.accent,
        '--hero-muted': t.muted,
      } as React.CSSProperties}
    >
      <p className="text-[0.8rem] mb-[1.2rem] hero-text-accent">
        تولیکا — مبلمان ایرانی مدرن
      </p>
      <h1 className="hero-title font-light leading-[1.15]">
        <span className="text-[clamp(0.8rem,6vw,3.5rem)]">
          خانه‌ای  زیبایی که
   
          با طراحی ایرانی جان می‌گیرد
        </span>
      </h1>
      <p className="mt-8 text-[0.8rem] hero-text-muted">
        برای دیدن مجموعه، اسکرول کنید ↓
      </p>
    </div>
  );
}
