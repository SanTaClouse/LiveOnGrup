'use client'
import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure' // <-- IMPORTAMOS LA INTERFAZ DE DOCUMENTOS

// IMPORTANTE: Ajustamos la ruta porque estás dentro de 'src/app/studio/[[...index]]'
// y la carpeta 'sanity' asumo que la creaste en la raíz de tu proyecto (afuera de src).
import proyecto from '../../../../sanity/proyecto'

const config = defineConfig({
    projectId: '9tdc35nl',
    dataset: 'production',
    title: 'Gestor de Proyectos',
    basePath: '/studio',
    plugins: [structureTool()], // <-- ACTIVAMOS EL PANEL LATERAL DE EDICIÓN
    schema: {
        types: [proyecto],
    },
})

export default function StudioPage() {
    return <NextStudio config={config} />
}