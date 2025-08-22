"use client"

import { Header } from "./homeSections/header"
import { HeroSection } from "./homeSections/hero-section"
import { FeaturesSection } from "./homeSections/features-section"
import { TestimonialsSection } from "./homeSections/testimonials-section"
import { PricingSection } from "./homeSections/pricing-section"
import { CTASection } from "./homeSections/cta-sections"
import { Footer } from "./homeSections/footer"
import "./globals.css"
export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

