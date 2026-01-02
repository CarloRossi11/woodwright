import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Custom Carpentry & Millwork Portfolio",
  description:
    "View completed custom carpentry and millwork projects by Woodwright Millwork LLC, including kitchens, built-ins, cabinetry, and specialty woodwork.",
  alternates: {
    canonical: "https://woodwright.netlify.app/portfolio",
  },
  openGraph: {
    title: "Woodwright Millwork LLC Portfolio",
    description:
      "Browse custom carpentry and millwork projects crafted by Woodwright Millwork LLC.",
    url: "https://woodwright.netlify.app/portfolio",
  },
};

export default function Page() {
  return <PortfolioClient />;
}
