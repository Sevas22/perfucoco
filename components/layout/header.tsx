'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Search, Heart, Instagram, Phone } from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Catálogo', href: '/catalogo' },
  { name: 'Hombre', href: '/catalogo?category=hombre' },
  { name: 'Mujer', href: '/catalogo?category=mujer' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-500 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="border-b border-border/30">
          <div className="container mx-auto px-6 py-2.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-8">
                <a 
                  href="tel:+573142917923" 
                  className="flex items-center gap-2 text-[11px] font-sans tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +57 314 291 7923
                </a>
                <a 
                  href="https://instagram.com/perfucoco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[11px] font-sans tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  @perfucoco
                </a>
              </div>
              <p className="text-[11px] font-sans tracking-[0.1em] text-primary">
                Envío gratis en compras mayores a $300.000
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop navigation - Left */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[11px] font-sans tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-gold-gradient">
              Perfucoco
            </span>
            <span className="text-[9px] font-sans tracking-[0.4em] uppercase text-muted-foreground mt-0.5">
              De acá sales perfumad@
            </span>
          </Link>

          {/* Desktop navigation - Right */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[11px] font-sans tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button 
              className="hidden md:flex w-10 h-10 items-center justify-center text-foreground/70 hover:text-primary transition-colors" 
              aria-label="Buscar"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button 
              className="hidden md:flex w-10 h-10 items-center justify-center text-foreground/70 hover:text-primary transition-colors" 
              aria-label="Favoritos"
            >
              <Heart className="w-[18px] h-[18px]" />
            </button>
            <button 
              className="relative w-10 h-10 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors" 
              aria-label="Carrito"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-background border-r border-border lg:hidden z-50"
            >
              <div className="flex flex-col h-full">
                {/* Menu header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-serif text-xl text-gold-gradient">Perfucoco</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-foreground hover:text-primary"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu links */}
                <div className="flex-1 overflow-y-auto py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-6 py-4 text-sm font-sans tracking-[0.2em] uppercase text-foreground hover:text-primary hover:bg-primary/5 transition-colors border-b border-border/50"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Menu footer */}
                <div className="p-6 border-t border-border">
                  <div className="flex flex-col gap-4">
                    <a 
                      href="tel:+573142917923" 
                      className="flex items-center gap-3 text-sm font-sans text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +57 314 291 7923
                    </a>
                    <a 
                      href="https://instagram.com/perfucoco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-sans text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      @perfucoco
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
