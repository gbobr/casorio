"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sage-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif text-sage-800">Germán & Jazmín</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("detalles")}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Detalles
            </button>
            <button
              onClick={() => scrollToSection("fotos")}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Fotos
            </button>
            <button
              onClick={() => scrollToSection("rsvp")}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              RSVP
            </button>
            <button
              onClick={() => scrollToSection("regalos")}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Regalos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sage-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sage-700 hover:text-sage-900 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("detalles")}
                className="text-sage-700 hover:text-sage-900 transition-colors text-left"
              >
                Detalles
              </button>
              <button
                onClick={() => scrollToSection("fotos")}
                className="text-sage-700 hover:text-sage-900 transition-colors text-left"
              >
                Fotos
              </button>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="text-sage-700 hover:text-sage-900 transition-colors text-left"
              >
                RSVP
              </button>
              <button
                onClick={() => scrollToSection("regalos")}
                className="text-sage-700 hover:text-sage-900 transition-colors text-left"
              >
                Regalos
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
