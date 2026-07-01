export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "droplets" | "clipboard-check" | "wrench" | "trending-down" | "search" | "sparkles" | "badge-percent";
}

export const services: Service[] = [
  {
    id: "water-usage-assessments",
    title: "Water Usage Assessments",
    description:
      "A full picture of how your property actually uses water — meters, fixtures, irrigation, and billing history — so decisions are based on data, not guesswork.",
    icon: "droplets",
  },
  {
    id: "water-conservation-planning",
    title: "Water Conservation Planning",
    description:
      "A practical, prioritized roadmap for reducing consumption over time, built around your property's budget and timeline.",
    icon: "clipboard-check",
  },
  {
    id: "fixture-retrofit-evaluations",
    title: "Toilet & Fixture Retrofit Evaluations",
    description:
      "Identify aging, high-flow toilets and fixtures that are quietly driving up your water bill, and what replacing them would actually save.",
    icon: "wrench",
  },
  {
    id: "utility-cost-reduction",
    title: "Utility Cost Reduction Strategies",
    description:
      "Targeted recommendations to lower your monthly water and sewer costs without disrupting residents, tenants, or operations.",
    icon: "trending-down",
  },
  {
    id: "leak-detection",
    title: "Leak Detection Recommendations",
    description:
      "Spot the signs of hidden leaks in irrigation lines, common areas, and units before they turn into a costly utility bill or property damage.",
    icon: "search",
  },
  {
    id: "efficiency-improvements",
    title: "Water Efficiency Improvement Opportunities",
    description:
      "From landscaping and irrigation scheduling to low-flow upgrades, a clear list of the improvements with the best return.",
    icon: "sparkles",
  },
  {
    id: "incentive-rebate-guidance",
    title: "Conservation Incentive & Rebate Guidance",
    description:
      "Utah water districts and municipalities offer real rebates for conservation upgrades. We help you find and qualify for them.",
    icon: "badge-percent",
  },
];

export interface Audience {
  title: string;
}

export const audiences: Audience[] = [
  { title: "Apartment Communities" },
  { title: "Homeowners Associations (HOAs)" },
  { title: "Commercial Properties" },
  { title: "Churches & Non-Profits" },
  { title: "Schools & Public Facilities" },
  { title: "Property Management Companies" },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free Water Savings Assessment",
    description:
      "We review your property's water usage, billing history, and fixtures at no cost — no obligation to move forward.",
  },
  {
    step: "02",
    title: "Custom Conservation Plan",
    description:
      "You get a clear, prioritized report: where you're losing money, what to fix first, and what rebates you qualify for.",
  },
  {
    step: "03",
    title: "Implementation & Savings",
    description:
      "We guide you through upgrades and incentive applications, and help you track the savings as they show up on your bill.",
  },
];

export interface WhyPoint {
  title: string;
  description: string;
}

export const whyItMatters: WhyPoint[] = [
  {
    title: "Excessive water consumption",
    description: "Most properties are using — and paying for — more water than they need to.",
  },
  {
    title: "Aging or inefficient fixtures",
    description: "Older toilets, faucets, and irrigation systems waste water every single day.",
  },
  {
    title: "Potential utility savings",
    description: "Rising water rates across Utah mean small inefficiencies add up fast.",
  },
  {
    title: "Available conservation incentives",
    description: "Local districts offer rebates for upgrades most property owners never claim.",
  },
  {
    title: "Long-term water management opportunities",
    description: "A conservation plan protects your budget against future rate increases.",
  },
];
