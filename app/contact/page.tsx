import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Contact | Florida Medicare Advantage Hub",
  description: "Contact a licensed Florida Medicare agent. Free plan reviews, all 67 counties, English & Español. Call (435) 612-1009 or submit a request online.",
  alternates: { canonical: "https://www.floridamedicareadvantagehub.com/contact" },
  openGraph: {
    title: "Contact | Florida Medicare Advantage Hub",
    description: "Free Medicare plan review. Licensed Florida agent. Call (435) 612-1009.",
    url: "https://www.floridamedicareadvantagehub.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Contact a Licensed Florida Medicare Agent</h1>
            <p className="text-blue-100 text-lg">Free consultation. No obligation. Response within 24 hours.</p>
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-14 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-title mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <div className="card flex gap-4 items-start">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Call or Text</h3>
                    <a href="tel:+114356121009" className="text-[#0d9488] font-bold text-lg hover:underline">(435) 612-1009</a>
                    <p className="text-sm text-gray-500 mt-1">Mon–Fri 9am–6pm ET · Sat by appointment</p>
                  </div>
                </div>
                <div className="card flex gap-4 items-start">
                  <span className="text-2xl">🌎</span>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Service Area</h3>
                    <p className="text-gray-600 text-sm">All 67 Florida Counties · English & Español</p>
                  </div>
                </div>
                <div className="card flex gap-4 items-start">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Always Free</h3>
                    <p className="text-gray-600 text-sm">No cost to you — ever. We are compensated by insurance carriers when you enroll.</p>
                  </div>
                </div>
                <div className="card flex gap-4 items-start">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">Licensed & Independent</h3>
                    <p className="text-gray-600 text-sm">Florida Insurance License #W942527. Not tied to any single carrier.</p>
                  </div>
                </div>
              </div>
            </div>
            <LeadCaptureForm title="Request a Free Plan Review" />
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
