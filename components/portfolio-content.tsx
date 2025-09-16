
"use client"

import { Button } from "@/components/ui/button"

export function PortfolioContent() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-primary">¡Hola, soy Joaquín!</h2>
      <p className="mt-2 text-gray-300">
        Gracias por visitar mi calendario de adviento.
      </p>
      <div className="mt-6">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
          onClick={() => window.open("https://portfolio-joa.web.app/", "_blank")}
        >
          Visita mi Portafolio
        </Button>
      </div>
      <p className="mt-4 text-sm text-gray-300">
        Estoy emocionado de mostrarte mi trabajo y mis habilidades como desarrollador.
      </p>
    </div>
  )
}
