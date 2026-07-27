# Conteúdo do site — Portfólio Cauã Alves

Documento de referência com **toda a informação textual e de dados** publicada no portfólio.

| Campo | Valor |
|--------|--------|
| **URL de produção** | https://portifolio-caua.vercel.app |
| **URL canônica (código)** | `src/config/site.ts` → `SITE_URL` |
| **GitHub** | https://github.com/cauaprjct/caua-portfolio |
| **Vercel** | projeto `portifolio-caua` — **conectado ao GitHub** (`main` → produção) |
| **Deploy preferencial** | `git push origin main` (auto-deploy na Vercel) |
| **Fonte de dados principal** | `src/config/data.ts` |
| **Metadados / SEO** | `src/config/metadata.ts` (usa `SITE_URL`) |
| **Manifest PWA** | `src/app/manifest.ts` |
| **Idioma** | pt-BR |
| **Última consolidação** | 2026-07-27 (reestruturação de UX: 13 → 8 seções) |
| **Diagnóstico e plano** | `docs/ANALISE-UX-E-PLANO-27jul2026.md` |
| **Histórico / deploys** | `docs/HISTORICO-COMPLETO.md` |

**Tamanho medido depois da reestruturação:** 9.517px no desktop (1440×900) e 15.712px no celular (390×844), 1.835 palavras, 8 seções.

---

## 1. Identidade e SEO

### Título da página
`Cauã Alves | Desenvolvedor & Técnico de Informática`

### Meta description
> Desenvolvedor de dados, BI, automação e web e técnico de informática no Rio de Janeiro. Crio dashboards, automações, integrações com IA e sites sob medida (Next.js, Vite) — e faço manutenção, formatação, redes e otimização de PCs e celulares.

### Open Graph
- **siteName:** Cauã Alves — Dev & Técnico de Informática
- **type:** website
- **locale:** pt_BR

### Keywords
Cauã Alves, Desenvolvedor, Técnico de Informática, Rio de Janeiro, Realengo, Power BI, Python, Azure, Next.js, Vite, React, sites, landing page, automação, RPA, IA, dashboards, manutenção de computadores, formatação, redes, otimização Android, suporte técnico, Academia do Hardware, freelancer

### Structured data
`FAQPage` (schema.org) gerado em `src/app/page.tsx` a partir de `faqItems` — as seis perguntas do FAQ entram como `Question` / `acceptedAnswer`.

### Manifest (PWA)
- **name:** Cauã Alves | Desenvolvedor & Técnico de Informática
- **short_name:** Cauã Alves
- **theme / background:** `#0d0f14`

### Header (nav)
- Marca: `Cauã.Alves`
- Âncoras (desktop `lg+`): Serviços · Como funciona · Dúvidas · Sites · Cases · Contato
- CTA: WhatsApp — **“Fale comigo”** (rótulo visível em todo viewport)
- Seção ativa destacada no menu + barra fina de progresso de leitura
- Mobile/tablet: menu hamburger (Tab preso no painel, Esc fecha) + FAB de WhatsApp que só aparece **depois** do hero e se esconde com o menu aberto
- Skip link “Pular para o conteúdo” antes do header

### Disponibilidade
- `availability.open: true`
- `availability.checkedAt: 2026-07-27` · `freshForDays: 45`
- Label: **Disponível para novos projetos**
- O selo **expira sozinho**: 45 dias depois de `checkedAt` ele deixa de aparecer. Atualize a data quando confirmar que segue disponível (ou ponha `open: false`).

---

## 2. Contato e redes sociais

| Campo | Valor |
|--------|--------|
| **Nome** | Cauã Alves |
| **Localização** | Rio de Janeiro, Brasil |
| **E-mail** | cauaalvesbalbino@gmail.com |
| **WhatsApp** | (21) 97099-8386 |
| **GitHub** | https://github.com/cauaprjct |
| **LinkedIn** | https://www.linkedin.com/in/cau%C3%A3-alves-0975a129b/ |
| **Freelancer.com** | https://www.freelancer.com/u/CauaAlves |

