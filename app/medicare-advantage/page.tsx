import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans Florida 2026 | Free Comparison",
  description: "Compare Medicare Advantage (Part C) plans in Florida for 2026. HMO, PPO, and D-SNP options. Free help from a licensed Florida agent. Call (754) 202-8472.",
  alternates: { canonical: "https://floridamedicareadvantagehub.com/medicare-advantage" },
  openGraph: {
    title: "Medicare Advantage Plans Florida 2026 | Free Comparison",
    description: "Compare Medicare Advantage plans in Florida. Free licensed agent help.",
    url: "https://floridamedicareadvantagehub.com/medicare-advantage",
  },
};

export default function MedicareAdvantagePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-4">Medicare Advantage Plans in Florida for 2026</h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Medicare Advantage (Part C) plans replace Original Medicare and often include dental, vision, hearing, and prescription drug coverage — sometimes at $0 premium. We compare every plan available in your zip code at no cost to you.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>✅ HMO, PPO, and PFFS plan types</li>
                <li>✅ $0 premium plans available in most Florida counties</li>
                <li>✅ Dental, vision, hearing, and OTC benefits</li>
                <li>✅ All major carriers: Humana, UHC, Aetna, Florida Blue, Devoted</li>
              </ul>
            </div>
            <LeadCaptureForm title="Compare Medicare Advantage Plans" />
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title mb-8">How Medicare Advantage Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Replaces Original Medicare", body: "Medicare Advantage plans cover everything Original Medicare covers (Parts A and B), plus usually more. You still use Medicare — but through a private insurer." },
                { title: "Network-Based Coverage", body: "Most MA plans use HMO or PPO networks. HMOs require you to use in-network providers. PPOs give you more flexibility but may cost more out-of-network." },
                { title: "Extra Benefits", body: "Most Florida Medicare Advantage plans include dental cleanings, eye exams, hearing aids, over-the-counter allowances, and gym memberships not covered by Original Medicare." },
              ].map((c) => (
                <div key={c.title} className="card border-t-4 border-[#0d9488]">
                  <h3 className="font-serif font-bold text-[#1e3a5f] text-lg mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-14 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-title mb-4">Medicare Advantage vs. Medicare Supplement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Choosing between Medicare Advantage and a Medicare Supplement (Medigap) plan is the most important Medicare decision you'll make. Both have pros and cons depending on your health, budget, and lifestyle.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1e3a5f] text-white">
                      <th className="px-4 py-2 text-left">Feature</th>
                      <th className="px-4 py-2 text-left">Medicare Advantage</th>
                      <th className="px-4 py-2 text-left">Medigap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Monthly Premium", "Often $0", "$80–$300+"],
                      ["Network", "Required (HMO/PPO)", "Any Medicare provider"],
                      ["Referrals", "Often required", "Never required"],
                      ["Out-of-pocket max", "Yes (varies)", "Very low with Plan G"],
                      ["Drug coverage", "Usually included", "Separate Part D needed"],
                      ["Enrollment period", "AEP Oct 15–Dec 7", "Year-round in FL"],
                    ].map(([f, ma, mg], i) => (
                      <tr key={f} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf8f0]"}>
                        <td className="px-4 py-2 font-medium text-[#1e3a5f]">{f}</td>
                        <td className="px-4 py-2 text-gray-600">{ma}</td>
                        <td className="px-4 py-2 text-gray-600">{mg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link href="/medicare-supplement" className="inline-block mt-4 text-[#0d9488] font-medium hover:underline text-sm">
                Learn more about Medicare Supplement →
              </Link>
            </div>
            <LeadCaptureForm title="Get a Free Plan Comparison" />
          </div>
        </section>

        <section className="bg-white py-10 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-semibold text-[#1e3a5f] text-center mb-4">Official Medicare Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare Plan Finder ↗</a>
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov ↗</a>
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
