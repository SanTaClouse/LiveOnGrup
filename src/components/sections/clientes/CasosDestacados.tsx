import Image from 'next/image'
import { images } from '@/data/images'

const casos = [
  {
    badge: 'INSTALACIONES',
    nombre: 'Casino Santa Fe',
    descripcion:
      'Sistema de audio de zonas múltiples para el complejo completo. Diseño, instalación y mantenimiento de largo plazo.',
    relacion: 'Cliente de largo plazo',
    imagen: images.clientes.casino,
  },
  {
    badge: 'PRODUCCIÓN',
    nombre: 'Festival de Guadalupe',
    descripcion:
      'Producción técnica y logística completa: sonido, iluminación, coordinación de artistas y seguridad.',
    relacion: null,
    imagen: images.clientes.festival,
  },
] as const

export default function CasosDestacados() {
  return (
    <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {casos.map((caso) => (
            <div
              key={caso.nombre}
              className="bg-brand-black rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={caso.imagen}
                  alt={caso.nombre}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-brand-orange font-body text-xs uppercase tracking-widest mb-2">
                  {caso.badge}
                </p>
                <h3 className="text-white font-heading font-extrabold text-2xl mb-3">
                  {caso.nombre}
                </h3>
                <p className="text-[#CCCCCC] font-body leading-relaxed mb-4">
                  {caso.descripcion}
                </p>
                {caso.relacion && (
                  <span className="inline-block bg-brand-orange/10 text-brand-orange font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {caso.relacion}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#777777] font-body text-xs text-center mt-10">
          *Logos y casos publicados con autorización del cliente
        </p>
      </div>
    </section>
  )
}
