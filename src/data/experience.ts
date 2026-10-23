import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-alcance',
    isCurrent: false,
    period: {
      pt: 'Outubro 2023 — Outubro 2025',
      en: 'October 2023 — October 2025',
    },
    role: {
      pt: 'Desenvolvedor de Software',
      en: 'Software Developer',
    },
    company: 'Alcance Tecnologia',
    location: {
      pt: 'Brasil • PHP Laravel e Angular',
      en: 'Brazil • PHP Laravel & Angular',
    },
    description: {
      pt: 'Atuação no desenvolvimento front-end e design de produtos digitais, unindo prototipagem no Figma à implementação de sistemas robustos e responsivos.',
      en: 'Focused on front-end development and UI/UX product design, bridging Figma prototyping with the engineering of responsive, high-performance systems.',
    },
    achievements: {
      pt: [
        'Design com Figma: Projeção de interfaces de usuário intuitivas e funcionais, entregando soluções eficientes e visualmente envolventes para os projetos da empresa.',
        'Desenvolvimento Front-End com Laravel e Angular: Criação de interfaces responsivas e interativas utilizando frameworks modernos, garantindo uma experiência de usuário fluida e agradável.',
      ],
      en: [
        'UI/UX Design with Figma: Designed intuitive and functional user interfaces, delivering efficient and engaging visual solutions across company products.',
        'Front-End Engineering with Laravel & Angular: Built responsive, interactive interfaces utilizing modern frameworks, ensuring seamless and fluid user experiences.',
      ],
    },
    technologies: ['Laravel', 'PHP', 'Angular', 'TypeScript', 'Figma', 'MySQL', 'REST APIs'],
  },
  {
    id: 'exp-vigi',
    isCurrent: false,
    period: {
      pt: 'Setembro 2025 — Outubro 2025',
      en: 'September 2025 — October 2025',
    },
    role: {
      pt: 'Desenvolvedor de Software',
      en: 'Software Developer',
    },
    company: 'Vigi Câmeras',
    location: {
      pt: 'Brasil • ReactJS & Supabase',
      en: 'Brazil • ReactJS & Supabase',
    },
    description: {
      pt: 'Desenvolvimento e evolução de sistema interno corporativo com foco em usabilidade, produtividade dos usuários e arquitetura em nuvem com Supabase.',
      en: 'Development and optimization of internal enterprise systems focused on workflow usability, operational speed, and cloud data architecture with Supabase.',
    },
    achievements: {
      pt: [
        'Colaboração no desenvolvimento e manutenção do sistema interno da empresa, implementando novas funcionalidades e aprimorando fluxos de trabalho em React, garantindo maior eficiência e usabilidade.',
        'Atuação na integração e gerenciamento de dados com Supabase, otimizando consultas, estruturação de tabelas relacionais e fluxos de autenticação para maior confiabilidade e desempenho.',
      ],
      en: [
        'Collaborated on core development and maintenance of company internal tools, implementing new features and refining workflows in React to elevate usability.',
        'Led Supabase data integration and management, optimizing queries, relational table structures, and authentication flows to assure high reliability and throughput.',
      ],
    },
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'exp-drd',
    isCurrent: false,
    period: {
      pt: 'Janeiro 2025 — Fevereiro 2025',
      en: 'January 2025 — February 2025',
    },
    role: {
      pt: 'Desenvolvedor de Software',
      en: 'Software Developer',
    },
    company: 'DRD Móveis',
    location: {
      pt: 'Brasil • PHP Laravel e React',
      en: 'Brazil • PHP Laravel & React',
    },
    description: {
      pt: 'Concepção visual e implementação de interfaces interativas e responsivas unindo design centrado no usuário no Figma a backends e frontends modernos.',
      en: 'Visual conception and delivery of interactive responsive storefront interfaces, marrying user-centered Figma designs with modern Laravel and React stacks.',
    },
    achievements: {
      pt: [
        'Projeção de interfaces de usuário intuitivas e funcionais no Figma, entregando soluções visualmente atraentes e eficientes em diversos projetos corporativos.',
        'Papel ativo no desenvolvimento front-end com Laravel e React, construindo interfaces fluidas, responsivas e interativas para uma experiência envolvente.',
      ],
      en: [
        'Designed functional, modern user interfaces in Figma, delivering aesthetic and high-converting visual solutions across key company initiatives.',
        'Active development in fullstack/frontend using Laravel and React, engineering fluid and interactive interfaces for an engaging user experience.',
      ],
    },
    technologies: ['Laravel', 'PHP', 'React', 'Figma', 'Tailwind CSS', 'MySQL', 'Git'],
  },
];
