# TasmaFive Solutions – Next.js frontend

Next.js 14 (App Router), plain JavaScript, no CSS framework.

## Run locally
```bash
npm install
cp .env.example .env.local     # then fill the values
npm run dev                    # http://localhost:3000
```
Production: `npm run build && npm start`

## Environment variables (.env.local)
| Variable | Use |
|---|---|
| SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / MAIL_TO | Contact form email (mailbox info@tasmafivesolutions.com) |
| NEXT_PUBLIC_WHATSAPP | WhatsApp number, country code first, no `+` |
| NEXT_PUBLIC_TAWK_PROPERTY_ID / _WIDGET_ID | Tawk.to live chat |
| NEXT_PUBLIC_API_URL | Your backend base URL (auth + payments) |
| NEXT_PUBLIC_CHAT_API | Optional AI chatbot endpoint |

## Where to edit content
- `src/data/services.js` – services, packages, prices
- `src/data/blogs.js` – blog posts
- `src/data/projects.js` – projects (sample entries, replace with real ones)
- `src/data/site.js` – contact details, navigation, India landmarks, worldwide countries, tech list
- `src/components/HeroSlider.js` – home slider text and buttons (illustrations are in `Scenes.js`)
- `private/certs/*.jpg` – certificates (watermarked, served only to signed-in users)

## Backend hooks (for later)
- `POST {API}/auth/login` and `/auth/register` -> `{ token, user: { name, email } }`
- `POST {API}/payments/create-order` `{ packageId, region }` -> `{ url }`
- Route protection: `src/middleware.js` (checks cookie `tf_auth`; verify the token there once you have a backend)

## Hostinger
Use a Node.js plan (Business / Cloud / VPS). Upload, set env variables, run `npm install`, `npm run build`, start command `npm start`.
