/**
 * Общие настройки сайта.
 * ВАЖНО: адреса, телефоны и e-mail ниже — примеры. Замените их на реальные данные клиники.
 */
export const site = {
  name: "Бота",
  fullName: "Детская больница «Бота»",
  description:
    "Современная детская больница в центре Астаны: внимательные врачи, игровые комнаты и подарок за смелость каждому маленькому пациенту.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bota-kids.vercel.app",
  phone: "+7 (7172) 00-00-00",
  phoneHref: "tel:+77172000000",
  email: "info@bota-kids.kz",
  city: "Астана",
  hours: [
    { days: "Понедельник – суббота", time: "8:00 – 20:00" },
    { days: "Воскресенье", time: "9:00 – 16:00" },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Главная" },
  { href: "/doctors", label: "Врачи" },
  { href: "/play", label: "Игровые зоны" },
  { href: "/contacts", label: "Контакты" },
] as const;
