import { brand } from '@/data/brand'

export default function GridLogos() {
  const produccion = brand.clientes_destacados.filter(
    (c) => c.linea === 'produccion'
  )
  const instalaciones = brand.clientes_destacados.filter(
    (c) => c.linea === 'instalaciones'
  )

  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Producción */}
        <div>
          <p className="text-[#777777] font-body text-sm uppercase tracking-widest mb-8 text-center">
            Producción de Eventos
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {produccion.map((c) => (
              <div
                key={c.nombre}
                className="w-36 h-14 bg-brand-darkgray rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
              >
                <span className="text-brand-midgray text-xs text-center px-2">
                  [{c.nombre}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instalaciones */}
        <div>
          <p className="text-[#777777] font-body text-sm uppercase tracking-widest mb-8 text-center">
            Instalaciones de Audio
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {instalaciones.map((c) => (
              <div
                key={c.nombre}
                className="w-36 h-14 bg-brand-darkgray rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
              >
                <span className="text-brand-midgray text-xs text-center px-2">
                  [{c.nombre}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
