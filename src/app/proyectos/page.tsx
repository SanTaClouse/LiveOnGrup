import type { Metadata } from 'next'
import { getTodosLosProyectos } from '@/data/proyectos'
import ProyectosFiltrados from '@/components/proyectos/ProyectosFiltrados'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Trabajos de Live On Group en producción de eventos e instalaciones de audio profesional. Filtrá por línea para ver cada área.',
}

export default async function ProyectosPage() {
  const proyectos = await getTodosLosProyectos()

  return (
    <>
      <section className="bg-brand-black pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-orange font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Proyectos
          </p>
          <h1 className="font-heading text-display font-extrabold text-white mb-4">
            Cada trabajo, documentado.
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl">
            Lo que hicimos en producción de eventos e instalaciones de audio.
            Filtrá por línea o miralos todos.
          </p>
        </div>
      </section>

      <section className="bg-brand-black pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ProyectosFiltrados proyectos={proyectos} />
        </div>
      </section>
    </>
  )
}
