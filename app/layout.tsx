import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
