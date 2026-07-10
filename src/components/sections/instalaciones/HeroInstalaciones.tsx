import Image from 'next/image'
import Link from 'next/link'
import { brand } from '@/data/brand'
import { images } from '@/data/images'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

const linea = brand.lineas.instalaciones

export default function HeroInstalaciones() {
  return (
    <section className="relative min-h-[70vh] bg-brand-black flex flex-col justify-center">
      <Image
        src={images.heroes.instalaciones}
        alt="Equipo de audio profesional en venue"
        fill
        className="object-cover object-[48%_20%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 px-4 py-24 md:px-8 max-w-4xl mx-auto w-full text-center lg:text-left">
        <p className="text-brand-orange font-body font-semibold text-sm uppercase tracking-widest mb-6">
          {linea.nombre}
        </p>

        <h1 className="font-heading text-display font-extrabold text-white mb-6">
          {linea.hero}
        </h1>

        <p className="text-brand-muted font-body text-lg mb-4 max-w-[60ch] mx-auto lg:mx-0">
          Inspeccionamos el lugar, definimos el sistema adecuado y ejecutamos la
          instalación completa. Sin intermediarios.
        </p>

        <p className="text-brand-orange font-body text-sm uppercase tracking-widest mb-10">
          Más de 30 años de criterio técnico
        </p>

        <Link href="/contacto?linea=instalaciones" className="btn-primary">
          {linea.cta}
        </Link>
      </div>

      <ScrollIndicator />
    </section>
  )
}
