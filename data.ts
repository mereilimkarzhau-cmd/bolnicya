/**
 * Контент сайта: филиалы, специальности, врачи, игровые зоны.
 * Имена врачей, адреса и телефоны — примеры для макета. Замените на реальные данные.
 *
 * Фото врачей: у каждого врача есть необязательное поле `photo`.
 * Укажите прямую ссылку на изображение (домен images.unsplash.com уже разрешён
 * в next.config.mjs) — и вместо иллюстрации появится фотография.
 * Если фото не загрузится, сайт автоматически покажет иллюстрацию.
 */

export type BranchId = "central" | "kunaev" | "saryarka";

export interface Branch {
  id: BranchId;
  name: string;
  address: string;
  district: string;
  phone: string;
  hours: string;
  /** Строка для поиска в Google Картах */
  mapQuery: string;
}

export const branches: Branch[] = [
  {
    id: "central",
    name: "Центральный",
    address: "пр. Мангилик Ел, 55",
    district: "Район Есиль, центр города",
    phone: "+7 (7172) 00-00-00",
    hours: "Пн–Сб 8:00–20:00, Вс 9:00–16:00",
    mapQuery: "проспект Мангилик Ел 55, Астана, Казахстан",
  },
  {
    id: "kunaev",
    name: "На Кунаева",
    address: "ул. Динмухамеда Кунаева, 12",
    district: "Район Есиль, левый берег",
    phone: "+7 (7172) 00-00-01",
    hours: "Пн–Сб 8:00–20:00, Вс 9:00–16:00",
    mapQuery: "улица Динмухамеда Кунаева 12, Астана, Казахстан",
  },
  {
    id: "saryarka",
    name: "Сарыарка",
    address: "пр. Республики, 24",
    district: "Район Сарыарка, правый берег",
    phone: "+7 (7172) 00-00-02",
    hours: "Пн–Сб 8:00–19:00, Вс выходной",
    mapQuery: "проспект Республики 24, Астана, Казахстан",
  },
];

export function getBranch(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}

