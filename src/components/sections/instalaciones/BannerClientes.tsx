import { brand } from '@/data/brand'

export default function BannerClientes() {
  const clientes = brand.clientes_destacados.filter(
    (c) => c.linea === 'instalaciones'
  )

  // Casino Santa Fe primero (destacado)
  const sorted = [...clientes].sort((a, b) =>
    a.nombre === 'Casino Santa Fe' ? -1 : b.nombre === 'Casino Santa Fe' ? 1 : 0
  )

  return (
    <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#777777] font-body text-sm uppercase tracking-widest text-center mb-10">
          Empresas que confían en nuestro criterio
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {sorted.map((cliente, i) => (
            <div
              key={cliente.nombre}
              className={`rounded flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200 ${
                i === 0
                  ? 'w-44 h-16 bg-brand-midgray/40'
                  : 'w-32 h-12 bg-brand-midgray/30'
              }`}
            >
              <span className="text-brand-midgray text-xs text-center px-2">
                [{cliente.nombre}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
