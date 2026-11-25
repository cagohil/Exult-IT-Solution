# Exult IT Solution website

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · Motion · deployed on Netlify.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Contact form

`src/app/api/contact/route.ts` sends mail with **nodemailer** through Office 365 SMTP. It checks each submission in this order:

1. Rate limit: 5 submissions per IP per 10 minutes, per server instance.
2. A honeypot field plus a minimum fill time. Bot submissions get a fake success response.
3. A captcha: **Cloudflare Turnstile** when `TURNSTILE_SECRET_KEY` is set. Until then, a server-signed math question is used instead (`/api/contact/challenge/`).
4. Schema validation with zod. Every value is HTML-escaped before it goes into the email.

All credentials come from environment variables. **Never put the SMTP password in code.**

### Environment variables (Netlify: Site configuration → Environment variables)

| Variable | Example | Notes |
| --- | --- | --- |
| `SMTP_HOST` | `smtp.office365.com` | |
| `SMTP_PORT` | `587` | STARTTLS |
| `SMTP_USER` | `admin@exultitsolution.com` | Mailbox that authenticates |
| `SMTP_PASS` | (secret) | Mark as secret in Netlify |
| `CONTACT_TO` | `chirag.gohil@exultitsolution.com` | Comma-separated for several recipients |
| `CONTACT_CC` | | Optional |
| `CONTACT_FROM` | `admin@exultitsolution.com` | Must be a mailbox `SMTP_USER` may send as |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | | From the Cloudflare dashboard → Turnstile |
| `TURNSTILE_SECRET_KEY` | (secret) | |
| `CAPTCHA_SECRET` | random string | Optional; signs the fallback math question |
| `NEXT_PUBLIC_SITE_URL` | `https://exultitsolution.com` | Canonical URLs and the sitemap |

Office 365 note: the sending mailbox needs **Authenticated SMTP** turned on (Microsoft 365 admin → Users → the mailbox → Mail → Manage email apps). If the tenant enforces MFA or Security Defaults, use an app password or allow SMTP AUTH for that mailbox.

### Turnstile setup

1. Go to the Cloudflare dashboard → Turnstile → Add widget.
2. Hostnames: `exultitsolution.com`, `www.exultitsolution.com`, `exultitsolution.netlify.app`, `localhost`.
3. Widget mode: Managed.
4. Put the site key in `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the secret in `TURNSTILE_SECRET_KEY`, then redeploy. The site key is read at build time.

## Deploying to Netlify

`netlify.toml` builds with `npm run build` and uses `@netlify/plugin-nextjs`. That plugin runs the API route as a Netlify Function, so nodemailer works there. No static export is needed.

## Content

The page copy lives in `src/content/*.json`: services, industries, blogs, technologies, clients and testimonials. It was extracted from the previous site, so editing these files changes the pages without touching any components. Legacy URLs (`/services/*/`, `/industry/*/`, `/blogs/*/`) are kept.
