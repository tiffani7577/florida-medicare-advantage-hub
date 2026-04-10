import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Florida Medicare Advantage Hub",
  description: "Licensed Florida Medicare insurance agent serving all 67 counties. Free plan comparisons, English & Español. License #W942527.",
  alternates: { canonical: "https://floridamedicareadvantagehub.com/about" },
  openGraph: {
    title: "About | Florida Medicare Advantage Hub",
    description: "Licensed Florida Medicare agent. Free help, all 67 counties, English & Español.",
    url: "https://floridamedicareadvantagehub.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">About Florida Medicare Advantage Hub</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              A licensed Florida insurance agent dedicated to helping seniors navigate Medicare with clarity, honesty, and zero pressure.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="section-title mb-4">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Florida Medicare Advantage Hub is operated by a licensed Florida insurance agent (License #W942527) serving all 67 Florida counties. We specialize exclusively in Medicare — Medicare Advantage, Medicare Supplement (Medigap), and Dual Eligible plans.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are independent, which means we are not tied to any single insurance carrier. We compare plans from Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, Devoted Health, and others to find the best fit for your specific situation, doctors, and prescriptions.
              </p>
            </div>

            <div>
              <h2 className="section-title mb-4">Our Promise</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "💰", title: "Always Free", body: "Our services are 100% free to you. We are compensated by insurance carriers when you enroll — you never pay us directly." },
                  { icon: "🏥", title: "Truly Independent", body: "We represent multiple carriers and always recommend the plan that's best for you, not the one that pays us the most." },
                  { icon: "🌎", title: "English & Español", body: "We serve Florida's diverse senior community in both English and Spanish." },
                  { icon: "📞", title: "Real Answers", body: "No call centers, no runaround. You speak directly with a licensed agent who knows Florida Medicare inside and out." },
                ].map((p) => (
                  <div key={p.title} className="card flex gap-4">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">{p.title}</h3>
                      <p className="text-sm text-gray-600">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethos Life Insurance */}
            <div className="bg-[#1e3a5f] text-white rounded-xl p-8 text-center">
              <p className="text-teal-300 text-sm font-semibold uppercase tracking-wide mb-2">Agentless Life Insurance</p>
              <h2 className="font-serif text-2xl font-bold mb-3">Protect Your Family — No Agent Required</h2>
              <p className="text-blue-100 mb-6">Complete a full life insurance application yourself in minutes. No phone calls, no pressure.</p>
              {/* ETHOS_LINK_PLACEHOLDER — Replace href with your personal Ethos agent link from hcms.chims.uppatop.com */}
              <a href="#" className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-8 py-3 rounded-lg transition-colors">
                Get a Free Life Insurance Quote →
              </a>
            </div>

            <div>
              <h2 className="section-title mb-4">Licensing & Compliance</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We do not offer every plan available in your area. Currently we represent organizations which offer products in your area. Please contact{" "}
                <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov</a>,
                1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-2">
                Florida Insurance License #W942527. Serving all 67 Florida counties.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-semibold text-[#1e3a5f] text-center mb-4">Official Medicare Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov ↗</a>
              <a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Social Security ↗</a>
              <a href="https://www.floridashiphelp.org" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida SHIP ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
