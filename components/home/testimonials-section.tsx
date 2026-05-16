'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'María Fernanda G.',
    location: 'Bogotá',
    rating: 5,
    text: 'Excelente servicio y productos 100% originales. La atención por WhatsApp es muy rápida y el envío llegó antes de lo esperado. Definitivamente mi tienda de perfumes favorita.',
    avatar: 'MF',
  },
  {
    id: 2,
    name: 'Carlos A.',
    location: 'Medellín',
    rating: 5,
    text: 'Compré un Invictus y la experiencia fue increíble. El empaque es premium y el perfume es exactamente el original. Muy recomendado.',
    avatar: 'CA',
  },
  {
    id: 3,
    name: 'Andrea P.',
    location: 'Cali',
    rating: 5,
    text: 'Me encantó la asesoría que me dieron para elegir mi perfume. Son muy profesionales y conocen muy bien cada fragancia. Volveré a comprar pronto.',
    avatar: 'AP',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary mb-6 block">
            Testimonios
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide mb-6">
            <span className="text-foreground">Lo que dicen</span>{' '}
            <span className="text-gold-gradient">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground font-sans font-light max-w-xl mx-auto">
            Descubre por qué miles de personas confían en Perfucoco para sus fragancias favoritas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="p-8 lg:p-10 border border-border bg-card hover:border-primary/30 transition-colors duration-500 h-full">
                {/* Quote icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/90 font-sans font-light leading-relaxed text-[15px] mb-8">
                  {`"${testimonial.text}"`}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-serif text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm font-sans text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
