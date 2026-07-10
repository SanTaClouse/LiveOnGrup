const diferenciales = [
  {
    numero: '01',
    titulo: 'Más de 30 años de experiencia en el rubro.',
    descripcion:
      'Definimos la solución y la llevamos a cabo con criterio y experiencia.',
  },
  {
    numero: '02',
    titulo: 'Responsabilidad total',
    descripcion:
      'Producción o instalación: el proyecto es nuestro de principio a fin.',
  },
  {
    numero: '03',
    titulo: 'Clientes que vuelven',
    descripcion:
      'El Casino Santa Fe, el Festival de Guadalupe y muchos más confían en nosotros cada años.',
  },
] as const

export default function Diferenciales() {
  return (
    <section className="bg-brand-black section">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {diferenciales.map((d) => (
          <div key={d.numero}>
            <p className="text-brand-orange font-heading text-5xl font-extrabold mb-4">
              {d.numero}
            </p>
            <h3 className="text-white font-heading text-xl font-extrabold mb-3">
              {d.titulo}
            </h3>
            <p className="text-brand-muted font-body leading-relaxed">
              {d.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
