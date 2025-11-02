<template>
  <div class="particle-system" ref="particleContainer">
    <canvas
      ref="canvas"
      :width="canvasSize.width"
      :height="canvasSize.height"
      class="absolute inset-0 pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  targetX?: number
  targetY?: number
}

const canvas = ref<HTMLCanvasElement>()
const particleContainer = ref<HTMLElement>()
const canvasSize = ref({ width: 0, height: 0 })
const particles = ref<Particle[]>([])
const animationId = ref<number>()
const mouseX = ref(0)
const mouseY = ref(0)

// Colors for particles
const particleColors = [
  'rgba(0, 255, 136, 0.6)',  // Nature green
  'rgba(0, 255, 255, 0.6)',  // Water blue
  'rgba(255, 0, 255, 0.6)',  // Arts purple
  'rgba(255, 255, 255, 0.4)'  // White
]

const createParticle = (x?: number, y?: number): Particle => {
  const canvasEl = canvas.value
  if (!canvasEl) {
    return {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: 2,
      color: particleColors[0],
      alpha: 0.6
    }
  }

  return {
    x: x !== undefined ? x : Math.random() * canvasEl.width,
    y: y !== undefined ? y : Math.random() * canvasEl.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 3 + 1,
    color: particleColors[Math.floor(Math.random() * particleColors.length)],
    alpha: Math.random() * 0.6 + 0.2
  }
}

const initParticles = () => {
  const particleCount = window.innerWidth < 768 ? 30 : 60
  particles.value = Array.from({ length: particleCount }, () => createParticle())
}

const updateCanvasSize = () => {
  if (!particleContainer.value) return

  const rect = particleContainer.value.getBoundingClientRect()
  canvasSize.value = {
    width: rect.width,
    height: rect.height
  }

  if (canvas.value) {
    canvas.value.width = rect.width
    canvas.value.height = rect.height
  }
}

const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
  ctx.save()
  ctx.globalAlpha = particle.alpha
  ctx.fillStyle = particle.color
  ctx.beginPath()
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
  ctx.fill()

  // Add glow effect
  ctx.shadowBlur = 10
  ctx.shadowColor = particle.color
  ctx.fill()
  ctx.restore()
}

const connectParticles = (ctx: CanvasRenderingContext2D) => {
  const maxDistance = 120

  for (let i = 0; i < particles.value.length; i++) {
    for (let j = i + 1; j < particles.value.length; j++) {
      const p1 = particles.value[i]
      const p2 = particles.value[j]
      const distance = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
      )

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.3
        ctx.save()
        ctx.globalAlpha = opacity
        ctx.strokeStyle = p1.color
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
        ctx.restore()
      }
    }
  }
}

const updateParticle = (particle: Particle) => {
  const canvasEl = canvas.value
  if (!canvasEl) return

  // Mouse interaction
  const dx = mouseX.value - particle.x
  const dy = mouseY.value - particle.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  const maxDistance = 100

  if (distance < maxDistance) {
    const force = (1 - distance / maxDistance) * 0.5
    particle.vx -= (dx / distance) * force
    particle.vy -= (dy / distance) * force
  }

  // Update position
  particle.x += particle.vx
  particle.y += particle.vy

  // Apply friction
  particle.vx *= 0.99
  particle.vy *= 0.99

  // Bounce off edges
  if (particle.x <= particle.radius || particle.x >= canvasEl.width - particle.radius) {
    particle.vx = -particle.vx
    particle.x = Math.max(particle.radius, Math.min(canvasEl.width - particle.radius, particle.x))
  }

  if (particle.y <= particle.radius || particle.y >= canvasEl.height - particle.radius) {
    particle.vy = -particle.vy
    particle.y = Math.max(particle.radius, Math.min(canvasEl.height - particle.radius, particle.y))
  }

  // Add some random movement
  particle.vx += (Math.random() - 0.5) * 0.01
  particle.vy += (Math.random() - 0.5) * 0.01

  // Limit velocity
  const maxVelocity = 2
  const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
  if (velocity > maxVelocity) {
    particle.vx = (particle.vx / velocity) * maxVelocity
    particle.vy = (particle.vy / velocity) * maxVelocity
  }
}

const animate = () => {
  const canvasEl = canvas.value
  if (!canvasEl) return

  const ctx = canvasEl.getContext('2d')
  if (!ctx) return

  // Clear canvas
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)

  // Update and draw particles
  particles.value.forEach(particle => {
    updateParticle(particle)
    drawParticle(ctx, particle)
  })

  // Connect nearby particles
  connectParticles(ctx)

  animationId.value = requestAnimationFrame(animate)
}

const handleMouseMove = (event: MouseEvent) => {
  if (!particleContainer.value) return

  const rect = particleContainer.value.getBoundingClientRect()
  mouseX.value = event.clientX - rect.left
  mouseY.value = event.clientY - rect.top
}

const handleResize = () => {
  updateCanvasSize()
  initParticles()
}

onMounted(async () => {
  await nextTick()
  updateCanvasSize()
  initParticles()
  animate()

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }

  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.particle-system {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

canvas {
  display: block;
}
</style>