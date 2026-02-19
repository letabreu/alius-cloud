'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

type Topic = { value: string; label: string };

const TOPICS: Topic[] = [
  { value: 'comercial', label: 'Comercial' },
  { value: 'parcerias', label: 'Parcerias' },
  { value: 'suporte', label: 'Suporte' },
  { value: 'outros', label: 'Outros' },
];

export function ContactForm() {
  const topics = useMemo(() => TOPICS, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: TOPICS[0].value,
    subject: '',
    message: '',
    company: '', // honeypot (não mostrar pro usuário)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const json = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Não foi possível enviar agora.');
        return;
      }

      setSent(true);
      // opcional: limpar campos
      setForm((p) => ({ ...p, name: '', email: '', subject: '', message: '' }));
    } catch {
      setError('Não foi possível enviar agora.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputBase =
    'w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-brand-deep ' +
    'placeholder:text-brand-deep/40 outline-none focus:ring-2 focus:ring-brand-teal/30';

  return (
    <>
      <form onSubmit={handleSubmit} className="card p-6 font-sans font-light md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Nome Completo"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            required
            className={inputBase}
          />

          <input
            placeholder="E-mail"
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            required
            className={inputBase}
          />

          <div className="relative">
            <select
              value={form.topic}
              onChange={(e) => set('topic', e.target.value)}
              required
              className={`${inputBase} appearance-none pr-11`}
            >
              {topics.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className="h-4 w-4 text-brand-deep/50" />
            </span>
          </div>

          <input
            placeholder="Assunto"
            value={form.subject}
            onChange={(e) => set('subject', e.target.value)}
            required
            className={inputBase}
          />

          <textarea
            placeholder="Escreva sua mensagem…"
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
            rows={7}
            required
            className={`${inputBase} md:col-span-2 resize-none`}
          />

          {/* honeypot invisível */}
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            className="hidden"
            aria-hidden="true"
          />
        </div>

        {error && <p className="mt-4 text-sm text-brand-deep/70">{error}</p>}

        <div className="mt-6 flex justify-end">
          <button type="submit" className="btn-primary gap-2" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando…' : 'ENVIAR'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* MODAL de sucesso (como sua referência) */}
      {sent && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-10 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/15">
              <CheckCircle2 className="h-10 w-10 text-brand-teal" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-brand-deep">Enviado</h3>
            <p className="mt-2 text-sm text-brand-deep/70">Em breve entraremos em contato.</p>

            <div className="mt-8 flex justify-center">
              <button className="btn-primary" onClick={() => setSent(false)} type="button">
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
