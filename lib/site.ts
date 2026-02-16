// lib/site.ts
export type NavItem = { label: string; href: string };

export const site = {
  name: 'Alius Cloud',
  tagline: 'Dados & Automações na Nuvem',
  description:
    'Projetamos soluções em dados e automação para dar previsibilidade, eficiência e escala ao seu negócio.',
  nav: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'Cases', href: '/cases' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ] satisfies NavItem[],
  contact: {
    email: 'AQUI_SEU_EMAIL@dominio.com',
    whatsapp: 'AQUI_SEU_WHATSAPP',
  },
};

export const services = [
  {
    title: 'Pipelines & ELT',
    description:
      'Ingestão, transformação e orquestração com qualidade, rastreabilidade e custo eficiente.',
    bullets: ['Modelagem (camadas)', 'Jobs agendados', 'Monitoramento & alertas'],
  },
  {
    title: 'Analytics & BI',
    description: 'Dashboards e métricas com governança para decisões rápidas e confiáveis.',
    bullets: ['Camada semântica', 'KPIs e métricas', 'Documentação e catálogo'],
  },
  {
    title: 'Automações',
    description:
      'Automatize rotinas e integrações para reduzir trabalho manual e riscos operacionais.',
    bullets: ['Integrações', 'Bots e rotinas', 'Workflows e validações'],
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