Os ícones sociais do hero mostram GitHub, LinkedIn e Freelancer. WhatsApp saiu da fileira porque já é o botão principal.

### Mensagens de WhatsApp por origem (`whatsappMessages`)

Cada ponto de entrada manda a intenção junto, então a conversa começa no assunto certo.

| Origem | Mensagem |
|--------|----------|
| `default` | Olá Cauã! Vim pelo portfólio e queria conversar sobre um projeto. |
| `hero` | Olá Cauã! Vim pelo portfólio. Preciso de um orçamento — pode me dizer como funciona? |
| `header` | Olá Cauã! Vim pelo portfólio e queria tirar uma dúvida rápida. |
| `fab` | Olá Cauã! Vim pelo portfólio pelo celular e queria falar sobre um trabalho. |
| `process` | Olá Cauã! Vim pelo portfólio. Vou te contar o que preciso pra você me passar escopo e prazo. |
| `faq` | Olá Cauã! Li o FAQ do portfólio e ficou uma dúvida: |
| `contact` | Olá Cauã! Vim pelo portfólio. O que eu preciso é: |
| `service(título)` | Olá Cauã! Vim pelo portfólio. Preciso de "…" — como funciona? |
| `clientSite(nome)` | Olá Cauã! Vi o site do … no seu portfólio e queria um site assim pro meu negócio. |
| `caseStudy(título)` | Olá Cauã! Vi o case "…" no portfólio. Tenho uma necessidade parecida. |

---

## 3. Hero — dois trilhos

### Identidade central
- **Nome:** Cauã Alves (h1 — 36px no celular, 60–72px no desktop)
- **Tagline:** Desenvolvedor & Técnico de Informática
- **Pitch (absorveu a antiga seção “Dois trilhos”):** Uma pessoa para as duas pontas: o sistema que roda sozinho e a máquina que volta a funcionar.
- **CTA:** **Pedir orçamento no WhatsApp** — no celular dentro da faixa do nome, largura cheia, 48px de altura; no desktop na costura, acima dos ícones sociais
- **Linha de apoio do CTA:** Site, dashboard, automação ou manutenção

### Trilho Dev (software)

| Campo | Texto |
|--------|--------|
| **Label** | Desenvolvedor |
| **Kicker** | Escrevo o software |
| **Role** | Sites, Dados, BI & Automação |
| **Blurb** | Sites e sistemas sob medida em Next.js e Vite, e planilha virando rotina automática: dashboards, integrações com IA e relatório que chega sem ninguém montar. |
| **Stack (chips)** | Sites · Next.js · Python · Power BI · Azure · IA / LLMs |

```text
$ python pipeline.py --deploy
→ dashboard atualizado
→ relatório enviado por e-mail
✓ tudo rodando sozinho
```

### Trilho Técnico (hardware / suporte)

| Campo | Texto |
|--------|--------|
| **Label** | Técnico de Informática |
| **Kicker** | E cuido da máquina |
| **Role** | Suporte, Manutenção & Redes |
| **Blurb** | Montagem, manutenção, formatação e redes. Deixo PCs e celulares rápidos de novo — com base na Academia do Hardware (200h). |
| **Stack (chips)** | Manutenção · Redes · Windows / Linux · Otimização Android |

```text
$ adb shell otimizar --limpeza
→ cache e lixo do sistema limpos
→ apps em segundo plano parados
✓ celular rápido de novo
```

> Os terminais **não afirmam número que não existe**. As linhas antigas (“cache liberado: 4.2 GB”, “apps em segundo plano: 0”) saíram.

**Terminais:** completos no desktop (`lg+`), e no celular um só, compacto, alternando entre os dois trilhos a cada 4,5s (parado quando o sistema pede menos movimento).

---

## 4. O que eu resolvo (`#servicos`)

### Intro
> Duas frentes. Escolha uma ou combine as duas — e toque no que você precisa para já começar a conversa no assunto certo.

**Cada card é um link de WhatsApp** com a mensagem do próprio serviço, com rodapé “Falar sobre isso no WhatsApp”.

