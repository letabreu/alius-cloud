// lib/site.ts
export type NavItem = { label: string; href: string };

export const site = {
  name: 'Alius Cloud',
  tagline: 'Dados & Automações na Nuvem',
  description:
    'Projetamos soluções em dados e automação para dar previsibilidade, eficiência e escala ao seu negócio.',
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Cases', href: '/cases' },
    { label: 'Conteúdos', href: '/conteudos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ] satisfies NavItem[],

  solutionsMenu: [
    { label: 'Padronização de camadas no Data Lake', href: '/solucoes#data-lake' },
    { label: 'Automação de rotinas operacionais', href: '/solucoes#automacao' },
    { label: 'Painel executivo com KPIs', href: '/solucoes#kpis' },
  ] satisfies NavItem[],

  contact: {
    email: 'contato@aliuscloud.com.br',
    whatsapp: 'AQUI_SEU_WHATSAPP',
  },

  cta: {
    label: 'Falar com a Alius',
    href: '/contato',
  },
};

export const solutions = [
  {
    id: 'data-lake',
    title: 'Padronização de camadas no Data Lake',
    description:
      'Estruturação em camadas (raw/curated) e padrões de qualidade para reduzir retrabalho e aumentar confiabilidade.',
  },
  {
    id: 'automacao',
    title: 'Automação de rotinas operacionais',
    description:
      'Workflows automatizados para diminuir esforço manual, reduzir erros e aumentar previsibilidade do processo.',
  },
  {
    id: 'kpis',
    title: 'Painel executivo com KPIs',
    description:
      'Centralização de indicadores com regras claras e documentação para evitar divergências e acelerar decisões.',
  },
] as const;

export const steps = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos objetivo, dados, processos e restrições.',
  },
  {
    title: 'Implementação',
    description: 'Construímos com boas práticas, testes e revisão de código.',
  },
  {
    title: 'Go-live',
    description: 'Checklist, validação e publicação na janela combinada.',
  },
  {
    title: 'Evolução',
    description: 'Melhorias contínuas com métricas, custo e performance.',
  },
] as const;

export const cases = [
  {
    title: 'Padronização de camadas no Data Lake',
    summary:
      'Estruturação em camadas (raw/curated) e padrões de qualidade para reduzir retrabalho.',
    tags: ['Modelagem', 'Qualidade', 'Governança'],
  },
  {
    title: 'Automação de rotinas operacionais',
    summary:
      'Workflows automatizados para diminuir esforço manual e aumentar confiabilidade do processo.',
    tags: ['Automação', 'Integrações', 'Observabilidade'],
  },
  {
    title: 'Painel executivo com KPIs',
    summary:
      'Centralização de indicadores com regras claras e documentação, evitando divergência de números.',
    tags: ['BI', 'KPIs', 'Camada semântica'],
  },
] as const;
