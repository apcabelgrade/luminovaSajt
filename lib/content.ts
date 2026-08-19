export const locales = ['en', 'sr'] as const;
export type Locale = (typeof locales)[number];

export interface ServicePhoto {
  /** Filename expected under /public/photos/ — the placeholder frame names it until supplied. */
  file: string;
  caption: string;
  alt: string;
}

export interface Service {
  slug: string;
  /** Roman numeral, memorandum-style. */
  numeral: string;
  name: string;
  /** One line for the plaque card, drawn from the service's own opening. */
  short: string;
  /** Opening paragraph — the lede on the service page. */
  intro: string;
  /** The remaining prose of the brief, in order. */
  paragraphs: string[];
  photo: ServicePhoto;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    services: string;
    about: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
    skip: string;
    langLabel: string;
  };
  hero: {
    kicker: string;
    titleLines: [string, string];
    lede: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    kicker: string;
    heading: string;
    intro: string;
    linkLabel: string;
  };
  exhibit: {
    placeholderTitle: string;
    placeholderHint: string;
    markerLabel: string;
  };
  panorama: ServicePhoto;
  map: {
    caption: string;
    aria: string;
    cities: {
      belgrade: string;
      vienna: string;
      london: string;
      frankfurt: string;
      milan: string;
      newYork: string;
      dubai: string;
      istanbul: string;
    };
  };
  about: {
    kicker: string;
    heading: string;
    /** The firm's account of itself, one paragraph per entry. */
    body: string[];
    /** Heading over the credibility pillars. */
    pillarsHeading: string;
    pillars: { title: string; body: string }[];
    teamHeading: string;
    team: { name: string; role: string }[];
    teamPhoto: ServicePhoto;
  };
  contact: {
    kicker: string;
    heading: string;
    intro: string;
    fields: {
      name: string;
      organization: string;
      email: string;
      interest: string;
      message: string;
    };
    interestGeneral: string;
    submit: string;
    submitting: string;
    successTitle: string;
    success: string;
    error: string;
    validation: { name: string; email: string; message: string };
  };
  servicePage: {
    kicker: string;
    allServices: string;
    engravingAlt: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
  footer: {
    location: string;
    servicesHeading: string;
    firmHeading: string;
    rights: string;
  };
  services4: Service[];
}