### 4.1 Desenvolvimento & Dados
*Resumo da coluna:* Se o trabalho é manual, repetitivo ou não existe na internet ainda, essa é a frente.

| Serviço | Texto |
|---------|-------|
| **Sites, Apps & Sistemas Web** | Landing, site institucional, painel ou app sob medida em Next.js, Vite e React — da ideia ao deploy na Vercel. Também Android nativo (Kotlin). |
| **Dashboards Power BI & Web** | Painéis executivos com modelagem DAX e distribuição automática por e-mail. Também em Next.js + Recharts. |
| **Automação & RPA** | Tarefas repetitivas e coleta de dados no automático com Python e Playwright. Menos trabalho manual, menos erro. |
| **Integrações com IA** | Chatbots, análise de documentos e assistentes com LLMs (OpenAI, Gemini, Claude) ligados ao seu negócio. |

**Ferramentas na coluna:** Next.js · Python · Power BI · Azure · SQL · OpenAI

> **Nota de posicionamento:** sites sob medida (Next.js, Vite, React). **Não** WordPress / Wix.

### 4.2 Suporte & Manutenção
*Resumo da coluna:* Se a máquina travou, está lenta ou a rede cai, essa é a frente — no Rio, presencial.

| Serviço | Texto |
|---------|-------|
| **Montagem & Manutenção** | Montagem de PCs, troca de peças, limpeza e diagnóstico de hardware. Formação Academia do Hardware (200h). |
| **Formatação & Otimização** | Instalação de Windows/Linux, backup, remoção de vírus e otimização. O computador rápido como no primeiro dia. |
| **Redes & Wi-Fi** | Configuração de roteadores, redes cabeadas e Wi-Fi para casa e pequenos negócios. |
| **Checkup Android** | Diagnóstico grátis e limpeza/otimização de celulares via ADB. Mais espaço, mais bateria, mais velocidade. |

**Ferramentas na coluna:** Manutenção de PC · Hardware · Windows · Linux · Redes & Wi-Fi · Android / ADB

> O muro de 37 chips de tecnologia (antiga seção “Ferramentas de trabalho”) **saiu da página**. O inventário completo continua em `techStack`; o que aparece são as 6 por trilho listadas em `featuredTools`.

---

## 5. Como funciona (`#como-funciona`)

Selo de disponibilidade (quando fresco) + intro com `availability.note`.

| # | Passo | Texto |
|---|-------|-------|
| 01 | Você me chama | WhatsApp com o que precisa: site, dashboard, automação ou suporte técnico. Quanto mais contexto, mais rápido o alinhamento. |
| 02 | Alinho escopo e prazo | Entendo a dor, o que entra (e o que não entra) e uma faixa de prazo honesta. Se não for pra mim, falo na boa. |
| 03 | Proposta simples | Combinamos entrega, etapas e forma de pagamento antes de começar — sem surpresa no meio do caminho. |
| 04 | Execução | Desenvolvo ou executo o serviço, com check-ins quando fizer sentido. Você acompanha o progresso. |
| 05 | Entrega e handoff | Entrego, ajusto o essencial e deixo o que for seu no ar (site, painel, máquina). Suporte pontual se combinarmos. |

No celular os passos são linhas compactas; no desktop (`lg+`), cinco colunas.

### Trilhos curtos
- **Site / web:** Brief → layout e páginas → revisão → deploy na Vercel.
- **Dados & automação:** Dor do processo → modelo/pipeline → testes → rotina no automático.
- **Suporte técnico:** Diagnóstico → orçamento → execução (PC, rede, Android) → validação com você.

**CTA:** Começar pelo WhatsApp.

---

## 6. Antes de me chamar — FAQ (`#faq`)

> **Subiu de propósito:** o FAQ ficava a 91% de profundidade e é o texto mais persuasivo do site. Agora vem **antes** dos trabalhos, e prazo e região são as duas primeiras perguntas.

### Intro
> Prazo, região, pagamento e o que eu não faço — respondido aqui, para você não precisar perguntar.

