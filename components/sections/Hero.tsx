import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const proofPoints = ["No-cost assessment", "Serving Utah properties", "Rebate & incentive guidance"];

export function Hero() {
  return (
    <section className="bg-navy-950">
      <Image
        src="/header-banner.png"
        alt="Sustainable Solutions. Stronger Communities. Helping businesses, communities, and property owners conserve water, reduce costs, and protect our future."
        width={2246}
        height={686}
        priority
        className="w-full object-cover"
      />

      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-wide text-leaf-300 uppercase">
            Utah Water Conservation Consulting
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Reduce Water Bills. Increase Rebates.{" "}
            <span className="text-leaf-400">Save Thousands.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            EcoWise Water helps Utah property owners, HOAs, apartment communities, and
            businesses cut water waste and capture conservation incentives — starting with a
            free, no-obligation water savings assessment.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/#assessment" size="lg">
              Request Your No Cost Assessment
            </Button>
            <Button href="/services" variant="ghost-light" size="lg">
              Explore Our Services
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-leaf-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
