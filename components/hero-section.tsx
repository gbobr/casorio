import { Heart } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-24 h-24 bg-sage-300 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="w-32 h-32 bg-lemon-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with script font style */}
          <h1 className="text-6xl md:text-8xl font-script text-sage-800 mb-8 leading-tight">¡Nos casamos!</h1>

          {/* Couple names */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-sage-700 mb-2">GERMÁN</h2>
            <Heart className="w-8 h-8 text-sage-600 mx-auto mb-2" />
            <h2 className="text-3xl md:text-4xl font-serif text-sage-700">JAZMÍN</h2>
          </div>

          {/* Wedding date */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
            <div className="flex items-center justify-center space-x-4 text-sage-800">
              <span className="text-xl font-serif">DOMINGO</span>
              <span className="text-4xl font-bold">6</span>
              <span className="text-xl font-serif">JULIO</span>
            </div>
            <div className="text-2xl font-serif mt-2">12:30 PM</div>
            <div className="text-sm text-sage-600 mt-1">PUNTUAL</div>
          </div>

          {/* Invitation message */}
          <p className="text-lg md:text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed">
            Te invitamos a celebrar con nosotros este día tan especial. Será una alegría compartir nuestra felicidad con
            vos y toda la familia.
          </p>
        </div>
      </div>
    </section>
  )
}
