"use client";
import Link from "next/link";
import { useState } from "react";

const PHONE = "(435) 612-1009";
const PHONE_HREF = "tel:+114356121009";

const NAV = [
  { label: "Medicare Advantage", href: "/medicare-advantage" },
  { label: "Medicare Supplement", href: "/medicare-supplement" },
  { label: "Dual Eligible", href: "/dual-eligible" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* CMS Disclaimer */}
      <div className="bg-[#1e3a5f] text-white text-xs text-center py-2 px-4 leading-relaxed">
        We do not offer every plan available in your area. Currently we represent organizations which offer products in your area. Please contact{" "}
        <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov</a>,{" "}
        1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.
      </div>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-[#1e3a5f] text-lg">Florida Medicare Advantage Hub</span>
              <span className="text-[#0d9488] text-xs font-medium">Free Medicare Help for Florida Seniors</span>
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="text-gray-700 hover:text-[#0d9488] text-sm font-medium transition-colors">
                  {n.label}
                </Link>
              ))}
            </nav>
            {/* Phone CTA */}
            <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
              📞 {PHONE}
            </a>
            {/* Mobile menu button */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-600" aria-label="Toggle menu">
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-gray-700 hover:text-[#0d9488] font-medium py-1">
                {n.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="btn-amber w-full text-center mt-2">📞 {PHONE}</a>
          </div>
        )}
      </header>
    </>
  );
}
