'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { brand } from '@/data/brand'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/produccion', label: 'Producción' },
  { href: '/instalaciones', label: 'Instalaciones' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-heading font-extrabold text-xl text-white">
          {brand.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-body transition-colors ${
                    isActive
                      ? 'text-brand-orange border-b-2 border-brand-orange pb-1'
                      : 'text-gray-300 hover:text-white'
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
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
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

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden bg-brand-black border-t border-white/5">
          <ul className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 text-base font-body transition-colors ${
                      isActive ? 'text-brand-orange' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
