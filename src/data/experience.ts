import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    isCurrent: true,
    period: {
      pt: '2023 — Presente',
      en: '2023 — Present',
    },
    role: {
      pt: 'Senior Software Developer / Tech Lead',
      en: 'Senior Software Developer / Tech Lead',
    },
    company: 'Tech Innovations Studio',
    location: {
      pt: 'São Paulo, Brasil (Remoto)',
      en: 'São Paulo, Brazil (Remote)',
    },
    description: {
      pt: 'Liderança técnica e arquitetura de aplicações de missão crítica. Desenvolvimento de soluções fullstack de alto impacto com React, TypeScript, Node.js e Laravel, orquestrando migração para microsserviços e garantindo alta disponibilidade.',
      en: 'Technical leadership and architecture of mission-critical systems. Engineering high-impact fullstack solutions with React, TypeScript, Node.js, and Laravel, guiding microservices migration and ensuring 99.9% uptime SLA.',
    },
    achievements: {
      pt: [
        'Arquitetou novo ecossistema de APIs em Laravel e Node.js reduzindo o tempo de carregamento em 40%',
        'Implementou design system unificado em React + Tailwind CSS adotado por 4 times de engenharia',
        'Estruturou pipelines automatizados de CI/CD e cultura de testes automatizados com Jest e Cypress',
      ],
      en: [
        'Architected new API ecosystem with Laravel and Node.js decreasing overall page load latency by 40%',
        'Standardized corporate design system in React + Tailwind CSS adopted across 4 engineering teams',
        'Established automated CI/CD deployment pipelines and comprehensive automated testing culture',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Laravel', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    isCurrent: false,
    period: {
      pt: '2021 — 2023',
      en: '2021 — 2023',
    },
    role: {
      pt: 'Full Stack Web Developer',
      en: 'Full Stack Web Developer',
    },
    company: 'Vortex Digital Solutions',
    location: {
      pt: 'Remoto',
      en: 'Remote',
    },
    description: {
      pt: 'Desenvolvimento e manutenção de plataformas web de grande escala para clientes enterprise no setor financeiro e e-commerce.',
      en: 'Development and maintenance of large-scale web platforms for enterprise clients across finance and high-volume e-commerce.',
    },
    achievements: {
      pt: [
        'Desenvolveu portais interativos em React com consumo de APIs RESTful e GraphQL',
        'Construiu microsserviços em Node.js com filas Redis para processamento assíncrono de pagamentos',
        'Otimizou consultas complexas de banco de dados em MySQL e PostgreSQL, reduzindo I/O em 50%',
      ],
      en: [
        'Developed interactive client-facing portals in React consuming RESTful and GraphQL backend APIs',
        'Engineered high-concurrency Node.js microservices with Redis queues for payment orchestration',
        'Optimized heavy relational database queries in MySQL and PostgreSQL, cutting server I/O by 50%',
      ],
    },
    technologies: ['React', 'Node.js', 'Laravel', 'MySQL', 'Redis', 'Docker', 'Git'],
  },
  {
    id: 'exp-3',
    isCurrent: false,
    period: {
      pt: '2019 — 2021',
      en: '2019 — 2021',
    },
    role: {
      pt: 'Software Developer',
      en: 'Software Developer',
    },
    company: 'Nexus Software Labs',
    location: {
      pt: 'Brasil',
      en: 'Brazil',
    },
    description: {
      pt: 'Criação de módulos corporativos, refatoração de sistemas legados para Laravel e desenvolvimento de interfaces web responsivas.',
      en: 'Creation of business management modules, legacy code refactoring into modern Laravel, and development of responsive web interfaces.',
    },
    achievements: {
      pt: [
        'Migrou sistemas legados para Laravel 8 com arquitetura desacoplada e rotas de API seguras',
        'Construiu dashboards analíticos modernos e interativos com JavaScript moderno e componentes reativos',
      ],
      en: [
        'Migrated monolithic legacy stacks into modern Laravel with clean decoupled service layers',
        'Delivered responsive analytics dashboards utilizing modern component-based JavaScript',
      ],
    },
    technologies: ['Laravel', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Git'],
  },
];