export function mapLink(query: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

export function routeLink(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function mapEmbedLink(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}

/* ---------------------------------- Специальности --------------------------------- */

export type SpecialtyId =
  | "pediatrics"
  | "surgery"
  | "neurology"
  | "dentistry"
  | "cardiology"
  | "ent"
  | "ophthalmology"
  | "psychology";

export interface Specialty {
  id: SpecialtyId;
  name: string;
  /** Цветовой тон карточек этой специальности */
  tone: "rose" | "sky" | "mint";
}

export const specialties: Specialty[] = [
  { id: "pediatrics", name: "Педиатрия", tone: "rose" },
  { id: "surgery", name: "Детская хирургия", tone: "sky" },
  { id: "neurology", name: "Неврология", tone: "mint" },
  { id: "dentistry", name: "Стоматология", tone: "rose" },
  { id: "cardiology", name: "Кардиология", tone: "sky" },
  { id: "ent", name: "ЛОР", tone: "mint" },
  { id: "ophthalmology", name: "Офтальмология", tone: "sky" },
  { id: "psychology", name: "Детская психология", tone: "rose" },
];

export function getSpecialty(id: string): Specialty | undefined {
  return specialties.find((s) => s.id === id);
}

/* ------------------------------------- Врачи -------------------------------------- */

export type HairStyle = "short" | "long" | "bun" | "curly";

export interface DoctorLook {
  skin: string;
  hair: string;
  hairStyle: HairStyle;
  /** Цвет медицинской формы под халатом */
  scrubs: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialtyId: SpecialtyId;
  title: string;
  experienceYears: number;
  approach: string;
  languages: string[];
  branchIds: BranchId[];
  look: DoctorLook;
  /** Необязательная ссылка на фото. Если не указана, показывается иллюстрация. */
  photo?: string;
}

export const doctors: Doctor[] = [
  {
    id: "aigerim-kasymova",
    name: "Айгерим Касымова",
    specialtyId: "pediatrics",
    title: "Врач-педиатр",
    experienceYears: 12,
    approach:
      "Сначала знакомимся и рисуем, потом слушаем сердечко. Объясняю каждый шаг на языке, который понятен малышу.",
    languages: ["Русский", "Қазақша"],
    branchIds: ["central", "kunaev", "saryarka"],
    look: { skin: "#f3c9a8", hair: "#3b2a2a", hairStyle: "long", scrubs: "#8adcb8" },
  },
  {
    id: "erzhan-seitkaliev",
    name: "Ержан Сейткалиев",
    specialtyId: "surgery",
    title: "Детский хирург",
    experienceYears: 15,
    approach:
      "Рассказываю ребёнку, что будет происходить, и показываю инструменты заранее. Родитель всегда рядом.",
    languages: ["Русский", "Қазақша", "English"],
    branchIds: ["central", "kunaev"],
    look: { skin: "#e8b995", hair: "#2a2222", hairStyle: "short", scrubs: "#7dd3fc" },
  },
  {
    id: "marina-lebedeva",
    name: "Марина Лебедева",
    specialtyId: "neurology",
    title: "Детский невролог",
    experienceYears: 11,
    approach:
      "Превращаю обследование в игру: пройти по линии, поймать мячик, повторить узор. Так ребёнок не напряжён, а я вижу больше.",
    languages: ["Русский", "English"],
    branchIds: ["central", "saryarka"],
    look: { skin: "#f6d3b8", hair: "#8a5a3b", hairStyle: "bun", scrubs: "#fda4af" },
  },
  {
    id: "dana-nurgalieva",
    name: "Дана Нургалиева",
    specialtyId: "dentistry",
    title: "Детский стоматолог",
    experienceYears: 8,
    approach:
      "Кресло у нас — «ракета», а бор — «пылесос для зубов». Лечим без спешки, с перерывами на мультики.",
    languages: ["Русский", "Қазақша"],
    branchIds: ["central", "kunaev"],
    look: { skin: "#efc3a0", hair: "#2f2424", hairStyle: "long", scrubs: "#fda4af" },
  },
  {
    id: "timur-abdrakhmanov",
    name: "Тимур Абдрахманов",
    specialtyId: "cardiology",
    title: "Детский кардиолог",
    experienceYears: 14,
    approach:
      "Датчики на груди — это «наклейки-антенны». Пока идёт ЭКГ, мы рассказываем, как работает сердце-моторчик.",
    languages: ["Русский", "Қазақша"],
    branchIds: ["central"],
    look: { skin: "#dfae88", hair: "#1f1a1a", hairStyle: "short", scrubs: "#7dd3fc" },
  },
  {
    id: "svetlana-orlova",
    name: "Светлана Орлова",
    specialtyId: "ent",
    title: "Детский ЛОР",
    experienceYears: 10,
    approach:
      "Не тороплюсь и не держу силой. Даю потрогать приборы, и только потом осматриваю горло и уши.",
    languages: ["Русский"],
    branchIds: ["kunaev", "saryarka"],
    look: { skin: "#f7d6bf", hair: "#b0703a", hairStyle: "curly", scrubs: "#8adcb8" },
  },
  {
    id: "aliya-zhumabekova",
    name: "Алия Жумабекова",
    specialtyId: "ophthalmology",
    title: "Детский офтальмолог",
    experienceYears: 9,
    approach:
      "Проверяем зрение по картинкам, а не по буквам: звери и фигурки подходят даже тем, кто ещё не читает.",
    languages: ["Русский", "Қазақша"],
    branchIds: ["central", "saryarka"],
    look: { skin: "#ecbd99", hair: "#2a2020", hairStyle: "bun", scrubs: "#fda4af" },
  },
  {
    id: "daniyar-omarov",
    name: "Данияр Омаров",
    specialtyId: "psychology",
    title: "Детский психолог",
    experienceYears: 7,
    approach:
      "Разговариваем через рисунки и игрушки. Помогаю детям назвать страх по имени, и он становится меньше.",
    languages: ["Русский", "Қазақша", "English"],
    branchIds: ["central", "kunaev", "saryarka"],
    look: { skin: "#e3b48f", hair: "#3a2c24", hairStyle: "short", scrubs: "#8adcb8" },
  },
];

export function getDoctor(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}

/** Склонение слова «год» по числу: 1 год, 2 года, 5 лет */
export function yearsLabel(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} год`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} года`;
  return `${n} лет`;
}

/* ---------------------------------- Игровые зоны ---------------------------------- */

export interface PlayZone {
  id: string;
  name: string;
  age: string;
  description: string;
  features: string[];
  tone: "rose" | "sky" | "mint";
  icon: "cloud" | "palette" | "book" | "blocks";
  /** Необязательная фотография комнаты */
  photo?: string;
}

export const playZones: PlayZone[] = [
  {
    id: "soft-island",
    name: "Мягкий остров",
    age: "1–5 лет",
    description:
      "Тёплый уголок с подушками, мягкими модулями и сухим бассейном. Здесь можно прыгать, кувыркаться и просто отдохнуть перед приёмом.",
    features: ["Сухой бассейн с шариками", "Мягкие модули и горка", "Место для родителей рядом"],
    tone: "rose",
    icon: "cloud",
  },
  {
    id: "workshop",
    name: "Мастерская",
    age: "3–10 лет",
    description:
      "Краски, пластилин и наклейки. Рисунки можно забрать домой или повесить на «стену смелости» в холле.",
    features: ["Рисование и лепка", "Раскраски по сезонам", "Стена смелости для рисунков"],
    tone: "sky",
    icon: "palette",
  },
  {
    id: "story-room",
    name: "Сказочная комната",
    age: "3–9 лет",
    description:
      "Книги на русском и казахском языках, театр теней и тихие сказки. Спокойное место, чтобы выдохнуть после осмотра.",
    features: ["Книги на двух языках", "Театр теней", "Сказки по расписанию"],
    tone: "mint",
    icon: "book",
  },
  {
    id: "block-town",
    name: "Город из кубиков",
    age: "4–12 лет",
    description:
      "Большие конструкторы и столы для совместных построек. Дети знакомятся друг с другом и забывают, зачем пришли.",
    features: ["Конструкторы разных размеров", "Столы для командной игры", "Настольные игры"],
    tone: "sky",
    icon: "blocks",
  },
];

export const animators = {
  schedule: "Ежедневно с 10:00 до 18:00",
  points: [
    "Встречают в холле и проводят в игровую комнату",
    "Играют с детьми, пока родители оформляют документы",
    "Остаются рядом, если ребёнку нужна поддержка перед процедурой",
  ],
};

/* ---------------------------------- Подарок за смелость ---------------------------------- */

export const courageGifts = [
  { id: "bear", title: "Мягкий мишка", note: "Для объятий в любой момент" },
  { id: "stickers", title: "Набор наклеек", note: "Звёзды, звери и ракеты" },
  { id: "book", title: "Книжка-раскраска", note: "Вместе с набором фломастеров" },
  { id: "bracelet", title: "Браслет смелости", note: "Его носят настоящие герои" },
  { id: "puzzle", title: "Пазл-сюрприз", note: "Собери и узнай, что на картинке" },
  { id: "bubbles", title: "Мыльные пузыри", note: "Чтобы отпраздновать смелость" },
];

export const courageSteps = [
  {
    title: "Приходим на осмотр",
    text: "Врач и аниматор знакомятся с ребёнком и показывают, что будет происходить.",
  },
  {
    title: "Получаем медаль смелости",
    text: "После приёма каждый ребёнок получает наклейку-медаль, даже если было немного страшно.",
  },
  {
    title: "Открываем сундучок",
    text: "Ребёнок сам выбирает сюрприз из сундучка смелости и забирает его домой.",
  },
];

/* -------------------------------------- Почему мы -------------------------------------- */

export const reasons = [
  {
    id: "play",
    title: "Игровая атмосфера",
    text: "Яркие холлы, игровые комнаты и аниматоры. Ожидание приёма превращается в приключение.",
    tone: "rose" as const,
    icon: "party" as const,
  },
  {
    id: "fearless",
    title: "Без страха",
    text: "Врачи заранее объясняют, что будет происходить, и показывают инструменты. Родитель всегда рядом.",
    tone: "sky" as const,
    icon: "shield" as const,
  },
  {
    id: "gift",
    title: "Подарок каждому",
    text: "Каждый маленький пациент получает сюрприз за смелость, и в следующий раз идёт к врачу с радостью.",
    tone: "mint" as const,
    icon: "gift" as const,
  },
];
