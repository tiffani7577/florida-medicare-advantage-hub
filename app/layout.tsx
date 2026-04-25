import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script"

const WM_GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? ""

export const metadata: Metadata = {
  title: {
    default: "Florida Medicare Advantage Hub | Free Plan Help",
    template: "%s | FL Medicare Hub",
  },
  description: "Free Medicare plan help for Florida seniors. Licensed agent serving all 67 Florida counties. Call (435) 612-1009.",
  metadataBase: new URL("https://www.floridamedicareadvantagehub.com"),
  openGraph: {
    siteName: "Florida Medicare Advantage Hub",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1FTTP3LHY9" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1FTTP3LHY9');` }} />
      </head>
      <body>
      {/* WO_MANUS_GA4 — GA4 + conversion events; set NEXT_PUBLIC_GA_MEASUREMENT_ID on the host */}
      {WM_GA_ID ? (
              <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${WM_GA_ID}`} strategy="afterInteractive" />
              <Script
                id="womanus-ga4-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${WM_GA_ID}',{send_page_view:true});`,
                }}
              />
              <Script id="womanus-ga4-events" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: "(function(){\nfunction gtagFn(){return typeof window!==\"undefined\"&&typeof window.gtag===\"function\"?window.gtag:null;}\nfunction wait(n,cb){var g=gtagFn();if(g)return cb(g);if(n>240)return;setTimeout(function(){wait(n+1,cb);},25);}\nwait(0,function(gtag){\ndocument.addEventListener(\"click\",function(ev){\nvar t=ev.target;if(!t||!t.closest)return;\nvar el=t.closest(\"a[href]\");if(!el)return;\nvar href=String(el.getAttribute(\"href\")||\"\");\nvar h=href.toLowerCase();\nif(h.indexOf(\"tel:\")===0){gtag(\"event\",\"phone_click\",{event_category:\"conversion\",link_url:href});return;}\nif(h.charAt(0)===\"/\"){\nvar paths=[\"/get-a-quote\",\"/get-quote\",\"/quote\",\"/request-a-quote\",\"/contact\",\"/call\",\"/phone\"];\nfor(var i=0;i<paths.length;i++){var p=paths[i];\nif(h===p||h.indexOf(p+\"/\")===0||h.indexOf(p+\"?\")===0){gtag(\"event\",\"cta_click\",{event_category:\"conversion\",link_url:href});return;}}\n}\n},true);\ndocument.addEventListener(\"submit\",function(ev){\nvar f=ev.target;if(f&&f.tagName===\"FORM\"){gtag(\"event\",\"form_submit\",{event_category:\"conversion\"});}\n},true);\n});\n})();" }} />
              </>
            ) : null}
      {children}
      <a href="/medicare-advantage-plans-florida-2026">medicare advantage plans florida 2026</a>
</body>
    </html>
  );
}