'use client';

import { useState } from 'react';
import type { Dictionary, Locale } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Web3Forms delivers inquiries to the address its access key was issued
 * to. The submission must come from the visitor's browser — the service
 * rejects server-to-server calls on this plan — so the key is public by
 * design and is restricted by domain in the Web3Forms dashboard.
 */
const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.contact;
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get('name') ?? '').trim(),
      organization: String(data.get('organization') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      interest: String(data.get('interest') ?? ''),
      message: String(data.get('message') ?? '').trim(),
      // Hidden from real visitors; only a bot fills it in.
      botcheck: String(data.get('botcheck') ?? ''),
      locale,
    };

    const nextErrors: typeof errors = {};
    if (!values.name) nextErrors.name = c.validation.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = c.validation.email;
    if (!values.message) nextErrors.message = c.validation.message;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!ACCESS_KEY) {
      console.error('NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — inquiry not sent.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: values.interest
            ? `MaLa Luminova — ${values.interest} — ${values.name}`
            : `MaLa Luminova — ${values.name}`,
          from_name: 'MaLa Luminova Partners',
          // Replying to the notification reaches the inquirer directly.
          replyto: values.email,
          name: values.name,
          email: values.email,
          organization: values.organization || '—',
          interest: values.interest || '—',
          message: values.message,
          language: locale,
          botcheck: values.botcheck,
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !result?.success) throw new Error(`Web3Forms ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-status" role="status">
        <p className="form-status__title">{c.successTitle}</p>
        <p>{c.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — off-screen rather than display:none so bots that skip
          hidden fields still fill it. Never announced or focusable. */}
      <input
        type="text"
        name="botcheck"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field-row">
        <div className="field">
          <label className="field__label" htmlFor="contact-name">
            {c.fields.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <p className="field__error" id="contact-name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label className="field__label" htmlFor="contact-organization">
            {c.fields.organization}
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label className="field__label" htmlFor="contact-email">
            {c.fields.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <p className="field__error" id="contact-email-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label className="field__label" htmlFor="contact-interest">
            {c.fields.interest}
          </label>
          <select id="contact-interest" name="interest" defaultValue={c.interestGeneral}>
            <option value={c.interestGeneral}>{c.interestGeneral}</option>
            {dict.services4.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="contact-message">
          {c.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p className="field__error" id="contact-message-error">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div className="form-status form-status--error" role="alert">
          <p>{c.error}</p>
        </div>
      )}

      <div>
        <button type="submit" className="btn btn-plaque" disabled={status === 'submitting'}>
          {status === 'submitting' ? c.submitting : c.submit}
        </button>
      </div>
    </form>
  );
}
