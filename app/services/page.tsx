import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Water usage assessments, conservation planning, fixture retrofit evaluations, leak detection, and rebate guidance for Utah properties.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Every service is built around one goal: lowering your water bill"
            description="We start with data, then hand you a plan you can actually act on — no jargon, no upsells."
            light
          />
        </Container>
      </section>
      <ServicesGrid showAll />
      <WhoWeHelp />
      <ProcessSteps />
      <CtaBand />
    </>
  );
}
