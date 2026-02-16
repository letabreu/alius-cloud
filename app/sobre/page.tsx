import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { site } from '@/lib/site';

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="container-page py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-brand-deep">Sobre</h1>
        <p className="mt-4 max-w-2xl text-sm text-brand-deep/70">{site.description}</p>
      </main>
      <Footer />
    </>
  );
}
