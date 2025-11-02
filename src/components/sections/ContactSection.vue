<template>
  <section id="contact" class="section section-animate py-20">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16 section-title-animate">
        <h2 class="section-title text-gradient mb-6">Entre em Contato</h2>
        <p class="text-lg text-text-secondary max-w-3xl mx-auto">
          Faça parte da mudança e contribua para um futuro mais sustentável.
          Cada ação, por menor que seja, faz a diferença na proteção do nosso planeta.
        </p>
      </div>

      <!-- Contact Content -->
      <div class="contact-layout grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Contact Information -->
        <div class="section-title-animate">
          <div class="glass-card p-8 h-full">
            <h3 class="text-2xl font-bold text-nature mb-6">Informações de Contato</h3>

            <!-- Location -->
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-nature/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-nature" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary mb-1">Localização</h4>
                  <p class="text-text-secondary">
                    Sede: SOS Águas da Prata<br>
                    Rua Principal, 123 - Centro<br>
                    Águas da Prata, SP - Brasil
                  </p>
                </div>
              </div>

              <!-- Website -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-water/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-water" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary mb-1">Website</h4>
                  <a
                    href="https://bit.ly/site-guardioes"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-nature hover:text-nature/80 transition-colors"
                  >
                    bit.ly/site-guardioes
                  </a>
                </div>
              </div>

              <!-- Main Partner -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-arts/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-arts" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary mb-1">Parceiro Principal</h4>
                  <p class="text-text-secondary mb-2">
                    SOS Águas da Prata - Fundada em 1968
                  </p>
                  <a
                    href="https://aguasdapratasos.wixstudio.com/2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-nature hover:text-nature/80 transition-colors text-sm"
                  >
                    Visitar site do parceiro →
                  </a>
                </div>
              </div>

              <!-- Contact Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-nature/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-nature" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary mb-1">Parcerias</h4>
                  <a
                    href="mailto:parcerias@guardioesdaterra.com"
                    class="text-nature hover:text-nature/80 transition-colors"
                  >
                    parcerias@guardioesdaterra.com
                  </a>
                </div>
              </div>

              <!-- Social Media -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-nature to-water rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary mb-2">Redes Sociais</h4>
                  <div class="flex space-x-3">
                    <a
                      href="#"
                      class="w-10 h-10 glass-card rounded-full flex items-center justify-center text-nature hover:text-nature/80 transition-colors"
                      title="Facebook"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 glass-card rounded-full flex items-center justify-center text-water hover:text-water/80 transition-colors"
                      title="Instagram"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="section-title-animate">
          <div class="glass-card p-8 h-full">
            <h3 class="text-2xl font-bold text-water mb-6">Envie sua Mensagem</h3>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-sm font-medium text-text-primary mb-2">
                  Nome Completo
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="glass-input w-full px-4 py-3 rounded-xl"
                  placeholder="Seu nome completo"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="block text-sm font-medium text-text-primary mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="glass-input w-full px-4 py-3 rounded-xl"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <!-- Subject Field -->
              <div>
                <label for="subject" class="block text-sm font-medium text-text-primary mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="glass-input w-full px-4 py-3 rounded-xl"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="participar">Quero participar das atividades</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="voluntario">Trabalho voluntário</option>
                  <option value="doacao">Informações sobre doações</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-sm font-medium text-text-primary mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="glass-input w-full px-4 py-3 rounded-xl resize-none"
                  placeholder="Sua mensagem para nós..."
                />
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary px-6 py-4 rounded-xl font-semibold hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                  <span>Enviar Mensagem</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <span v-else class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Enviando...</span>
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div
              v-if="showSuccessMessage"
              class="mt-6 p-4 bg-nature/20 border border-nature/50 rounded-xl text-center"
            >
              <p class="text-nature font-semibold">Mensagem enviada com sucesso!</p>
              <p class="text-text-secondary text-sm mt-1">
                Entraremos em contato em breve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Sharing Section -->
      <div class="mb-16 section-title-animate">
        <SocialShare />
      </div>

      <!-- Partners Section -->
      <div class="section-title-animate">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gradient mb-4">Nossos Parceiros</h3>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Construímos um futuro melhor juntos com o apoio de organizações incríveis
            que compartilham nossa visão de um mundo mais sustentável.
          </p>
        </div>

        <div class="grid grid-responsive-2 gap-8">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="partner-card group cursor-pointer"
            @click="openPartnerWebsite(partner.website)"
          >
            <div class="glass-card p-6 text-center h-full">
              <!-- Partner Logo -->
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {{ partner.logo }}
              </div>

              <!-- Partner Name -->
              <h4 class="text-lg font-semibold text-text-primary mb-2 group-hover:text-nature transition-colors duration-300">
                {{ partner.name }}
              </h4>

              <!-- Partner Type Badge -->
              <div class="mb-3">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      :class="getPartnerTypeClass(partner.type)">
                  {{ partnerTypes[partner.type] }}
                </span>
              </div>

              <!-- Partner Description -->
              <p class="text-text-secondary text-sm mb-4">
                {{ partner.description }}
              </p>

              <!-- Visit Website Link -->
              <div
                v-if="partner.website"
                class="flex items-center justify-center space-x-1 text-nature text-sm hover:text-nature/80 transition-colors"
              >
                <span>Visitar</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { partners, partnerTypes, type Partner } from '@/assets/data/partners'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccessMessage = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    // Show success message
    showSuccessMessage.value = true

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)

  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

const openPartnerWebsite = (website?: string) => {
  if (website) {
    window.open(website, '_blank', 'noopener,noreferrer')
  }
}

const getPartnerTypeClass = (type: string) => {
  switch (type) {
    case 'international':
      return 'bg-arts/20 text-arts border border-arts/30'
    case 'local':
      return 'bg-nature/20 text-nature border border-nature/30'
    case 'government':
      return 'bg-water/20 text-water border border-water/30'
    default:
      return 'bg-glass text-text-muted border border-glass-border'
  }
}
</script>

<style scoped>
/* Form field focus effects */
.glass-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 255, 136, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
}

/* Partner card hover effects */
.partner-card {
  transition: all 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
}

.partner-card .glass-card {
  transition: all 0.3s ease;
}

.partner-card:hover .glass-card {
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.1);
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

/* Success message animation */
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply animation to success message */
.mt-6 > div {
  animation: slideInUp 0.5s ease-out;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .partner-card:hover {
    transform: none;
  }

  .glass-card {
    padding: 1.5rem;
  }
}
</style>