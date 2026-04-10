import type { Metadata } from 'next'
import HeroQuienes from '@/components/sections/quienes-somos/HeroQuienes'
import Historia from '@/components/sections/quienes-somos/Historia'
import Valores from '@/components/sections/quienes-somos/Valores'
import Equipo from '@/components/sections/quienes-somos/Equipo'
import CTAQuienes from '@/components/sections/quienes-somos/CTAQuienes'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'Empresa de producción de eventos e instalaciones de audio con 8 años en el mercado de Santa Fe y más de 30 años de experiencia técnica acumulada.',
}

export default function QuienesSomosPage() {
  return (
    <>
      <HeroQuienes />
      <Historia />
      <Valores />
      <Equipo />
      <CTAQuienes />
    </>
  )
}
