const pasos = [
  {
    numero: '01',
    nombre: 'Reunión inicial',
    descripcion:
      'Entendemos el evento: fecha, lugar, cantidad de personas, necesidades y presupuesto.',
  },
  {
    numero: '02',
    nombre: 'Propuesta integral',
    descripcion:
      'Armamos la propuesta completa con todos los servicios y los costos detallados.',
  },
  {
    numero: '03',
    nombre: 'Producción',
    descripcion:
      'Coordinamos todos los proveedores, el equipo técnico y la logística.',
  },
  {
    numero: '04',
    nombre: 'El evento',
    descripcion:
      'Estamos presentes de principio a fin. Vos disfrutás — nosotros operamos.',
  },
] as const

export default function ProcesoProduccion() {
  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-display font-extrabold text-white mb-16">
          Del briefing al evento
        </h2>

        {/* Desktop: horizontal, Mobile: vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {pasos.map((paso) => (
            <div key={paso.numero} className="relative flex flex-col">
              {/* Línea conectora desktop */}

              <p className="text-brand-orange font-heading text-5xl font-extrabold mb-3">
                {paso.numero}
              </p>
              <h3 className="text-white font-heading text-xl font-extrabold mb-2">
                {paso.nombre}
              </h3>
              <p className="text-[#CCCCCC] font-body text-sm leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
