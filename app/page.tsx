import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { NoCostAssessment } from "@/components/sections/NoCostAssessment";

export const metadata: Metadata = buildMetadata({
  title: "Utah Water Conservation & Cost Reduction",
  description:
    "Free water savings assessments for Utah HOAs, apartment communities, and businesses. Cut water waste, lower utility bills, and capture rebates.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhoWeHelp />
      <WhyItMatters />
      <ProcessSteps />
      <NoCostAssessment />
    </>
  );
}
