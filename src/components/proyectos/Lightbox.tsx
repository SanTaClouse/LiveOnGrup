'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ImagenProyecto } from '@/types/proyecto'

interface Props {
  imagenes: ImagenProyecto[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ imagenes, initialIndex, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = useCallback(() =>
    setCurrent(i => (i === 0 ? imagenes.length - 1 : i - 1)), [imagenes.length])

  const next = useCallback(() =>
    setCurrent(i => (i === imagenes.length - 1 ? 0 : i + 1)), [imagenes.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const imagen = imagenes[current]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes"
    >
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={imagen.url}
          alt={imagen.alt}
          width={imagen.width}
          height={imagen.height}
          className="object-contain max-h-[85vh] w-full"
          priority
        />
        <p className="text-gray-400 text-sm text-center mt-3 font-body">
          {imagen.alt}
        </p>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors"
        aria-label="Cerrar galería"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {imagenes.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-orange transition-colors"
            aria-label="Imagen anterior"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-orange transition-colors"
            aria-label="Imagen siguiente"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm font-body">
            {current + 1} / {imagenes.length}
          </span>
        </>
      )}
    </div>
  )
}
