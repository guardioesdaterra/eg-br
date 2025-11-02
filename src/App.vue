<template>
  <div id="app" class="min-h-screen bg-black text-white">
    <!-- Custom Cursor -->
    <CustomCursor />

    <!-- Particle System (Background) -->
    <div class="fixed inset-0 pointer-events-none">
      <ParticleSystem />
    </div>

    <!-- Navigation -->
    <Navigation />

    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-50">
      <div
        ref="progressBar"
        class="h-full bg-gradient-to-r from-nature via-water to-arts transition-all duration-300"
        style="width: 0%"
      />
    </div>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Background Elements -->
    <div class="fixed inset-0 pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="glass-orb glass-orb-1"></div>
      <div class="glass-orb glass-orb-2"></div>
      <div class="glass-orb glass-orb-3"></div>
      <div class="glass-orb glass-orb-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from '@/components/common/Navigation.vue'

const progressBar = ref<HTMLElement>()

// Scroll progress
const updateProgressBar = () => {
  if (!progressBar.value) return

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollProgress = (scrollTop / scrollHeight) * 100

  progressBar.value.style.width = `${Math.min(scrollProgress, 100)}%`
}

onMounted(() => {
  window.addEventListener('scroll', updateProgressBar)
  updateProgressBar()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgressBar)
})
</script>

<style>
#app {
  position: relative;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #00ff88, #00ffff);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #00ffaa, #00ffff);
}
</style>