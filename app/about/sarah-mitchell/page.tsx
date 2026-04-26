import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sarah Mitchell | Licensed Florida Insurance Agent",
  description:
    "Sarah Mitchell is a licensed Florida insurance agent (NPN #20585949, License W942527) helping seniors with Medicare Advantage and related coverage across Florida.",
  alternates: {
    canonical: "https://www.floridamedicareadvantagehub.com/about/sarah-mitchell",
  },
  openGraph: {
    title: "Sarah Mitchell | Licensed Florida Insurance Agent",
    description:
      "Licensed Florida Medicare agent. NPN #20585949, License W942527. Not affiliated with Medicare or any government agency.",
    url: "https://www.floridamedicareadvantagehub.com/about/sarah-mitchell",
  },
};

export default function SarahMitchellPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Sarah Mitchell</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Licensed Florida insurance agent — Medicare Advantage, Medicare Supplement, and dual-eligible guidance for all 67 counties.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Sarah Mitchell is a licensed Florida insurance professional. National Producer Number (NPN) #20585949. Florida license W942527.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Not affiliated with Medicare or any government agency. For official Medicare information, visit{" "}
              <a
                href="https://www.medicare.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0d9488] hover:underline"
              >
                Medicare.gov
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/about" className="text-[#0d9488] hover:underline text-sm font-medium">
                ← Back to About
              </Link>
              <Link href="/contact" className="text-[#0d9488] hover:underline text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
