// Fuente de datos de proyectos. Cuando se conecte un backend, reemplazar el import
// con un fetch a la API — tipos, componentes y rutas no cambian.

export type LineaDeNegocio = 'produccion' | 'instalaciones'

export interface Proyecto {
  slug: string
  linea: LineaDeNegocio
  titulo: string
  anio: number
  publicado: boolean
}

// Por ahora vacío — se completará en el prompt 09-proyectos-data.md
export const proyectos: Proyecto[] = []
