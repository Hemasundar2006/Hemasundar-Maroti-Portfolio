import React, { useState, useEffect } from 'react'
import { Menu, X, Code, Mail, Github, Linkedin, Laptop, Laptop2 } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-800/95 backdrop-blur-sm shadow-sm border-b border-dark-700' : 'bg-transparent'
    }`}>
      <nav className="section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Laptop2 className="h-8 w-8 text-primary-600 " />
              <span className="text-xl font-bold gradient-text text-highlight">Hemasundar Maroti</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-200 hover:text-primary-400 transition-colors duration-200 font-medium underline-highlight"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="mailto:marothihemasundar03@gmail.com"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Hemasundar2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hemasundar-maroti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-dark-700">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-dark-200 hover:text-primary-400 transition-colors duration-200 font-medium underline-highlight"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-dark-700">
                  <a
                    href="mailto:marothihemasundar03@gmail.com"
                    className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/Hemasundar2006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hemasundar-maroti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-dark-400 hover:text-primary-400 transition-colors duration-200 glow-text"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
