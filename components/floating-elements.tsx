"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type FloatingElement = {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
  shape: "circle" | "square" | "triangle" | "emoji"
  emoji?: string
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Generate random floating elements
    const shapes = ["circle", "square", "triangle", "emoji"]
    const emojis = ["⚛️", "🚀", "💻", "🔥", "✨", "🎨", "🧠", "🛠️"]
    const colors = [
      "rgba(139, 92, 246, 0.3)", // primary
      "rgba(6, 182, 212, 0.3)", // accent
      "rgba(245, 158, 11, 0.3)", // tertiary
      "rgba(16, 185, 129, 0.3)", // quaternary
    ]

    const newElements: FloatingElement[] = []

    for (let i = 0; i < 15; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)] as "circle" | "square" | "triangle" | "emoji"
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        shape,
        emoji: shape === "emoji" ? emojis[Math.floor(Math.random() * emojis.length)] : undefined,
      })
    }

    setElements(newElements)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.shape === "emoji" ? `${element.size * 1.5}px` : `${element.size}px`,
            height: element.shape === "emoji" ? `${element.size * 1.5}px` : `${element.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 360, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {element.shape === "circle" && (
            <div className="w-full h-full rounded-full" style={{ backgroundColor: element.color }} />
          )}
          {element.shape === "square" && (
            <div className="w-full h-full rounded-md" style={{ backgroundColor: element.color }} />
          )}
          {element.shape === "triangle" && (
            <div
              className="w-full h-full"
              style={{
                backgroundColor: "transparent",
                borderLeft: `${element.size / 2}px solid transparent`,
                borderRight: `${element.size / 2}px solid transparent`,
                borderBottom: `${element.size}px solid ${element.color}`,
              }}
            />
          )}
          {element.shape === "emoji" && (
            <div className="w-full h-full flex items-center justify-center text-2xl">{element.emoji}</div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
