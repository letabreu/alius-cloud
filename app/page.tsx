// app/page.tsx
import Link from 'next/link';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { cases, services, site, steps } from '@/lib/site';

function SectionTitle(props: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {props.kicker ? (
        <div className="mx-auto inline-flex rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-brand-petroleum">
          {props.kicker}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">
        {props.title}
      </h2>
      {props.subtitle ? (
        <p className="mt-3 text-base text-brand-deep/70">{props.subtitle}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero-surface">
          <div className="container-page py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-brand-off/90">
                  {site.name} • {site.tagline}
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  Dados confiáveis.
                  <br />
                  Processos automatizados.
                </h1>

                <p className="mt-4 max-w-xl text-base text-brand-off/80">
                  Construímos soluções de dados e automação com padrão institucional e foco em
                  resultado: qualidade, governança e entrega previsível.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contato" className="btn-primary">
                    Solicitar diagnóstico
                  </Link>
                  <Link
                    href="/cases"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Ver cases
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="text-lg font-semibold">CI</div>
                    <div className="text-white/70">Qualidade no fluxo</div>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="text-lg font-semibold">GMUD</div>
                    <div className="text-white/70">Controle de janela</div>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="text-lg font-semibold">Docs</div>
                    <div className="text-white/70">Padrão & clareza</div>
                  </div>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <div className="text-sm font-semibold text-brand-petroleum">O que entregamos</div>
                <h3 className="mt-2 text-xl font-semibold text-brand-deep">
                  Base pronta pra escalar (sem “gambiarra”)
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-brand-deep/75">
                  <li>• Padrões de código + revisão via PR</li>
                  <li>• Pipelines com testes e validações</li>
                  <li>• Observabilidade (logs, alertas, métricas)</li>
                  <li>• Documentação para manutenção simples</li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <Link href="/servicos" className="btn-outline">
                    Ver serviços
                  </Link>
                  <Link href="/contato" className="btn-primary">
                    Contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="py-16 md:py-20">
          <div className="container-page">
            <SectionTitle
              kicker="Serviços"
              title="Do dado bruto ao valor de negócio"
              subtitle="Entregas enxutas, com governança e foco em eficiência operacional."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="card p-6">
                  <h3 className="text-lg font-semibold text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-sm text-brand-deep/70">{s.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-brand-deep/75">
                    {s.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/servicos" className="btn-primary">
                Ver tudo
              </Link>
            </div>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <section className="py-16 md:py-20">
          <div className="container-page">
            <SectionTitle
              kicker="Método"
              title="Fluxo simples, rastreável e com qualidade"
              subtitle="Um processo que reduz riscos e aumenta previsibilidade de entrega."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {steps.map((step, i) => (
                <div key={step.title} className="card p-6">
                  <div className="text-xs font-semibold text-brand-petroleum">
                    Etapa {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-2 text-base font-semibold text-brand-deep">{step.title}</div>
                  <p className="mt-2 text-sm text-brand-deep/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="py-16 md:py-20">
          <div className="container-page">
            <SectionTitle
              kicker="Cases"
              title="Resultados com cara de produção"
              subtitle="Exemplos do tipo de problema que resolvemos e como organizamos a entrega."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {cases.map((c) => (
                <div key={c.title} className="card p-6">
                  <h3 className="text-lg font-semibold text-brand-deep">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-deep/70">{c.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-brand-deep/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/cases" className="btn-outline">
                Ver mais
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 md:py-20">
          <div className="container-page">
            <div className="card p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="text-sm font-semibold text-brand-petroleum">Vamos conversar</div>
                  <h3 className="mt-2 text-2xl font-semibold text-brand-deep">
                    Um diagnóstico rápido já clareia o caminho
                  </h3>
                  <p className="mt-3 text-sm text-brand-deep/70">
                    Você me conta o cenário e eu te devolvo um plano objetivo: o que fazer primeiro,
                    como medir e como evoluir com segurança.
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:items-end">
                  <Link href="/contato" className="btn-primary">
                    Ir para contato
                  </Link>
                  <div className="text-xs text-brand-deep/60">
                    E-mail: {site.contact.email} • WhatsApp: {site.contact.whatsapp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
