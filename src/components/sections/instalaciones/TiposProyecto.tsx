import Image from 'next/image'
import { images } from '@/data/images'

const tipos = [
  {
    imagen: images.espacios.restaurant,
    titulo: 'Restaurants y bares',
    descripcion: 'Música ambiente, sonorización de salones, sistemas de zona.',
  },
  {
    imagen: images.espacios.teatro,
    titulo: 'Teatros y salas',
    descripcion: 'Sistemas de refuerzo de sonido, monitoreo, acústica.',
  },
  {
    imagen: images.espacios.auditorio,
    titulo: 'Auditorios',
    descripcion: 'Instalaciones de alta fidelidad para conferencias y eventos.',
  },
  {
    imagen: images.espacios.boliche,
    titulo: 'Boliches y venues',
    descripcion: 'Sistemas de alto impacto sonoro con manejo de zonas.',
  },
  {
    imagen: images.espacios.supermercado,
    titulo: 'Supermercados y comercios',
    descripcion: 'Música funcional y mensajes en múltiples zonas.',
  },
  {
    imagen: images.espacios.acustica,
    titulo: 'Acústica profesional',
    descripcion: 'Tratamiento acústico de recintos para control de reverberación.',
  },
] as const

export default function TiposProyecto() {
  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-title mb-12">
          ¿En qué tipo de espacio trabajamos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipos.map((t) => (
            <div
              key={t.titulo}
              className="bg-brand-darkgray border-t-2 border-brand-steel hover:border-brand-orange transition-colors duration-200 rounded-sm overflow-hidden group"
            >
              <div className="relative h-40">
                <Image
                  src={t.imagen}
                  alt={t.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgray to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-body font-bold text-lg mb-2">
                  {t.titulo}
                </h3>
                <p className="text-[#CCCCCC] font-body text-sm leading-relaxed">
                  {t.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
