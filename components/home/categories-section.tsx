'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'hombre',
    title: 'Para Él',
    subtitle: 'Fragancias masculinas',
    description: 'Colección de perfumes sofisticados y elegantes para el hombre moderno',
    image: '/images/sauvage.jpg',
  },
  {
    id: 'mujer',
    title: 'Para Ella',
    subtitle: 'Fragancias femeninas',
    description: 'Perfumes exquisitos que celebran la feminidad en todas sus formas',
    image: '/images/jadore.jpg',
  },
]

export function CategoriesSection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary mb-6 block">
            Colecciones
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide">
            <span className="text-foreground">Encuentra tu</span>{' '}
            <span className="text-gold-gradient">fragancia ideal</span>
          </h2>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/catalogo?category=${category.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden img-zoom">
                  {/* Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Border overlay */}
                  <div className="absolute inset-4 border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-primary mb-3 block">
                      {category.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 text-foreground group-hover:text-primary transition-colors duration-500">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground font-sans font-light mb-6 text-sm leading-relaxed max-w-sm">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-3 text-primary font-sans text-xs tracking-[0.2em] uppercase">
                      Explorar colección
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
