'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source 
            src="https://videos.pexels.com/video-files/5669110/5669110-uhd_2560_1440_24fps.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary">
                ¿Necesitas ayuda?
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              <span className="text-foreground">Encuentra tu</span>
              <br />
              <span className="text-gold-gradient">fragancia perfecta</span>
            </h2>
            
            <p className="text-muted-foreground font-sans font-light mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              Nuestro equipo de expertos está listo para asesorarte y ayudarte 
              a encontrar el perfume ideal para ti o para regalar
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/573142917923?text=Hola,%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20sobre%20perfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Chatear por WhatsApp
              </motion.a>
              <Link
                href="/catalogo"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 border border-primary text-primary font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Ver catálogo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
