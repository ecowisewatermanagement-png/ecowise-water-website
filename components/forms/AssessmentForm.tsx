"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqgkqzg";

const PROPERTY_TYPES = [
  "Apartment Community",
  "Homeowners Association (HOA)",
  "Commercial Property",
  "Church / Non-Profit",
  "School / Public Facility",
  "Property Management Company",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function AssessmentForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-leaf-200 bg-leaf-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-leaf-600" />
        <h3 className="font-display text-xl font-semibold text-navy-950">Request received</h3>
        <p className="max-w-sm text-sm text-stone-500">
          Thanks — we&apos;ll be in touch shortly to schedule your free water savings assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New No Cost Water Assessment request" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label htmlFor="propertyType" className="mb-2 block text-sm font-medium text-navy-900">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className="h-12 w-full rounded-lg border border-stone-200 bg-white px-4 text-sm text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500"
          >
            <option value="">Select one</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Field label="Property Address" name="propertyAddress" />

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy-900">
          Tell us about your property (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500"
          placeholder="Number of units, current water concerns, timeline, etc."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your request. Please try again, or call us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Request Your Free Assessment
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy-900">
        {label}
        {required && <span className="text-leaf-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-lg border border-stone-200 bg-white px-4 text-sm text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500"
      />
    </div>
  );
}
