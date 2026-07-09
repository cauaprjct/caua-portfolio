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
| **Última consolidação** | 2026-07-09 (Fase 6 + sync GitHub + doc Vercel) |
| **Plano de execução** | `docs/PLANO-EXECUCAO.md` |
| **Histórico / deploys** | `docs/HISTORICO-COMPLETO.md` |

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

### Manifest (PWA)
- **name:** Cauã Alves | Desenvolvedor & Técnico de Informática  
- **short_name:** Cauã Alves  
- **description:** Portfólio de Cauã Alves — Desenvolvedor e Técnico de Informática. Dados, BI e automação; manutenção, redes e otimização de PCs e Android.  
- **theme / background:** `#0d0f14`

### Header (nav)
- Marca: `Cauã.Alves`  
- Âncoras (desktop `lg+`): Serviços · Como funciona · Cases · Sites · Projetos · FAQ · Contato  
- CTA: WhatsApp — “Fale comigo”  
- Mensagem pré-preenchida: *Olá Cauã! Vim pelo portfólio e gostaria de conversar sobre um projeto.*  
- Mobile/tablet: menu hamburger + FAB WhatsApp  

### Disponibilidade
- `availability.open: true`  
- Label: **Disponível para novos projetos**  
- (Trocar para `false` quando a agenda estiver cheia.)

---

## 2. Contato e redes sociais

| Campo | Valor |
|--------|--------|
| **Nome** | Cauã Alves |
| **Localização** | Rio de Janeiro, Brasil |
| **E-mail** | cauaalvesbalbino@gmail.com |
| **WhatsApp** | (21) 97099-8386 |
| **WhatsApp (link)** | via `whatsappUrl()` com texto pré-preenchido |
| **GitHub** | https://github.com/cauaprjct |
| **LinkedIn** | https://www.linkedin.com/in/cau%C3%A3-alves-0975a129b/ |
| **Freelancer.com** | https://www.freelancer.com/u/CauaAlves |

---

## 3. Hero — dois trilhos

### Identidade central
- **Nome:** Cauã Alves  
- **Tagline:** Desenvolvedor & Técnico de Informática  
- **Intro (legado no data):** Escrevo o software e cuido da máquina. Do dashboard que roda sozinho ao computador que volta a funcionar.

### Trilho Dev (software)

| Campo | Texto |
|--------|--------|
| **Label** | Desenvolvedor |
| **Kicker** | Escrevo o software |
| **Role** | Dados, BI, Automação & Web |
| **Blurb** | Transformo planilhas e trabalho manual em sistemas que rodam sozinhos — dashboards, automações, integrações com IA e sites/apps sob medida em Next.js e Vite. |
| **Stack (chips)** | Python · Next.js · Vite · Power BI · Azure · IA / LLMs |

**Terminal ilustrativo (desktop):**
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

**Terminal ilustrativo (desktop):**
```text
$ adb shell otimizar --limpeza
→ cache liberado: 4.2 GB
→ apps em segundo plano: 0
✓ celular rápido de novo
```

---

## 4. Proposta de valor

### Título
**Dois trilhos, um profissional**

### Descrição
> A maioria dos negócios precisa das duas pontas: alguém que construa o sistema e alguém que mantenha o equipamento funcionando. Eu faço as duas — do código à manutenção, sem ficar passando de um prestador para outro.

---

## 5. Serviços — “O que eu resolvo”

### Intro da seção
> Duas frentes de trabalho. Escolha uma ou combine as duas — do sistema ou site que automatiza e apresenta o seu negócio à máquina que precisa voltar a funcionar.

### 5.1 Desenvolvimento & Dados

#### Dashboards Power BI & Web
Painéis executivos com modelagem DAX e distribuição automática por e-mail. Também em Next.js + Recharts.

#### Automação & RPA
Tarefas repetitivas e coleta de dados no automático com Python e Playwright. Menos trabalho manual, menos erro.

#### Integrações com IA
Chatbots, análise de documentos e assistentes com LLMs (OpenAI, Gemini, Claude) ligados ao seu negócio.

#### Sites, Apps & Sistemas Web
Sites e aplicações sob medida com Next.js, Vite e React — landing pages, sites institucionais e painéis. Também apps Android nativos (Kotlin). Da ideia ao deploy na Vercel.

> **Nota de posicionamento:** sites sob medida (Next.js, Vite, React). **Não** WordPress / Wix.

