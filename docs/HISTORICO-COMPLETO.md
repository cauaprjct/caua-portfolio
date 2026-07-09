# Histórico completo — evolução do portfólio

Documento que registra **tudo o que foi feito** nesta série de melhorias no portfólio de Cauã Alves (revisão, features, bugs, plano em fases e deploys).

| Campo | Valor |
|--------|--------|
| **Site em produção** | https://portifolio-caua.vercel.app |
| **Projeto Vercel** | `portifolio-caua` (conta `cauaprjct`) |
| **Período** | 2026-07-09 |
| **Fora de escopo (decisão)** | Foto de rosto · Screenshots/prints · Domínio próprio |
| **Documentos relacionados** | `docs/CONTEUDO-DO-SITE.md` · `docs/PLANO-EXECUCAO.md` |

---

## 1. Resumo executivo

O portfólio saiu de um site “dois trilhos” (dev + técnico) para um funil de conversão mais completo:

- Oferta de **sites sob medida** (Next.js / Vite, sem WordPress/Wix)
- **Sites de clientes** listados a partir da Vercel CLI
- **Cases** com problema → solução → resultado
- **Navegação** com âncoras + WhatsApp com mensagem pronta
- Listas **enxutas** (destaques + “Ver mais”)
- **Como funciona** + **FAQ** + badge de disponibilidade
- Correções de **mobile**, **LinkedIn**, **SEO/URL canônica** e copy
- Documentação de conteúdo e plano de execução

Tudo publicado em produção via `vercel --prod`.

---

## 2. Linha do tempo (ordem cronológica)

### 2.1 Revisão inicial do portfólio

- Análise do site ao vivo e do conteúdo.
- Feedback: posicionamento forte (“dois trilhos”), prova social Freelancer, projetos e CTA bons.
- Sugestões de melhoria (cases, prints, nav, enxugar listas, domínio, etc.).

### 2.2 Oferta de sites (software)

**Pedido:** incluir que cria sites, sem WordPress/Wix — foco Next/Vite.

**Feito:**
- Serviço renomeado para **“Sites, Apps & Sistemas Web”** com copy sob medida (Next.js, Vite, React).
- Hero: role `Dados, BI, Automação & Web`, blurb e stack com Vite.
- Vite na stack de ferramentas (`techStack`).
- Metadata/keywords com sites / Next.js / Vite.
- CTA e intro de serviços mencionando **site**.
- Deploy produção.

**Arquivos principais:** `src/config/data.ts`, `src/config/metadata.ts`, `src/components/Services.tsx`, `src/components/CallToAction.tsx`.

### 2.3 Bug mobile — nome “Cauã Alves” cobrindo o conteúdo

**Problema:** no mobile o nome estava `position: absolute` no centro da seção e sobrepunha os painéis Dev/Técnico.

**Feito:**
- No mobile, o bloco do nome entrou **no fluxo** entre os dois painéis (faixa compacta).
- Fonte menor (`text-2xl` / `sm:text-3xl`).
- Removido `min-h` agressivo que forçava sobreposição.
- Desktop na costura diagonal mantido.
- Validação com **Playwright** (iPhone SE, iPhone 14, Pixel 7) — sem overlap com títulos.
- Deploy produção.

**Arquivos:** `src/components/HeroSplit.tsx`  
**Artefatos:** `scripts/mobile-hero-check.mjs`, `playwright-shots/` (verificação local).

### 2.4 Documentação do conteúdo do site

**Feito:** `docs/CONTEUDO-DO-SITE.md` com inventário de textos, SEO, serviços, projetos, depoimentos, etc.  
(Atualizado várias vezes ao longo das fases.)

### 2.5 Seção “Sites publicados para clientes”

**Pedido:** listar sites já publicados; usar Vercel CLI; visitar cada um; montar área no portfólio (cada um de cliente).

**Feito:**
- `vercel project ls` — dezenas de projetos na conta.
- Visita das URLs de produção para classificar **cliente real** vs demo/pessoal/API.
- Nova seção **ClientSites** com 11 sites de negócio (segmento, local, descrição, link).
- Critério de exclusão documentado (portfólio próprio, demos, APIs, apps pessoais, drafts duplicados).
- Deploy produção.

