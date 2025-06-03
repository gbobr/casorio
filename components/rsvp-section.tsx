"use client"

import { Button } from "@/components/ui/button"
import { Heart, Users } from "lucide-react"

export default function RsvpSection() {
  return (
    <section id="rsvp" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-script text-sage-800 mb-8">Confirmá tu Asistencia</h2>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <Users className="w-16 h-16 text-sage-600 mx-auto mb-6" />

            <p className="text-lg text-sage-700 mb-6 leading-relaxed">
              Tu presencia es el mejor regalo que podés darnos. Por favor, confirmanos si vas a poder acompañarnos en
              este día tan especial.
            </p>

            <p className="text-sage-600 mb-8">
              Te pedimos que confirmes tu asistencia antes del <strong>20 de junio </strong>
              para poder organizar todo de la mejor manera.
            </p>

            <Button
              size="lg"
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg"
              onClick={() => window.open("https://forms.gle/6JeUW65UREsxv6YX8", "_blank")}
            >
              <Heart className="w-5 h-5 mr-2" />
              Confirmar Asistencia
            </Button>
          </div>

          <div className="text-sage-600">
            <p className="mb-2">¿Tenés alguna consulta?</p>
            <p>No dudes en contactarnos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
