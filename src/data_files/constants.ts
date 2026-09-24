import ogImageSrc from '@images/gumiho/geumsan korea mountains.jpg';

export const SITE = {
  /** Consumer-facing brand; used in page titles, OG and the navbar wordmark. */
  title: 'Earnest Gumiho',
  /** Legal entity; used in the copyright line and schema.org Organization. */
  company: 'Gumiho LLC',
  tagline: 'Best Quality Ginseng from Geumsan, Korea',
  description:
    'Earnest Gumiho brings premium, matured Korean ginseng from Geumsan, Korea, to your table. Pure ginseng powder blended with yam for lattes and shakes, with no added sugar or chemicals.',
  description_short: 'Premium Korean Ginseng Powder from Geumsan, Korea.',
  url: 'https://gumihollc.com',
  author: 'Gumiho LLC',
};

/** Public contact details, shown on the contact page and in the footer. */
export const CONTACT = {
  email: 'services@gumihollc.com',
  kakaoTalkId: 'GumihoLLC',
  instagramHandle: 'gumihoginseng',
  instagramUrl: 'https://www.instagram.com/gumihoginseng/',
};

/** Where to buy. Canonical /dp/ link: search-tracking params go stale. */
export const SHOP = {
  /**
   * Lululala Ginseng Powder, the newest product; used by the home banner and
   * the footer's "Buy on Amazon". The classic Ginseng Powder is sold out
   * (its listing, https://www.amazon.com/dp/B0F6W4KTVG, is noted in its
   * product file).
   */
  lululalaUrl: 'https://www.amazon.com/dp/B0HGQB1TKT',
};

// Per-locale titles, descriptions and Open Graph text live in `src/copy/`;
// `src/utils/metadata.ts` assembles the <head> from them.
export const OG = {
  image: ogImageSrc,
};
