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
  { nombre: 'Casino Santa Fe',    url: 'https://casinosantafe.com.ar/',                                     logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775835383/CasinoSantaFe_kmflt7.png', featured: true },
  { nombre: 'Remax Faro',         url: 'https://www.remax.com.ar/faro',                                     logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775835383/remax_fongbh.svg',          featured: true },
  { nombre: 'Sindicato CUEC',     url: 'https://cuecsantafe.com.ar/',                                       logoUrl: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775835383/CUECsinfondo_niri3f.png',   featured: true },
  { nombre: 'Festival de Guadalupe', url: 'https://www.instagram.com/festivaldeguadalupe/?hl=es-la', logoUrl: '' },
  { nombre: 'Sindicato ASOEM', url: '', logoUrl: '' },
  { nombre: 'RAEX', url: '', logoUrl: '' },
  { nombre: 'BAHCO', url: '', logoUrl: '' },
  { nombre: 'Universidad Católica', url: '', logoUrl: '' },
  { nombre: 'Colegio Adoratrices', url: '', logoUrl: '' },
  { nombre: 'Restaurante Sumatra', url: '', logoUrl: '' },
  { nombre: 'Restaurante Don García', url: '', logoUrl: '' },
  { nombre: 'Restaurante La Rural', url: '', logoUrl: '' },
]