**Incluídos (ex.):** SuporTI Cell, Medstar Rio, Ferragens Shalon, Velucci’s, Bistrô Hair, Rock e Barba, Márcio Roberto, Realengo Imóveis, Pizzaria du Barbosa, Império Empadão, Achados da Tia.

**Arquivos:** `src/config/data.ts` (`clientSites`), `src/components/ClientSites.tsx`, `src/app/page.tsx`.

### 2.6 Atualização SuporTI Cell (loja única)

**Contexto:** cliente unificou unidades (não são mais duas lojas). Site do cliente já atualizado.

**Feito:**
- Revisão do site ao vivo: “tudo na mesma loja”, Loja A, etc.
- Copy do portfólio ajustada (sem “duas unidades”).
- Docs + deploy.

**Nota observada no site do cliente (não alterado aqui):** título residual “Duas unidades, um padrão” na seção de diferenciais, enquanto o texto já fala em um só lugar.

### 2.7 Correção do link do LinkedIn

**Problema:** URL antiga `.../caua-alves-...` (sem ã) não abria o perfil certo.

**Feito:**
- URL atualizada para  
  `https://www.linkedin.com/in/cau%C3%A3-alves-0975a129b/`
- Em `data.ts`, README e docs.
- Deploy produção.

### 2.8 Diagnóstico “o que falta?” e plano em fases

**Feito:**
- Inventário de gaps (foto, prints, cases, nav, enxugar, depoimentos locais, processo/FAQ, domínio…).
- Decisão do usuário: **sem** foto, **sem** prints, **sem** domínio; o resto em fases.
- Criado `docs/PLANO-EXECUCAO.md` (fases 0–6).

### 2.9 Execução das fases (detalhe abaixo)

Fases **0, 1, 2, 3, 5, 6** concluídas.  
Fase **4** adiada (depoimentos locais só com texto real — inventar recusado).

---

## 3. Plano de execução — o que cada fase entregou

### Fase 0 — Correções rápidas ✅

| Entrega | Detalhe |
|---------|---------|
| Hero copy | Espaços explícitos em “Desenvolvedor & Técnico” + `aria-label` |
| URL canônica | Novo `src/config/site.ts` → `SITE_URL` = `https://portifolio-caua.vercel.app` |
| SEO | `metadata.ts`, `robots.ts`, `sitemap.ts` usam `SITE_URL` (removido fallback `caua-devtech.vercel.app`) |
| Open Graph | Tagline alinhada a “Dados, BI, Automação & Web” |
| package.json | `author.website` atualizado |
| Smoke test | `scripts/smoke-links.mjs` |

### Fase 1 — Navegação e conversão ✅

| Entrega | Detalhe |
|---------|---------|
| Header | Âncoras + WhatsApp |
| Mobile | Menu hamburger |
| WhatsApp | `whatsappPrefill` + `whatsappUrl()` em header, CTA, redes e FAB |
| FAB | `WhatsAppFab.tsx` (mobile only) |
| Scroll | `scroll-padding-top` no `html` + `scroll-mt` nos headings |
| Contato | `id="contato"` na section do CTA |

### Fase 2 — Enxugar conteúdo ✅

| Entrega | Detalhe |
|---------|---------|
| Data model | `featured` + `order` em projetos e sites |
| Helper | `sortByFeaturedOrder()` |
| Sites | 6 destaques + “Ver mais N sites” |
| Projetos | 6 destaques + “Ver mais N projetos” |
| UI | `ShowMoreButton.tsx` |

**Destaques — sites:** SuporTI Cell, Ferragens Shalon, Velucci’s, Rock e Barba, Márcio Roberto, Medstar.  
**Destaques — projetos:** Painel Claro, Power BI Telephony, Azure Pipeline, AutoRPA, RAG B3, Social Down.

### Fase 3 — Cases ✅

