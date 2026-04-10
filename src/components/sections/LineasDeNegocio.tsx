import Link from 'next/link'

const checkIcon = (
  <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const cards = [
  {
    bg: 'bg-brand-black',
    label: 'PRODUCCIÓN Y RENTAL',
    titulo: 'Tu evento, nuestro problema.',
    descripcion:
      'Organizamos el evento completo: catering, seguridad, técnica, contenido y artistas. Vos delegás — nosotros entregamos.',
    items: [
      'Eventos llave en mano',
      'Gestión de artistas',
      'Técnica y producción',
    ],
    cta: 'Ver Producción completa →',
    href: '/produccion',
  },
  {
    bg: 'bg-brand-steel',
    label: 'INSTALACIONES Y VENTA',
    titulo: 'El sonido correcto para cada espacio.',
    descripcion:
      'Inspeccionamos, definimos el sistema y ejecutamos la instalación completa. Sin intermediarios.',
    items: [
      'Restaurants, teatros y auditorios',
      'Acústica profesional',
      'Asesoramiento y venta',
    ],
    cta: 'Ver Instalaciones completo →',
    href: '/instalaciones',
  },
] as const

export default function LineasDeNegocio() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.href}
          className={`${card.bg} border-t-4 border-brand-orange p-8 lg:p-12`}
        >
          <p className="text-brand-orange text-sm font-body uppercase tracking-widest mb-4">
            {card.label}
          </p>

          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-4">
            {card.titulo}
          </h2>

          <p className="text-[#CCCCCC] font-body mb-6 leading-relaxed">
            {card.descripcion}
          </p>

          <ul className="space-y-3 mb-8">
            {card.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#CCCCCC] font-body">
                {checkIcon}
                {item}
              </li>
            ))}
          </ul>

          <Link href={card.href} className="btn-primary inline-block">
            {card.cta}
          </Link>
        </div>
      ))}
    </section>
  )
}
