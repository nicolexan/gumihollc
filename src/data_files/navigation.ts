/**
 * Navigation structure shared by every locale: stable ids, unlocalised paths
 * and social URLs. The label for each id lives in the copy tables
 * (`copy.nav.labels`, `copy.nav.footer.sections`), so translators never touch
 * a path and code never keys on a translated label.
 */
import { CONTACT, SHOP } from './constants';

export type NavLinkId =
  'home' | 'products' | 'about' | 'blog' | 'faq' | 'contact';

export const navLinks: { id: NavLinkId; path: string }[] = [
  { id: 'home', path: '/' },
  { id: 'products', path: '/products' },
  { id: 'about', path: '/about' },
  { id: 'blog', path: '/blog' },
  { id: 'faq', path: '/faq' },
  { id: 'contact', path: '/contact' },
];

export type FooterSectionId = 'shop' | 'company';
export type FooterLinkId =
  'products' | 'amazon' | 'recipes' | 'about' | 'blog' | 'faq' | 'contact';

export const footerSections: {
  id: FooterSectionId;
  links: { id: FooterLinkId; path: string; badge?: 'hiring' }[];
}[] = [
  {
    id: 'shop',
    links: [
      { id: 'products', path: '/products' },
      { id: 'amazon', path: SHOP.amazonUrl },
      { id: 'recipes', path: '/blog' },
    ],
  },
  {
    id: 'company',
    links: [
      { id: 'about', path: '/about' },
      { id: 'faq', path: '/faq' },
      { id: 'contact', path: '/contact' },
    ],
  },
];

export const socialLinks = {
  instagram: CONTACT.instagramUrl,
};
