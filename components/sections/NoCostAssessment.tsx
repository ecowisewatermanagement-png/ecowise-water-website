import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssessmentForm } from "@/components/forms/AssessmentForm";

export function NoCostAssessment() {
  return (
    <section id="assessment" className="bg-white py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-soft-lg">
          <Image
            src="/banner-conserve-today.png"
            alt="EcoWise Water Management — Conserve Today. Sustain Tomorrow."
            width={1280}
            height={328}
            className="w-full object-cover"
          />

          <div className="grid gap-12 bg-stone-50 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="No Cost. No Obligation."
              title="Request Your No Cost Water Assessment"
              description="We'll review your property's water usage, billing history, and fixtures at no charge and send you a clear picture of where you're overpaying — with no pressure to move forward."
            />
            <AssessmentForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
