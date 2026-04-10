export interface FloridaCity {
  name: string;
  county: string;
  primaryZip: string;
  slug: string;
  humanaExiting: boolean;
  uhcExiting: boolean;
  spanishSpeaking: boolean;
}

export const floridaCities: FloridaCity[] = [
  { name: "Fort Lauderdale", county: "Broward", primaryZip: "33301", slug: "fort-lauderdale", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "Miami", county: "Miami-Dade", primaryZip: "33101", slug: "miami", humanaExiting: true, uhcExiting: true, spanishSpeaking: true },
  { name: "Boca Raton", county: "Palm Beach", primaryZip: "33431", slug: "boca-raton", humanaExiting: false, uhcExiting: true, spanishSpeaking: false },
  { name: "Hollywood", county: "Broward", primaryZip: "33020", slug: "hollywood", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "Coral Springs", county: "Broward", primaryZip: "33071", slug: "coral-springs", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Weston", county: "Broward", primaryZip: "33326", slug: "weston", humanaExiting: true, uhcExiting: false, spanishSpeaking: true },
  { name: "Pompano Beach", county: "Broward", primaryZip: "33060", slug: "pompano-beach", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "Deerfield Beach", county: "Broward", primaryZip: "33441", slug: "deerfield-beach", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Plantation", county: "Broward", primaryZip: "33317", slug: "plantation", humanaExiting: false, uhcExiting: true, spanishSpeaking: false },
  { name: "Margate", county: "Broward", primaryZip: "33063", slug: "margate", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Hialeah", county: "Miami-Dade", primaryZip: "33010", slug: "hialeah", humanaExiting: true, uhcExiting: true, spanishSpeaking: true },
  { name: "Homestead", county: "Miami-Dade", primaryZip: "33030", slug: "homestead", humanaExiting: true, uhcExiting: false, spanishSpeaking: true },
  { name: "Aventura", county: "Miami-Dade", primaryZip: "33160", slug: "aventura", humanaExiting: false, uhcExiting: true, spanishSpeaking: true },
  { name: "Doral", county: "Miami-Dade", primaryZip: "33122", slug: "doral", humanaExiting: false, uhcExiting: false, spanishSpeaking: true },
  { name: "Kendall", county: "Miami-Dade", primaryZip: "33176", slug: "kendall", humanaExiting: true, uhcExiting: false, spanishSpeaking: true },
  { name: "West Palm Beach", county: "Palm Beach", primaryZip: "33401", slug: "west-palm-beach", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "Delray Beach", county: "Palm Beach", primaryZip: "33444", slug: "delray-beach", humanaExiting: false, uhcExiting: true, spanishSpeaking: false },
  { name: "Boynton Beach", county: "Palm Beach", primaryZip: "33435", slug: "boynton-beach", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Wellington", county: "Palm Beach", primaryZip: "33414", slug: "wellington", humanaExiting: false, uhcExiting: true, spanishSpeaking: false },
  { name: "Naples", county: "Collier", primaryZip: "34102", slug: "naples", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Cape Coral", county: "Lee", primaryZip: "33990", slug: "cape-coral", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "Fort Myers", county: "Lee", primaryZip: "33901", slug: "fort-myers", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Sarasota", county: "Sarasota", primaryZip: "34230", slug: "sarasota", humanaExiting: false, uhcExiting: true, spanishSpeaking: false },
  { name: "Bradenton", county: "Manatee", primaryZip: "34201", slug: "bradenton", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Tampa", county: "Hillsborough", primaryZip: "33601", slug: "tampa", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "St. Petersburg", county: "Pinellas", primaryZip: "33701", slug: "st-petersburg", humanaExiting: true, uhcExiting: false, spanishSpeaking: false },
  { name: "Orlando", county: "Orange", primaryZip: "32801", slug: "orlando", humanaExiting: false, uhcExiting: true, spanishSpeaking: true },
  { name: "Jacksonville", county: "Duval", primaryZip: "32099", slug: "jacksonville", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "The Villages", county: "Sumter", primaryZip: "32162", slug: "the-villages", humanaExiting: true, uhcExiting: true, spanishSpeaking: false },
  { name: "Tallahassee", county: "Leon", primaryZip: "32301", slug: "tallahassee", humanaExiting: false, uhcExiting: true, spanishSpeaking: false },
];

export function getCityBySlug(slug: string): FloridaCity | undefined {
  return floridaCities.find(c => c.slug === slug);
}

export function getNearbyCities(city: FloridaCity, count = 3): FloridaCity[] {
  return floridaCities
    .filter(c => c.slug !== city.slug && c.county === city.county)
    .slice(0, count)
    .concat(
      floridaCities.filter(c => c.slug !== city.slug && c.county !== city.county)
    )
    .slice(0, count);
}
