// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { cases, site, steps } from '@/lib/site';

function SectionTitle(props: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className={styles.sectionTitle}>
      {props.kicker ? <div className={styles.kicker}>{props.kicker}</div> : null}
      <h2 className={styles.title}>{props.title}</h2>
      {props.subtitle ? <p className={styles.subtitle}>{props.subtitle}</p> : null}
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
          <div className={`container-page ${styles.heroInner}`}>
            <div className={styles.heroGrid}>
              <div>
                <div className={styles.heroBadge}>
                  {site.name} • {site.tagline}
                </div>

                <h1 className={styles.heroTitle}>
                  Dados confiáveis.
                  <br />
                  Processos automatizados.
                </h1>

                <p className={styles.heroLead}>
                  Construímos soluções de dados e automação com padrão institucional e foco em
                  resultado: qualidade, governança e entrega previsível.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/contato" className="btn-primary">
                    Solicitar diagnóstico
                  </Link>
                  <Link href="/cases" className={styles.heroSecondaryBtn}>
                    Ver cases
                  </Link>
                </div>

                <div className={styles.heroMetrics}>
                  <div className={styles.heroMetricCard}>
                    <div className={styles.heroMetricTitle}>CI</div>
                    <div className={styles.heroMetricDesc}>Qualidade no fluxo</div>
                  </div>
                  <div className={styles.heroMetricCard}>
                    <div className={styles.heroMetricTitle}>GMUD</div>
                    <div className={styles.heroMetricDesc}>Controle de janela</div>
                  </div>
                  <div className={styles.heroMetricCard}>
                    <div className={styles.heroMetricTitle}>Docs</div>
                    <div className={styles.heroMetricDesc}>Padrão & clareza</div>
                  </div>
                </div>
              </div>

              <div className={`card ${styles.heroRightCard}`}>
                <div className={styles.heroCardLabel}>O que entregamos</div>
                <h3 className={styles.heroCardTitle}>Base pronta pra escalar (sem “gambiarra”)</h3>

                <ul className={styles.heroCardList}>
                  <li>• Padrões de código + revisão via PR</li>
                  <li>• Pipelines com testes e validações</li>
                  <li>• Observabilidade (logs, alertas, métricas)</li>
                  <li>• Documentação para manutenção simples</li>
                </ul>

                <div className={styles.heroCardActions}>
                  <Link href="/solucoes" className="btn-outline">
                    Ver soluções
                  </Link>
                  <Link href="/contato" className="btn-primary">
                    Contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <section className={styles.section}>
          <div className="container-page">
            <SectionTitle
              kicker="Método"
              title="Fluxo simples, rastreável e com qualidade"
              subtitle="Um processo que reduz riscos e aumenta previsibilidade de entrega."
            />

            <div className={styles.grid4}>
              {steps.map((step, i) => (
                <div key={step.title} className={`card ${styles.cardPad}`}>
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
        <section className={styles.section}>
          <div className="container-page">
            <SectionTitle
              kicker="Cases"
              title="Resultados com cara de produção"
              subtitle="Exemplos do tipo de problema que resolvemos e como organizamos a entrega."
            />

            <div className={styles.grid3}>
              {cases.map((c) => (
                <div key={c.title} className={`card ${styles.cardPad}`}>
                  <h3 className="text-lg font-semibold text-brand-deep">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-deep/70">{c.summary}</p>

                  <div className={styles.tags}>
                    {c.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sectionCta}>
              <Link href="/cases" className="btn-outline">
                Ver mais
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.section}>
          <div className="container-page">
            <div className={`card ${styles.finalCard}`}>
              <div className={styles.finalGrid}>
                <div>
                  <div className={styles.finalLabel}>Vamos conversar</div>
                  <h3 className={styles.finalTitle}>Um diagnóstico rápido já clareia o caminho</h3>
                  <p className={styles.finalText}>
                    Você me conta o cenário e eu te devolvo um plano objetivo: o que fazer primeiro,
                    como medir e como evoluir com segurança.
                  </p>
                </div>

                <div className={styles.finalActions}>
                  <Link href="/contato" className="btn-primary">
                    Ir para contato
                  </Link>
                  <div className={styles.finalSmall}>
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
