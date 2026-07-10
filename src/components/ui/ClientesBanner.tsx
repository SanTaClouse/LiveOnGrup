import Image from 'next/image'
import { clientes, Cliente } from '@/data/clientes'

interface Props {
  /** 'marquee' → scroll infinito automático | 'grid' → grilla estática */
  variant?: 'marquee' | 'grid'
  /** Texto sobre el banner. Default: 'Confían en nosotros'. Pasar '' para ocultarlo (cuando la sección ya tiene su propio título). */
  label?: string
}

function ClienteItem({ cliente }: { cliente: Cliente }) {
  const imgClass = [
    'object-contain transition-all duration-300 ease-out',
    cliente.featured ? 'h-12' : 'h-8',
    'grayscale opacity-60 blur-[0.2px]',
    'group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:blur-0',
    'group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]',
  ].join(' ')

  const inner = cliente.logoUrl ? (
    <Image
      src={cliente.logoUrl}
      alt={cliente.nombre}
      width={cliente.featured ? 140 : 100}
      height={cliente.featured ? 48 : 32}
      className={imgClass}
    />
  ) : (
    <span className="font-body text-xs font-semibold tracking-wide uppercase text-center leading-tight px-2 text-white/40 group-hover:text-white/90 transition-colors duration-300">
      {cliente.nombre}
    </span>
  )

  return (
    <div className="group flex-shrink-0 flex items-center justify-center px-6 py-3 transition-all duration-300 ease-out hover:-translate-y-1">
      {inner}
    </div>
  )
}

// ─── MARQUEE ─────────────────────────────────────────────────────────────────

function MarqueeBanner({ label }: { label: string }) {
  const items = [...clientes, ...clientes]

  return (
    <div>
      {label && (
        <p className="text-brand-faint font-body text-sm font-medium tracking-wide text-center mb-8">
          {label}
        </p>
      )}

      {/* Mobile: scroll horizontal nativo (fluido, sin animación que trabe) */}
      <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex w-max">
          {clientes.map((cliente) => (
            <div key={cliente.nombre} className="snap-start">
              <ClienteItem cliente={cliente} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: marquee automático */}
      <div
        className="hidden md:block relative overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <div className="flex animate-marquee will-change-transform">
          {items.map((cliente, i) => (
            <ClienteItem key={`${cliente.nombre}-${i}`} cliente={cliente} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── GRID ─────────────────────────────────────────────────────────────────────

function GridBanner({ label }: { label: string }) {
  return (
    <div>
      {label && (
        <p className="text-brand-faint font-body text-sm font-medium tracking-wide text-center mb-10">
          {label}
        </p>
      )}
      <div className="flex flex-wrap justify-center">
        {clientes.map((cliente) => (
          <ClienteItem key={cliente.nombre} cliente={cliente} />
        ))}
      </div>
    </div>
  )
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export default function ClientesBanner({
  variant = 'marquee',
  label = 'Confían en nosotros',
}: Props) {
  return variant === 'marquee'
    ? <MarqueeBanner label={label} />
    : <GridBanner label={label} />
}
