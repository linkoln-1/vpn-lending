export const site = {
  name: 'Lincode Secure Connect',
  description: 'Цифровая подписка для защищенного интернет-соединения на выбранный срок.',
  domain: 'https://alx-lincode.com',
  botUsername: '@alx_lin_bot',
  supportEmail: 'lincode@bk.ru',
  seller: {
    status: 'Индивидуальный предприниматель',
    fullName: 'Нашхоев Али Русланович',
  },
  tariffs: [
    { title: '1 месяц', price: '299 ₽', description: 'Базовый доступ на 30 дней' },
    { title: '3 месяца', price: '799 ₽', description: 'Оптимальный тариф для постоянного использования' },
    { title: '6 месяцев', price: '1499 ₽', description: 'Максимальная выгода при длительном доступе' },
  ],
};

export function getTelegramUrl() {
  return `https://t.me/${site.botUsername.replace('@', '')}`;
}
