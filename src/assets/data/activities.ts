export interface Activity {
  id: string
  title: string
  icon: string
  description: string
  highlights: string[]
  featured: boolean
  images: string[]
  category: string
}

export const activities: Activity[] = [
  {
    id: 'music-workshop',
    title: 'Oficina de Música e Meio Ambiente',
    icon: '🎵',
    description: 'Nosso projeto mais icônico, oferecido gratuitamente à comunidade desde 2014. Formação da Banda Impermanente com apresentações culturais em eventos socioambientais.',
    highlights: [
      'Gratuito para toda comunidade',
      'Formação da Banda Impermanente',
      'Apresentações culturais em eventos',
      'Integração com escolas públicas',
      'Mais de 1000 pessoas beneficiadas'
    ],
    featured: true,
    images: [
      'eg-first-activity-1.jpg',
      'eg-first-activity-2.jpg',
      'eg-first-activity-3.jpg'
    ],
    category: 'workshop'
  },
  {
    id: 'virada-climatica',
    title: 'Virada Climática',
    icon: '🌍',
    description: 'Movimento global de conscientização sobre mudanças climáticas com eventos culturais, palestras e apresentações artísticas.',
    highlights: [
      'Evento anual internacional',
      'Conscientização climática',
      'Cultura e arte ambiental',
      'Participação de jovens ativistas',
      'Cobertura midiática nacional'
    ],
    featured: false,
    images: [
      'virada-climatica-1.jpg',
      'virada-climatica-2.jpg',
      'virada-climatica-logo.jpg'
    ],
    category: 'event'
  },
  {
    id: '7k-project',
    title: 'Projeto 7K - Plantio de Árvores',
    icon: '🌳',
    description: 'Ação de reflorestamento com plantio de árvores nativas para restauração de áreas degradadas e conservação de nascentes.',
    highlights: [
      'Reflorestamento de áreas degradadas',
      'Árvores nativas da Mata Atlântica',
      'Proteção de nascentes',
      'Engajamento comunitário',
      'Educação ambiental prática'
    ],
    featured: false,
    images: [
      '7K planting trees (1).jpg',
      '7K planting trees (2).jpg',
      '7K planting trees (3).jpg',
      '7K planting trees (4).jpg',
      '7K planting trees (5).jpg'
    ],
    category: 'environmental'
  },
  {
    id: 'cultural-productions',
    title: 'Produções Culturais',
    icon: '🎭',
    description: 'Eventos culturais como o show Aldir Blanc, apresentações musicais e intervenções artísticas com temática ambiental.',
    highlights: [
      'Show Aldir Blanc',
      'Intervenções artísticas',
      'Música autoral',
      'Cultura independente',
      'Apoio a artistas locais'
    ],
    featured: false,
    images: [
      'show-aldir-blanc-1.jpg',
      'show-aldir-blanc-2.jpg'
    ],
    category: 'cultural'
  },
  {
    id: 'educational-workshops',
    title: 'Oficinas Educativas',
    icon: '📚',
    description: 'Oficinas socioeducativas em escolas e comunidades sobre meio ambiente, sustentabilidade e cidadania.',
    highlights: [
      'Escolas públicas municipais',
      'Educação socioambiental',
      'Material didático próprio',
      'Professores capacitados',
      'Alunos de todas as idades'
    ],
    featured: false,
    images: [
      'others activity images (1).jpg',
      'others activity images (2).jpg'
    ],
    category: 'education'
  },
  {
    id: 'partnerships',
    title: 'Parcerias Estratégicas',
    icon: '🤝',
    description: 'Colaboração com organizações nacionais e internacionais como Earth Guardians e SOS Águas da Prata.',
    highlights: [
      'Earth Guardians International',
      'SOS Águas da Prata',
      'Rede de ativistas globais',
      'Projetos colaborativos',
      'Fortalecimento do movimento'
    ],
    featured: false,
    images: [
      'others activity images (28).jpg'
    ],
    category: 'partnership'
  }
]

export const impactStats = [
  { number: '10+', label: 'Anos de Atuação' },
  { number: '1000+', label: 'Pessoas Impactadas' },
  { number: '50+', label: 'Eventos Realizados' },
  { number: '500+', label: 'Árvores Plantadas' }
]