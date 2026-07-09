# Plano de execução — Portfólio Cauã Alves

Plano em fases para evoluir o portfólio **sem** foto de rosto, **sem** screenshots e **sem** domínio próprio (fora de escopo por decisão).

| Campo | Valor |
|--------|--------|
| **Site** | https://portifolio-caua.vercel.app |
| **Repo de conteúdo** | `src/config/data.ts` + componentes em `src/components/` |
| **Fora de escopo** | Foto de rosto · Prints/previews · Domínio customizado |
| **Status** | **Plano encerrado** (2026-07-09) · Fases 0–3, 5–6 ✅ · Fase 4 adiada |

---

## Objetivos

1. Facilitar navegação e conversão (WhatsApp / e-mail).  
2. Aumentar credibilidade com cases e depoimentos locais.  
3. Reduzir ruído: menos cards, mais clareza.  
4. Corrigir detalhes técnicos e de copy.  
5. Deixar o processo de contratação óbvio.

---

## Visão das fases

| Fase | Nome | Foco | Esforço | Impacto |
|------|------|------|---------|---------|
| **0** | Correções rápidas | Bugs/copy/SEO técnico | ✅ | Médio |
| **1** | Navegação & conversão | Header, âncoras, CTA | ✅ | Alto |
| **2** | Enxugar conteúdo | Menos cards, hierarquia | ✅ | Alto |
| **3** | Cases & resultados | Freelas top + outcomes | ✅ | Alto |
| **4** | Prova social local | Depoimentos de sites RJ | ⏸ Adiada | Alto |
| **5** | Processo & confiança | Como trabalho / FAQ / disponibilidade | ✅ | Médio–alto |
| **6** | Polish final | Revisão, docs, deploy | ✅ | Médio |

\*Fase 4 depende de você conseguir 1–3 depoimentos reais (texto/WhatsApp ok).

---

## Fase 0 — Correções rápidas ✅

**Objetivo:** limpar inconsistências sem mudar estrutura.  
**Concluída em:** 2026-07-09

### Tarefas
- [x] Reforçar espaços no subtítulo do hero (`Desenvolvedor & Técnico`) + `aria-label`.
- [x] Centralizar URL canônica em `src/config/site.ts` e usar em metadata / robots / sitemap.
- [x] Corrigir fallback antigo `caua-devtech.vercel.app` → `portifolio-caua.vercel.app`.
- [x] Alinhar Open Graph tagline e `package.json` author.website.
- [x] Smoke test de links (`scripts/smoke-links.mjs`).
- [x] Atualizar este plano.

### Critério de pronto
- Nenhuma copy “quebrada” visível no hero.  
- SEO metadata aponta para o host correto.  
- Deploy em produção ok.

### Arquivos
- `src/config/site.ts` (novo)
- `src/config/metadata.ts`
- `src/app/robots.ts` / `src/app/sitemap.ts`
- `src/components/HeroSplit.tsx`
- `src/app/opengraph-image.tsx`
- `package.json`
- `scripts/smoke-links.mjs`

---

## Fase 1 — Navegação e conversão ✅

**Objetivo:** página longa ficar usável; caminho até o WhatsApp mais curto.  
**Concluída em:** 2026-07-09

### Tarefas
- [x] Header com âncoras: Serviços, Sites, Projetos, Depoimentos, Contato + WhatsApp.
- [x] Ids estáveis (já existiam; `scroll-padding` + `scroll-mt` no header fixo).
- [x] Mobile: menu hamburger com os mesmos links.
- [x] FAB WhatsApp no mobile (`WhatsAppFab`).
- [x] Mensagem pré-preenchida via `whatsappUrl()` / `whatsappPrefill` no data.
- [x] CTA final e redes sociais alinhados ao mesmo link de WhatsApp.

### Critério de pronto
- Em mobile e desktop, dá para pular de seção sem scroll cego.  
- WhatsApp continua sendo o CTA principal e óbvio.

### Arquivos
- `src/config/data.ts` (`navLinks`, `whatsappUrl`, `whatsappPrefill`)
- `src/components/Header.tsx`
- `src/components/WhatsAppFab.tsx`
- `src/components/CallToAction.tsx`
- `src/components/SectionHeading.tsx`
- `src/app/layout.tsx` / `src/app/globals.css`

---

## Fase 2 — Enxugar conteúdo ✅

**Objetivo:** menos lista, mais hierarquia; o visitante vê o melhor primeiro.  
**Concluída em:** 2026-07-09

### Tarefas
- [x] Sites: 6 destaques + “Ver mais N sites” (resto colapsado).
  - Destaques: SuporTI Cell, Ferragens Shalon, Velucci’s, Rock e Barba, Márcio Roberto, Medstar.
- [x] Projetos: 6 destaques + “Ver mais N projetos”.
  - Destaques: Painel Claro, Power BI Telephony, Azure Pipeline, AutoRPA, RAG B3, Social Down.
- [x] Data model: `featured` + `order` + helper `sortByFeaturedOrder`.
- [x] Intros das seções atualizadas.
- [x] Botão reutilizável `ShowMoreButton`.

### Critério de pronto
- Seções de sites e projetos cabem em 1–2 telas desktop cada (sem parecer catálogo infinito).  
- Ainda existe caminho para ver o restante, se mantido.

### Arquivos
- `src/config/data.ts`
- `src/components/ClientSites.tsx`
- `src/components/Projects.tsx`
- `src/components/ShowMoreButton.tsx`

---

## Fase 3 — Cases e resultados ✅

