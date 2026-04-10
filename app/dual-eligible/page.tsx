import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Dual Eligible Medicare Plans Florida | D-SNP Help",
  description: "Florida seniors who qualify for both Medicare and Medicaid may get extra benefits at $0 cost. Free D-SNP plan help from a licensed agent. Call (754) 202-8472.",
  alternates: { canonical: "https://floridamedicareadvantagehub.com/dual-eligible" },
  openGraph: {
    title: "Dual Eligible Medicare Plans Florida | D-SNP Help",
    description: "Free D-SNP plan help for Florida seniors who qualify for Medicare and Medicaid.",
    url: "https://floridamedicareadvantagehub.com/dual-eligible",
  },
};

export default function DualEligiblePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-4">Dual Eligible Medicare Plans (D-SNP) in Florida</h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                If you qualify for both Medicare and Medicaid, you may be eligible for a Dual Special Needs Plan (D-SNP) with $0 premiums, extra dental and vision benefits, and coordinated care — at no additional cost.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>✅ $0 premium plans available</li>
                <li>✅ Extra dental, vision, and hearing benefits</li>
                <li>✅ OTC allowances up to $150/quarter</li>
                <li>✅ Coordinated Medicare + Medicaid coverage</li>
                <li>✅ Year-round enrollment for qualifying individuals</li>
              </ul>
            </div>
            <LeadCaptureForm title="Check Your D-SNP Eligibility Free" />
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title mb-8">Who Qualifies for Dual Eligible Plans?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">To qualify for a D-SNP, you must be enrolled in both Medicare (Parts A and B) and a Medicaid program in Florida. This includes:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-[#0d9488] font-bold">✓</span> Full Medicaid (full dual eligible)</li>
                  <li className="flex gap-2"><span className="text-[#0d9488] font-bold">✓</span> Qualified Medicare Beneficiary (QMB)</li>
                  <li className="flex gap-2"><span className="text-[#0d9488] font-bold">✓</span> Specified Low-Income Medicare Beneficiary (SLMB)</li>
                  <li className="flex gap-2"><span className="text-[#0d9488] font-bold">✓</span> Qualifying Individual (QI)</li>
                </ul>
              </div>
              <div className="card border-l-4 border-[#d97706]">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Not Sure If You Qualify?</h3>
                <p className="text-sm text-gray-600 mb-4">Many Florida seniors don't realize they qualify for Medicaid assistance programs. A licensed agent can check your eligibility in minutes at no cost.</p>
                <a href="tel:+17542028472" className="inline-flex items-center gap-2 bg-[#d97706] text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#b45309] transition-colors">
                  📞 Call (754) 202-8472
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-semibold text-[#1e3a5f] text-center mb-4">Official Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="https://www.medicare.gov/basics/costs/help/medicaid" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov — Medicaid & Medicare ↗</a>
              <a href="https://www.myflorida.com/accessflorida" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida Medicaid — ACCESS Florida ↗</a>
              <a href="https://www.cms.gov/medicare-medicaid-coordination" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">CMS — Dual Eligible Info ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
