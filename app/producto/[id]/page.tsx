'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProductCard } from '@/components/product/product-card'
import { products, formatPrice } from '@/lib/products'
import { ShoppingBag, Heart, Share2, MessageCircle, ChevronRight, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import Link from 'next/link'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = products.find(p => p.id === id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/catalogo?category=${product.category}`} className="hover:text-primary transition-colors capitalize">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square bg-card border border-border">
                {/* Badges */}
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                  {product.new && (
                    <span className="px-4 py-2 bg-primary text-primary-foreground text-xs tracking-widest uppercase">
                      Nuevo
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="px-4 py-2 bg-accent text-accent-foreground text-xs tracking-widest uppercase">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-64 mx-auto bg-gradient-to-t from-primary/20 to-primary/5 rounded-t-full border border-primary/30" />
                    <p className="mt-4 text-primary font-light tracking-wider text-xl">{product.brand}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                {product.brand}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-light tracking-wider text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating placeholder */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reseñas)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-gold-gradient font-light">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-2">Tamaño</p>
                <div className="inline-block px-4 py-2 border border-primary text-primary">
                  {product.size}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                  Agregar al carrito
                </button>
                <button className="w-14 h-14 border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-14 h-14 border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/573142917923?text=Hola,%20me%20interesa%20el%20perfume%20${encodeURIComponent(product.name)}%20de%20${encodeURIComponent(product.brand)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white text-sm tracking-[0.2em] uppercase hover:bg-green-700 transition-colors mb-8"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar por WhatsApp
              </a>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Envío gratis +$300k</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">100% Original</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Garantía</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Notes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-card border border-border">
              <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Notas de salida</h3>
              <ul className="space-y-2">
                {product.notes.top.map((note, i) => (
                  <li key={i} className="text-muted-foreground">{note}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Notas de corazón</h3>
              <ul className="space-y-2">
                {product.notes.middle.map((note, i) => (
                  <li key={i} className="text-muted-foreground">{note}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Notas de fondo</h3>
              <ul className="space-y-2">
                {product.notes.base.map((note, i) => (
                  <li key={i} className="text-muted-foreground">{note}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-8 text-center">
              <span className="text-foreground">También te puede</span>{' '}
              <span className="text-gold-gradient">interesar</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
