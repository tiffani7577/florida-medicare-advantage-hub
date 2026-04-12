// JSON-LD Schema Templates — Florida Medicare Advantage Hub
// Used on every page for SEO / Google structured data

export const insuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Florida Medicare Advantage Hub",
  "url": "https://floridamedicareadvantagehub.com",
  "telephone": "(435) 612-1009",
  "description": "Free Medicare help for Florida seniors. Compare Medicare Advantage and Supplement plans across all 67 Florida counties.",
  "areaServed": { "@type": "State", "name": "Florida" },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Insurance License",
    "recognizedBy": {
      "@type": "GovernmentOrganization",
      "name": "Florida Department of Financial Services",
      "url": "https://www.myfloridacfo.com",
      "sameAs": "https://dice.fldfs.com"
    },
    "identifier": "W942527"
  }
};

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };
}

export function articleSchema(opts: {
  title: string;
  slug: string;
  description: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": opts.title,
    "description": opts.description,
    "datePublished": opts.datePublished,
    "dateModified": opts.datePublished,
    "url": `https://floridamedicareadvantagehub.com/blog/${opts.slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "Florida Medicare Advantage Hub",
      "url": "https://floridamedicareadvantagehub.com"
    },
    "author": {
      "@type": "Organization",
      "name": "Florida Medicare Advantage Hub"
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function localBusinessSchema(city: string, county: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Florida Medicare Advantage Hub — ${city}`,
    "url": `https://floridamedicareadvantagehub.com/florida/${city.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "(435) 612-1009",
    "areaServed": [
      { "@type": "City", "name": city },
      { "@type": "AdministrativeArea", "name": `${county} County, Florida` }
    ]
  };
}
