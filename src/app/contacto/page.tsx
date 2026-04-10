import { Suspense } from 'react'
import type { Metadata } from 'next'
import ContactoForm from '@/components/sections/ContactoForm'
import { brand } from '@/data/brand'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contactate con Live On Group para producción de eventos o instalaciones de audio en Santa Fe, Argentina.',
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-24 md:py-36 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-orange font-body font-semibold text-sm uppercase tracking-widest mb-6">
            Contacto
          </p>
          <h1 className="font-heading text-display font-extrabold text-white mb-4">
            Contanos qué necesitás.
          </h1>
          <p className="text-[#CCCCCC] font-body text-lg">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="section">
        <Suspense
          fallback={
            <div className="text-gray-400 text-center py-12">
              Cargando formulario…
            </div>
          }
        >
          <ContactoForm />
        </Suspense>
      </section>

      {/* Datos directos */}
      <section className="bg-brand-darkgray py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Producción */}
          <div>
            <p className="text-brand-orange font-body text-sm uppercase tracking-widest mb-4">
              Producción
            </p>
            <a
              href={`mailto:${brand.contact.ventas}`}
              className="block text-gray-300 font-body text-sm hover:text-white transition-colors mb-2"
            >
              {brand.contact.ventas}
            </a>
            <a
              href={brand.social.instagram_eventos}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 font-body text-sm hover:text-white transition-colors"
            >
              @liveongroup.eventos
            </a>
          </div>

          {/* Instalaciones */}
          <div>
            <p className="text-brand-orange font-body text-sm uppercase tracking-widest mb-4">
              Instalaciones
            </p>
            <a
              href={`mailto:${brand.contact.tecnica}`}
              className="block text-gray-300 font-body text-sm hover:text-white transition-colors mb-2"
            >
              {brand.contact.tecnica}
            </a>
            <a
              href={brand.social.instagram_instalaciones}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 font-body text-sm hover:text-white transition-colors"
            >
              @liveongroup.instalaciones
            </a>
          </div>

          {/* General */}
          <div>
            <p className="text-brand-orange font-body text-sm uppercase tracking-widest mb-4">
              Info general
            </p>
            <a
              href={`mailto:${brand.contact.info}`}
              className="block text-gray-300 font-body text-sm hover:text-white transition-colors"
            >
              {brand.contact.info}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
