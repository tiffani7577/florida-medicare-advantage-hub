import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { floridaCities as cities } from "@/lib/cities";
import Link from "next/link";

interface Props { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return {};
  return {
    title: `Medicare Advantage Plans in ${c.name}, FL | Free Help`,
    description: `Compare Medicare Advantage plans in ${c.name}, Florida for 2026. Free help from a licensed agent. Call (435) 612-1009.`,
    alternates: { canonical: `https://www.floridamedicareadvantagehub.com/florida/${city}` },
    openGraph: {
      title: `Medicare Advantage Plans in ${c.name}, FL`,
      description: `Free Medicare plan comparison in ${c.name}, Florida. Licensed agent, no cost.`,
      url: `https://www.floridamedicareadvantagehub.com/florida/${city}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Florida Medicare Advantage Hub",
    description: `Licensed Medicare insurance agent serving ${c.name}, Florida`,
    telephone: "+114356121009",
    areaServed: { "@type": "City", name: c.name, containedInPlace: { "@type": "State", name: "Florida" } },
    url: `https://www.floridamedicareadvantagehub.com/florida/${city}`,
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-300 text-sm font-semibold uppercase tracking-wide mb-2">Free Medicare Help</p>
              <h1 className="font-serif text-4xl font-bold mb-4">Medicare Advantage Plans in {c.name}, Florida</h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Compare {new Date().getFullYear() + 1} Medicare Advantage, Medigap, and Dual Eligible plans available in {c.name}. Licensed Florida agent, no cost to you.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                <span>✅ All carriers compared</span>
                <span>✅ Local agent</span>
                <span>✅ No cost ever</span>
              </div>
            </div>
            <LeadCaptureForm city={c.name} title={`Get Free Plan Help in ${c.name}`} />
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1e3a5f] mb-4">Medicare Plans Available in {c.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {c.name} residents have access to multiple Medicare Advantage plans through carriers including Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, and Devoted Health. Plans vary by zip code — even within {c.name} — so it's important to compare options specific to your address.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our licensed Florida agents compare every plan available in your zip code, check your doctors and prescriptions against each network, and help you enroll at no cost to you. We are compensated by the insurance carriers, not by you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Medicare Advantage", href: "/medicare-advantage" },
                  { label: "Medicare Supplement", href: "/medicare-supplement" },
                  { label: "Dual Eligible (D-SNP)", href: "/dual-eligible" },
                  { label: "Plan G vs Plan N", href: "/medigap/plan-g-vs-plan-n-florida-2026" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="block p-3 bg-[#fdf8f0] rounded-lg text-sm font-medium text-[#1e3a5f] hover:text-[#0d9488] hover:bg-teal-50 transition-colors border border-gray-100">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="card border-l-4 border-[#0d9488]">
                <h3 className="font-semibold text-[#1e3a5f] mb-1">Annual Enrollment Period</h3>
                <p className="text-sm text-gray-600">Oct 15 – Dec 7 each year. Switch Medicare Advantage plans or return to Original Medicare.</p>
              </div>
              <div className="card border-l-4 border-[#d97706]">
                <h3 className="font-semibold text-[#1e3a5f] mb-1">Medicare Supplement — Year Round</h3>
                <p className="text-sm text-gray-600">Medigap plans can be purchased any time of year in Florida. No AEP restriction.</p>
              </div>
              <div className="card border-l-4 border-[#1e3a5f]">
                <h3 className="font-semibold text-[#1e3a5f] mb-1">Got a Non-Renewal Notice?</h3>
                <p className="text-sm text-gray-600">You have Guaranteed Issue rights. Call <a href="tel:+114356121009" className="text-[#0d9488] font-semibold">(435) 612-1009</a> immediately.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-10 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-semibold text-[#1e3a5f] text-center mb-4">Official Medicare Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov ↗</a>
              <a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Social Security ↗</a>
              <a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">CMS.gov ↗</a>
              <a href="https://www.floridashiphelp.org" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida SHIP ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
