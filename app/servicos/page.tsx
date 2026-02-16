import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { services } from '@/lib/site';

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="container-page py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-brand-deep">Serviços</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <h2 className="text-lg font-semibold text-brand-deep">{s.title}</h2>
              <p className="mt-2 text-sm text-brand-deep/70">{s.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
