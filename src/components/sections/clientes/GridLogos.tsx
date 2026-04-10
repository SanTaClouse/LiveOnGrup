import ClientesBanner from '@/components/ui/ClientesBanner'

export default function GridLogos() {
  return (
    <section className="bg-brand-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ClientesBanner variant="grid" label="Empresas que confían en nosotros" />
      </div>
    </section>
  )
}
