"use client";
import { useState, useEffect } from "react";
import { useTheme, tokens } from "../store/scrollStore";

const menuItems = [
  {
    label: "محصولات",
    href: "/fa/shop/category/products/همه-محصولات",
    children: [
      {
        label: "سرویس خواب",
        href: "/fa/shop/category/products/سرویس-خواب",
        sub: [
          { label: "تخت خواب سایز ۱۸۰", href: "/fa/shop/category/products/تخت-خواب-سایز-180" },
          { label: "تخت خواب سایز ۱۶۰", href: "/fa/shop/category/products/تخت-خواب-سایز-160" },
          { label: "دراور", href: "/fa/shop/category/products/دراور" },
          { label: "میز آرایش", href: "/fa/shop/category/products/میز-آرایش" },
          { label: "پاتخت", href: "/fa/shop/category/products/پاتخت" },
        ],
      },
      {
        label: "سرویس نهارخوری",
        href: "/fa/shop/category/products/30_نهارخوری",
        sub: [
          { label: "میز نهارخوری ۱۰ نفره", href: "/fa/shop/category/products/میز-نهارخوری-10-نفره" },
          { label: "میز نهارخوری ۸ نفره", href: "/fa/shop/category/products/میز-نهار-خوری-8-نفره" },
          { label: "صندلی میهمان", href: "/fa/shop/category/products/صندلی-نهارخوری-میهمان" },
          { label: "صندلی بار", href: "/fa/shop/category/products/صندلی-بار" },
          { label: "کنسول", href: "/fa/shop/category/products/کنسول" },
        ],
      },
      {
        label: "سرویس پذیرایی",
        href: "/fa/shop/category/products/مبلمان-پذیرایی",
        sub: [
          { label: "مبل راحتی سه نفره", href: "/fa/shop/category/products/مبل-راحتی-سه-نفره" },
          { label: "مبل ال", href: "/fa/shop/category/products/مبل-ال" },
          { label: "مبل چستر", href: "/fa/shop/category/products/مبل-چستر" },
          { label: "میز جلو مبلی", href: "/fa/shop/category/products/میز-جلو-مبلی" },
          { label: "میز تلویزیون", href: "/fa/shop/category/products/میز-تلوزیون" },
        ],
      },
      {
        label: "کودک و نوجوان",
        href: "/fa/shop/category/products/487_سرویس-کودک-و-نوجوان",
        sub: [
          { label: "سرویس خواب نوزاد", href: "/fa/shop/category/products/488_سرویس-خواب-نوزاد" },
          { label: "سرویس خواب نوجوان", href: "/fa/shop/category/products/489_سرویس-خواب-نوجوان" },
        ],
      },
    ],
  },
  {
    label: "اکسسوری",
    href: "/fa/shop/category/products/اکسسوری",
    children: [
      {
        label: "روشنایی",
        href: "/fa/shop/category/products/روشنایی",
        sub: [
          { label: "لوستر", href: "/fa/shop/category/products/لوستر" },
          { label: "آباژور", href: "/fa/shop/category/products/آباژور" },
          { label: "لوستر دیواری", href: "/fa/shop/category/products/لوستر-دیواری" },
        ],
      },
      {
        label: "دکوراتیو",
        href: "/fa/shop/category/products/دکوری",
        sub: [
          { label: "تابلو نقاشی", href: "/fa/shop/category/products/تابلو-نقاشی" },
          { label: "گلدان", href: "/fa/shop/category/products/گلدان" },
          { label: "ساعت دیواری", href: "/fa/shop/category/products/ساعت-دیواری" },
          { label: "شمعدان", href: "/fa/shop/category/products/شمعدان" },
          { label: "قاب عکس", href: "/fa/shop/category/products/قاب-عکس" },
        ],
      },
      {
        label: "فرش و شال",
        href: "/fa/shop/category/products/535_فرش",
        sub: [
          { label: "فرش", href: "/fa/shop/category/products/535_فرش" },
          { label: "شال مبل", href: "/fa/shop/category/products/534_شال-مبل" },
        ],
      },
    ],
  },
  {
    label: "پروژه‌ها",
    href: "/fa/project",
    children: [
      {
        label: "آشپزخانه",
        href: "/fa/shop/category/products/442_آشپزخانه-مدرن",
        sub: [
          { label: "مدرن", href: "/fa/shop/category/products/442_آشپزخانه-مدرن" },
          { label: "نئوکلاسیک", href: "/fa/shop/category/products/443_آشپزخانه-نئوکلاسیک" },
          { label: "کلاسیک", href: "/fa/shop/category/products/444_آشپزخانه-کلاسیک" },
        ],
      },
      {
        label: "هتل و رستوران",
        href: "/fa",
        sub: [
          { label: "هتل نگین پاسارگاد", href: "/fa/page/هتل-نگین-پاسارگاد" },
          { label: "هتل پارک حیات", href: "/fa/page/هتل-پارک-حیات" },
          { label: "هتل هما", href: "/fa/page/هتل-هما-2" },
        ],
      },
      {
        label: "پروژه‌های اداری",
        href: "/fa/shop/category/collections/445_پروژه-های-اداری",
        sub: [
          { label: "شرکت جهان افروز", href: "/fa/page/شرکت-جهان-افروز" },
          { label: "بانک صادرات", href: "/fa/page/بانک-صادرات-شعبه-سجاد" },
        ],
      },
    ],
  },
  {
    label: "تولیکا دیزاین",
    href: "/fa/blog",
    children: [
      {
        label: "قوانین چیدمان",
        href: "/fa/page/قوانین-چیدمان-مبلمان",
        sub: [
          { label: "چیدمان نشیمن", href: "/fa/blog/چیدمان-نشیمن" },
          { label: "چیدمان اتاق خواب", href: "/fa/blog/چیدمان-اتاق-خواب" },
        ],
      },
      {
        label: "سبک دکوراسیون",
        href: "/fa/blog/cat/سبک-در-دکوراسیون-داخلی-ترجمه-و-تدوین-ملیحه-نجاتی-عدالتیان",
        sub: [
          { label: "مینیمالیسم", href: "/fa/blog/راهکار-های-ایجاد-یک-خانه-مینیمال" },
          { label: "انواع سبک", href: "/fa/blog/انواع-سبک-در-دکوراسیون-داخلی" },
        ],
      },
    ],
  },
  {
    label: "کانسپت",
    href: "/fa/fa/shop/category/collections/کانسپت-ها",
    children: [
      { label: "مبل راحتی", href: "/fa/shop/category/collections/40_کانسپت-مبلمان-راحتی", sub: [] },
      { label: "سرویس نهارخوری", href: "/fa/shop/category/collections/کانسپت-سرویس-نهارخوری", sub: [] },
      { label: "سرویس خواب", href: "/fa/shop/category/collections/کانسپت-سرویس-خواب", sub: [] },
      { label: "مبلمان پذیرایی", href: "/fa/shop/category/collections/کانسپت-مبلمان-پذیرایی", sub: [] },
    ],
  },
  {
    label: "محصولات آماده",
    href: "/fa/shop/category/inventories/all",
    children: [],
  },
];

