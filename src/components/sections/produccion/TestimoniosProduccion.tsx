import ClientesBanner from '@/components/ui/ClientesBanner'

export default function TestimoniosProduccion() {
  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-title mb-12">Clientes</h2>

        <ClientesBanner variant="marquee" label="" />
      </div>
    </section>
  )
}
