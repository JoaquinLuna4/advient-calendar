"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  opacity: number
  size: number
}

export function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.4,
      size: Math.random() * 3 + 2,
    })

    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake)
    setSnowflakes(initialSnowflakes)

    const interval = setInterval(() => {
      setSnowflakes((prev) => {
        const newSnowflakes = [...prev]
        if (newSnowflakes.length < 50) {
          newSnowflakes.push(createSnowflake())
        }
        return newSnowflakes
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake text-white"
          style={{
            left: `${snowflake.left}%`,
            animationDuration: `${snowflake.animationDuration}s`,
            opacity: snowflake.opacity,
            fontSize: `${snowflake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
