# PSA & Associates Website

Premium responsive React + Vite website for PSA & Associates, Nellore.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm run preview
```

## Before publishing
1. Replace `YOUR-DOMAIN-HERE` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with the final HTTPS domain.
2. Add the verified Google Business Profile reviews URL or Place ID to `GOOGLE_REVIEWS_URL` in `src/config.js`. The review link is intentionally not pointed at a generic Google search.
3. The uploaded materials contained office photographs and the MA Innovex Technologies logo, but did not contain the four customer review screenshots. Individual review cards have therefore not been fabricated. Add the four genuine reviews when supplied.
4. Confirm the map pin is the exact office before publishing. The embedded map uses the supplied full address query.
5. Business hours are shown only as “Opens at 9:00 AM”; remaining hours were not supplied.
6. `DEMO_MODE` is true. Contact buttons, service actions and form submission show a notice only. No calls, WhatsApp redirects, form submission or data storage occur.
7. The structured data includes only the business name, category, phone and address supplied in the brief. Rating and review count are not included in structured data.
8. Replace canonical URL, sitemap and robots sitemap URL with the final domain before indexing.

## Included SEO
- Search-friendly title, description and keywords
- Open Graph and Twitter metadata
- Canonical URL placeholder
- AccountingService JSON-LD
- XML sitemap and robots.txt
- Semantic headings and descriptive image alt text
- Responsive mobile-first layout
