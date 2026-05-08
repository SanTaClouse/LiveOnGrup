import { Proyecto } from '@/types/proyecto'
import ProyectoCard from './ProyectoCard'

interface Props {
  proyectos: Proyecto[]
}

export default function ProyectoGrid({ proyectos }: Props) {
  if (proyectos.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-brand-midgray font-body">
          Próximamente — proyectos en camino.
        </p>
      </div>
    )
  }

  return (
    <div className="
      grid grid-cols-1
      md:grid-cols-3
      md:auto-rows-[280px]
      gap-2
    ">
      {proyectos.map((proyecto, index) => (
        <ProyectoCard
          key={proyecto.slug}
          proyecto={proyecto}
          destacado={index === 0}
        />
      ))}
    </div>
  )
}
