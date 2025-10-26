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
      <body className={`${cinzel.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
