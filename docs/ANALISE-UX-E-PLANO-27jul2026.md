# Análise de UX/design do portfólio + plano de ação

**Data:** 27/jul/2026
**Alvo:** https://portifolio-caua.vercel.app/ (`src/app/page.tsx` + `src/config/data.ts`)
**Método:** crítica com duas avaliações independentes — (A) review de design e (B) detector determinístico + medição no navegador.
**Nota geral:** **23/40** (faixa "aceitável, precisa de trabalho").
**Snapshot completo:** `.impeccable/critique/2026-07-27T12-18-46Z__meu-portfolio-devtech-2026-src-app-page-tsx.md` (na raiz do workspace, não neste repo).

> **Status: NADA foi alterado no código.** Este documento é só o diagnóstico + o que fazer.

---

## 1. Resumo em 30 segundos

A queixa era "a página é muito grande". Está grande mesmo, mas **a causa não é o comprimento** — e isso muda o remédio.

- **65,6% da altura no desktop (70,4% no celular) é a mesma textura:** 39 cards com a mesma string de classe, em sete seções seguidas.
- **Zero imagens no documento inteiro** (0 `<img>`, 176 SVGs). Vendemos sites, temos doze publicados, e nenhum aparece como imagem — os doze são parágrafos de texto.
- O que o comprador procura (prazo, região, preço) está no **FAQ, a 91% de profundidade**.
- **O celular NÃO está com layout quebrado** (zero overflow horizontal em 390/768/1440). O problema no mobile é **ergonomia**: CTA sem rótulo, alvos pequenos, cards não clicáveis.

**Conclusão:** só colapsar seções deixa a página mais curta e igualmente monótona. O ganho está em **cortar duplicação + dar imagem ao que é visual + subir o que converte**.

---

## 2. Números medidos

| Viewport | scrollHeight | Telas | Palavras | Seções |
|---|---|---|---|---|
| 1440x900 | 12.891px (13.881 expandido) | 14,3 | 2.550 | 13 |
| 768x1024 | 14.946px | 14,6 | — | 13 |
| 390x844 | **22.007px** (24.360 expandido) | **26,1** | — | 13 |

Altura por seção (desktop · celular):

| # | Seção | Desktop | Celular | Palavras | Itens |
|---|---|---|---|---|---|
| 1 | Hero | 900 | 905 | 128 | 2 trilhos, 10 chips, 4 sociais, **0 botões** |
| 2 | Dois trilhos | 312 | 610 | 61 | 2 cards |
| 3 | O que eu resolvo | 744 | 1.562 | 199 | 8 cards |
| 4 | Como funciona | 700 | 1.603 | 184 | 5 passos + 3 cards |
| 5 | Trajetória | 752 | 1.269 | 170 | 2 cards, 9 bullets |
| 6 | **Cases** | **2.667** | **4.911** | **753** | 5 cases, 18 bullets, 21 tags |
| 7 | Sites p/ clientes | 1.289 | 2.501 | 295 | 7 de 12 |
| 8 | Projetos | 878 | 1.823 | 201 | 6 de 9 |
| 9 | Ferramentas | 492 | 986 | 67 | **37 chips** |
| 10 | Formação | 526 | 1.202 | 97 | 3 cards, 11 itens |
| 11 | Depoimentos | 1.092 | 2.222 | 239 | 4 chips + 8 cards |
| 12 | FAQ | 538 | 634 | 90 | 6 itens |
| 13 | Contato | 499 | 628 | 55 | 2 botões |

**O número que importa:** seções 5–11 (Trajetória → Depoimentos) = **8.462px seguidos** de uma textura só (65,6% do desktop). No celular, ~18 telas consecutivas. **Cases** sozinha é 29,5% de todas as palavras.

Outros fatos medidos:
- 65 controles interativos, **60 abrem em nova aba** (47 com `target=_blank`, todos com `rel=noopener` — isso está correto).
- Peso: 17 requisições, 392,6 KB transferidos, DCL 1.088ms. **Performance não é problema.**
- 66 aplicações do mesmo `Reveal` (fade-up 22px) — uma ideia de movimento, repetida.

---

## 3. Parece feito por IA?

**No topo, não. Abaixo da dobra, sim.**

