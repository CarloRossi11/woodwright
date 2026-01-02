import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Woodwright Millwork LLC",
  description:
    "Learn about Woodwright Millwork LLC, a North Carolina-based company specializing in custom carpentry, cabinetry, millwork, and home remodeling.",
  alternates: {
    canonical: "https://woodwright.netlify.app/about",
  },
  openGraph: {
    title: "About Woodwright Millwork LLC",
    description:
      "Discover the craftsmanship and experience behind Woodwright Millwork LLC.",
    url: "https://woodwright.netlify.app/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