### 5.2 Suporte & Manutenção

#### Montagem & Manutenção
Montagem de PCs, troca de peças, limpeza e diagnóstico de hardware. Formação Academia do Hardware (200h).

#### Formatação & Otimização
Instalação de Windows/Linux, backup, remoção de vírus e otimização. O computador rápido como no primeiro dia.

#### Redes & Wi-Fi
Configuração de roteadores, redes cabeadas e Wi-Fi para casa e pequenos negócios.

#### Checkup Android
Diagnóstico grátis e limpeza/otimização de celulares via ADB. Mais espaço, mais bateria, mais velocidade.

---

## 5b. Como funciona

### Passos
1. **Você me chama** — WhatsApp com a necessidade  
2. **Alinho escopo e prazo**  
3. **Proposta simples** — entrega, etapas e pagamento  
4. **Execução**  
5. **Entrega e handoff**  

### Trilhos curtos
- **Site / web:** Brief → páginas → revisão → deploy Vercel  
- **Dados & automação:** Dor → modelo/pipeline → testes → rotina  
- **Suporte técnico:** Diagnóstico → orçamento → execução → validação  

---

## 5c. Cases

1. **Relatórios de telefonia automatizados** (UK, Power BI, 47 colaboradores)  
2. **Pipeline serverless de metadados Power BI** (Azure, 24/7)  
3. **Site SuporTI Cell** (loja única Realengo + WhatsApp)  

Detalhes: problema → solução → resultados → stack → link em `cases[]`.

---

## 5d. FAQ

1. WordPress/Wix? → Não; Next.js/Vite sob medida  
2. Só RJ? → Suporte local RJ; software remoto BR/exterior  
3. Prazo site? → Faixa realista no primeiro contato  
4. Pagamento? → Combinado na proposta antes de começar  
5. Só site ou BI/automação? → Ambas as frentes + técnico  
6. Como começar? → WhatsApp  

---

## 6. Trajetória (experiência)

### Independente / Freelancer.com
- **Cargo:** Desenvolvedor de Dados & Automação  
- **Período:** 2023 - Presente  
- **Resumo:** Soluções de dados e automação para clientes no Brasil, Reino Unido e Portugal: relatórios Power BI, automação no Azure e pipelines em Python. 100% dos projetos concluídos e avaliação 5★.

**Destaques:**
- Relatórios automatizados de telefonia em Power BI (UK, 47 colaboradores) com envio agendado por e-mail  
- Pipeline serverless no Azure para extração de metadados de Power BI (Functions, Storage Queues)  
- Modelagem e medidas DAX, com distribuição de dashboards sem trabalho manual  
- Automação de backend B2B em Portugal e integrações via API  
- Atuação ponta a ponta: da dor do cliente à entrega e manutenção  

### Suporte Técnico & Informática
- **Cargo:** Técnico de Informática  
- **Período:** Formação contínua  
- **Resumo:** Manutenção de computadores e suporte técnico com base na formação Academia do Hardware (200h): hardware, redes e sistemas operacionais, além de otimização de dispositivos Android.

**Destaques:**
- Montagem, manutenção e diagnóstico de hardware de computadores  
- Formatação, backup e otimização em Windows e Linux  
- Configuração de redes cabeadas e Wi-Fi  
- Limpeza e otimização de celulares Android via ADB (Checkup Android)  

---

## 7. Sites publicados para clientes

### Intro da seção
> Sites sob medida que saíram do código e foram para o ar — cada um com a cara e o objetivo do negócio do cliente.

> **Critério:** listados a partir dos projetos em produção na Vercel (conta `cauaprjct`). Excluídos: portfólio próprio, demos internas, APIs, apps pessoais e versões antigas duplicadas (ex.: drafts de Ferragens Shalon).

