'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef } from 'react'

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-perfume.jpg"
        >
          <source 
            src="https://videos.pexels.com/video-files/5469909/5469909-uhd_2560_1440_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 video-overlay" />
        
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />
      </motion.div>

      {/* Sound toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-20 p-3 glass rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
        aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-foreground" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary" />
        )}
      </button>

      {/* Main content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center px-6"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Brand badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary">
                Colección Exclusiva 2024
              </span>
            </span>
          </motion.div>

          {/* Logo/Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider">
              <span className="text-gold-gradient">Perfucoco</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground/90 italic tracking-wide">
              De acá sales perfumad@
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base sm:text-lg text-muted-foreground font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Descubre el arte de la perfumería con nuestra exclusiva colección 
            de fragancias de las casas más prestigiosas del mundo
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/catalogo"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <span className="relative z-10">Explorar Colección</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            
            <Link
              href="#video-showcase"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 border border-foreground/20 text-foreground font-sans text-sm tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              <span>Ver Video</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase font-sans">
              Descubre más
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-primary/30 flex justify-center pt-2"
            >
              <motion.div 
                animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1 h-1 bg-primary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          href="https://www.facebook.com/share/17XBbdbMVm/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          href="https://www.instagram.com/perfucoco"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          href="https://www.tiktok.com/@perfucoco"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/60 hover:border-primary hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </motion.a>
      </div>

      {/* Right side text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-10"
      >
        <p className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          Bogotá, Colombia
        </p>
      </motion.div>
    </section>
  )
}
