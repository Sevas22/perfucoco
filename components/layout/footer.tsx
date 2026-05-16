'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  tienda: [
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Hombre', href: '/catalogo?category=hombre' },
    { name: 'Mujer', href: '/catalogo?category=mujer' },
    { name: 'Unisex', href: '/catalogo?category=unisex' },
    { name: 'Ofertas', href: '/catalogo?sale=true' },
  ],
  informacion: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Envíos', href: '/envios' },
    { name: 'Devoluciones', href: '/devoluciones' },
    { name: 'Preguntas Frecuentes', href: '/faq' },
  ],
}

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/perfucoco', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/share/17XBbdbMVm/', icon: Facebook },
  { 
    name: 'TikTok', 
    href: 'https://tiktok.com/@perfucoco', 
    icon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
  }

  return (
    <footer className="bg-card">
      {/* Newsletter Section */}
      <div className="border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-primary mb-4 block">
                Newsletter
              </span>
              <h3 className="font-serif text-3xl md:text-4xl tracking-wide mb-4 text-gold-gradient">
                Únete a nuestra comunidad
              </h3>
              <p className="text-muted-foreground font-sans font-light mb-8">
                Recibe ofertas exclusivas y novedades directamente en tu correo
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full px-5 py-4 bg-input border border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground font-sans text-sm transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group px-8 py-4 bg-primary text-primary-foreground font-sans tracking-[0.15em] uppercase text-xs hover:bg-accent transition-colors flex items-center justify-center gap-2"
                >
                  Suscribirse
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-gold-gradient">
                Perfucoco
              </span>
              <span className="block text-[9px] font-sans tracking-[0.3em] uppercase text-muted-foreground mt-1">
                De acá sales perfumad@
              </span>
            </Link>
            <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed mb-8">
              Tu destino para los perfumes más exclusivos de las mejores marcas del mundo. 
              Calidad garantizada y atención personalizada.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Tienda */}
          <div>
            <h4 className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary mb-6">
              Tienda
            </h4>
            <ul className="space-y-3">
              {footerLinks.tienda.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary mb-6">
              Información
            </h4>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground font-sans text-sm">
                  Bogotá, Colombia
                </span>
              </li>
              <li>
                <a 
                  href="tel:+573142917923" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-sans text-sm"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +57 314 291 7923
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@perfucoco.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-sans text-sm"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  info@perfucoco.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/573142917923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-sans text-xs tracking-wide hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground font-sans text-xs">
              © {new Date().getFullYear()} Perfucoco. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacidad" 
                className="text-muted-foreground hover:text-foreground transition-colors font-sans text-xs"
              >
                Política de Privacidad
              </Link>
              <Link 
                href="/terminos" 
                className="text-muted-foreground hover:text-foreground transition-colors font-sans text-xs"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
