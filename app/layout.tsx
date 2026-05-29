import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.genuinesuppliers.com.np"),
  title: "Genuine Suppliers & Builders Pvt. Ltd. | Lalitpur, Nepal",
  description:
    "Trusted construction and building services in Lalitpur, Nepal. Electric, plumbing, tiles, CCTV, AC, furniture and more. Call 9860484821.",
  keywords: [
    "construction Nepal",
    "builders Lalitpur",
    "plumbing Nepal",
    "electric services Nepal",
    "genuine suppliers builders",
  ],
  icons: {
  icon: "/favicon.ico?v=123",
  shortcut: "/favicon.ico",
},
  openGraph: {
    title: "Genuine Suppliers & Builders Pvt. Ltd.",
    description: "Building Trust, Constructing Future - Lalitpur, Nepal",
    url: "https://www.genuinesuppliers.com.np",
    type: "website",
  },
};
 const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Genuine Suppliers & Builders Pvt. Ltd.",

  image:
    "https://genuinesuppliers.com.np/image/logo/genuine-logo.png",

  url: "https://genuinesuppliers.com.np",

  telephone: "+977-9860484821",

  email: "suppliersg38@gmail.com",

  description:
    "Construction and building services in Lalitpur, Nepal including plumbing, electrical, CCTV, AC installation, furniture, tiles, painting and waterproofing.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Lalitpur Metropolitan-25, Bhainsepati",
    addressLocality: "Lalitpur",
    addressRegion: "Bagmati",
    postalCode: "44700",
    addressCountry: "NP",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.65290",
    longitude: "85.30907",
  },

  areaServed: {
    "@type": "Country",
    name: "Nepal",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ], 
   
  priceRange: "$$",

  sameAs: [
    "https://www.instagram.com/suppliers__builders",
    "https://www.tiktok.com/@genuine.suppliers",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electric & Electronics",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plumbing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tiles & Marble",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Painting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CCTV Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Installation & Servicing",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-brand-dark font-body antialiased">
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <FloatingNav />
        <Analytics />
      </body>
    </html>
  );
}
