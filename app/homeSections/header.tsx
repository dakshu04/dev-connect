"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground font-sans">Dev Connect</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium font-serif transition-all duration-200 hover:scale-105"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium font-serif transition-all duration-200 hover:scale-105"
              >
                Community
              </a>
              <a
                href="#pricing"
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium font-serif transition-all duration-200 hover:scale-105"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium font-serif transition-all duration-200 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* CTA Button */}
           <Link href="/sign-in">
            <button className="px-4 py-2 rounded-xl bg-accent text-white font-medium hover:opacity-90 cursor-pointer">
              Register / Sign In
            </button>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/50 backdrop-blur-sm rounded-lg mt-2">
              <a
                href="#features"
                className="text-card-foreground hover:text-primary block px-3 py-2 text-base font-medium font-serif transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-card-foreground hover:text-primary block px-3 py-2 text-base font-medium font-serif transition-colors"
              >
                Community
              </a>
              <a
                href="#pricing"
                className="text-card-foreground hover:text-primary block px-3 py-2 text-base font-medium font-serif transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-card-foreground hover:text-primary block px-3 py-2 text-base font-medium font-serif transition-colors"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
