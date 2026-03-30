import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 40
const CONNECTION_DISTANCE = 180
const SPEED = 0.3

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    function createParticles() {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(200, 120, 40, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210, 130, 50, ${p.opacity})`
        ctx.fill()
      }
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Soft wrapping
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20
      }
    }

    function loop() {
      update()
      draw()
      animationId = requestAnimationFrame(loop)
    }

    resize()
    createParticles()
    loop()

    // Resize on window resize and on DOM height changes
    const resizeObserver = new ResizeObserver(() => {
      const newHeight = document.documentElement.scrollHeight
      if (canvas.height !== newHeight || canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth
        canvas.height = newHeight
      }
    })
    resizeObserver.observe(document.body)

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
