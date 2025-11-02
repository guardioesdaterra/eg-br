<template>
  <div class="social-share-container">
    <div class="glass-card p-6 text-center">
      <h3 class="text-xl font-semibold text-gradient mb-4">
        Compartilhe Nossa História
      </h3>
      <p class="text-text-secondary mb-6">
        Ajude a espalhar nossa mensagem de ativismo ambiental e arte
        alcançando mais pessoas em todo o mundo.
      </p>

      <!-- Social Share Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-6">
        <button
          v-for="social in socialPlatforms"
          :key="social.name"
          @click="shareOnSocial(social)"
          :class="[
            'share-button',
            `share-${social.name.toLowerCase()}`
          ]"
          :title="`Compartilhar no ${social.name}`"
        >
          <span class="text-xl">{{ social.icon }}</span>
          <span class="sr-only">{{ social.name }}</span>
        </button>
      </div>

      <!-- Copy Link -->
      <div class="copy-link-container">
        <div class="flex items-center space-x-2">
          <input
            ref="linkInput"
            :value="shareUrl"
            readonly
            class="glass-input flex-1 px-4 py-2 rounded-lg text-sm"
          />
          <button
            @click="copyLink"
            class="share-button copy-button"
            title="Copiar link"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="showCopySuccess" class="copy-success">
            Link copiado com sucesso!
          </div>
        </transition>
      </div>

      <!-- QR Code -->
      <div class="mt-6">
        <button
          @click="toggleQRCode"
          class="text-nature hover:text-nature/80 transition-colors text-sm font-medium flex items-center space-x-2 mx-auto"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
          <span>Gerar QR Code</span>
        </button>

        <transition name="slide-up">
          <div v-if="showQRCode" class="qr-code-container mt-4">
            <div class="glass-card p-4 inline-block">
              <div class="qr-code-placeholder">
                <!-- QR Code would be generated here -->
                <div class="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">📱</span>
                </div>
              </div>
              <p class="text-xs text-text-muted mt-2">
                Escaneie para acessar o site
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface SocialPlatform {
  name: string
  icon: string
  color: string
  url: string
}

const linkInput = ref<HTMLInputElement>()
const showCopySuccess = ref(false)
const showQRCode = ref(false)

const shareUrl = computed(() => {
  return typeof window !== 'undefined' ? window.location.href : 'https://guardioesdaterra.com'
})

const shareText = computed(() => {
  return 'Guardiões da Terra - 10+ anos de arte, meio ambiente e ativismo climático em Águas da Prata, SP'
})

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Facebook',
    icon: '📘',
    color: '#1877f2',
    url: 'https://www.facebook.com/sharer/sharer.php'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    color: '#1da1f2',
    url: 'https://twitter.com/intent/tweet'
  },
  {
    name: 'WhatsApp',
    icon: '💬',
    color: '#25d366',
    url: 'https://wa.me/'
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    color: '#0077b5',
    url: 'https://www.linkedin.com/sharing/share-offsite/'
  },
  {
    name: 'Telegram',
    icon: '✈️',
    color: '#0088cc',
    url: 'https://t.me/share/url'
  },
  {
    name: 'Email',
    icon: '📧',
    color: '#ea4335',
    url: 'mailto:'
  }
]

const shareOnSocial = (social: SocialPlatform) => {
  let url = social.url

  switch (social.name) {
    case 'Facebook':
      url += `?u=${encodeURIComponent(shareUrl.value)}`
      break
    case 'Twitter':
      url += `?text=${encodeURIComponent(shareText.value)}&url=${encodeURIComponent(shareUrl.value)}`
      break
    case 'WhatsApp':
      url += `?text=${encodeURIComponent(shareText.value + ' ' + shareUrl.value)}`
      break
    case 'LinkedIn':
      url += `?url=${encodeURIComponent(shareUrl.value)}`
      break
    case 'Telegram':
      url += `?url=${encodeURIComponent(shareUrl.value)}&text=${encodeURIComponent(shareText.value)}`
      break
    case 'Email':
      url = `mailto:?subject=${encodeURIComponent('Guardiões da Terra')}&body=${encodeURIComponent(shareText.value + '\n\n' + shareUrl.value)}`
      break
  }

  window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
}

const copyLink = async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(shareUrl.value)
    } else {
      // Fallback for older browsers
      if (linkInput.value) {
        linkInput.value.select()
        document.execCommand('copy')
      }
    }

    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy link:', error)
  }
}

const toggleQRCode = () => {
  showQRCode.value = !showQRCode.value
}
</script>

<style scoped>
.social-share-container {
  max-width: 500px;
  margin: 0 auto;
}

.share-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.share-button:hover {
  transform: translateY(-3px) scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 25px rgba(0, 255, 136, 0.3);
}

.share-facebook:hover {
  background: rgba(24, 119, 242, 0.2);
  border-color: rgba(24, 119, 242, 0.5);
  box-shadow: 0 10px 25px rgba(24, 119, 242, 0.3);
}

.share-twitter:hover {
  background: rgba(29, 161, 242, 0.2);
  border-color: rgba(29, 161, 242, 0.5);
  box-shadow: 0 10px 25px rgba(29, 161, 242, 0.3);
}

.share-whatsapp:hover {
  background: rgba(37, 211, 102, 0.2);
  border-color: rgba(37, 211, 102, 0.5);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
}

.share-linkedin:hover {
  background: rgba(0, 119, 181, 0.2);
  border-color: rgba(0, 119, 181, 0.5);
  box-shadow: 0 10px 25px rgba(0, 119, 181, 0.3);
}

.share-telegram:hover {
  background: rgba(0, 136, 204, 0.2);
  border-color: rgba(0, 136, 204, 0.5);
  box-shadow: 0 10px 25px rgba(0, 136, 204, 0.3);
}

.share-email:hover {
  background: rgba(234, 67, 53, 0.2);
  border-color: rgba(234, 67, 53, 0.5);
  box-shadow: 0 10px 25px rgba(234, 67, 53, 0.3);
}

.copy-button {
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #ffffff;
  background: rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.5);
}

.copy-button:hover {
  background: rgba(0, 255, 136, 0.3);
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
}

.copy-link-container {
  position: relative;
}

.copy-success {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 136, 0.2);
  border: 1px solid rgba(0, 255, 136, 0.5);
  border-radius: 0.5rem;
  color: #00ff88;
  font-size: 0.875rem;
  white-space: nowrap;
  z-index: 10;
}

.qr-code-container {
  text-align: center;
}

.qr-code-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 640px) {
  .share-button {
    width: 40px;
    height: 40px;
  }

  .share-button span {
    font-size: 0.875rem;
  }
}
</style>