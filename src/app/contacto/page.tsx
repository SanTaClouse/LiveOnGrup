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
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-orange font-body text-sm uppercase tracking-widest mb-6">
            Escribinos directamente
          </p>
          <a
            href={`mailto:${brand.contact.oficial}`}
            className="block text-white font-heading text-xl md:text-2xl hover:text-brand-orange transition-colors mb-6"
          >
            {brand.contact.oficial}
          </a>
          <a
            href={brand.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 font-body text-sm hover:text-brand-orange transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            @liveongroup
          </a>
        </div>
      </section>
    </>
  )
}
