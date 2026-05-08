import Link from 'next/link'
import { LineaDeNegocio } from '@/types/proyecto'

const copy = {
  instalaciones: {
    titulo:    '¿Necesitás una instalación similar?',
    subtitulo: 'Contanos el espacio y te coordinamos una visita técnica sin costo.',
    cta:       'Consultá tu instalación',
    href:      '/contacto?linea=instalaciones',
  },
  produccion: {
    titulo:    '¿Tenés un evento que organizar?',
    subtitulo: 'Contanos la fecha y el tipo de evento. Te respondemos en menos de 24 horas.',
    cta:       'Cotizá tu evento',
    href:      '/contacto?linea=produccion',
  },
}

export default function ProyectoCTA({ linea }: { linea: LineaDeNegocio }) {
  const { titulo, subtitulo, cta, href } = copy[linea]

  return (
    <section className="bg-brand-black py-24 px-4 text-center">
      <h2 className="font-heading text-white text-3xl md:text-4xl mb-4">
        {titulo}
      </h2>
      <p className="text-gray-400 font-body mb-8 max-w-xl mx-auto">
        {subtitulo}
      </p>
      <Link href={href} className="btn-primary">
        {cta}
      </Link>
    </section>
  )
}