| Site | Cliente | Segmento | Local | URL |
|------|---------|----------|-------|-----|
| SuporTI Cell | SuporTI Cell | Assistência técnica | Realengo, RJ | https://suporti-cell-site.vercel.app |
| Medstar Rio | Medstar Rio | Material hospitalar | Magalhães Bastos, RJ | https://medstar-site.vercel.app |
| Ferragens Shalon | Ferragens Shalon | Material de construção | Realengo, RJ | https://ferragens-shalon.vercel.app |
| Velucci's Beauty House | Velucci's Beauty House | Salão de beleza | Leblon, RJ | https://veluccis-site.vercel.app |
| Bistrô Hair | Bistrô Hair | Salão — mechas e loiros | Copacabana, RJ | https://bistro-hair-site.vercel.app |
| Rock e Barba | Rock e Barba | Barbearia | Icaraí, Niterói | https://rockebarba-site.vercel.app |
| Márcio Roberto — Fotógrafo | Márcio Roberto | Fotografia | Rio de Janeiro | https://marcio-site-vert.vercel.app |
| Realengo Imóveis | Realengo Imóveis | Imobiliária | Realengo, RJ | https://realengo-imoveis.vercel.app |
| Pizzaria du Barbosa | Pizzaria du Barbosa | Alimentação | Rio de Janeiro | https://pizzaria-du-barbosa.vercel.app |
| Império Empadão | Império Empadão | Alimentação | Brasil | https://imperio-empadao.vercel.app |
| Achados da Tia | Achados da Tia | Afiliados / vitrine | Online | https://modern-tote-bag-store-phi.vercel.app |

### Descrições (resumo no site)

1. **SuporTI Cell** — Uma loja em Realengo: celular + PC/games no mesmo endereço; orçamento WhatsApp.  
2. **Medstar Rio** — Aluguel/venda/conserto de material hospitalar; B2B para empresas.  
3. **Ferragens Shalon** — Catálogo Rede Casa Nossa, galeria da loja, contato.  
4. **Velucci's** — Casa de beleza completa no Leblon; WhatsApp + Trinks.  
5. **Bistrô Hair** — Mechas/loiros em Copacabana; agendamento WhatsApp.  
6. **Rock e Barba** — Barbearia em Icaraí com 5,0 no Google.  
7. **Márcio Roberto** — Portfólio fotográfico e orçamento.  
8. **Realengo Imóveis** — Vitrine compra/aluguel no bairro.  
9. **Pizzaria du Barbosa** — Landing + pedido WhatsApp.  
10. **Império Empadão** — Cardápio + iFood/WhatsApp.  
11. **Achados da Tia** — Vitrine de afiliados Shopee com curadoria.

### Não listados de propósito (amostra da conta Vercel)
Portfólio (`portifolio-caua`), Painel Claro / Social Down (já em “Projetos”), Moderno Saúde e SalonFlow (demos de produto), APIs e apps pessoais (ex.: Nero, Beemo, calculator, jogo-bicho), versões antigas (`site-ferragens-shalon`, `site-de-material-de-construcao`).

---

## 8. Projetos em destaque

### Intro da seção
> Sistemas reais que resolvem problemas reais — de painéis financeiros a automação com IA.

### 7.1 Painel Claro
- **Descrição:** Painel financeiro/fiscal white-label que escritórios de contabilidade entregam ao cliente PJ: faturamento, impostos e a Reforma Tributária 2026. Next.js + Recharts.  
- **Tags:** Next.js, Recharts, TypeScript  
- **Demo:** https://painel-contador.vercel.app  
- **GitHub:** https://github.com/cauaprjct/painel-claro  

### 7.2 AutoRPA
- **Descrição:** Plataforma de automação de processos (RPA) com IA. Orquestra tarefas repetitivas de ponta a ponta. FastAPI + Next.js + PostgreSQL.  
- **Tags:** Python, FastAPI, Next.js  
- **GitHub:** https://github.com/cauaprjct/AutoRPA  

### 7.3 RAG Financeiro B3
- **Descrição:** Agente de perguntas e respostas sobre documentos financeiros da B3 com citações por página. Retrieval híbrido (denso + BM25 + RRF) e interface em Streamlit.  
- **Tags:** Python, Gemini, Streamlit  
- **GitHub:** https://github.com/cauaprjct/rag-financeiro-b3  

### 7.4 ExcelMind AI
- **Descrição:** Análise inteligente de planilhas Excel/CSV com IA: gráficos automáticos e chat em português sobre os dados. Insights sem trabalho manual.  
- **Tags:** Python, Pandas, IA  
- **GitHub:** https://github.com/cauaprjct/excelmind-ai  

### 7.5 StockAI Brasil
- **Descrição:** Dashboard de análise de ações da B3 com previsões de Machine Learning. Visualização de dados financeiros e modelos preditivos em Streamlit.  
- **Tags:** Python, ML, Streamlit  
- **GitHub:** https://github.com/cauaprjct/stockai-brasil  

