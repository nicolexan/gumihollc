import type { MarketingLocale } from '@utils/locale';
import { en } from './en';
import { ko } from './ko';

/**
 * Copy module: one typed table of UI strings per marketing locale.
 *
 * `Copy` is the shape of the English table. Other locales are `PartialCopy`:
 * any key they leave out falls back to English (see `withFallback`), so
 * adding a string to `en.ts` never breaks the build. Keys a locale does
 * provide must still match the English shape, and extra keys fail
 * `astro check`. Components read the current table from
 * `Astro.locals.copy`; code that already has a locale in hand (views,
 * `getStaticPaths`) can call `getCopy(locale)`.
 */
export type Copy = typeof en;

/** Nested objects become optional key by key; arrays are replaced whole. */
type DeepPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;
export type PartialCopy = DeepPartial<Copy>;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** English with a locale's translations laid over it, key by key. */
function withFallback<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override ?? base) as T;
  }
  const merged: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    merged[key] = withFallback(base[key], value);
  }
  return merged as T;
}

const tables: Record<MarketingLocale, Copy> = {
  en,
  ko: withFallback<Copy>(en, ko),
};

export function getCopy(locale: MarketingLocale): Copy {
  return tables[locale];
}