| Entrega | Detalhe |
|---------|---------|
| Modelo | `CaseStudy` + `cases[]` |
| Seção | `Cases.tsx` — problema / solução / resultados / stack / link |
| 3 cases | Power BI Telephony (UK) · Azure pipeline · SuporTI Cell |
| Nav | Link `#cases` |

**Regra:** outcomes só com fatos já documentados (sem métrica inventada).

### Fase 4 — Depoimentos locais ⏸

- **Não executada.**
- Motivo: depende de textos reais de clientes RJ.
- Inventar depoimentos foi **recusado** (ética e credibilidade).
- Pode ser retomada quando houver 1–3 quotes reais.

### Fase 5 — Processo e confiança ✅

| Entrega | Detalhe |
|---------|---------|
| Disponibilidade | `availability.open` + badge “Disponível para novos projetos” |
| Como funciona | 5 passos + 3 trilhos (site / dados / suporte) |
| FAQ | 6 perguntas (WordPress, RJ, prazo, pagamento, escopo, como começar) |
| Componentes | `Process.tsx`, `FAQ.tsx` |
| Nav | `#como-funciona`, `#faq` |
| CTA | Texto alinhado ao processo de contratação |

### Fase 6 — Polish final ✅

| Entrega | Detalhe |
|---------|---------|
| Nav desktop | Só a partir de `lg` (tablet usa hamburger) |
| Copy | Intro Cases e CTA revisados |
| Docs | Conteúdo + plano atualizados e encerrados |
| Smoke | Script ignora templates `${...}` no fonte |
| Deploy | Produção final do ciclo |

---

## 4. Arquivos criados

| Arquivo | Função |
|---------|--------|
| `src/config/site.ts` | URL canônica `SITE_URL` |
| `src/components/ClientSites.tsx` | Seção sites de clientes |
| `src/components/Cases.tsx` | Seção cases |
| `src/components/Process.tsx` | Como funciona + disponibilidade |
| `src/components/FAQ.tsx` | Perguntas frequentes (accordion) |
| `src/components/WhatsAppFab.tsx` | Botão flutuante WhatsApp (mobile) |
| `src/components/ShowMoreButton.tsx` | “Ver mais / Mostrar menos” |
| `scripts/smoke-links.mjs` | Smoke test de URLs em `data.ts` |
| `scripts/mobile-hero-check.mjs` | Screenshots Playwright (mobile) |
| `docs/CONTEUDO-DO-SITE.md` | Inventário de conteúdo do site |
| `docs/PLANO-EXECUCAO.md` | Plano em fases 0–6 |
| `docs/HISTORICO-COMPLETO.md` | Este documento |

---

## 5. Arquivos alterados (principais)

| Arquivo | Mudanças |
|---------|----------|
| `src/config/data.ts` | Contato, WhatsApp, nav, availability, process, FAQ, cases, services, projects featured, clientSites, skills Vite, LinkedIn |
| `src/config/metadata.ts` | `SITE_URL`, description/keywords sites |
| `src/app/page.tsx` | Ordem das seções (Process, Cases, ClientSites, FAQ…) |
| `src/app/layout.tsx` | `WhatsAppFab` |
| `src/app/globals.css` | `scroll-padding-top` |
| `src/app/robots.ts` / `sitemap.ts` | Usam `SITE_URL` |
| `src/app/opengraph-image.tsx` | Tagline web |
| `src/components/Header.tsx` | Nav, menu mobile, WhatsApp |
| `src/components/HeroSplit.tsx` | Layout mobile do nome; copy & |
| `src/components/Services.tsx` | Intro com “site” |
| `src/components/Projects.tsx` | Featured + ver mais |
| `src/components/CallToAction.tsx` | Software/site/suporte; WhatsApp; processo |
| `src/components/SectionHeading.tsx` | `scroll-mt` |
| `src/components/index.ts` | Exports dos novos componentes |
| `package.json` | website canônico |
| `README.md` | LinkedIn correto |

---

## 6. Ordem final das seções no site

