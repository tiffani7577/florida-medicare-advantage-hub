import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import BlogSidebar from "@/components/BlogSidebar";
import { medigapCities, medigapComparisons, type MedigapPage } from "@/lib/medigap";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

const allPages: MedigapPage[] = [...medigapCities, ...medigapComparisons];

export async function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = allPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://floridamedicareadvantagehub.com/medigap/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://floridamedicareadvantagehub.com/medigap/${slug}`,
    },
  };
}

export default async function MedigapPageRoute({ params }: Props) {
  const { slug } = await params;
  const page = allPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/medicare-supplement" className="hover:text-white">Medicare Supplement</Link>
              <span>/</span>
              <span className="text-white">{page.h1}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl">{page.h1}</h1>
            <p className="text-blue-200 mt-3 text-lg max-w-2xl">{page.intro}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            {/* City-specific content */}
            {page.type === "city" && (
              <>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#1e3a5f] mb-4">
                    Medigap Plan Pricing in {page.city}, Florida
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#1e3a5f] text-white">
                          <th className="px-4 py-3 text-left">Plan</th>
                          <th className="px-4 py-3 text-left">Est. Monthly Premium</th>
                          <th className="px-4 py-3 text-left">Part B Deductible</th>
                          <th className="px-4 py-3 text-left">Copays</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-3 font-semibold text-[#1e3a5f]">Plan G ⭐</td>
                          <td className="px-4 py-3 text-gray-700">{page.planGPrice}</td>
                          <td className="px-4 py-3 text-gray-600">You pay $240/yr</td>
                          <td className="px-4 py-3 text-gray-600">None</td>
                        </tr>
                        <tr className="bg-[#fdf8f0]">
                          <td className="px-4 py-3 font-semibold text-[#1e3a5f]">Plan N</td>
                          <td className="px-4 py-3 text-gray-700">{page.planNPrice}</td>
                          <td className="px-4 py-3 text-gray-600">You pay $240/yr</td>
                          <td className="px-4 py-3 text-gray-600">Up to $20 office / $50 ER</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Estimates for a 65-year-old non-smoker in {page.city}. Actual rates vary by carrier and health history.</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#1e3a5f] mb-4">Top Carriers in {page.city}</h2>
                  <div className="flex flex-wrap gap-2">
                    {page.topCarriers.map((carrier) => (
                      <span key={carrier} className="px-3 py-1.5 bg-[#fdf8f0] border border-gray-200 rounded-full text-sm font-medium text-[#1e3a5f]">{carrier}</span>
                    ))}
                  </div>
                </div>

                <div className="card border-l-4 border-[#0d9488]">
                  <h3 className="font-semibold text-[#1e3a5f] mb-2">Local Note</h3>
                  <p className="text-gray-600 text-sm">{page.localNote}</p>
                </div>

                <div className="card bg-[#1e3a5f] text-white">
                  <p className="text-teal-300 text-sm font-semibold mb-1">Why Medigap in Florida?</p>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Florida allows year-round Medigap enrollment — unlike most states. You can switch plans any time without waiting for AEP. Plans are guaranteed renewable for life and work with any doctor who accepts Medicare nationwide.
                  </p>
                </div>
              </>
            )}

            {/* Comparison-specific content */}
            {page.type === "comparison" && (
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#1e3a5f] mb-4">{page.topic}</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Choosing the right Medicare Supplement plan in Florida depends on your health needs, budget, and how often you visit doctors. Below we break down the key differences to help you make an informed decision.
                  </p>
                  <h3 className="font-serif font-bold text-[#1e3a5f] mt-6 mb-3">Plan G — The Most Popular Choice</h3>
                  <p>
                    Plan G covers everything except the Medicare Part B deductible ($240 in 2024). After you meet that deductible, Plan G pays 100% of all Medicare-approved costs. This makes it the most predictable plan — you always know exactly what you'll pay.
                  </p>
                  <h3 className="font-serif font-bold text-[#1e3a5f] mt-6 mb-3">Plan N — Lower Premium, Small Copays</h3>
                  <p>
                    Plan N has a lower monthly premium than Plan G but adds copays of up to $20 for office visits and $50 for emergency room visits. If you're healthy and rarely visit doctors, Plan N can save you $30–$50/month compared to Plan G.
                  </p>
                  <h3 className="font-serif font-bold text-[#1e3a5f] mt-6 mb-3">Which Should You Choose?</h3>
                  <p>
                    If you visit doctors frequently or want maximum predictability, choose Plan G. If you're generally healthy and want to save on premiums, Plan N is worth considering. A licensed agent can run the numbers for your specific situation at no cost.
                  </p>
                </div>
              </div>
            )}

            {/* Lead form */}
            <div className="bg-[#fdf8f0] rounded-xl p-6 border border-gray-200">
              <LeadCaptureForm title="Get a Free Medigap Quote" />
            </div>

            {/* Outgoing links */}
            <div className="p-5 bg-[#fdf8f0] rounded-xl border border-gray-200">
              <h3 className="font-semibold text-[#1e3a5f] mb-3">Official Medicare Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.medicare.gov/supplements-other-insurance/whats-medicare-supplement-insurance-medigap" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov — Medigap Guide ↗</a></li>
                <li><a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Social Security Administration ↗</a></li>
                <li><a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">CMS.gov ↗</a></li>
                <li><a href="https://www.floridashiphelp.org" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida SHIP ↗</a></li>
              </ul>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
