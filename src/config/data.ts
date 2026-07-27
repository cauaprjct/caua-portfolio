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
} from "react-icons/fi";
// O ícone da OpenAI saiu do simple-icons (react-icons/si) — o do Tabler fica.
import { TbBrandAzure, TbBrandOpenai } from "react-icons/tb";
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

/**
 * Mensagens de WhatsApp por ponto de entrada.
 * Cada CTA manda a intenção junto — a conversa já começa no assunto certo.
 */
export const whatsappMessages = {
  default: "Olá Cauã! Vim pelo portfólio e queria conversar sobre um projeto.",
  hero: "Olá Cauã! Vim pelo portfólio. Preciso de um orçamento — pode me dizer como funciona?",
  header: "Olá Cauã! Vim pelo portfólio e queria tirar uma dúvida rápida.",
  fab: "Olá Cauã! Vim pelo portfólio pelo celular e queria falar sobre um trabalho.",
  process:
    "Olá Cauã! Vim pelo portfólio. Vou te contar o que preciso pra você me passar escopo e prazo.",
  faq: "Olá Cauã! Li o FAQ do portfólio e ficou uma dúvida:",
  contact: "Olá Cauã! Vim pelo portfólio. O que eu preciso é:",
  service: (title: string) =>
    `Olá Cauã! Vim pelo portfólio. Preciso de "${title}" — como funciona?`,
  clientSite: (name: string) =>
    `Olá Cauã! Vi o site do ${name} no seu portfólio e queria um site assim pro meu negócio.`,
  caseStudy: (title: string) =>
    `Olá Cauã! Vi o case "${title}" no portfólio. Tenho uma necessidade parecida.`,
};

export function whatsappUrl(message: string = whatsappMessages.default) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Âncoras do header (ids das seções na home). */
export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#sites-clientes", label: "Sites" },
  { href: "#trabalhos", label: "Cases" },
  { href: "#contato", label: "Contato" },
] as const;

/**
 * Disponibilidade.
 * `checkedAt` é a última vez que isso foi confirmado à mão: depois de
 * `freshForDays` o selo some sozinho, para não ficar um "Disponível" velho no ar.
 */
export const availability = {
  open: true,
  checkedAt: "2026-07-27",
  freshForDays: 45,
  label: "Disponível para novos projetos",
  note: "Respondo pelo WhatsApp. Se for da minha área, já adianto escopo e próximos passos.",
};

export function availabilityIsCurrent(now: Date = new Date()): boolean {
  if (!availability.open) return false;
  const checked = new Date(`${availability.checkedAt}T00:00:00Z`);
  if (Number.isNaN(checked.getTime())) return false;
  const days = (now.getTime() - checked.getTime()) / 86_400_000;
  return days >= 0 && days <= availability.freshForDays;
}

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
/*  FAQ — ordem: o que o comprador pergunta primeiro                   */
/* ------------------------------------------------------------------ */

export const faqItems = [
  {
    q: "Quanto tempo leva um site institucional?",
    a: "Depende do escopo (páginas, textos, fotos, integrações). Muitos sites de negócio local saem em dias ou poucas semanas depois do material alinhado. No primeiro contato eu te dou uma faixa realista pro seu caso.",
  },
  {
    q: "Atende só no Rio de Janeiro?",
    a: "Suporte presencial e manutenção de equipamentos: foco no Rio (e região, conforme o caso). Software, dados, automação e sites: remoto para o Brasil e exterior — já entreguei no UK e em Portugal.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Combinamos antes de iniciar: etapas e forma de pagamento ficam claras na proposta. Não começo o trabalho sem esse alinhamento.",
  },
  {
    q: "Você faz site em WordPress ou Wix?",
    a: "Não. Trabalho com sites e apps sob medida em Next.js, Vite e React — da landing ao painel. Se você precisa de construtor de template, não sou a pessoa; se quer algo sob medida e no ar na Vercel, sim.",
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
  { id: 3, title: "Freelancer", url: "https://www.freelancer.com/u/CauaAlves" },
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
  /** O argumento do TwoTracks, agora dentro do hero: uma pessoa, duas pontas. */
  pitch:
    "Uma pessoa para as duas pontas: o sistema que roda sozinho e a máquina que volta a funcionar.",
  ctaLabel: "Pedir orçamento no WhatsApp",
  ctaHint: "Site, dashboard, automação ou manutenção",
  dev: {
    label: "Desenvolvedor",
    kicker: "Escrevo o software",
    role: "Sites, Dados, BI & Automação",
    blurb:
      "Sites e sistemas sob medida em Next.js e Vite, e planilha virando rotina automática: dashboards, integrações com IA e relatório que chega sem ninguém montar.",
    stack: ["Sites", "Next.js", "Python", "Power BI", "Azure", "IA / LLMs"],
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
      "→ cache e lixo do sistema limpos",
      "→ apps em segundo plano parados",
      "✓ celular rápido de novo",
    ],
  },
  socialLinks: socialLinks,
};

