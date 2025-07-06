'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { personalData } from '@/data/personal'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Resume', href: '/brianngo_resume_2025.pdf' },
  ]

  const moreItems = [
    { name: 'Gallery', href: '/gallery' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
              {personalData.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
                target={item.name === 'Resume' ? '_blank' : undefined}
                rel={item.name === 'Resume' ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </a>
            ))}

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium">
                <span>More</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 top-full w-40 rounded-md bg-black/95 backdrop-blur-md shadow-lg">
                  {moreItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-right"
                    >
                      <span className="inline-block rounded-lg bg-white/10 px-3 py-1 text-gray-300 hover:bg-white/20 hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md shadow-lg">
              {[...navItems, ...moreItems].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  target={item.name === 'Resume' ? '_blank' : undefined}
                  rel={item.name === 'Resume' ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header