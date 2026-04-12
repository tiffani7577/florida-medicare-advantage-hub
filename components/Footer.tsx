import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Teal CTA strip */}
      <div className="bg-[#0d9488] text-white py-10 px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Ready to Find Your Best Plan?</h2>
        <p className="text-teal-100 mb-6 max-w-xl mx-auto">Free consultation. No obligation. Response within 24 hours.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+114356121009" className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            📞 (435) 612-1009
          </a>
          <Link href="/contact" className="bg-white text-[#0d9488] hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-colors">
            Get Free Plan Review →
          </Link>
        </div>
      </div>
      <footer className="bg-[#1e3a5f] text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif font-bold text-white text-lg mb-2">Florida Medicare Advantage Hub</div>
            <p className="text-sm leading-relaxed">Licensed Florida insurance agent serving all 67 counties. English &amp; Español.</p>
            <p className="text-xs mt-3 text-gray-400">License #W942527</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Medicare Plans</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/medicare-advantage" className="hover:text-white transition-colors">Medicare Advantage</Link></li>
              <li><Link href="/medicare-supplement" className="hover:text-white transition-colors">Medicare Supplement</Link></li>
              <li><Link href="/dual-eligible" className="hover:text-white transition-colors">Dual Eligible (D-SNP)</Link></li>
              <li><Link href="/florida" className="hover:text-white transition-colors">Find Plans by City</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Medicare Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Medicare.gov ↗</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+114356121009" className="hover:text-white">(435) 612-1009</a></li>
              <li>Serving All 67 Florida Counties</li>
              <li>English &amp; Español</li>
              <li>No Cost — Ever</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-xs text-gray-500 space-y-2">
          <p>We do not offer every plan available in your area. Currently we represent organizations which offer products in your area. Please contact <a href="https://www.medicare.gov" className="underline" target="_blank" rel="noopener noreferrer">Medicare.gov</a>, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.</p>
          <p>© {new Date().getFullYear()} Florida Medicare Advantage Hub. All rights reserved. Licensed Insurance Agent #W942527.</p>
        </div>
      </footer>
    </>
  );
}