### 7.6 Social Down
- **Descrição:** App web para baixar vídeos do TikTok, Instagram, YouTube e Facebook. Interface moderna em Next.js + TypeScript, com deploy na Vercel.  
- **Tags:** Next.js, TypeScript, Tailwind  
- **Demo:** https://social-down.vercel.app  
- **GitHub:** https://github.com/cauaprjct/social-down  

### 7.7 Power BI Telephony Reporting
- **Descrição:** Relatórios automatizados de telefonia em Power BI (Reino Unido, 47 colaboradores) com envio agendado por e-mail, modelagem DAX e distribuição sem trabalho manual nem licenças extras.  
- **Tags:** Power BI, DAX, Automação  
- **Link:** https://www.freelancer.com/projects/power-bi/Power-Telephony-Reporting-Setup  

### 7.8 Azure Power BI Data Pipeline
- **Descrição:** Pipeline serverless no Azure (Functions, Storage Queues, VMs) para extração de metadados de Power BI e automação de relatórios, rodando 24/7 sem intervenção manual.  
- **Tags:** Azure, Python, Serverless  
- **Link:** https://www.freelancer.com/u/CauaAlves  

### 7.9 Forex Historical Data & Dataset
- **Descrição:** Processamento e tratamento de dados históricos de Forex em Python: pipeline de extração, limpeza e consolidação para análise e pesquisa de mercado.  
- **Tags:** Python, Pandas, Dados  
- **Link:** https://www.freelancer.com/u/CauaAlves  

---

## 9. Ferramentas de trabalho (stack)

### Intro da seção
> A stack que uso para construir software e para manter equipamentos funcionando.

### Desenvolvimento & Dados

| Grupo | Tecnologias |
|--------|-------------|
| **Dados & BI** | Power BI, DAX, SQL, Pandas, Streamlit |
| **Linguagens** | Python, TypeScript, JavaScript, Kotlin, Dart |
| **Web & Cloud** | Next.js, Vite, React, Tailwind, Azure, Docker, Vercel |
| **Backend & Dados** | FastAPI, Node.js, Express, PostgreSQL, MySQL, MongoDB |
| **IA & Mobile** | OpenAI, Gemini, scikit-learn, Flutter, Firebase, Playwright |

### Técnico & Hardware

| Grupo | Itens |
|--------|--------|
| **Hardware** | Manutenção de PC, Hardware |
| **Sistemas** | Windows, Linux, Terminal / CLI |
| **Redes** | Redes & Wi-Fi |
| **Mobile** | Android / ADB, Otimização |

---

## 10. Formação & Certificações

### Intro da seção
> Autodidata com formação contínua por certificações — nas duas frentes: desenvolvimento e hardware/suporte técnico.

### Técnico & Hardware
| Nome | Detalhe |
|------|---------|
| Academia do Hardware | Montagem, manutenção, redes e Windows/Linux · 200h |
| Fundamentos de TI | Hardware e Software |

### Desenvolvimento & Dados
| Nome | Detalhe |
|------|---------|
| Desenvolvimento Orientado a Objetos | Python (POO) |
| Fundamentos de Lógica de Programação | Algoritmos |
| Projeto com Interface Gráfica | Aplicação desktop |
| Microsoft Excel 2016 | Planilhas e análise |

### IA — Anthropic (Claude)
| Nome | Detalhe |
|------|---------|
| Claude Code in Action | Anthropic |
| Claude Code 101 | Anthropic |
| Claude 101 · Introduction to Claude | Anthropic |
| Introduction to Claude Cowork | Anthropic · uso colaborativo em equipes |
| Estratégia de Negócios | Gestão |

---

## 11. Depoimentos — “O que dizem os clientes”

### Intro da seção
> Projetos entregues no Brasil, Reino Unido e Portugal — 100% concluídos, avaliação 5★ no Freelancer.com.

### Métricas exibidas
| Métrica | Valor |
|---------|--------|
| Avaliação | 5.0★ no Freelancer.com |
| Avaliações | 7 |
| Faturamento em projetos | +US$ 3.7K |
| Conclusão | 100% |

### Lista de depoimentos

#### James P. — Power BI Telephony Reporting (£135)
> Will be using again very soon as work was excellent and communication plus feedback both above expectations.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/power-bi/Power-Telephony-Reporting-Setup  

