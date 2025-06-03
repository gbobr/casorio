"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PhotosSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const photos = [
    { id: 1, src: "/images/couple-mountain-2.jpg", alt: "Germán y Jazmín en las montañas" },
    { id: 2, src: "/images/couple-lake-selfie.jpg", alt: "Germán y Jazmín - Momento romántico junto al lago" },
    { id: 3, src: "/images/couple-volcano.jpg", alt: "Germán y Jazmín - Aventura con vista al volcán" },
    { id: 4, src: "/images/couple-overlook.jpg", alt: "Germán y Jazmín - Explorando paisajes patagónicos" },
    { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Germán y Jazmín - Foto 5" },
    { id: 6, src: "/placeholder.svg?height=400&width=300", alt: "Germán y Jazmín - Foto 6" },
  ]

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
    document.body.style.overflow = "unset"
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? photos.length - 1 : selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === photos.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <section id="fotos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-script text-sage-800 text-center mb-16">Nuestras Fotos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    objectPosition: photo.id === 2 ? "center 60%" : photo.id === 3 ? "center 55%" : "center center",
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
                    Ver imagen completa
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sage-700 text-lg">
              ¡Compartiendo aventuras y momentos especiales juntos! Más fotos del gran día próximamente.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 h-10 w-10"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedImageIndex].src || "/placeholder.svg"}
              alt={photos[selectedImageIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {selectedImageIndex + 1} de {photos.length}
          </div>
        </div>
      )}
    </section>
  )
}
