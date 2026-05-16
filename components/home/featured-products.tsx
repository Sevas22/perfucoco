'use client'

import { motion } from 'framer-motion'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product/product-card'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4)

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-sans tracking-[0.4em] uppercase text-primary">
              Nuestra Selección
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide mb-6">
            <span className="text-gold-gradient">Fragancias</span>{' '}
            <span className="text-foreground">Destacadas</span>
          </h2>
          
          <p className="text-muted-foreground font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Descubre nuestra cuidadosa selección de los perfumes más exclusivos 
            y deseados del mundo
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/catalogo"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-primary/30 text-primary font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
