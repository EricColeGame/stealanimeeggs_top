export interface NavItem {
  key: string;
  path: string;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES: string[] = [];
