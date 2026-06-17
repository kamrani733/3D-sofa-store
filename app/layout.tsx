import type { Metadata } from 'next'
import './globals.css'
import { vazirmatn, iranianSans, bnazanin } from './fonts'

export const metadata: Metadata = {
  title: 'مزون وِرا — مبلمان لوکس',
  description: 'مبل‌های لوکس دست‌ساز از سال ۱۹۲۳',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${iranianSans.variable} ${bnazanin.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
