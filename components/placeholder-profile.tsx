"use client"

import { useEffect, useRef } from "react"

export default function PlaceholderProfile({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      return { width, height }
    }

    const { width, height } = setCanvasDimensions()

    // Draw placeholder profile
    const drawPlaceholder = () => {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "#1e1e2d")
      gradient.addColorStop(1, "#232334")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Person silhouette
      ctx.fillStyle = "rgba(168, 85, 247, 0.2)"

      // Head
      const centerX = width / 2
      const headY = height * 0.35
      const headRadius = width * 0.2
      ctx.beginPath()
      ctx.arc(centerX, headY, headRadius, 0, Math.PI * 2)
      ctx.fill()

      // Body
      ctx.beginPath()
      ctx.moveTo(centerX - headRadius, headY + headRadius * 0.8)
      ctx.lineTo(centerX - headRadius * 1.5, height * 0.9)
      ctx.lineTo(centerX + headRadius * 1.5, height * 0.9)
      ctx.lineTo(centerX + headRadius, headY + headRadius * 0.8)
      ctx.closePath()
      ctx.fill()

      // Decorative elements
      ctx.strokeStyle = "rgba(99, 102, 241, 0.3)"
      ctx.lineWidth = 2

      // Draw some abstract lines
      for (let i = 0; i < 5; i++) {
        const y = height * 0.2 + (height * 0.6 * i) / 5
        ctx.beginPath()
        ctx.moveTo(width * 0.2, y)
        ctx.bezierCurveTo(
          width * 0.4,
          y + (Math.random() - 0.5) * height * 0.1,
          width * 0.6,
          y + (Math.random() - 0.5) * height * 0.1,
          width * 0.8,
          y,
        )
        ctx.stroke()
      }

      // Add some dots
      ctx.fillStyle = "rgba(99, 102, 241, 0.5)"
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = Math.random() * 3 + 1
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add initials
      ctx.font = `bold ${width * 0.1}px sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fillText("MS", centerX, headY)
    }

    drawPlaceholder()

    // Handle resize
    const handleResize = () => {
      const { width, height } = setCanvasDimensions()
      drawPlaceholder()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}

