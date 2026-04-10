import { brand } from '@/data/brand'

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${brand.url}#organization`,
    name: brand.name,
    description: brand.description,
    url: brand.url,
    telephone: '',
    email: brand.contact.info,
    image: `${brand.url}/og-image.jpg`,
    logo: `${brand.url}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Fe',
      addressRegion: 'Santa Fe',
      addressCountry: 'AR',
    },
    areaServed: {
      '@type': 'State',
      name: 'Santa Fe, Argentina',
    },
    sameAs: [
      brand.social.instagram_eventos,
      brand.social.instagram_instalaciones,
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Producción de eventos llave en mano',
          description: brand.lineas.produccion.descripcion,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalaciones de audio profesional',
          description: brand.lineas.instalaciones.descripcion,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
