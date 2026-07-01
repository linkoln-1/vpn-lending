import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { getTelegramUrl, site } from '../../lib/site';

export const metadata = {
  title: `${site.name} — VPN-подписка`,
  description: 'Подключение цифровой подписки для защищенного интернет-соединения. Оплата и получение доступа через Telegram-бота.',
};

export default function VpnPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <div className="badge">Цифровая услуга • доступ после оплаты</div>
            <h1>VPN-подписка для защищенного интернет-соединения</h1>
            <p className="lead">
              {site.name} предоставляет цифровой доступ к защищенному соединению на выбранный срок. Оплата проходит онлайн, а данные для подключения выдаются через Telegram-бота.
            </p>
            <div className="actions">
              <a className="button primary" href={getTelegramUrl()} target="_blank" rel="noreferrer">Перейти к оплате</a>
              <a className="button" href="#tariffs">Посмотреть тарифы</a>
            </div>
            <div className="stats">
              <div className="stat"><strong>1–6 мес.</strong><span>Сроки подписки на выбор</span></div>
              <div className="stat"><strong>24/7</strong><span>Доступ к сервису при активной подписке</span></div>
              <div className="stat"><strong>Telegram</strong><span>Получение доступа и поддержка в боте</span></div>
            </div>
          </div>
        </section>

        <section id="tariffs" className="section">
          <div className="container">
            <div className="section-title">
              <h2>Тарифы</h2>
              <p className="lead">Выберите срок доступа. После оплаты подписка активируется и клиент получает инструкцию для подключения.</p>
            </div>
            <div className="grid">
              {site.tariffs.map((tariff, index) => (
                <article className={`card ${index === 1 ? 'featured' : ''}`} key={tariff.title}>
                  <h3>{tariff.title}</h3>
                  <p>{tariff.description}</p>
                  <div className="price">{tariff.price}</div>
                  <a className="button primary" href={getTelegramUrl()} target="_blank" rel="noreferrer">Оформить</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-title">
              <h2>Как это работает</h2>
              <p className="lead">Процесс сделан простым: клиент выбирает тариф, оплачивает подписку и получает цифровой доступ.</p>
            </div>
            <div className="grid steps">
              <div className="card step"><h3>Выбор тарифа</h3><p>Откройте Telegram-бота, выберите подходящий срок подписки и перейдите к оплате.</p></div>
              <div className="card step"><h3>Онлайн-оплата</h3><p>Оплата принимается через подключенный платежный сервис. После успешной оплаты бот получает подтверждение.</p></div>
              <div className="card step"><h3>Выдача доступа</h3><p>Клиент получает данные подключения и инструкцию по использованию сервиса.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="legal-box">
              <h2>Информация для покупателей</h2>
              <p>Услуга является цифровой подпиской. Сервис предназначен для защиты интернет-соединения, в том числе при использовании публичных Wi-Fi сетей. Использование сервиса для противоправных действий запрещено.</p>
              <p><strong>Контакты поддержки:</strong> {site.supportEmail}</p>
              <p><strong>Продавец:</strong> {site.seller.status}, {site.seller.fullName}</p>
              <div className="actions">
                <a className="button" href="/offer">Оферта</a>
                <a className="button" href="/refund">Условия возврата</a>
                <a className="button" href="/privacy">Политика данных</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
