import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import type React from "react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Calendario de Adviento 2025 - Ibai",
  description: "La web de los premios de Ibai - Calendario de Adviento interactivo",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <footer className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Joaquin Luna. Todos los derechos reservados. | 
          <a href="https://github.com/JoaquinLuna4" target="_blank" rel="noopener noreferrer" className="underline">
            GitHub
          </a>
        </footer>
      </body>
    </html>
  )
}