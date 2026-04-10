import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Florida Medicare Advantage Hub | Free Plan Help for Seniors",
  description: "Florida seniors: get free help comparing Medicare Advantage plans for 2026. Licensed agent, all 67 counties, English & Español. Call (754) 202-8472.",
  openGraph: {
    title: "Florida Medicare Advantage Hub | Free Plan Help for Seniors",
    description: "Florida seniors: get free help comparing Medicare Advantage plans for 2026. Licensed agent, all 67 counties. No cost to you.",
    url: "https://floridamedicareadvantagehub.com",
    type: "website",
  },
  alternates: { canonical: "https://floridamedicareadvantagehub.com" },
};

const TRUST = [
  { icon: "🛡️", text: "Licensed Florida Insurance Agent #W942527" },
  { icon: "✅", text: "All 67 Florida Counties Covered" },
  { icon: "🌎", text: "English & Spanish" },
  { icon: "💰", text: "No Cost to You — Ever" },
  { icon: "⏱️", text: "Response Within 24 Hours" },
  { icon: "🏥", text: "Independent — Not Tied to One Carrier" },
];

const TESTIMONIALS = [
  { quote: "I got a non-renewal notice from Humana and was panicking. Called this number and within 20 minutes I had a new plan that kept all my doctors. Couldn't be easier.", name: "M.R.", city: "Fort Lauderdale" },
  { quote: "My husband and I were both on Humana. They found us both new plans in one call. Saved us money too. Very patient and explained everything clearly.", name: "D.K.", city: "Boca Raton" },
  { quote: "I've been on Medicare for 8 years and never had someone explain my options this clearly. Finally switched to a Medigap plan and I'm so glad I did.", name: "R.T.", city: "The Villages" },
];

const CITIES = ["Fort Lauderdale", "Miami", "Boca Raton", "Tampa", "Orlando", "Naples", "The Villages", "Sarasota", "West Palm Beach", "Jacksonville"];
const CITY_SLUGS: Record<string, string> = {
  "Fort Lauderdale": "fort-lauderdale", "Miami": "miami", "Boca Raton": "boca-raton",
  "Tampa": "tampa", "Orlando": "orlando", "Naples": "naples",
  "The Villages": "the-villages", "Sarasota": "sarasota",
  "West Palm Beach": "west-palm-beach", "Jacksonville": "jacksonville",
};