O hero é uma ideia real: `clip-path` diagonal de 8,13°, o `--seam` luminoso, o h1 sentado na falha, hover escurecendo a metade oposta, e dois terminais espelhados com gramática paralela (`→ dashboard atualizado / ✓ tudo rodando sozinho` contra `→ cache liberado / ✓ celular rápido de novo`). Isso nenhuma IA gera por reflexo.

De y=1.012 pra baixo: 22 eyebrows em mono uppercase com tracking, 86 chips mono, muro de 37 logos, 39 cards idênticos.

| Anti-padrão | Veredito | Evidência |
|---|---|---|
| Eyebrows minúsculos em caps acima de cada seção | **VIOLADO** | 22 ocorrências, 11–12px, tracking 0,16–0,2em |
| Grids de cards idênticos | **VIOLADO (grave)** | 39 cards, 1 classe, 7 seções seguidas |
| Side-stripe border | **VIOLADO (leve)** | Listra de 4px no `WorkExperience` |
| Mono como atalho de "técnico" | **VIOLADO** | 104 nós mono; decorativo em 86 chips e 22 eyebrows |
| Template hero-metric | **DESLOCADO** | 4 chips de estatística em cima dos Depoimentos |
| Marcadores numerados 01/02/03 | LIMÍTROFE | Processo 01–05 carrega sequência real (uso defensável) |
| Gradient text | LIMPO | 0 `background-clip: text` |
| Glassmorphism como padrão | LIMPO | 6 `backdrop-filter`, todos justificados |

### Detectores
- **CLI sobre `src`:** `[]`, exit 0. **Limpo de verdade** — validado com arquivo de controle que produziu achados conhecidos.
- **Detector na página:** 62 achados, **53 são falso-positivo** (reporta "1.0:1 branco no branco" porque o Tailwind v4 serializa cor como `lab()`/`oklab()` e o parser de `rgb()` cai pro branco). Reais: 3 de linha longa (até 115 caracteres), 3 de ícone-em-tile (cards de certificação), 2 de borda fina + sombra larga (terminais do hero).

### Contraste (medido de verdade, sRGB resolvido com alfa composto)
68 pares distintos, **4 falhando**:

| Texto | Fundo | Tamanho/peso | Razão | Exigido | Ocorrências |
|---|---|---|---|---|---|
| white/40 | rgb(17,18,21) | 12px/600 | **3,83** | 4,5 | 15 (rótulos "Problema/Solução/Resultado") |
| white/25 | rgb(17,18,21) | 12px/400 | **2,23** | 4,5 | 7 (separadores "·") |
| white/40 | rgb(4,4,5) | 11px/400 | **3,70** | 4,5 | 1 (rodapé) |
| white/40 | rgb(17,18,21) | 12px/400 | **3,83** | 4,5 | 1 (linha de localização) |

Corpo de texto está ótimo: white/60 = 7,27:1, white/70 = 9,63:1, títulos = 18,77:1.

### Foco
Existem 4 regras `focus-visible` no CSS servido, mas **zero elementos as usam**. O foco cai no anel do navegador, medido como `outline: auto 1px rgb(16,16,16)` sobre fundo quase preto — praticamente invisível. Não há skip link.

---

## 4. O que está bom (não mexer)

1. **O seam do hero.** O argumento "duas frentes, uma pessoa" é feito pela estrutura, não pelo texto. É o melhor ativo do site.
2. **O sistema de cor dev/tech.** Dois tokens semânticos com lightness quase igual em oklch, aplicados nas 13 seções, então nenhum trilho domina. Quem lê só a cor já entende o posicionamento.
3. **A voz do FAQ e do Processo.** "se não for pra mim, falo na boa" · "Não. Se você precisa de construtor de template, não sou a pessoa". Recusar trabalho no próprio FAQ é confiança que template nenhum tem. **Essa é a voz que o resto da página deveria ter.**
4. `scroll-padding-top` + `scroll-mt-24` corretos; `prefers-reduced-motion` tratado em Reveal/HeroSplit/Header; Archivo + JetBrains Mono é pareamento defensável, não o default Inter/Space Grotesk.

---

## 5. O QUE TEM QUE SER FEITO

### P0 — conversão (barato, impacto direto)