#### Brendan O. — Forex Market Research: Historical Data ($20)
> Was a great working with Caua, he understood the task and got on with delivering an excellent solution.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/data-analysis/Forex-Market-Research-Historical-Data  

#### Mariano S. — DMV Query Extraction in DAX Studio ($290)
> Highly recommended! Responsible, fast.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/automation/DMV-Query-Extraction-DAX-Studio  

#### Maria O. — Análise de Mercado + Sistema Digital, Portugal (€150)
> Excelente profissional. Recomendo.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/api-developmet/lise-Mercado-Sistema-Digital-Portugal  

#### Rai D. — Qualitative Interview Report + Appendices (£12)
> This is the third project I worked on with them, and they are really good at each type of work.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/data-analysis/Qualitative-Interview-Report-Appendices  

#### Rai D. — Health Psychology Blog Portfolio + Reflection (£10)
> Great work quality and always before time. I was very delighted by the speed of their work. Thank you so much! I would definitely recommend working with them in the future.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/data-analysis/Health-Psychology-Blog-Portfolio  

#### Rai D. — SPSS tutoring: ANCOVA & factor analysis help (£15)
> Great work, before time delivery.

- **Plataforma:** Freelancer.com  
- **Projeto:** https://www.freelancer.com/projects/data-analysis/SPSS-tutoring-ANCOVA-factor-analysis  

---

## 12. Call to Action (rodapé de contato)

### Título
**Precisa de software, site ou de suporte técnico?**

### Texto de apoio
> Me chama no WhatsApp com o que você precisa — dashboard, automação, site sob medida ou manutenção. Respondo rápido e, se for da minha área, já adianto os próximos passos.

### Canais exibidos
- WhatsApp: (21) 97099-8386 → https://wa.me/5521970998386  
- E-mail: cauaalvesbalbino@gmail.com  
- Local: Rio de Janeiro, Brasil  

---

## 13. Estrutura das seções (ordem no site)

1. **Header** — logo + nav + WhatsApp  
2. **Hero split** — Dev | Nome | Técnico  
3. **Dois trilhos** (`#proposta`)  
4. **O que eu resolvo** (`#servicos`)  
5. **Como funciona** (`#como-funciona`) + badge disponibilidade  
6. **Trajetória** (`#experiencia`)  
7. **Cases** (`#cases`)  
8. **Sites publicados** (`#sites-clientes`) — 6 destaques + ver mais  
9. **Projetos em destaque** (`#projetos`) — 6 destaques + ver mais  
10. **Ferramentas** (`#skills`)  
11. **Formação & Certificações** (`#certificacoes`)  
12. **Depoimentos** (`#depoimentos`) — Freelancer (locais: Fase 4 adiada)  
13. **FAQ** (`#faq`)  
14. **CTA** (`#contato`) + FAB WhatsApp (mobile)

---

## 14. Mapa rápido de posicionamento

| Frente | Foco | O que vende |
|--------|------|-------------|
| **Software** | Dados, BI, automação, IA, web | Dashboards, RPA, LLMs, sites/apps Next.js/Vite |
| **Técnico** | Hardware e suporte | Montagem, formatação, redes, checkup Android |
| **Público** | BR + freela internacional (UK, PT) | PME, contabilidade, operações de dados, suporte local RJ |
| **Diferencial** | Dois trilhos num profissional | Código + máquina, sem dois prestadores |
| **Stack web** | Next.js, Vite, React | Sob medida — sem WordPress/Wix |

---

## 15. Onde editar no código

| Conteúdo | Arquivo |
|----------|---------|
| Contato, nav, disponibilidade, processo, FAQ, hero, serviços, cases, projetos, sites, skills, certs, depoimentos | `src/config/data.ts` |
| URL canônica | `src/config/site.ts` |
| Title, description, keywords, Open Graph | `src/config/metadata.ts` |
| Ordem das seções | `src/app/page.tsx` |
| Header / FAB WhatsApp | `Header.tsx`, `WhatsAppFab.tsx` |
| Processo / FAQ / Cases | `Process.tsx`, `FAQ.tsx`, `Cases.tsx` |
| Sites / Projetos (destaques) | `ClientSites.tsx`, `Projects.tsx` |
| CTA final | `CallToAction.tsx` |

### Scripts
- Smoke de links: `node scripts/smoke-links.mjs`

---

*Atualizado na Fase 6 (polish). Ao alterar copy no código, atualize este arquivo.*
