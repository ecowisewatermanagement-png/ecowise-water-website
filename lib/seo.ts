import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const ogImage = image ?? "/opengraph-image";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Utah",
    },
  };
}
