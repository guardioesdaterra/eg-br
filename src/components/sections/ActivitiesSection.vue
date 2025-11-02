<template>
  <section id="activities" class="section section-animate py-20">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16 section-title-animate">
        <h2 class="section-title text-gradient mb-6">Nossas Atividades</h2>
        <p class="text-lg text-text-secondary max-w-3xl mx-auto">
          Ao longo de mais de uma década, desenvolvemos diversos projetos que combinam arte,
          educação e ativismo ambiental para fortalecer nossa comunidade.
        </p>
      </div>

      <!-- Featured Activity -->
      <div class="mb-16 activity-card-animate">
        <div class="glass-green p-8 md:p-12 rounded-3xl border border-nature/30">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Content -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="text-4xl">{{ featuredActivity.icon }}</div>
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-nature">
                    {{ featuredActivity.title }}
                  </h3>
                  <p class="text-nature/80 font-medium">Projeto Destaque</p>
                </div>
              </div>

              <p class="text-lg text-text-secondary leading-relaxed">
                {{ featuredActivity.description }}
              </p>

              <ul class="space-y-3">
                <li
                  v-for="highlight in featuredActivity.highlights"
                  :key="highlight"
                  class="flex items-start space-x-3"
                >
                  <svg class="w-5 h-5 text-nature mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-text-primary">{{ highlight }}</span>
                </li>
              </ul>

              <button class="btn-primary px-6 py-3 rounded-xl font-medium">
                Saiba Mais
              </button>
            </div>

            <!-- Visual Placeholder -->
            <div class="relative">
              <div class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-nature/20 to-water/20 flex items-center justify-center">
                <div class="text-center space-y-4">
                  <div class="text-6xl opacity-50">{{ featuredActivity.icon }}</div>
                  <p class="text-text-muted">Imagens do projeto</p>
                </div>
              </div>

              <!-- Floating Decorative Elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-nature/20 rounded-full animate-float"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-water/20 rounded-full animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Activities Grid -->
      <div class="activities-grid grid grid-responsive-2 gap-8 mb-16">
        <div
          v-for="activity in otherActivities"
          :key="activity.id"
          class="activity-card activity-card-animate group cursor-pointer"
          @click="scrollToGallery(activity.category)"
        >
          <div class="glass-card p-6 h-full">
            <!-- Icon and Title -->
            <div class="flex items-center space-x-3 mb-4">
              <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                {{ activity.icon }}
              </div>
              <h3 class="text-xl font-semibold text-text-primary group-hover:text-nature transition-colors duration-300">
                {{ activity.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-text-secondary mb-4 line-clamp-3">
              {{ activity.description }}
            </p>

            <!-- Key Highlights -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="highlight in activity.highlights.slice(0, 3)"
                :key="highlight"
                class="flex items-center space-x-2 text-sm text-text-muted"
              >
                <svg class="w-3 h-3 text-nature flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <!-- Call to Action -->
            <div class="flex items-center justify-between">
              <span class="text-nature text-sm font-medium group-hover:text-nature/80 transition-colors">
                Ver fotos
              </span>
              <svg class="w-4 h-4 text-nature group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Impact Statistics -->
      <div class="text-center section-title-animate">
        <div class="inline-flex flex-wrap justify-center gap-8 md:gap-12">
          <div
            v-for="(stat, index) in impactStats"
            :key="stat.label"
            class="text-center"
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

      <!-- Call to Action -->
      <div class="text-center mt-16 section-title-animate">
        <div class="glass-card p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gradient mb-4">
            Faça Parte da Mudança
          </h3>
          <p class="text-text-secondary mb-6">
            Junte-se a nós na proteção do meio ambiente através da arte,
            educação e ativismo climático. Cada ação faz a diferença.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary px-6 py-3 rounded-xl font-medium">
              Participar
            </button>
            <button class="btn-secondary px-6 py-3 rounded-xl font-medium">
              Apoiar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { useAnimations } from '@/composables/useAnimations'
import { activities, impactStats } from '@/assets/data/activities'

const { scrollToElement } = useSmoothScroll()

const featuredActivity = computed(() =>
  activities.find(activity => activity.featured) || activities[0]
)

const otherActivities = computed(() =>
  activities.filter(activity => !activity.featured)
)

const scrollToGallery = (category: string) => {
  scrollToElement('gallery')
}

// Animate statistics numbers
const { animateNumber } = useAnimations()

const animateStats = () => {
  const statElements = document.querySelectorAll('.impact-stats .text-gradient')
  statElements.forEach((element, index) => {
    if (element instanceof HTMLElement) {
      const text = element.textContent
      const number = parseInt(text?.replace(/\D/g, '') || '0')
      if (!isNaN(number)) {
        setTimeout(() => {
          animateNumber(element, number, 2)
        }, index * 200)
      }
    }
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Card hover animation */
.activity-card {
  transition: all 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-4px);
}

.activity-card .glass-card {
  transition: all 0.3s ease;
}

.activity-card:hover .glass-card {
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.1);
}

/* Featured activity gradient border */
.glass-green {
  position: relative;
  background: linear-gradient(135deg,
    rgba(0, 255, 136, 0.1),
    rgba(0, 255, 255, 0.05),
    rgba(255, 0, 255, 0.1)
  );
}

/* Floating elements animation */
@keyframes float-element {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
}

.animate-float {
  animation: float-element 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-element 5s ease-in-out infinite;
  animation-delay: 1s;
}

/* Button shimmer effect */
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .activity-card:hover {
    transform: none;
  }

  .glass-green {
    padding: 1.5rem;
  }
}
</style>