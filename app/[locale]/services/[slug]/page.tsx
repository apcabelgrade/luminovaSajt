import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FramedPhoto from '@/components/FramedPhoto';
import { getDictionary, isLocale, type Locale } from '@/lib/content';

/** User-supplied engraving plates (public/engravings/), shown exactly as delivered. */
const ENGRAVINGS: Record<string, string> = {
  'financial-advisory': 'service-assessment.png',
  'ma-transactions': 'service-structuring.png',
  'business-transformation': 'service-coordination.png',
  digitalisation: 'service-locations.png',
};

export const dynamicParams = false;

export function generateStaticParams() {
  // Slugs are shared across locales.
  return getDictionary('en').services4.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const service = dict.services4.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — MaLa Luminova Partners`,
    description: service.short,
    alternates: {
      languages: {
        en: `/en/services/${slug}`,
        'sr-Latn': `/sr/services/${slug}`,
      },
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const service = dict.services4.find((s) => s.slug === slug);
  if (!service) notFound();
  const hasProse = service.paragraphs.length > 0;

  return (
    <>
      <section className="service-hero">
        <div className="container">
          <Link href={`/${locale}#services`} className="service-hero__crumb">
            ← {dict.servicePage.allServices}
          </Link>
          {/* Memorandum header: the inscription carries the left field, the
              opening statement stands in the right — the page reads across
              the full facade rather than hugging one edge. */}
          <div className="service-hero__spread">
            <div className="service-hero__identity">
              <p className="kicker kicker--start">
                {dict.servicePage.kicker} · {service.numeral}
              </p>
              <h1 className="inscription service-hero__title">{service.name}</h1>
            </div>
            <p className="service-hero__intro">{service.intro}</p>
          </div>
        </div>
      </section>

      <div className="container">
        <hr className="cornice" />
      </div>

      <section className="section service-brief">
        <div className="container">
          <div className={hasProse ? 'brief' : 'brief brief--plate-only'}>
            {hasProse && (
              <div className="brief-prose">
                {service.paragraphs.map((paragraph) => (
                  <p className="brief-prose__para" key={paragraph.slice(0, 48)}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <div className="brief-exhibit">
              <FramedPhoto
                photo={service.photo}
                placeholderTitle={dict.exhibit.placeholderTitle}
                placeholderHint={dict.exhibit.placeholderHint}
              />
            </div>
          </div>

          {/* The engraving plate closes the storey: a landscape drawing wants
              width, and it is the page's signature image. Shown exactly as
              delivered. */}
          <div className="brief-plate">
            <img
              src={`/engravings/${ENGRAVINGS[service.slug]}`}
              alt={`${dict.servicePage.engravingAlt} — ${service.name}`}
              width={1800}
              height={1200}
            />
          </div>
        </div>
      </section>

      <section className="section section--stone service-cta">
        <div className="container">
          <h2 className="inscription service-cta__title">{dict.servicePage.ctaHeading}</h2>
          <p className="service-cta__body">{dict.servicePage.ctaBody}</p>
          <Link href={`/${locale}#contact`} className="btn btn-plaque">
            {dict.servicePage.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
