<template>
  <section id="gallery" class="section section-animate py-20">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16 section-title-animate">
        <h2 class="section-title text-gradient mb-6">Galeria de Momentos</h2>
        <p class="text-lg text-text-secondary max-w-3xl mx-auto">
          Uma jornada visual através de nossos 10+ anos de atividades,
          eventos e o impacto que geramos na comunidade.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="gallery-filters mb-12 section-title-animate">
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button
            v-for="category in galleryCategories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="[
              'gallery-filter-tab px-6 py-3 rounded-full font-medium transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-nature text-black shadow-glow-nature'
                : 'glass-card text-text-primary hover:text-nature hover:border-nature/50'
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Category Description -->
        <p class="text-center text-text-muted max-w-2xl mx-auto">
          {{ currentCategory.description }}
        </p>
      </div>

      <!-- Featured Images Row -->
      <div
        v-if="featuredImages.length > 0"
        class="gallery-featured mb-12 section-title-animate"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Main Featured Image -->
          <div class="md:col-span-2">
            <div
              class="gallery-item gallery-item-animate aspect-video rounded-2xl overflow-hidden cursor-pointer group"
              @click="selectImage(featuredImages[0])"
            >
              <div class="relative w-full h-full">
                <img
                  :src="getImagePath(featuredImages[0])"
                  :alt="featuredImages[0].title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  @load="markImageLoaded(featuredImages[0].id)"
                />

                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <h3 class="text-xl font-semibold text-white mb-2">
                      {{ featuredImages[0].title }}
                    </h3>
                    <p class="text-white/80 text-sm">
                      {{ featuredImages[0].description }}
                    </p>
                  </div>
                </div>

                <!-- Loading State -->
                <div
                  v-if="!isImageLoaded(featuredImages[0].id)"
                  class="absolute inset-0 skeleton"
                />
              </div>
            </div>
          </div>

          <!-- Side Featured Images -->
          <div class="space-y-6">
            <div
              v-for="(image, index) in featuredImages.slice(1, 3)"
              :key="image.id"
              class="gallery-item gallery-item-animate aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              :style="{ animationDelay: `${index * 100}ms` }"
              @click="selectImage(image)"
            >
              <div class="relative w-full h-full">
                <img
                  :src="getImagePath(image)"
                  :alt="image.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  @load="markImageLoaded(image.id)"
                />

                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-0 left-0 right-0 p-4">
                    <h4 class="text-lg font-semibold text-white">
                      {{ image.title }}
                    </h4>
                  </div>
                </div>

                <!-- Loading State -->
                <div
                  v-if="!isImageLoaded(image.id)"
                  class="absolute inset-0 skeleton"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid grid grid-responsive gap-6 mb-12">
        <div
          v-for="(image, index) in paginatedImages"
          :key="image.id"
          class="gallery-item gallery-item-animate aspect-square rounded-xl overflow-hidden cursor-pointer group"
          :style="{ animationDelay: `${index * 50}ms` }"
          @click="selectImage(image)"
        >
          <div class="relative w-full h-full">
            <img
              :src="getImagePath(image)"
              :alt="image.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              @load="markImageLoaded(image.id)"
            />

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white p-4">
                <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <p class="text-sm font-medium">Ver detalhes</p>
              </div>
            </div>

            <!-- Image Badge -->
            <div class="absolute top-4 right-4">
              <div class="glass-card px-3 py-1 rounded-full text-xs text-nature font-medium">
                {{ currentCategory.name }}
              </div>
            </div>

            <!-- Loading State -->
            <div
              v-if="!isImageLoaded(image.id)"
              class="absolute inset-0 skeleton"
            />
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div
        v-if="hasMoreImages"
        class="text-center section-title-animate"
      >
        <button
          @click="loadMoreImages"
          class="btn-primary px-8 py-4 rounded-xl font-medium hover-lift"
        >
          <span class="flex items-center space-x-2">
            <span>Carregar Mais Fotos</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
        @keydown="handleKeydown"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        <!-- Lightbox Content -->
        <div class="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center" @click.stop>
          <!-- Close Button -->
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/80 hover:text-white z-10"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Navigation Buttons -->
          <button
            @click="previousImage"
            class="absolute left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:text-nature transition-colors z-10"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            @click="nextImage"
            class="absolute right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:text-nature transition-colors z-10"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Image Container -->
          <div class="relative w-full h-full flex items-center justify-center">
            <img
              :src="getImagePath(selectedImage)"
              :alt="selectedImage.title"
              class="max-w-full max-h-full object-contain rounded-lg"
            />

            <!-- Image Info -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 class="text-2xl font-bold text-white mb-2">
                {{ selectedImage.title }}
              </h3>
              <p class="text-white/80 mb-2">
                {{ selectedImage.description }}
              </p>
              <div class="flex items-center space-x-4 text-sm text-white/60">
                <span v-if="selectedImage.date">{{ selectedImage.date }}</span>
                <span>•</span>
                <span>{{ currentCategory.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useGallery } from '@/composables/useGallery'

const {
  selectedCategory,
  selectedImage,
  currentCategory,
  featuredImages,
  paginatedImages,
  hasMoreImages,
  galleryCategories,
  selectCategory,
  loadMoreImages,
  selectImage,
  closeLightbox,
  previousImage,
  nextImage,
  markImageLoaded,
  isImageLoaded,
  getImagePath,
  handleKeydown
} = useGallery()

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Gallery item animations */
.gallery-item-animate {
  opacity: 0;
  transform: scale(0.9);
  animation: scaleIn 0.5s ease-out forwards;
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Lightbox animations */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Filter tab hover effects */
.gallery-filter-tab {
  position: relative;
  overflow: hidden;
}

.gallery-filter-tab::before {
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

.gallery-filter-tab:hover::before {
  left: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-featured .grid {
    grid-template-columns: 1fr;
  }

  .gallery-featured .md\\:col-span-2 {
    grid-column: span 1;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
}

/* Skeleton loading animation */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
</style>