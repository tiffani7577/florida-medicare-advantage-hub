import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { floridaCities as cities } from "@/lib/cities";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medicare Help by Florida City | All 67 Counties",
  description: "Find Medicare Advantage and Medigap plan help in your Florida city. Licensed agent serving all 67 Florida counties. Free consultations.",
  alternates: { canonical: "https://www.floridamedicareadvantagehub.com/florida" },
  openGraph: {
    title: "Medicare Help by Florida City | All 67 Counties",
    description: "Find Medicare plan help in your Florida city. Free licensed agent consultations.",
    url: "https://www.floridamedicareadvantagehub.com/florida",
  },
};

export default function FloridaIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Medicare Help Across Florida</h1>
            <p className="text-blue-100 text-lg">Find free Medicare plan help in your city. Licensed agent serving all 67 Florida counties.</p>
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title mb-8">Find Your City</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/florida/${city.slug}`}
                  className="block p-3 bg-[#fdf8f0] rounded-lg text-sm font-medium text-[#1e3a5f] hover:bg-teal-50 hover:text-[#0d9488] transition-colors border border-gray-100 text-center"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-10 px-4 border-t border-gray-100">
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
