const valores = [
  {
    titulo: 'Criterio técnico sin intermediarios',
    descripcion:
      'No mandamos presupuestos para que otros ejecuten. Diagnosticamos, definimos la solución y la llevamos a cabo nosotros mismos.',
  },
  {
    titulo: 'Responsabilidad total sobre el resultado',
    descripcion:
      'El proyecto es nuestro de principio a fin. No hay "el otro proveedor" al que culpar.',
  },
  {
    titulo: 'Trayectoria que respalda cada decisión',
    descripcion:
      '30+ años de oficio detrás de cada propuesta técnica. La experiencia no se improvisa.',
  },
  {
    titulo: 'Confianza ganada, no declarada',
    descripcion:
      'Los clientes vuelven porque las cosas salieron bien. El Casino Santa Fe lleva años con nosotros — eso no se compra.',
  },
  {
    titulo: 'Presencia completa',
    descripcion:
      'Estamos en el evento o en la obra, de principio a fin. No delegamos la ejecución a terceros.',
  },
] as const

export default function Valores() {
  return (
    <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-title mb-12">Nuestros valores</h2>

        <div className="space-y-6">
          {valores.map((v) => (
            <div
              key={v.titulo}
              className="border-l-4 border-brand-orange bg-brand-black p-6 rounded-sm"
            >
              <h3 className="text-white font-body font-bold text-lg mb-2">
                {v.titulo}
              </h3>
              <p className="text-[#CCCCCC] font-body leading-relaxed">
                {v.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
