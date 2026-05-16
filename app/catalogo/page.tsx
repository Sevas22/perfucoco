'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProductCard } from '@/components/product/product-card'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { products, categories, brands } from '@/lib/products'
import { SlidersHorizontal, X, ChevronDown, Grid3X3, LayoutGrid, Sparkles } from 'lucide-react'

function CatalogoContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'todos'
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [gridCols, setGridCols] = useState<2 | 3>(3)
  const [priceRange] = useState<[number, number]>([0, 1000000])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (selectedBrand) {
      filtered = filtered.filter(p => p.brand === selectedBrand)
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return filtered
  }, [selectedCategory, selectedBrand, sortBy, priceRange])

  const clearFilters = () => {
    setSelectedCategory('todos')
    setSelectedBrand(null)
  }

  const hasActiveFilters = selectedCategory !== 'todos' || selectedBrand

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-36 pb-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-primary">
                Nuestra Colección
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              <span className="text-gold-gradient">Catálogo</span>
            </h1>
            <p className="text-muted-foreground font-sans font-light max-w-2xl mx-auto text-lg">
              Explora nuestra exclusiva colección de perfumes de las mejores marcas del mundo
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-36 space-y-10">
              {/* Categories */}
              <div>
                <h3 className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary mb-5">
                  Categorías
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-4 py-2.5 font-sans text-sm transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary mb-5">
                  Marcas
                </h3>
                <div className="space-y-1 max-h-72 overflow-y-auto">
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className={`block w-full text-left px-4 py-2.5 font-sans text-sm transition-all duration-300 ${
                      !selectedBrand
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    Todas las marcas
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`block w-full text-left px-4 py-2.5 font-sans text-sm transition-all duration-300 ${
                        selectedBrand === brand
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-3 border border-border font-sans text-xs tracking-wide text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-border font-sans text-xs tracking-wide hover:border-primary transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
                
                <p className="font-sans text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{filteredProducts.length}</span> productos
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Grid toggle - Desktop only */}
                <div className="hidden xl:flex items-center border border-border">
                  <button
                    onClick={() => setGridCols(2)}
                    className={`p-2 transition-colors ${gridCols === 2 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-2 transition-colors ${gridCols === 3 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-background border border-border px-4 py-2.5 pr-10 font-sans text-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="featured">Destacados</option>
                    <option value="price-asc">Precio: menor a mayor</option>
                    <option value="price-desc">Precio: mayor a menor</option>
                    <option value="name">Nombre</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mb-10 overflow-hidden"
                >
                  <div className="p-6 bg-card border border-border">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary">
                        Filtros
                      </h3>
                      <button onClick={() => setShowFilters(false)} className="text-muted-foreground hover:text-foreground">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-sans text-muted-foreground mb-3">Categoría</p>
                        <div className="flex flex-wrap gap-2">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedCategory(category.id)}
                              className={`px-4 py-2 font-sans text-xs tracking-wide transition-colors ${
                                selectedCategory === category.id
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-secondary text-foreground hover:bg-secondary/80'
                              }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs font-sans text-muted-foreground mb-3">Marca</p>
                        <select
                          value={selectedBrand || ''}
                          onChange={(e) => setSelectedBrand(e.target.value || null)}
                          className="w-full bg-background border border-border px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-primary"
                        >
                          <option value="">Todas las marcas</option>
                          {brands.map((brand) => (
                            <option key={brand} value={brand}>{brand}</option>
                          ))}
                        </select>
                      </div>

                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="w-full py-2.5 border border-border font-sans text-xs tracking-wide text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                        >
                          Limpiar filtros
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-2'} gap-6 lg:gap-8`}>
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-border rounded-full flex items-center justify-center">
                  <SlidersHorizontal className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground font-sans mb-4">
                  No se encontraron productos con los filtros seleccionados
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:text-accent transition-colors font-sans text-sm tracking-wide"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CatalogoContent />
    </Suspense>
  )
}
