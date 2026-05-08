import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProyectoBySlug, getSlugsForLinea } from '@/data/proyectos'
import ProyectoHero from '@/components/proyectos/ProyectoHero'
import ProyectoContenido from '@/components/proyectos/ProyectoContenido'
import ProyectoGaleria from '@/components/proyectos/ProyectoGaleria'
import ProyectoCTA from '@/components/proyectos/ProyectoCTA'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getSlugsForLinea('produccion')
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const proyecto = await getProyectoBySlug(params.slug)
  if (!proyecto) return {}

  return {
    title: `${proyecto.titulo} — Producción`,
    description: proyecto.subtitulo,
    openGraph: {
      images: [{ url: proyecto.imagenPrincipal.url }],
    },
  }
}

export default async function ProyectoProduccionPage({ params }: Props) {
  const proyecto = await getProyectoBySlug(params.slug)
  if (!proyecto || proyecto.linea !== 'produccion') notFound()

  return (
    <main>
      <ProyectoHero proyecto={proyecto} />
      <ProyectoContenido proyecto={proyecto} />
      <ProyectoGaleria imagenes={proyecto.galeria} />
      <ProyectoCTA linea={proyecto.linea} />
    </main>
  )
}
