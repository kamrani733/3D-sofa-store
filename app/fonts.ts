import localFont from 'next/font/local'

// Persian body font (IranianSans) and display font (Vazirmatn).
// BNAZANIN is available as an additional serif-like option.
// next/font self-hosts these and emits CSS variables we attach to <html>.
export const vazirmatn = localFont({
  src: '../public/fonts/Vazirmatn.ttf',
  display: 'swap',
  variable: '--font-vazirmatn',
})

export const iranianSans = localFont({
  src: '../public/fonts/IranianSans.ttf',
  display: 'swap',
  variable: '--font-sans',
})

export const bnazanin = localFont({
  src: '../public/fonts/BNAZANIN.ttf',
  display: 'swap',
  variable: '--font-nazanin',
})
