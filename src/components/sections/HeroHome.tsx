import Image from 'next/image'
import Link from 'next/link'
import { brand } from '@/data/brand'
import { images } from '@/data/images'

export default function HeroHome() {
  return (
    <section className="relative min-h-screen bg-brand-black flex flex-col justify-center">
      {/* Background image */}
      <Image
        src={images.heroes.home}
        alt="Evento en vivo con luces profesionales"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center lg:text-left px-4 md:px-8">
        <p className="text-gray-300 font-body text-sm uppercase tracking-widest mb-6">
          {brand.tagline}
        </p>

        <h1 className="font-heading text-display font-extrabold text-white mb-6">
          Hacemos que las cosas{' '}
          <span className="text-brand-orange">pasen.</span>
        </h1>

        <p className="text-[#CCCCCC] font-body text-lg mb-10 max-w-xl mx-auto lg:mx-0">
          Producción de eventos y instalaciones de audio en Santa Fe, Argentina.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="/produccion" className="btn-primary">
            Ver Producción
          </Link>
          <Link href="/instalaciones" className="btn-secondary">
            Ver Instalaciones
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
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
