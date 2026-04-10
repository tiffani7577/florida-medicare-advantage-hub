import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Medicare Advantage": "bg-teal-100 text-teal-800",
  "Medicare Supplement": "bg-blue-100 text-blue-800",
  "Enrollment": "bg-amber-100 text-amber-800",
  "Dual Eligible": "bg-purple-100 text-purple-800",
  "Carrier News": "bg-red-100 text-red-800",
};

export default function ArticleCard({ slug, title, description, date, category, readTime = "5 min read" }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 group">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[category] || "bg-gray-100 text-gray-700"}`}>
          {category}
        </span>
        <span className="text-xs text-gray-400">{readTime}</span>
      </div>
      <h3 className="font-serif font-bold text-[#1e3a5f] text-lg leading-snug mb-2 group-hover:text-[#0d9488] transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-400">{date}</span>
        <span className="text-[#0d9488] text-sm font-medium">Read more →</span>
      </div>
    </Link>
  );
}
