"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to get a consultation", "_blank")
  }

  const phoneNumber = "+917080404594"
  const whatsAppText = "Hi, I would like to know more about your services"

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
                TechForge
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a
                href="https://intern.apanatime.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Training & Internship
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>

              {/* Call + WhatsApp quick actions */}
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                aria-label="Call us"
                title="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/917080404594?text=${encodeURIComponent(whatsAppText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp us"
                title="WhatsApp us"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button onClick={handleConsultation} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">
                Services
              </a>
              <a
                href="https://intern.apanatime.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Training & Internship
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>

              <div className="flex items-center gap-4 px-3 pt-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center text-foreground hover:text-primary"
                  aria-label="Call us"
                  title="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href={`https://wa.me/917080404594?text=${encodeURIComponent(whatsAppText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-foreground hover:text-primary"
                  aria-label="WhatsApp us"
                  title="WhatsApp us"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>

              <Button
                onClick={handleConsultation}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
