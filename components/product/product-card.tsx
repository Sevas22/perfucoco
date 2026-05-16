'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { formatPrice, type Product } from '@/lib/products'
import { ShoppingBag, Heart, Eye } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/producto/${product.id}`}>
        <div className="relative aspect-[3/4] bg-card overflow-hidden img-zoom">
          {/* Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {product.new && (
              <span className="px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-sans tracking-[0.15em] uppercase">
                Nuevo
              </span>
            )}
            {product.bestseller && (
              <span className="px-3 py-1.5 bg-foreground text-background text-[10px] font-sans tracking-[0.15em] uppercase">
                Bestseller
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1.5 bg-red-600 text-white text-[10px] font-sans tracking-[0.15em] uppercase">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
            className={`absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${
              isLiked 
                ? 'text-red-500' 
                : 'text-foreground/60 opacity-0 group-hover:opacity-100 hover:text-primary'
            }`}
            aria-label="Agregar a favoritos"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          {/* Product Image */}
          {!imageError ? (
            <Image
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-28 mx-auto mb-4 bg-gradient-to-t from-primary/30 to-primary/10 rounded-t-full border border-primary/40" />
                <p className="text-primary/80 font-serif text-sm tracking-wider">{product.brand}</p>
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick actions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex gap-2">
              <button 
                onClick={(e) => e.preventDefault()}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-sans text-xs tracking-[0.15em] uppercase hover:bg-accent transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Agregar
              </button>
              <button 
                onClick={(e) => e.preventDefault()}
                className="w-12 flex items-center justify-center bg-foreground/10 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-5 text-center">
          <p className="text-[10px] text-muted-foreground font-sans tracking-[0.2em] uppercase mb-1">
            {product.brand}
          </p>
          <h3 className="font-serif text-lg tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground font-sans mt-1">{product.size}</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="text-primary font-sans font-medium tracking-wide">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
