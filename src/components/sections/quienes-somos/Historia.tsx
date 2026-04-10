import { brand } from '@/data/brand'

export default function Historia() {
  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <p className="text-[#CCCCCC] font-body text-lg leading-relaxed">
            Live On Group tiene {brand.trayectoria.aniosEmpresa} años en el
            mercado de Santa Fe, construidos sobre más de{' '}
            {brand.trayectoria.aniosOficio} años de experiencia técnica
            acumulada.
          </p>
          <p className="text-[#CCCCCC] font-body text-lg leading-relaxed">
            Arrancamos posicionándonos como empresa de sonido. Con el tiempo
            entendimos que lo que realmente hacemos es resolver: un evento
            completo o una instalación que funcione bien para siempre.
          </p>
          <p className="text-[#CCCCCC] font-body text-lg leading-relaxed">
            Hoy estamos entre las tres principales empresas del sector en la
            provincia — y seguimos creciendo con el mismo criterio de siempre:
            hacer las cosas bien, de principio a fin.
          </p>
        </div>

        {/* Número grande decorativo */}
        <p className="hidden lg:block text-brand-orange/10 font-heading text-[12rem] font-extrabold leading-none select-none">
          {brand.trayectoria.aniosOficio}+
        </p>
      </div>
    </section>
  )
}
