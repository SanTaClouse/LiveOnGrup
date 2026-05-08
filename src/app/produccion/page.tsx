import type { Metadata } from 'next'
import HeroProduccion from '@/components/sections/produccion/HeroProduccion'
import ServiciosProduccion from '@/components/sections/produccion/ServiciosProduccion'
import ProcesoProduccion from '@/components/sections/produccion/ProcesoProduccion'
import TestimoniosProduccion from '@/components/sections/produccion/TestimoniosProduccion'
import CTAProduccion from '@/components/sections/produccion/CTAProduccion'
import ProyectoGrid from '@/components/proyectos/ProyectoGrid'
import { getProyectosByLinea } from '@/data/proyectos'

export const metadata: Metadata = {
  title: 'Producción de Eventos Llave en Mano — Santa Fe',
  description:
    'Organizamos tu evento completo: catering, seguridad, técnica, contenido y artistas. Producción integral en Santa Fe, Argentina.',
}

export default async function ProduccionPage() {
  const proyectos = await getProyectosByLinea('produccion')

  return (
    <>
      <HeroProduccion />
      <ServiciosProduccion />
      <ProcesoProduccion />

      <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-title mb-4">Eventos que produjimos</h2>
          <p className="text-gray-400 font-body mb-10">Cada evento, documentado.</p>
          <ProyectoGrid proyectos={proyectos} />
        </div>
      </section>

      <TestimoniosProduccion />
      <CTAProduccion />
    </>
  )
}
