import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'nexus-erp',
    category: 'fullstack',
    featured: true,
    title: {
      pt: 'Nexus Enterprise ERP',
      en: 'Nexus Enterprise ERP',
    },
    shortDescription: {
      pt: 'Sistema integrado de gestão empresarial de alta disponibilidade com emissão fiscal, controle de estoque em tempo real e analytics preditivo.',
      en: 'High-availability integrated enterprise ERP platform with real-time inventory tracking, multi-tenant billing, and predictive analytics.',
    },
    fullDescription: {
      pt: 'O Nexus ERP foi projetado para operações corporativas escaláveis. Possui arquitetura modular desacoplada, backend em Laravel com filas assíncronas em Redis, interface reativa em React + TypeScript e relatórios em tempo real via WebSockets.',
      en: 'Nexus ERP was engineered for scalable enterprise operations. Featuring a decoupled modular architecture, Laravel backend with asynchronous Redis queue processing, reactive React + TypeScript frontend, and real-time reporting via WebSockets.',
    },
    tags: ['React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/mwantony/nexus-enterprise-erp',
    liveUrl: 'https://nexus-erp-demo.vercel.app',
    highlights: {
      pt: [
        'Redução de 45% na latência de geração de relatórios complexos com cache Redis',
        'Arquitetura multi-tenant com isolamento seguro de dados para 50+ clientes simultâneos',
        'Pipeline automatizado de CI/CD com 95% de cobertura de testes unitários e de integração',
        'Painel dinâmico com gráficos interativos e exportação instantânea para PDF/Excel',
      ],
      en: [
        '45% reduction in complex report generation latency through multi-layer Redis caching',
        'Multi-tenant architecture ensuring strict data isolation for 50+ enterprise clients',
        'Automated CI/CD pipeline featuring 95% unit and integration test coverage',
        'Dynamic dashboard with responsive analytics and sub-second PDF/Excel exports',
      ],
    },
    stats: [
      { label: { pt: 'Uptime', en: 'Uptime' }, value: '99.98%' },
      { label: { pt: 'Requisições/dia', en: 'Requests/day' }, value: '1.2M+' },
      { label: { pt: 'Tempo Resposta', en: 'Avg Response' }, value: '68ms' },
    ],
  },
  {
    id: 'pulse-telemetry',
    category: 'fullstack',
    featured: true,
    title: {
      pt: 'Pulse Stream Analytics',
      en: 'Pulse Stream Analytics',
    },
    shortDescription: {
      pt: 'Dashboard de observabilidade e telemetria de APIs em tempo real com alertas inteligentes e rastreamento distribuído de microsserviços.',
      en: 'Real-time API telemetry and observability dashboard with intelligent alert triggers and distributed microservice tracing.',
    },
    fullDescription: {
      pt: 'Construído para monitorar dezenas de microsserviços em produção, o Pulse Stream consome streams de telemetria contínua com Node.js e WebSockets, renderizando dados em altíssima taxa de quadros através de gráficos canvas acelerados e interface React.',
      en: 'Engineered to monitor production microservices at scale, Pulse Stream ingests high-throughput telemetry streams using Node.js and WebSockets, rendering rich data via hardware-accelerated canvas charts and a sleek React UI.',
    },
    tags: ['React', 'Node.js', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'TimescaleDB'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/mwantony/pulse-stream-analytics',
    liveUrl: 'https://pulse-stream.vercel.app',
    highlights: {
      pt: [
        'Capacidade de ingestão de mais de 10.000 eventos de telemetria por segundo',
        'Visualização gráfica de fluxo de requisições com mapas de calor e histogramas',
        'Notificações instantâneas via Webhooks, Slack e Telegram com limites customizados',
        'Modo noturno modernista otimizado para longas sessões em Centros de Operações (NOC)',
      ],
      en: [
        'High-throughput ingestion handling over 10,000 telemetry events per second',
        'Visual request topology with real-time latency heatmaps and histograms',
        'Instant anomaly alerts dispatched to Slack, Telegram, and custom webhooks',
        'Modernist dark UI calibrated specifically for command centers and NOC monitors',
      ],
    },
    stats: [
      { label: { pt: 'Eventos/seg', en: 'Events/sec' }, value: '10K+' },
      { label: { pt: 'Latência Stream', en: 'Stream Latency' }, value: '< 20ms' },
      { label: { pt: 'Detecção de Falhas', en: 'Incident Detection' }, value: '-60%' },
    ],
  },
  {
    id: 'aura-commerce',
    category: 'frontend',
    featured: true,
    title: {
      pt: 'Aura Headless Commerce',
      en: 'Aura Headless Commerce',
    },
    shortDescription: {
      pt: 'Plataforma de e-commerce moderna com arquitetura headless, navegação instantânea, checkout otimizado e nota máxima no Google Lighthouse.',
      en: 'Modern headless commerce storefront delivering instant page transitions, frictionless checkout, and 100/100 Google Lighthouse scores.',
    },
    fullDescription: {
      pt: 'Desenvolvido sob o paradigma Jamstack, o Aura Headless Commerce combina Next.js / React no cliente com APIs RESTful no backend. Utiliza geração estática incremental (ISR) para páginas de produto instantâneas e micro-animações com Framer Motion.',
      en: 'Engineered under the Jamstack paradigm, Aura Headless Commerce pairs Next.js / React with resilient RESTful APIs. Leveraging Incremental Static Regeneration (ISR) for instant product loads and silky Framer Motion micro-interactions.',
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/mwantony/aura-headless-commerce',
    liveUrl: 'https://aura-commerce-demo.vercel.app',
    highlights: {
      pt: [
        'Tempo de carregamento inicial inferior a 0.8s com 100 pontos no Google Lighthouse',
        'Carrinho reativo com persistência em IndexedDB e sincronização otimista',
        'Fluxo de checkout internacional com suporte a moedas dinâmicas e Stripe Elements',
        'Totalmente acessível (WCAG AA) com suporte a navegação completa via teclado',
      ],
      en: [
        'Sub-0.8s initial load time with perfect 100 score on Google Lighthouse',
        'Optimistic reactive shopping cart powered by IndexedDB offline-first sync',
        'Multi-currency global checkout integration via Stripe Elements and Apple Pay',
        'WCAG AA accessible with comprehensive keyboard navigation and screen-reader support',
      ],
    },
    stats: [
      { label: { pt: 'Lighthouse', en: 'Lighthouse' }, value: '100/100' },
      { label: { pt: 'Conversão', en: 'Conversion Boost' }, value: '+28%' },
      { label: { pt: 'First Paint', en: 'First Paint' }, value: '0.4s' },
    ],
  },
  {
    id: 'devflow-engine',
    category: 'fullstack',
    featured: false,
    title: {
      pt: 'DevFlow Sprint Engine',
      en: 'DevFlow Sprint Engine',
    },
    shortDescription: {
      pt: 'Gerenciador de tarefas e sprints ágeis colaborativo com quadros Kanban drag-and-drop, rastreamento de tempo e automações customizadas.',
      en: 'Collaborative agile task and sprint planner with smooth drag-and-drop Kanban boards, team time tracking, and customizable workflow automations.',
    },
    fullDescription: {
      pt: 'Plataforma para equipes de engenharia de software gerenciarem backlogs, estimativas de poker planning e ciclos de entrega. Backend em Node.js com arquitetura limpa e frontend reativo com React e Tailwind.',
      en: 'A tool built for software engineering teams to manage backlogs, planning poker estimates, and release cycles. Features a clean Node.js backend architecture with an ultra-responsive React and Tailwind frontend.',
    },
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/mwantony/devflow-sprint-engine',
    liveUrl: 'https://devflow-engine.vercel.app',
    highlights: {
      pt: [
        'Colaboração multiusuário em tempo real com cursores e atualizações sem recarregamento',
        'Filtros avançados com busca instantânea e atalhos de teclado produtivos',
        'Integração direta com webhooks do GitHub para vincular commits e pull requests aos cards',
      ],
      en: [
        'Real-time multi-user board updates with live presence and zero flicker',
        'Advanced hierarchical filters with fuzzy instant search and power-user keyboard shortcuts',
        'Native GitHub webhook integration linking pull requests and commits directly to tasks',
      ],
    },
    stats: [
      { label: { pt: 'Produtividade', en: 'Velocity Gain' }, value: '+35%' },
      { label: { pt: 'Tempo Sinc.', en: 'Sync Time' }, value: '12ms' },
    ],
  },
  {
    id: 'laravel-api-gateway',
    category: 'backend',
    featured: false,
    title: {
      pt: 'Core Gateway & Auth Service',
      en: 'Core Gateway & Auth Service',
    },
    shortDescription: {
      pt: 'API Gateway de alta performance em Laravel / PHP 8 com rate limiting granular, autenticação JWT/OAuth2 e roteamento reverso de microsserviços.',
      en: 'High-performance API Gateway built with Laravel / PHP 8 featuring granular rate limiting, OAuth2/JWT auth, and reverse proxy routing.',
    },
    fullDescription: {
      pt: 'Serviço central de autenticação e roteamento para ecossistemas distribuídos. Gerencia cotas de tráfego, telemetria de chamadas, assinatura criptográfica de requisições e isolamento de falhas por circuit breaker.',
      en: 'Central authentication and traffic routing gateway for distributed microservice clusters. Handles per-client rate quotas, cryptographic signature verification, circuit-breaker fault tolerance, and centralized logging.',
    },
    tags: ['Laravel', 'PHP 8', 'Redis', 'Docker', 'JWT', 'Nginx', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/mwantony/core-api-gateway',
    highlights: {
      pt: [
        'Rate limiting dinâmico distribuído em Redis com janelas deslizantes (Sliding Window)',
        'Validação criptográfica de tokens JWT com rotação assíncrona de chaves públicas',
        'Resiliência com Circuit Breaker pattern prevenindo falhas em cascata nos microsserviços',
      ],
      en: [
        'Distributed sliding-window rate limiting backed by Redis clusters',
        'Cryptographic JWT token validation with asynchronous public key rotation',
        'Circuit Breaker pattern implementation preventing cascading failures across downstream services',
      ],
    },
    stats: [
      { label: { pt: 'Vazão', en: 'Throughput' }, value: '5K req/s' },
      { label: { pt: 'Overhead', en: 'Gateway Overhead' }, value: '< 4ms' },
    ],
  },
  {
    id: 'cloud-sentinel',
    category: 'frontend',
    featured: false,
    title: {
      pt: 'CloudSentinel Security Hub',
      en: 'CloudSentinel Security Hub',
    },
    shortDescription: {
      pt: 'Interface analítica para auditoria contínua de postura de segurança em nuvem (CSPM) e conformidade LGPD/GDPR.',
      en: 'Interactive analytics interface for continuous cloud security posture management (CSPM) and GDPR/LGPD compliance monitoring.',
    },
    fullDescription: {
      pt: 'Dashboard intuitivo com visualização de topologias de rede, identificação de vulnerabilidades em contêineres e geração de relatórios de conformidade regulatória para times de DevSecOps.',
      en: 'Intuitive security dashboard offering visual cloud topology mapping, automated container vulnerability scans, and regulatory compliance posture audits for DevSecOps teams.',
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/mwantony/cloud-sentinel-ui',
    liveUrl: 'https://cloud-sentinel.vercel.app',
    highlights: {
      pt: [
        'Interface visual moderna com suporte nativo a Dark Mode e acessibilidade',
        'Mapeamento interativo de vetores de ataque com grafos visuais navegáveis',
        'Exportação de dossiês de auditoria em conformidade com padrões CIS Benchmarks',
      ],
      en: [
        'Modern minimalist UI with dark mode ergonomics and WCAG compliance',
        'Interactive attack vector mapping rendered via responsive visual graphs',
        'Instant one-click audit report generation conforming to CIS Benchmark standards',
      ],
    },
    stats: [
      { label: { pt: 'Auditoria', en: 'Audit Speed' }, value: 'Instant' },
      { label: { pt: 'Regras CIS', en: 'CIS Rules' }, value: '250+' },
    ],
  },
];
