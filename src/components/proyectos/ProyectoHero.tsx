import Image from 'next/image'
import { Proyecto } from '@/types/proyecto'

export default function ProyectoHero({ proyecto }: { proyecto: Proyecto }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image
        src={proyecto.imagenPrincipal.url}
        alt={proyecto.imagenPrincipal.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl">
        <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">
          {proyecto.categoria} · {proyecto.anio}
        </span>
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mt-2 mb-3">
          {proyecto.titulo}
        </h1>
        <p className="text-brand-muted text-lg md:text-xl font-body">
          {proyecto.subtitulo}
        </p>
        <p className="text-brand-faint text-sm mt-2 font-body">
          📍 {proyecto.ubicacion}
        </p>
      </div>
    </section>
  )
}
