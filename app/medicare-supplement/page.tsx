import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Supplement Plans Florida 2026 | Medigap Help",
  description: "Compare Medicare Supplement (Medigap) plans in Florida. Plan G, Plan N, year-round enrollment. Free help from a licensed Florida agent. Call (435) 612-1009.",
  alternates: { canonical: "https://www.floridamedicareadvantagehub.com/medicare-supplement" },
  openGraph: {
    title: "Medicare Supplement Plans Florida 2026 | Medigap Help",
    description: "Compare Medigap plans in Florida. Year-round enrollment, no network restrictions.",
    url: "https://www.floridamedicareadvantagehub.com/medicare-supplement",
  },
};

export default function MedicareSupplementPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-4">Medicare Supplement (Medigap) Plans in Florida</h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Medigap plans work alongside Original Medicare to cover the gaps — deductibles, copays, and coinsurance. In Florida, you can enroll year-round, use any doctor who accepts Medicare, and never need a referral.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>✅ Year-round enrollment in Florida</li>
                <li>✅ Any doctor who accepts Medicare — no networks</li>
                <li>✅ Renewable for life — can't be cancelled for health reasons</li>
                <li>✅ Plan G covers nearly everything after Part B deductible</li>
              </ul>
            </div>
            <LeadCaptureForm title="Compare Medigap Plans Free" />
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title mb-8">Most Popular Florida Medigap Plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="px-4 py-3 text-left">Plan</th>
                    <th className="px-4 py-3 text-left">Part A Coinsurance</th>
                    <th className="px-4 py-3 text-left">Part B Coinsurance</th>
                    <th className="px-4 py-3 text-left">Part B Deductible</th>
                    <th className="px-4 py-3 text-left">Foreign Travel</th>
                    <th className="px-4 py-3 text-left">Est. Monthly Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Plan G ⭐ Most Popular", "100%", "100%", "Not covered", "80%", "$100–$180"],
                    ["Plan N", "100%", "100%*", "Not covered", "80%", "$70–$130"],
                    ["Plan G High Deductible", "100%", "100%", "Not covered", "80%", "$30–$60"],
                    ["Plan F (pre-2020 only)", "100%", "100%", "100%", "80%", "$150–$250"],
                  ].map(([plan, ...rest], i) => (
                    <tr key={plan} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf8f0]"}>
                      <td className="px-4 py-3 font-semibold text-[#1e3a5f]">{plan}</td>
                      {rest.map((cell, j) => <td key={j} className="px-4 py-3 text-gray-600">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Plan N has copays up to $20 for office visits and $50 for ER visits. Premiums are estimates for a 65-year-old non-smoker in Florida.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/medigap/plan-g-vs-plan-n-florida-2026" className="text-[#0d9488] font-medium hover:underline text-sm">Plan G vs Plan N — Full Comparison →</Link>
              <Link href="/medigap/best-medicare-supplement-florida-2026" className="text-[#0d9488] font-medium hover:underline text-sm">Best Medigap Plans in Florida →</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Ready to Compare Medigap Plans?</h2>
            <LeadCaptureForm title="Get Your Free Medigap Comparison" />
          </div>
        </section>

        <section className="bg-white py-10 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-semibold text-[#1e3a5f] text-center mb-4">Official Medicare Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="https://www.medicare.gov/supplements-other-insurance/whats-medicare-supplement-insurance-medigap" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov — Medigap Guide ↗</a>
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
