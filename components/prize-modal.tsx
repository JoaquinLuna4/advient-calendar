"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PortfolioContent } from "./portfolio-content"

interface Prize {
  title: string
  description: string
  image: string
  isSpecial?: boolean
}

interface PrizeModalProps {
  prize: Prize
  onClose: () => void
}

export function PrizeModal({ prize, onClose }: PrizeModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <Card className="w-full max-w-md mx-auto bg-popover border-2 border-primary/20 shadow-2xl animate-in zoom-in-95 duration-300">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 text-gray-400 hover:text-foreground"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle
            className="text-xl font-bold text-center pr-8 text-white"
          >
            {prize.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {prize.isSpecial ? (
            <PortfolioContent />
          ) : (
            <>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <img src={prize.image || "/placeholder.svg"} alt={prize.title} className="w-full h-full object-scale-down" />
              </div>
              <p className="text-center text-white">{prize.description}</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}