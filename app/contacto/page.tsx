'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Send } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              Contáctanos
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
              <span className="text-foreground">Estamos para</span>{' '}
              <span className="text-gold-gradient">ayudarte</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes alguna pregunta? Estamos aquí para asesorarte y ayudarte a encontrar tu fragancia perfecta
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-8 text-foreground">
                Información de contacto
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">Bogotá, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Teléfono</h3>
                    <a href="tel:+573142917923" className="text-muted-foreground hover:text-primary transition-colors">
                      +57 314 291 7923
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Email</h3>
                    <a href="mailto:info@perfucoco.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@perfucoco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Horario de atención</h3>
                    <p className="text-muted-foreground">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-card border border-border mb-8">
                <h3 className="text-lg font-light tracking-wider mb-4 text-foreground">
                  ¿Prefieres WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Escríbenos directamente y te responderemos lo antes posible
                </p>
                <a
                  href="https://wa.me/573142917923?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20perfumes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-sm tracking-[0.2em] uppercase hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribir por WhatsApp
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
                  Síguenos en redes
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/perfucoco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/perfucoco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 bg-card border border-border">
                <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-8 text-foreground">
                  Envíanos un mensaje
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-light tracking-wider mb-2 text-foreground">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Te responderemos lo antes posible
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary hover:text-accent transition-colors text-sm tracking-widest uppercase"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition-colors text-foreground"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition-colors text-foreground"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition-colors text-foreground"
                          placeholder="+57 300 000 0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                          Asunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition-colors text-foreground"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="consulta">Consulta sobre productos</option>
                          <option value="pedido">Estado de mi pedido</option>
                          <option value="asesoria">Asesoría personalizada</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition-colors text-foreground resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
