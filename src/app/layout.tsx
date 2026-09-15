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
    default: "Meta Toppers | Premium Web Design & Digital Marketing Agency",
    template: "%s | Meta Toppers",
  },
  description:
    "We design high-converting websites and run data-driven marketing campaigns for ambitious brands. Strategy, design, and growth — all under one roof.",
  icons: {
    icon: "/MetaToppers-bg.png",
    apple: "/MetaToppers-bg.png",
  },
  openGraph: {
    title: "Meta Toppers — Premium Web Design & Digital Marketing",
    description: "We design high-converting websites and run data-driven marketing campaigns for ambitious brands. Strategy, design, and growth — all under one roof.",
    url: "https://metatoppers.com",
    siteName: "Meta Toppers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meta Toppers — Premium Web Design & Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Toppers — Premium Web Design & Digital Marketing",
    description: "We design high-converting websites and run data-driven marketing campaigns for ambitious brands.",
    images: ["/og-image.jpg"],
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
