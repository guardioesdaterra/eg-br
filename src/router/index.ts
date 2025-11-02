import { createRouter, createWebHistory } from 'vue-router'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Guardiões da Terra - Arte, Meio Ambiente e Ativismo Climático'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    // Smooth scroll to anchor if exists
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    // Scroll to top
    return { top: 0, behavior: 'smooth' }
  }
})

// Update document title and enable smooth scrolling
router.afterEach((to) => {
  // Update document title
  document.title = to.meta?.title as string || 'Guardiões da Terra'

  // Initialize smooth scrolling for the new page
  const { initSmoothScrolling } = useSmoothScroll()
  setTimeout(() => {
    initSmoothScrolling()
  }, 100)
})

export default router