'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Award, Users, Sparkles, Heart, Target, Shield } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Shield,
    title: 'Autenticidad',
    description: 'Solo comercializamos productos 100% originales de las mejores marcas del mundo.',
  },
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y transmitimos esa pasión en cada interacción con nuestros clientes.',
  },
  {
    icon: Target,
    title: 'Compromiso',
    description: 'Nos comprometemos a brindarte la mejor experiencia de compra posible.',
  },
  {
    icon: Users,
    title: 'Servicio',
    description: 'Atención personalizada para ayudarte a encontrar tu fragancia perfecta.',
  },
]

const milestones = [
  { number: '1K+', label: 'Clientes satisfechos' },
  { number: '500+', label: 'Productos vendidos' },
  { number: '50+', label: 'Fragancias disponibles' },
  { number: '4.9', label: 'Calificación promedio' },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              Nuestra historia
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6">
              <span className="text-foreground">Conoce</span>{' '}
              <span className="text-gold-gradient">Perfucoco</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              De acá sales perfumad@
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] bg-card border border-border relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 mx-auto">
                      <circle cx="50" cy="50" r="48" className="stroke-primary fill-none" strokeWidth="1" />
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="central"
                        textAnchor="middle"
                        className="fill-primary text-2xl font-semibold"
                        style={{ fontFamily: 'serif' }}
                      >
                        PC
                      </text>
                    </svg>
                    <p className="mt-4 text-gold-gradient text-2xl tracking-[0.3em] font-light">PERFUCOCO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
                Quiénes somos
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6 text-foreground">
                Una pasión que se convirtió en negocio
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Perfucoco nació en Bogotá con un sueño simple pero poderoso: hacer accesibles los perfumes más exclusivos del mundo a todos aquellos que aprecian el arte de la perfumería.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos comprometido con la autenticidad y la calidad. Cada fragancia que ofrecemos es cuidadosamente seleccionada y garantizamos que sea 100% original.
                </p>
                <p>
                  Creemos que un buen perfume es más que un aroma: es una extensión de tu personalidad, una firma invisible que te acompaña y te define. Por eso nos esforzamos en ayudarte a encontrar esa fragancia perfecta que hable de ti.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Award className="w-12 h-12 text-primary" />
                <div>
                  <p className="text-foreground font-medium">+1,000 clientes satisfechos</p>
                  <p className="text-sm text-muted-foreground">En Bogotá y toda Colombia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              Lo que nos define
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider">
              <span className="text-foreground">Nuestros</span>{' '}
              <span className="text-gold-gradient">valores</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 mx-auto border border-primary flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-light tracking-wider mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl text-gold-gradient font-light mb-2">
                  {milestone.number}
                </p>
                <p className="text-sm text-muted-foreground tracking-wider">
                  {milestone.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">
              <span className="text-foreground">¿Listo para encontrar tu</span>{' '}
              <span className="text-gold-gradient">fragancia ideal?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Explora nuestra colección y descubre perfumes que hablarán por ti
            </p>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent transition-colors"
            >
              Explorar catálogo
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
