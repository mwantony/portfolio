import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'tyra-app',
    category: 'fullstack',
    featured: true,
    title: {
      pt: 'Tyra — AI & Software Engineering',
      en: 'Tyra — AI & Software Engineering',
    },
    shortDescription: {
      pt: 'Plataforma institucional da Tyra com foco em desenvolvimento de software, inteligência artificial, automação e infraestrutura cloud.',
      en: "Tyra's institutional platform showcasing expertise in software development, artificial intelligence, automation, and cloud infrastructure.",
    },
    fullDescription: {
      pt: 'A Tyra é uma plataforma de engenharia de software e IA que une desenvolvimento web moderno, automação inteligente e infraestrutura em nuvem. Construída com React, Three.js e Framer Motion, entrega uma experiência visual imersiva com animações 3D e micro-interações sofisticadas.',
      en: "Tyra is a software engineering and AI platform uniting modern web development, intelligent automation, and cloud infrastructure. Built with React, Three.js, and Framer Motion, it delivers an immersive visual experience with 3D animations and sophisticated micro-interactions.",
    },
    tags: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Vite', 'Vercel'],
    image: '/screenshots/tyra-app.png',
    liveUrl: 'https://tyraapp.vercel.app',
    highlights: {
      pt: [
        'Cenas 3D interativas com Three.js renderizadas em tempo real no navegador',
        'Micro-animações avançadas com Framer Motion para transições fluidas entre seções',
        'Arquitetura frontend moderna com React + TypeScript e Vite para builds ultrarrápidos',
        'Design responsivo premium com tipografia Space Grotesk e paleta de cores consistente',
      ],
      en: [
        'Interactive 3D scenes powered by Three.js rendered in real-time in the browser',
        'Advanced micro-animations with Framer Motion for smooth section transitions',
        'Modern frontend architecture with React + TypeScript and Vite for ultra-fast builds',
        'Premium responsive design with Space Grotesk typography and consistent color palette',
      ],
    },
    stats: [
      { label: { pt: 'Framework', en: 'Framework' }, value: 'React' },
      { label: { pt: '3D Engine', en: '3D Engine' }, value: 'Three.js' },
      { label: { pt: 'Deploy', en: 'Deploy' }, value: 'Vercel' },
    ],
  },
  {
    id: 'tyra-transfer',
    category: 'frontend',
    featured: true,
    title: {
      pt: 'Tyra Transfer — Transferência Multi-modo',
      en: 'Tyra Transfer — Multi-mode File Transfer',
    },
    shortDescription: {
      pt: 'Aplicativo PWA para transferência de arquivos via WiFi, Bluetooth ou QR Code. Rápido, seguro e sem limites com licença permanente.',
      en: 'PWA for transferring files via WiFi, Bluetooth, or QR Code. Fast, secure, and unlimited with a permanent license.',
    },
    fullDescription: {
      pt: 'Tyra Transfer é um Progressive Web App que elimina a necessidade de cabos ou serviços de nuvem para transferir arquivos entre dispositivos. Suporta WiFi local, Bluetooth e QR Code, com interface nativa adaptada para iOS e Android. Sem limite de tamanho de arquivo e sem assinatura recorrente.',
      en: "Tyra Transfer is a Progressive Web App that eliminates the need for cables or cloud services to transfer files between devices. Supports local WiFi, Bluetooth, and QR Code, with a native-like interface adapted for iOS and Android. No file size limits and no recurring subscription.",
    },
    tags: ['React', 'TypeScript', 'PWA', 'WebRTC', 'Bluetooth API', 'QR Code', 'Vercel'],
    image: '/screenshots/tyra-transfer.png',
    liveUrl: 'https://tyra-transfer.vercel.app',
    highlights: {
      pt: [
        'Transferência peer-to-peer via WiFi local sem passar por servidores externos',
        'Suporte a Bluetooth Web API e geração de QR Code para pareamento instantâneo',
        'PWA instalável com suporte offline e experiência nativa em iOS e Android',
        'Sem limite de tamanho de arquivo e licença permanente sem assinatura mensal',
      ],
      en: [
        'Peer-to-peer transfer via local WiFi without routing through external servers',
        'Web Bluetooth API support and QR Code generation for instant device pairing',
        'Installable PWA with offline support and native-like experience on iOS and Android',
        'No file size limits and permanent license with no monthly subscription',
      ],
    },
    stats: [
      { label: { pt: 'Tipo', en: 'Type' }, value: 'PWA' },
      { label: { pt: 'Modos', en: 'Modes' }, value: '3' },
      { label: { pt: 'Limite', en: 'Limit' }, value: 'Sem limite' },
    ],
  },
  {
    id: 'tyra-convert',
    category: 'frontend',
    featured: true,
    title: {
      pt: 'Tyra Convert — Conversor Privado de Arquivos',
      en: 'Tyra Convert — Private File Converter',
    },
    shortDescription: {
      pt: 'Conversor de arquivos 100% no navegador: documentos, imagens, áudios, vídeos e dados. Sem upload para servidores, total privacidade.',
      en: 'Browser-based file converter for documents, images, audio, video, and data files. No server uploads, total privacy guaranteed.',
    },
    fullDescription: {
      pt: 'O Tyra Convert realiza todas as conversões diretamente no dispositivo do usuário, sem enviar nenhum arquivo para servidores externos. Suporta múltiplos formatos de documentos, imagens, áudio, vídeo e dados. A interface dark-first com JetBrains Mono oferece uma experiência premium para usuários técnicos e leigos.',
      en: "Tyra Convert performs all conversions directly on the user's device, without sending any files to external servers. Supports multiple formats across documents, images, audio, video, and data files. The dark-first interface with JetBrains Mono typography delivers a premium experience for both technical and casual users.",
    },
    tags: ['React', 'TypeScript', 'WebAssembly', 'FFmpeg.wasm', 'Vite', 'Vercel'],
    image: '/screenshots/tyra-convert.png',
    liveUrl: 'https://tyra-convert.vercel.app',
    highlights: {
      pt: [
        'Processamento 100% local no navegador — nenhum arquivo enviado para servidores',
        'Suporte a conversão de documentos, imagens, áudio, vídeo e arquivos de dados',
        'Interface dark-mode premium com tipografia JetBrains Mono e Outfit',
        'Conversão instantânea via WebAssembly sem necessidade de instalar software',
      ],
      en: [
        '100% local browser-side processing — no files ever uploaded to external servers',
        'Supports conversion of documents, images, audio, video, and data files',
        'Premium dark-mode interface with JetBrains Mono and Outfit typography',
        'Instant conversion via WebAssembly with no software installation required',
      ],
    },
    stats: [
      { label: { pt: 'Privacidade', en: 'Privacy' }, value: '100%' },
      { label: { pt: 'Engine', en: 'Engine' }, value: 'WASM' },
      { label: { pt: 'Formatos', en: 'Formats' }, value: 'Multi' },
    ],
  },
];


