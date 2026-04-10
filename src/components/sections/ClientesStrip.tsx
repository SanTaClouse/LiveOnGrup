import ClientesBanner from '@/components/ui/ClientesBanner'

export default function ClientesStrip() {
  return (
    <section className="bg-brand-darkgray py-14 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ClientesBanner variant="marquee" />
      </div>
    </section>
  )
}
