export interface Partner {
  id: string
  name: string
  description: string
  website?: string
  logo: string
  type: 'local' | 'international' | 'government'
}

export const partners: Partner[] = [
  {
    id: 'earth-guardians',
    name: 'Earth Guardians International',
    description: 'Organização internacional de jovens ativistas climáticos com presença em mais de 60 países, capacitando jovens líderes para proteger o planeta.',
    website: 'https://www.earthguardians.org',
    logo: '🌍',
    type: 'international'
  },
  {
    id: 'sos-aguas-da-prata',
    name: 'SOS Águas da Prata',
    description: 'ONG fundada em 1968 dedicada à proteção ambiental e conservação dos recursos hídricos de Águas da Prata, SP. Nossa sede e principal parceira.',
    website: 'https://aguasdapratasos.wixstudio.com/2025',
    logo: '💧',
    type: 'local'
  },
  {
    id: 'virada-climatica',
    name: 'Virada Climática',
    description: 'Movimento brasileiro de conscientização sobre mudanças climáticas, promovendo eventos culturais e ações de mobilização social.',
    website: 'http://www.viradaclimatica.com/',
    logo: '🌱',
    type: 'local'
  },
  {
    id: 'escolas-municipais',
    name: 'Escolas Municipais de Águas da Prata',
    description: 'Parceria com a rede pública de ensino para desenvolver projetos socioeducativos de música e meio ambiente.',
    logo: '🏫',
    type: 'government'
  },
  {
    id: 'banda-impermanente',
    name: 'Banda Impermanente',
    description: 'Grupo musical formado na Oficina de Música e Meio Ambiente, compondo e apresentando canções com temáticas ambientais.',
    logo: '🎸',
    type: 'local'
  },
  {
    id: 'artistas-locais',
    name: 'Rede de Artistas Locais',
    description: 'Coletivo de artistas de Águas da Prata e região que apoiam nossas causas através de intervenções culturais.',
    logo: '🎨',
    type: 'local'
  }
]

export const partnerTypes = {
  local: 'Parceiro Local',
  international: 'Parceiro Internacional',
  government: 'Governo/Educação'
}