| # | Pergunta | Resposta (resumo) |
|---|----------|-------------------|
| 1 | Quanto tempo leva um site institucional? | Depende do escopo; muitos sites de negócio local saem em dias ou poucas semanas depois do material alinhado. Faixa realista no primeiro contato. |
| 2 | Atende só no Rio de Janeiro? | Presencial e manutenção: foco no Rio. Software, dados, automação e sites: remoto para Brasil e exterior (já entregou no UK e em Portugal). |
| 3 | Como funciona o pagamento? | Etapas e forma de pagamento na proposta, antes de iniciar. |
| 4 | Você faz site em WordPress ou Wix? | Não. Sob medida em Next.js, Vite e React. |
| 5 | Você faz só site ou também Power BI / automação? | As duas frentes de software, mais o trilho técnico. |
| 6 | Como começo? | WhatsApp com o que você precisa. |

Implementado com `<details>` nativo: abre e fecha sem JS.
**CTA ao fim:** “Ficou outra dúvida? Pergunta aí”.

> **Pendência de conteúdo:** não há preço nem “a partir de” em nenhum lugar da página. Quando houver uma faixa definida, o lugar dela é aqui.

---

## 7. Sites que estão no ar (`#sites-clientes`)

### Intro
> Doze sites publicados para clientes. Toque em qualquer um para abrir o site de verdade.

**Formato:** grade de **screenshots** da home de cada site (1280×800, `public/sites/*.jpg`, servidos por `next/image`). O card inteiro é um link para o site; um rodapé separado leva ao WhatsApp com “Quero um site assim”. 6 em destaque, os outros 6 atrás de “Ver os outros 6 sites” (o botão ancora o scroll de volta na seção ao recolher).

**Critério:** projetos em produção na Vercel (conta `cauaprjct`). Excluídos: portfólio próprio, demos internas, APIs, apps pessoais e versões antigas duplicadas.

| # | Site | Segmento | Local | Screenshot | URL |
|---|------|----------|-------|-----------|-----|
| 1 | Boomerang Kids | Salão de festas infantil | Zona Oeste, RJ | `boomerang-kids.jpg` | https://boomerang-kids-site.vercel.app |
| 2 | SuporTI Cell | Assistência técnica | Realengo, RJ | `suporti-cell.jpg` | https://suporti-cell-site.vercel.app |
| 3 | Velucci's Beauty House | Salão de beleza | Leblon, RJ | `veluccis.jpg` | https://veluccis-site.vercel.app |
| 4 | Ferragens Shalon | Material de construção | Realengo, RJ | `ferragens-shalon.jpg` | https://ferragens-shalon.vercel.app |
| 5 | Rock e Barba | Barbearia | Icaraí, Niterói | `rock-e-barba.jpg` | https://rockebarba-site.vercel.app |
| 6 | Márcio Roberto | Fotografia de eventos | Rio de Janeiro | `marcio-roberto.jpg` | https://marcio-site-vert.vercel.app |
| 7 | Medstar Rio | Material hospitalar | Magalhães Bastos, RJ | `medstar.jpg` | https://medstar-site.vercel.app |
| 8 | Bistrô Hair | Salão — mechas e loiros | Copacabana, RJ | `bistro-hair.jpg` | https://bistro-hair-site.vercel.app |
| 9 | Realengo Imóveis | Imobiliária | Realengo, RJ | `realengo-imoveis.jpg` | https://realengo-imoveis.vercel.app |
| 10 | Pizzaria du Barbosa | Alimentação | Rio de Janeiro | `pizzaria-du-barbosa.jpg` | https://pizzaria-du-barbosa.vercel.app |
| 11 | Império Empadão | Alimentação | Brasil | `imperio-empadao.jpg` | https://imperio-empadao.vercel.app |
| 12 | Achados da Tia | Afiliados / vitrine | Online | `achados-da-tia.jpg` | https://modern-tote-bag-store-phi.vercel.app |

Itens 1–6 são `featured: true`. O campo `client`, que era idêntico ao `name` nas 12 entradas, foi removido.

