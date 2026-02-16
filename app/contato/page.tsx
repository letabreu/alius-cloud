import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { site } from '@/lib/site';

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="container-page py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-brand-deep">Contato</h1>
        <div className="mt-6 card p-6">
          <p className="text-sm text-brand-deep/70">
            E-mail: <span className="font-semibold">{site.contact.email}</span>
            <br />
            WhatsApp: <span className="font-semibold">{site.contact.whatsapp}</span>
          </p>
          <p className="mt-4 text-xs text-brand-deep/60">
            (Troque os valores AQUI pelos seus contatos reais no arquivo <code>lib/site.ts</code>)
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
