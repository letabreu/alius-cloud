import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { site } from '@/lib/site';

const solutions = [
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

export default function SolucoesPage() {
  return (
    <>
      <Header />

      <main className="container-page py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-brand-deep">Soluções</h1>
        <p className="mt-3 max-w-2xl text-sm text-brand-deep/70">
          Um conjunto de entregas para organizar dados, automatizar rotinas e transformar informação
          em decisões mais rápidas.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {solutions.map((s) => (
            <section key={s.id} id={s.id} className="card p-6 scroll-mt-24">
              <h2 className="text-lg font-semibold text-brand-deep">{s.title}</h2>
              <p className="mt-2 text-sm text-brand-deep/70">{s.description}</p>

              <div className="mt-4">
                <a
                  href={site.cta?.href ?? '/contato'}
                  className="text-sm font-semibold text-brand-petroleum hover:text-brand-teal"
                >
                  Quero falar sobre isso →
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
