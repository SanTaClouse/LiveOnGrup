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
          black: '#111111',
          darkgray: '#222222',
          midgray: '#4D4D4D',
          steel: '#1C3A4A',
          light: '#F2F2F2',
        }
      },
      fontFamily: {
        heading: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1' }],
        'title': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
      }
    },
  },
  plugins: [],
}

export default config