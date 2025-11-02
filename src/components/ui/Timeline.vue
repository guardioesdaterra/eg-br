<template>
  <div class="timeline-container" ref="timelineContainer">
    <div class="timeline-line" ref="timelineLine"></div>

    <div
      v-for="(event, index) in timelineEvents"
      :key="event.id"
      class="timeline-event"
      :class="{ 'active': activeEvent === index }"
      ref="timelineEvents"
    >
      <!-- Timeline Marker -->
      <div
        class="timeline-marker"
        :class="getMarkerClass(event.type)"
        @click="scrollToEvent(index)"
      >
        <div class="marker-dot">
          <span class="marker-icon">{{ event.icon }}</span>
        </div>
        <div class="marker-date">{{ event.year }}</div>
      </div>

      <!-- Event Content -->
      <div
        class="event-content"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 === 1 }"
        ref="eventContents"
      >
        <div class="glass-card p-6 event-card">
          <!-- Event Header -->
          <div class="flex items-center space-x-3 mb-4">
            <div class="text-2xl">{{ event.icon }}</div>
            <div>
              <h3 class="text-xl font-semibold text-gradient">{{ event.title }}</h3>
              <p class="text-sm text-nature">{{ event.year }}</p>
            </div>
          </div>

          <!-- Event Description -->
          <p class="text-text-secondary mb-4">{{ event.description }}</p>

          <!-- Event Details -->
          <ul class="space-y-2 mb-4">
            <li
              v-for="detail in event.details"
              :key="detail"
              class="flex items-center space-x-2 text-sm text-text-muted"
            >
              <svg class="w-4 h-4 text-nature flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ detail }}</span>
            </li>
          </ul>

          <!-- Event Image -->
          <div
            v-if="event.image"
            class="aspect-video rounded-lg overflow-hidden mb-4"
          >
            <img
              :src="getImagePath(event.image)"
              :alt="event.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Learn More -->
          <button
            v-if="event.link"
            @click="openLink(event.link)"
            class="text-nature hover:text-nature/80 transition-colors text-sm font-medium flex items-center space-x-1"
          >
            <span>Saiba mais</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  details: string[]
  icon: string
  type: 'milestone' | 'project' | 'partnership' | 'achievement'
  image?: string
  link?: string
}

const timelineContainer = ref<HTMLElement>()
const timelineLine = ref<HTMLElement>()
const timelineEvents = ref<HTMLElement[]>([])
const eventContents = ref<HTMLElement[]>([])
const activeEvent = ref(0)

const timelineEventsData: TimelineEvent[] = [
  {
    id: 'founding',
    year: '2014',
    title: 'Fundação dos Guardiões da Terra',
    description: 'Nascimento do movimento ambientalista em Águas da Prata, unindo arte e ativismo climático.',
    details: [
      'Primeiro grupo de jovens ativistas',
      'Início das oficinas de música',
      'Primeiras ações de conscientização',
      'Conexão com a comunidade local'
    ],
    icon: '🌱',
    type: 'milestone',
    image: 'eg-first-activity-1.jpg'
  },
  {
    id: 'music-workshop',
    year: '2015',
    title: 'Oficina de Música e Meio Ambiente',
    description: 'Lançamento do projeto mais icônico, oferecendo educação musical gratuita com foco ambiental.',
    details: [
      'Formação da Banda Impermanente',
      'Integração com escolas públicas',
      'Primeiros shows educativos',
      'Mais de 100 alunos beneficiados'
    ],
    icon: '🎵',
    type: 'project',
    image: 'eg-first-activity-2.jpg'
  },
  {
    id: 'partnership-sos',
    year: '2017',
    title: 'Parceria com SOS Águas da Prata',
    description: 'Estabelecimento da sede principal e fortalecimento da parceria com a ONG ambientalista histórica.',
    details: [
      'Sede estabelecida na SOS',
      'Projetos colaborativos',
      'Apoio institucional',
      'Expansão das atividades'
    ],
    icon: '🤝',
    type: 'partnership'
  },
  {
    id: '7k-project',
    year: '2018',
    title: 'Projeto 7K - Reflorestamento',
    description: 'Ação de plantio de árvores nativas para restauração de áreas degradadas e proteção de nascentes.',
    details: [
      '500+ árvores plantadas',
      'Recuperação de nascentes',
      'Engajamento comunitário',
      'Educação ambiental prática'
    ],
    icon: '🌳',
    type: 'project',
    image: '7K planting trees (1).jpg'
  },
  {
    id: 'virada-climatica',
    year: '2019',
    title: 'Primeira Virada Climática',
    description: 'Participação no movimento global de conscientização sobre mudanças climáticas.',
    details: [
      'Evento internacional',
      'Apresentações artísticas',
      'Atividades educativas',
      'Mídia nacional'
    ],
    icon: '🌍',
    type: 'achievement',
    image: 'virada-climatica-1.jpg'
  },
  {
    id: 'earth-guardians',
    year: '2020',
    title: 'Conexão com Earth Guardians',
    description: 'Afiliação à rede internacional de jovens ativistas climáticos.',
    details: [
      'Rede global de 60+ países',
      'Capacitação internacional',
      'Projetos colaborativos',
      'Visibilidade global'
    ],
    icon: '🌎',
    type: 'partnership'
  },
  {
    id: 'aldir-blanc',
    year: '2021',
    title: 'Show Aldir Blanc',
    description: 'Evento cultural homenageando o mestre da música brasileira com temática ambiental.',
    details: [
      'Homenagem a Aldir Blanc',
      'Shows culturais',
      'Intervenções artísticas',
      'Apoio à cultura local'
    ],
    icon: '🎭',
    type: 'achievement',
    image: 'show-aldir-blanc-1.jpg'
  },
  {
    id: '10-years',
    year: '2024',
    title: '10 Anos de Ativismo',
    description: 'Celebração de uma década de luta ambiental, arte e transformação social.',
    details: [
      '1000+ pessoas impactadas',
      '50+ eventos realizados',
      'Comunidade fortalecida',
      'Legado ambiental duradouro'
    ],
    icon: '⭐',
    type: 'milestone'
  }
]

