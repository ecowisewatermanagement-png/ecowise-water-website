import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CtaBandProps {
  title?: string;
  description?: string;
}

export function CtaBand({
  title = "Ready to see what you're overpaying?",
  description = "Request a no cost water assessment. No obligation, no pressure — just a clear picture of where your property stands.",
}: CtaBandProps) {
  return (
    <section className="bg-leaf-600 py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-base leading-relaxed text-white/85">{description}</p>
        <Button href="/contact#assessment-form" variant="navy" size="lg">
          Request Your No Cost Water Assessment
        </Button>
      </Container>
    </section>
  );
}
