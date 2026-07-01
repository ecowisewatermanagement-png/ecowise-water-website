import { processSteps } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From free assessment to measurable savings"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <span className="font-display text-5xl font-bold text-leaf-100">{step.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
