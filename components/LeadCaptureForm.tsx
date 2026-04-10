"use client";
import { useState } from "react";

interface Props {
  city?: string;
  title?: string;
}

export default function LeadCaptureForm({ city, title = "Get Your Free Plan Review" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ firstName: "", phone: "", zip: city ? "" : "33301", situation: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xzdkwren", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, city: city || "General", _subject: `New Medicare Lead${city ? ` — ${city}` : ""}` }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-serif text-xl font-bold text-[#1e3a5f] mb-2">We'll Be In Touch Soon!</h3>
        <p className="text-gray-600">A licensed Florida agent will contact you within 24 hours. You can also call us directly at <a href="tel:+17542028472" className="text-[#0d9488] font-semibold">(754) 202-8472</a>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
      <h3 className="font-serif text-xl font-bold text-[#1e3a5f] mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-5">Takes 2 minutes. No obligation. Response within 24 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
              placeholder="Your first name" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#0d9488]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
              placeholder="(555) 555-5555" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#0d9488]" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
          <input required value={form.zip} onChange={e => setForm({ ...form, zip: e.target.value })}
            placeholder="33301" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#0d9488]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What best describes you? *</label>
          <select required value={form.situation} onChange={e => setForm({ ...form, situation: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#0d9488] bg-white">
            <option value="">Select one...</option>
            <option>I received a non-renewal notice</option>
            <option>I'm turning 65 soon</option>
            <option>I want to compare my current plan</option>
            <option>I need help with Dual Eligible / Medicaid</option>
            <option>I'm new to Medicare</option>
            <option>Other</option>
          </select>
        </div>
        <button type="submit" disabled={status === "sending"}
          className="w-full bg-[#d97706] hover:bg-[#b45309] disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-base transition-colors">
          {status === "sending" ? "Sending..." : "Get My Free Plan Review →"}
        </button>
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          By submitting you consent to be contacted by a licensed Florida insurance agent at (754) 202-8472. We do not sell your personal information.
        </p>
      </form>
      {status === "error" && <p className="text-red-600 text-sm mt-2 text-center">Something went wrong. Please call us at (754) 202-8472.</p>}
    </div>
  );
}
