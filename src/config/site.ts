export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Steal Anime Eggs Wiki",
  shortName: "Steal Anime Eggs",
  logoText: "SA",
  tagline: "Codes, Eggs, Tier Lists & Progression Guides",
  description: "Your ultimate guide to Steal Anime Eggs on Roblox! Explore active codes, egg locations, anime units, tier lists, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stealanimeeggs.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://stealanimeeggs.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/96727061242653/Steal-Anime-Eggs",
  heroVideoId: "QSA8L3lm9MI", // Steal Anime Eggs gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/results?search_query=Steal+Anime+Eggs+Roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
