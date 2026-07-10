import type { Metadata } from 'next'
import HeroInstalaciones from '@/components/sections/instalaciones/HeroInstalaciones'
import TiposProyecto from '@/components/sections/instalaciones/TiposProyecto'
import ProcesoInstalaciones from '@/components/sections/instalaciones/ProcesoInstalaciones'
import BannerClientes from '@/components/sections/instalaciones/BannerClientes'
import CTAInstalaciones from '@/components/sections/instalaciones/CTAInstalaciones'
import ProyectoGrid from '@/components/proyectos/ProyectoGrid'
import { getProyectosByLinea } from '@/data/proyectos'

export const metadata: Metadata = {
  title: 'Instalaciones de Audio Profesional — Santa Fe',
  description:
    'Diseño e instalación de sistemas de audio para restaurants, teatros, y comercios en Santa Fe. Más de 30 años de experiencia.',
}

export default async function InstalacionesPage() {
  const proyectos = await getProyectosByLinea('instalaciones')

  return (
    <>
      <HeroInstalaciones />
      <TiposProyecto />
      <ProcesoInstalaciones />

      <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-title mb-4">
            <span className="accent-bar" aria-hidden="true" />
            Instalaciones realizadas
          </h2>
          <p className="text-brand-faint font-body mb-10">Cada instalación, documentada.</p>
          <ProyectoGrid proyectos={proyectos} />
        </div>
      </section>

      <BannerClientes />
      <CTAInstalaciones />
    </>
  )
}
