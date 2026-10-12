import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import id from "@/locales/id.json";
import pt from "@/locales/pt.json";

type Messages = typeof en;

const messagesMap: Record<string, Partial<Messages>> = {
  "en": en,
  "es": es,
  "id": id,
  "pt": pt,
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Non-English locale files may be partial; deepMerge falls back to en for
  // any missing keys so an incomplete locale never renders raw key names.
  const localeMessages = locale === "en" ? {} : messagesMap[locale] ?? {};

  const messages = deepMerge(en, localeMessages);
  return { locale, messages };
});
