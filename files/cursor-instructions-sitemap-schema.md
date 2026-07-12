# Instructions for Cursor: Sitemap + Schema Markup

Paste this directly to Cursor as the next task.

---

## Task 1: XML Sitemap

We're on Next.js, so use the built-in App Router sitemap support (no extra package needed).

**Create `src/app/sitemap.ts`:**

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.investindiasmart.com'

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/industrial',
    '/industrial/foreign-direct-investment',
    '/industrial/telangana',
    '/industrial/andhra-pradesh',
    '/industrial/karnataka',
    '/real-estate',
    '/real-estate/telangana',
    '/real-estate/andhra-pradesh',
    '/real-estate/karnataka',
    '/insurance',
    '/nri-investment',
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.split('/').length > 2 ? 0.7 : 0.9,
  }))
}
```

This automatically serves a valid `sitemap.xml` at `https://www.investindiasmart.com/sitemap.xml` — no manual XML needed. When blog posts go live, add a loop here that reads blog slugs the same way (or add each blog route to the `staticRoutes` array as it's published).

**Also create `src/app/robots.ts`** if it doesn't exist yet, so search engines have a clear robots.txt pointing to the sitemap:

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.investindiasmart.com/sitemap.xml',
  }
}
```

**After deploying:** submit `https://www.investindiasmart.com/sitemap.xml` in Google Search Console (Sitemaps section) — this needs to be done once manually, Cursor can't do this part.

---

## Task 2: Schema Markup (JSON-LD)

Add structured data so Google can show rich results (FAQ dropdowns, business info in search).

### 2a. FAQPage schema — add to every page with an FAQ section

We already have FAQs on `/nri-investment`, `/industrial/foreign-direct-investment`, and all six state pages. For each of these pages, add a JSON-LD script generated from the same FAQ data already used to render the visible FAQ section (don't duplicate the content — build the schema object from the same array/data source the page already uses).

**Pattern to follow** (adjust to match how FAQs are currently stored in each page — likely an array of `{ question, answer }` objects):

```tsx
function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
```

Render `<FaqJsonLd faqs={faqs} />` inside each page component wherever the FAQ section already lives, reusing the existing FAQ data — don't hardcode a second copy of the questions/answers.

### 2b. LocalBusiness schema — add to homepage and /contact

```tsx
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'investindiasmart',
  image: 'https://www.investindiasmart.com/logo.jpeg',
  url: 'https://www.investindiasmart.com',
  telephone: '+91-9390652846',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500001',
    addressCountry: 'IN',
  },
  areaServed: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
}
```

Render this the same way as the FAQ schema, once on the homepage layout (or root layout if it should appear sitewide — homepage is sufficient to start).

### 2c. Verify

After deploying, test both:
- Sitemap: visit `https://www.investindiasmart.com/sitemap.xml` directly, confirm all routes appear
- Schema: paste any page URL into Google's Rich Results Test (`https://search.google.com/test/rich-results`) and confirm FAQ/LocalBusiness schema is detected with no errors

---

## Priority order for this task

1. `sitemap.ts` + `robots.ts` (quick, no design impact)
2. FAQPage schema on the 2 pillar pages + 6 state pages (reuses existing FAQ data, low risk)
3. LocalBusiness schema on homepage
4. Run `npm run build` to confirm no errors, then deploy
5. Submit sitemap to Google Search Console (manual step, not Cursor's job)
