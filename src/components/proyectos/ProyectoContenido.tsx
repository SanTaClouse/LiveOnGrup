import { Proyecto } from '@/types/proyecto'

export default function ProyectoContenido({ proyecto }: { proyecto: Proyecto }) {
  const parrafos = proyecto.descripcion.split('\n\n').filter(Boolean)

  return (
    <section className="bg-brand-black py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Descripción */}
        <div className="md:col-span-2 space-y-4">
          {parrafos.map((p, i) => (
            <p key={i} className="text-gray-300 font-body leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Ficha rápida */}
        <aside className="space-y-4">
          <h2 className="font-heading text-brand-orange text-lg uppercase tracking-wide">
            Ficha del proyecto
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-brand-midgray text-xs font-body uppercase tracking-widest">Año</dt>
              <dd className="text-white font-body mt-0.5">{proyecto.anio}</dd>
            </div>
            <div>
              <dt className="text-brand-midgray text-xs font-body uppercase tracking-widest">Ubicación</dt>
              <dd className="text-white font-body mt-0.5">{proyecto.ubicacion}</dd>
            </div>
            <div>
              <dt className="text-brand-midgray text-xs font-body uppercase tracking-widest">Categoría</dt>
              <dd className="text-white font-body mt-0.5 capitalize">{proyecto.categoria}</dd>
            </div>
            <div>
              <dt className="text-brand-midgray text-xs font-body uppercase tracking-widest">Línea</dt>
              <dd className="text-white font-body mt-0.5 capitalize">{proyecto.linea}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
