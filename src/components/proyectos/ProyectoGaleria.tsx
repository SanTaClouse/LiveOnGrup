'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ImagenProyecto } from '@/types/proyecto'
import Lightbox from './Lightbox'

export default function ProyectoGaleria({ imagenes }: { imagenes: ImagenProyecto[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (imagenes.length === 0) return null

  return (
    <section className="bg-brand-black py-16 px-4 md:px-8">
      <h2 className="font-heading text-brand-orange text-2xl md:text-3xl mb-8">
        Galería
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {imagenes.map((imagen, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden bg-brand-darkgray focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange"
            aria-label={`Ver imagen: ${imagen.alt}`}
          >
            <Image
              src={imagen.url}
              alt={imagen.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          imagenes={imagenes}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
