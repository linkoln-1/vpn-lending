import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { site } from '../../lib/site';

export const metadata = {
  title: `Публичная оферта — ${site.name}`,
  description: 'Условия покупки цифровой подписки.',
};

export default function OfferPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="badge">Документ для покупателей</div>
          <h1>Публичная оферта</h1>
          <p className="lead">Условия покупки цифровой подписки {site.name}.</p>
          <section className="legal-box">
            <h2>1. Предмет</h2>
            <p>Пользователь приобретает цифровую подписку на сервис защищенного соединения. Доступ выдается через Telegram-бота после подтверждения оплаты.</p>
            <h2>2. Оплата</h2>
            <p>Стоимость указана на странице тарифов. Подписка активируется после успешной онлайн-оплаты.</p>
            <h2>3. Поддержка</h2>
            <p>Контакт поддержки: {site.supportEmail}</p>
            <h2>4. Продавец</h2>
            <p>{site.seller.status} {site.seller.fullName}</p>
            <p>ИНН: {site.seller.inn}</p>
            <p>ОГРНИП: {site.seller.ogrnip}</p>
            <p>Дата регистрации: {site.seller.registrationDate}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
