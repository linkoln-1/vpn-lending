import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { site } from '../../lib/site';

export const metadata = {
  title: `Условия возврата — ${site.name}`,
  description: 'Правила возврата средств по цифровой подписке.',
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="badge">Оплата и возврат</div>
          <h1>Условия возврата</h1>
          <p className="lead">Базовые правила возврата средств по цифровой подписке.</p>
          <section className="legal-box">
            <h2>1. Когда возможен возврат</h2>
            <p>Возврат возможен, если оплаченный доступ не был выдан или услуга не была оказана по технической причине на стороне сервиса.</p>
            <h2>2. После выдачи доступа</h2>
            <p>Если доступ уже выдан и подписка активирована, обращение рассматривается индивидуально через поддержку.</p>
            <h2>3. Как запросить возврат</h2>
            <p>Напишите на {site.supportEmail}. Укажите дату оплаты, выбранный тариф и причину обращения.</p>
            <h2>4. Продавец</h2>
            <p>{site.seller.status} {site.seller.fullName}</p>
            <p>ИНН: {site.seller.inn}</p>
            <p>ОГРНИП: {site.seller.ogrnip}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
