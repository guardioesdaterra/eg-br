<template>
  <nav class="nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300"
       :class="{ 'bg-black/90 backdrop-blur-lg': isScrolled }">
    <!-- Desktop Navigation -->
    <div class="nav-desktop container">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-br from-nature to-water rounded-full flex items-center justify-center text-black font-bold text-lg">
          🌿
        </div>
        <span class="text-xl font-semibold text-gradient">Guardiões da Terra</span>
      </div>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-8">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="nav-link text-lg font-medium transition-all duration-300 hover:text-nature"
          :class="{ 'text-nature active': activeSection === item.id }"
          @click="handleNavClick(item.id)"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Side Dots Navigation -->
      <div class="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div class="flex flex-col space-y-4">
          <button
            v-for="item in navItems"
            :key="item.id"
            :class="[
              'w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125',
              activeSection === item.id
                ? 'bg-nature border-nature shadow-glow-nature'
                : 'bg-transparent border-white/30 hover:border-white/60'
            ]"
            @click="scrollToSection(item.id)"
            :title="item.name"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="nav-mobile">
      <!-- Logo and Menu Button -->
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-nature to-water rounded-full flex items-center justify-center text-black font-bold text-lg">
            🌿
          </div>
          <span class="text-lg font-semibold text-gradient">Guardiões</span>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="glass-card p-3 touch-target"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <div class="w-6 h-5 relative">
            <span
              v-for="i in 3"
              :key="i"
              class="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300"
              :class="getMobileMenuLineClass(i)"
            />
          </div>
        </button>
      </div>

      <!-- Mobile Menu Drawer -->
      <div
        class="mobile-menu"
        :class="{ active: isMobileMenuOpen }"
      >
        <!-- Close Button -->
        <button
          class="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          @click="toggleMobileMenu"
          aria-label="Close navigation menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Mobile Navigation Links -->
        <div class="flex flex-col space-y-6 mt-20">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            class="text-xl font-medium text-white/90 hover:text-nature transition-colors duration-300"
            :class="{ 'text-nature': activeSection === item.id }"
            @click="handleMobileNavClick(item.id)"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Menu Footer -->
        <div class="absolute bottom-8 left-8 right-8">
          <div class="glass-card p-4 text-center">
            <p class="text-sm text-text-muted mb-2">Conectando arte e natureza</p>
            <div class="flex justify-center space-x-4">
              <a
                href="https://bit.ly/site-guardioes"
                target="_blank"
                rel="noopener noreferrer"
                class="text-nature hover:text-nature/80 transition-colors"
                title="Website"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="toggleMobileMenu"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const { scrollToElement, getActiveSection } = useSmoothScroll()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', name: 'Início', href: '#hero' },
  { id: 'timeline', name: 'História', href: '#timeline' },
  { id: 'activities', name: 'Atividades', href: '#activities' },
  { id: 'gallery', name: 'Galeria', href: '#gallery' },
  { id: 'newsletter', name: 'Newsletter', href: '#newsletter' },
  { id: 'contact', name: 'Contato', href: '#contact' }
]

// Handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const newActiveSection = getActiveSection(navItems.map(item => item.id))
  if (newActiveSection) {
    activeSection.value = newActiveSection
  }
}

// Navigation click handlers
const handleNavClick = (sectionId: string) => {
  scrollToElement(sectionId)
}

const handleMobileNavClick = (sectionId: string) => {
  scrollToElement(sectionId)
  toggleMobileMenu()
}

const scrollToSection = (sectionId: string) => {
  scrollToElement(sectionId)
}

// Mobile menu toggle
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Mobile menu line animation classes
const getMobileMenuLineClass = (lineIndex: number) => {
  if (!isMobileMenuOpen.value) {
    return ['top-0', 'top-2', 'top-4'][lineIndex - 1]
  }

  switch (lineIndex) {
    case 1:
      return 'top-2 rotate-45'
    case 2:
      return 'opacity-0'
    case 3:
      return 'top-2 -rotate-45'
    default:
      return ''
  }
}

// Close mobile menu on escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    toggleMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  // Reset body overflow
  document.body.style.overflow = ''
})
</script>

<style scoped>
.nav-glass {
  transition: all 0.3s ease;
}

/* Side dots animation */
.nav-desktop button {
  transition: all 0.3s ease;
}

.nav-desktop button:hover {
  transform: scale(1.25);
}

/* Mobile menu drawer slide animation */
.mobile-menu {
  will-change: transform;
}

.mobile-menu.active {
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Mobile menu lines */
.nav-desktop .nav-link {
  position: relative;
  overflow: hidden;
}

.nav-desktop .nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #00ff88, #00ffff);
  transition: width 0.3s ease;
}

.nav-desktop .nav-link:hover::after,
.nav-desktop .nav-link.active::after {
  width: 100%;
}

/* Logo gradient animation */
.text-gradient {
  background: linear-gradient(135deg, #00ff88, #00ffff, #ff00ff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>