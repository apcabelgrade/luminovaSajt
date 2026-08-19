'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { Dictionary, Locale } from '@/lib/content';

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const other: Locale = locale === 'en' ? 'sr' : 'en';
  const switchedPath = pathname.replace(`/${locale}`, `/${other}`) || `/${other}`;

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  // Close menus when the route changes.
  useEffect(() => {
    closeAll();
  }, [pathname]);

  // Click outside and Escape close the services panel.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={`/${locale}`} className="site-header__logo" onClick={closeAll}>
          <img
            src="/brand/lockup-trimmed.png"
            alt="MaLa Luminova Partners"
            width={1380}
            height={369}
          />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? dict.nav.menuClose : dict.nav.menuOpen}
        </button>

        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
          <div
            className="nav-drop"
            ref={dropRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="site-nav__link nav-drop__trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              {dict.nav.services}
              <svg
                className={servicesOpen ? 'nav-drop__caret is-open' : 'nav-drop__caret'}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                aria-hidden="true"
              >
                <polyline
                  points="1,1 5,5 9,1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div className="nav-drop__panel">
                {dict.services4.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/services/${s.slug}`}
                    className="nav-drop__item"
                    onClick={closeAll}
                  >
                    <span className="nav-drop__numeral">{s.numeral}.</span>
                    <span>{s.name}</span>
                  </Link>
                ))}
                <Link
                  href={`/${locale}#services`}
                  className="nav-drop__all"
                  onClick={closeAll}
                >
                  {dict.servicePage.allServices} <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}
          </div>
          <Link href={`/${locale}#about`} className="site-nav__link" onClick={closeAll}>
            {dict.nav.about}
          </Link>
          <Link href={`/${locale}#contact`} className="site-nav__link" onClick={closeAll}>
            {dict.nav.contact}
          </Link>
          <div className="lang-switch" aria-label={dict.nav.langLabel}>
            <Link href={locale === 'en' ? pathname : switchedPath} aria-current={locale === 'en'} hrefLang="en" onClick={closeAll}>
              EN
            </Link>
            <span aria-hidden="true">·</span>
            <Link href={locale === 'sr' ? pathname : switchedPath} aria-current={locale === 'sr'} hrefLang="sr-Latn" onClick={closeAll}>
              SR
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
