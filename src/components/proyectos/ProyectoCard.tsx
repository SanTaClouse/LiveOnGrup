import Image from 'next/image'
import Link from 'next/link'
import { Proyecto } from '@/types/proyecto'

interface Props {
  proyecto: Proyecto
  destacado?: boolean
}

export default function ProyectoCard({ proyecto, destacado = false }: Props) {
  const href = `/${proyecto.linea}/${proyecto.slug}`

  return (
    <Link
      href={href}
      className={`
        group relative block overflow-hidden bg-brand-darkgray
        ${destacado ? 'md:col-span-2 md:row-span-2' : ''}
      `}
    >
      <div className={`relative w-full ${destacado ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <Image
          src={proyecto.imagenPrincipal.url}
          alt={proyecto.imagenPrincipal.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={destacado
            ? '(max-width: 768px) 100vw, 66vw'
            : '(max-width: 768px) 100vw, 33vw'
          }
        />
      </div>

      <div className="
        absolute inset-0
        bg-gradient-to-t from-black/90 via-black/40 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        flex flex-col justify-end p-6
      ">
        <span className="text-brand-orange text-xs font-body font-semibold uppercase tracking-widest mb-2">
          {proyecto.categoria}
        </span>
        <h3 className="font-heading text-white text-xl lg:text-2xl leading-tight mb-1">
          {proyecto.titulo}
        </h3>
        <p className="text-gray-300 text-sm font-body line-clamp-2">
          {proyecto.subtitulo}
        </p>
        <span className="inline-flex items-center gap-2 mt-4 text-brand-orange text-sm font-body font-semibold">
          Ver proyecto
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      <span className="absolute top-3 right-3 bg-black/60 text-gray-400 text-xs font-body px-2 py-1 rounded">
        {proyecto.anio}
      </span>
    </Link>
  )
}