/* ------------------------------------------------------------------ */
/*  Serviços por trilho                                                */
/* ------------------------------------------------------------------ */

export const services = {
  dev: {
    label: "Desenvolvimento & Dados",
    icon: FiCode,
    summary:
      "Se o trabalho é manual, repetitivo ou não existe na internet ainda, essa é a frente.",
    items: [
      {
        title: "Sites, Apps & Sistemas Web",
        desc: "Landing, site institucional, painel ou app sob medida em Next.js, Vite e React — da ideia ao deploy na Vercel. Também Android nativo (Kotlin).",
      },
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
    ],
  },
  tech: {
    label: "Suporte & Manutenção",
    icon: FiTool,
    summary:
      "Se a máquina travou, está lenta ou a rede cai, essa é a frente — no Rio, presencial.",
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
      "Relatórios e app de telefonia para um time de 47 colaboradores no Reino Unido",
      "Pipeline serverless no Azure (Functions, Storage Queues) rodando sem intervenção",
      "Automação de backend B2B em Portugal e integrações via API",
    ],
  },
  {
    company: "Suporte Técnico & Informática",
    position: "Técnico de Informática",
    period: "Formação contínua",
    shortDesc:
      "Manutenção de computadores e suporte técnico com base na formação Academia do Hardware (200h): hardware, redes e sistemas operacionais, além de otimização de dispositivos Android.",
    bulletPoints: [
      "Montagem, manutenção e diagnóstico de hardware",
      "Formatação, backup e otimização em Windows e Linux",
      "Redes cabeadas, Wi-Fi e limpeza de Android via ADB",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Stack técnico (inventário)                                         */
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
  { name: "OpenAI", icon: TbBrandOpenai, color: "text-emerald-300", track: "dev", group: "IA & Mobile" },
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

/**
 * As ferramentas que aparecem na página — seis por trilho, dentro dos cards
 * de serviço. O inventário completo fica no `techStack` acima.
 */
export const featuredTools = {
  dev: ["Next.js", "Python", "Power BI", "Azure", "SQL", "OpenAI"],
  tech: ["Manutenção de PC", "Hardware", "Windows", "Linux", "Redes & Wi-Fi", "Android / ADB"],
};

export function toolsByName(names: readonly string[]) {
  return names
    .map((n) => techStack.find((t) => t.name === n))
    .filter((t): t is (typeof techStack)[number] => Boolean(t));
}

/* ------------------------------------------------------------------ */
/*  Cases — problema → solução → um número. Detalhe fica no disclosure. */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  sector: string;
  tone: "dev" | "tech";
  problem: string;
  solution: string;
  /** Um resultado, o mais forte. Sempre visível. */
  highlight: string;
  /** O resto — só quando a pessoa pedir. */
  details: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export const cases: CaseStudy[] = [
  {
    id: "boomerang-kids-site",
    title: "Site + painel para o dono editar sozinho",
    context: "Boomerang Kids · salão de festas infantil · Zona Oeste, RJ",
    sector: "Site local",
    tone: "dev",
    problem:
      "Casa de festa forte no Instagram e sem site: todo orçamento passava pelo WhatsApp e quem buscava no Google não achava.",
    solution:
      "Landing em Next.js com a identidade da marca, SEO local, FAQ e mapa — mais um painel em português para o dono trocar textos e fotos sem me chamar.",
    highlight:
      "No ar com painel /admin: o dono publica conteúdo novo sem depender de dev",
    details: [
      "Orçamento no WhatsApp em cada seção, com a prova social do Instagram (+5.200 festas)",
      "Painel /admin em português para textos, fotos e contatos",
      "SEO técnico com Search Console verificado e sitemap enviado",
    ],
    stack: ["Next.js", "TypeScript", "Vercel", "SEO"],
    link: "https://boomerang-kids-site.vercel.app",
    linkLabel: "Abrir o site",
  },
  {
    id: "suporti-cell-site",
    title: "Duas unidades viraram uma loja — e o site diz isso",
    context: "SuporTI Cell · assistência técnica · Realengo, RJ",
    sector: "Site local",
    tone: "dev",
    problem:
      "A loja unificou as unidades e o cliente continuava achando que eram duas. Precisava de um endereço só, claro, com orçamento rápido.",
    solution:
      "Site sob medida em Next.js: serviços de celular e de PC/games separados, diferenciais, horário, endereço e WhatsApp em cada serviço.",
    highlight: "Orçamento a um toque em cada serviço, com uma mensagem só: uma loja",
    details: [
      "Celular (tela, bateria, placa), PC/notebook, impressora, console e controle na mesma navegação",
      "Horário e endereço acima da dobra, para quem busca no celular na rua",
      "No ar em produção na Vercel com a identidade da marca",
    ],
    stack: ["Next.js", "TypeScript", "Vercel", "WhatsApp"],
    link: "https://suporti-cell-site.vercel.app",
    linkLabel: "Abrir o site",
  },
  {
    id: "call-pulse-app",
    title: "Call Pulse — do relatório de Power BI ao app que o time usa",
    context: "JW Wood · imobiliária no Reino Unido · Freelancer.com · fase 1 → fase 2",
    sector: "App web & Dados",
    tone: "dev",
    problem:
      "O time de telefonia dependia de relatório montado à mão. Virou Power BI, e aí quase ninguém abria: complicado demais para quem só queria o número do dia. Chamada perdida não aparecia em lugar nenhum e a tela mostra telefone de cliente, então cada filial só pode ver o que é dela.",
    solution:
      "Fase 1: modelei o relatório em Power BI com DAX e coloquei a distribuição por e-mail no automático. Fase 2: um app em Next.js que lê o dataset pela API do Power BI e entrega a cada pessoa só a leitura dela, com login próprio e acesso por papel.",
    highlight:
      "8 filiais e 47 colaboradores no mesmo painel, sem ninguém precisar abrir o Power BI",
    details: [
      "~213 mil registros de chamadas lidos pela API, em janelas diária, semanal e mensal",
      "Chamadas perdidas por pessoa e por escritório, com o retorno identificado direto no log (sem marcação manual, que dá para burlar)",
      "19 logins em 3 níveis: filial vê a própria filial, gerente vê o escritório, admin vê tudo — tudo atrás de senha",
      "Atualização sozinha a cada ~15 min via service principal no Azure: nenhum token na mão",
      "Consulta mais pesada de 57s para ~3s, o que a fez caber no limite do serverless",
      "Avaliação 5★: “exceeded every expectation and delivered way beyond initial project scope”",
    ],
    stack: ["Next.js", "TypeScript", "Power BI API", "DAX", "Azure", "Vercel"],
    link: "https://www.freelancer.com/projects/data-analysis/Call-Pulse-Wood-telephony-reporting",
    linkLabel: "Ver no Freelancer.com",
  },
  {
    id: "azure-pbi-pipeline",
    title: "Pipeline serverless de metadados Power BI",
    context: "Cliente internacional · automação Azure",
    sector: "Cloud & Automação",
    tone: "dev",
    problem:
      "A extração de metadados dos relatórios exigia alguém apertando botão, e não rodava de forma confiável fora do horário comercial.",
    solution:
      "Pipeline serverless no Azure com Functions e Storage Queues — da fila de jobs à execução e persistência, ponta a ponta.",
    highlight: "Extração rodando 24/7, sem intervenção manual no ciclo",
    details: [
      "Functions + filas, com VMs de apoio quando o job pedia mais músculo",
      "Arquitetura pronta para receber novas rotinas sem refazer a base",
    ],
    stack: ["Azure", "Python", "Functions", "Storage Queues"],
    link: "https://www.freelancer.com/u/CauaAlves",
    linkLabel: "Perfil Freelancer.com",
  },
];

/* ------------------------------------------------------------------ */
/*  Projetos próprios                                                  */
/*  featured + order: destaques na home; resto em “Ver mais”.          */
/*  O que já é case (telefonia, Azure) não se repete aqui.             */
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
      "Painel financeiro/fiscal white-label que escritórios de contabilidade entregam ao cliente PJ: faturamento, impostos e a Reforma Tributária 2026.",
    liveUrl: "https://painel-contador.vercel.app",
    githubUrl: "https://github.com/cauaprjct/painel-claro",
    tags: ["Next.js", "Recharts", "TypeScript"],
    featured: true,
    order: 1,
  },
  {
    title: "AutoRPA",
    description:
      "Plataforma de automação de processos com IA: orquestra tarefas repetitivas de ponta a ponta.",
    githubUrl: "https://github.com/cauaprjct/AutoRPA",
    tags: ["Python", "FastAPI", "Next.js"],
    featured: true,
    order: 2,
  },
  {
    title: "RAG Financeiro B3",
    description:
      "Agente de perguntas e respostas sobre documentos da B3 com citação da página. Retrieval híbrido (denso + BM25 + RRF).",
    githubUrl: "https://github.com/cauaprjct/rag-financeiro-b3",
    tags: ["Python", "Gemini", "Streamlit"],
    featured: true,
    order: 3,
  },
  {
    title: "Social Down",
    description:
      "App web para baixar vídeos do TikTok, Instagram, YouTube e Facebook.",
    liveUrl: "https://social-down.vercel.app",
    githubUrl: "https://github.com/cauaprjct/social-down",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    order: 4,
  },
  {
    title: "ExcelMind AI",
    description:
      "Análise de planilhas Excel/CSV com IA: gráficos automáticos e chat em português sobre os dados.",
    githubUrl: "https://github.com/cauaprjct/excelmind-ai",
    tags: ["Python", "Pandas", "IA"],
    featured: false,
    order: 5,
  },
  {
    title: "StockAI Brasil",
    description:
      "Dashboard de análise de ações da B3 com previsões de Machine Learning.",
    githubUrl: "https://github.com/cauaprjct/stockai-brasil",
    tags: ["Python", "ML", "Streamlit"],
    featured: false,
    order: 6,
  },
  {
    title: "Forex Historical Data & Dataset",
    description:
      "Pipeline de extração, limpeza e consolidação de dados históricos de Forex em Python.",
    githubUrl: "https://www.freelancer.com/u/CauaAlves",
    tags: ["Python", "Pandas", "Dados"],
    featured: false,
    order: 7,
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
/*  `image`: screenshot da home, 1280x800, em /public/sites.           */
/* ------------------------------------------------------------------ */

export type ClientSite = {
  name: string;
  segment: string;
  location: string;
  description: string;
  image: string;
  liveUrl: string;
  featured?: boolean;
  order?: number;
};

export const clientSites: ClientSite[] = [
  {
    name: "Boomerang Kids",
    segment: "Salão de festas infantil",
    location: "Zona Oeste, RJ",
    description: "Landing + painel admin, SEO local e orçamento no WhatsApp.",
    image: "/sites/boomerang-kids.jpg",
    liveUrl: "https://boomerang-kids-site.vercel.app",
    featured: true,
    order: 1,
  },
  {
    name: "SuporTI Cell",
    segment: "Assistência técnica",
    location: "Realengo, RJ",
    description: "Celular, PC e console numa loja só, com orçamento por serviço.",
    image: "/sites/suporti-cell.jpg",
    liveUrl: "https://suporti-cell-site.vercel.app",
    featured: true,
    order: 2,
  },
  {
    name: "Velucci's Beauty House",
    segment: "Salão de beleza",
    location: "Leblon, RJ",
    description: "Casa de beleza com +15 anos: agendamento por WhatsApp e Trinks.",
    image: "/sites/veluccis.jpg",
    liveUrl: "https://veluccis-site.vercel.app",
    featured: true,
    order: 3,
  },
  {
    name: "Ferragens Shalon",
    segment: "Material de construção",
    location: "Realengo, RJ",
    description: "Catálogo por categoria, galeria da loja e contato para orçamento.",
    image: "/sites/ferragens-shalon.jpg",
    liveUrl: "https://ferragens-shalon.vercel.app",
    featured: true,
    order: 4,
  },
  {
    name: "Rock e Barba",
    segment: "Barbearia",
    location: "Icaraí, Niterói",
    description: "Nota 5,0 no Google: corte, barba, combo e dia do noivo.",
    image: "/sites/rock-e-barba.jpg",
    liveUrl: "https://rockebarba-site.vercel.app",
    featured: true,
    order: 5,
  },
  {
    name: "Márcio Roberto",
    segment: "Fotografia de eventos",
    location: "Rio de Janeiro",
    description: "Portfólio de eventos corporativos, cerimônias e retratos.",
    image: "/sites/marcio-roberto.jpg",
    liveUrl: "https://marcio-site-vert.vercel.app",
    featured: true,
    order: 6,
  },
  {
    name: "Medstar Rio",
    segment: "Material hospitalar",
    location: "Magalhães Bastos, RJ",
    description: "Aluguel, venda e conserto, com proposta B2B para empresas.",
    image: "/sites/medstar.jpg",
    liveUrl: "https://medstar-site.vercel.app",
    featured: false,
    order: 7,
  },
  {
    name: "Bistrô Hair",
    segment: "Salão — mechas e loiros",
    location: "Copacabana, RJ",
    description: "Galeria antes/depois e agendamento inclusive em domingo e feriado.",
    image: "/sites/bistro-hair.jpg",
    liveUrl: "https://bistro-hair-site.vercel.app",
    featured: false,
    order: 8,
  },
  {
    name: "Realengo Imóveis",
    segment: "Imobiliária",
    location: "Realengo, RJ",
    description: "Vitrine de compra e aluguel com busca e contato com especialistas.",
    image: "/sites/realengo-imoveis.jpg",
    liveUrl: "https://realengo-imoveis.vercel.app",
    featured: false,
    order: 9,
  },
  {
    name: "Pizzaria du Barbosa",
    segment: "Alimentação",
    location: "Rio de Janeiro",
    description: "Landing de pizzaria artesanal com pedido direto no WhatsApp.",
    image: "/sites/pizzaria-du-barbosa.jpg",
    liveUrl: "https://pizzaria-du-barbosa.vercel.app",
    featured: false,
    order: 10,
  },
  {
    name: "Império Empadão",
    segment: "Alimentação",
    location: "Brasil",
    description: "Cardápio, destaques e pedido por iFood e WhatsApp.",
    image: "/sites/imperio-empadao.jpg",
    liveUrl: "https://imperio-empadao.vercel.app",
    featured: false,
    order: 11,
  },
  {
    name: "Achados da Tia",
    segment: "Afiliados / vitrine",
    location: "Online",
    description: "Curadoria de produtos Shopee com links de afiliado.",
    image: "/sites/achados-da-tia.jpg",
    liveUrl: "https://modern-tote-bag-store-phi.vercel.app",
    featured: false,
    order: 12,
  },
];

/* ------------------------------------------------------------------ */
/*  Formação & certificações — só o que faz trabalho de verdade        */
/* ------------------------------------------------------------------ */

export const certifications = [
  {
    group: "Técnico & Hardware",
    track: "tech" as const,
    items: [
      {
        name: "Academia do Hardware · 200h",
        detail: "Montagem, manutenção, redes e Windows/Linux",
      },
      { name: "Fundamentos de TI", detail: "Hardware e software" },
    ],
  },
  {
    group: "Desenvolvimento",
    track: "dev" as const,
    items: [
      { name: "Programação orientada a objetos", detail: "Python (POO)" },
      { name: "Lógica de programação", detail: "Algoritmos" },
      { name: "Projeto com interface gráfica", detail: "Aplicação desktop" },
    ],
  },
  {
    group: "Dados, IA & negócio",
    track: "dev" as const,
    items: [
      { name: "Claude Code in Action", detail: "Anthropic" },
      { name: "Microsoft Excel 2016", detail: "Planilhas e análise" },
      { name: "Estratégia de negócios", detail: "Gestão" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Depoimentos (clientes reais — Freelancer.com)                      */
/*  Sem valor de projeto: o preço de um trabalho não é referência      */
/*  para o próximo.                                                    */
/* ------------------------------------------------------------------ */

export const testimonialStats = [
  "5,0★ no Freelancer.com",
  "9 avaliações",
  "100% de conclusão",
  "Brasil, UK e Portugal",
];

export const testimonials = [
  {
    name: "James P.",
    company: "Reino Unido",
    link: "https://www.freelancer.com/projects/data-analysis/Call-Pulse-Wood-telephony-reporting",
    position: "Call Pulse — app de telefonia",
    testimonial:
      "First class across the board. Exceeded every expectation and delivered way beyond initial project scope.",
  },
  {
    name: "Mariano S.",
    company: "Freelancer.com",
    link: "https://www.freelancer.com/projects/automation/DMV-Query-Extraction-DAX-Studio",
    position: "Extração DMV em DAX Studio",
    testimonial: "Highly recommended! Responsible, fast.",
  },
  {
    name: "Maria O.",
    company: "Portugal",
    link: "https://www.freelancer.com/projects/api-developmet/lise-Mercado-Sistema-Digital-Portugal",
    position: "Análise de mercado + sistema digital",
    testimonial: "Excelente profissional. Recomendo.",
  },
];
