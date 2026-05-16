'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="video-showcase" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary mb-4 block">
            Experiencia Sensorial
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide mb-6">
            <span className="text-foreground">El Arte de la</span>{' '}
            <span className="text-gold-gradient">Perfumería</span>
          </h2>
          <p className="text-muted-foreground font-sans font-light max-w-2xl mx-auto text-lg">
            Sumérgete en un mundo de sensaciones donde cada fragancia cuenta una historia única
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative aspect-[21/9] rounded-sm overflow-hidden"
        >
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero-perfume.jpg"
          >
            <source 
              src="https://videos.pexels.com/video-files/4620563/4620563-uhd_2560_1440_25fps.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-background/30" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-foreground/30 flex items-center justify-center backdrop-blur-sm bg-background/20 hover:bg-primary hover:border-primary transition-colors group"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary-foreground transition-colors" />
              ) : (
                <Play className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary-foreground transition-colors ml-1" />
              )}
            </motion.button>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center backdrop-blur-sm bg-background/20 hover:bg-primary hover:border-primary transition-colors group"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
              ) : (
                <Volume2 className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
              )}
            </button>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/50" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '50+', label: 'Fragancias Exclusivas' },
            { value: '10+', label: 'Marcas Premium' },
            { value: '1K+', label: 'Clientes Felices' },
            { value: '100%', label: 'Productos Originales' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-gold-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-sans text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
