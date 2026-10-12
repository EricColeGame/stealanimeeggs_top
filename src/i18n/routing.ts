import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "pt", "id"] as const;

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
