/** Склеивает классы, пропуская пустые значения */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export type Tone = "rose" | "sky" | "mint";

/** Фоновые классы и HEX-цвета для трёх мягких тонов сайта */
export const toneBg: Record<Tone, string> = {
  rose: "bg-rose-100",
  sky: "bg-sky-100",
  mint: "bg-mint-100",
};

export const toneHex: Record<Tone, string> = {
  rose: "#ffe4e6",
  sky: "#e0f2fe",
  mint: "#d9f5e8",
};

export const toneChip: Record<Tone, string> = {
  rose: "bg-rose-100 text-rose-900",
  sky: "bg-sky-100 text-sky-900",
  mint: "bg-mint-100 text-emerald-900",
};
