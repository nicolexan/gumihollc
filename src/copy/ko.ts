import faqs from '@data/ko/faqs.json';
import features from '@data/ko/features.json';
import type { PartialCopy } from './index';

/**
 * Korean copy table. Keys match `en` (see `PartialCopy`); anything missing
 * here falls back to English. Brand names (Earnest Gumiho, Gumiho LLC)
 * stay in English to match the logo and packaging.
 */
export const ko: PartialCopy = {
  site: {
    description:
      'Earnest Gumiho는 대한민국 금산의 4년근 고려인삼을 여러분의 식탁으로 전합니다. 마와 블렌딩한 순수 인삼 파우더로 라떼와 쉐이크를 즐겨 보세요. 설탕과 화학 첨가물을 넣지 않았습니다.',
    descriptionShort: '대한민국 금산에서 온 프리미엄 4년근 고려인삼 파우더.',
    ogTitle: 'Earnest Gumiho: 금산 고려인삼',
    ogDescription:
      '자연의 비밀을 발견하세요. 활력과 집중, 건강을 위한 인삼. Earnest Gumiho 인삼 파우더는 대한민국 금산에서 재배한 정품 4년근 고려인삼으로 만듭니다.',
  },

  layout: {
    skipToContent: '본문으로 건너뛰기',
    changeLanguage: '언어 변경',
    toggleNavigation: '메뉴 열기/닫기',
    darkTheme: '다크 모드',
    lightTheme: '라이트 모드',
    toggleTheme: '테마 변경',
  },

  nav: {
    labels: {
      home: '홈',
      products: '제품',
      about: '브랜드 스토리',
      blog: '레시피',
      faq: '자주 묻는 질문',
      contact: '문의하기',
    },
    footer: {
      sectionTitles: {
        shop: '쇼핑',
        company: '회사',
      },
      links: {
        products: '제품 보기',
        amazon: '아마존에서 구매',
        recipes: '레시피',
        about: '브랜드 스토리',
        blog: '블로그',
        faq: '자주 묻는 질문',
        contact: '문의하기',
      },
      tagline: '대한민국 금산에서 온 최고 품질의 인삼',
      getInTouch: '연락처',
      kakaoTalk: '카카오톡',
      rightsReserved: 'All rights reserved.',
    },
  },

  banner: {
    dismiss: '닫기',
    region: '안내 배너',
  },

  blog: {
    readMore: '레시피 보기',
    relatedArticles: '다른 레시피',
    ogSection: '레시피',
  },

  insights: {
    readMore: '더 읽기',
    tableOfContents: '목차:',
    ogSection: '인삼 이야기',
  },

  products: {
    ogSection: '고려인삼',
    tabs: '탭',
  },

  notFound: {
    title: '페이지를 찾을 수 없습니다',
    subTitle: '저희도 가끔은 길을 잃어요.',
    content: '찾으시는 페이지가 존재하지 않습니다. 다시 길을 찾아 드릴게요.',
    goHome: '홈으로',
    goBack: '뒤로 가기',
  },

  home: {
    banner: {
      title: '베스트셀러 인삼 파우더를 만나 보세요',
      btn: '아마존에서 보기',
    },
    hero: {
      title:
        '<span class="text-pink-500 dark:text-pink-300">Earnest Gumiho</span>와 함께 자연의 비밀을 발견하세요',
      subTitle:
        '대한민국 금산에서 온 최고 품질의 인삼. 활력과 집중, 건강을 위한 인삼을 매일의 라떼로 즐겨 보세요.',
      primaryBtn: '인삼 파우더 보기',
      secondaryBtn: '레시피 보기',
      imageAlt: '따뜻한 인삼 라떼와 아이스 인삼 라떼, 그리고 수삼 한 뿌리',
    },
    featuresGeneral: {
      title: '고려인삼의 효능',
      subTitle:
        '고려인삼(Panax ginseng)은 수백 년 동안 한국의 문화와 전통 속에 함께해 온 귀한 뿌리입니다. 주요 활성 성분인 진세노사이드는 전반적인 건강과 활력을 돕는 것으로 알려져 있습니다.',
      imageAlt: '전통 사찰에서 내려다본 한국의 푸른 산',
    },
    featuresNavs: {
      title:
        '<span class="text-pink-500 dark:text-pink-300">금산</span>의 밭에서 여러분의 식탁까지.',
      tabs: {
        origin: {
          heading: '금산에서 재배',
          content:
            '금산은 최고 품질의 인삼으로 전국에 이름난 곳입니다. 수백 년의 전통과 정성 어린 재배가 만나는 금산의 가장 비옥하고 믿을 수 있는 농가에서 인삼을 직접 공급받습니다.',
          alt: '인삼의 고장, 대한민국 금산',
        },
        harvest: {
          heading: '4년근 수확',
          content:
            '가장 알맞게 자란 시기에 수확한 정품 4년근 고려인삼을 사용해 깊고 진한 맛과 풍부한 천연 진세노사이드를 담았습니다.',
          alt: '금산 농가에서 갓 수확한 인삼',
        },
        purity: {
          heading: '인공 첨가물 무첨가',
          content:
            '금산에서 제조해 미국으로 직접 수입합니다. 화학 첨가물, 설탕, 인공 원료를 넣지 않았습니다. 부드러운 맛과 식감을 위해 마와 블렌딩한 인삼 그대로입니다.',
          alt: '흰 배경 위 Earnest Gumiho 인삼 파우더 한 스푼',
        },
      },
    },
    testimonials: {
      title: '고객 후기',
      subTitle:
        '인삼 라떼, 쉐이크, 슬러시까지. 고객들이 Earnest Gumiho를 즐기는 방법을 소개합니다.',
      // Translated from the customer's original English review.
      quotes: [
        {
          content:
            '이 파우더를 매일 먹기 시작한 뒤로 금세 아침 필수품이 되었습니다. 오후만 되면 자주 피곤했던 저에게 카페인 크래시 없는 깔끔한 에너지원을 찾은 건 정말 반가운 일이었어요. 개별 포장이 특히 편리합니다. 5g 스틱 하나를 가방에 넣어 두면 따뜻한 물에 타거나 운동 후 스무디에 섞어 어디서든 간편하게 먹을 수 있어요. 인삼 특유의 흙내음과 살짝 쌉쌀한 맛이 있지만, 마가 들어가 맛이 부드러워져 생각보다 훨씬 순하고 먹기 좋습니다. 꾸준히 먹다 보니 체력과 집중력이 은근하지만 꾸준히 좋아지는 게 느껴졌어요. 긴 업무 시간 동안에도 확실히 덜 지치고, 워낙 간편해서 빠뜨리는 날이 없습니다. 번거롭지 않은 방법으로 자연스럽게 활력을 챙기고 싶은 분께 꼭 추천하고 싶은 제품입니다.',
          author: 'Mike',
          role: '아마존 구매 인증 고객',
        },
      ],
      statistics: [
        { count: '4년', description: '가장 알맞게 자란 뒤 수확' },
        { count: '100%', description: '금산산 고려인삼' },
        { count: '0g', description: '설탕·화학 첨가물·인공 원료 무첨가' },
        { count: '10g', description: '이면 부드러운 12oz 라떼 한 잔 완성' },
      ],
    },
    faqTitle: '자주 묻는<br />질문',
  },

  about: {
    title: '브랜드 스토리',
    metaDescription:
      'Gumiho LLC는 대한민국 금산의 믿을 수 있는 농가에서 온 프리미엄 정품 고려인삼을 미국에 전합니다. 저희의 사명과 인삼 파우더가 만들어지는 과정을 소개합니다.',
    ogTitle: '브랜드 스토리 | Earnest Gumiho',
    intro: {
      title: '전통과 품질이 만나는 곳',
      subTitle:
        'Gumiho LLC에 오신 것을 환영합니다. 저희는 한국에서 가장 비옥하고 믿을 수 있는 금산의 농가에서 직접 공급받은 프리미엄 고려인삼 제품을 전문으로 합니다. 품질에 대한 저희의 열정은 활력과 회복력, 균형의 상징으로 세계적으로 사랑받아 온 고려인삼의 오랜 전통에 대한 깊은 존중에서 시작됩니다.',
      cta: '인삼 파우더 보기',
    },
    articles: {
      mission: {
        title: '우리의 사명',
        subTitle:
          '저희의 사명은 간단합니다. 여러분의 건강과 웰빙을 위해 최고 품질의 정품 고려인삼 제품을 전하는 것입니다. 저희가 선보이는 모든 인삼에는 순수함, 진정성, 탁월함에 대한 약속이 담겨 있어 자연이 주는 가장 좋은 것만을 받아 보실 수 있습니다.',
        imageAlts: [
          '금산 농가에서 수확한 인삼',
          '금산 농가에서 갓 수확한 또 다른 인삼',
        ],
      },
      geumsan: {
        title: '금산에 뿌리를 두다',
        subTitle:
          '금산은 고려인삼의 수도로 알려진 곳입니다. 금산의 토양과 기후, 그리고 대대로 이어진 재배 노하우가 비교할 수 없는 품질의 인삼을 만들어 냅니다. 그래서 모든 Earnest Gumiho 제품은 금산에서 시작합니다.',
        imageAlts: ['대한민국 금산의 인삼 기념탑'],
      },
      manufacturing: {
        title: '정성껏 만들고, 직접 수입합니다',
        subTitle:
          '저희 인삼 제품은 수백 년의 전통과 첨단 기술이 어우러진 금산에서 원료를 공급받고 제조합니다. 화학 첨가물, 설탕, 인공 원료 없이 인삼 본연의 효능과 맛을 그대로 지키기 위해 미국으로 직접 수입합니다.',
        imageAlts: [
          '금산에서 제조 중인 인삼 파우더',
          '배송을 위해 포장된 Earnest Gumiho 인삼',
        ],
      },
      journey: {
        title: '더 건강한 삶을 향한 여정',
        subTitle:
          '저희는 고려인삼이 삶을 풍요롭게 하고, 균형 잡힌 생활을 돕고, 자연이 주는 선물과 더 가까워지게 한다고 믿습니다. 오랫동안 인삼을 즐겨 오신 분도, 처음 인삼을 접하시는 분도 믿을 수 있는 제품과 함께 안내해 드리겠습니다.',
        imageAlts: ['Earnest Gumiho 파우더로 만든 아이스 인삼 라떼'],
        cta: '레시피 보기',
      },
    },
  },

  contact: {
    title: '문의하기',
    metaDescription:
      '고려인삼 파우더, 도매, 주문에 대해 궁금한 점이 있으신가요? 이메일, 카카오톡, 인스타그램으로 Gumiho LLC에 문의해 주세요.',
    ogTitle: '문의하기 | Earnest Gumiho',
    heading: '문의하기',
    subTitle:
      '인삼, 도매, 주문에 대해 궁금한 점이 있으신가요? 언제든지 연락 주세요.',
    emailHeading: '이메일',
    emailContent: '글로 문의하시는 게 편하신가요? 이메일을 보내 주세요.',
    kakaoHeading: '카카오톡',
    kakaoContent: '카카오톡으로 메시지를 보내 주세요.',
    instagramHeading: '인스타그램',
    instagramContent: '레시피와 새로운 소식을 확인해 보세요.',
    faqHeading: '자주 묻는 질문',
    faqContent: '자주 묻는 질문에서 빠르고 명확한 답변을 확인해 보세요.',
    faqLink: '자주 묻는 질문 보기',
  },

  faq: {
    title: '자주 묻는 질문',
    metaDescription:
      'Earnest Gumiho 고려인삼 파우더에 대해 자주 묻는 질문: 원재료, 섭취 방법, 보관, 구매 안내.',
    ogTitle: '자주 묻는 질문 | Earnest Gumiho',
    heading: '자주 묻는<br />질문',
  },

  blogIndex: {
    title: '레시피 & 인삼 이야기',
    metaDescription:
      'Earnest Gumiho 고려인삼 파우더로 만드는 인삼 라떼, 아이스 라떼, 슬러시 레시피와 고려인삼의 역사와 효능에 대한 이야기.',
    ogTitle: '인삼 레시피 | Earnest Gumiho',
    heading: '인삼 레시피',
    subTitle:
      '부드러운 라떼, 시원한 아이스 음료, 저희가 가장 좋아하는 슬러시까지. Earnest Gumiho 인삼 파우더를 매일 간편하게 즐기는 방법입니다.',
    insightsHeading: '고려인삼 알아보기',
    insightsSubTitle: '금산 고려인삼의 역사와 효능, 그리고 정성을 알아보세요.',
    noPosts: '아직 레시피가 없습니다. 곧 찾아올게요.',
    noInsights: '아직 글이 없습니다. 곧 찾아올게요.',
  },

  productsIndex: {
    title: '제품',
    metaDescription:
      'Earnest Gumiho 고려인삼 파우더를 만나 보세요. 마와 블렌딩한 클래식 금산 4년근 인삼 파우더, 그리고 피쉬 콜라겐 펩타이드와 히알루론산을 담은 룰루랄라 인삼 파우더.',
    ogTitle: '고려인삼 파우더 | Earnest Gumiho',
    heading: '제품',
    subTitle:
      '매일을 위한 정품 고려인삼: 클래식 인삼 파우더, 그리고 피쉬 콜라겐 펩타이드와 히알루론산을 담은 룰루랄라 인삼 파우더.',
    customerStories: '고객 후기',
    testimonials: {
      title: '고객 후기',
    },
    stats: {
      title: '왜 Earnest Gumiho일까요?',
      subTitle:
        '맛과 자연의 건강함이 만나는 인삼 파우더로 한국의 전통을 식탁에서 만나 보세요.',
      benefits: [
        '가장 알맞게 자란 시기에 수확한 정품 4년근 고려인삼.',
        '고려인삼의 수도, 금산에서 원료를 공급받고 제조.',
        '화학 첨가물, 설탕, 인공 원료 무첨가.',
      ],
    },
  },

  data: { faqs, features },
};
