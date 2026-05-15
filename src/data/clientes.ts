// Fuente única de clientes. Sin discriminación por línea de negocio.
// logoUrl: ruta relativa a /public/images/logos/ — dejar vacío ('') hasta tener el archivo.

export interface Cliente {
  nombre: string
  /** URL del sitio del cliente — para accesibilidad (alt text). Dejar '' si no tiene. */
  url: string
  /** Ruta al logo (Cloudinary o /public). Dejar '' hasta tener el archivo. */
  logoUrl: string
  /** Clientes destacados aparecen más grandes en el banner */
  featured?: boolean
}

export const clientes: Cliente[] = [
  { nombre: 'Casino Santa Fe', url: 'https://casinosantafe.com.ar/', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775835383/CasinoSantaFe_kmflt7.png', featured: true },
  { nombre: 'Remax Faro', url: 'https://www.remax.com.ar/faro', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775835383/remax_fongbh.svg', featured: true },
  { nombre: 'Sindicato CUEC', url: 'https://cuecsantafe.com.ar/', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775835383/CUECsinfondo_niri3f.png', featured: true },
  { nombre: 'Festival de Guadalupe', url: 'https://www.instagram.com/festivaldeguadalupe/?hl=es-la', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778856598/04934f28-e8ad-4c31-a4a8-34c1fe46e635.png' },
  { nombre: 'Sindicato ASOEM', url: 'https://asoem.org.ar/', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855402/8156a22a-b92d-41b1-bb44-9d1b2f946a7f.png' },
  { nombre: 'RAEX', url: 'https://www.raexsteel.com/es-es', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855345/6668326a-cf77-4db1-b940-f233ffb1925b.png' },
  { nombre: 'BAHCO', url: 'https://www.bahco.com/ar_es/', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855477/727dbf21-4f88-49f7-ab4a-7eb6a74ab6ad.png' },
  { nombre: 'Universidad Católica', url: 'https://www.instagram.com/ucsfoficial/?hl=es-la', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855601/dba591e8-70a5-4f91-ba82-09751e431b84.png' },
  { nombre: 'Colegio Adoratrices', url: 'https://sanjoseadoratricessf.edu.ar/', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855630/a4ad52c2-38a0-49ba-b275-069c926056a6.png' },
  { nombre: 'Restaurante Sumatra', url: 'https://www.instagram.com/sumatra.resto/?hl=es', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855676/d531a8b6-50a8-45ca-a4e6-ea40d382085e.png' },
  { nombre: 'Restaurante Don García', url: 'https://www.instagram.com/dongarcia.sf/?hl=es', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855736/f2f6e6df-7494-41a7-a117-7a29e9e9a718.png' },
  { nombre: 'Restaurante La Rural', url: 'https://www.instagram.com/laruralrestaurant/', logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1778855769/27d8069f-cb26-46a3-acc5-ab9ade72490d.png' },
]
