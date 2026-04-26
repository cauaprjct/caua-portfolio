export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  gradient: string
  readTime: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "usando-ia-para-acelerar-dev",
    title: "Como Uso IA para Entregar Projetos Mais Rápido",
    description:
      "Minha abordagem prática para orquestrar ferramentas de IA no fluxo de desenvolvimento, mantendo qualidade e acelerando entregas sem perder o controle técnico. Descubra como transformo ideias em MVPs funcionais em 24-48h usando inteligência artificial como acelerador, nunca como substituto do julgamento técnico.",
    date: "Março 2025",
    gradient: "from-blue-600 to-cyan-700",
    readTime: "8 min",
    tags: ["IA", "Produtividade", "Dev", "MVP"],
    content: `
      <h2>IA como Ferramenta, não Substituto</h2>
      <p>Uso IA para acelerar partes repetitivas do desenvolvimento — boilerplate, testes iniciais, documentação e integração de APIs. Isso me permite focar na arquitetura e nas regras de negócio que realmente importam.</p>

      <h2>Orquestração no Dia a Dia</h2>
      <ul>
        <li><strong>Geração de código base:</strong> Estruturas iniciais de projetos Flutter, React e Python</li>
        <li><strong>Debug acelerado:</strong> Análise rápida de logs e stack traces</li>
        <li><strong>Documentação:</strong> Geração de READMEs e docs técnicos</li>
        <li><strong>Refatoração:</strong> Sugestões de melhoria em código legado</li>
      </ul>

      <h2>O Resultado</h2>
      <p>MVPs entregues em 24-48h, código revisado manualmente e clientes satisfeitos. A IA amplia minha capacidade, não a substitui.</p>
    `
  },
  {
    slug: "automatizando-redes-sociais-com-python",
    title: "Automatizando Redes Sociais com Python e IA",
    description:
      "Como construí o SocialBot AI usando Python, OpenAI e Hugging Face para publicação automática e inteligente em múltiplas plataformas. Um case completo de automação que reduz horas de trabalho manual a minutos, com arquitetura modular pronta para escalar.",
    date: "Janeiro 2025",
    gradient: "from-green-600 to-teal-700",
    readTime: "12 min",
    tags: ["Python", "Automação", "IA", "OpenAI"],
    content: `
      <h2>O Problema</h2>
      <p>Gerenciar múltiplas redes sociais manualmente consome horas. Empresas precisam de presença constante, mas não têm tempo para criar e publicar conteúdo diariamente.</p>

      <h2>A Solução</h2>
      <p>Desenvolvi o SocialBot AI, um sistema em Python que:</p>
      <ul>
        <li>Gera legendas com OpenAI GPT</li>
        <li>Publica automaticamente no Twitter, Instagram e LinkedIn</li>
        <li>Analisa engajamento e sugere horários ideais</li>
        <li>Usa Hugging Face para classificação de conteúdo</li>
      </ul>

      <h2>Stack Técnico</h2>
      <p>Python, FastAPI, OpenAI API, Hugging Face Transformers, Selenium para automação web.</p>
    `
  },
  {
    slug: "clean-architecture-flutter",
    title: "Clean Architecture em Flutter: Da Teoria à Prática",
    description:
      "Aprenda a implementar Clean Architecture em Flutter com BLoC pattern e separação de camadas. Uso meu projeto VoiceScribe como exemplo real de como estruturar um app de transcrição de áudio escalável, testável e fácil de manter em produção.",
    date: "Dezembro 2024",
    gradient: "from-indigo-600 to-purple-700",
    readTime: "15 min",
    tags: ["Flutter", "Clean Architecture", "BLoC", "Dart"],
    content: `
      <h2>Por que Clean Architecture?</h2>
      <p>Ao desenvolver o VoiceScribe, percebi que sem uma arquitetura sólida, o código se torna impossível de escalar. Clean Architecture oferece independência de frameworks, testabilidade total e separação clara de responsabilidades.</p>

      <h2>Estrutura de Camadas</h2>
      <p>O VoiceScribe usa três camadas principais:</p>
      <ul>
        <li><strong>Domain:</strong> Entidades e casos de uso puros</li>
        <li><strong>Data:</strong> Repositories, models e data sources</li>
        <li><strong>Presentation:</strong> BLoC, pages e widgets reutilizáveis</li>
      </ul>

      <h2>Resultados Reais</h2>
      <p>Zero débito técnico após 6 meses, testes unitários cobrindo 90% das regras de negócio e adição de novas features sem refatoração massiva.</p>
    `
  },
  {
    slug: "typescript-patterns-dia-a-dia",
    title: "TypeScript Avançado: Patterns que Uso no Dia a Dia",
    description:
      "Generics, Conditional Types, Utility Types e patterns de type-safety que aplico em projetos reais como o Nero Discord Bot. Dicas práticas para escrever código TypeScript mais seguro, expressivo e fácil de manter em aplicações Node.js e React.",
    date: "Novembro 2024",
    gradient: "from-blue-500 to-indigo-600",
    readTime: "10 min",
    tags: ["TypeScript", "Patterns", "Node.js", "Advanced"],
    content: `
      <h2>Generics que Realmente Uso</h2>
      <p>No Nero Discord Bot, generics permitem criar handlers de comandos tipados de forma segura, evitando erros em runtime e melhorando a DX completa do projeto.</p>

      <h2>Utility Types Customizados</h2>
      <p>Crio tipos utilitários específicos do domínio que garantem que qualquer mudança na API seja propagada com segurança para toda a base de código.</p>

      <h2>Discriminated Unions</h2>
      <p>Uso unions discriminadas para modelar estados de comandos do bot, eliminando condicionais complexas e garantindo exhaustividade nos switch cases.</p>
    `
  },
  {
    slug: "assistente-ia-documentos-office",
    title: "Assistente de IA para Documentos Office",
    description:
      "Como desenvolvi o Beemo, um assistente inteligente que processa e analisa documentos do Microsoft Office usando Google Gemini. Um case de automação documental que extrai insights, resume conteúdo e elimina tarefas repetitivas de leitura e organização.",
    date: "Outubro 2024",
    gradient: "from-orange-500 to-red-600",
    readTime: "11 min",
    tags: ["Python", "IA", "Gemini", "Automação"],
    content: `
      <h2>O Problema da Documentação</h2>
      <p>Empresas processam centenas de documentos Office por semana. Ler, classificar e extrair informações manualmente é lento, caro e propenso a erros humanos.</p>

      <h2>A Solução: Beemo</h2>
      <p>O Beemo usa a API do Google Gemini para:</p>
      <ul>
        <li>Extrair texto estruturado de Word, Excel e PowerPoint</li>
        <li>Gerar resumos executivos automaticamente</li>
        <li>Classificar documentos por tema e prioridade</li>
        <li>Criar planilhas de síntese a partir de múltiplos arquivos</li>
      </ul>

      <h2>Stack e Arquitetura</h2>
      <p>Python, FastAPI, Google Gemini API, python-docx, openpyxl. Arquitetura em camadas com cache inteligente para evitar reprocessamento.</p>
    `
  },
  {
    slug: "flutter-para-mvps-rapidos",
    title: "Por que Uso Flutter para MVPs Rápidos",
    description:
      "Flutter me permite entregar apps mobile funcionais em dias, não semanas. Análise prática de por que escolho Dart e Flutter para protótipos e produtos reais, com exemplos dos meus projetos VoiceScribe e apps de fitness entregues a clientes internacionais.",
    date: "Agosto 2024",
    gradient: "from-cyan-500 to-blue-600",
    readTime: "9 min",
    tags: ["Flutter", "Mobile", "MVP", "Dart"],
    content: `
      <h2>Um Código, Duas Plataformas</h2>
      <p>Com Flutter, escrevo uma vez e entrego para iOS e Android. Isso corta pela metade o tempo de desenvolvimento sem sacrificar a experiência do usuário.</p>

      <h2>Hot Reload que Funciona</h2>
      <p>A velocidade do desenvolvimento Flutter é real. Alterações visuais aparecem instantaneamente, o que acelera iterações com clientes.</p>

      <h2>Casos Reais</h2>
      <p>Apps de transcrição de áudio, fitness e utilitários — todos entregues rápido com performance nativa.</p>
    `
  },
]
