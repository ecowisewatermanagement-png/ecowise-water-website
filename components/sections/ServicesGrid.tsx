import {
  BadgePercent,
  ClipboardCheck,
  Droplets,
  Search,
  Sparkles,
  TrendingDown,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  droplets: Droplets,
  "clipboard-check": ClipboardCheck,
  wrench: Wrench,
  "trending-down": TrendingDown,
  search: Search,
  sparkles: Sparkles,
  "badge-percent": BadgePercent,
};

interface ServicesGridProps {
  showAll?: boolean;
}

export function ServicesGrid({ showAll = false }: ServicesGridProps) {
  const list = showAll ? services : services.slice(0, 6);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Practical water conservation services for Utah properties"
          description="Every engagement starts with data, not guesswork — so every recommendation pays for itself."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Card key={service.id}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50">
                  <Icon className="h-5 w-5 text-leaf-600" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
