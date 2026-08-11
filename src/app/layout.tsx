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
  title: "Meta Toppers | Real Estate Digital Marketing & Web Design",
  description:
    "Meta Toppers engineers premium digital experiences, lead generation, and growth systems for top-tier real estate brands.",
  icons: {
    icon: "/MetaToppers-bg.png",
    apple: "/MetaToppers-bg.png",
  },
  openGraph: {
    title: "Meta Toppers | Real Estate Digital Marketing",
    description: "Meta Toppers engineers premium digital experiences and growth systems for ambitious real estate brands.",
    url: "https://metatoppers.com",
    siteName: "Meta Toppers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meta Toppers Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Toppers | Real Estate Digital Marketing",
    description: "Meta Toppers engineers premium digital experiences and growth systems for ambitious real estate brands.",
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
      <body className="bg-[#f7fbff] text-zinc-900">{children}</body>
    </html>
  );
}
