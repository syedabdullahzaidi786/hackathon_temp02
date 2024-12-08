'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Menu, X } from 'lucide-react'

const navItems = [
  { name: "Plant pots", href: "/plant-pots" },
  { name: "Ceramics", href: "/ceramics" },
  { name: "Tables", href: "/tables" },
  { name: "Chairs", href: "/chairs" },
  { name: "Crockery", href: "/crockery" },
  { name: "Tableware", href: "/tableware" },
  { name: "Cutlery", href: "/cutlery" },
  { name: "Collections", href: "/collections" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="lg:hidden mr-4" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link href="/" className="text-xl font-semibold">
              Avion
            </Link>
          </div>
          <nav className={`${
            isMobile ? (isMenuOpen ? 'flex' : 'hidden') : 'flex'
          } lg:flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:relative left-0 top-full lg:top-auto bg-white lg:bg-transparent w-full lg:w-auto p-4 lg:p-0 shadow-md lg:shadow-none z-50`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => isMobile && setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

