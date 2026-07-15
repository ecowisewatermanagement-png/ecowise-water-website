export const siteConfig = {
  name: "EcoWise Water Management",
  shortName: "EcoWise Water",
  tagline: "Reduce Water Bills. Increase Rebates. Save Thousands.",
  description:
    "EcoWise Water helps Utah property owners, HOAs, apartment communities, businesses, and organizations identify opportunities to reduce water consumption and lower utility costs — starting with a free water savings assessment.",
  url: "https://www.ecowisewater.com",
  phone: "+1 (760) 815-9617",
  phoneHref: "tel:+17608159617",
  email: "jack@ecowisewater.com",
  address: {
    city: "Heber City",
    state: "UT",
    full: "Heber City, UT",
  },
  hours: "Monday – Friday, 8:00 AM – 6:00 PM MT",
} as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Project History", href: "/project-history" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Client Portal", href: "https://portal.ecowisewater.com" },
] as const;

export const footerNav = {
  company: [
    { label: "About EcoWise", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Project History", href: "/project-history" },
    { label: "Contact", href: "/contact" },
  ],
  get_started: [
    { label: "No Cost Water Assessment", href: "/contact" },
  ],
} as const;
