import localFont from 'next/font/local'

// Persian font (YekanBakh) used across the entire site.
// next/font self-hosts it and emits a CSS variable we attach to <html>.
export const yekanBakh = localFont({
  src: '../public/fonts/YekanBakh_Bold.ttf',
  display: 'swap',
  variable: '--font-yekanbakh',
})