### Descrições (uma linha por card)
1. Landing + painel admin, SEO local e orçamento no WhatsApp.
2. Celular, PC e console numa loja só, com orçamento por serviço.
3. Casa de beleza com +15 anos: agendamento por WhatsApp e Trinks.
4. Catálogo por categoria, galeria da loja e contato para orçamento.
5. Nota 5,0 no Google: corte, barba, combo e dia do noivo.
6. Portfólio de eventos corporativos, cerimônias e retratos.
7. Aluguel, venda e conserto, com proposta B2B para empresas.
8. Galeria antes/depois e agendamento inclusive em domingo e feriado.
9. Vitrine de compra e aluguel com busca e contato com especialistas.
10. Landing de pizzaria artesanal com pedido direto no WhatsApp.
11. Cardápio, destaques e pedido por iFood e WhatsApp.
12. Curadoria de produtos Shopee com links de afiliado.

> **Manutenção:** se um cliente mudar o site, recapture o `public/sites/<slug>.jpg` (home, 1280×800, hero já renderizado).

---

## 8. Cases e projetos (`#trabalhos`)

Cases e projetos ficam na **mesma seção** — antes eram três blocos quase idênticos (cases, sites, projetos).

### Intro
> Quatro entregas contadas por inteiro: a dor do cliente, o que eu construí e o resultado.

Cada case mostra **problema / o que eu fiz / um resultado**. O resto abre em “Ver o resto do resultado” (`<details>`). Rodapé com link externo + “Tenho um caso parecido” no WhatsApp.

### 8.1 Site + painel para o dono editar sozinho
- **Contexto:** Boomerang Kids · salão de festas infantil · Zona Oeste, RJ · *Site local*
- **Problema:** Casa de festa forte no Instagram e sem site: todo orçamento passava pelo WhatsApp e quem buscava no Google não achava.
- **O que fiz:** Landing em Next.js com a identidade da marca, SEO local, FAQ e mapa — mais um painel em português para o dono trocar textos e fotos sem me chamar.
- **Resultado em destaque:** No ar com painel `/admin`: o dono publica conteúdo novo sem depender de dev.
- **Stack:** Next.js, TypeScript, Vercel, SEO · **Link:** https://boomerang-kids-site.vercel.app

### 8.2 Duas unidades viraram uma loja — e o site diz isso
- **Contexto:** SuporTI Cell · assistência técnica · Realengo, RJ · *Site local*
- **Problema:** A loja unificou as unidades e o cliente continuava achando que eram duas.
- **O que fiz:** Site sob medida em Next.js: serviços de celular e de PC/games separados, diferenciais, horário, endereço e WhatsApp em cada serviço.
- **Resultado em destaque:** Orçamento a um toque em cada serviço, com uma mensagem só: uma loja.
- **Stack:** Next.js, TypeScript, Vercel, WhatsApp · **Link:** https://suporti-cell-site.vercel.app

### 8.3 Call Pulse — do relatório de Power BI ao app que o time usa
- **Contexto:** JW Wood · imobiliária no Reino Unido · Freelancer.com · **fase 1 → fase 2** · *App web & Dados*
- **Problema:** Relatório montado à mão; virou Power BI e quase ninguém abria. Chamada perdida não aparecia em lugar nenhum e a tela mostra telefone de cliente, então cada filial só pode ver o que é dela.
- **O que fiz:** Fase 1 — relatório em Power BI com DAX e distribuição por e-mail no automático. Fase 2 — app em Next.js lendo o dataset pela API do Power BI, com login próprio e acesso por papel.
- **Resultado em destaque:** 8 filiais e 47 colaboradores no mesmo painel, sem ninguém precisar abrir o Power BI.
- **Detalhes (disclosure):** ~213 mil registros de chamadas · chamadas perdidas por pessoa e escritório com retorno identificado no log · 19 logins em 3 níveis · atualização a cada ~15 min via service principal no Azure · consulta pesada de 57s para ~3s · 5★ (“exceeded every expectation and delivered way beyond initial project scope”)
- **Stack:** Next.js, TypeScript, Power BI API, DAX, Azure, Vercel
- **Link:** https://www.freelancer.com/projects/data-analysis/Call-Pulse-Wood-telephony-reporting

