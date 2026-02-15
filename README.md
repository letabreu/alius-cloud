# Alius Cloud — Site Institucional

Site institucional da **Alius Cloud**, desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**.

---

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- ESLint + Prettier
- GitHub Actions (CI)

---

## Requisitos

- Node.js 20+
- pnpm 10+

---

## Rodando localmente

### 1) Instalar dependências

```bash
pnpm install
```

### 2) Rodar em desenvolvimento

```bash
pnpm dev
```

Acesse: http://localhost:3000

### 3) Build de produção

```bash
pnpm build
pnpm start
```

---

## Scripts úteis

### Lint

```bash
pnpm lint
```

### Formatar código

```bash
pnpm format
```

---

## Estrutura do projeto (resumo)

- app/ → páginas e rotas (Next App Router)
- public/ → arquivos estáticos (imagens, ícones)
- lib/ → helpers/utilitários (ex.: utils.ts)
- .github/workflows/ → pipelines do GitHub Actions

---

## Fluxo de branches e PRs

Branches principais:
- main → produção/release
- develop → integração/homologação

Branches de trabalho:
- feature/<nome>
- fix/<nome>
- chore/<nome>

### Como trabalhar

1) Atualize a develop e crie sua branch:

```bash
git checkout develop
git pull
git checkout -b feature/minha-feature
```

2) Faça commits e envie para o GitHub:

```bash
git push -u origin feature/minha-feature
```

3) O GitHub Actions cria automaticamente um PR para develop.

4) Após merge em develop, o fluxo cria (ou deve criar) um PR de release develop → main.

---

## CI (GitHub Actions)

O pipeline CI roda automaticamente em:
- Pull Requests para develop e main
- Push em develop e main

Etapas do CI:
- Instala dependências (pnpm)
- Lint
- Testes (se existirem)
- Build

---

## GMUD (Mudança) — Releases para main

O número da GMUD deve ser preenchido no PR de release develop → main.

Sugestão de padrão:
- GMUD-AAAA-NNNN (ex.: GMUD-2026-0007)

Campos recomendados no PR de release:
- GMUD:
- Janela:
- Plano de rollback:

---

## Deploy (planejado)

O deploy pode ser amarrado a um Environment production no GitHub, exigindo aprovação manual para respeitar a janela de mudança (GMUD).

---

## Licença

Este projeto não possui licença definida.
