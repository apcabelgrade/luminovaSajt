import Link from 'next/link';
import type { Dictionary, Locale } from '@/lib/content';

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__mark" aria-hidden="true">
              M<span>|</span>L
            </p>
            <p className="site-footer__name">MaLa Luminova Partners</p>
            <p className="site-footer__tagline">{dict.hero.tagline}</p>
          </div>
          <nav aria-label={dict.footer.servicesHeading}>
            <p className="site-footer__heading">{dict.footer.servicesHeading}</p>
            <ul className="site-footer__links">
              {dict.services4.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${locale}/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={dict.footer.firmHeading}>
            <p className="site-footer__heading">{dict.footer.firmHeading}</p>
            <ul className="site-footer__links">
              <li>
                <Link href={`/${locale}#about`}>{dict.nav.about}</Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`}>{dict.nav.contact}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>{dict.footer.rights}</span>
          <span>{dict.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
