# The Wingman – website

One-page bilingual (Icelandic `/`, English `/en/`) site for The Wingman street food truck. Built with [Astro](https://astro.build), content editable through [Pages CMS](https://pagescms.org), hosted on Vercel.

## Local development

```sh
npm install
cp .env.example .env   # add the Web3Forms key
npm run dev            # http://localhost:4321
npm run build          # outputs to dist/
```

## Where things live

| What | File |
| --- | --- |
| Menu, prices, sauces | `src/content/menu.yaml` |
| Upcoming stops / events | `src/content/schedule.yaml` |
| Story, contact, socials, catering text, gallery list | `src/content/site.yaml` |
| Gallery photos | `public/gallery/` |
| Fixed interface text (buttons, headings) | `src/i18n.ts` |
| Colours and fonts | `src/styles/global.css` |
| Fixed design photos (hero, menu, about, find us) | `src/assets/` |
| CMS form definitions | `.pages.yml` |

All content currently in the YAML files is **placeholder** and needs to be replaced with the real menu, prices, locations, phone, email and socials.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo (or run `npx vercel` from this folder).
3. Framework preset should auto-detect **Astro**. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Under **Settings → Environment Variables**, add `PUBLIC_WEB3FORMS_KEY` (see below).
5. Deploy. Every push to `main` (including CMS edits) rebuilds the site automatically.
6. Custom domain later under **Settings → Domains**. If the domain changes, also update `site` in `astro.config.mjs`.

## Catering form (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com), enter the email that should receive catering requests, and copy the access key.
2. Add it as `PUBLIC_WEB3FORMS_KEY` in Vercel (and in `.env` locally).

Without a key, the catering section shows a plain email/phone link instead of the form. Spam is filtered with Web3Forms' hidden `botcheck` field.

## Editing content (for the truck owner)

1. Create a free GitHub account and ask for access to the repo (Settings → Collaborators).
2. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
3. Open the repo. The sidebar has three sections:
   - **Matseðill / Menu** – categories, items, prices, heat level, "sold out" toggle and sauces.
   - **Staðsetning** – optional (site primarily points people to Instagram / Facebook).
   - **Upplýsingar / Site info** – story, contact details, socials, catering text and the photo gallery.
4. Every text field has an Icelandic and an English box; fill in both.
5. Click **Save**. The site updates about a minute later.

Photo tips: landscape JPGs around 1600px wide work best for the gallery. Real close-ups of the wings will make the biggest difference to the site.
