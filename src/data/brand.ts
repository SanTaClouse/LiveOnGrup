// Importante: este archivo es la única fuente de copy de marca. Todos los componentes que muestren nombre, tagline, mails, slugs, hero copy o CTA de cada línea deben importar de acá — nunca hardcodear.

export const brand = {
    name: 'Live On Group',
    tagline: 'Producción · Técnica · Eventos',
    description: 'Producción de eventos llave en mano e instalaciones de audio profesional en Santa Fe, Argentina.',
    url: 'https://liveongroup.com.ar',
    contact: {
        ventas: 'ventas@liveongroup.com',
        info: 'info@liveongroup.com',
        tecnica: 'tecnica@liveongroup.com',
        contenido: 'contenido@liveongroup.com',
    },
    social: {
        instagram_eventos: 'https://instagram.com/liveongroup.eventos',
        instagram_instalaciones: 'https://instagram.com/liveongroup.instalaciones',
    },
    trayectoria: {
        aniosEmpresa: 8,
        aniosOficio: 30,
    },
    lineas: {
        produccion: {
            nombre: 'Producción y Rental',
            slug: '/produccion',
            hero: 'Tu evento, nuestro problema.',
            descripcion: 'Nos encargamos de todo: técnica, catering, seguridad, artistas y contenido. Vos aparecés a disfrutarlo.',
            cta: 'Cotizá tu evento',
            color: '#FF6600',
        },
        instalaciones: {
            nombre: 'Instalaciones y Venta',
            slug: '/instalaciones',
            hero: 'El sonido correcto para cada espacio.',
            descripcion: 'Inspeccionamos, definimos el sistema y ejecutamos la instalación completa. Sin intermediarios.',
            cta: 'Consultá tu instalación',
            color: '#1C3A4A',
        },
    },
    clientes_destacados: [
        // Los clientes suelen ser clientes en general y lo vamos a incluir en el home y quiza en ambas paginas indistintamente
        // La idea sería NO DISCRIMINAR POR TIPO DE CLIENTE
        // Encontrar una forma de mostrar los clientes, crear un banner que se pueda reutilizar
        // El banner deberá extraer los clientes desde un array que tendrá (nombre,url,logoimg)
        { nombre: 'Casino Santa Fe', linea: 'instalaciones' },
        { nombre: 'Festival de Guadalupe', linea: 'produccion' },
        { nombre: 'Sindicato CUEC', linea: 'instalaciones' },
        { nombre: 'Sindicato ASOEM', linea: 'instalaciones' },
        { nombre: 'RAEX', linea: 'instalaciones' },
        { nombre: 'REMAX FARO', linea: 'instalaciones' },
        { nombre: 'BAHCO', linea: 'instalaciones' },
        { nombre: 'Universidad Catolica', linea: 'instalaciones' },
        { nombre: 'Colegio adoratrices', linea: 'instalaciones' },
        { nombre: 'Universidad Catolica', linea: 'instalaciones' },
        { nombre: 'Restaurante Sumatra', linea: 'instalaciones' },
        { nombre: 'Restaurante Don García', linea: 'instalaciones' },
        { nombre: 'Restaurante La rural', linea: 'instalaciones' }
        // sindicato cuec, sindicato asoem, eli ruscciti, remax faro, bhaco, colegio adoratrices, univ catolica
    ],
} as const