const getMarkerClass = (type: string) => {
  switch (type) {
    case 'milestone':
      return 'marker-milestone'
    case 'project':
      return 'marker-project'
    case 'partnership':
      return 'marker-partnership'
    case 'achievement':
      return 'marker-achievement'
    default:
      return 'marker-default'
  }
}

const getImagePath = (imageName: string) => {
  // Find which category the image belongs to
  const categoryMap: { [key: string]: string } = {
    'eg-first-activity': 'first-activities',
    '7K planting trees': '7k-project',
    'virada-climatica': 'virada-climatica',
    'show-aldir-blanc': 'cultural-shows'
  }

  const category = Object.keys(categoryMap).find(key => imageName.startsWith(key))
  const folder = category ? categoryMap[category] : 'general-activities'

  return `/src/assets/images/${folder}/${imageName}`
}

const scrollToEvent = (index: number) => {
  const event = timelineEvents.value[index]
  if (event) {
    event.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const initTimelineAnimations = () => {
  // Animate timeline line
  gsap.fromTo(timelineLine.value,
    {
      scaleY: 0,
      transformOrigin: 'top center'
    },
    {
      scaleY: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: timelineContainer.value,
        start: 'top 70%',
        once: true
      }
    }
  )

  // Animate events on scroll
  timelineEvents.value.forEach((event, index) => {
    const content = eventContents.value[index]
    if (!content) return

    gsap.fromTo(content,
      {
        opacity: 0,
        y: index % 2 === 0 ? 50 : -50,
        x: index % 2 === 0 ? -100 : 100
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: event,
          start: 'top 80%',
          once: true
        }
      }
    )

    // Animate markers
    const marker = event.querySelector('.timeline-marker')
    if (marker) {
      gsap.fromTo(marker,
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: event,
            start: 'top 85%',
            once: true
          }
        }
      )
    }
  })

  // Update active event on scroll
  ScrollTrigger.create({
    trigger: timelineContainer.value,
    start: 'top center',
    end: 'bottom center',
    onUpdate: (self) => {
      const progress = self.progress
      const eventIndex = Math.floor(progress * timelineEvents.value.length)
      activeEvent.value = Math.min(eventIndex, timelineEvents.value.length - 1)
    }
  })
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    initTimelineAnimations()
  }, 100)
})
</script>

<style scoped>
.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 255, 136, 0.3),
    rgba(0, 255, 255, 0.3),
    rgba(255, 0, 255, 0.3),
    transparent
  );
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-event {
  position: relative;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-marker:hover {
  transform: translateX(-50%) scale(1.1);
}

.marker-dot {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid;
  transition: all 0.3s ease;
}

.marker-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.marker-date {
  position: absolute;
  bottom: -25px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}

.marker-milestone .marker-dot {
  background: rgba(255, 0, 255, 0.2);
  border-color: rgba(255, 0, 255, 0.5);
  color: #ff00ff;
}

.marker-project .marker-dot {
  background: rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.5);
  color: #00ff88;
}

.marker-partnership .marker-dot {
  background: rgba(0, 255, 255, 0.2);
  border-color: rgba(0, 255, 255, 0.5);
  color: #00ffff;
}

.marker-achievement .marker-dot {
  background: rgba(255, 215, 0, 0.2);
  border-color: rgba(255, 215, 0, 0.5);
  color: #ffd700;
}

.timeline-event.active .marker-dot {
  transform: scale(1.2);
  box-shadow: 0 0 30px currentColor;
}

.event-content {
  width: calc(50% - 60px);
  position: relative;
}

.event-content.left {
  margin-right: auto;
  margin-left: 0;
}

.event-content.right {
  margin-left: auto;
  margin-right: 0;
}

.event-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline-container {
    padding: 2rem 1rem;
  }

  .timeline-line {
    left: 30px;
  }

  .timeline-event {
    margin-bottom: 4rem;
    padding-left: 60px;
  }

  .timeline-marker {
    left: 30px;
  }

  .event-content {
    width: 100%;
  }

  .event-content.left,
  .event-content.right {
    margin-left: 0;
    margin-right: 0;
  }

  .marker-dot {
    width: 50px;
    height: 50px;
  }

  .marker-icon {
    font-size: 1.2rem;
  }
}
</style>