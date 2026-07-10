/**
 * Flecha animada al pie de los heroes que invita a scrollear.
 * Compartida por todos los heroes para que el gesto sea idéntico en todo el sitio.
 */
export default function ScrollIndicator() {
  return (
    <div className="relative z-10 mt-auto pb-8 flex justify-center">
      <svg
        className="w-6 h-6 text-brand-orange animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}
