import Link from 'next/link'
import { Proyecto } from '@/types/proyecto'
import ProyectoCard from '@/components/proyectos/ProyectoCard'

interface Props {
  proyectos: Proyecto[]
}

export default function ProyectosDestacados({ proyectos }: Props) {
  // Si el cliente todavía no marcó ningún proyecto, la sección no se renderiza.
  if (proyectos.length === 0) return null

  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="accent-bar" />
            <h2 className="font-heading text-title font-extrabold text-white inline-block align-middle">
              Proyectos destacados
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="hidden sm:inline-flex items-center gap-2 text-brand-orange font-body text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap"
          >
            Ver todos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/proyectos" className="btn-secondary inline-block">
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
