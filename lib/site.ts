// lib/site.ts

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon?: string; // opcional: nome do ícone (ex: "Database", "Cloud", etc)
};

export type CaseItem = {
  title: string;
  summary: string;
  tags: string[];
  href?: string; // opcional: link para detalhes/case
};

export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
};

export const site = {
  // Identidade
  name: 'Alius Cloud',
  tagline: 'Dados & Automações na Nuvem',
  description:
    'Consultoria em dados, automação e cloud para transformar operação em eficiência com soluções modernas e escaláveis.',

  // SEO / Social (usado em layout.tsx)
  url: 'https://aliuscloud.com.br', // ajuste quando tiver domínio
  ogImage: '/images/og.png', // coloque em public/images/og.png
  locale: 'pt-BR',

  // Navegação
  nav: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'Cases', href: '/cases' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ] satisfies NavItem[],

  // CTA principal (botão)
  cta: {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5585999999999?text=Oi!%20Quero%20conversar%20sobre%20um%20projeto%20com%20a%20Alius%20Cloud.',
  },

  // Contato
  contact: {
    email: 'contato@aliuscloud.com.br',
    whatsapp: '+55 (85) 99999-9999',
    location: 'Fortaleza, CE (Remoto para todo o Brasil)',
  },

  // Redes
  social: {
    linkedin: 'https://www.linkedin.com/company/alius-cloud',
    instagram: 'https://www.instagram.com/aliuscloud',
    github: 'https://github.com/letabreu/alius-cloud',
  },

  // Home (Hero)
  hero: {
    headline: 'Soluções de dados, automação e cloud para escalar sua operação.',
    subheadline:
      'Criamos pipelines, dashboards e automações com foco em performance, governança e entrega contínua.',
    primaryCta: { label: 'Solicitar diagnóstico', href: '/contato' },
    secondaryCta: { label: 'Ver serviços', href: '/servicos' },
  },

  // Serviços
  services: [
    {
      title: 'Engenharia de Dados',
      description:
        'Pipelines modernos, ingestão e modelagem (ELT/ETL), qualidade e governança para dados confiáveis.',
      icon: 'Database',
    },
    {
      title: 'Analytics & Dashboards',
      description:
        'Camada semântica e painéis claros para decisão rápida, com métricas padronizadas e documentação.',
      icon: 'BarChart3',
    },
    {
      title: 'Automação de Processos',
      description:
        'Automatize rotinas e integrações (APIs, jobs, bots) reduzindo custo operacional e erros manuais.',
      icon: 'Workflow',
    },
    {
      title: 'Cloud & Arquitetura',
      description:
        'Arquitetura escalável, segurança e boas práticas em nuvem (AWS/GCP/Azure) com foco em eficiência.',
      icon: 'Cloud',
    },
  ] satisfies Service[],

  // Cases (pode começar mock e ir melhorando)
  cases: [
    {
      title: 'Pipeline de Vendas + Camada Semântica',
      summary:
        'Padronização de métricas e redução de retrabalho com modelagem e automação de cargas.',
      tags: ['BigQuery', 'dbt', 'Airflow'],
    },
    {
      title: 'Automação de Rotinas Operacionais',
      summary: 'Integrações via API e agendamentos para eliminar tarefas manuais e reduzir falhas.',
      tags: ['Node.js', 'Cloud Functions', 'APIs'],
    },
    {
      title: 'Observabilidade e Qualidade de Dados',
      summary:
        'Regras, alertas e verificações para manter confiabilidade e rastreabilidade do dado.',
      tags: ['Great Expectations', 'CI/CD', 'Data Quality'],
    },
  ] satisfies CaseItem[],

  // Depoimentos (opcional)
  testimonials: [
    {
      name: 'Cliente / Parceiro',
      role: 'Cargo',
      company: 'Empresa',
      quote:
        'A Alius Cloud trouxe previsibilidade e confiabilidade. O time entregou rápido e com ótima documentação.',
    },
  ] satisfies Testimonial[],

  // Rodapé (links extras)
  footerLinks: [
    { label: 'Política de Privacidade', href: '/privacidade' }, // crie depois se quiser
    { label: 'Termos de Uso', href: '/termos' }, // crie depois se quiser
  ] satisfies NavItem[],
} as const;
