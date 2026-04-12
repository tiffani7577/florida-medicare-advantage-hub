import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { articles } from "@/lib/articles";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  const shortTitle = article.title.length > 45 ? article.title.slice(0, 42) + "…" : article.title;
  return {
    title: `${shortTitle} | FL Medicare Hub`,
    description: article.description.length > 155 ? article.description.slice(0, 152) + "…" : article.description,
    alternates: { canonical: `https://www.floridamedicareadvantagehub.com/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.floridamedicareadvantagehub.com/blog/${slug}`,
      type: "article",
      publishedTime: article.datePublished,
    },
    keywords: article.newsKeywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: { "@type": "Person", name: "Licensed Florida Medicare Agent", jobTitle: "Licensed Insurance Agent" },
    publisher: { "@type": "Organization", name: "Florida Medicare Advantage Hub", url: "https://www.floridamedicareadvantagehub.com" },
    mainEntityOfPage: `https://www.floridamedicareadvantagehub.com/blog/${slug}`,
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <div className="bg-[#1e3a5f] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>/</span>
              <span>{article.category}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl">{article.title}</h1>
            <p className="text-blue-200 mt-3 text-sm">Published {article.datePublished} · Licensed Florida Medicare Agent</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Outgoing authoritative links */}
            <div className="mt-10 p-5 bg-[#fdf8f0] rounded-xl border border-gray-200">
              <h3 className="font-semibold text-[#1e3a5f] mb-3">Official Medicare Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov — Official U.S. Medicare Information ↗</a></li>
                <li><a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Social Security Administration — Medicare Enrollment ↗</a></li>
                <li><a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Centers for Medicare & Medicaid Services (CMS) ↗</a></li>
                <li><a href="https://www.floridashiphelp.org" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida SHIP — Free State Medicare Counseling ↗</a></li>
              </ul>
            </div>

            {related.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif font-bold text-[#1e3a5f] text-xl mb-5">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="block p-4 bg-white border border-gray-100 rounded-lg hover:border-[#0d9488] transition-colors">
                      <div className="font-semibold text-[#1e3a5f] hover:text-[#0d9488]">{r.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{r.description.slice(0, 100)}…</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
