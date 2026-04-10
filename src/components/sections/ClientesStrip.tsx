import { brand } from '@/data/brand'

export default function ClientesStrip() {
  return (
    <section className="bg-brand-darkgray py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#777777] font-body text-sm uppercase tracking-widest text-center mb-10">
          Confían en nosotros
        </p>

        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6">
          {brand.clientes_destacados.map((cliente) => (
            <div
              key={cliente.nombre}
              className="w-32 h-12 bg-brand-midgray/30 rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            >
              <span className="text-brand-midgray text-xs text-center px-1">
                [{cliente.nombre}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
