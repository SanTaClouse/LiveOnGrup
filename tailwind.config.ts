import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6600',
          // Hover del naranja de marca (mismo matiz, más luminoso — no usar orange-500 de Tailwind)
          'orange-hover': '#FF7A1A',
          black: '#111111',
          darkgray: '#222222',
          midgray: '#4D4D4D',
          light: '#F2F2F2',
          // Jerarquía de texto sobre fondo oscuro: white → muted → faint
          muted: '#CCCCCC',
          faint: '#999999',
        }
      },
      fontFamily: {
        heading: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      }
    },
  },
  plugins: [],
}

export default config