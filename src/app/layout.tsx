import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Nunito como sustituto web-safe de "Arial Rounded MT Bold" (decisión documentada en BRAND_CONTEXT.md)
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Live On Group | Producción de Eventos e Instalaciones de Audio — Santa Fe',
    template: '%s | Live On Group',
  },
  description: 'Producción de eventos llave en mano e instalaciones de audio profesional en Santa Fe, Argentina. Más de 30 años de experiencia.',
  metadataBase: new URL('https://liveongroup.com.ar'),
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://liveongroup.com.ar',
    siteName: 'Live On Group',
    title: 'Live On Group | Producción de Eventos e Instalaciones de Audio',
    description: 'Producción de eventos llave en mano e instalaciones de audio profesional en Santa Fe, Argentina.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Live On Group — Producción · Técnica · Eventos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live On Group',
    description: 'Producción de eventos e instalaciones de audio en Santa Fe, Argentina.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${nunito.variable}`}>
      <body className="bg-brand-black text-white font-body antialiased">
        <JsonLd />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}