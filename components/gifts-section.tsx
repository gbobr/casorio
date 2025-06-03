"use client"

import { Button } from "@/components/ui/button"
import { Gift, Heart, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function GiftsSection() {
  const [copied, setCopied] = useState(false)
  const bankAlias = "CASTOR.LIMON.RODANTE"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bankAlias)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }
  return (
    <section id="regalos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-script text-sage-800 mb-8">Regalos</h2>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Gift className="w-16 h-16 text-sage-600 mx-auto mb-6" />

            <p className="text-sage-700 mb-6 leading-relaxed">
              Lo más importante es tu presencia, pero si queres hacernos un regalo, podés colaborar para nuestra luna de miel:
            </p>

            <div className="flex flex-col items-center mb-6">
              <p className="text-sm text-sage-600 mb-2">Alias</p>
              <div className="bg-sage-50 rounded-lg p-4 max-w-sm w-full">
                <div className="flex items-center justify-between bg-white rounded border p-3">
                  <span className="font-mono text-base text-sage-800 font-semibold">{bankAlias}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="text-sage-600 hover:text-sage-800 ml-2"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                {copied && <p className="text-sm text-green-600 mt-2 text-center">¡Alias copiado al portapapeles!</p>}
              </div>
            </div>

            <p className="text-sage-700 mb-6 leading-relaxed">
              Si preferís regalarnos otra cosa, armamos una lista con algunas cositas que nos van a ser útiles para
              nuestra vida juntos.
            </p>

            <Button
              size="lg"
              className="bg-lemon-500 hover:bg-lemon-600 text-white px-8 py-4 text-lg w-full"
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/1hULa8sW5YsgKpD2wihzAl9GbfjKBb80JZHsYBs1pJwo/edit?usp=sharing",
                  "_blank",
                )
              }
            >
              <Heart className="w-5 h-5 mr-2" />
              Ver Lista de Regalos
            </Button>

            <div className="mt-8 p-4 bg-sage-50 rounded-lg">
              <p className="text-sage-700 text-sm">
                <strong>Tip:</strong> Podés marcar en la lista qué regalo elegiste para que otros invitados sepan qué
                está disponible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
