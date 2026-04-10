import Image from 'next/image'
import { images } from '@/data/images'

const servicios = [
  {
    imagen: images.servicios.sonido,
    titulo: 'Técnica de sonido',
    descripcion: 'Equipamiento profesional, setup y operación durante todo el evento.',
  },
  {
    imagen: images.servicios.contenido,
    titulo: 'Producción',
    descripcion: 'Pantallas, visuales, dirección creativa .',
  },
  {
    imagen: images.servicios.artistas,
    titulo: 'Artistas y shows en vivo',
    descripcion: 'Gestión, contratación y logística de artistas.',
  },
  {
    imagen: images.servicios.catering,
    titulo: 'Catering',
    descripcion: 'Coordinación de servicios gastronómicos.',
  },
  {
    imagen: images.servicios.seguridad,
    titulo: 'Seguridad',
    descripcion: 'Personal de seguridad coordinado para cada tipo de evento.',
  },
  {
    imagen: images.servicios.logistica,
    titulo: 'Logística integral',
    descripcion: 'Transporte, montaje, desmontaje y coordinación general.',
  },
] as const

export default function ServiciosProduccion() {
  return (
    <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-title mb-12">Todo incluido</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="bg-brand-black border-l-4 border-brand-orange rounded-sm overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={s.imagen}
                  alt={s.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-body font-bold text-lg mb-2">
                  {s.titulo}
                </h3>
                <p className="text-[#CCCCCC] font-body text-sm leading-relaxed">
                  {s.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
