"use client"

import { MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DetailsSection() {
  return (
    <section id="detalles" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-script text-sage-800 text-center mb-16">Detalles del Casamiento</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony Details */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-sage-800 mb-6 text-center">Ceremonia & Fiesta</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <p className="font-semibold text-sage-800">Fecha</p>
                    <p className="text-sage-600">Domingo 6 de Julio, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <p className="font-semibold text-sage-800">Horario</p>
                    <p className="text-sage-600">12:30 PM - Puntual</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-sage-600 mt-1" />
                  <div>
                    <p className="font-semibold text-sage-800">Lugar</p>
                    <p className="text-sage-600">Club de la Birra</p>
                    <p className="text-sage-600">Recoleta - Pres.</p>
                    <p className="text-sage-600">Roberto M. Ortiz 1871</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-6 bg-sage-600 hover:bg-sage-700 text-white"
                onClick={() => window.open("https://maps.app.goo.gl/p7mHws2RWbeADCXTA", "_blank")}
              >
                Ver Ubicación en Maps
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-sage-800 mb-6 text-center">Información Adicional</h3>

              <div className="space-y-4 text-sage-700">
                <div>
                  <h4 className="font-semibold mb-2">Dress Code</h4>
                  <p>Elegante sport (Como te vestirías para un civil)</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Estacionamiento</h4>
                  <p>Estacionamiento pago <a className='font-semibold' href='https://maps.app.goo.gl/RHUyappta6yTPW317'>frente al lugar</a></p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Menú</h4>
                  <p>Bandejeo con opciones vegetarianas disponibles</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Ceremonia</h4>
                  <p>La ceremonia será en el lugar, rogamos puntualidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
