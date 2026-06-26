import Image from 'next/image'
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
          <Image
            src="/images/logos/LiveOnGroup-blanco.svg"
            alt={brand.name}
            width={200}
            height={67}
            className="h-14 w-auto mb-4"
          />
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
            className="block text-gray-400 text-sm font-body hover:text-brand-orange transition-colors mb-2"
          >
            {brand.contact.oficial}
          </a>
          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 text-sm font-body hover:text-brand-orange transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.044zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            {brand.contact.whatsappDisplay}
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
