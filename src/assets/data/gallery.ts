export interface GalleryImage {
  id: string
  src: string
  title: string
  description?: string
  category: string
  date?: string
  featured?: boolean
}

export interface GalleryCategory {
  id: string
  name: string
  description: string
  images: GalleryImage[]
}

// Virada Climática Images
const viradaClimaticaImages: GalleryImage[] = [
  {
    id: 'vc-1',
    src: 'virada-climatica-1.jpg',
    title: 'Virada Climática - Apresentação',
    description: 'Apresentação musical durante evento da Virada Climática',
    category: 'virada-climatica',
    featured: true
  },
  {
    id: 'vc-2',
    src: 'virada-climatica-2.jpg',
    title: 'Ativistas da Virada Climática',
    description: 'Grupo de jovens ativistas no evento',
    category: 'virada-climatica'
  },
  {
    id: 'vc-3',
    src: 'virada-climatica-3.jpg',
    title: 'Palestra na Virada Climática',
    description: 'Momento educativo sobre mudanças climáticas',
    category: 'virada-climatica'
  },
  {
    id: 'vc-4',
    src: 'virada-climatica-4.jpg',
    title: 'Intervenção Artística',
    description: 'Arte urbana com mensagem ambiental',
    category: 'virada-climatica'
  },
  {
    id: 'vc-5',
    src: 'virada-climatica-5.jpg',
    title: 'Performance Cultural',
    description: 'Apresentação teatral sobre meio ambiente',
    category: 'virada-climatica'
  },
  {
    id: 'vc-6',
    src: 'virada-climatica-6.jpg',
    title: 'Workshop de Educação Ambiental',
    description: 'Atividade prática com crianças',
    category: 'virada-climatica'
  },
  {
    id: 'vc-7',
    src: 'virada-climatica-7.jpg',
    title: 'Música e Natureza',
    description: 'Concerto ao ar livre',
    category: 'virada-climatica'
  },
  {
    id: 'vc-8',
    src: 'virada-climatica-8.jpg',
    title: 'Debate sobre Clima',
    description: 'Painel com especialistas',
    category: 'virada-climatica'
  }
]

// 7K Project Images
const k7ProjectImages: GalleryImage[] = [
  {
    id: 'k7-1',
    src: '7K planting trees (1).jpg',
    title: 'Início do Plantio',
    description: 'Voluntários iniciando o plantio de árvores',
    category: '7k-project',
    featured: true
  },
  {
    id: 'k7-2',
    src: '7K planting trees (2).jpg',
    title: 'Plantio de Mudas',
    description: 'Preparando as mudas para plantio',
    category: '7k-project'
  },
  {
    id: 'k7-3',
    src: '7K planting trees (3).jpg',
    title: 'Equipe de Voluntários',
    description: 'Grupo reunido para ação de reflorestamento',
    category: '7k-project'
  },
  {
    id: 'k7-4',
    src: '7K planting trees (4).jpg',
    title: 'Mudas Nativas',
    description: 'Seleção de espécies nativas da Mata Atlântica',
    category: '7k-project'
  },
  {
    id: 'k7-5',
    src: '7K planting trees (5).jpg',
    title: 'Resultado do Plantio',
    description: 'Área reflorestada pelo projeto',
    category: '7k-project'
  }
]

// First Activities Images
const firstActivitiesImages: GalleryImage[] = [
  {
    id: 'fa-1',
    src: 'eg-first-activity-1.jpg',
    title: 'Primeira Atividade - 2014',
    description: 'Primeiro evento dos Guardiões da Terra',
    category: 'first-activities',
    featured: true,
    date: '2014'
  },
  {
    id: 'fa-2',
    src: 'eg-first-activity-2.jpg',
    title: 'Fundação do Grupo',
    description: 'Momento histórico da fundação',
    category: 'first-activities',
    date: '2014'
  },
  {
    id: 'fa-3',
    src: 'eg-first-activity-3.jpg',
    title: 'Primeiros Integrantes',
    description: 'Grupo fundador dos Guardiões da Terra',
    category: 'first-activities',
    date: '2014'
  },
  {
    id: 'fa-4',
    src: 'eg-first-activity-4.jpg',
    title: 'Primeira Apresentação',
    description: 'Primeiro show da Banda Impermanente',
    category: 'first-activities',
    date: '2015'
  },
  {
    id: 'fa-5',
    src: 'eg-first-activity-5.jpg',
    title: 'Ensaio Musical',
    description: 'Primeiro ensaio do grupo',
    category: 'first-activities',
    date: '2014'
  },
  {
    id: 'fa-6',
    src: 'eg-first-activity-6.jpg',
    title: 'Atividade Comunitária',
    description: 'Primeira ação comunitária',
    category: 'first-activities',
    date: '2014'
  },
  {
    id: 'fa-7',
    src: 'eg-first-activity-7.jpg',
    title: 'Workshop Inicial',
    description: 'Primeira oficina de música',
    category: 'first-activities',
    date: '2014'
  },
  {
    id: 'fa-8',
    src: 'eg-first-activity-8.jpg',
    title: 'Evento de Lançamento',
    description: 'Apresentação de lançamento',
    category: 'first-activities',
    date: '2014'
  },
  {
    id: 'fa-9',
    src: 'eg-first-activity-9.jpg',
    title: 'Celebração',
    description: 'Primeiro ano de atividades',
    category: 'first-activities',
    date: '2015'
  }
]

