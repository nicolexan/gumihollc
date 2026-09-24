import faqs from '@data/faqs.json';
import features from '@data/features.json';

/**
 * English copy table. This file defines the shape of every locale (see
 * `Copy` in `./index.ts`). Other locales may leave keys out; those fall back
 * to the English text here.
 *
 * Paths are unlocalised (`/products`, not `/ko/products`); callers run them
 * through `localePath()` from `@utils/locale`.
 */
export const en = {
  site: {
    /** Default `<meta name="description">` when a page sets none. */
    description:
      'Earnest Gumiho brings premium 4-year-old Korean ginseng from Geumsan, Korea, to your table. Pure ginseng powder blended with yam for lattes and shakes, with no added sugar or chemicals.',
    /** schema.org `WebSite.description` in every page's `isPartOf`. */
    descriptionShort:
      'Premium 4-year-old Korean ginseng powder from Geumsan, Korea.',
    ogTitle: 'Earnest Gumiho: Korean Ginseng from Geumsan',
    ogDescription:
      "Discover nature's secret: ginseng for energy, focus, and wellness. Earnest Gumiho's ginseng powder is made from genuine 4-year-old Korean ginseng grown in Geumsan, Korea.",
  },

  layout: {
    skipToContent: 'Skip to content',
    changeLanguage: 'Change language',
    toggleNavigation: 'Toggle navigation',
    darkTheme: 'Dark Theme Toggle',
    lightTheme: 'Light Theme Toggle',
    toggleTheme: 'Toggle theme',
  },

  nav: {
    /** Labels for `navLinks` in `@data/navigation`, keyed by id. */
    labels: {
      home: 'Home',
      products: 'Products',
      about: 'Our Story',
      blog: 'Recipes',
      faq: 'FAQ',
      contact: 'Contact',
    },
    footer: {
      /** Section titles and link labels for `footerSections` in `@data/navigation`, keyed by id. */
      sectionTitles: {
        shop: 'Shop',
        company: 'Company',
      },
      links: {
        products: 'Our Products',
        amazon: 'Buy on Amazon',
        recipes: 'Recipes',
        about: 'Our Story',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contact',
      },
      tagline: 'Best Quality Ginseng from Geumsan, Korea',
      getInTouch: 'Get in touch',
      kakaoTalk: 'KakaoTalk',
      rightsReserved: 'All rights reserved.',
    },
  },

  banner: {
    dismiss: 'Dismiss',
    region: 'Informational banner',
  },

  blog: {
    readMore: 'View Recipe',
    relatedArticles: 'More recipes',
    ogSection: 'Recipes',
  },

  insights: {
    readMore: 'Read more',
    tableOfContents: 'Table of Contents:',
    ogSection: 'Learn',
  },

  products: {
    ogSection: 'Korean Ginseng',
    tabs: 'Tabs',
  },

  notFound: {
    title: 'Page Not Found',
    subTitle: 'Even we gets lost sometimes.',
    content:
      "The page you're looking for doesn't exist. Let's get you back on the trail.",
    goHome: 'Go Home',
    goBack: 'Go Back',
  },

  home: {
    banner: {
      title: 'Try our best-selling ginseng powder',
      btn: 'See us on Amazon',
    },
    hero: {
      title:
        'Discover Nature’s Secret with <span class="text-pink-500 dark:text-pink-300">Earnest Gumiho</span>',
      subTitle:
        'The best quality ginseng from Geumsan, Korea. Ginseng for energy, focus, and wellness, made for your everyday latte.',
      primaryBtn: 'Shop Ginseng Powder',
      secondaryBtn: 'See Recipes',
      imageAlt:
        'A hot ginseng latte and an iced ginseng latte beside a fresh ginseng root',
    },
    featuresGeneral: {
      title: 'Benefits of Korean Ginseng',
      subTitle:
        'Korean ginseng (Panax ginseng), known as "Insam" in Korea, has been part of Korean culture and tradition for centuries. Its primary active components, ginsenosides, are believed to support general health and vitality.',
      imageAlt: 'Green mountains of Korea seen from a traditional temple',
    },
    featuresNavs: {
      title:
        'From the fields of <span class="text-pink-500 dark:text-pink-300">Geumsan</span> to your table.',
      tabs: {
        origin: {
          heading: 'Grown in Geumsan',
          content:
            'Geumsan is famous across Korea for its top-quality ginseng. Our ginseng is sourced directly from its most fertile and trusted farms, where centuries-old tradition meets careful cultivation.',
          alt: 'Geumsan, Korea, the ginseng capital',
        },
        harvest: {
          heading: 'Harvested at 4 Years',
          content:
            'We use genuine 4-year-old Korean ginseng, harvested at peak maturity for a rich, deep flavor and plenty of naturally occurring ginsenosides.',
          alt: 'Freshly harvested ginseng from Geumsan farmers',
        },
        purity: {
          heading: 'Nothing Artificial',
          content:
            'Manufactured in Geumsan and imported directly into the U.S. No added chemicals, sugar, or artificial ingredients: just ginseng, blended with yam for a smooth taste and texture.',
          alt: 'A spoonful of Earnest Gumiho ginseng powder on a white background',
        },
      },
    },
    testimonials: {
      title: 'What Our Customers Say',
      subTitle:
        'Ginseng lattes, shakes, and slushes: here is how our customers enjoy Earnest Gumiho.',
      // Placeholder: replace with real customer reviews.
      quotes: [
        {
          content:
            'Incorporating the powder into a daily routine has quickly become a morning staple. Dealing with frequent afternoon fatigue meant finding a clean energy source without the dreaded caffeine crash was a true relief. The individual packaging is exceptionally convenient. Tossing a 5g stick into a bag makes it effortless to take on the go, whether mixed into warm water or blended into a post-workout smoothie. The taste carries that characteristic earthy, slightly bitter ginseng profile, but the addition of yam softens the edge, making it surprisingly smooth and palatable. With daily use, a subtle yet steady lift in daily stamina and mental focus became apparent. Alertness during long work hours improved noticeably, and the convenience factor ensures no doses are missed. Anyone looking for a natural way to support vitality through a hassle-free supplement format will find this blend definitely worth adding to the pantry.',
          author: 'Mike',
          role: 'Verified Amazon Buyer',
        },
      ],
      statistics: [
        {
          count: '4 yrs',
          description: 'grown before harvest, at peak maturity',
        },
        { count: '100%', description: 'Korean ginseng sourced from Geumsan' },
        {
          count: '0g',
          description: 'added sugar, chemicals, or artificial ingredients',
        },
        {
          count: '10g',
          description: 'is all it takes for a creamy 12oz latte',
        },
      ],
    },
    faqTitle: 'Frequently<br />asked questions',
  },

  about: {
    title: 'Our Story',
    metaDescription:
      'Gumiho LLC brings premium, genuine Korean ginseng from the trusted farms of Geumsan, Korea, to the U.S. Learn about our mission and how our ginseng powder is made.',
    ogTitle: 'Our Story | Earnest Gumiho',
    intro: {
      title: 'Where Tradition Meets Excellence',
      subTitle:
        "Welcome to Gumiho LLC. We specialize in premium Korean ginseng products, sourced directly from Korea's most fertile and trusted farms in Geumsan. Our passion for quality stems from a deep respect for the centuries-old heritage of Korean ginseng, renowned worldwide as a symbol of vitality, resilience, and balance.",
      cta: 'Shop Ginseng Powder',
    },
    articles: {
      mission: {
        title: 'Our Mission',
        subTitle:
          'Our mission is simple: to bring you the best quality, genuine Korean ginseng products to enhance your health and well-being. Every root we sell reflects our commitment to purity, authenticity, and excellence, so you receive nothing but the finest nature has to offer.',
        imageAlts: [
          'Ginseng harvested by farmers in Geumsan',
          'More freshly harvested ginseng from Geumsan farms',
        ],
      },
      geumsan: {
        title: 'Rooted in Geumsan',
        subTitle:
          'Geumsan is known as the capital of Korean ginseng. Its soil, climate, and generations of growing expertise produce ginseng of unmatched quality, which is why every Earnest Gumiho product starts there.',
        imageAlts: ['The ginseng monument in Geumsan, Korea'],
      },
      manufacturing: {
        title: 'Carefully Made, Directly Imported',
        subTitle:
          'Our ginseng products are sourced and manufactured in Geumsan, where centuries-old traditions and advanced techniques converge. We import them directly into the U.S. so they retain their natural potency and flavor, with no added chemicals, sugar, or artificial ingredients.',
        imageAlts: [
          'Ginseng powder being manufactured in Geumsan',
          'Earnest Gumiho ginseng packed for shipping',
        ],
      },
      journey: {
        title: 'A Journey to Better Health',
        subTitle:
          "We believe in the power of Korean ginseng to enrich lives, support a balanced lifestyle, and foster a deeper connection with nature's gifts. Whether you're a longtime ginseng enthusiast or exploring its benefits for the first time, we're here to guide you with a product you can trust.",
        imageAlts: ['An iced ginseng latte made with Earnest Gumiho powder'],
        cta: 'Try a Recipe',
      },
    },
  },

  contact: {
    title: 'Contact',
    metaDescription:
      'Questions about our Korean ginseng powder, wholesale, or your order? Reach Gumiho LLC by email, KakaoTalk, or Instagram.',
    ogTitle: 'Contact Us | Earnest Gumiho',
    heading: 'Contact us',
    subTitle:
      "Questions about our ginseng, wholesale, or your order? We'd love to hear from you.",
    emailHeading: 'Email us',
    emailContent: 'Prefer the written word? Drop us a line.',
    kakaoHeading: 'KakaoTalk',
    kakaoContent: 'Message us on KakaoTalk.',
    instagramHeading: 'Instagram',
    instagramContent: 'Follow along for recipes and news.',
    faqHeading: 'FAQ',
    faqContent: 'Explore our FAQ for quick, clear answers to common questions.',
    faqLink: 'Visit FAQ',
  },

  faq: {
    title: 'FAQ',
    metaDescription:
      'Answers to common questions about Earnest Gumiho Korean ginseng powder: ingredients, serving, storage, and ordering.',
    ogTitle: 'Frequently Asked Questions | Earnest Gumiho',
    heading: 'Frequently<br />asked questions',
  },

  blogIndex: {
    title: 'Recipes & Learning',
    metaDescription:
      'Ginseng latte, iced latte, and slush recipes made with Earnest Gumiho Korean ginseng powder, plus guides to the history and benefits of Korean ginseng.',
    ogTitle: 'Ginseng Recipes | Earnest Gumiho',
    heading: 'Ginseng Recipes',
    subTitle:
      'Creamy lattes, refreshing iced drinks, and our favorite slush: simple ways to enjoy Earnest Gumiho ginseng powder every day.',
    insightsHeading: 'Learn About Korean Ginseng',
    insightsSubTitle:
      'Discover the history, benefits, and craftsmanship behind Korean ginseng from Geumsan.',
    noPosts: 'No recipes yet. Check back soon.',
    noInsights: 'No articles yet. Check back soon.',
  },

  productsIndex: {
    title: 'Products',
    metaDescription:
      'Shop Earnest Gumiho Korean ginseng powders: our classic 4-year-old Geumsan ginseng with yam, and Lululala Ginseng Powder with fish collagen peptides and hyaluronic acid.',
    ogTitle: 'Korean Ginseng Powder | Earnest Gumiho',
    heading: 'Products',
    subTitle:
      'Genuine Korean ginseng crafted for your daily routine: our classic ginseng powder, and Lululala Ginseng Powder with fish collagen peptides and hyaluronic acid.',
    customerStories: 'Customer Stories',
    testimonials: {
      title: 'What Our Customers Say',
    },
    stats: {
      title: 'Why Choose Earnest Gumiho?',
      subTitle:
        'Bring the best of Korean tradition to your table with ginseng powder where great taste meets natural wellness.',
      benefits: [
        'Genuine 4-year-old Korean ginseng, harvested at peak maturity.',
        'Sourced and manufactured in Geumsan, the capital of Korean ginseng.',
        'No added chemicals, sugar, or artificial ingredients.',
      ],
    },
  },

  /** Locale-specific JSON data (already the good pattern; kept as-is). */
  data: { faqs, features },
};
