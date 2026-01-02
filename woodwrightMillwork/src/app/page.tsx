import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Custom Millwork & Carpentry in North Carolina",
  description:
    "Woodwright Millwork LLC provides custom kitchens, bathrooms, cabinetry, built-ins, and specialty carpentry throughout North Carolina.",

  alternates: {
    canonical: "https://woodwright.netlify.app/",
  },

  openGraph: {
    title: "Woodwright Millwork LLC | Custom Carpentry & Millwork",
    description:
      "Expert custom millwork, built-ins, kitchens, and bathrooms crafted with precision in North Carolina.",
    url: "https://woodwright.netlify.app/",
    siteName: "Woodwright Millwork LLC",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <HomeClient />;
}