const en: Dictionary = {
  meta: {
    title: 'MaLa Luminova Partners — Financial Advisory, M&A and Business Transformation',
    description:
      'An independent advisory firm specializing in financial consulting, M&A, restructuring and business transformation — senior expertise in finance, transactions and transformation.',
  },
  nav: {
    services: 'Services',
    about: 'About us',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skip: 'Skip to content',
    langLabel: 'Jezik: srpski',
  },
  hero: {
    kicker: 'Financial Advisory · M&A · Transformation',
    titleLines: ['Luminova — Beyond Consulting.', 'Partnership.'],
    lede: 'A partner in financial and business decisions — a strategic ally in finance, transactions and business transformation, from the first conversation to a partnership built on delivered results.',
    tagline: 'Financial Insight. Strategic Structure. Capital Access.',
    ctaPrimary: 'Begin a conversation',
    ctaSecondary: 'Explore our services',
  },
  services: {
    kicker: 'What we do',
    heading: 'Four services, one partnership',
    intro:
      'Partnering with you to understand your business needs and tailor opportunities to meet your strategic goals.',
    linkLabel: 'Read the brief',
  },
  exhibit: {
    placeholderTitle: 'Photograph forthcoming',
    placeholderHint: 'Place the file at',
    markerLabel: 'Image',
  },
  panorama: {
    file: 'belgrade-panorama',
    caption: 'Belgrade — the market we work in',
    alt: 'Panorama of Belgrade',
  },
  map: {
    caption: 'Belgrade — connecting the Serbian market with international capital',
    aria: 'Engraved map: arcs connect Belgrade with international capital centers',
    cities: {
      belgrade: 'Belgrade',
      vienna: 'Vienna',
      london: 'London',
      frankfurt: 'Frankfurt',
      milan: 'Milan',
      newYork: 'New York',
      dubai: 'Dubai',
      istanbul: 'Istanbul',
    },
  },
  about: {
    kicker: 'Who we are',
    heading: 'Senior advisory in finance and transactions',
    body: [
      'We are an independent advisory firm specializing in financial consulting, M&A, restructuring and business transformation. Our expertise is built on more than twenty years of senior-level experience gained through leading roles in corporate finance, board governance and complex transaction processes.',
      'The team combines board-level governance insight, financial leadership at the most senior executive (C-level) and the working standards of a private equity environment.',
      'Our experience was built inside companies, through real operational and financial challenges — the kind conventional consultants often fail to recognise. We are hands-on: everything we advise, we have already implemented in practice ourselves.',
      'Before establishing its own practice, the team spent more than two decades in senior executive positions at international corporations across the Adriatic region, as well as in leading local companies. That experience encompasses leadership of the finance function, the design and reorganisation of business processes, the management of reporting and financial structures, and the execution of complex transaction processes — to the working standards institutional investors require. That experience includes major transactions in Serbia, among them acquisition processes in technology, media, real estate and hospitality.',
    ],
    pillarsHeading: 'A reliable partner',
    pillars: [
      {
        title: 'Multi-entity and multi-country experience and responsibility',
        body: 'More than twenty years across transactions, restructurings and transformations — in several industries and several countries, including leadership of finance in regulated and complex corporate structures.',
      },
      {
        title: 'Supervisory board and C-level experience',
        body: 'The team’s experience includes chairing audit committees, independent non-executive membership of the boards of regulated financial institutions, and long-standing C-level roles — bringing a deep understanding of regulatory requirements, internal controls, reporting integrity and risk management.',
      },
      {
        title: 'Transaction experience',
        body: 'M&A processes for large corporate groups, conducted alongside investment banks, private equity funds and legal teams.',
      },
      {
        title: 'The highest analytical standards',
        body: 'A foundation in Big 4 assurance and work in multinational corporations have shaped analytical precision, standardised processes and a quality of reporting that enables decisions based on the right data.',
      },
      {
        title: 'Continuity through implementation',
        body: 'From diagnosis to full implementation — with long-term support to management and owners where required, ensuring sustainability, control and measurable results.',
      },
    ],
    [
      
    ],
    teamPhoto: {
      file: 'office-team',
      caption: 'The team at work',
      alt: 'The MaLa Luminova Partners team',
    },
  },
  contact: {
    kicker: 'Contact',
    heading: 'Begin a conversation',
    intro: 'Enquiries are directed to senior advisors and treated in confidence.',
    fields: {
      name: 'Full name',
      organization: 'Company (optional)',
      email: 'Email',
      interest: 'Area of interest',
      message: 'Message',
    },
    interestGeneral: 'General enquiry',
    submit: 'Submit enquiry',
    submitting: 'Submitting…',
    successTitle: 'Enquiry received',
    success: 'Thank you — your enquiry has been received. We will respond promptly.',
    error: 'Something went wrong and your message was not sent. Please try again.',
    validation: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      message: 'Please write a short message.',
    },
  },
  servicePage: {
    kicker: 'Service brief',
    allServices: 'All services',
    engravingAlt: 'Engraving',
    ctaHeading: 'Begin a conversation',
    ctaBody: 'Enquiries are directed to senior advisors and treated in confidence.',
    ctaButton: 'Begin a conversation',
  },
  footer: {
    location: 'Belgrade, Serbia',
    servicesHeading: 'Services',
    firmHeading: 'The firm',
    rights: '© 2026 MaLa Luminova Partners. All rights reserved.',
  },
  services4: [
    {
      slug: 'financial-advisory',
      numeral: 'I',
      name: 'Financial Advisory & Support',
      short:
        'The strategies and actions through which value is created, protected and realized — across industries and situations.',
      intro:
        'We advise clients on the strategies and actions through which value is created, protected and realized — across industries and situations. Services include strategic planning, optimisation of the financial structure, liquidity management, capital planning and support in the decisions that shape long-term stability and growth.',
      paragraphs: [
        'We also provide operational services in financial modelling, accounting and compliance, tax and IFRS reporting, including the preparation and consolidation of financial statements for multi-entity and multi-country structures. Behind every recommendation stand rigorous analysis and documentation, to the working standard institutional investors require.',
      ],
      photo: {
        file: 'service-financial-advisory',
        caption: 'Financial advisory',
        alt: 'Financial analysis documents on a desk',
      },
    },
    {
      slug: 'ma-transactions',
      numeral: 'II',
      name: 'M&A Transactions',
      short:
        'Both the sell side and the buy side, through every stage: strategic preparation, valuation, due diligence, structuring and closing.',
      intro:
        'An M&A transaction is a defining moment in a company’s life — a moment when superior advice, discretion and control of the process directly affect value. We lead both the sell side and the buy side through every stage of the transaction: strategic preparation, valuation, due diligence, structuring and closing. We run the process end-to-end, ensuring clear momentum, timely decisions and maximum realized value.',
      paragraphs: [
        'In capital structuring and financing, we shape solutions that support growth and stability — from projections and the optimal financing structure, through to negotiation and closing of arrangements with banks, lenders and investors. We connect companies with the capital and credit sources that enable strategic ambitions and the long-term sustainability of the business.',
      ],
      photo: {
        file: 'service-ma-transactions',
        caption: 'Execution',
        alt: 'Signing of transaction documents',
      },
    },
    {
      slug: 'business-transformation',
      numeral: 'III',
      name: 'Business & Finance Transformation',
      short:
        'The complex financial and organisational challenges of each stage of a company’s development.',
      intro:
        'We guide clients through the complex financial and organisational challenges of each stage of a company’s development — designing and executing the transformation of the finance function, from establishing and reorganising processes and internal controls to reporting and the team that runs it. Business transformation spans the entire business flow, across every function of the company — from procurement and production, through sales and marketing, to human resources and technical operations. The result is an organisation that supports growth and withstands investor scrutiny.',
      paragraphs: [
        'Within business transformation, we also lead value-driven reorganisation: optimising legal entities, asset structures, the operating model and the key parts of the business. We carry out reorganisation for owners themselves — for efficiency, sustainability and a clear structure that supports growth — and, where a transaction is planned, as preparation that raises the company’s attractiveness to investors and the success of the process.',
      ],
      photo: {
        file: 'service-business-transformation',
        caption: 'Transformation in progress',
        alt: 'Work on business processes',
      },
    },
    {
      slug: 'digitalisation',
      numeral: 'IV',
      name: 'Digitalisation of Business',
      short:
        'Assessing whether an established ERP system is required, or applying our own solution tailored to the company’s operations.',
      intro:
        'Digitalisation of the business covers assessing whether an established ERP system is required or, where the company needs it, applying our own solution tailored to its operations. We digitalise and modernise the management of the company’s processes — through to a system that delivers management information in real time and enables decisions based on the right data.',
      paragraphs: [
        'In the digital age, we also support companies in strengthening data protection to advanced cybersecurity standards and in applying artificial intelligence that improves efficiency and supports decision-making.',
      ],
      photo: {
        file: 'service-digitalisation',
        caption: 'Systems and data',
        alt: 'Management information system in use',
      },
    },
  ],
};
const sr: Dictionary = {
  meta: {
    title: 'MaLa Luminova Partners — Finansijsko savetovanje, M&A i poslovna transformacija',
    description:
      'Nezavisna konsultantska kuća specijalizovana za finansijsko savetovanje, M&A, restrukturiranje i poslovnu transformaciju — savetovanje na izvršnom nivou u finansijama, transakcijama i transformaciji.',
  },
  nav: {
    services: 'Usluge',
    about: 'O nama',
    contact: 'Kontakt',
    menuOpen: 'Otvori meni',
    menuClose: 'Zatvori meni',
    skip: 'Preskoči na sadržaj',
    langLabel: 'Language: English',
  },
  hero: {
    kicker: 'Finansijsko savetovanje · M&A · Transformacija',
    titleLines: ['Luminova — Više od konsaltinga.', 'Partnerstvo.'],
    lede: 'Vaš partner u finansijskim i poslovnim odlukama — strateški saradnik u finansijama, transakcijama i transformaciji poslovanja, od prvog razgovora do partnerstva kroz ostvarene rezultate.',
    tagline: 'Finansijski uvid. Strateška struktura. Pristup kapitalu.',
    ctaPrimary: 'Zakažite razgovor',
    ctaSecondary: 'Pogledajte usluge',
  },
  services: {
    kicker: 'Čime se bavimo',
    heading: 'Četiri usluge, jedno partnerstvo',
    intro:
      'U partnerstvu sa vama razumemo potrebe vašeg poslovanja i oblikujemo rešenja koja vode ka vašim strateškim ciljevima.',
    linkLabel: 'Pročitajte više',
  },
  exhibit: {
    placeholderTitle: 'Fotografija u pripremi',
    placeholderHint: 'Dodajte fajl na',
    markerLabel: 'Slika',
  },
  panorama: {
    file: 'belgrade-panorama',
    caption: 'Beograd — tržište na kom radimo',
    alt: 'Panorama Beograda',
  },
  map: {
    caption: 'Beograd — spona srpskog tržišta sa međunarodnim kapitalom',
    aria: 'Gravirana mapa: lukovi povezuju Beograd sa međunarodnim centrima kapitala',
    cities: {
      belgrade: 'Beograd',
      vienna: 'Beč',
      london: 'London',
      frankfurt: 'Frankfurt',
      milan: 'Milano',
      newYork: 'Njujork',
      dubai: 'Dubai',
      istanbul: 'Istanbul',
    },
  },
  about: {
    kicker: 'O nama',
    heading: 'Savetovanje na izvršnom nivou u finansijama i transakcijama',
    body: [
      'Mi smo nezavisna konsultantska kuća specijalizovana za finansijsko savetovanje, M&A, restrukturiranje i poslovnu transformaciju. Naša ekspertiza izgrađena je na više od dvadeset godina iskustva stečenog na najvišim rukovodećim pozicijama — kroz vodeće uloge u korporativnim finansijama, korporativnom upravljanju i kompleksnim transakcionim procesima.',
      'Tim spaja iskustvo upravljanja na nivou odbora, finansijsko vođenje na najvišem izvršnom (C-level) nivou i standarde rada u private equity okruženju.',
      'Naše iskustvo izgrađeno je unutar kompanija, kroz stvarne operativne i finansijske izazove — one koje klasični konsultanti često ne prepoznaju. Mi smo hands-on: sve što savetujemo, već smo i sami sproveli u praksi.',
      'Pre osnivanja sopstvene prakse, više od dvadeset godina provedeno je na visokim izvršnim funkcijama u međunarodnim korporacijama širom Adriatic regije, kao i u vodećim lokalnim kompanijama. To iskustvo obuhvata vođenje finansija, postavljanje i reorganizaciju poslovnih procesa, upravljanje izveštavanjem i finansijskim strukturama, kao i sprovođenje kompleksnih transakcionih procesa — uz standard rada koji zahtevaju institucionalni investitori. Iskustvo obuhvata značajne transakcije u Srbiji, uključujući akvizicione procese u tehnologiji, medijima, nekretninama i hospitality sektoru.',
    ],
    pillarsHeading: 'Pouzdan partner',
    pillars: [
      {
        title: 'Multi-entity i multi-country iskustva i odgovornosti',
        body: 'Preko dvadeset godina rada na transakcijama, restrukturiranjima i transformacijama — u više industrija i više zemalja, uključujući vođenje finansija u regulisanim i kompleksnim korporativnim strukturama.',
      },
      {
        title: 'Iskustvo u nadzornim odborima i na C-level pozicijama',
        body: 'Iskustvo tima obuhvata predsedavanje odborima za reviziju, nezavisno neizvršno članstvo u upravnim i nadzornim odborima regulisanih finansijskih institucija, kao i dugogodišnje C-level uloge — što donosi duboko razumevanje regulatornih zahteva, internih kontrola, integriteta izveštavanja i upravljanja rizicima.',
      },
      {
        title: 'Transakcijsko iskustvo',
        body: 'M&A procesi velikih korporativnih grupa, u saradnji sa investicionim bankama, private equity fondovima i pravnim timovima.',
      },
      {
        title: 'Najviši analitički standardi',
        body: 'Temelj u Big 4 reviziji i rad u multinacionalnim kompanijama oblikovali su analitičku preciznost, standardizovane procese i kvalitet izveštavanja koji omogućavaju donošenje odluka zasnovanih na pravim podacima.',
      },
      {
        title: 'Kontinuitet u primeni',
        body: 'Od dijagnoze do pune implementacije — uz dugoročnu podršku upravi i vlasnicima kada je potrebna, kako bi se obezbedila održivost, kontrola i merljiv rezultat.',
      },
    ],
   
    [
      
    ],
    teamPhoto: {
      file: 'office-team',
      caption: 'Tim na radu',
      alt: 'Tim MaLa Luminova Partners',
    },
  },
  contact: {
    kicker: 'Kontakt',
    heading: 'Zakažite razgovor',
    intro:
      'Upiti stižu direktno do savetnika koji vode angažmane i tretiraju se poverljivo.',
    fields: {
      name: 'Ime i prezime',
      organization: 'Kompanija (opciono)',
      email: 'Email',
      interest: 'Oblast interesovanja',
      message: 'Poruka',
    },
    interestGeneral: 'Opšti upit',
    submit: 'Pošaljite upit',
    submitting: 'Slanje…',
    successTitle: 'Upit je primljen',
    success: 'Hvala — vaš upit je primljen. Odgovorićemo u najkraćem roku.',
    error: 'Došlo je do greške i poruka nije poslata. Pokušajte ponovo.',
    validation: {
      name: 'Unesite ime i prezime.',
      email: 'Unesite ispravnu email adresu.',
      message: 'Napišite kratku poruku.',
    },
  },
  servicePage: {
    kicker: 'Opis usluge',
    allServices: 'Sve usluge',
    engravingAlt: 'Gravura',
    ctaHeading: 'Zakažite razgovor',
    ctaBody: 'Upiti stižu direktno do savetnika koji vode angažmane i tretiraju se poverljivo.',
    ctaButton: 'Zakažite razgovor',
  },
  footer: {
    location: 'Beograd, Srbija',
    servicesHeading: 'Usluge',
    firmHeading: 'Kuća',
    rights: '© 2026 MaLa Luminova Partners. Sva prava zadržana.',
  },
  services4: [
    {
      slug: 'financial-advisory',
      numeral: 'I',
      name: 'Finansijsko savetovanje i podrška',
      short:
        'Strategije i koraci kojima se vrednost stvara, štiti i realizuje — u različitim industrijama i situacijama.',
      intro:
        'Savetujemo klijente o strategijama i koracima kojima se vrednost stvara, štiti i realizuje — u različitim industrijama i situacijama. Usluge uključuju strateško planiranje, optimizaciju finansijske strukture, upravljanje likvidnošću, planiranje kapitala i podršku u donošenju odluka koje utiču na dugoročnu stabilnost i rast.',
      paragraphs: [
        'Pored toga pružamo i operativne usluge u domenu finansijskog modeliranja, računovodstva i compliance-a, poreza i MSFI izveštavanja, uključujući pripremu i konsolidaciju finansijskih izveštaja za multi-entitetske i multi-državne strukture. Iza svake preporuke stoje rigorozna analiza i dokumentacija po standardu rada koji zahtevaju institucionalni investitori.',
      ],
      photo: {
        file: 'service-financial-advisory',
        caption: 'Finansijsko savetovanje',
        alt: 'Dokumenta finansijske analize na stolu',
      },
    },
    {
      slug: 'ma-transactions',
      numeral: 'II',
      name: 'M&A transakcije',
      short:
        'Prodajna i kupovna strana, kroz svaku fazu: strateška priprema, vrednovanje, due diligence, strukturiranje i zatvaranje.',
      intro:
        'M&A transakcija je prelomni trenutak u životu kompanije — trenutak u kojem vrhunski savet, diskrecija i kontrola procesa direktno utiču na vrednost. Vodimo prodajnu i kupovnu stranu kroz svaku fazu transakcije: stratešku pripremu, vrednovanje, due diligence, strukturiranje i zatvaranje. Proces vodimo end-to-end, obezbeđujući jasnu dinamiku, pravovremene odluke i maksimalnu realizovanu vrednost.',
      paragraphs: [
        'U okviru kapitalnog strukturiranja i finansiranja oblikujemo rešenja koja podržavaju rast i stabilnost — od projekcija i optimalne strukture finansiranja, do pregovora i zatvaranja aranžmana sa bankama, kreditorima i investitorima. Povezujemo kompanije sa kapitalnim i kreditnim izvorima koji omogućavaju realizaciju strateških ambicija i dugoročnu održivost poslovanja.',
      ],
      photo: {
        file: 'service-ma-transactions',
        caption: 'Realizacija',
        alt: 'Potpisivanje transakcione dokumentacije',
      },
    },
    {
      slug: 'business-transformation',
      numeral: 'III',
      name: 'Poslovna i finansijska transformacija',
      short:
        'Kompleksni finansijski i organizacioni izazovi u svakoj fazi razvoja kompanije.',
      intro:
        'Vodimo klijente kroz kompleksne finansijske i organizacione izazove u svakoj fazi razvoja kompanije — projektujemo i sprovodimo transformaciju finansijske funkcije, od postavljanja i reorganizacije procesa i internih kontrola do izveštavanja i tima koji ga vodi. Poslovna transformacija obuhvata ceo poslovni tok, kroz sve funkcije kompanije — od nabavke i proizvodnje, preko prodaje i marketinga, do ljudskih resursa i tehničkih službi. Rezultat je organizacija koja podržava rast i izdržava proveru investitora.',
      paragraphs: [
        'U okviru poslovne transformacije vodimo i reorganizaciju usmerenu na vrednost: optimizaciju poslovnih entiteta, strukture imovine, operativnog modela i ključnih delova poslovanja. Reorganizaciju sprovodimo za same vlasnike — radi efikasnosti, održivosti i jasne strukture koja podržava rast — a kada se planira transakcija, i kao pripremu koja podiže atraktivnost kompanije za investitore i uspeh procesa.',
      ],
      photo: {
        file: 'service-business-transformation',
        caption: 'Transformacija u toku',
        alt: 'Rad na poslovnim procesima',
      },
    },
    {
      slug: 'digitalisation',
      numeral: 'IV',
      name: 'Digitalizacija poslovanja',
      short:
        'Procena potrebe za poznatim ERP sistemom ili primena sopstvenog rešenja prilagođenog poslovanju kompanije.',
      intro:
        'Digitalizacija poslovanja obuhvata procenu potrebe za uvođenjem poznatog ERP sistema ili, kada je to kompaniji potrebno, primenu sopstvenog rešenja prilagođenog njenom poslovanju. Digitalizujemo i modernizujemo upravljanje procesima kompanije — sve do uspostavljanja sistema koji pruža upravljačke informacije dostupne u realnom vremenu i omogućava donošenje odluka zasnovanih na pravim podacima.',
      paragraphs: [
        'U doba digitalizacije podržavamo kompanije i kroz jačanje zaštite podataka po naprednim cybersecurity standardima i primenu veštačke inteligencije koja unapređuje efikasnost i podržava donošenje odluka.',
      ],
      photo: {
        file: 'service-digitalisation',
        caption: 'Sistemi i podaci',
        alt: 'Upravljački informacioni sistem u upotrebi',
      },
    },
  ],
};

const dictionaries: Record<Locale, Dictionary> = { en, sr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
