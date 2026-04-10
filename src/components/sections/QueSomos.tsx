export default function QueSomos() {
  return (
    <section className="bg-brand-darkgray py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[700px] mx-auto text-center">
        {/* Accent bar centrada */}
        <div className="flex justify-center mb-6">
          <span className="accent-bar" />
        </div>

        <p className="text-[#CCCCCC] font-body text-lg md:text-xl leading-relaxed mb-6">
          No somos una empresa de sonido. Somos la productora que organiza tu
          evento de cero — y la empresa que diseña e instala el sistema de audio
          que tu espacio necesita.
        </p>

        <p className="text-[#777777] font-body text-sm uppercase tracking-widest">
          Más de 30 años de criterio técnico en Santa Fe.
        </p>
      </div>
    </section>
  )
}
