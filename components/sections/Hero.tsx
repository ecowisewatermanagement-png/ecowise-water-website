import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const proofPoints = ["No-cost assessment", "Serving Utah properties", "Rebate & incentive guidance"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, var(--color-leaf-500) 0%, transparent 45%), radial-gradient(circle at 85% 80%, var(--color-water-500) 0%, transparent 50%)",
        }}
      />
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-wide text-leaf-300 uppercase">
            Utah Water Conservation Consulting
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
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
