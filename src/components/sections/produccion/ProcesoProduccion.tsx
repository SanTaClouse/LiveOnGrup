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
      'Estamos presentes de principio a fin.',
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
          {pasos.map((paso, i) => (
            <div key={paso.numero} className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-3">
                <p className="text-brand-orange font-heading text-5xl font-extrabold">
                  {paso.numero}
                </p>
                {/* Línea conectora hacia el paso siguiente (solo desktop) */}
                {i < pasos.length - 1 && (
                  <span aria-hidden="true" className="hidden lg:block flex-1 h-px bg-white/10" />
                )}
              </div>
              <h3 className="text-white font-heading text-xl font-extrabold mb-2">
                {paso.nombre}
              </h3>
              <p className="text-brand-muted font-body text-sm leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
