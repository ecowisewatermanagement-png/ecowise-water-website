export interface ProjectHistoryEntry {
  name: string;
  location: string;
  size: string;
  client: string;
  scope: string;
  note?: string;
}

export const projectHistory: ProjectHistoryEntry[] = [
  {
    name: "US Federal Court",
    location: "880 Front Street, San Diego, CA",
    size: "895,000 sq. ft. — 17-story building",
    client: "US General Services Administration",
    scope: "Retrofit toilets, faucets, and showerheads with low-flow devices; full repipe.",
  },
  {
    name: "US Federal Court — Historic Courthouse",
    location: "312 N Spring Street, Los Angeles, CA",
    size: "752,000 sq. ft. — 8-story building",
    client: "US General Services Administration",
    scope: "Retrofit toilets, faucets, and showerheads with low-flow devices.",
    note: "National Historic Register Property",
  },
  {
    name: "Mission Inn Hotel",
    location: "Riverside, CA",
    size: "320,000 sq. ft. — 238-room hotel",
    client: "Mission Inn Properties / Riverside Public Utilities",
    scope: "Fixture retrofits throughout the property.",
    note: "National Historic Register Property",
  },
  {
    name: "University of California, Irvine — Student Housing",
    location: "Irvine, CA",
    size: "4 student housing buildings, approximately 25,000 sf per building",
    client: "UC Irvine",
    scope: "Water usage study via submetering, with fixture retrofitting.",
  },
  {
    name: "University of California, Riverside — Student Housing",
    location: "Riverside, CA",
    size: "4 student housing buildings, approximately 25,000 sf per building",
    client: "UC Riverside",
    scope: "Water usage study via submetering, with fixture retrofitting.",
  },
  {
    name: "Elsinore Valley Municipal Water District",
    location: "Lake Elsinore, CA",
    size: "10,000 single-family homes",
    client: "Elsinore Valley Municipal Water District",
    scope:
      "Remove and install 10,000 Stealth 0.8 gpf toilets in single family homes; develop and manage customer and internal databases.",
  },
  {
    name: "Eastern Municipal Water District",
    location: "Perris, CA",
    size: "District-wide program",
    client: "Eastern Municipal Water District",
    scope: "Weather-based irrigation controller retrofit program.",
  },
];

export const projectHistoryClosing = {
  paragraphs: [
    "Our founders have performed retrofits and program consulting for most of the major water districts, master agencies and member agencies across Southern California.",
    "We have retrofitted hundreds of thousands of toilets, faucets, aerators and showerheads for public agencies and private property owners over more than ten years.",
    "Our consulting services include audits, grant applications, metering, device testing, online program signup, and data visibility for water districts and property owners alike.",
  ],
};
