import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'

// Import styles
import './assets/styles/glassmorphism.css'
import './assets/styles/animations.css'
import './assets/styles/responsive.css'
import './assets/styles/main.css'

const app = createApp(App)

// Plugins
app.use(createPinia())
app.use(router)
app.use(VueLazyload, {
  preLoad: 1.3,
  error: '/placeholder-error.jpg',
  loading: '/placeholder-loading.jpg',
  attempt: 1,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

app.mount('#app')