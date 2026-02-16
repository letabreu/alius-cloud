// components/footer.tsx
import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/50">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-display text-lg text-brand-deep">
              Alius <span className="text-brand-teal">Cloud</span>
            </div>
            <p className="mt-2 max-w-md text-sm text-brand-deep/70">{site.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold text-brand-deep">Navegação</div>
              {site.nav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="text-brand-deep/70 hover:text-brand-petroleum">
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-brand-deep">Contato</div>
              <div className="text-brand-deep/70">{site.contact.email}</div>
              <div className="text-brand-deep/70">{site.contact.whatsapp}</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-brand-deep/60">
          © {new Date().getFullYear()} Alius Cloud. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
