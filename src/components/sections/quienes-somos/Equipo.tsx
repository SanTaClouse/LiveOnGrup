import Image from 'next/image'
import { images } from '@/data/images'

const miembros = [
  {
    nombre: 'Pablo',
    rol: 'Dirección Técnica',
    bio: '30+ años de experiencia en instalaciones y sonido en vivo.',
    imagen: images.equipo.persona1,
  },
  {
    nombre: '[Nombre]',
    rol: 'Dirección Comercial',
    bio: 'Placeholder — confirmar con el cliente.',
    imagen: images.equipo.persona2,
  },
] as const

export default function Equipo() {
  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-title mb-12">El equipo</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {miembros.map((m) => (
            <div key={m.nombre} className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
                <Image
                  src={m.imagen}
                  alt={`Foto de ${m.nombre}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-heading font-extrabold text-xl">
                {m.nombre}
              </h3>
              <p className="text-brand-orange font-body text-sm uppercase tracking-widest mb-2">
                {m.rol}
              </p>
              <p className="text-[#CCCCCC] font-body text-sm">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
