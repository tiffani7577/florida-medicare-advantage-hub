import Link from "next/link";
import LeadCaptureForm from "./LeadCaptureForm";

export default function BlogSidebar() {
  return (
    <aside className="space-y-6">
      <LeadCaptureForm title="Get Free Plan Help" />

      {/* Final Expense */}
      <div className="bg-[#1e3a5f] text-white rounded-xl p-5">
        <p className="text-xs font-semibold text-teal-300 uppercase tracking-wide mb-1">Burial Insurance</p>
        <h3 className="font-serif font-bold text-lg mb-2">From $20/month — No Medical Exam</h3>
        <p className="text-sm text-gray-300 mb-4">Protect your family with final expense coverage from Transamerica or Americo.</p>
        {/* FINAL_EXPENSE_LINK_PLACEHOLDER — Replace href with your direct application link from FFL dashboard */}
        <a href="#" className="block text-center bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
          Get a Free Quote →
        </a>
      </div>

      {/* Trupanion Pet Insurance */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Pet Insurance</p>
        <h3 className="font-serif font-bold text-[#1e3a5f] text-lg mb-2">Protect Your Pet Too</h3>
        <p className="text-sm text-gray-600 mb-4">Trupanion covers 90% of unexpected vet bills. No payout limits.</p>
        {/* TRUPANION_AFFILIATE_PLACEHOLDER — $125/conversion. Sign up at trupanion.com/refer */}
        <a href="#" className="block text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
          Get a Pet Insurance Quote →
        </a>
      </div>

      {/* Official Resources */}
      <div className="bg-white border border-gray-100 rounded-xl p-5">
        <h3 className="font-semibold text-[#1e3a5f] mb-3">Official Medicare Resources</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Medicare.gov ↗</a></li>
          <li><a href="https://www.ssa.gov/medicare" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Social Security — Medicare ↗</a></li>
          <li><a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">CMS.gov ↗</a></li>
          <li><a href="https://www.floridashiphelp.org" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:underline">Florida SHIP ↗</a></li>
        </ul>
      </div>

      {/* Related pages */}
      <div className="bg-white border border-gray-100 rounded-xl p-5">
        <h3 className="font-semibold text-[#1e3a5f] mb-3">Explore Plans</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/medicare-advantage" className="text-[#0d9488] hover:underline">Medicare Advantage Plans →</Link></li>
          <li><Link href="/medicare-supplement" className="text-[#0d9488] hover:underline">Medicare Supplement Plans →</Link></li>
          <li><Link href="/dual-eligible" className="text-[#0d9488] hover:underline">Dual Eligible (D-SNP) →</Link></li>
          <li><Link href="/medigap/plan-g-vs-plan-n-florida-2026" className="text-[#0d9488] hover:underline">Plan G vs Plan N →</Link></li>
        </ul>
      </div>
    </aside>
  );
}
