import Link from 'next/link'
import { brand } from '@/data/brand'

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/produccion', label: 'Producción' },
  { href: '/instalaciones', label: 'Instalaciones' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-darkgray border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Logo + tagline */}
        <div>
          <p className="font-heading font-extrabold text-xl text-white mb-2">
            {brand.name}
          </p>
          <p className="text-brand-orange text-sm font-body mb-3">
            {brand.tagline}
          </p>
          <p className="text-gray-400 text-sm font-body leading-relaxed">
            {brand.description}
          </p>
        </div>

        {/* Col 2: Navegación */}
        <div>
          <p className="font-heading font-extrabold text-sm text-white uppercase tracking-widest mb-4">
            Navegación
          </p>
          <ul className="flex flex-col gap-2">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-400 text-sm font-body hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contacto + Redes */}
        <div>
          <p className="font-heading font-extrabold text-sm text-white uppercase tracking-widest mb-4">
            Contacto
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {Object.values(brand.contact).map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-400 text-sm font-body hover:text-brand-orange transition-colors"
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-heading font-extrabold text-sm text-white uppercase tracking-widest mb-3">
            Redes
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={brand.social.instagram_eventos}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm font-body hover:text-brand-orange transition-colors"
              >
                Instagram Eventos
              </a>
            </li>
            <li>
              <a
                href={brand.social.instagram_instalaciones}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm font-body hover:text-brand-orange transition-colors"
              >
                Instagram Instalaciones
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-gray-500 text-xs font-body">
          © {new Date().getFullYear()} {brand.name} · Santa Fe, Argentina
        </p>
      </div>
    </footer>
  )
}
