import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { site } from '../../lib/site';

export const metadata = {
  title: `Политика обработки данных — ${site.name}`,
  description: 'Описание обработки данных пользователей сервиса.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="badge">Персональные данные</div>
          <h1>Политика обработки персональных данных</h1>
          <p className="lead">Какие данные могут обрабатываться при оплате и использовании подписки.</p>
          <section className="legal-box">
            <h2>1. Данные</h2>
            <p>Могут обрабатываться Telegram-имя пользователя, email, сведения об оплате, выбранный тариф и техническая информация для выдачи доступа.</p>
            <h2>2. Цели</h2>
            <p>Данные используются для приема оплаты, выдачи доступа, поддержки пользователей и обработки обращений.</p>
            <h2>3. Контакты</h2>
            <p>По вопросам обработки данных напишите на {site.supportEmail}.</p>
            <h2>4. Продавец</h2>
            <p>{site.seller.status}, {site.seller.fullName}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
