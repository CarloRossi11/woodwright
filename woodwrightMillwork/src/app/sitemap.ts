import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://woodwright.netlify.app/",
      lastModified: new Date(),
    },
    {
      url: "https://woodwright.netlify.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://woodwright.netlify.app/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://woodwright.netlify.app/contact",
      lastModified: new Date(),
    },
  ];
}