**P0.1 — Botão de conversão na primeira tela.**
O hero tem 900px e **nenhum botão**: as únicas ações são 4 ícones sociais de 20x20. O primeiro botão de WhatsApp com texto aparece em y≈3.024 desktop / y≈4.700 celular.
- Botão primário rotulado no hero. No celular: dentro da faixa do nome, largura cheia, `min-height: 48px`.
- Arquivos: `src/components/HeroSplit.tsx`.

**P0.2 — CTA do header sem rótulo no celular.**
`hidden sm:inline` esconde o texto abaixo de 640px, então o CTA principal é um **ícone de 42x30 sem rótulo**.
- Remover o `hidden sm:inline` (encurtar para "WhatsApp" se faltar espaço).
- Arquivos: `src/components/Header.tsx`.

**P0.3 — Mensagem de WhatsApp por contexto.**
Os 6 pontos de entrada usam o mesmo `whatsappPrefill` genérico, então a mensagem não carrega intenção nenhuma. O helper `whatsappUrl(message)` **já aceita argumento e ninguém usa**.
- Mensagem específica por origem (hero, serviço X, card de site, FAQ, CTA final).
- Arquivos: `src/config/data.ts`, componentes que chamam `whatsappUrl()`.

**P0.4 — Ergonomia de toque no celular.**
- 20 controles abaixo do piso AA de 24x24 (ícones 16x16, sociais 20x20, "Ver site" 60x16); 45 de 54 abaixo dos 44x44 de AAA.
- **Os cards de site não são links:** mostram borda no hover mas o alvo real é um texto de 60x16, com ícone duplicado de 34x34 uns 300px longe apontando pro mesmo destino.
- O FAB de 56x56 cobre conteúdo do hero no load e pinta **acima** do menu aberto (ambos `z-40`).
- Fazer: card inteiro virar um `<a>` (ou `::after` inset como área de toque), apagar o ícone duplicado, mínimo 44px em tudo, padding nos sociais até 44x44 mantendo o ícone em 20px, esconder o FAB com o menu aberto.
- Arquivos: `src/components/ClientSites.tsx`, `Projects.tsx`, `HeroSplit.tsx`, `WhatsAppFab.tsx`, `Header.tsx`.

### P1 — o encurtamento (responde a queixa de tamanho)

**P1.1 — De 13 para 8 seções.** Meta: **~1.600 palavras, ~7.500px desktop / ~13.000px celular**.

| Ação | Seção | Por quê |
|---|---|---|
| Fundir no hero | "Dois trilhos, um profissional" (312px) | Só repete, em forma mais fraca, o que a diagonal já disse |
| Fundir 3 em 2 | Cases + Sites + Projetos | Três seções quase iguais; o visitante tem que segurar a diferença |
| Matar | "Ferramentas de trabalho" (37 chips) | Muro de logos; jogar as 6 que importam nos cards de trilho |
| Enxugar | Formação (11 itens) | Ver P3.1 |
| **Subir** | **FAQ** | É o texto mais persuasivo do site e está a 91% de profundidade |
| Enxugar | Depoimentos (8 → 3–4) | Ver P1.4 |

**P1.2 — Screenshots dos 12 sites de cliente.** ⚠️ *maior impacto do plano*
Doze sites cujo valor é 100% visual apresentados como parágrafos. Reconstruir "Sites publicados para clientes" como **grade de screenshots** com nome + segmento sobrepostos. A seção passa a justificar seus pixels e encolhe de 2.501 para ~1.200px no celular.
- Duas opções: (a) eu capturo cada site no navegador e salvo em `public/`, ou (b) serviço de screenshot em build time. **Decisão pendente.**
- Arquivos: `src/components/ClientSites.tsx`, `public/`.

**P1.3 — Cases: cortar e reordenar.**
- Cases é 29,5% de todas as palavras. Cortar cada case para **problema / o que construí / um número**, com o detalhe atrás de disclosure (`ShowMoreButton` já existe).
- **Cases 1 e 2 são o mesmo trabalho** (JW Wood, "primeira fase, antes do app"). Fundir num só com uma linha "fase 1 → fase 2". *Nota: o case do Call Pulse foi adicionado em 27/jul; a duplicação nasceu aí.*
- Os mesmos dois trabalhos reaparecem como Projetos #2 e #3 e de novo nos Depoimentos: **dois trabalhos, quatro aparições.**
- **Reordenar:** um case local do Rio (SuporTI Cell ou Boomerang Kids) primeiro. Hoje o primeiro case que um dono de loja em Realengo encontra é BI de telefonia no Reino Unido com "~213 mil registros" e "service principal no Azure".
- Arquivos: `src/config/data.ts` (`cases`, `projects`), `src/components/Cases.tsx`.

