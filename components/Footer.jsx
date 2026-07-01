import Link from 'next/link';
import { site } from '../lib/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>
          <strong>{site.name}</strong>
          <div>Поддержка: {site.supportEmail}</div>
        </div>
        <div className="footer-links">
          <Link href="/offer">Оферта</Link>
          <Link href="/refund">Возврат</Link>
          <Link href="/privacy">Политика</Link>
        </div>
      </div>
    </footer>
  );
}
