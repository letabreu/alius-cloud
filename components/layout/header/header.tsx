// components/layout/Header/Header.tsx
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
            width={220} // ↑ aumentei
            height={44} // ↑ aumentei
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contato" className="btn-primary">
          Falar com a Alius
        </Link>
      </div>
    </header>
  );
}
