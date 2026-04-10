import Image from 'next/image'
import Link from 'next/link'
import { brand } from '@/data/brand'
import { images } from '@/data/images'

const linea = brand.lineas.produccion

export default function HeroProduccion() {
  return (
    <section className="relative min-h-screen bg-brand-black flex flex-col justify-center">
      <Image
        src={images.heroes.produccion}
        alt="Escenario de evento con iluminación profesional"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto w-full text-center lg:text-left">
        <p className="text-brand-orange font-body font-semibold text-sm uppercase tracking-widest mb-6">
          {linea.nombre}
        </p>

        <h1 className="font-heading text-display font-extrabold text-white mb-6">
          {linea.hero}
        </h1>

        <p className="text-[#CCCCCC] font-body text-lg mb-10 max-w-[60ch] mx-auto lg:mx-0">
          {linea.descripcion}
        </p>

        <Link href="/contacto?linea=produccion" className="btn-primary">
          {linea.cta}
        </Link>
      </div>

      <div className="relative z-10 mt-auto pb-8 flex justify-center">
        <svg
          className="w-6 h-6 text-brand-orange animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