**Objetivo:** transformar freelas e entregas fortes em narrativa de resultado (texto, sem prints).  
**Concluída em:** 2026-07-09

### Tarefas
- [x] Modelo `CaseStudy` + `cases[]` (problema → solução → resultados → stack → link).
- [x] 3 cases:
  1. Power BI Telephony (UK, 47 colaboradores + depoimento James P.)  
  2. Azure Power BI Data Pipeline (24/7 serverless)  
  3. SuporTI Cell (loja única + WhatsApp + site no ar)
- [x] Seção própria **Cases** (não misturada com grid de projetos).
- [x] Só outcomes já documentados no portfólio / Freelancer — sem métrica inventada.
- [x] Link **Cases** no header (`#cases`).

### Critério de pronto
- Visitante entende em 10s o valor de pelo menos 2 trabalhos “pesados”.  
- Nenhuma métrica inventada.

### Arquivos
- `src/config/data.ts` (`cases`, `navLinks`)
- `src/components/Cases.tsx`
- `src/app/page.tsx`

### Dependência
- ~~Você valida/fornece outcomes reais~~ — usados apenas facts já no site/depoimentos. Revisar se quiser afinar números.

---

## Fase 4 — Prova social local

**Objetivo:** equilibrar depoimentos Freelancer (internacional) com clientes de **sites / suporte no RJ**.

### Tarefas
- [ ] Coletar 1–3 depoimentos curtos de clientes locais (WhatsApp/áudio → texto ok).
  - Ideais: SuporTI, salão/barbearia, loja, fotógrafo, etc.
- [ ] Estrutura no data: nome, negócio, tipo de serviço (site / suporte), citação, opcional link do site.
- [ ] UI: manter seção única de depoimentos com **filtros ou badges** (“Freelancer” / “Site local”) *ou* dois blocos leves.
- [ ] Se ainda não houver depoimento local, **não inventar** — pular fase ou placeholder interno “aguardando”.

### Critério de pronto
- Pelo menos 1 depoimento local real no ar, **ou** decisão documentada de adiar.

### Arquivos prováveis
- `src/config/data.ts` (`testimonials`)
- `src/components/Testimonials.tsx`

### Dependência (bloqueante)
- Conteúdo real do cliente. Sem isso a fase não fecha.

---

## Fase 5 — Processo e confiança ✅

**Objetivo:** reduzir fricção (“e agora, como te contrato?”).  
**Concluída em:** 2026-07-09

### Tarefas
- [x] Seção **Como funciona** com 5 passos.
- [x] Três trilhos curtos: site/web · dados & automação · suporte técnico.
- [x] Badge **Disponível para novos projetos** (`availability.open` em data.ts).
- [x] FAQ com 6 perguntas (WordPress, RJ, prazo, pagamento, escopo, como começar).
- [x] Nav: Como funciona + FAQ; CTA final alinhado ao processo.

### Critério de pronto
- Visitante entende o fluxo sem precisar perguntar o básico.  
- Posicionamento anti-WordPress/Wix continua claro.

### Arquivos
- `src/config/data.ts` (`availability`, `processSteps`, `processTracks`, `faqItems`)
- `src/components/Process.tsx`
- `src/components/FAQ.tsx`
- `src/app/page.tsx`
- `src/components/CallToAction.tsx`

### Nota
Para marcar agenda cheia: `availability.open = false` em `data.ts`.

---

## Fase 6 — Polish final ✅

**Objetivo:** fechar qualidade e documentação.  
**Concluída em:** 2026-07-09

### Tarefas
- [x] Releitura de copy (CTA alinhado ao processo; intro de Cases mais limpa).
- [x] Nav desktop só em `lg+` (tablet usa hamburger — menos aperto).
- [x] `docs/CONTEUDO-DO-SITE.md` atualizado (processo, FAQ, cases, ordem das seções).
- [x] Plano marcado com status final por fase.
- [x] Deploy produção + smoke de links.

### Critério de pronto
- Fases 0–3, 5–6 concluídas; Fase 4 adiada com nota.  
- Produção estável.

---

## Ordem final na página

1. Header · 2. Hero · 3. Dois trilhos · 4. Serviços · 5. Como funciona · 6. Trajetória · 7. Cases · 8. Sites · 9. Projetos · 10. Skills · 11. Certs · 12. Depoimentos · 13. FAQ · 14. CTA  

---

## Decisões fechadas

| Tema | Decisão |
|------|----------|
| Sites não-destaque | Colapsados em “Ver mais” |
| Cases | Seção própria (3 cases) |
| FAQ com preço fixo | Não — combinado na proposta |
| Depoimentos locais | Fase 4 adiada (sem inventar) |
| Mensagem WhatsApp | “Vim pelo portfólio…” |
| Foto / prints / domínio | Fora de escopo |

---

## Definição de sucesso

| Critério | Status |
|----------|--------|
| Navegação clara mobile e desktop | ✅ |
| Sites/projetos seletivos (destaques + ver mais) | ✅ |
| ≥2 cases problema → solução → resultado | ✅ (3) |
| Prova social Freelancer | ✅ |
| Prova social local | ⏸ Fase 4 |
| Processo + FAQ | ✅ |
| Docs e produção alinhados | ✅ |
| Sem foto / prints / domínio custom | ✅ |

---

## Próximos opcionais (fora deste plano)

- Fase 4: depoimentos locais reais  
- Domínio próprio  
- Screenshots (se mudar de ideia)  
- Afinar copy/prazos no FAQ com números seus
