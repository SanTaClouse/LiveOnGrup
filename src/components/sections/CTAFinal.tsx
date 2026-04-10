import Link from 'next/link'

export default function CTAFinal() {
  return (
    <section className="bg-brand-black py-24 px-4 md:px-8 text-center">
      <h2 className="font-heading text-title font-extrabold text-white mb-4">
        ¿Tenés un proyecto en mente?
      </h2>
      <p className="text-[#CCCCCC] font-body mb-8 max-w-md mx-auto">
        Contanos qué necesitás y te respondemos en menos de 24 horas.
      </p>
      <Link href="/contacto" className="btn-primary inline-block">
        Ir a Contacto
      </Link>
    </section>
  )
}
