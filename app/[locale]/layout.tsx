import type { Metadata } from 'next';
import { Cinzel, Libre_Franklin } from 'next/font/google';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary, isLocale, locales, type Locale } from '@/lib/content';
import '../globals.css';

const cinzel = Cinzel({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
});

const franklin = Libre_Franklin({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL('https://luminovapartners.com'),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: '/en/', 'sr-Latn': '/sr/' },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html lang={locale === 'sr' ? 'sr-Latn' : 'en'} className={`${cinzel.variable} ${franklin.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          {dict.nav.skip}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
