export const PAGE_IDS = ['home', 'showroom', 'contact'] as const;

export type PageId = (typeof PAGE_IDS)[number];
