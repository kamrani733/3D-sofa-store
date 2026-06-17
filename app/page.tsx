'use client'

import dynamic from 'next/dynamic'
import HeroText from '../components/HeroText'
import Section from '../components/Section'

const SofaCanvas = dynamic(() => import('../components/SofaCanvas'), { ssr: false })

export default function Home() {
  return (
    <main style={{ background: '#0f0d0a', color: '#e8e0d4' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, width: '100vw', height: '100vh' }}>
        <SofaCanvas />
      </div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 5vw 8vh' }}>
          <HeroText />
        </section>
        <Section id="craftsmanship" label="01 — Craftsmanship" title="Handcrafted for eternity" body="Every sofa is sculpted by skilled artisans in Italy, combining rich materials and decades of heritage." align="left" />
        <Section id="comfort" label="02 — Comfort" title="Designed around the body" body="Soft yet supportive cushioning and sumptuous upholstery create a sanctuary in the heart of your living space." align="right" />
        <Section id="heritage" label="03 — Heritage" title="A century of refined taste" body="Founded in 1923 in Florence, Maison Véra has furnished the most distinguished residences across Europe." align="left" />
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: '#a08c6e', textTransform: 'uppercase' }}>Reserve yours</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Georgia, serif', fontWeight: 300 }}>Starting at €4,200</h2>
          <button
            style={{ border: '1px solid #a08c6e', color: '#a08c6e', background: 'transparent', padding: '1rem 2.5rem', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.4s ease' }}
            onMouseEnter={e => { const t = e.target as HTMLElement; t.style.background = '#a08c6e'; t.style.color = '#0f0d0a' }}
            onMouseLeave={e => { const t = e.target as HTMLElement; t.style.background = 'transparent'; t.style.color = '#a08c6e' }}
          >
            Request a Consultation
          </button>
        </section>
      </div>
    </main>
  )
}