> Os dois cases antigos de JW Wood (Power BI e Call Pulse) **eram o mesmo cliente** e viraram um só, com a fase 1 dentro.

### 8.4 Pipeline serverless de metadados Power BI
- **Contexto:** Cliente internacional · automação Azure · *Cloud & Automação*
- **Problema:** A extração de metadados exigia alguém apertando botão e não rodava fora do horário comercial.
- **O que fiz:** Pipeline serverless no Azure com Functions e Storage Queues — da fila de jobs à execução e persistência.
- **Resultado em destaque:** Extração rodando 24/7, sem intervenção manual no ciclo.
- **Stack:** Azure, Python, Functions, Storage Queues

### Projetos próprios

> Onde ele testa stack nova antes de colocar em produção pra alguém. **“Power BI Telephony” e “Azure Pipeline” saíram desta lista**: já são cases acima.

| # | Projeto | Tags | Links | Destaque |
|---|---------|------|-------|----------|
| 1 | **Painel Claro** — painel financeiro/fiscal white-label para escritórios de contabilidade (faturamento, impostos, Reforma Tributária 2026) | Next.js, Recharts, TypeScript | [demo](https://painel-contador.vercel.app) · [código](https://github.com/cauaprjct/painel-claro) | sim |
| 2 | **AutoRPA** — automação de processos com IA, ponta a ponta | Python, FastAPI, Next.js | [código](https://github.com/cauaprjct/AutoRPA) | sim |
| 3 | **RAG Financeiro B3** — perguntas e respostas sobre documentos da B3 com citação da página (denso + BM25 + RRF) | Python, Gemini, Streamlit | [código](https://github.com/cauaprjct/rag-financeiro-b3) | sim |
| 4 | **Social Down** — baixar vídeos de TikTok, Instagram, YouTube e Facebook | Next.js, TypeScript, Tailwind | [demo](https://social-down.vercel.app) · [código](https://github.com/cauaprjct/social-down) | sim |
| 5 | **ExcelMind AI** — análise de planilhas com IA: gráficos automáticos e chat em português | Python, Pandas, IA | [código](https://github.com/cauaprjct/excelmind-ai) | ver mais |
| 6 | **StockAI Brasil** — análise de ações da B3 com previsões de ML | Python, ML, Streamlit | [código](https://github.com/cauaprjct/stockai-brasil) | ver mais |
| 7 | **Forex Historical Data & Dataset** — extração, limpeza e consolidação de dados históricos | Python, Pandas, Dados | [Freelancer](https://www.freelancer.com/u/CauaAlves) | ver mais |

---

## 9. Trajetória & formação (`#trajetoria`)

Trajetória e certificações ficam na **mesma seção** (eram duas, com a mesma textura de card).

### Intro
> De onde vem cada trilho: os trabalhos que já entreguei e a formação que sustenta o serviço.

### Independente / Freelancer.com
- **Cargo:** Desenvolvedor de Dados & Automação · **Período:** 2023 - Presente
- **Resumo:** Soluções de dados e automação para clientes no Brasil, Reino Unido e Portugal: relatórios Power BI, automação no Azure e pipelines em Python. 100% dos projetos concluídos e avaliação 5★.
- Relatórios e app de telefonia para um time de 47 colaboradores no Reino Unido
- Pipeline serverless no Azure (Functions, Storage Queues) rodando sem intervenção
- Automação de backend B2B em Portugal e integrações via API

### Suporte Técnico & Informática
- **Cargo:** Técnico de Informática · **Período:** Formação contínua
- **Resumo:** Manutenção de computadores e suporte técnico com base na formação Academia do Hardware (200h): hardware, redes e sistemas operacionais, além de otimização de dispositivos Android.
- Montagem, manutenção e diagnóstico de hardware
- Formatação, backup e otimização em Windows e Linux
- Redes cabeadas, Wi-Fi e limpeza de Android via ADB

### Formação (enxuta e corrigida)

| Grupo | Itens |
|-------|-------|
| **Técnico & Hardware** | Academia do Hardware · 200h (montagem, manutenção, redes e Windows/Linux) · Fundamentos de TI (hardware e software) |
| **Desenvolvimento** | Programação orientada a objetos (Python/POO) · Lógica de programação (algoritmos) · Projeto com interface gráfica (aplicação desktop) |
| **Dados, IA & negócio** | Claude Code in Action (Anthropic) · Microsoft Excel 2016 (planilhas e análise) · Estratégia de negócios (gestão) |

> **Corrigido em 27/jul:** “Estratégia de Negócios” estava renderizando dentro do card da Anthropic e “Microsoft Excel 2016” sob “Desenvolvimento & Dados”. Os cursos introdutórios de Claude (101, Code 101, Cowork) saíram — ficou o que faz trabalho de verdade.

---

## 10. Contato + prova social (`#contato`)

Os depoimentos deixaram de ser seção própria e ficam **do lado do botão**, que é onde servem para algo.

### Título
**Precisa de site, software ou de suporte técnico?**

### Texto de apoio
> Me chama no WhatsApp com o que você precisa. Se for da minha área, já adianto escopo, prazo e próximos passos. Se não for, falo na boa.

### Canais
- WhatsApp: (21) 97099-8386 (mensagem `contact`)
- E-mail: cauaalvesbalbino@gmail.com
- Local: Rio de Janeiro, Brasil

### Chips de prova (`testimonialStats`)
5,0★ no Freelancer.com · 9 avaliações · 100% de conclusão · **Brasil, UK e Portugal**

> O chip **“+US$ 3.7K em projetos” saiu**: as avaliações públicas somam ~US$ 1,3K, então o número não se sustentava. Trocado por um claim verificável.

### Depoimentos publicados (3)

| Cliente | Projeto | Depoimento |
|---------|---------|-----------|
| **James P.** · Reino Unido | Call Pulse — app de telefonia | *First class across the board. Exceeded every expectation and delivered way beyond initial project scope.* |
| **Mariano S.** · Freelancer.com | Extração DMV em DAX Studio | *Highly recommended! Responsible, fast.* |
| **Maria O.** · Portugal | Análise de mercado + sistema digital | *Excelente profissional. Recomendo.* |

> **O que saiu e por quê:** o campo `position` publicava o valor de cada projeto (£369, £135, $20, £12, £10, £15) — o preço de um trabalho não é referência para o próximo, e três dos oito eram trabalho acadêmico de £10–£15 ao lado das cinco estrelas. Os valores saíram e os acadêmicos (Rai D. ×3) e o Forex ($20) saíram da página. As avaliações continuam públicas no perfil do Freelancer.

---

## 11. Estrutura das seções (ordem no site)

| # | Seção | Âncora | Componente |
|---|-------|--------|-----------|
| — | Header + skip link + progresso | — | `Header.tsx` |
| 1 | Hero split (Dev · Nome+CTA · Técnico) | `#top` | `HeroSplit.tsx` |
| 2 | O que eu resolvo | `#servicos` | `Services.tsx` |
| 3 | Como funciona | `#como-funciona` | `Process.tsx` + `AvailabilityBadge.tsx` |
| 4 | Antes de me chamar (FAQ) | `#faq` | `FAQ.tsx` |
| 5 | Sites que estão no ar | `#sites-clientes` | `ClientSites.tsx` |
| 6 | Cases e projetos | `#trabalhos` | `Works.tsx` |
| 7 | Trajetória & formação | `#trajetoria` | `Background.tsx` |
| 8 | Contato + prova social | `#contato` | `CallToAction.tsx` |
| — | FAB de WhatsApp (celular, após o hero) | — | `WhatsAppFab.tsx` |

### Seções que deixaram de existir

| Antes | Para onde foi |
|-------|---------------|
| Dois trilhos, um profissional (`#proposta`) | virou o **pitch** dentro do hero |
| Ferramentas de trabalho (`#skills`, 37 chips) | 6 por trilho, dentro dos cards de serviço |
| Projetos em destaque (`#projetos`) | dentro de **Cases e projetos** (`#trabalhos`) |
| Formação & Certificações (`#certificacoes`) | dentro de **Trajetória & formação** (`#trajetoria`) |
| Depoimentos (`#depoimentos`) | dentro de **Contato** (`#contato`) |
| Trajetória (`#experiencia`) | mesma seção, âncora agora é `#trajetoria` |
| Cases (`#cases`) | âncora agora é `#trabalhos` |

---

## 12. Comportamento e acessibilidade

- **Animação de entrada sem risco:** o HTML sai do servidor **visível** (zero `opacity:0` inline). Quem liga a animação é um script inline em `layout.tsx` que adiciona `.js` no `<html>` e observa `[data-reveal]` — fora do React. Sem JS, ou se a hidratação quebrar, a página inteira continua legível. Variantes: `fade` (título), `lift` (item de lista), `up` (bloco).
- **Foco:** anel `focus-visible` no ciano dev, skip link, foco preso no menu mobile (Tab cicla, Esc volta pro botão).
- **Alvos de toque:** mínimo de 44px em botões, links de card e ícones sociais. Os únicos alvos menores são links de texto inline (nome do cliente no depoimento) e o skip link, que só existe visualmente quando recebe foco.
- **Hierarquia:** h1 de 36px no celular contra h2 de 24px; os títulos dos trilhos do hero são `<p>`, então o h1 é o primeiro título do documento.
- **Contraste:** rótulos e separadores que ficavam em `white/40` e `white/25` subiram para `white/60`.
- **Movimento reduzido:** `prefers-reduced-motion` desliga reveal, entrada do hero e o terminal alternado.

---

## 13. Mapa rápido de posicionamento

| Frente | Foco | O que vende |
|--------|------|-------------|
| **Software** | Sites, dados, BI, automação, IA | Sites/apps Next.js/Vite, dashboards, RPA, LLMs |
| **Técnico** | Hardware e suporte | Montagem, formatação, redes, checkup Android |
| **Público** | BR + freela internacional (UK, PT) | PME, contabilidade, operações de dados, suporte local RJ |
| **Diferencial** | Dois trilhos num profissional | Código + máquina, sem dois prestadores |
| **Stack web** | Next.js, Vite, React | Sob medida — sem WordPress/Wix |

---

## 14. Onde editar no código

| Conteúdo | Arquivo |
|----------|---------|
| Contato, mensagens de WhatsApp, nav, disponibilidade, processo, FAQ, hero, serviços, ferramentas, cases, projetos, sites, formação, depoimentos | `src/config/data.ts` |
| URL canônica | `src/config/site.ts` |
| Title, description, keywords, Open Graph | `src/config/metadata.ts` |
| Ordem das seções + JSON-LD de FAQPage | `src/app/page.tsx` |
| Script do reveal, skip link | `src/app/layout.tsx` |
| Reveal, foco, animações do hero, FAB vs menu | `src/app/globals.css` |
| Header / FAB | `Header.tsx`, `WhatsAppFab.tsx` |
| Serviços / Processo / FAQ | `Services.tsx`, `Process.tsx`, `FAQ.tsx` |
| Sites (grade de screenshots) | `ClientSites.tsx` + `public/sites/*.jpg` |
| Cases + projetos | `Works.tsx` |
| Trajetória + formação | `Background.tsx` |
| Contato + depoimentos | `CallToAction.tsx` |

### Notas de manutenção
- **Screenshots dos sites:** home, 1280×800, jpeg, em `public/sites/<slug>.jpg`. Recapturar quando o cliente mudar o site.
- **`react-icons`:** o ícone da OpenAI (`SiOpenai`) saiu do simple-icons na 5.7 — o projeto usa `TbBrandOpenai` (Tabler). Ao trocar de versão, confira ícones de marca antes de subir.
- **Smoke de links:** `node scripts/smoke-links.mjs`
- **Build autoritativo:** `npm run build` (o mesmo que a Vercel roda no push).

---

*Atualizado em 27/jul/2026, junto da reestruturação de 13 → 8 seções. Ao alterar copy no código, atualize este arquivo.*