const recentArticles = articles.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Alert Banner */}
        <div className="bg-red-700 text-white text-sm text-center py-3 px-4">
          ⚠️ <strong>Medicare Alert:</strong> Major carriers are discontinuing plans in your area for 2027. If you received a non-renewal notice, call{" "}
          <a href="tel:+17542028472" className="underline font-semibold">(754) 202-8472</a> or get a free review below.
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f766e] text-white py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#d97706] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                🚨 2026 Medicare Alert
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-5">
                Florida Medicare Is Changing in 2026. We'll Help You Navigate It — Free.
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Thousands of Florida seniors are receiving non-renewal notices from Humana and UnitedHealthcare. Our licensed Florida agents will find you a replacement plan, protect your doctor relationships, and make sure your coverage never lapses — at absolutely no cost to you.
              </p>
              <ul className="space-y-2 mb-8">
                {TRUST.map((t) => (
                  <li key={t.text} className="flex items-center gap-2 text-blue-100">
                    <span>{t.icon}</span>
                    <span className="text-sm">{t.text}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+17542028472" className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                📞 (754) 202-8472
              </a>
            </div>
            <div>
              <LeadCaptureForm />
            </div>
          </div>
        </section>

        {/* Why Seniors Are Calling */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">Why Florida Seniors Are Getting Non-Renewal Notices</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Humana and UnitedHealthcare are exiting dozens of Florida counties. If you received a letter, you have rights — and options.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Humana Exiting Florida", body: "Humana is discontinuing Medicare Advantage plans in multiple Florida counties. Affected members have a Guaranteed Issue right to switch to Medigap without health questions.", link: "/blog/humana-non-renewal-notice-florida-2026" },
                { title: "UnitedHealthcare Changes", body: "UHC is reducing its Florida Medicare Advantage footprint for 2026. Find out if your county is affected and what your best replacement options are.", link: "/blog/unitedhealthcare-leaving-florida-2026" },
                { title: "Your Guaranteed Issue Rights", body: "Federal law protects you when your plan is non-renewed. You can switch to Medigap without medical underwriting — even with pre-existing conditions.", link: "/blog/guaranteed-issue-medigap-florida" },
              ].map((card) => (
                <div key={card.title} className="card">
                  <h3 className="font-serif font-bold text-[#1e3a5f] text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.body}</p>
                  <Link href={card.link} className="text-[#0d9488] text-sm font-medium hover:underline">Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Types */}
        <section className="bg-[#fdf8f0] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-12">Florida Medicare Plan Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Medicare Advantage", desc: "All-in-one plans (HMO/PPO) that replace Original Medicare. Often include dental, vision, and hearing. Carrier-specific networks.", href: "/medicare-advantage", color: "border-t-4 border-[#0d9488]" },
                { title: "Medicare Supplement (Medigap)", desc: "Works alongside Original Medicare to cover gaps. Year-round enrollment, no network restrictions, renewable for life.", href: "/medicare-supplement", color: "border-t-4 border-[#1e3a5f]" },
                { title: "Dual Eligible (D-SNP)", desc: "Special plans for seniors who qualify for both Medicare and Medicaid. Extra benefits, $0 premiums, coordinated care.", href: "/dual-eligible", color: "border-t-4 border-[#d97706]" },
              ].map((p) => (
                <Link key={p.title} href={p.href} className={`card ${p.color} hover:shadow-md transition-shadow group`}>
                  <h3 className="font-serif font-bold text-[#1e3a5f] text-xl mb-2 group-hover:text-[#0d9488] transition-colors">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-[#0d9488] text-sm font-medium">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-12">What Florida Seniors Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="card">
                  <div className="text-[#d97706] text-lg mb-3">★★★★★</div>
                  <p className="text-gray-700 italic leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="text-sm font-semibold text-[#1e3a5f]">{t.name} — {t.city}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethos Life Insurance */}
        <section className="bg-[#1e3a5f] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-wide mb-2">Agentless Life Insurance</p>
            <h2 className="font-serif text-3xl font-bold mb-4">Protect Your Family — No Agent Required</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Complete a full life insurance application yourself in minutes. No phone calls, no pressure, no agent interaction required.
            </p>
            {/* ETHOS_LINK_PLACEHOLDER — Replace href with your personal Ethos agent link from hcms.chims.uppatop.com */}
            <a href="#" className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              Get a Free Life Insurance Quote →
            </a>
          </div>
        </section>

        {/* Cities */}
        <section className="bg-[#fdf8f0] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">Medicare Help in Your Florida City</h2>
            <p className="text-center text-gray-600 mb-10">Plans vary by zip code. Find local Medicare options in your area.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {CITIES.map((city) => (
                <Link key={city} href={`/florida/${CITY_SLUGS[city]}`}
                  className="bg-white border border-gray-200 hover:border-[#0d9488] hover:text-[#0d9488] text-gray-700 font-medium px-4 py-2 rounded-full text-sm transition-colors">
                  {city}
                </Link>
              ))}
              <Link href="/florida" className="bg-[#0d9488] text-white font-medium px-4 py-2 rounded-full text-sm hover:bg-[#0f766e] transition-colors">
                View All 30 Cities →
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-title">Latest Medicare News</h2>
              <Link href="/blog" className="text-[#0d9488] font-medium hover:underline text-sm">View all articles →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentArticles.map((a) => (
                <ArticleCard key={a.slug} slug={a.slug} title={a.title} description={a.description}
                  date={a.datePublished} category={a.category} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#fdf8f0] py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-4">Ready to Find Your Best Plan?</h2>
            <p className="text-center text-gray-600 mb-8">Free consultation. No obligation. Licensed Florida agent. Response within 24 hours.</p>
            <LeadCaptureForm title="Get Your Free Plan Review Today" />
          </div>
        </section>

        {/* Official Resources */}
        <section className="bg-white py-10 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-semibold text-[#1e3a5f] text-center mb-4">Official Medicare Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov ↗</a>
              <a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Social Security — Medicare ↗</a>
              <a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">CMS.gov ↗</a>
              <a href="https://www.floridashiphelp.org" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida SHIP ↗</a>
              <a href="https://www.mymedicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">MyMedicare.gov ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
