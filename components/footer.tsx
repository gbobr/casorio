import { Heart, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-script mb-4">Germán & Jazmín</h3>
            <p className="text-sage-200 mb-6">Gracias por ser parte de nuestro día especial</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sage-200">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>mecaso@germanbobr.com.ar</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+54 11 5470-8124</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-semibold mb-4">Fecha del Evento</h4>
              <div className="text-sage-200">
                <p>Domingo 6 de Julio, 2025</p>
                <p>12:30 PM</p>
                <p>Club de la Birra, Recoleta</p>
              </div>
            </div>
          </div>

          <div className="border-t border-sage-700 pt-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sage-200">Hecho con amor y <a href="https://v0.dev">v0</a> para nuestro día especial</span>
              <Heart className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-sage-300 text-sm">Germán & Jazmín</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
