import Link from 'next/link';
import { Keystone } from '@/components/engravings';

/**
 * not-found receives no params, so this page speaks both languages —
 * the visitor picks their door back into the building.
 */
export default function NotFound() {
  return (
    <section className="hero not-found">
      <div className="container">
        <div className="hero__keystone engrave">
          <Keystone />
        </div>
        <p className="kicker">404</p>
        <h1 className="inscription hero__title">Page not found</h1>
        <hr className="cornice hero__rule" />
        <p className="lede hero__lede">
          The page you are looking for does not exist. · Stranica koju tražite ne postoji.
        </p>
        <div className="hero__actions">
          <Link href="/en" className="btn btn-plaque">
            Return to the main page
          </Link>
          <Link href="/sr" className="btn btn-ghost">
            Nazad na početnu <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
