"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface AdventDoorProps {
  day: number
  isOpened: boolean
  onClick: () => void
}

export function AdventDoor({ day, isOpened, onClick }: AdventDoorProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`
        relative h-24 md:h-32 cursor-pointer transition-all duration-300 transform-gpu
        ${isHovered ? "scale-105 shadow-lg shadow-primary/25" : "scale-100"}
        ${isOpened ? "bg-primary/20 border-primary" : "bg-card hover:bg-card/80"}
        border-2 hover:border-primary/50
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`
        absolute inset-0 flex items-center justify-center transition-all duration-500 transform-gpu
        ${isOpened ? "rotateY-180" : "rotateY-0"}
      `}
      >
        <div className="text-center">
          <div
            className={`
            text-2xl md:text-3xl font-bold transition-colors duration-300
            ${isOpened ? "text-primary" : "text-foreground"}
          `}
          >
            {day}
          </div>
          {isOpened && <div className="text-xs text-primary mt-1 animate-pulse">¡Abierto!</div>}
        </div>
      </div>

      {/* Door opening effect */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 
        transition-all duration-500 transform-gpu origin-left
        ${isOpened ? "rotateY-90 opacity-0" : "rotateY-0 opacity-100"}
        rounded-lg
      `}
      />

      {/* Glow effect on hover */}
      {isHovered && <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" />}
    </Card>
  )
}
