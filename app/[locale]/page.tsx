/*
 * DIRECTION CONTRACT — "The Belgrade Banking Hall"
 *
 * THESIS: A Beaux-Arts Belgrade bank palace carved into a light web page;
 * refuses the category's navy-gold template of skyline hero + icon cards.
 *
 * OWN-WORLD: Limestone #FBFAF7 ground; ink-navy Cinzel inscriptions; bronze
 * drawn only as hairlines, plaque frames and fittings; fine-line SVG
 * engravings as imagery; photographs as duotone framed exhibits; zero
 * radius; flat relief; one draw-on gesture.
 *
 * STORY: A prospective client reads the inscription (beyond consulting —
 * partnership), inspects four bronze service plaques, weighs the firm's
 * account of itself against five credibility medallions and named senior
 * advisors, then files a protocol enquiry.
 *
 * FIRST VIEWPORT: Centered portal — keystone crest, kicker, two-line
 * inscription, bronze rule, lede, carved tagline, plaque CTA + ghost CTA,
 * colonnade engraving as the base.
 *
 * FORM: Own grounded direction #5 (Beaux-Arts Belgrade bank architecture),
 * seed key e58ef93d; staging: symmetric portal, engraving draws once.
 */

import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import DrawOnView from '@/components/DrawOnView';
import FramedPhoto from '@/components/FramedPhoto';
import MarketMap from '@/components/MarketMap';
import {
  Colonnade,
  ContactSignature,
  Keystone,
  medallions,
  serviceGlyphs,
} from '@/components/engravings';
import { getDictionary, isLocale, type Locale } from '@/lib/content';
import { notFound } from 'next/navigation';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* ---- Portal ---- */}
      <section className="hero">
        <div className="container">
          <DrawOnView className="hero__keystone">
            <Keystone />
          </DrawOnView>
          <p className="kicker">{dict.hero.kicker}</p>
          <h1 className="inscription hero__title">
            {dict.hero.titleLines[0]}
            <br />
            {dict.hero.titleLines[1]}
          </h1>
          <hr className="cornice hero__rule" />
          <p className="lede hero__lede">{dict.hero.lede}</p>
          <p className="hero__tagline">{dict.hero.tagline}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-plaque">
              {dict.hero.ctaPrimary}
            </a>
            <a href="#services" className="btn btn-ghost">
              {dict.hero.ctaSecondary} <span className="arrow">→</span>
            </a>
          </div>
          <DrawOnView className="hero__colonnade">
            <Colonnade />
          </DrawOnView>
        </div>
      </section>

      {/* ---- Four services as bronze plaques ---- */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__head">
            <p className="kicker kicker--start">{dict.services.kicker}</p>
            <h2 className="inscription section__title">{dict.services.heading}</h2>
            <p className="lede">{dict.services.intro}</p>
          </div>
          <div className="plaque-grid">
            {dict.services4.map((service) => {
              const Glyph = serviceGlyphs[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/${locale}/services/${service.slug}`}
                  className="plaque"
                >
                  <span className="plaque__top">
                    <span className="plaque__numeral">{service.numeral}.</span>
                    <span className="plaque__glyph">
                      <Glyph />
                    </span>
                  </span>
                  <span className="plaque__name">{service.name}</span>
                  <span className="plaque__short">{service.short}</span>
                  <span className="plaque__link">
                    {dict.services.linkLabel} <span className="arrow">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- The Market Map: Belgrade expanding toward the world ---- */}
      <section className="section">
        <div className="container">
          <MarketMap dict={dict} />
        </div>
      </section>

      {/* ---- The hall interior: who we are ---- */}
      <section className="section section--stone" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="kicker kicker--start">{dict.about.kicker}</p>
              <h2 className="inscription section__title">{dict.about.heading}</h2>
              <p className="lede">{dict.about.body[0]}</p>
              {dict.about.body.slice(1).map((paragraph) => (
                <p className="about__para" key={paragraph.slice(0, 48)}>
                  {paragraph}
                </p>
              ))}
              <div className="about-photo">
                <FramedPhoto
                  photo={dict.about.teamPhoto}
                  placeholderTitle={dict.exhibit.placeholderTitle}
                  placeholderHint={dict.exhibit.placeholderHint}
                />
              </div>
            </div>
            <div className="medallion-list">
              <h3 className="inscription medallion-list__heading">
                {dict.about.pillarsHeading}
              </h3>
              {dict.about.pillars.map((pillar, i) => {
                const Medallion = medallions[i];
                return (
                  <div className="medallion" key={pillar.title}>
                    <DrawOnView className="medallion__ring">
                      <Medallion />
                    </DrawOnView>
                    <div>
                      <h3 className="medallion__title">{pillar.title}</h3>
                      <p className="medallion__body">{pillar.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Protocol desk ---- */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <p className="kicker kicker--start">{dict.contact.kicker}</p>
              <h2 className="inscription section__title">{dict.contact.heading}</h2>
              <p className="lede">{dict.contact.intro}</p>
              <DrawOnView className="contact-sign">
                <ContactSignature />
              </DrawOnView>
            </div>
            <div className="protocol">
              <ContactForm dict={dict} locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.meta.title, description: dict.meta.description };
}
