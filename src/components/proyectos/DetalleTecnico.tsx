import { DetalleTecnico as DetalleTecnicoType } from '@/types/proyecto'

export default function DetalleTecnico({ detalle }: { detalle: DetalleTecnicoType }) {
  const filas = [
    { label: 'Sistema',          valor: detalle.tipoSistema },
    { label: 'Marcas',           valor: detalle.marcas?.join(', ') },
    { label: 'Superficie',       valor: detalle.superficieM2 ? `${detalle.superficieM2} m²` : undefined },
    { label: 'Puntos de sonido', valor: detalle.cantidadPuntos?.toString() },
    { label: 'Notas técnicas',   valor: detalle.notas },
  ].filter(f => f.valor)

  if (filas.length === 0) return null

  return (
    <section className="bg-brand-darkgray py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-brand-orange text-2xl md:text-3xl mb-8">
          Detalle técnico
        </h2>
        <dl className="divide-y divide-brand-midgray/30">
          {filas.map(({ label, valor }) => (
            <div key={label} className="flex flex-col sm:flex-row py-4 gap-2">
              <dt className="text-brand-midgray text-sm font-body font-semibold uppercase tracking-wide w-40 shrink-0">
                {label}
              </dt>
              <dd className="text-white font-body">
                {valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
