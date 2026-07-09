import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  FiCpu,
  FiCode,
  FiBarChart2,
  FiDatabase,
  FiZap,
  FiWifi,
  FiTool,
  FiHardDrive,
  FiActivity,
  FiTerminal,
  FiCloud,
} from "react-icons/fi";
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
  SiOpenai,
  SiFastapi,
  SiKotlin,
  SiStreamlit,
  SiPandas,
  SiScikitlearn,
  SiGooglegemini,
  SiDocker,
  SiMysql,
  SiAndroid,
  SiVite,
} from "react-icons/si";

/* ------------------------------------------------------------------ */
/*  Contato & redes                                                    */
/* ------------------------------------------------------------------ */

export const contact = {
  name: "Cauã Alves",
  email: "cauaalvesbalbino@gmail.com",
  whatsapp: "5521970998386",
  whatsappLabel: "(21) 97099-8386",
  location: "Rio de Janeiro, Brasil",
};

/** Mensagem padrão ao abrir o WhatsApp pelo portfólio. */
export const whatsappPrefill =
  "Olá Cauã! Vim pelo portfólio e gostaria de conversar sobre um projeto.";

export function whatsappUrl(message: string = whatsappPrefill) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Âncoras do header (ids das seções na home). */
export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#cases", label: "Cases" },
  { href: "#sites-clientes", label: "Sites" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;

/** Disponibilidade — atualize quando estiver off. */
export const availability = {
  open: true,
  label: "Disponível para novos projetos",
  note: "Respondo pelo WhatsApp. Se for da minha área, já adianto escopo e próximos passos.",
};

/* ------------------------------------------------------------------ */
/*  Como funciona                                                      */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    step: "01",
    title: "Você me chama",
    desc: "WhatsApp com o que precisa: site, dashboard, automação ou suporte técnico. Quanto mais contexto, mais rápido o alinhamento.",
  },
  {
    step: "02",
    title: "Alinho escopo e prazo",
    desc: "Entendo a dor, o que entra (e o que não entra) e uma faixa de prazo honesta. Se não for pra mim, falo na boa.",
  },
  {
    step: "03",
    title: "Proposta simples",
    desc: "Combinamos entrega, etapas e forma de pagamento antes de começar — sem surpresa no meio do caminho.",
  },
  {
    step: "04",
    title: "Execução",
    desc: "Desenvolvo ou executo o serviço, com check-ins quando fizer sentido. Você acompanha o progresso.",
  },
  {
    step: "05",
    title: "Entrega e handoff",
    desc: "Entrego, ajusto o essencial e deixo o que for seu no ar (site, painel, máquina). Suporte pontual se combinarmos.",
  },
];

