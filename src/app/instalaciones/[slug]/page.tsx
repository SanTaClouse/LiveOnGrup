import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProyectoBySlug, getSlugsForLinea } from '@/data/proyectos'
import ProyectoHero from '@/components/proyectos/ProyectoHero'
import ProyectoContenido from '@/components/proyectos/ProyectoContenido'
import ProyectoGaleria from '@/components/proyectos/ProyectoGaleria'
import DetalleTecnico from '@/components/proyectos/DetalleTecnico'
import ProyectoCTA from '@/components/proyectos/ProyectoCTA'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getSlugsForLinea('instalaciones')
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const proyecto = await getProyectoBySlug(params.slug)
  if (!proyecto) return {}

  return {
    title: `${proyecto.titulo} — Instalaciones`,
    description: proyecto.subtitulo,
    openGraph: {
      images: [{ url: proyecto.imagenPrincipal.url }],
    },
  }
}

export default async function ProyectoInstalacionesPage({ params }: Props) {
  const proyecto = await getProyectoBySlug(params.slug)
  if (!proyecto || proyecto.linea !== 'instalaciones') notFound()

  return (
    <main>
      <ProyectoHero proyecto={proyecto} />
      <ProyectoContenido proyecto={proyecto} />
      <ProyectoGaleria imagenes={proyecto.galeria} />
      {proyecto.detalleTecnico && (
        <DetalleTecnico detalle={proyecto.detalleTecnico} />
      )}
      <ProyectoCTA linea={proyecto.linea} />
    </main>
  )
}
