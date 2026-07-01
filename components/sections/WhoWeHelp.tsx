import { Building2 } from "lucide-react";
import { audiences } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeHelp() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for the properties that carry Utah's water bills"
          description="If you're responsible for a water bill in Utah, there's likely money on the table."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white px-6 py-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-water-50">
                <Building2 className="h-5 w-5 text-water-600" />
              </span>
              <span className="font-medium text-navy-950">{audience.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
