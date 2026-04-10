import { brand } from '@/data/brand'

export default function TestimoniosProduccion() {
  const clientes = brand.clientes_destacados.filter(
    (c) => c.linea === 'produccion'
  )

  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-title mb-12">Lo que dicen</h2>

        {/* Logos placeholder — reemplazar con testimonios reales cuando estén */}
        <div className="flex flex-wrap gap-6 justify-center">
          {clientes.map((c) => (
            <div
              key={c.nombre}
              className="w-40 h-14 bg-brand-darkgray rounded flex items-center justify-center"
            >
              <span className="text-brand-midgray text-xs text-center px-2">
                [{c.nombre}]
              </span>
            </div>
          ))}

          {/* Logos generales también aparecen */}
          {brand.clientes_destacados
            .filter((c) => c.linea !== 'produccion')
            .slice(0, 4)
            .map((c) => (
              <div
                key={c.nombre}
                className="w-40 h-14 bg-brand-darkgray rounded flex items-center justify-center opacity-50"
              >
                <span className="text-brand-midgray text-xs text-center px-2">
                  [{c.nombre}]
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
