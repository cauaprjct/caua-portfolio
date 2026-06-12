import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import {
  FiCpu,
  FiHeadphones,
  FiMonitor,
  FiCode,
  FiBarChart2,
  FiDatabase,
  FiZap,
} from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbBrandAzure } from "react-icons/tb";
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
  SiKotlin,
  SiStreamlit,
  SiPandas,
  SiScikitlearn,
  SiGooglegemini,
  SiDocker,
  SiMysql,
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
  title: "Dados, BI & Automação | Power BI · Azure · Python",
  email: "cauaalvesbalbino@gmail.com",
  location: "Rio de Janeiro, Brasil",
  description:
    "Trabalho com Dados, Business Intelligence e Automação — transformo dados brutos e processos manuais em sistemas confiáveis que rodam sozinhos. Power BI (dashboards executivos e modelagem DAX, com distribuição automática por e-mail), pipelines e automações serverless no Azure (Functions, Storage) e Python, além de automação web com Playwright. Também atuo com apps Android nativos (Kotlin/Jetpack Compose) e integração de LLMs (OpenAI, Anthropic, Gemini). Desde 2023 entrego para clientes no Brasil, Reino Unido e Portugal, com 100% de avaliação 5⭐.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Independente / Freelancer.com",
    position: "Desenvolvedor Freelancer de Dados & Automação",
    period: "Janeiro 2023 - Presente",
    shortDesc:
      "Soluções de dados e automação para clientes no Brasil, Reino Unido e Portugal: relatórios Power BI, automação no Azure e pipelines em Python. 100% de projetos concluídos e todas as avaliações 5⭐ (US$28/h).",
    bulletPoints: [
      "Relatórios automatizados de telefonia em Power BI (UK, 47 colaboradores) com envio agendado por e-mail",
      "Pipeline serverless no Azure para extração de metadados de Power BI (Functions, Storage Queues, VMs)",
      "Modelagem e medidas DAX, com distribuição de dashboards sem trabalho manual nem licenças extras",
      "Processamento e tratamento de dados históricos de Forex em Python",
      "Automação de backend B2B em Portugal e integrações via API",
      "Documentação clara e entrega organizada, para o cliente operar tudo sozinho",
    ],
  },
  {
    company: "Projetos próprios (open source)",
    position: "Desenvolvedor de Soluções de IA & Automação",
    period: "2025 - Presente",
    shortDesc:
      "Desenvolvimento de ferramentas de dados, IA e automação publicadas no GitHub, integrando LLMs e engenharia de dados a casos de uso reais.",
    bulletPoints: [
      "Agente RAG sobre documentos financeiros da B3 com retrieval híbrido (denso + BM25 + RRF)",
      "Dashboards de análise de ações com Machine Learning (Streamlit + Python)",
      "Análise de planilhas Excel/CSV com IA e chat em português",
      "Apps Android nativos em Kotlin/Jetpack Compose com captura e exportação de dados",
      "Integração de LLMs (OpenAI, Anthropic, Gemini) e backend em FastAPI",
    ],
  },
];

export const techStack = [
  // === DATA & BI ===
  { name: "Power BI", icon: FiBarChart2, color: "text-yellow-400", type: "Dados & BI" },
  { name: "DAX", icon: FiCode, color: "text-yellow-300", type: "Dados & BI" },
  { name: "SQL", icon: FiDatabase, color: "text-sky-400", type: "Dados & BI" },
  { name: "Pandas", icon: SiPandas, color: "text-indigo-400", type: "Dados & BI" },
  { name: "Streamlit", icon: SiStreamlit, color: "text-red-400", type: "Dados & BI" },

  // === CLOUD & AUTOMATION ===
  { name: "Azure", icon: TbBrandAzure, color: "text-blue-500", type: "Cloud & Automação" },
  { name: "Playwright", icon: FiZap, color: "text-green-400", type: "Cloud & Automação" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", type: "Cloud & Automação" },

  // === LANGUAGES ===
  { name: "Python", icon: FaPython, color: "text-blue-400", type: "Languages" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", type: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", type: "Languages" },

  // === MOBILE DEVELOPMENT ===
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-400", type: "Mobile" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400", type: "Mobile" },
  { name: "Dart", icon: SiDart, color: "text-blue-600", type: "Mobile" },

  // === BACKEND ===
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-500", type: "Backend" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", type: "Backend" },
  { name: "Express", icon: SiExpress, color: "text-gray-400", type: "Backend" },

  // === DATABASES ===
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", type: "Database" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-500", type: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", type: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", type: "Database" },

  // === AI & LLMs ===
  { name: "OpenAI API", icon: SiOpenai, color: "text-green-400", type: "AI/ML" },
  { name: "Google Gemini", icon: SiGooglegemini, color: "text-blue-400", type: "AI/ML" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "text-orange-400", type: "AI/ML" },

  // === FRONTEND ===
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", type: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500", type: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500", type: "Frontend" },

  // === TOOLS & DEPLOY ===
  { name: "Vite", icon: SiVite, color: "text-purple-500", type: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "text-white", type: "Tools" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500", type: "Tools" },
];