export const processTracks = [
  {
    label: "Site / web",
    tone: "dev" as const,
    blurb: "Brief → layout e páginas → revisão → deploy na Vercel.",
  },
  {
    label: "Dados & automação",
    tone: "dev" as const,
    blurb: "Dor do processo → modelo/pipeline → testes → rotina no automático.",
  },
  {
    label: "Suporte técnico",
    tone: "tech" as const,
    blurb: "Diagnóstico → orçamento → execução (PC, rede, Android) → validação com você.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faqItems = [
  {
    q: "Você faz site em WordPress ou Wix?",
    a: "Não. Trabalho com sites e apps sob medida em Next.js, Vite e React — da landing ao painel. Se você precisa de construtor de template, não sou a pessoa; se quer algo sob medida e no ar na Vercel, sim.",
  },
  {
    q: "Atende só no Rio de Janeiro?",
    a: "Suporte presencial e manutenção de equipamentos: foco no Rio (e região, conforme o caso). Software, dados, automação e sites: remoto para o Brasil e exterior — já entreguei no UK e em Portugal.",
  },
  {
    q: "Quanto tempo leva um site institucional?",
    a: "Depende do escopo (páginas, textos, fotos, integrações). Muitos sites de negócio local saem em dias ou poucas semanas depois do material alinhado. No primeiro contato eu te dou uma faixa realista pro seu caso.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Combinamos antes de iniciar: etapas e forma de pagamento ficam claras na proposta. Não começo o trabalho sem esse alinhamento.",
  },
  {
    q: "Você faz só site ou também Power BI / automação?",
    a: "As duas frentes de software: sites e sistemas web, e também dados, BI, RPA e integrações com IA. E o segundo trilho: suporte técnico (hardware, redes, Android).",
  },
  {
    q: "Como começo?",
    a: "Me chama no WhatsApp com o que você precisa. Se for da minha área, já adianto os próximos passos do processo acima.",
  },
];

export const socialLinks = [
  { id: 1, title: "GitHub", url: "https://github.com/cauaprjct" },
  { id: 2, title: "LinkedIn", url: "https://www.linkedin.com/in/cau%C3%A3-alves-0975a129b/" },
  { id: 3, title: "WhatsApp", url: whatsappUrl() },
  { id: 4, title: "Freelancer", url: "https://www.freelancer.com/u/CauaAlves" },
];

/* ------------------------------------------------------------------ */
/*  Hero split-screen — dois trilhos                                   */
/* ------------------------------------------------------------------ */

export const heroSection = {
  name: "Cauã Alves",
  location: "Rio de Janeiro, Brasil",
  tagline: "Desenvolvedor & Técnico de Informática",
  intro:
    "Escrevo o software e cuido da máquina. Do dashboard que roda sozinho ao computador que volta a funcionar.",
  dev: {
    label: "Desenvolvedor",
    kicker: "Escrevo o software",
    role: "Dados, BI, Automação & Web",
    blurb:
      "Transformo planilhas e trabalho manual em sistemas que rodam sozinhos — dashboards, automações, integrações com IA e sites/apps sob medida em Next.js e Vite.",
    stack: ["Python", "Next.js", "Vite", "Power BI", "Azure", "IA / LLMs"],
    code: [
      "$ python pipeline.py --deploy",
      "→ dashboard atualizado",
      "→ relatório enviado por e-mail",
      "✓ tudo rodando sozinho",
    ],
  },
  tech: {
    label: "Técnico de Informática",
    kicker: "E cuido da máquina",
    role: "Suporte, Manutenção & Redes",
    blurb:
      "Montagem, manutenção, formatação e redes. Deixo PCs e celulares rápidos de novo — com base na Academia do Hardware (200h).",
    stack: ["Manutenção", "Redes", "Windows / Linux", "Otimização Android"],
    code: [
      "$ adb shell otimizar --limpeza",
      "→ cache liberado: 4.2 GB",
      "→ apps em segundo plano: 0",
      "✓ celular rápido de novo",
    ],
  },
  socialLinks: socialLinks,
};

/* ------------------------------------------------------------------ */
/*  Proposta — dois trilhos, um profissional                           */
/* ------------------------------------------------------------------ */

export const twoTracks = {
  title: "Dois trilhos, um profissional",
  description:
    "A maioria dos negócios precisa das duas pontas: alguém que construa o sistema e alguém que mantenha o equipamento funcionando. Eu faço as duas — do código à manutenção, sem ficar passando de um prestador para outro.",
};

/* ------------------------------------------------------------------ */
/*  Serviços por trilho                                                */
/* ------------------------------------------------------------------ */

export const services = {
  dev: {
    label: "Desenvolvimento & Dados",
    icon: FiCode,
    items: [
      {
        title: "Dashboards Power BI & Web",
        desc: "Painéis executivos com modelagem DAX e distribuição automática por e-mail. Também em Next.js + Recharts.",
      },
      {
        title: "Automação & RPA",
        desc: "Tarefas repetitivas e coleta de dados no automático com Python e Playwright. Menos trabalho manual, menos erro.",
      },
      {
        title: "Integrações com IA",
        desc: "Chatbots, análise de documentos e assistentes com LLMs (OpenAI, Gemini, Claude) ligados ao seu negócio.",
      },
      {
        title: "Sites, Apps & Sistemas Web",
        desc: "Sites e aplicações sob medida com Next.js, Vite e React — landing pages, sites institucionais e painéis. Também apps Android nativos (Kotlin). Da ideia ao deploy na Vercel.",
      },
    ],
  },
  tech: {
    label: "Suporte & Manutenção",
    icon: FiTool,
    items: [
      {
        title: "Montagem & Manutenção",
        desc: "Montagem de PCs, troca de peças, limpeza e diagnóstico de hardware. Formação Academia do Hardware (200h).",
      },
      {
        title: "Formatação & Otimização",
        desc: "Instalação de Windows/Linux, backup, remoção de vírus e otimização. O computador rápido como no primeiro dia.",
      },
      {
        title: "Redes & Wi-Fi",
        desc: "Configuração de roteadores, redes cabeadas e Wi-Fi para casa e pequenos negócios.",
      },
      {
        title: "Checkup Android",
        desc: "Diagnóstico grátis e limpeza/otimização de celulares via ADB. Mais espaço, mais bateria, mais velocidade.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Experiência                                                        */
/* ------------------------------------------------------------------ */

export const workExperience = [
  {
    company: "Independente / Freelancer.com",
    position: "Desenvolvedor de Dados & Automação",
    period: "2023 - Presente",
    shortDesc:
      "Soluções de dados e automação para clientes no Brasil, Reino Unido e Portugal: relatórios Power BI, automação no Azure e pipelines em Python. 100% dos projetos concluídos e avaliação 5★.",
    bulletPoints: [
      "Relatórios automatizados de telefonia em Power BI (UK, 47 colaboradores) com envio agendado por e-mail",
      "Pipeline serverless no Azure para extração de metadados de Power BI (Functions, Storage Queues)",
      "Modelagem e medidas DAX, com distribuição de dashboards sem trabalho manual",
      "Automação de backend B2B em Portugal e integrações via API",
      "Atuação ponta a ponta: da dor do cliente à entrega e manutenção",
    ],
  },
  {
    company: "Suporte Técnico & Informática",
    position: "Técnico de Informática",
    period: "Formação contínua",
    shortDesc:
      "Manutenção de computadores e suporte técnico com base na formação Academia do Hardware (200h): hardware, redes e sistemas operacionais, além de otimização de dispositivos Android.",
    bulletPoints: [
      "Montagem, manutenção e diagnóstico de hardware de computadores",
      "Formatação, backup e otimização em Windows e Linux",
      "Configuração de redes cabeadas e Wi-Fi",
      "Limpeza e otimização de celulares Android via ADB (Checkup Android)",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Stack técnico (usado pelos projetos e pela seção de skills)        */
/*  track: "dev" | "tech"                                              */
/* ------------------------------------------------------------------ */

export const techStack = [
  // === DEV: Dados & BI ===
  { name: "Power BI", icon: FiBarChart2, color: "text-cyan-300", track: "dev", group: "Dados & BI" },
  { name: "DAX", icon: FiCode, color: "text-cyan-300", track: "dev", group: "Dados & BI" },
  { name: "SQL", icon: FiDatabase, color: "text-cyan-300", track: "dev", group: "Dados & BI" },
  { name: "Pandas", icon: SiPandas, color: "text-cyan-300", track: "dev", group: "Dados & BI" },
  { name: "Streamlit", icon: SiStreamlit, color: "text-cyan-300", track: "dev", group: "Dados & BI" },

  // === DEV: Linguagens ===
  { name: "Python", icon: FaPython, color: "text-sky-300", track: "dev", group: "Linguagens" },
  { name: "TypeScript", icon: SiTypescript, color: "text-sky-300", track: "dev", group: "Linguagens" },
  { name: "JavaScript", icon: SiJavascript, color: "text-sky-300", track: "dev", group: "Linguagens" },
  { name: "Kotlin", icon: SiKotlin, color: "text-sky-300", track: "dev", group: "Linguagens" },
  { name: "Dart", icon: SiDart, color: "text-sky-300", track: "dev", group: "Linguagens" },

  // === DEV: Web & Cloud ===
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-100", track: "dev", group: "Web & Cloud" },
  { name: "Vite", icon: SiVite, color: "text-slate-100", track: "dev", group: "Web & Cloud" },
  { name: "React", icon: FaReact, color: "text-slate-100", track: "dev", group: "Web & Cloud" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-slate-100", track: "dev", group: "Web & Cloud" },
  { name: "Azure", icon: TbBrandAzure, color: "text-slate-100", track: "dev", group: "Web & Cloud" },
  { name: "Docker", icon: SiDocker, color: "text-slate-100", track: "dev", group: "Web & Cloud" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-100", track: "dev", group: "Web & Cloud" },

  // === DEV: Backend & Dados ===
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-300", track: "dev", group: "Backend & Dados" },
  { name: "Node.js", icon: FaNodeJs, color: "text-teal-300", track: "dev", group: "Backend & Dados" },
  { name: "Express", icon: SiExpress, color: "text-teal-300", track: "dev", group: "Backend & Dados" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-teal-300", track: "dev", group: "Backend & Dados" },
  { name: "MySQL", icon: SiMysql, color: "text-teal-300", track: "dev", group: "Backend & Dados" },
  { name: "MongoDB", icon: SiMongodb, color: "text-teal-300", track: "dev", group: "Backend & Dados" },

  // === DEV: IA & Mobile ===
  { name: "OpenAI", icon: SiOpenai, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },
  { name: "Gemini", icon: SiGooglegemini, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },
  { name: "Flutter", icon: SiFlutter, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },
  { name: "Firebase", icon: SiFirebase, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },
  { name: "Playwright", icon: FiZap, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },

  // === TÉCNICO: Hardware & Suporte ===
  { name: "Manutenção de PC", icon: FiCpu, color: "text-amber-300", track: "tech", group: "Hardware" },
  { name: "Hardware", icon: FiHardDrive, color: "text-amber-300", track: "tech", group: "Hardware" },
  { name: "Windows", icon: FaWindows, color: "text-amber-300", track: "tech", group: "Sistemas" },
  { name: "Linux", icon: FaLinux, color: "text-amber-300", track: "tech", group: "Sistemas" },
  { name: "Redes & Wi-Fi", icon: FiWifi, color: "text-orange-300", track: "tech", group: "Redes" },
  { name: "Android / ADB", icon: SiAndroid, color: "text-orange-300", track: "tech", group: "Mobile" },
  { name: "Otimização", icon: FiActivity, color: "text-orange-300", track: "tech", group: "Mobile" },
  { name: "Terminal / CLI", icon: FiTerminal, color: "text-orange-300", track: "tech", group: "Sistemas" },
];

/* ------------------------------------------------------------------ */
/*  Cases — problema → solução → resultado (métricas só se reais)      */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  sector: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export const cases: CaseStudy[] = [
  {
    id: "power-bi-telephony",
    title: "Relatórios de telefonia automatizados",
    context: "Cliente no Reino Unido · Freelancer.com",
    sector: "Dados & Power BI",
    problem:
      "Time de telefonia com 47 colaboradores dependia de relatório manual: montar, atualizar e distribuir o painel consumia tempo e gerava atraso na leitura do dia a dia.",
    solution:
      "Modelei o relatório em Power BI com medidas DAX e configurei distribuição automática por e-mail em agenda fixa — sem exigir licenças extras para cada leitor do time.",
    results: [
      "Envio agendado por e-mail, sem trabalho manual a cada ciclo",
      "Cobertura do time de 47 colaboradores no mesmo fluxo de distribuição",
      "Avaliação 5★ e feedback de comunicação acima do esperado (cliente: James P.)",
    ],
    stack: ["Power BI", "DAX", "Automação"],
    link: "https://www.freelancer.com/projects/power-bi/Power-Telephony-Reporting-Setup",
    linkLabel: "Ver no Freelancer.com",
  },
  {
    id: "azure-pbi-pipeline",
    title: "Pipeline serverless de metadados Power BI",
    context: "Cliente internacional · automação Azure",
    sector: "Cloud & Automação",
    problem:
      "Extração de metadados e rotinas ligadas a relatórios Power BI exigiam intervenção humana; o processo não escalava e não rodava de forma confiável fora do horário comercial.",
    solution:
      "Montei pipeline serverless no Azure com Functions, Storage Queues e apoio de VMs quando necessário — da fila de jobs à execução e persistência, ponta a ponta.",
    results: [
      "Operação 24/7 sem intervenção manual no ciclo de extração",
      "Arquitetura serverless (Functions + filas) pronta para novas rotinas",
      "Entrega alinhada ao perfil de automação de dados no portfólio Freelancer",
    ],
    stack: ["Azure", "Python", "Functions", "Storage Queues"],
    link: "https://www.freelancer.com/u/CauaAlves",
    linkLabel: "Perfil Freelancer.com",
  },
  {
    id: "suporti-cell-site",
    title: "Site institucional — loja única de assistência",
    context: "SuporTI Cell · Realengo, RJ",
    sector: "Site local",
    problem:
      "A loja precisava de presença digital clara depois de unificar as unidades: celular, PC e games no mesmo endereço, com orçamento rápido e sem confusão de “duas lojas”.",
    solution:
      "Site sob medida em Next.js com hero, serviços (celular + PC/games), diferenciais, horários e CTA direto no WhatsApp — copy e estrutura alinhadas a uma loja só (Loja A).",
    results: [
      "Mensagem única: tudo na mesma loja em Realengo",
      "Orçamento em um toque via WhatsApp em cada serviço",
      "Site no ar em produção (Vercel) com identidade visual da marca",
    ],
    stack: ["Next.js", "TypeScript", "Vercel", "WhatsApp"],
    link: "https://suporti-cell-site.vercel.app",
    linkLabel: "Abrir o site",
  },
];

/* ------------------------------------------------------------------ */
/*  Projetos                                                           */
/*  featured + order: destaques na home; resto em “Ver mais”.          */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
  order?: number;
};

export const projects: Project[] = [
  {
    title: "Painel Claro",
    description:
      "Painel financeiro/fiscal white-label que escritórios de contabilidade entregam ao cliente PJ: faturamento, impostos e a Reforma Tributária 2026. Next.js + Recharts.",
    liveUrl: "https://painel-contador.vercel.app",
    githubUrl: "https://github.com/cauaprjct/painel-claro",
    tags: ["Next.js", "Recharts", "TypeScript"],
    featured: true,
    order: 1,
  },
  {
    title: "Power BI Telephony Reporting",
    description:
      "Relatórios automatizados de telefonia em Power BI (Reino Unido, 47 colaboradores) com envio agendado por e-mail, modelagem DAX e distribuição sem trabalho manual nem licenças extras.",
    githubUrl: "https://www.freelancer.com/projects/power-bi/Power-Telephony-Reporting-Setup",
    tags: ["Power BI", "DAX", "Automação"],
    featured: true,
    order: 2,
  },
  {
    title: "Azure Power BI Data Pipeline",
    description:
      "Pipeline serverless no Azure (Functions, Storage Queues, VMs) para extração de metadados de Power BI e automação de relatórios, rodando 24/7 sem intervenção manual.",
    githubUrl: "https://www.freelancer.com/u/CauaAlves",
    tags: ["Azure", "Python", "Serverless"],
    featured: true,
    order: 3,
  },
  {
    title: "AutoRPA",
    description:
      "Plataforma de automação de processos (RPA) com IA. Orquestra tarefas repetitivas de ponta a ponta. FastAPI + Next.js + PostgreSQL.",
    githubUrl: "https://github.com/cauaprjct/AutoRPA",
    tags: ["Python", "FastAPI", "Next.js"],
    featured: true,
    order: 4,
  },
  {
    title: "RAG Financeiro B3",
    description:
      "Agente de perguntas e respostas sobre documentos financeiros da B3 com citações por página. Retrieval híbrido (denso + BM25 + RRF) e interface em Streamlit.",
    githubUrl: "https://github.com/cauaprjct/rag-financeiro-b3",
    tags: ["Python", "Gemini", "Streamlit"],
    featured: true,
    order: 5,
  },
  {
    title: "Social Down",
    description:
      "App web para baixar vídeos do TikTok, Instagram, YouTube e Facebook. Interface moderna em Next.js + TypeScript, com deploy na Vercel.",
    liveUrl: "https://social-down.vercel.app",
    githubUrl: "https://github.com/cauaprjct/social-down",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    order: 6,
  },
  {
    title: "ExcelMind AI",
    description:
      "Análise inteligente de planilhas Excel/CSV com IA: gráficos automáticos e chat em português sobre os dados. Insights sem trabalho manual.",
    githubUrl: "https://github.com/cauaprjct/excelmind-ai",
    tags: ["Python", "Pandas", "IA"],
    featured: false,
    order: 7,
  },
  {
    title: "StockAI Brasil",
    description:
      "Dashboard de análise de ações da B3 com previsões de Machine Learning. Visualização de dados financeiros e modelos preditivos em Streamlit.",
    githubUrl: "https://github.com/cauaprjct/stockai-brasil",
    tags: ["Python", "ML", "Streamlit"],
    featured: false,
    order: 8,
  },
  {
    title: "Forex Historical Data & Dataset",
    description:
      "Processamento e tratamento de dados históricos de Forex em Python: pipeline de extração, limpeza e consolidação para análise e pesquisa de mercado.",
    githubUrl: "https://www.freelancer.com/u/CauaAlves",
    tags: ["Python", "Pandas", "Dados"],
    featured: false,
    order: 9,
  },
];

export function sortByFeaturedOrder<T extends { featured?: boolean; order?: number }>(
  items: T[]
): { featured: T[]; rest: T[] } {
  const byOrder = (a: T, b: T) => (a.order ?? 99) - (b.order ?? 99);
  const featured = items.filter((i) => i.featured).sort(byOrder);
  const rest = items.filter((i) => !i.featured).sort(byOrder);
  return { featured, rest };
}

/* ------------------------------------------------------------------ */
/*  Sites publicados para clientes (Vercel production)                 */
/*  Exclui: portfólio próprio, demos internas, APIs e apps pessoais.   */
/* ------------------------------------------------------------------ */

export type ClientSite = {
  name: string;
  client: string;
  segment: string;
  location: string;
  description: string;
  liveUrl: string;
  tags: string[];
  featured?: boolean;
  order?: number;
};

export const clientSites: ClientSite[] = [
  {
    name: "SuporTI Cell",
    client: "SuporTI Cell",
    segment: "Assistência técnica",
    location: "Realengo, RJ",
    description:
      "Site institucional de uma loja única em Realengo: celular (tela, bateria, placa), PC/notebook, impressora, console e controle. Orçamento via WhatsApp, horários e endereço.",
    liveUrl: "https://suporti-cell-site.vercel.app",
    tags: ["Institucional", "WhatsApp", "Local"],
    featured: true,
    order: 1,
  },
  {
    name: "Ferragens Shalon",
    client: "Ferragens Shalon",
    segment: "Material de construção",
    location: "Realengo, RJ",
    description:
      "Loja parceira Rede Casa Nossa: catálogo por categorias (hidráulica, elétrica, tintas…), galeria da loja física e contato para orçamento.",
    liveUrl: "https://ferragens-shalon.vercel.app",
    tags: ["Comércio", "Catálogo", "Local"],
    featured: true,
    order: 2,
  },
  {
    name: "Velucci's Beauty House",
    client: "Velucci's Beauty House",
    segment: "Salão de beleza",
    location: "Leblon, RJ",
    description:
      "Casa de beleza com +15 anos no Leblon: cabelo, unhas, estética, barbearia e podologia. Agendamento por WhatsApp e Trinks, com prova social no Google.",
    liveUrl: "https://veluccis-site.vercel.app",
    tags: ["Beleza", "Agendamento", "Leblon"],
    featured: true,
    order: 3,
  },
  {
    name: "Rock e Barba",
    client: "Rock e Barba",
    segment: "Barbearia",
    location: "Icaraí, Niterói",
    description:
      "Barbearia com nota 5,0 no Google: corte, barba, combo e dia do noivo. Agendamento com hora marcada e presença em Icaraí.",
    liveUrl: "https://rockebarba-site.vercel.app",
    tags: ["Barbearia", "Niterói", "Agendamento"],
    featured: true,
    order: 4,
  },
  {
    name: "Márcio Roberto — Fotógrafo",
    client: "Márcio Roberto",
    segment: "Fotografia",
    location: "Rio de Janeiro",
    description:
      "Portfólio de fotografia de eventos corporativos, cerimônias institucionais e retratos. Galeria de trabalhos e orçamento por WhatsApp/e-mail.",
    liveUrl: "https://marcio-site-vert.vercel.app",
    tags: ["Portfólio", "Fotografia", "Eventos"],
    featured: true,
    order: 5,
  },
  {
    name: "Medstar Rio",
    client: "Medstar Rio",
    segment: "Material hospitalar",
    location: "Magalhães Bastos, RJ",
    description:
      "Aluguel, venda e conserto de material hospitalar (cadeiras, camas, andadores). Entrega na Zona Oeste e proposta B2B para empresas (evacuação/NBR).",
    liveUrl: "https://medstar-site.vercel.app",
    tags: ["Saúde", "Aluguel", "B2B"],
    featured: true,
    order: 6,
  },
  {
    name: "Bistrô Hair",
    client: "Bistrô Hair",
    segment: "Salão — mechas e loiros",
    location: "Copacabana, RJ",
    description:
      "Especialidade em mechas, loiros e transformações. Serviços, galeria antes/depois e agendamento por WhatsApp, inclusive domingos e feriados.",
    liveUrl: "https://bistro-hair-site.vercel.app",
    tags: ["Beleza", "Copacabana", "WhatsApp"],
    featured: false,
    order: 7,
  },
  {
    name: "Realengo Imóveis",
    client: "Realengo Imóveis",
    segment: "Imobiliária",
    location: "Realengo, RJ",
    description:
      "Vitrine de imóveis para compra e aluguel em Realengo: casas, apartamentos, comerciais e terrenos, com busca e contato com especialistas.",
    liveUrl: "https://realengo-imoveis.vercel.app",
    tags: ["Imóveis", "Catálogo", "Local"],
    featured: false,
    order: 8,
  },
  {
    name: "Pizzaria du Barbosa",
    client: "Pizzaria du Barbosa",
    segment: "Alimentação",
    location: "Rio de Janeiro",
    description:
      "Landing de pizzaria artesanal: apresentação da marca, diferenciais e pedido direto pelo WhatsApp.",
    liveUrl: "https://pizzaria-du-barbosa.vercel.app",
    tags: ["Food", "WhatsApp", "Landing"],
    featured: false,
    order: 9,
  },
  {
    name: "Império Empadão",
    client: "Império Empadão",
    segment: "Alimentação",
    location: "Brasil",
    description:
      "Site de empadões artesanais com cardápio, destaques e canais de pedido (iFood e WhatsApp). Identidade de marca familiar e caseira.",
    liveUrl: "https://imperio-empadao.vercel.app",
    tags: ["Food", "Cardápio", "Pedidos"],
    featured: false,
    order: 10,
  },
  {
    name: "Achados da Tia",
    client: "Achados da Tia",
    segment: "Afiliados / vitrine",
    location: "Online",
    description:
      "Vitrine de recomendações Shopee com curadoria pessoal: produtos testados por categoria, links de afiliado e captura de contatos no WhatsApp.",
    liveUrl: "https://modern-tote-bag-store-phi.vercel.app",
    tags: ["Afiliados", "Vitrine", "Shopee"],
    featured: false,
    order: 11,
  },
];

/* ------------------------------------------------------------------ */
/*  Certificações — agrupadas por trilho                               */
/* ------------------------------------------------------------------ */

export const certifications = [
  {
    group: "Técnico & Hardware",
    icon: FiCpu,
    track: "tech",
    items: [
      { name: "Academia do Hardware", detail: "Montagem, manutenção, redes e Windows/Linux · 200h" },
      { name: "Fundamentos de TI", detail: "Hardware e Software" },
    ],
  },
  {
    group: "Desenvolvimento & Dados",
    icon: FiCode,
    track: "dev",
    items: [
      { name: "Desenvolvimento Orientado a Objetos", detail: "Python (POO)" },
      { name: "Fundamentos de Lógica de Programação", detail: "Algoritmos" },
      { name: "Projeto com Interface Gráfica", detail: "Aplicação desktop" },
      { name: "Microsoft Excel 2016", detail: "Planilhas e análise" },
    ],
  },
  {
    group: "IA — Anthropic (Claude)",
    icon: FiCloud,
    track: "dev",
    items: [
      { name: "Claude Code in Action", detail: "Anthropic" },
      { name: "Claude Code 101", detail: "Anthropic" },
      { name: "Claude 101 · Introduction to Claude", detail: "Anthropic" },
      { name: "Introduction to Claude Cowork", detail: "Anthropic · uso colaborativo em equipes" },
      { name: "Estratégia de Negócios", detail: "Gestão" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Depoimentos (clientes reais — Freelancer.com)                      */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    name: "James P.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/power-bi/Power-Telephony-Reporting-Setup",
    position: "Power BI Telephony Reporting (£135)",
    testimonial:
      "Will be using again very soon as work was excellent and communication plus feedback both above expectations.",
  },
  {
    name: "Brendan O.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/data-analysis/Forex-Market-Research-Historical-Data",
    position: "Forex Market Research: Historical Data ($20)",
    testimonial:
      "Was a great working with Caua, he understood the task and got on with delivering an excellent solution.",
  },
  {
    name: "Mariano S.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/automation/DMV-Query-Extraction-DAX-Studio",
    position: "DMV Query Extraction in DAX Studio ($290)",
    testimonial: "Highly recommended! Responsible, fast.",
  },
  {
    name: "Maria O.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/api-developmet/lise-Mercado-Sistema-Digital-Portugal",
    position: "Análise de Mercado + Sistema Digital, Portugal (€150)",
    testimonial: "Excelente profissional. Recomendo.",
  },
  {
    name: "Rai D.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/data-analysis/Qualitative-Interview-Report-Appendices",
    position: "Qualitative Interview Report + Appendices (£12)",
    testimonial:
      "This is the third project I worked on with them, and they are really good at each type of work.",
  },
  {
    name: "Rai D.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/data-analysis/Health-Psychology-Blog-Portfolio",
    position: "Health Psychology Blog Portfolio + Reflection (£10)",
    testimonial:
      "Great work quality and always before time. I was very delighted by the speed of their work. Thank you so much! I would definitely recommend working with them in the future.",
  },
  {
    name: "Rai D.",
    company: "Freelancer.com",
    linkedIn: "https://www.freelancer.com/projects/data-analysis/SPSS-tutoring-ANCOVA-factor-analysis",
    position: "SPSS tutoring: ANCOVA & factor analysis help (£15)",
    testimonial: "Great work, before time delivery.",
  },
];
