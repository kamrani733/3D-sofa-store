import type { Metadata } from "next";
import "./globals.css";
import { yekanBakh } from "./fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "مزون وِرا — مبلمان لوکس",
  description: "مبل‌های لوکس دست‌ساز از سال ۱۹۲۳",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekanBakh.variable}`}
    >
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
