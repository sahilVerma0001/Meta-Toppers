import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metatoppers.com"),
  title: {
    default: "Meta Toppers | Business Growth Partners",
    template: "%s | Meta Toppers",
  },
  description:
    "You deserve more clients than you're getting. Meta Toppers is your dedicated growth partner — we combine custom strategy, design, SEO, and marketing systems to scale your business.",
  icons: {
    icon: "/favicon.ico",
    apple: "/MetaToppers-bg.png",
  },
  openGraph: {
    title: "Meta Toppers — Business Growth Partners",
    description: "You deserve more clients than you're getting. We combine custom strategy, design, SEO, and marketing systems to scale your business.",
    url: "https://metatoppers.com",
    siteName: "Meta Toppers",
    images: [
      {
        url: "/api/og?title=Meta+Toppers",
        width: 1200,
        height: 630,
        alt: "Meta Toppers — Business Growth Partners",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Toppers — Business Growth Partners",
    description: "You deserve more clients than you're getting. We combine custom strategy, design, SEO, and marketing systems to scale your business.",
    images: ["/api/og?title=Meta+Toppers"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Meta Toppers",
              "image": "https://metatoppers.com/MetaToppers-bg.png",
              "@id": "https://metatoppers.com",
              "url": "https://metatoppers.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
              },
              "description": "Premium Web Design & Digital Marketing Agency in Jaipur.",
              "founder": [
                {
                  "@type": "Person",
                  "name": "Kartik Sharma"
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#f7fbff] text-zinc-900">{children}</body>
    </html>
  );
}
