import ClientesBanner from '@/components/ui/ClientesBanner'

export default function BannerClientes() {
  return (
    <section className="bg-brand-darkgray py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 font-body text-sm uppercase tracking-widest text-center mb-10">
          Empresas que confían en nuestro criterio
        </p>

        <ClientesBanner variant="marquee" label="" />
      </div>
    </section>
  )
}
