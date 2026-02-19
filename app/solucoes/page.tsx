import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { site, solutions } from '@/lib/site';

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main className="container-page py-12">
        {/* ... */}
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
