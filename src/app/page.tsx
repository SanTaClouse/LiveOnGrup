import HeroHome from '@/components/sections/HeroHome'
import QueSomos from '@/components/sections/QueSomos'
import LineasDeNegocio from '@/components/sections/LineasDeNegocio'
import Diferenciales from '@/components/sections/Diferenciales'
import ProyectosDestacados from '@/components/sections/ProyectosDestacados'
import ClientesStrip from '@/components/sections/ClientesStrip'
import CTAFinal from '@/components/sections/CTAFinal'
import Reveal from '@/components/ui/Reveal'
import { getProyectosDestacados } from '@/data/proyectos'

export default async function HomePage() {
  const destacados = await getProyectosDestacados()

  return (
    <>
      {/* El hero anima su propio contenido; el resto se revela al hacer scroll */}
      <HeroHome />
      <Reveal><QueSomos /></Reveal>
      <Reveal><LineasDeNegocio /></Reveal>
      <Reveal><Diferenciales /></Reveal>
      <Reveal><ProyectosDestacados proyectos={destacados} /></Reveal>
      <Reveal><ClientesStrip /></Reveal>
      <Reveal><CTAFinal /></Reveal>
    </>
  )
}