// Cultural Shows Images
const culturalShowsImages: GalleryImage[] = [
  {
    id: 'cs-1',
    src: 'show-aldir-blanc-1.jpg',
    title: 'Show Aldir Blanc',
    description: 'Evento cultural em homenagem a Aldir Blanc',
    category: 'cultural-shows',
    featured: true
  },
  {
    id: 'cs-2',
    src: 'show-aldir-blanc-2.jpg',
    title: 'Apresentação Musical',
    description: 'Banda Impermanente no show',
    category: 'cultural-shows'
  }
]

// General Activities Images
const generalActivitiesImages: GalleryImage[] = [
  {
    id: 'ga-1',
    src: 'others activity images (1).jpg',
    title: 'Oficina Educativa',
    description: 'Atividade educacional com estudantes',
    category: 'general-activities'
  },
  {
    id: 'ga-2',
    src: 'others activity images (2).jpg',
    title: 'Apresentação Escolar',
    description: 'Show em escola municipal',
    category: 'general-activities'
  },
  {
    id: 'ga-3',
    src: 'others activity images (3).jpg',
    title: 'Ensaio da Banda',
    description: 'Preparação para apresentação',
    category: 'general-activities'
  },
  {
    id: 'ga-4',
    src: 'others activity images (4).jpg',
    title: 'Evento Comunitário',
    description: 'Participação em evento local',
    category: 'general-activities'
  },
  {
    id: 'ga-5',
    src: 'others activity images (5).jpg',
    title: 'Workshop Ambiental',
    description: 'Oficina sobre sustentabilidade',
    category: 'general-activities'
  },
  {
    id: 'ga-6',
    src: 'others activity images (6).jpg',
    title: 'Atividade ao Ar Livre',
    description: 'Ação educativa em parque',
    category: 'general-activities'
  },
  {
    id: 'ga-7',
    src: 'others activity images (7).jpg',
    title: 'Intervenção Cultural',
    description: 'Ação artística urbana',
    category: 'general-activities'
  },
  {
    id: 'ga-8',
    src: 'others activity images (8).jpg',
    title: 'Palestra Ambiental',
    description: 'Momento de conscientização',
    category: 'general-activities'
  }
]

// All categories for gallery filtering
export const galleryCategories: GalleryCategory[] = [
  {
    id: 'todos',
    name: 'Todos',
    description: 'Todas as atividades e eventos',
    images: [
      ...viradaClimaticaImages,
      ...k7ProjectImages,
      ...firstActivitiesImages,
      ...culturalShowsImages,
      ...generalActivitiesImages
    ]
  },
  {
    id: 'virada-climatica',
    name: 'Virada Climática',
    description: 'Eventos de conscientização climática',
    images: viradaClimaticaImages
  },
  {
    id: '7k-project',
    name: 'Projeto 7K',
    description: 'Ações de reflorestamento',
    images: k7ProjectImages
  },
  {
    id: 'first-activities',
    name: 'Primeiros Anos',
    description: 'Histórico de 2014-2015',
    images: firstActivitiesImages
  },
  {
    id: 'cultural-shows',
    name: 'Shows Culturais',
    description: 'Eventos culturais e musicais',
    images: culturalShowsImages
  },
  {
    id: 'general-activities',
    name: 'Atividades Gerais',
    description: 'Oficinas e eventos diversos',
    images: generalActivitiesImages
  }
]

// Featured images for hero section
export const featuredImages: GalleryImage[] = [
  ...galleryCategories.flatMap(cat => cat.images.filter(img => img.featured))
]