import type { Metadata } from "next";
import { Droplets, Leaf, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "EcoWise Water is a Utah-based water conservation company helping property owners understand their water usage and cut operating costs.",
  path: "/about",
});

const values = [
  {
    icon: Droplets,
    title: "Data first",
    description:
      "Every recommendation starts with your actual usage and billing history — not assumptions.",
  },
  {
    icon: Leaf,
    title: "Conservation that pays for itself",
    description:
      "We prioritize the upgrades and incentives with the fastest, clearest return for your property.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure, no obligation",
    description: "The initial assessment is free. You decide what to do with the findings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-20">
        <Container>
          <SectionHeading
            eyebrow="About EcoWise Water"
            title="A Utah-based water conservation company built around one problem: wasted water, wasted money"
            light
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-stone-600">
            EcoWise Water is a Utah-based water conservation company focused on helping property
            owners better understand their water usage and implement practical solutions that
            reduce waste and operating costs.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            We work with HOAs, apartment communities, commercial properties, churches and
            non-profits, schools, and property management companies across Utah — anyone
            responsible for a water bill that&apos;s higher than it needs to be. Water costs
            continue to rise throughout the state, and most properties have real opportunities to
            reduce usage through simple upgrades and better water management practices.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Every engagement starts the same way: a free, no-obligation water savings assessment
            that gives you a clear picture of where you stand before you spend a dollar.
          </p>
        </Container>
      </section>

      <section className="bg-stone-50 py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-stone-200 bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50">
                  <value.icon className="h-5 w-5 text-leaf-600" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
