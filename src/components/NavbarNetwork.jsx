import { useEffect, useRef } from 'react'

// Static neural network pattern — generated once, drawn once
const nodes = [
  { x: 0.05, y: 0.3, r: 8 },
  { x: 0.12, y: 0.7, r: 12 },
  { x: 0.18, y: 0.2, r: 6 },
  { x: 0.25, y: 0.8, r: 10 },
  { x: 0.30, y: 0.4, r: 14 },
  { x: 0.38, y: 0.15, r: 7 },
  { x: 0.42, y: 0.65, r: 11 },
  { x: 0.48, y: 0.35, r: 9 },
  { x: 0.55, y: 0.75, r: 13 },
  { x: 0.60, y: 0.2, r: 8 },
  { x: 0.65, y: 0.55, r: 10 },
  { x: 0.72, y: 0.8, r: 7 },
  { x: 0.78, y: 0.3, r: 12 },
  { x: 0.83, y: 0.65, r: 6 },
  { x: 0.88, y: 0.15, r: 9 },
  { x: 0.93, y: 0.5, r: 11 },
  { x: 0.97, y: 0.8, r: 8 },
]

const CONNECTION_DIST = 0.2

export default function NavbarNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.parentElement.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    canvas.width = w * 2  // retina
    canvas.height = h * 2
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'

    const ctx = canvas.getContext('2d')
    ctx.scale(2, 2)

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECTION_DIST) {
          ctx.beginPath()
          ctx.moveTo(nodes[i].x * w, nodes[i].y * h)
          ctx.lineTo(nodes[j].x * w, nodes[j].y * h)
          ctx.strokeStyle = 'rgba(200, 125, 50, 0.12)'
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }

    // Draw nodes
    for (const n of nodes) {
      const px = n.x * w
      const py = n.y * h
      const grad = ctx.createRadialGradient(px, py, 0, px, py, n.r)
      grad.addColorStop(0, 'rgba(220, 145, 55, 0.2)')
      grad.addColorStop(0.4, 'rgba(200, 120, 40, 0.12)')
      grad.addColorStop(1, 'rgba(180, 100, 30, 0)')
      ctx.beginPath()
      ctx.arc(px, py, n.r, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
