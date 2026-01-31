import { Locale } from '../i18n-config';
import { Icons } from '../components/UI/Icons';

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: keyof typeof Icons;
  processSteps: string[];
  faqs: { question: string; answer: string }[];
};

const servicesDe: Service[] = [
  {
    title: 'Finanzen',
    slug: 'finance',
    description: 'Umfassende Finanzplanung und Anlagestrategien.',
    icon: 'finance' as const,
    processSteps: [
      'Erstberatung und Bedarfsanalyse',
      'Entwicklung eines individuellen Finanzplans',
      'Umsetzung und kontinuierliche Überwachung'
    ],
    faqs: [
      {
        question: 'Wie oft sollte ich meinen Finanzplan überprüfen?',
        answer: 'Wir empfehlen vierteljährliche Überprüfungen mit jährlichen umfassenden Aktualisierungen.'
      },
      {
        question: 'Was ist Ihre Anlagephilosophie?',
        answer: 'Wir verfolgen einen evidenzbasierten, langfristigen Anlageansatz.'
      }
    ]
  },
  {
    title: 'Immobilien',
    slug: 'real-estate',
    description: 'Fachkundige Beratung beim Kauf, Verkauf und Management von Immobilien.',
    icon: 'realEstate' as const,
    processSteps: [
      'Immobilienbewertung und Marktanalyse',
      'Strategischer Marketingplan',
      'Verhandlungen und Abschlussprozess'
    ],
    faqs: [
      {
        question: 'Wie bestimmen Sie den Immobilienwert?',
        answer: 'Wir verwenden vergleichende Marktanalysen und lokales Fachwissen.'
      }
    ]
  },
  {
    title: 'Versicherungen',
    slug: 'insurance',
    description: 'Maßgeschneiderte Versicherungslösungen zum Schutz Ihrer Vermögenswerte.',
    icon: 'insurance' as const,
    processSteps: [
      'Risikobewertung',
      'Versicherungsvergleich und Empfehlungen',
      'Laufende Policenverwaltung'
    ],
    faqs: [
      {
        question: 'Wie oft sollte ich meine Versicherungsdeckung überprüfen?',
        answer: 'Jährlich oder nach wichtigen Lebensereignissen.'
      }
    ]
  },
  {
    title: 'Projektbeteiligungen',
    slug: 'project-participation',
    description: 'Strategische Beteiligung an vielversprechenden Projekten für höhere Renditen.',
    icon: 'projects' as const,
    processSteps: [
      'Identifikation von Chancen',
      'Due-Diligence-Prozess',
      'Strukturierung der Investition'
    ],
    faqs: [
      {
        question: 'Welche Arten von Projekten empfehlen Sie typischerweise?',
        answer: 'Wir konzentrieren uns auf nachhaltige Infrastruktur- und Technologieprojekte.'
      }
    ]
  },
  {
    title: 'Anlageberatung',
    slug: 'investment-advice',
    description: 'Ob Sie ein Konto für Ihr Patenkind eröffnen wollen, einen Vermögenstransfer planen oder einfach nur Ihre Finanzen bestmöglich organisieren wollen – ich berate Sie umfassend zu Aktien, Anleihen, Fonds und Derivaten.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Altersvorsorge',
    slug: 'retirement-planning',
    description: 'Ob Sie früher in Rente gehen oder einfach sicher vorsorgen möchten – wir schauen gemeinsam auf Ihr Alterseinkommen und helfen, rechtzeitig die richtigen Schritte zu planen.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Finanzierungen',
    slug: 'financing',
    description: 'Ich begleite Sie bei der Finanzierung von Eigenheim, Kapitalanlagen oder Sanierungsvorhaben wie Photovoltaikanlagen. Schritt für Schritt zur passenden Lösung.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Berufsunfähigkeit',
    slug: 'disability-insurance',
    description: 'Ein unerwarteter Schicksalsschlag kann Ihre Existenz gefährden. Ich zeige Ihnen, wie Sie sich gegen Berufsunfähigkeit finanziell absichern können.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Krankenversicherung',
    slug: 'health-insurance',
    description: 'Die richtige Krankenversicherung ist essenziell. Ich analysiere mit Ihnen Ihre Bedürfnisse und finde einen passenden Tarif.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Versicherungen',
    slug: 'insurances',
    description: 'Ob Haftpflicht, Hausrat oder Rechtsschutz – ich helfe Ihnen, passende Versicherungen auszuwählen, um Personen und Sachwerte optimal zu schützen.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  }
];

const servicesEn: Service[] = [
  {
    title: 'Finance',
    slug: 'finance',
    description: 'Comprehensive financial planning and investment strategies.',
    icon: 'finance' as const,
    processSteps: [
      'Initial consultation and needs analysis',
      'Development of an individual financial plan',
      'Implementation and continuous monitoring'
    ],
    faqs: [
      {
        question: 'How often should I review my financial plan?',
        answer: 'We recommend quarterly reviews with annual comprehensive updates.'
      },
      {
        question: 'What is your investment philosophy?',
        answer: 'We follow an evidence-based, long-term investment approach.'
      }
    ]
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    description: 'Expert advice on buying, selling, and managing real estate.',
    icon: 'realEstate' as const,
    processSteps: [
      'Real estate valuation and market analysis',
      'Strategic marketing plan',
      'Negotiations and closing process'
    ],
    faqs: [
      {
        question: 'How do you determine property value?',
        answer: 'We use comparative market analysis and local expertise.'
      }
    ]
  },
  {
    title: 'Insurance',
    slug: 'insurance',
    description: 'Tailored insurance solutions to protect your assets.',
    icon: 'insurance' as const,
    processSteps: [
      'Risk assessment',
      'Insurance comparison and recommendations',
      'Ongoing policy management'
    ],
    faqs: [
      {
        question: 'How often should I review my insurance coverage?',
        answer: 'Annually or after major life events.'
      }
    ]
  },
  {
    title: 'Project Participation',
    slug: 'project-participation',
    description: 'Strategic participation in promising projects for higher returns.',
    icon: 'projects' as const,
    processSteps: [
      'Identification of opportunities',
      'Due diligence process',
      'Structuring the investment'
    ],
    faqs: [
      {
        question: 'What types of projects do you typically recommend?',
        answer: 'We focus on sustainable infrastructure and technology projects.'
      }
    ]
  },
  {
    title: 'Investment Advice',
    slug: 'investment-advice',
    description: 'Whether opening an account for a godchild, planning wealth transfer, or simply organizing finances perfectly – I advise you comprehensively on stocks, bonds, funds, and derivatives.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Retirement Planning',
    slug: 'retirement-planning',
    description: 'Whether you want to retire early or simply ensure secure provision – we look together at your retirement income and help plan the right steps in time.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Financing',
    slug: 'financing',
    description: 'I accompany you in financing your home, capital investments, or renovation projects like photovoltaic systems. Step by step to the right solution.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Disability Insurance',
    slug: 'disability-insurance',
    description: 'An unexpected stroke of fate can endanger your existence. I show you how to financially secure yourself against occupational disability.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Health Insurance',
    slug: 'health-insurance',
    description: 'The right health insurance is essential. I analyze your needs with you and find a suitable tariff.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Insurances',
    slug: 'insurances',
    description: 'Whether liability, household contents, or legal protection – I help you choose suitable insurances to optimally protect persons and material assets.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  }
];

const servicesRu: Service[] = [
  {
    title: 'Финансы',
    slug: 'finance',
    description: 'Комплексное финансовое планирование и инвестиционные стратегии.',
    icon: 'finance' as const,
    processSteps: [
      'Первичная консультация и анализ потребностей',
      'Разработка индивидуального финансового плана',
      'Внедрение и непрерывный мониторинг'
    ],
    faqs: [
      {
        question: 'Как часто мне следует пересматривать свой финансовый план?',
        answer: 'Мы рекомендуем проводить ежеквартальные обзоры с ежегодными комплексными обновлениями.'
      },
      {
        question: 'Какова ваша инвестиционная философия?',
        answer: 'Мы придерживаемся основанного на фактах долгосрочного инвестиционного подхода.'
      }
    ]
  },
  {
    title: 'Недвижимость',
    slug: 'real-estate',
    description: 'Экспертные консультации по покупке, продаже и управлению недвижимостью.',
    icon: 'realEstate' as const,
    processSteps: [
      'Оценка недвижимости и анализ рынка',
      'Стратегический маркетинговый план',
      'Переговоры и процесс закрытия сделки'
    ],
    faqs: [
      {
        question: 'Как вы определяете стоимость недвижимости?',
        answer: 'Мы используем сравнительный анализ рынка и локальный опыт.'
      }
    ]
  },
  {
    title: 'Страхование',
    slug: 'insurance',
    description: 'Индивидуальные страховые решения для защиты ваших активов.',
    icon: 'insurance' as const,
    processSteps: [
      'Оценка рисков',
      'Сравнение страховок и рекомендации',
      'Текущее управление полисами'
    ],
    faqs: [
      {
        question: 'Как часто мне следует пересматривать свое страховое покрытие?',
        answer: 'Ежегодно или после крупных жизненных событий.'
      }
    ]
  },
  {
    title: 'Проектные инвестиции',
    slug: 'project-participation',
    description: 'Стратегическое участие в перспективных проектах для получения более высокой доходности.',
    icon: 'projects' as const,
    processSteps: [
      'Идентификация возможностей',
      'Процесс комплексной проверки (Due Diligence)',
      'Структурирование инвестиций'
    ],
    faqs: [
      {
        question: 'Какие типы проектов вы обычно рекомендуете?',
        answer: 'Мы ориентируемся на устойчивые инфраструктурные и технологические проекты.'
      }
    ]
  },
  {
    title: 'Инвестиционные консультации',
    slug: 'investment-advice',
    description: 'Хотите ли вы открыть счет для своего крестника, планируете передачу наследства или просто хотите идеально организовать свои финансы – я всесторонне проконсультирую вас по акциям, облигациям, фондам и деривативам.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Пенсионное обеспечение',
    slug: 'retirement-planning',
    description: 'Хотите ли вы выйти на пенсию раньше или просто обеспечить себе надежную старость – мы вместе оценим ваш будущий пенсионный доход и поможем вовремя спланировать правильные шаги.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Финансирование',
    slug: 'financing',
    description: 'Я помогу вам в финансировании вашего дома, капиталовложений или проектов реновации, таких как фотоэлектрические системы. Шаг за шагом к правильному решению.',
    icon: 'finance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Страхование от нетрудоспособности',
    slug: 'disability-insurance',
    description: 'Неожиданный удар судьбы может поставить под угрозу ваше существование. Я покажу вам, как финансово обезопасить себя на случай потери трудоспособности.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Медицинское страхование',
    slug: 'health-insurance',
    description: 'Правильное медицинское страхование имеет важное значение. Я проанализирую ваши потребности вместе с вами и подберу подходящий тариф.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  },
  {
    title: 'Страхование',
    slug: 'insurances',
    description: 'Будь то страхование гражданской ответственности, домашнего имущества или юридическая защита – я помогу вам выбрать подходящие страховки для оптимальной защиты людей и материальных ценностей.',
    icon: 'insurance' as const,
    processSteps: [],
    faqs: []
  }
];

export const getServices = (lang: Locale) => {
  if (lang === 'en') return servicesEn;
  if (lang === 'ru') return servicesRu;
  return servicesDe;
};
