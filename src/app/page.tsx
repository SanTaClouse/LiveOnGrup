import HeroHome from '@/components/sections/HeroHome'
import QueSomos from '@/components/sections/QueSomos'
import LineasDeNegocio from '@/components/sections/LineasDeNegocio'
import Diferenciales from '@/components/sections/Diferenciales'
import ClientesStrip from '@/components/sections/ClientesStrip'
import CTAFinal from '@/components/sections/CTAFinal'

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <QueSomos />
      <LineasDeNegocio />
      <Diferenciales />
      <ClientesStrip />
      <CTAFinal />
    </>
  )
}
