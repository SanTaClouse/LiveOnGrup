'use client'
import { useState, useMemo } from 'react'
import { Proyecto, LineaDeNegocio } from '@/types/proyecto'
import ProyectoGrid from './ProyectoGrid'

type Filtro = 'todos' | LineaDeNegocio

const filtros: { value: Filtro; label: string }[] = [
  { value: 'todos',         label: 'Todos' },
  { value: 'instalaciones', label: 'Instalaciones' },
  { value: 'produccion',    label: 'Producción' },
]

export default function ProyectosFiltrados({ proyectos }: { proyectos: Proyecto[] }) {
  const [filtro, setFiltro] = useState<Filtro>('todos')

  const proyectosFiltrados = useMemo(
    () => filtro === 'todos' ? proyectos : proyectos.filter(p => p.linea === filtro),
    [filtro, proyectos],
  )

  const counts = useMemo(() => ({
    todos:         proyectos.length,
    instalaciones: proyectos.filter(p => p.linea === 'instalaciones').length,
    produccion:    proyectos.filter(p => p.linea === 'produccion').length,
  }), [proyectos])

  return (
    <>
      <div
        role="tablist"
        aria-label="Filtrar proyectos por línea"
        className="flex flex-wrap gap-2 mb-10"
      >
        {filtros.map(({ value, label }) => {
          const isActive = filtro === value
          return (
            <button
              key={value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setFiltro(value)}
              className={`
                inline-flex items-center gap-2 px-4 py-2 text-sm font-body font-semibold
                uppercase tracking-widest transition-colors
                ${isActive
                  ? 'bg-brand-orange text-brand-black'
                  : 'bg-brand-darkgray text-brand-muted hover:bg-brand-darkgray/70 hover:text-white'
                }
              `}
            >
              {label}
              <span className={`text-xs ${isActive ? 'text-brand-black/70' : 'text-brand-faint'}`}>
                {counts[value]}
              </span>
            </button>
          )
        })}
      </div>

      <ProyectoGrid proyectos={proyectosFiltrados} />
    </>
  )
}
