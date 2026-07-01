import { AlertCircle } from "lucide-react";
import { whyItMatters } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyItMatters() {
  return (
    <section className="bg-navy-950 py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Water costs in Utah keep climbing. Most properties are paying for waste they can't see."
          light
        />
        <ul className="space-y-6">
          {whyItMatters.map((point) => (
            <li key={point.title} className="flex gap-4">
              <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-leaf-400" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
