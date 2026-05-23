import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

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
  metadataBase: new URL("https://www.genuinesuppliers.com"),
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
  openGraph: {
    title: "Genuine Suppliers & Builders Pvt. Ltd.",
    description: "Building Trust, Constructing Future - Lalitpur, Nepal",
    url: "https://www.genuinesuppliers.com",
    type: "website",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Genuine Suppliers & Builders Pvt. Ltd.",
  telephone: "+977-9860484821",
  email: "suppliersg38@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lalitpur Metropolitan-25, Bhainsepati",
    addressLocality: "Lalitpur",
    addressCountry: "NP",
  },
  url: "https://www.genuinesuppliers.com",
  description: "Construction and building services in Nepal",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building Services",
    itemListElement: [
      "Electric & Electronics",
      "Plumbing",
      "Tiles & Marble",
      "Painting",
      "CCTV Installation",
      "AC Installation & Servicing",
      "Furniture & Modular Kitchen",
      "False Ceiling",
      "Metal & Aluminium Work",
      "Parqueting",
      "Water Proofing",
      "Microoven & Fridge Repair",
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
      </body>
    </html>
  );
}
