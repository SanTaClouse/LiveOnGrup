export default function QueSomos() {
  return (
    <section className="bg-brand-darkgray py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[700px] mx-auto text-center">
        {/* Accent bar centrada */}
        <div className="flex justify-center mb-6">
          <span className="accent-bar" />
        </div>

        <p className="text-brand-muted font-body text-lg md:text-xl leading-relaxed mb-6">
          Somos una empresa productora de eventos con amplia experiencia en el sector.
        </p>

        <p className="text-brand-faint font-body text-sm uppercase tracking-widest">
          Desarrollamos tu proyecto y acompañamos en cada etapa del mismo para lograr éxito y calidad en cada proceso.
        </p>
      </div>
    </section>
  )
}
