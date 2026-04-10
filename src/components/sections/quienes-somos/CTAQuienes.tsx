import Link from 'next/link'

export default function CTAQuienes() {
  return (
    <section className="bg-brand-black py-24 px-4 md:px-8 text-center">
      <h2 className="font-heading text-title font-extrabold text-white mb-8">
        ¿Querés trabajar con nosotros?
      </h2>
      <Link href="/contacto" className="btn-primary inline-block">
        Contacto
      </Link>
    </section>
  )
}
