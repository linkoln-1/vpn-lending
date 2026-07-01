import './globals.css';
import { site } from '../lib/site';

export const metadata = {
  title: `${site.name} — цифровая подписка`,
  description: site.description,
  openGraph: {
    title: `${site.name} — цифровая подписка`,
    description: site.description,
    url: site.domain,
    siteName: site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
