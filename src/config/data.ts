import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor, FiCode } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiOpenai,
  SiFastapi,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/cauaprjct",
  },
  {
    id: 2,
    priority: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/caua-alves-0975a129b/",
  },
  {
    id: 3,
    priority: 3,
    title: "Freelancer",
    url: "https://www.freelancer.com/u/CauaAlves",
  },
];

export const personalInfo = {
  name: "Cauã Alves",
  title: "Desenvolvedor Full-Stack | Python, React, Next.js & Flutter",
  avatar: "/images/about/caua-alves.png",
  email: "contato@cauadev.com",
  email2: "cauaalvesbalbino@gmail.com",
  location: "Rio de Janeiro, Brasil",
  description:
    "Dev Full Stack focado em soluções práticas. Trabalho com Python para backend e automação, React/Next.js para web e Flutter para mobile. Uso ferramentas de IA para acelerar o desenvolvimento e entregar resultados rápidos. Atuando como freelancer desde 2023 com avaliação 5.0⭐. Transformo ideias em produtos funcionais — do MVP ao deploy.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "CauaDev Solutions",
    position: "Desenvolvedor Full Stack",
    period: "Janeiro 2017 - Presente",
    shortDesc:
      "Desenvolvimento de soluções web e mobile para clientes nacionais e internacionais, com foco em automação, aplicações com IA e entrega rápida.",
    bulletPoints: [
      "Desenvolvimento de aplicações web com React, Next.js e TypeScript",
      "Criação de apps mobile com Flutter e Dart",
      "Automação de processos e bots com Python",
      "Integração com APIs de IA (OpenAI, Google Gemini, Hugging Face)",
      "Entrega de MVPs rápidos e soluções sob medida para clientes",
      "Suporte e manutenção contínua de projetos entregues",
    ],
  },
  {
    company: "Freelancer Internacional",
    position: "Desenvolvedor Full-Stack",
    period: "2019 - Presente",
    shortDesc:
      "Atuação em plataformas globais como Freelancer.com, com avaliação 5.0⭐. Especializado em entregar soluções completas com foco em resultados.",
    bulletPoints: [
      "Desenvolvimento de dashboards e plataformas web com React/Node.js",
      "Criação de aplicativos mobile com Flutter",
      "Automação de processos empresariais com Python e IA",
      "Integração com APIs RESTful e serviços de terceiros",
      "Comunicação proativa e entrega dentro do prazo combinado",
    ],
  },
];

export const techStack = [
  // === MOBILE DEVELOPMENT ===
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400", type: "Mobile" },
  { name: "Dart", icon: SiDart, color: "text-blue-600", type: "Mobile" },

  // === FRONTEND FRAMEWORKS ===
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "Frontend" },

  // === LANGUAGES ===
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", type: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", type: "Languages" },
  { name: "Python", icon: FaPython, color: "text-blue-400", type: "Languages" },

  // === STYLING & UI ===
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", type: "Styling" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500", type: "Styling" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500", type: "Styling" },

  // === BACKEND FRAMEWORKS ===
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", type: "Backend" },
  { name: "Express", icon: SiExpress, color: "text-gray-400", type: "Backend" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-500", type: "Backend" },

  // === DATABASES ===
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", type: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", type: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", type: "Database" },

  // === AI & APIs ===
  { name: "OpenAI API", icon: SiOpenai, color: "text-green-400", type: "AI/ML" },

  // === BUILD TOOLS ===
  { name: "Vite", icon: SiVite, color: "text-purple-500", type: "Build" },

  // === CLOUD & DEPLOY ===
  { name: "Vercel", icon: SiVercel, color: "text-white", type: "Cloud" },

  // === VERSION CONTROL ===
  { name: "Git", icon: FaGitAlt, color: "text-orange-500", type: "Tools" },
];

