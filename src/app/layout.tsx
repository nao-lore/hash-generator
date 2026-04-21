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

const SITE_URL = "https://hash-generator.vercel.app";

export const metadata: Metadata = {
  title: "Hash Generator - MD5, SHA-256, SHA-512 Online | hash-generator",
  description:
    "Free online hash generator. Compute MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes from text or files instantly in your browser. 100% client-side, no data sent to servers.",
  keywords: [
    "md5 hash generator",
    "sha256 generator",
    "hash generator online",
    "sha512 hash",
    "file hash calculator",
    "hash comparison tool",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Hash Generator - MD5, SHA-256, SHA-512 Online",
    description:
      "Free online hash generator. Compute MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes from text or files instantly in your browser.",
    url: SITE_URL,
    siteName: "Hash Generator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hash Generator - MD5, SHA-256, SHA-512 Online",
    description:
      "Free online hash generator. Compute MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes from text or files.",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Hash Generator",
    url: SITE_URL,
    description:
      "Free online hash generator supporting MD5, SHA-1, SHA-256, SHA-384, and SHA-512 algorithms. Works entirely in your browser.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
