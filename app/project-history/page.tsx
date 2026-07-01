import type { Metadata } from "next";
import Image from "next/image";
import { Building2, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { projectHistory, projectHistoryClosing } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Project History",
  description:
    "A track record of large-scale water conservation retrofits for federal courthouses, historic hotels, university housing, and municipal water districts across Southern California.",
  path: "/project-history",
});

export default function ProjectHistoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <Image
          src="/banner-conserve-today.png"
          alt="EcoWise Water Management — Conserve Today. Sustain Tomorrow."
          width={1280}
          height={328}
          priority
          className="w-full object-cover"
        />
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Project History"
            title="A decade of large-scale water conservation retrofits"
            description="From federal courthouses to university housing to municipal-wide toilet programs — real projects, real fixture counts, real square footage."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projectHistory.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50">
                  <Building2 className="h-5 w-5 text-leaf-600" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {project.name}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-stone-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location}
                </p>
                {project.note && (
                  <span className="mt-3 inline-flex w-fit rounded-full bg-water-50 px-3 py-1 text-xs font-semibold text-water-600">
                    {project.note}
                  </span>
                )}
                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-navy-900">Size:</dt>
                    <dd className="text-stone-500">{project.size}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-navy-900">Client:</dt>
                    <dd className="text-stone-500">{project.client}</dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-stone-100 pt-4 text-sm leading-relaxed text-stone-600">
                  {project.scope}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              src="/hero-droplet-earth.png"
              alt="A single drop of water holding the earth, symbolizing global water conservation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our Track Record" title="Built by water conservation veterans" />
            <div className="mt-6 space-y-5">
              {projectHistoryClosing.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-stone-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
