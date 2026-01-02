import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Woodwright Millwork LLC",
  description:
    "Contact Woodwright Millwork LLC to discuss custom carpentry, millwork, kitchens, bathrooms, and home remodeling projects in North Carolina.",
  alternates: {
    canonical: "https://woodwright.netlify.app/contact",
  },
  openGraph: {
    title: "Contact Woodwright Millwork LLC",
    description:
      "Get in touch with Woodwright Millwork LLC to start your custom carpentry or millwork project.",
    url: "https://woodwright.netlify.app/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
