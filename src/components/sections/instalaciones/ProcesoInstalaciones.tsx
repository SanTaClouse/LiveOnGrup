const pasos = [
  {
    numero: '01',
    nombre: 'Inspección in situ',
    descripcion:
      'Vamos al espacio, medimos y evaluamos las condiciones acústicas y de instalación. No mandamos presupuestos para que otros ejecuten — el diagnóstico determina la solución.',
  },
  {
    numero: '02',
    nombre: 'Diagnóstico y propuesta',
    descripcion:
      'Definimos el sistema adecuado para ese espacio específico y presentamos la propuesta completa.',
  },
  {
    numero: '03',
    nombre: 'Ejecución',
    descripcion:
      'Instalamos el sistema completo. Cableado, equipamiento, configuración y pruebas.',
  },
  {
    numero: '04',
    nombre: 'Entrega y soporte',
    descripcion:
      'Capacitamos en el uso del sistema y quedamos disponibles para soporte técnico.',
  },
] as const

export default function ProcesoInstalaciones() {
  return (
    <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-display font-extrabold text-white mb-16">
          Del diagnóstico a la instalación
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {pasos.map((paso, i) => (
            <div key={paso.numero} className="relative flex flex-col">
              {/* Línea conectora desktop */}
              {i < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full border-t-2 border-dashed border-brand-orange/40 z-0" />
              )}

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
