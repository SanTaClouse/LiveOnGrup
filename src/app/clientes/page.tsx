import type { Metadata } from 'next'
import HeroClientes from '@/components/sections/clientes/HeroClientes'
import CasosDestacados from '@/components/sections/clientes/CasosDestacados'
import GridLogos from '@/components/sections/clientes/GridLogos'
import CTAClientes from '@/components/sections/clientes/CTAClientes'

export const metadata: Metadata = {
  title: 'Clientes',
  description:
    'Empresas y eventos que confían en Live On Group para su producción e instalaciones de audio en Santa Fe, Argentina.',
}

export default function ClientesPage() {
  return (
    <>
      <HeroClientes />
      <CasosDestacados />
      <GridLogos />
      <CTAClientes />
    </>
  )
}
