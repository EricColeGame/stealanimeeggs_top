export interface NavigationItem {
  /** Translation key under the `nav` namespace (e.g. "codes" -> nav.codes) */
  key: string;
  /** URL path for the section landing page */
  path: `/${string}`;
  /** Whether this section is backed by MDX content and gets an overview page */
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.map((item) => item.key);