**P1.4 — Tirar os preços dos depoimentos.**
O campo `position` publica o valor de cada projeto: £369, £135, $20, £12, £10, £15. Três dos oito são trabalho acadêmico de £10–£15. Quem avalia um site de R$ 3–5 mil vê trabalho de £10 do lado das cinco estrelas — isso ancora o preço pra baixo e embaça o posicionamento.
- Remover os valores entre parênteses; manter 3–4 depoimentos que casem com o que se vende (James P. ×1, Mariano S., Maria O.); tirar os acadêmicos da página.
- Trocar o chip **"+US$ 3.7K em projetos"** (não confere: as 9 avaliações públicas somam ~US$ 1,3K) por algo verificável, ex.: "Projetos no Brasil, UK e Portugal".
- Arquivos: `src/config/data.ts` (`testimonials`), `src/components/Testimonials.tsx`.

### P2 — qualidade

**P2.1 — Hierarquia tipográfica.**
No celular o **h1 renderiza 24px e os 14 h2 renderizam 30px** — o nome fica visualmente subordinado aos rótulos de seção. A ordem do DOM também começa por um h2 ("Escrevo o software") **antes** do h1.
- h1 ≥34px no mobile; h1 antes dos títulos de trilho no DOM; escalonar seções secundárias para 20–24px em peso menor.
- Arquivos: `src/components/HeroSplit.tsx`, `SectionHeading.tsx`.

**P2.2 — 67 blocos do SSR sobem invisíveis.**
O HTML de 202KB traz **67 `opacity:0` inline** (+67 transforms) do `Reveal`, e **não há `<noscript>`**. Qualquer falha de JS ou erro de hidratação deixa tudo abaixo do hero em branco.
- Renderizar com `opacity: 1` e animar depois do mount (flag `mounted` ou classe `.js` no `<html>`). O `prefers-reduced-motion` já está certo, é só inverter o default.
- Arquivos: `src/components/Reveal.tsx`.

**P2.3 — Acessibilidade.**
- Um anel global de `focus-visible` no ciano dev (hoje: 0 elementos usando as regras que existem).
- Skip link.
- Focus trap no menu mobile (ele trava o scroll do body mas o Tab sai do painel) + esconder o FAB com o menu aberto.
- Subir os rótulos "Problema/Solução/Resultado" de white/40 para white/60 (3,83 → passa) e os separadores "·" de white/25.
- Arquivos: `src/app/globals.css`, `src/components/Header.tsx`, `Cases.tsx`, `src/app/layout.tsx`.

**P2.4 — Uma ideia de movimento em 66 lugares.**
O mesmo fade-up 22px em tudo. Diferenciar por seção (stagger em lista, entrada distinta no hero) ou reduzir onde não agrega.
- Arquivos: `src/components/Reveal.tsx` e chamadores.

### P3 — polimento

**P3.1 — Erro visível nas certificações.** "Estratégia de Negócios · Gestão" está renderizando **dentro do card "IA — Anthropic (Claude)"**, cujos outros 4 itens são cursos introdutórios da Anthropic. "Microsoft Excel 2016" está sob "Desenvolvimento & Dados". Cortar os introdutórios, mover Excel e Estratégia, manter "Academia do Hardware · 200h" — a credencial que faz trabalho de verdade. (`src/config/data.ts`)

**P3.2 — Terminais do hero são `hidden lg:block`.** O elemento mais distintivo do site nunca chega ao público mobile. Considerar uma versão reduzida (um terminal, alternando).

**P3.3 — Painel do trilho tech mantém `text-right` no celular.** Sem a diagonal, prosa alinhada à direita ao lado de prosa alinhada à esquerda lê como erro, não como espelho.

**P3.4 — Nome do cliente duplicado nos cards de site.** `name` e `client` são idênticos em 12 de 12 entradas, então imprime duas vezes.

**P3.5 — `availability.open` é booleano manual.** Um `true` velho no badge pulsante "Disponível" é pior que não ter badge.

**P3.6 — Sem structured data de FAQPage** apesar de 6 Q&As reais. SEO local de graça sendo deixado na mesa numa página cujo trabalho é descoberta local.

