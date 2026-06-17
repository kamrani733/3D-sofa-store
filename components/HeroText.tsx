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
    <div ref={ref}>
      <p className="text-[0.8rem] mb-[1.2rem]" style={{ color: t.accent }}>
        مزون وِرا — تأسیس ۱۳۸۹
      </p>
      <h1
        className=" font-light leading-[1.15]"
        style={{
          fontFamily: "var(--font-vazirmatn), var(--font-nazanin), serif",
          color: t.text,
        }}
      >
        <span className="text-[clamp(2.8rem,6vw,5.5rem)]">جایی که هنر</span>
        <br />
        <span className="text-[clamp(0.8rem,4vw,4.5rem)]">
          دست به کار میشود
        </span>
      </h1>
      <p className="mt-8 text-[0.8rem]" style={{ color: t.muted }}>
        برای کاوش اسکرول کنید ↓
      </p>
    </div>
  );
}
