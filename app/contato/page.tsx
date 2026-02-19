import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/sections/contato/contato-form';

export default function ContatoPage() {
  return (
    <>
      <Header />

      <main className="container-page py-12">
        {/* Header (sem sair do nosso design system) */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mx-auto mb-3 h-1 w-14 rounded-full bg-brand-teal" />
          <h1 className="text-5xl font-semibold tracking-tight text-brand-deep md:text-6xl">
            Contato
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-deep/70">
            Entre em contato conosco! Mande uma mensagem para nós que logo nos falaremos.
          </p>
        </header>

        {/* Form */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