export const projects = [
  {
    title: "SocialBot AI",
    description:
      "Bot de automação para redes sociais com inteligência artificial. Publica automaticamente no Twitter, Instagram e LinkedIn usando OpenAI e Hugging Face. Inclui agendamento inteligente, análise de engajamento e arquitetura modular.",
    image: "/images/projects/free-ai-hub.webp",
    liveUrl: "https://github.com/cauaprjct/socialbot-ai",
    githubUrl: "https://github.com/cauaprjct/socialbot-ai",
    techStack: techStack.filter((item) =>
      ["Python", "OpenAI API"].includes(item.name)
    ),
  },
  {
    title: "Beemo",
    description:
      "Assistente de IA para arquivos Office usando Google Gemini. Processa e analisa documentos do Microsoft Office automaticamente, extraindo insights e automatizando tarefas repetitivas de documentação.",
    image: "/images/projects/snaploom.webp",
    liveUrl: "https://github.com/cauaprjct/beemo",
    githubUrl: "https://github.com/cauaprjct/beemo",
    techStack: techStack.filter((item) =>
      ["Python"].includes(item.name)
    ),
  },
  {
    title: "Nero Discord Bot",
    description:
      "Bot Discord modular e multi-tenant com integração de IA (Gemini 2.0) e monitoramento. Sistema extensível com comandos personalizados, automação de servidores e respostas inteligentes em tempo real.",
    image: "/images/projects/free-games-hub.webp",
    liveUrl: "https://github.com/cauaprjct/nero-discord-bot",
    githubUrl: "https://github.com/cauaprjct/nero-discord-bot",
    techStack: techStack.filter((item) =>
      ["TypeScript", "Node.js"].includes(item.name)
    ),
  },
  {
    title: "VoiceScribe",
    description:
      "Aplicativo Flutter de transcrição de áudio com IA. Converte áudio em texto com alta precisão, ideal para reuniões, aulas e entrevistas. Interface limpa e suporte a múltiplos idiomas.",
    image: "/images/projects/coin-echo.webp",
    liveUrl: "https://github.com/cauaprjct/voicescribe",
    githubUrl: "https://github.com/cauaprjct/voicescribe",
    techStack: techStack.filter((item) =>
      ["Flutter", "Dart", "Firebase"].includes(item.name)
    ),
  },
  {
    title: "StockAI Brasil",
    description:
      "Dashboard interativo de análise de ações da B3 com Machine Learning. Visualização de dados financeiros, predições baseadas em modelos de ML e interface intuitiva para acompanhamento do mercado brasileiro.",
    image: "/images/projects/free-ai-hub.webp",
    liveUrl: "https://github.com/cauaprjct/stockai-brasil",
    githubUrl: "https://github.com/cauaprjct/stockai-brasil",
    techStack: techStack.filter((item) =>
      ["Python", "FastAPI"].includes(item.name)
    ),
  },
  {
    title: "Generative Py",
    description:
      "Arte generativa com Python — sem IA, apenas matemática. Gera fractais e padrões matemáticos visualmente impressionantes. Exploração de algoritmos matemáticos para criação artística computacional.",
    image: "/images/projects/snaploom.webp",
    liveUrl: "https://github.com/cauaprjct/generative-py",
    githubUrl: "https://github.com/cauaprjct/generative-py",
    techStack: techStack.filter((item) =>
      ["Python"].includes(item.name)
    ),
  },
  {
    title: "Dashboard Analytics Empresarial",
    description:
      "Plataforma de analytics desenvolvida para cliente internacional. Painéis interativos, visualização de métricas em tempo real e relatórios automatizados. Projeto freelancer entregue com React e Node.js.",
    image: "/images/projects/coin-echo.webp",
    liveUrl: "#",
    githubUrl: "",
    techStack: techStack.filter((item) =>
      ["React", "Next.js", "Node.js", "TypeScript"].includes(item.name)
    ),
  },
  {
    title: "App de Fitness",
    description:
      "Aplicativo mobile de fitness e saúde desenvolvido com Flutter. Rastreamento de exercícios, monitoramento de calorias e planos personalizados. Projeto freelancer entregue para cliente do setor de wellness.",
    image: "/images/projects/free-games-hub.webp",
    liveUrl: "#",
    githubUrl: "",
    techStack: techStack.filter((item) =>
      ["Flutter", "Dart", "Firebase"].includes(item.name)
    ),
  },
];

export const setupSpecs = [
  {
    title: "Workstation Profissional",
    subTitle: "Setup otimizado para desenvolvimento com processador multi-core e memória suficiente para Flutter e React.",
    icon: FiCpu,
  },
  {
    title: "Dual Monitor Setup",
    subTitle: "Dois monitores para produtividade máxima no desenvolvimento full-stack.",
    icon: FiMonitor,
  },
  {
    title: "Audio & Peripherals",
    subTitle: "Periféricos de qualidade para longas sessões de código e reuniões com clientes.",
    icon: FiHeadphones,
  },
  {
    title: "Workspace Ergonômico",
    subTitle: "Ergonomia para sessões longas de desenvolvimento e entregas rápidas.",
    icon: HiOutlineDesktopComputer,
  },
];

export const testimonials = [
  {
    name: "Brendan O.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/u/CauaAlves",
    position: "Forex Market Research: Historical Data",
    avatar: "/images/testimonials/vikshak.webp",
    testimonial:
      "Was a great working with Caua, he understood the task and got on with delivering an excellent solution.",
  },
  {
    name: "Mariano S.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/u/CauaAlves",
    position: "DMV Query Extraction in DAX Studio",
    avatar: "/images/testimonials/shwetank.webp",
    testimonial:
      "Highly recommended! Responsible, fast.",
  },
  {
    name: "Maria O.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/u/CauaAlves",
    position: "Análise de Mercado + Sistema Digital (Portugal)",
    avatar: "/images/testimonials/vikshak.webp",
    testimonial:
      "Excelente profissional. Recomendo.",
  },
];
