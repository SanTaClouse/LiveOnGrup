import Link from 'next/link'

export default function CTAInstalaciones() {
  return (
    <section className="bg-brand-steel py-24 px-4 md:px-8 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
        ¿Tenés un espacio que necesita sonido?
      </h2>
      <p className="text-white/90 font-body mb-8 max-w-md mx-auto">
        Contanos el tipo de espacio y te coordinamos una visita sin costo.
      </p>
      <Link href="/contacto?linea=instalaciones" className="btn-primary inline-block">
        Pedí una visita técnica
      </Link>
    </section>
  )
}
