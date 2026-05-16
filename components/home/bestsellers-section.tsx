'use client'

import { motion } from 'framer-motion'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product/product-card'
import { TrendingUp } from 'lucide-react'

export function BestsellersSection() {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 4)

  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary">
              Los más vendidos
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide mb-6">
            <span className="text-foreground">Favoritos de</span>{' '}
            <span className="text-gold-gradient">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground font-sans font-light max-w-2xl mx-auto text-lg">
            Las fragancias más deseadas y mejor valoradas por nuestra comunidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
