import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssessmentForm } from "@/components/forms/AssessmentForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Request your free water savings assessment. EcoWise Water serves HOAs, apartment communities, and businesses across Utah.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Request your no cost water assessment"
            description="Tell us a bit about your property and we'll follow up to schedule your no-cost assessment."
          />
          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-50">
                <Phone className="h-4 w-4 text-leaf-600" />
              </span>
              <a href={siteConfig.phoneHref} className="text-sm font-medium text-navy-900">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-50">
                <Mail className="h-4 w-4 text-leaf-600" />
              </span>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-navy-900">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-50">
                <MapPin className="h-4 w-4 text-leaf-600" />
              </span>
              <span className="text-sm font-medium text-navy-900">{siteConfig.address.full}</span>
            </li>
          </ul>
          <p className="mt-8 text-sm text-stone-500">{siteConfig.hours}</p>
        </div>

        <div id="assessment-form" className="rounded-3xl border border-stone-200 bg-stone-50 p-8 sm:p-10">
          <AssessmentForm />
        </div>
      </Container>
    </section>
  );
}
