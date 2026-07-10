import Image from 'next/image'
import Link from 'next/link'
import { brand } from '@/data/brand'
import { images } from '@/data/images'
import Reveal from '@/components/ui/Reveal'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export default function HeroHome() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-brand-black flex flex-col justify-center overflow-hidden">
      {/* Background image con zoom lento */}
      <Image
        src={images.heroes.home}
        alt="Evento en vivo con luces profesionales"
        fill
        className="object-cover animate-kenburns"
        priority
      />
      {/* Degradado: oscuro abajo (legibilidad) → más claro arriba (foto visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/90 to-black/90" />
      {/* Cortina negra: arranca cubriendo todo y se disuelve para revelar la foto */}
      <div className="absolute inset-0 bg-black opacity-0 animate-hero-unveil pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center lg:text-left px-4 py-24 md:px-8">
        <Reveal delay={100}>
          <p className="text-brand-muted font-body text-sm uppercase tracking-widest mb-6">
            {brand.tagline}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <h1 className="font-heading text-display font-extrabold text-white mb-6">
            Hacemos que las cosas{' '}
            <span className="text-brand-orange">pasen.</span>
          </h1>
        </Reveal>

        <Reveal delay={360}>
          <p className="text-brand-muted font-body text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            Producción integral de eventos, desarrollo de proyectos audiovisuales e iluminación arquitectural y escénica en Santa Fe, Argentina.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/produccion" className="btn-primary">
              Ver Producción
            </Link>
            <Link href="/instalaciones" className="btn-secondary">
              Ver Instalaciones
            </Link>
          </div>
        </Reveal>
      </div>

      <ScrollIndicator />
    </section>
  )
}
