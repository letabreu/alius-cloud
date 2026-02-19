// components/layout/header/header.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { site } from '@/lib/site';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container-page ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Alius Cloud - Home">
          <Image
            src="/images/brand/logo_secundario_sem_fundo.svg"
            alt="Alius Cloud"
            width={260}
            height={52}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {site.nav.map((item) => {
            const isSolutions = item.href === '/solucoes';

            if (!isSolutions) {
              return (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className={styles.dropdown}>
                <Link href={item.href} className={`${styles.navLink} ${styles.navLinkWithCaret}`}>
                  {item.label}
                </Link>

                <div className={styles.dropdownMenu} role="menu" aria-label="Soluções">
                  {site.solutionsMenu.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={styles.dropdownItem}
                      role="menuitem"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <Link href="/contato" className="btn-primary">
          Falar com a Alius
        </Link>
      </div>
    </header>
  );
}
