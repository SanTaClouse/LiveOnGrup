import type { Metadata } from 'next'
import HeroProduccion from '@/components/sections/produccion/HeroProduccion'
import ServiciosProduccion from '@/components/sections/produccion/ServiciosProduccion'
import ProcesoProduccion from '@/components/sections/produccion/ProcesoProduccion'
import TestimoniosProduccion from '@/components/sections/produccion/TestimoniosProduccion'
import CTAProduccion from '@/components/sections/produccion/CTAProduccion'

export const metadata: Metadata = {
  title: 'Producción de Eventos Llave en Mano — Santa Fe',
  description:
    'Organizamos tu evento completo: catering, seguridad, técnica, contenido y artistas. Producción integral en Santa Fe, Argentina.',
}

export default function ProduccionPage() {
  return (
    <>
      <HeroProduccion />
      <ServiciosProduccion />
      <ProcesoProduccion />

      {/* Sección 4 — Eventos realizados */}
      <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-title mb-12">Eventos que produjimos</h2>
          {/* TODO: integrar ProyectoGrid del prompt 10 */}
          <p className="text-brand-midgray font-body text-sm">
            Galería de proyectos — próximamente.
          </p>
        </div>
      </section>

      <TestimoniosProduccion />
      <CTAProduccion />
    </>
  )
}
