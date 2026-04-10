import Link from 'next/link'

export default function CTAProduccion() {
  return (
    <section className="bg-brand-orange py-24 px-4 md:px-8 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
        ¿Tenés un evento que organizar?
      </h2>
      <p className="text-white/90 font-body mb-8 max-w-md mx-auto">
        Contanos la fecha y el tipo de evento — te respondemos en menos de 24 horas.
      </p>
      <Link
        href="/contacto?linea=produccion"
        className="inline-block border-2 border-white text-white font-body font-bold text-base px-6 py-3 rounded-sm hover:bg-white hover:text-brand-orange transition-all duration-200"
      >
        Ir a Contacto
      </Link>
    </section>
  )
}
