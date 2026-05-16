import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { VideoShowcase } from '@/components/home/video-showcase'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoriesSection } from '@/components/home/categories-section'
import { FeaturesSection } from '@/components/home/features-section'
import { BestsellersSection } from '@/components/home/bestsellers-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { BrandsSection } from '@/components/home/brands-section'
import { CTASection } from '@/components/home/cta-section'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoShowcase />
      <FeaturedProducts />
      <CategoriesSection />
      <FeaturesSection />
      <BestsellersSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
