import type { Metadata } from 'next'
import HeroInstalaciones from '@/components/sections/instalaciones/HeroInstalaciones'
import TiposProyecto from '@/components/sections/instalaciones/TiposProyecto'
import ProcesoInstalaciones from '@/components/sections/instalaciones/ProcesoInstalaciones'
import BannerClientes from '@/components/sections/instalaciones/BannerClientes'
import CTAInstalaciones from '@/components/sections/instalaciones/CTAInstalaciones'

export const metadata: Metadata = {
  title: 'Instalaciones de Audio Profesional — Santa Fe',
  description:
    'Diseño e instalación de sistemas de audio para restaurants, teatros, y comercios en Santa Fe. Más de 30 años de experiencia.',
}

export default function InstalacionesPage() {
  return (
    <>
      <HeroInstalaciones />
      <TiposProyecto />
      <ProcesoInstalaciones />

      {/* Sección 4 — Portfolio */}
      <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-title mb-12">Instalaciones realizadas</h2>
          {/* TODO: integrar ProyectoGrid del prompt 10 */}
          <p className="text-brand-midgray font-body text-sm">
            Galería de proyectos — próximamente.
          </p>
        </div>
      </section>

      <BannerClientes />
      <CTAInstalaciones />
    </>
  )
}
