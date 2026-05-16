'use client'

import { motion } from 'framer-motion'
import { Truck, Shield, CreditCard, Gift, Clock, Star } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Envío Gratis',
    description: 'En compras mayores a $300.000 a toda Colombia',
  },
  {
    icon: Shield,
    title: '100% Originales',
    description: 'Garantía de autenticidad en todos nuestros productos',
  },
  {
    icon: CreditCard,
    title: 'Pago Seguro',
    description: 'Múltiples métodos de pago seguros disponibles',
  },
  {
    icon: Gift,
    title: 'Empaque Premium',
    description: 'Presentación de lujo ideal para regalo',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Recibe tu pedido en 1-3 días hábiles',
  },
  {
    icon: Star,
    title: 'Asesoría Experta',
    description: 'Te ayudamos a encontrar tu fragancia ideal',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 bg-background relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary mb-6 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide">
            <span className="text-foreground">La experiencia</span>{' '}
            <span className="text-gold-gradient">Perfucoco</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 lg:p-12 bg-background hover:bg-card transition-colors duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-primary/30 mb-8 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl tracking-wide mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
