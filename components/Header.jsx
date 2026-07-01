import Link from 'next/link';
import { getTelegramUrl, site } from '../lib/site';

export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="logo" href="/vpn" aria-label={site.name}>
          <span className="logo-mark">L</span>
          <span>{site.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Навигация">
          <Link href="/vpn#tariffs">Тарифы</Link>
          <Link href="/vpn#how-it-works">Как работает</Link>
          <Link href="/offer">Оферта</Link>
          <Link href="/refund">Возврат</Link>
          <Link href="/privacy">Политика</Link>
        </nav>

        <a className="button" href={getTelegramUrl()} target="_blank" rel="noreferrer">
          Telegram-бот
        </a>
      </div>
    </header>
  );
}
