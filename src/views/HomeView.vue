<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Timeline Section -->
    <section id="timeline" class="section section-animate py-20">
      <div class="container">
        <div class="text-center mb-16 section-title-animate">
          <h2 class="section-title text-gradient mb-6">Nossa História</h2>
          <p class="text-lg text-text-secondary max-w-3xl mx-auto">
            Uma jornada de 10 anos de ativismo ambiental, arte e transformação social
            em Águas da Prata. Cada marco representa nosso compromisso com um futuro mais sustentável.
          </p>
        </div>
        <Timeline />
      </div>
    </section>

    <!-- Activities Section -->
    <ActivitiesSection />

    <!-- Gallery Section -->
    <GallerySection />

    <!-- Newsletter Section -->
    <section id="newsletter" class="section section-animate py-20">
      <div class="container">
        <NewsletterSignup />
      </div>
    </section>

    <!-- Contact Section -->
    <ContactSection />

    <!-- Floating Scroll Indicator -->
    <div
      v-if="showScrollIndicator"
      class="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-nature animate-bounce scroll-indicator z-40"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ActivitiesSection from '@/components/sections/ActivitiesSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Timeline from '@/components/ui/Timeline.vue'
import NewsletterSignup from '@/components/ui/NewsletterSignup.vue'

const showScrollIndicator = ref(true)

// Hide scroll indicator when user starts scrolling
const handleScroll = () => {
  if (window.scrollY > 100) {
    showScrollIndicator.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.home {
  position: relative;
}
</style>