**P3.7 — Sem indicador de progresso nem seção ativa** no menu de 7 links, numa página de 26 telas. "Ver mais" adiciona ~1.000px sem ancorar o scroll.

**P3.8 — Os terminais inventam números** ("cache liberado: 4.2 GB", "apps em segundo plano: 0"). É o único lugar onde a página afirma um dado que não sustenta.

---

## 6. Personas — o que quebra pra cada um

**Jordan — dono de loja em Realengo, não técnico.** O hero pede que ele se classifique entre "Escrevo o software" e "E cuido da máquina", **sem botão pra apertar**, e nenhum dos títulos contém a palavra "site". "Dois trilhos" é metáfora interna. O primeiro case é BI de telefonia no Reino Unido. As duas respostas que ele quer (prazo de um site institucional, se atende fora do Rio) estão em y=20.649 no celular. **Não há preço nem "a partir de" em 22.000px.**

**Casey — celular, uma mão, distraído.** 26,1 telas; Cases sozinha são 5,8. Toca no card da Boomerang Kids e nada acontece. Abre o menu e vê 3 afordâncias de WhatsApp ao mesmo tempo, porque o FAB fica na frente do painel. O CTA do header é um ícone sem rótulo.

**Riley — testador.** Bloqueia JS: tudo abaixo do hero fica invisível. Navega por Tab: contorno escuro sobre fundo escuro, sem skip link, e o Tab sai do menu aberto. Audita: mesmo cliente vendido como dois cases, dois trabalhos em quatro lugares. Lê Formação: "Estratégia de Negócios" sob Anthropic. Lê Depoimentos: projeto de £10 como prova social ao lado de "+US$ 3.7K".

---

## 7. Ordem sugerida de execução

1. **P0 completo** (CTA no hero, rótulo do header, mensagens por contexto, alvos de toque). Barato, mexe na conversão, não depende de decisão de conteúdo.
2. **P1.4** (tirar preços dos depoimentos) — uma linha de dado, ganho imediato de posicionamento.
3. **P1.3** (cortar/reordenar cases, desduplicar JW Wood).
4. **P1.2** (screenshots) — depende da decisão de como capturar.
5. **P1.1** (fundir seções, subir o FAQ) — o corte estrutural, depois que 1.2/1.3 definirem o conteúdo.
6. **P2** (hierarquia, `Reveal` sem `opacity:0` no SSR, acessibilidade, movimento).
7. **P3** (polimento, incluindo o erro das certificações).

Depois de cada bloco: `next build` (o build da Vercel é o typecheck autoritativo) e verificar no site ao vivo, não só no output do CLI.

---

## 8. Decisões pendentes (do Cauã)

- [ ] Atacar os P0 primeiro, ou já ir no corte estrutural junto?
- [ ] Confirma o corte de 13 → 8 seções, com o FAQ subindo pra antes dos trabalhos?
- [ ] Screenshots dos 12 sites: eu capturo no navegador e salvo em `public/`, ou serviço em build time?
- [ ] Confirma remover os valores (£369, £135, £10…) dos depoimentos e tirar os 3 trabalhos acadêmicos da página?
- [ ] O chip "+US$ 3.7K em projetos": trocar por claim verificável, ou você tem faturamento fora das avaliações públicas que sustenta o número?
- [ ] Manter a review arquivada de $115 (cliente inativo, projeto arquivado) fora do site, ou adicionar?

---

## 9. Execução — 27/jul/2026

O plano acima foi executado inteiro, exceto o que dependia de dado que eu não tenho (ver "ficou de fora").

### Estrutura: 13 → 8 seções

| # | Seção | Âncora | O que mudou |
|---|---|---|---|
| 1 | Hero | `#top` | Ganhou CTA rotulado, o argumento do "dois trilhos" e um terminal no celular |
| 2 | O que eu resolvo | `#servicos` | Cada card virou link de WhatsApp com a mensagem do serviço; as 6 ferramentas de cada trilho entraram aqui |
| 3 | Como funciona | `#como-funciona` | Passos em linha no celular (era card empilhado), selo de disponibilidade que expira |
| 4 | Antes de me chamar (FAQ) | `#faq` | **Subiu de 91% para antes dos trabalhos**; prazo e região são as duas primeiras perguntas |
| 5 | Sites que estão no ar | `#sites-clientes` | **Grade de screenshots** dos 12 sites; card inteiro clicável |
| 6 | Cases e projetos | `#trabalhos` | Cases + Projetos fundidos; 5 cases → 4; detalhe atrás de `<details>` |
| 7 | Trajetória & formação | `#trajetoria` | Trajetória + Certificações fundidas |
| 8 | Contato | `#contato` | Ganhou os 3 depoimentos que sobraram |