export default function Navbar() {
  const theme = useTheme((s) => s.theme);
  const t = tokens[theme];
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const toggle = useTheme((s) => s.toggle);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  const navBg = scrolled
    ? isDark
      ? "rgba(15,13,10,0.92)"
      : "rgba(248,244,238,0.92)"
    : "transparent";

  const navColor = scrolled ? t.text : "#e8e0d4";
  const borderColor = scrolled ? t.accent : "transparent";

  return (
    <>
      <nav
        dir="rtl"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 100,
          background: navBg,
          borderBottom: `1px solid ${borderColor}`,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 5vw",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="https://tolica.ir/"
            target="_blank"
            rel="noreferrer"
            style={{ flexShrink: 0 }}
          >
            <img
              src="https://tolica.ir/ztheme_front/img/logo-white.png"
              alt="Tolica"
              style={{ height: "36px", opacity: scrolled && !isDark ? 0 : 1, position: "absolute", transition: "opacity 0.3s" }}
            />
            <img
              src="https://tolica.ir/ztheme_front/img/logo-black.png"
              alt="Tolica"
              style={{ height: "36px", opacity: scrolled && !isDark ? 1 : 0, transition: "opacity 0.3s" }}
            />
          </a>

          {/* Desktop menu */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {menuItems.map((item, i) => (
              <li
                key={i}
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveMenu(i)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "0 1rem",
                    height: "64px",
                    lineHeight: "64px",
                    fontSize: "0.78rem",
                    letterSpacing: "0.03em",
                    color: navColor,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                    borderBottom: activeMenu === i ? `2px solid ${t.accent}` : "2px solid transparent",
                  }}
                >
                  {item.label}
                </a>

                {/* Mega dropdown */}
                {item.children.length > 0 && activeMenu === i && (
                  <div
                    style={{
                      position: "absolute",
                      top: "64px",
                      right: 0,
                      minWidth: "520px",
                      background: isDark ? "rgba(20,18,14,0.98)" : "rgba(250,247,242,0.98)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: `1px solid ${t.accent}30`,
                      padding: "1.5rem",
                      display: "grid",
                      gridTemplateColumns: `repeat(${Math.min(item.children.length, 3)}, 1fr)`,
                      gap: "1.5rem",
                      boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
                    }}
                  >
                    {item.children.map((col, j) => (
                      <div key={j}>
                        <a
                          href={col.href}
                          style={{
                            display: "block",
                            fontSize: "0.7rem",
                            letterSpacing: "0.08em",
                            color: t.accent,
                            textDecoration: "none",
                            marginBottom: "0.75rem",
                            fontWeight: 600,
                          }}
                        >
                          {col.label}
                        </a>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                          {col.sub.map((s, k) => (
                            <li key={k} style={{ marginBottom: "0.4rem" }}>
                              <a
                                href={s.href}
                                style={{
                                  fontSize: "0.75rem",
                                  color: t.text,
                                  textDecoration: "none",
                                  opacity: 0.75,
                                  transition: "opacity 0.15s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
                              >
                                {s.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0 }}>
            {/* Search */}
            <a href="/fa/product/search" style={{ color: navColor, lineHeight: 0 }}>
              <svg width="18" height="18" viewBox="0 0 21 21" fill="none">
                <circle cx="9.77" cy="9.77" r="8.99" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M16.02 16.49L19.54 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
            {/* User */}
            <a href="https://tolica.ir/fa/login" target="_blank" rel="noreferrer" style={{ color: navColor, lineHeight: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 19.1C5 16.7 6.7 14.6 9 14.3l.21-.03a14.3 14.3 0 015.58 0l.21.03C17.3 14.6 19 16.7 19 19.1c0 1-.82 1.9-1.83 1.9H6.83C5.82 21 5 20.15 5 19.1z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M16.08 6.94a4.08 4.08 0 11-8.17 0 4.08 4.08 0 018.17 0z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
            {/* Cart */}
            <a href="https://tolica.ir/fa/invoice/cart" target="_blank" rel="noreferrer" style={{ color: navColor, lineHeight: 0 }}>
              <svg width="20" height="19" viewBox="0 0 24 21" fill="none">
                <path d="M17.69 11H6l-1.43-7.14H18.86c.1 0 .21.02.3.07.1.04.18.11.25.19.07.08.12.18.14.28.03.1.03.2.01.3L18.39 10.4c-.03.17-.11.33-.24.44-.13.1-.3.17-.47.17z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.57 3.86L3.97 1.57A.86.86 0 003.27 1H1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 11l.6 3c.03.16.12.31.25.41.13.1.29.16.45.16H16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="15.29" cy="18.86" r="0.71" stroke="currentColor" strokeWidth="1.1" />
                <circle cx="8.14" cy="18.86" r="0.71" stroke="currentColor" strokeWidth="1.1" />
              </svg>
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
              style={{
                background: "none",
                border: `1px solid ${t.accent}60`,
                borderRadius: "999px",
                cursor: "pointer",
                color: navColor,
                lineHeight: 0,
                padding: "0.3rem 0.6rem",
                fontSize: "0.9rem",
                transition: "border-color 0.2s",
                display: "flex",
                alignItems: "center",
              }}
            >
              {mounted ? (theme === "dark" ? "☀" : "☾") : "·"}
            </button>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: navColor,
                lineHeight: 0,
                padding: 0,
              }}
              className="flex md:hidden"
              aria-label="منو"
            >
              <svg width="22" height="16" fill="none" viewBox="0 0 22 16">
                <path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          dir="rtl"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: isDark ? "rgba(15,13,10,0.98)" : "rgba(248,244,238,0.98)",
            backdropFilter: "blur(16px)",
            overflowY: "auto",
            padding: "5rem 5vw 2rem",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "1.25rem",
              left: "5vw",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: t.text,
              fontSize: "1.5rem",
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {menuItems.map((item, i) => (
              <li key={i} style={{ borderBottom: `1px solid ${t.accent}20` }}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 0",
                    color: t.text,
                    fontSize: "0.9rem",
                    textAlign: "right",
                  }}
                >
                  <span>{item.label}</span>
                  {item.children.length > 0 && (
                    <span style={{ color: t.accent, fontSize: "0.7rem", transform: mobileExpanded === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
                  )}
                </button>
                {mobileExpanded === i && item.children.length > 0 && (
                  <div style={{ paddingBottom: "1rem", paddingRight: "1rem" }}>
                    {item.children.map((col, j) => (
                      <div key={j} style={{ marginBottom: "1rem" }}>
                        <a href={col.href} style={{ display: "block", fontSize: "0.75rem", color: t.accent, textDecoration: "none", marginBottom: "0.5rem", fontWeight: 600 }}>
                          {col.label}
                        </a>
                        {col.sub.map((s, k) => (
                          <a key={k} href={s.href} style={{ display: "block", fontSize: "0.8rem", color: t.text, opacity: 0.7, textDecoration: "none", padding: "0.25rem 0" }}>
                            {s.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}