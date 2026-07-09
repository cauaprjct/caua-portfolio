# Portfólio — Cauã Alves

Portfólio pessoal de **Cauã Alves**, com posicionamento de identidade dupla: **Desenvolvedor & Técnico de Informática**.

O hero divide a tela em dois trilhos:

- **Desenvolvedor** — Dados, BI & Automação (Power BI, Python, Azure, Next.js, IA/LLMs)
- **Técnico de Informática** — Suporte, manutenção, redes e otimização de PCs e Android (base: Academia do Hardware, 200h)

🔗 **Ao vivo:** https://portifolio-caua.vercel.app

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) + React 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/) (respeita `prefers-reduced-motion`)
- Tipografia: Archivo + JetBrains Mono
- Deploy na [Vercel](https://vercel.com/) (projeto `portifolio-caua`)

## Repositório e deploy

| Item | Valor |
|------|--------|
| **GitHub** | https://github.com/cauaprjct/caua-portfolio |
| **Vercel** | projeto `portifolio-caua` — **conectado a este repo** |
| **Branch de produção** | `main` |
| **URL** | https://portifolio-caua.vercel.app |

**Fluxo normal:** commit + `git push origin main` → a Vercel faz o deploy automático.

```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

Deploy manual pela CLI (opcional; não substitui o push no GitHub):

```bash
vercel --prod --yes
```

Detalhes da integração e do que aconteceu neste ciclo: [`docs/HISTORICO-COMPLETO.md`](docs/HISTORICO-COMPLETO.md) (seção 8).

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

Todo o conteúdo (textos, projetos, skills, certificações) fica centralizado em [`src/config/data.ts`](src/config/data.ts).

## Documentação

| Arquivo | O que tem |
|---------|-----------|
| [`docs/HISTORICO-COMPLETO.md`](docs/HISTORICO-COMPLETO.md) | Tudo o que foi feito neste ciclo (timeline, fases, **Vercel ↔ GitHub**, deploys) |
| [`docs/PLANO-EXECUCAO.md`](docs/PLANO-EXECUCAO.md) | Plano em fases 0–6 (status e decisões) |
| [`docs/CONTEUDO-DO-SITE.md`](docs/CONTEUDO-DO-SITE.md) | Inventário do texto e dados publicados no site |

## Contato

- WhatsApp: [(21) 97099-8386](https://wa.me/5521970998386)
- E-mail: cauaalvesbalbino@gmail.com
- GitHub: [@cauaprjct](https://github.com/cauaprjct)
- LinkedIn: [Cauã Alves](https://www.linkedin.com/in/cau%C3%A3-alves-0975a129b/)
