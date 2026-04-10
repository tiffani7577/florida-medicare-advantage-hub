import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Florida Medicare Blog | News, Tips & Plan Updates",
  description: "Stay informed with the latest Florida Medicare news, plan changes, enrollment tips, and carrier updates. Written by a licensed Florida insurance agent.",
  alternates: { canonical: "https://floridamedicareadvantagehub.com/blog" },
  openGraph: {
    title: "Florida Medicare Blog | News, Tips & Plan Updates",
    description: "Latest Florida Medicare news and plan updates from a licensed agent.",
    url: "https://floridamedicareadvantagehub.com/blog",
  },
};

const CATEGORIES = ["All", "Medicare Advantage", "Medicare Supplement", "Enrollment", "Dual Eligible", "Carrier News"];

export default function BlogPage() {
  const sorted = [...articles].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1e3a5f] text-white py-14 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-3">Florida Medicare Blog</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Expert Medicare guidance written by a licensed Florida insurance agent. Plan changes, enrollment tips, and carrier news.
            </p>
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-4 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full cursor-default">
                {cat}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-[#fdf8f0] py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((a) => (
                <ArticleCard key={a.slug} slug={a.slug} title={a.title} description={a.description}
                  date={a.datePublished} category={a.category} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 border-t border-gray-100">
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
