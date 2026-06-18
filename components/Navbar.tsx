"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Search, User, ShoppingCart, Sun, Moon, X } from "lucide-react";
import { useTheme, tokens } from "../store/scrollStore";
import { menuItems } from "./menuItems";

export default function Navbar() {
  const theme = useTheme((s) => s.theme);
  const t = tokens[theme];
  const toggle = useTheme((s) => s.toggle);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const raf = requestAnimationFrame(() => setMounted(true));

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isDark = theme === "dark";

  const cssVars = {
    "--nav-accent": t.accent,
    "--nav-text": t.text,
    "--nav-bg": t.bg,
  } as React.CSSProperties;

  return (
    <>
      <nav
        dir="rtl"
        style={{
          ...cssVars,
          background: scrolled
            ? isDark
              ? "rgba(15,13,10,0.92)"
              : "rgba(248,244,238,0.92)"
            : "transparent",
          borderBottomColor: scrolled ? t.accent : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        className="fixed top-0 right-0 left-0 z-[100] border-b transition-all duration-400"
      >
        <div className="max-w-[1400px] mx-auto px-[5vw] h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="https://tolica.ir/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 relative h-22 w-34"
          >
            <Image
              src="/logo-white.png"
              alt="Tolica"
              fill
              className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
              style={{ opacity: isDark ? 1 : 0 }}
            />
            <Image
              src="/logo-black.png"
              alt="Tolica"
              fill
              className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
              style={{ opacity: isDark ? 0 : 1 }}
            />
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center m-0 p-0 list-none">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="relative"
                onMouseEnter={() => setActiveMenu(i)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center h-16 px-4 text-xs tracking-wide whitespace-nowrap no-underline transition-colors duration-200 border-b-2"
                  style={{
                    color: t.text,
                    borderBottomColor:
                      activeMenu === i ? t.accent : "transparent",
                  }}
                >
                  {item.label}
                </a>

                {/* Mega dropdown */}
                {item.children.length > 0 && activeMenu === i && (
                  <div
                    className="absolute top-16 right-0 min-w-[520px] p-6 shadow-2xl border"
                    style={{
                      background: isDark
                        ? "rgba(20,18,14,0.98)"
                        : "rgba(250,247,242,0.98)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderColor: `${t.accent}30`,
                      display: "grid",
                      gridTemplateColumns: `repeat(${Math.min(item.children.length, 3)}, 1fr)`,
                      gap: "1.5rem",
                    }}
                  >
                    {item.children.map((col, j) => (
                      <div key={j}>
                        <a
                          href={col.href}
                          className="block text-[0.7rem] tracking-widest font-semibold no-underline mb-3"
                          style={{ color: t.accent }}
                        >
                          {col.label}
                        </a>
                        <ul className="list-none m-0 p-0">
                          {col.sub.map((s, k) => (
                            <li key={k} className="mb-1.5">
                              <a
                                href={s.href}
                                className="text-xs no-underline opacity-75 hover:opacity-100 transition-opacity duration-150"
                                style={{ color: t.text }}
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
          <div className="flex items-center gap-5 shrink-0">
            {/* Search */}
            <a
              href="/fa/product/search"
              className="leading-none transition-opacity hover:opacity-70"
              style={{ color: t.text }}
              aria-label="جستجو"
            >
              <Search size={18} strokeWidth={1.5} className="text-current" />
            </a>

            {/* User */}
            <a
              href="https://tolica.ir/fa/login"
              target="_blank"
              rel="noreferrer"
              className="leading-none transition-opacity hover:opacity-70"
              style={{ color: t.text }}
              aria-label="ورود"
            >
              <User size={18} strokeWidth={1.5} className="text-current" />
            </a>

            {/* Cart */}
            <a
              href="https://tolica.ir/fa/invoice/cart"
              target="_blank"
              rel="noreferrer"
              className="leading-none transition-opacity hover:opacity-70"
              style={{ color: t.text }}
              aria-label="سبد خرید"
            >
              <ShoppingCart
                size={18}
                strokeWidth={1.5}
                className="text-current"
              />
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={
                theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
              }
              className="flex items-center leading-none rounded-full px-2.5 py-1.5 text-sm border cursor-pointer bg-transparent transition-opacity hover:opacity-70"
              style={{
                color: t.text,
                borderColor: `${t.accent}60`,
              }}
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun size={16} strokeWidth={1.5} className="text-current" />
                ) : (
                  <Moon size={16} strokeWidth={1.5} className="text-current" />
                )
              ) : (
                "·"
              )}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex md:hidden bg-transparent border-none cursor-pointer leading-none p-0"
              style={{ color: t.text }}
              aria-label="منو"
            >
              <Menu size={22} strokeWidth={1.5} className="text-current" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          dir="rtl"
          className="fixed inset-0 z-[200] overflow-y-auto pt-20 px-[5vw] pb-8"
          style={{
            background: isDark
              ? "rgba(15,13,10,0.98)"
              : "rgba(248,244,238,0.98)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 left-[5vw] bg-transparent border-none cursor-pointer text-2xl leading-none"
            style={{ color: t.text }}
          >
            ✕
          </button>

          <ul className="list-none m-0 p-0">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="border-b"
                style={{ borderColor: `${t.accent}20` }}
              >
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === i ? null : i)
                  }
                  className="w-full bg-transparent border-none cursor-pointer flex justify-between items-center py-4 text-sm text-right"
                  style={{ color: t.text }}
                >
                  <span>{item.label}</span>
                  {item.children.length > 0 && (
                    <span
                      className="text-[0.7rem] transition-transform duration-200"
                      style={{
                        color: t.accent,
                        transform:
                          mobileExpanded === i ? "rotate(180deg)" : "none",
                      }}
                    >
                      ▼
                    </span>
                  )}
                </button>

                {mobileExpanded === i && item.children.length > 0 && (
                  <div className="pb-4 pr-4">
                    {item.children.map((col, j) => (
                      <div key={j} className="mb-4">
                        <a
                          href={col.href}
                          className="block text-xs font-semibold no-underline mb-2"
                          style={{ color: t.accent }}
                        >
                          {col.label}
                        </a>
                        {col.sub.map((s, k) => (
                          <a
                            key={k}
                            href={s.href}
                            className="block text-sm no-underline py-1 opacity-70"
                            style={{ color: t.text }}
                          >
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
