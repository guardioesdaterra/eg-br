<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden section section-animate">
    <!-- Background Gradient Overlay -->
    <div class="absolute inset-0 gradient-overlay opacity-30" />

    <!-- Animated Glass Orbs -->
    <div class="glass-orb glass-orb-1 parallax-element" data-parallax-speed="0.3"></div>
    <div class="glass-orb glass-orb-2 parallax-element" data-parallax-speed="0.5"></div>
    <div class="glass-orb glass-orb-3 parallax-element" data-parallax-speed="0.2"></div>
    <div class="glass-orb glass-orb-4 parallax-element" data-parallax-speed="0.4"></div>

    <!-- Main Content -->
    <div class="container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Organization Logo -->
        <div class="mb-8 animate-float">
          <div class="w-24 h-24 mx-auto bg-gradient-to-br from-nature via-water to-arts rounded-full flex items-center justify-center text-5xl shadow-glow-nature animate-glow">
            🌿
          </div>
        </div>

        <!-- Main Title -->
        <h1 class="hero-title text-gradient font-bold mb-6 text-shadow parallax-element" data-parallax-speed="0.6">
          Guardiões da Terra
        </h1>

        <!-- Tagline -->
        <p class="hero-subtitle text-xl text-text-secondary mb-8 max-w-2xl mx-auto parallax-element" data-parallax-speed="0.7">
          Arte, Meio Ambiente e Ativismo Climático desde 2014
        </p>

        <!-- Location Badge -->
        <div class="mb-12 parallax-element" data-parallax-speed="0.8">
          <div class="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <svg class="w-5 h-5 text-nature" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span class="text-text-primary font-medium">Águas da Prata, SP</span>
          </div>
        </div>

        <!-- Call-to-Action Buttons -->
        <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center parallax-element" data-parallax-speed="0.9">
          <button
            @click="scrollToSection('activities')"
            class="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-lift"
          >
            <span class="flex items-center space-x-2">
              <span>Nossas Atividades</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>

          <button
            @click="scrollToSection('gallery')"
            class="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover-lift"
          >
            <span class="flex items-center space-x-2">
              <span>Galeria de Fotos</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Key Statistics -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 parallax-element" data-parallax-speed="0.4">
          <div
            v-for="(stat, index) in impactStats"
            :key="stat.label"
            class="text-center animate-fade-in"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="text-3xl md:text-4xl font-bold text-gradient mb-2">
              {{ stat.number }}
            </div>
            <div class="text-sm text-text-muted">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        @click="scrollToSection('activities')"
        class="text-nature hover:text-nature/80 transition-colors"
        aria-label="Rolar para atividades"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-2 h-2 bg-nature rounded-full animate-pulse opacity-60"></div>
    <div class="absolute top-40 right-20 w-3 h-3 bg-water rounded-full animate-pulse opacity-60" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-40 left-20 w-2 h-2 bg-arts rounded-full animate-pulse opacity-60" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-60 right-10 w-4 h-4 bg-nature rounded-full animate-pulse opacity-60" style="animation-delay: 0.5s;"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { useAnimations } from '@/composables/useAnimations'
import { impactStats } from '@/assets/data/activities'

const { scrollToElement } = useSmoothScroll()
const { animateNumber } = useAnimations()

const scrollToSection = (sectionId: string) => {
  scrollToElement(sectionId)
}

onMounted(() => {
  // Animate statistics numbers
  setTimeout(() => {
    const statElements = document.querySelectorAll('.hero-buttons + .grid .text-gradient')
    statElements.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        const text = element.textContent
        const number = parseInt(text?.replace(/\D/g, '') || '0')
        if (!isNaN(number)) {
          animateNumber(element, number, 2)
        }
      }
    })
  }, 1500)
})
</script>

<style scoped>
.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  line-height: 1.6;
}

/* Glass orb animations */
.glass-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(15px);
  filter: blur(0.5px);
  opacity: 0.7;
  animation: float-smooth 8s ease-in-out infinite;
}

.glass-orb-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.glass-orb-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
  background: radial-gradient(circle at 30% 30%,
    rgba(0, 255, 136, 0.15),
    rgba(0, 255, 136, 0.05)
  );
}

.glass-orb-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
  background: radial-gradient(circle at 30% 30%,
    rgba(0, 255, 255, 0.15),
    rgba(0, 255, 255, 0.05)
  );
}

.glass-orb-4 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 30%;
  animation-delay: 6s;
  background: radial-gradient(circle at 30% 30%,
    rgba(255, 0, 255, 0.15),
    rgba(255, 0, 255, 0.05)
  );
}

@keyframes float-smooth {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(10px) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-10px) translateX(5px) rotate(270deg);
  }
}

/* Button hover effects */
.btn-primary,
.btn-secondary {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-primary::before,
.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-primary:hover::before,
.btn-secondary:hover::before {
  left: 100%;
}

/* Decorative dots animation */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.absolute > div[style*="animation-delay"] {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .glass-orb {
    opacity: 0.4;
  }

  .glass-orb-1 {
    width: 80px;
    height: 80px;
  }

  .glass-orb-2 {
    width: 60px;
    height: 60px;
  }

  .glass-orb-3 {
    width: 100px;
    height: 100px;
  }

  .glass-orb-4 {
    width: 40px;
    height: 40px;
  }
}
</style>