export const projects = [
  {
    title: "RAG Financeiro B3",
    description:
      "Agente RAG de perguntas e respostas sobre documentos financeiros da B3 (PDFs), com citações por documento e página. Retrieval híbrido (denso + BM25 + RRF) e interface em Streamlit. Foco em precisão e rastreabilidade das respostas.",
    liveUrl: "https://github.com/cauaprjct/rag-financeiro-b3",
    githubUrl: "https://github.com/cauaprjct/rag-financeiro-b3",
    techStack: techStack.filter((item) =>
      ["Python", "Streamlit", "Google Gemini"].includes(item.name)
    ),
  },
  {
    title: "Trading Bot Pro",
    description:
      "Sistema de trading algorítmico com Ensemble de Machine Learning (LightGBM + LSTM) para Forex. Scalper multi-ativo com Smart Money Concepts, backtesting e integração com MetaTrader 5.",
    liveUrl: "https://github.com/cauaprjct/trading-bot-pro",
    githubUrl: "https://github.com/cauaprjct/trading-bot-pro",
    techStack: techStack.filter((item) =>
      ["Python", "scikit-learn", "Pandas"].includes(item.name)
    ),
  },
  {
    title: "StockAI Brasil",
    description:
      "Dashboard interativo de análise de ações da B3 com previsões de Machine Learning. Visualização de dados financeiros, modelos preditivos e interface intuitiva em Streamlit para acompanhamento do mercado brasileiro.",
    liveUrl: "https://github.com/cauaprjct/stockai-brasil",
    githubUrl: "https://github.com/cauaprjct/stockai-brasil",
    techStack: techStack.filter((item) =>
      ["Python", "Streamlit", "Pandas"].includes(item.name)
    ),
  },
  {
    title: "ExcelMind AI",
    description:
      "Ferramenta inteligente de análise de planilhas Excel/CSV com IA. Análise automática, gráficos interativos e chat em português sobre os dados. Ideal para extrair insights sem trabalho manual.",
    liveUrl: "https://github.com/cauaprjct/excelmind-ai",
    githubUrl: "https://github.com/cauaprjct/excelmind-ai",
    techStack: techStack.filter((item) =>
      ["Python", "Pandas"].includes(item.name)
    ),
  },
  {
    title: "Beemo",
    description:
      "Assistente de IA para arquivos Office com Google Gemini. Manipula Excel, Word, PowerPoint e PDF a partir de comandos em linguagem natural, automatizando tarefas repetitivas de documentação.",
    liveUrl: "https://github.com/cauaprjct/beemo",
    githubUrl: "https://github.com/cauaprjct/beemo",
    techStack: techStack.filter((item) =>
      ["Python", "Google Gemini"].includes(item.name)
    ),
  },
  {
    title: "SocialBot AI",
    description:
      "Bot de automação para redes sociais com IA. Publica automaticamente no Twitter, Instagram e LinkedIn usando OpenAI e Hugging Face. Arquitetura robusta com Circuit Breaker, métricas Prometheus e connection pooling.",
    liveUrl: "https://github.com/cauaprjct/socialbot-ai",
    githubUrl: "https://github.com/cauaprjct/socialbot-ai",
    techStack: techStack.filter((item) =>
      ["Python", "OpenAI API"].includes(item.name)
    ),
  },
  {
    title: "Nero Discord Bot",
    description:
      "Bot Discord modular e multi-tenant com integração de IA (Gemini 2.0), loja automatizada, sistema de organizações e monitoramento completo. Comandos personalizados e respostas inteligentes em tempo real.",
    liveUrl: "https://github.com/cauaprjct/nero-discord-bot",
    githubUrl: "https://github.com/cauaprjct/nero-discord-bot",
    techStack: techStack.filter((item) =>
      ["TypeScript", "Node.js"].includes(item.name)
    ),
  },
  {
    title: "VoiceScribe",
    description:
      "Aplicativo Flutter de transcrição de áudio com IA. Grava, transcreve e exporta em TXT/PDF com alta precisão. Ideal para reuniões, aulas e entrevistas, com interface limpa e responsiva.",
    liveUrl: "https://github.com/cauaprjct/voicescribe",
    githubUrl: "https://github.com/cauaprjct/voicescribe",
    techStack: techStack.filter((item) =>
      ["Flutter", "Dart", "Firebase"].includes(item.name)
    ),
  },
  {
    title: "SmartDocs Pro",
    description:
      "App Android de captura de documentos pela câmera, extração de dados estruturados e exportação para Excel/PDF. Desenvolvido em Kotlin com Jetpack Compose.",
    liveUrl: "https://github.com/cauaprjct/smartdocs-android",
    githubUrl: "https://github.com/cauaprjct/smartdocs-android",
    techStack: techStack.filter((item) =>
      ["Kotlin"].includes(item.name)
    ),
  },
  {
    title: "Social Down",
    description:
      "Aplicação web para baixar vídeos do TikTok, Instagram, YouTube e Facebook gratuitamente. Interface moderna construída com Next.js e TypeScript, com deploy na Vercel.",
    liveUrl: "https://social-down.vercel.app/",
    githubUrl: "https://github.com/cauaprjct/social-down",
    techStack: techStack.filter((item) =>
      ["TypeScript", "Next.js", "Tailwind CSS"].includes(item.name)
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
    name: "James P.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/power-bi/Power-Telephony-Reporting-Setup",
    position: "Power BI Telephony Reporting Setup (£135 GBP)",
    avatar: "",
    testimonial:
      "Will be using again very soon as work was excellent and communication plus feedback both above expectations.",
  },
  {
    name: "Brendan O.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/data-analysis/Forex-Market-Research-Historical-Data",
    position: "Forex Market Research: Historical Data ($20 USD)",
    avatar: "",
    testimonial:
      "Was a great working with Caua, he understood the task and got on with delivering an excellent solution.",
  },
  {
    name: "Mariano S.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/automation/DMV-Query-Extraction-DAX-Studio",
    position: "DMV Query Extraction in DAX Studio ($290 USD)",
    avatar: "",
    testimonial:
      "Highly recommended! Responsible, fast.",
  },
  {
    name: "Maria O.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/api-developmet/lise-Mercado-Sistema-Digital-Portugal",
    position: "Análise de Mercado + Sistema Digital, Portugal (€150 EUR)",
    avatar: "",
    testimonial:
      "Excelente profissional. Recomendo.",
  },
];
