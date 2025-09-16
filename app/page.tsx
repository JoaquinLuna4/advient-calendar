"use client"
import { AdventCalendar } from "@/components/advent-calendar"
import { SnowEffect } from "@/components/snow-effect"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SnowEffect />
      <div className="relative z-10">
        <header className="text-center py-8 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 text-balance">
            Calendario de Adviento 2025
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8">La web de los premios de Ibai</p>
        </header>

        <main className="container mx-auto px-4 pb-8">
          <AdventCalendar />
        </main>
      </div>
    </div>
  )
}
