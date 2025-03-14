"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [lastThunder, setLastThunder] = useState(0)
  const [showThunder, setShowThunder] = useState(false)
  const [thunderIntensity, setThunderIntensity] = useState(1)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over a link or button
      const target = e.target as HTMLElement
      setLinkHovered(
        target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.classList.contains("hover-effect") ||
          target.parentElement?.classList.contains("hover-effect"),
      )

      // Create thunder effect more frequently on movement
      const now = Date.now()
      if (now - lastThunder > 800 && Math.random() > 0.85) {
        setShowThunder(true)
        setLastThunder(now)
        setThunderIntensity(Math.random() * 2 + 1) // Random intensity between 1-3
        setTimeout(() => setShowThunder(false), 150)
      }
    }

    const onMouseDown = () => {
      setClicked(true)
      // Always show thunder on click
      setShowThunder(true)
      setThunderIntensity(3) // Maximum intensity on click
      setTimeout(() => setShowThunder(false), 200)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    addEventListeners()

    // Show cursor after component mounts
    setTimeout(() => {
      setHidden(false)
    }, 1000)

    return () => removeEventListeners()
  }, [lastThunder])

  // Generate multiple lightning bolts for a more intense effect
  const generateLightning = () => {
    const bolts = []
    const numBolts = Math.floor(thunderIntensity * 2) // 2-6 bolts based on intensity

    for (let i = 0; i < numBolts; i++) {
      const startX = position.x + (Math.random() - 0.5) * 100 * thunderIntensity
      const startY = 0
      const endX = position.x
      const endY = position.y

      let path = `M${startX},${startY} `

      const segments = 8 + Math.floor(Math.random() * 5)
      const maxOffset = 30 * thunderIntensity

      for (let j = 1; j < segments; j++) {
        const y = startY + (endY - startY) * (j / segments)
        const xOffset = (Math.random() - 0.5) * maxOffset * 2
        path += `L${startX + xOffset},${y} `
      }

      path += `L${endX},${endY}`

      const opacity = 0.6 + Math.random() * 0.4
      const strokeWidth = 1 + Math.random() * 3

      bolts.push(
        <path
          key={i}
          d={path}
          stroke={`hsl(${270 + Math.random() * 60}, 100%, 70%)`}
          strokeWidth={strokeWidth}
          fill="none"
          filter="url(#glow)"
          opacity={opacity}
        />,
      )

      // Add smaller branch lightning for more realism
      if (Math.random() > 0.5) {
        const branchPoint = Math.floor(segments * 0.3) + Math.floor(Math.random() * (segments * 0.4))
        const branchY = startY + (endY - startY) * (branchPoint / segments)
        const branchX = startX + (Math.random() - 0.5) * maxOffset * 2

        let branchPath = `M${branchX},${branchY} `

        const branchSegments = 3 + Math.floor(Math.random() * 3)
        const branchMaxOffset = maxOffset * 0.7
        const branchEndX = branchX + (Math.random() - 0.5) * 200
        const branchEndY = branchY + Math.random() * 200

        for (let j = 1; j < branchSegments; j++) {
          const y = branchY + (branchEndY - branchY) * (j / branchSegments)
          const xOffset = (Math.random() - 0.5) * branchMaxOffset * 2
          branchPath += `L${branchX + (branchEndX - branchX) * (j / branchSegments) + xOffset},${y} `
        }

        branchPath += `L${branchEndX},${branchEndY}`

        bolts.push(
          <path
            key={`branch-${i}`}
            d={branchPath}
            stroke={`hsl(${270 + Math.random() * 60}, 100%, 70%)`}
            strokeWidth={strokeWidth * 0.7}
            fill="none"
            filter="url(#glow)"
            opacity={opacity * 0.8}
          />,
        )
      }
    }

    return (
      <svg className="lightning" width="100%" height="100%">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {bolts}
      </svg>
    )
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.5 : 1})`,
          backgroundColor: showThunder ? "#c4b5fd" : "#a855f7",
          boxShadow: showThunder ? "0 0 20px 5px rgba(168, 85, 247, 0.8)" : "none",
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          width: linkHovered ? "60px" : "40px",
          height: linkHovered ? "60px" : "40px",
          borderColor: linkHovered ? "rgba(168, 85, 247, 0.8)" : "rgba(168, 85, 247, 0.5)",
          boxShadow: showThunder ? "0 0 30px 10px rgba(168, 85, 247, 0.4)" : "none",
        }}
      />
      {showThunder && generateLightning()}
    </>
  )
}

