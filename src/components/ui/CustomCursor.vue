<template>
  <div class="custom-cursor" ref="cursor">
    <div class="cursor-dot" ref="cursorDot"></div>
    <div class="cursor-ring" ref="cursorRing"></div>
    <div class="cursor-trail" v-for="i in 5" :key="i" :ref="el => cursorTrails[i-1] = el as HTMLElement"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement>()
const cursorDot = ref<HTMLElement>()
const cursorRing = ref<HTMLElement>()
const cursorTrails = ref<HTMLElement[]>([])

const mousePosition = ref({ x: 0, y: 0 })
const targetPosition = ref({ x: 0, y: 0 })
const isHovering = ref(false)

const updateCursorPosition = (e: MouseEvent) => {
  mousePosition.value = { x: e.clientX, y: e.clientY }
  targetPosition.value = { x: e.clientX, y: e.clientY }
}

const updateCursorElements = () => {
  if (!cursorDot.value || !cursorRing.value) return

  // Update dot position (instant)
  cursorDot.value.style.left = `${mousePosition.value.x}px`
  cursorDot.value.style.top = `${mousePosition.value.y}px`

  // Update ring position (smooth)
  cursorRing.value.style.left = `${mousePosition.value.x}px`
  cursorRing.value.style.top = `${mousePosition.value.y}px`

  // Update trails
  cursorTrails.value.forEach((trail, index) => {
    if (!trail) return

    const delay = (index + 1) * 0.05
    const x = mousePosition.value.x - (targetPosition.value.x - mousePosition.value.x) * delay
    const y = mousePosition.value.y - (targetPosition.value.y - mousePosition.value.y) * delay

    trail.style.left = `${x}px`
    trail.style.top = `${y}px`
    trail.style.opacity = (1 - index * 0.15).toString()
  })
}

const handleMouseEnter = (element: HTMLElement) => {
  isHovering.value = true
  if (cursorRing.value) {
    cursorRing.value.style.transform = 'translate(-50%, -50%) scale(1.5)'
    cursorRing.value.style.borderColor = 'rgba(0, 255, 136, 0.8)'
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
  if (cursorRing.value) {
    cursorRing.value.style.transform = 'translate(-50%, -50%) scale(1)'
    cursorRing.value.style.borderColor = 'rgba(255, 255, 255, 0.5)'
  }
}

const animate = () => {
  // Smooth following animation
  const ease = 0.15
  targetPosition.value.x += (mousePosition.value.x - targetPosition.value.x) * ease
  targetPosition.value.y += (mousePosition.value.y - targetPosition.value.y) * ease

  updateCursorElements()
  requestAnimationFrame(animate)
}

const setupInteractiveElements = () => {
  const interactiveElements = document.querySelectorAll('a, button, .activity-card, .gallery-item, .partner-card')

  interactiveElements.forEach(element => {
    const htmlElement = element as HTMLElement
    htmlElement.addEventListener('mouseenter', () => handleMouseEnter(htmlElement))
    htmlElement.addEventListener('mouseleave', handleMouseLeave)
  })
}

onMounted(() => {
  // Hide default cursor
  document.body.style.cursor = 'none'

  // Set initial positions
  if (cursorDot.value && cursorRing.value) {
    cursorDot.value.style.left = '0px'
    cursorDot.value.style.top = '0px'
    cursorRing.value.style.left = '0px'
    cursorRing.value.style.top = '0px'

    cursorRing.value.style.transform = 'translate(-50%, -50%)'
  }

  // Initialize trails
  cursorTrails.value.forEach(trail => {
    if (trail) {
      trail.style.transform = 'translate(-50%, -50%)'
    }
  })

  // Event listeners
  window.addEventListener('mousemove', updateCursorPosition)

  // Setup interactive elements
  setupInteractiveElements()

  // Watch for DOM changes
  const observer = new MutationObserver(() => {
    setupInteractiveElements()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })

  // Start animation loop
  animate()
})

onUnmounted(() => {
  // Restore default cursor
  document.body.style.cursor = 'auto'

  // Clean up event listeners
  window.removeEventListener('mousemove', updateCursorPosition)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

.cursor-dot {
  position: fixed;
  width: 4px;
  height: 4px;
  background: #00ff88;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
}

.cursor-ring {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.cursor-trail {
  position: fixed;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.05s ease;
}

/* Hide on mobile devices */
@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>