1. Header (logo · nav · WhatsApp)  
2. Hero split (Dev | Nome | Técnico)  
3. Dois trilhos, um profissional  
4. O que eu resolvo (serviços)  
5. **Como funciona** (+ badge disponibilidade)  
6. Trajetória  
7. **Cases**  
8. **Sites publicados** (6 + ver mais)  
9. **Projetos em destaque** (6 + ver mais)  
10. Ferramentas de trabalho  
11. Formação & certificações  
12. O que dizem os clientes (Freelancer)  
13. **FAQ**  
14. CTA de contato  
15. FAB WhatsApp (mobile)

---

## 7. Dados e configs importantes

### Contato
- E-mail: `cauaalvesbalbino@gmail.com`
- WhatsApp: `(21) 97099-8386` / `5521970998386`
- LinkedIn: slug com **ã** codificado (`cau%C3%A3-alves-...`)
- GitHub: `https://github.com/cauaprjct`
- Freelancer: `https://www.freelancer.com/u/CauaAlves`

### WhatsApp padrão
> Olá Cauã! Vim pelo portfólio e gostaria de conversar sobre um projeto.

Função: `whatsappUrl()` em `src/config/data.ts`.

### Disponibilidade
```ts
availability.open = true  // false = “Agenda cheia no momento”
```

### Featured
Campos `featured` e `order` em `projects` e `clientSites`.  
Helper: `sortByFeaturedOrder()`.

---

## 8. Deploys

Todos via **Vercel CLI** (`vercel --prod --yes`) no projeto `portifolio-caua`.

Alias de produção: **https://portifolio-caua.vercel.app**

Ciclos de deploy incluíram, entre outros:
- Oferta de sites + CTA  
- Fix hero mobile  
- Seção client sites  
- Copy SuporTI  
- LinkedIn  
- Fases 0–3, 5 e 6  

---

## 9. O que NÃO foi feito (e por quê)

| Item | Motivo |
|------|--------|
| Foto de rosto | Preferência do autor |
| Screenshots dos projetos/sites | Preferência do autor |
| Domínio customizado | Adiado |
| Depoimentos locais inventados | Recusado (credibilidade) |
| Preços fixos no FAQ | Combinados na proposta, não expostos |
| WordPress/Wix | Fora do posicionamento (stack moderna sob medida) |

---

## 10. Como manter daqui pra frente

| Tarefa | Onde |
|--------|------|
| Novo site de cliente | `clientSites` em `data.ts` (+ `featured`/`order`) |
| Novo case | `cases` em `data.ts` |
| Novo projeto | `projects` em `data.ts` |
| Agenda cheia | `availability.open = false` |
| Trocar texto WhatsApp | `whatsappPrefill` |
| Atualizar inventário textual | `docs/CONTEUDO-DO-SITE.md` |
| Smoke de links | `node scripts/smoke-links.mjs` |
| Deploy | `vercel --prod --yes` |

---

## 11. Critérios de sucesso do ciclo

| Critério | Status |
|----------|--------|
| Sites sob medida na oferta de software | ✅ |
| Mobile sem nome cobrindo conteúdo | ✅ |
| Sites de clientes no ar listados | ✅ |
| Nav + WhatsApp com mensagem pronta | ✅ |
| Listas seletivas (destaques) | ✅ |
| Cases com narrativa | ✅ |
| Processo + FAQ | ✅ |
| SEO/URL canônica corretos | ✅ |
| LinkedIn funcional | ✅ |
| Docs de conteúdo + plano + histórico | ✅ |
| Depoimentos locais | ⏸ Pendente (Fase 4) |

---

## 12. Índice da pasta `docs/`

| Arquivo | Conteúdo |
|---------|----------|
| **HISTORICO-COMPLETO.md** | Tudo o que foi feito (este arquivo) |
| **PLANO-EXECUCAO.md** | Fases 0–6, tarefas, decisões, status |
| **CONTEUDO-DO-SITE.md** | Inventário do texto/dados publicados no site |

---

*Documento gerado ao final do ciclo de melhorias (2026-07-09). Use-o como registro de mudanças e onboarding futuro no repositório.*
