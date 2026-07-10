// Importante: este archivo es la única fuente de copy de marca. Todos los componentes que muestren nombre, tagline, mails, slugs, hero copy o CTA de cada línea deben importar de acá — nunca hardcodear.

export const brand = {
    name: 'Live On Group',
    tagline: 'Producción · Técnica · Eventos',
    description: 'Producción de eventos llave en mano e instalaciones de audio profesional en Santa Fe, Argentina.',
    url: 'https://liveongroup.com.ar',
    contact: {
        // Correos profesionales por área — ventas es además el correo oficial/público de la empresa
        ventas: 'ventas@liveongroup.com.ar',
        tecnica: 'tecnica@liveongroup.com.ar',
        // Solo dígitos para el link wa.me (país 54 + 9 de celular + área + número)
        whatsapp: '5493425328222',
        whatsappDisplay: '+54 9 3425 32-8222',
    },
    social: {
        instagram: 'https://www.instagram.com/liveongroup/',
    },
    trayectoria: {
        aniosEmpresa: 8,
        aniosOficio: 30,
    },
    lineas: {
        produccion: {
            nombre: 'Producción de eventos',
            slug: '/produccion',
            hero: 'Tu evento, nuestro desafío.',
            descripcion: 'Nos encargamos de todo: técnica, catering, seguridad, artistas y contenido.',
            cta: 'Cotizá tu evento',
            color: '#FF6600',
        },
        instalaciones: {
            nombre: 'Instalaciones y Venta',
            slug: '/instalaciones',
            hero: 'El sonido correcto para cada espacio.',
            descripcion: 'Inspeccionamos el lugar, definimos el sistema adecuado y ejecutamos la instalación completa. Sin intermediarios.',
            cta: 'Consultá tu instalación',
            color: '#1C3A4A',
        },
    },
    // Los clientes viven en una única fuente reutilizable: src/data/clientes.ts
    // (con nombre, url y logoUrl). Se muestran sin discriminar por línea de negocio
    // mediante el componente <ClientesBanner />.
} as const