import { readJSON, writeJSON } from "./storage";

/**
 * Записи на приём.
 *
 * Сейчас записи хранятся в localStorage браузера (демо-режим без сервера).
 * Для рабочей системы замените `submitAppointment`, `listAppointments`
 * и `cancelAppointment` на вызовы вашего API (например, route handlers в src/app/api).
 */

export interface Appointment {
  id: string;
  branchId: string;
  doctorId: string;
  /** Дата в формате YYYY-MM-DD (по местному времени) */
  date: string;
  /** Время в формате HH:MM */
  time: string;
  childName: string;
  childAge: number;
  parentName: string;
  phone: string;
  comment: string;
  /** E-mail владельца аккаунта, если запись создана после входа */
  ownerEmail?: string;
  createdAt: string;
}

const KEY = "bota.appointments";

export type NewAppointment = Omit<Appointment, "id" | "createdAt">;

export function listAppointments(): Appointment[] {
  return readJSON<Appointment[]>(KEY, []);
}

export function submitAppointment(data: NewAppointment): Appointment {
  const appointment: Appointment = {
    ...data,
    id: `ap-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  writeJSON(KEY, [...listAppointments(), appointment]);
  return appointment;
}

export function cancelAppointment(id: string): void {
  writeJSON(
    KEY,
    listAppointments().filter((a) => a.id !== id),
  );
}

/* ----------------------------------- Время и слоты ----------------------------------- */

const pad = (n: number) => String(n).padStart(2, "0");

/** YYYY-MM-DD по местному времени */
export function toISODate(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function parseISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** Ближайшие рабочие дни, начиная с сегодняшнего */
export function upcomingDays(count = 14): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (days.length < count) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function hashString(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (Math.imul(31, h) + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Все слоты на день: по 30 минут. В воскресенье приём короче. */
export function slotsForDate(date: Date): string[] {
  const isSunday = date.getDay() === 0;
  const startMin = 9 * 60;
  const endMin = isSunday ? 15 * 60 : 18 * 60;
  const slots: string[] = [];
  for (let m = startMin; m < endMin; m += 30) {
    slots.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);
  }
  return slots;
}

/**
 * Свободные слоты врача на дату.
 * Демо-логика: часть слотов считается занятой (стабильно для одной пары врач+дата),
 * плюс исключаются уже созданные записи и прошедшее время.
 */
export function availableSlots(doctorId: string, date: Date, booked: Appointment[]): string[] {
  const iso = toISODate(date);
  const now = new Date();
  const isToday = toISODate(now) === iso;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  return slotsForDate(date).filter((time) => {
    const [h, m] = time.split(":").map(Number);
    if (isToday && h * 60 + m < nowMinutes + 60) return false;
    if (hashString(`${doctorId}|${iso}|${time}`) % 100 < 28) return false;
    return !booked.some((a) => a.doctorId === doctorId && a.date === iso && a.time === time);
  });
}

const weekdayFormatter = new Intl.DateTimeFormat("ru-RU", { weekday: "short" });
const dayFormatter = new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" });
const fullFormatter = new Intl.DateTimeFormat("ru-RU", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

export const formatWeekday = (d: Date) => weekdayFormatter.format(d);
export const formatDay = (d: Date) => dayFormatter.format(d);
export const formatFullDate = (d: Date) => fullFormatter.format(d);

/** Проверка казахстанского номера: 11 цифр, начинается с 7 или 8 */
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"));
}
