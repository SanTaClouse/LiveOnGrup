'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { brand } from '@/data/brand'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/produccion', label: 'Producción' },
  { href: '/instalaciones', label: 'Instalaciones' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${brand.name} — inicio`}
          className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        >
          <Image
            src="/images/logos/LiveOnGroup-blanco.svg"
            alt={brand.name}
            width={180}
            height={60}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-body transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange ${
                    isActive
                      ? 'text-brand-orange after:content-[""] after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:bg-brand-orange'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile panel — siempre montado para poder animar apertura/cierre */}
      <div
        className={`md:hidden bg-brand-black border-t border-white/5 overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? 'visible max-h-96 opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-4 gap-2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? undefined : -1}
                  className={`block py-2 text-base font-body transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                    isActive ? 'text-brand-orange' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