Morreram como seção: "Dois trilhos, um profissional", "Ferramentas de trabalho" (o muro de 37 chips), "Projetos", "Formação", "Depoimentos".

### P0 — conversão
- **P0.1** CTA "Pedir orçamento no WhatsApp" no hero: no celular dentro da faixa do nome, largura cheia, 48px; no desktop na costura, acima dos sociais.
- **P0.2** Rótulo "Fale comigo" sempre visível no header (o `hidden sm:inline` saiu), botão com 44px de altura.
- **P0.3** `whatsappMessages` em `data.ts`: mensagem própria para hero, header, FAB, processo, FAQ, contato, **cada serviço**, **cada site** e **cada case**. O `whatsappUrl(message)` finalmente recebe argumento.
- **P0.4** Card de site virou um `<a>` só (o ícone duplicado foi apagado), tudo clicável com no mínimo 44px, sociais com área de 44px e ícone de 20px, e o FAB agora só aparece **depois** do hero e desaparece com o menu aberto.

### P1 — encurtamento
- **P1.2** 12 screenshots em `public/sites/*.jpg` (1280×800, ~1 MB no total), servidos por `next/image`. Captura feita no navegador; se um cliente mudar o site, é recapturar o arquivo.
- **P1.3** Os dois cases de JW Wood viraram um só ("fase 1 → fase 2"). Os cases locais do Rio (Boomerang Kids e SuporTI Cell) vêm **primeiro** — antes era BI de telefonia no Reino Unido. Cada case mostra problema / o que eu fiz / **um** resultado; o resto abre no `<details>`. Os projetos "Power BI Telephony" e "Azure Pipeline" saíram da lista de projetos: já são cases.
- **P1.4** Nenhum valor (£369, £135, £10…) nos depoimentos. Ficaram 3: James P., Mariano S. e Maria O. O chip "+US$ 3.7K em projetos" virou "Brasil, UK e Portugal".

### P2 — qualidade
- **P2.1** h1 de 36px no celular (era 24px) contra h2 de 24px; os títulos dos trilhos do hero deixaram de ser `<h2>`, então o h1 é o primeiro título do documento.
- **P2.2** `Reveal` virou **server component**: o HTML sai visível, sem um único `opacity:0` inline. A animação é CSS, ligada por um script inline que adiciona `.js` no `<html>` e observa `[data-reveal]` — fora do React, então nem JS desligado nem falha de hidratação apagam a página. Um `MutationObserver` cobre o conteúdo do "Ver mais". Isso também tirou 66 componentes de framer-motion do bundle.
- **P2.3** Anel de foco no ciano dev, skip link, foco preso no menu mobile (Tab cicla, Esc volta pro botão) e os rótulos que falhavam contraste subiram para `white/60`.
- **P2.4** Três entradas em vez de uma: `fade` para título de seção, `lift` para item de lista, `up` para bloco.

### P3 — polimento
Certificações corrigidas (Excel e "Estratégia de Negócios" saíram de baixo da Anthropic, os introdutórios de Claude caíram) · terminal reduzido no celular alternando entre os trilhos · o painel tech não fica mais alinhado à direita no celular · nome do cliente não se repete no card · selo "Disponível" expira 45 dias depois de `availability.checkedAt` · JSON-LD de `FAQPage` · barra de progresso e seção ativa no menu · "Ver mais" ancora o scroll ao recolher · o terminal não afirma mais número que não existe ("cache liberado: 4.2 GB" saiu).

### Ficou de fora (precisa de você)

- **Preço / "a partir de".** A persona do Jordan tropeça nisso e continua sem resposta em toda a página. Não inventei faixa: me diz o número e eu coloco no FAQ.
- **Review arquivada de $115.** Continua fora do site, como estava.
- **`availability.checkedAt`** está em `2026-07-27`. Quando isso vencer, o selo some sozinho — atualize a data quando confirmar que segue disponível.
