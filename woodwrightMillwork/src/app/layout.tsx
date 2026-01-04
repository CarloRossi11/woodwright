import type { Metadata } from "next";
import { Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700"], // Bold for headers
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Normal + medium + bold for flexibility
});

export const metadata: Metadata = {
  title: "Woodwright & Millwork LLC",
  description:
    "Woodwright and Millwork, LLC specializes in home remodeling, from kitchens, bathrooms to outdoor living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload the first hero image */}
        <link
          rel="preload"
          as="image"
          href="/ripped/kitchen.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Optional: preconnect to Google Fonts if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${cinzel.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Woodwright Millwork LLC",
              url: "https://woodwright.netlify.app",
              telephone: "+1-412-491-7136",
              address: {
                "@type": "PostalAddress",
                streetAddress: "65 Glen Rd. PMB 252",
                addressLocality: "Garner",
                addressRegion: "NC",
                postalCode: "27529",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "North Carolina",
              },
              serviceType: [
                "Custom Millwork",
                "Custom Carpentry",
                "Kitchen Remodeling",
                "Bathroom Remodeling",
                "Built-ins",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
