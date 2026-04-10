'use client'

import { useForm, ValidationError } from '@formspree/react'
import { useSearchParams } from 'next/navigation'
import { brand } from '@/data/brand'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''

function FallbackMail() {
  return (
    <div className="text-center py-12 border border-brand-midgray/30 rounded-sm p-6">
      <p className="text-white font-heading text-xl mb-2">
        El formulario está temporalmente fuera de servicio.
      </p>
      <p className="text-gray-400 mb-4">
        Escribinos directamente y te respondemos en el día:
      </p>
      <a
        href={`mailto:${brand.contact.info}`}
        className="btn-primary inline-block"
      >
        {brand.contact.info}
      </a>
    </div>
  )
}

function FormWithFormspree({ defaultTipo, linea }: { defaultTipo: string; linea: string | null }) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  if (state.succeeded) {
    return (
      <div className="text-center py-16">
        <p className="text-brand-orange font-heading text-2xl">
          ¡Mensaje recibido!
        </p>
        <p className="text-gray-400 mt-2">
          Te respondemos en menos de 24 horas hábiles.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {linea && <input type="hidden" name="linea" value={linea} />}

      <div>
        <label htmlFor="nombre" className="block text-white font-body text-sm mb-2">
          Nombre completo *
        </label>
        <input id="nombre" type="text" name="nombre" required className="input-brand" placeholder="Tu nombre" />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="email" className="block text-white font-body text-sm mb-2">
          Email *
        </label>
        <input id="email" type="email" name="email" required className="input-brand" placeholder="tu@email.com" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-white font-body text-sm mb-2">
          Teléfono
        </label>
        <input id="telefono" type="tel" name="telefono" className="input-brand" placeholder="+54 342 ..." />
      </div>

      <div>
        <label htmlFor="tipo" className="block text-white font-body text-sm mb-2">
          Tipo de consulta *
        </label>
        <select id="tipo" name="tipo" required defaultValue={defaultTipo} className="select-brand">
          <option value="" disabled>Seleccioná una opción</option>
          <option value="Producción de eventos">Producción de eventos</option>
          <option value="Instalación de audio">Instalación de audio</option>
          <option value="Consulta general">Consulta general</option>
        </select>
        <ValidationError prefix="Tipo" field="tipo" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-white font-body text-sm mb-2">
          Mensaje *
        </label>
        <textarea id="mensaje" name="mensaje" required minLength={20} rows={5} className="input-brand resize-y" placeholder="Contanos sobre tu proyecto o consulta..." />
        <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="origen" className="block text-white font-body text-sm mb-2">
          ¿Cómo nos encontraste?
        </label>
        <select id="origen" name="origen" defaultValue="" className="select-brand">
          <option value="" disabled>Seleccioná una opción</option>
          <option value="Recomendación">Recomendación</option>
          <option value="Instagram">Instagram</option>
          <option value="Google">Google</option>
          <option value="Ya los conocía">Ya los conocía</option>
        </select>
      </div>

      <button type="submit" disabled={state.submitting} className="btn-primary w-full">
        {state.submitting ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  )
}

export default function ContactoForm() {
  const searchParams = useSearchParams()
  const linea = searchParams.get('linea')

  const defaultTipo =
    linea === 'produccion'
      ? 'Producción de eventos'
      : linea === 'instalaciones'
        ? 'Instalación de audio'
        : ''

  if (!FORMSPREE_ID) {
    return <FallbackMail />
  }

  return <FormWithFormspree defaultTipo={defaultTipo} linea={linea} />
}
