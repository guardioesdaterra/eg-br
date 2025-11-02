<template>
  <div class="newsletter-container">
    <div class="glass-card p-8 max-w-4xl mx-auto text-center">
      <!-- Newsletter Header -->
      <div class="mb-8">
        <h3 class="text-3xl font-bold text-gradient mb-4">
          Junte-se ao Movimento
        </h3>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          Receba atualizações sobre nossos eventos, projetos e como você pode
          participar da transformação ambiental em Águas da Prata.
        </p>
      </div>

      <!-- Newsletter Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Seu nome completo"
            class="glass-input w-full px-6 py-4 rounded-xl text-lg"
          />
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="Seu melhor e-mail"
            class="glass-input w-full px-6 py-4 rounded-xl text-lg"
          />
        </div>

        <!-- Interest Areas -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-text-primary mb-3">
            Áreas de Interesse (opcional)
          </label>
          <div class="flex flex-wrap justify-center gap-3">
            <label
              v-for="interest in interests"
              :key="interest.id"
              class="interest-checkbox"
            >
              <input
                type="checkbox"
                :value="interest.id"
                v-model="form.interests"
                class="sr-only"
              />
              <span class="checkbox-label">
                {{ interest.icon }} {{ interest.label }}
              </span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover-lift disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
        >
          <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
            <span>Receber Atualizações</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span v-else class="flex items-center justify-center space-x-2">
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Inscrevendo...</span>
          </span>
        </button>
      </form>

      <!-- Privacy Notice -->
      <p class="text-sm text-text-muted mt-6">
        Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
        Ao se inscrever, você concorda com nossa política de privacidade.
      </p>

      <!-- Success Message -->
      <div
        v-if="showSuccessMessage"
        class="mt-8 p-6 bg-nature/20 border border-nature/50 rounded-xl text-center animate-slide-up"
      >
        <div class="text-4xl mb-3">🎉</div>
        <h4 class="text-xl font-semibold text-nature mb-2">
          Bem-vindo ao Movimento!
        </h4>
        <p class="text-text-secondary">
          Obrigado por se juntar aos Guardiões da Terra. Verifique seu e-mail
          para confirmar a inscrição e receber nossas atualizações.
        </p>
      </div>

      <!-- Social Links -->
      <div class="mt-12">
        <p class="text-sm text-text-muted mb-4">Siga-nos nas redes sociais</p>
        <div class="flex justify-center space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link w-12 h-12 glass-card rounded-full flex items-center justify-center hover-lift"
            :title="social.name"
          >
            <span class="text-xl">{{ social.icon }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface FormData {
  name: string
  email: string
  interests: string[]
}

interface Interest {
  id: string
  label: string
  icon: string
}

interface SocialLink {
  name: string
  icon: string
  url: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  interests: []
})

const interests: Interest[] = [
  { id: 'music', label: 'Oficinas de Música', icon: '🎵' },
  { id: 'environmental', label: 'Projetos Ambientais', icon: '🌳' },
  { id: 'events', label: 'Eventos Culturais', icon: '🎭' },
  { id: 'education', label: 'Educação', icon: '📚' },
  { id: 'volunteering', label: 'Voluntariado', icon: '🤝' },
  { id: 'climate', label: 'Ativismo Climático', icon: '🌍' }
]

const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'YouTube', icon: '📺', url: '#' },
  { name: 'WhatsApp', icon: '💬', url: '#' }
]

const isSubmitting = ref(false)
const showSuccessMessage = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message
    showSuccessMessage.value = true

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      interests: []
    })

    // Hide success message after 8 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 8000)

  } catch (error) {
    console.error('Newsletter signup error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.newsletter-container {
  position: relative;
}

/* Custom checkbox styling */
.interest-checkbox {
  cursor: pointer;
}

.interest-checkbox input[type="checkbox"]:checked + .checkbox-label {
  background: rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.5);
  color: #00ff88;
  transform: scale(1.05);
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  space-x: 2px;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.875rem;
}

.checkbox-label:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.02);
}

/* Social link animations */
.social-link {
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  border-color: rgba(0, 255, 136, 0.5);
  box-shadow: 0 10px 25px rgba(0, 255, 136, 0.3);
}

/* Success message animation */
@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}

/* Button shimmer effect */
.btn-primary::before {
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

.btn-primary:hover::before {
  left: 100%;
}
</style>