import Link from 'next/link'
import { brand } from '@/data/brand'

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/produccion', label: 'Producción' },
  { href: '/instalaciones', label: 'Instalaciones' },
  { href: '/proyectos', label: 'Proyectos' },
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
          <a
            href={`mailto:${brand.contact.oficial}`}
            className="block text-gray-400 text-sm font-body hover:text-brand-orange transition-colors mb-6"
          >
            {brand.contact.oficial}
          </a>

          <p className="font-heading font-extrabold text-sm text-white uppercase tracking-widest mb-3">
            Redes
          </p>
          <a
            href={brand.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 text-sm font-body hover:text-brand-orange transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            @liveongroup
          </a>
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
