'use client'

import { motion } from 'framer-motion'
import { brands } from '@/lib/products'

export function BrandsSection() {
  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-muted-foreground">
            Trabajamos con las mejores marcas del mundo
          </span>
        </motion.div>

        {/* Brands marquee */}
        <div className="relative">
          <div className="flex gap-20 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="shrink-0 flex items-center"
              >
                <span className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider text-muted-foreground/40 hover:text-primary transition-colors duration-500 whitespace-nowrap cursor-default">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  )
}
