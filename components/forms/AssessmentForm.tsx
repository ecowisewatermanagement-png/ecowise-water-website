"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PROPERTY_TYPES = [
  { value: "apartment-community", label: "Apartment Community" },
  { value: "hoa", label: "Homeowners Association (HOA)" },
  { value: "commercial", label: "Commercial Property" },
  { value: "church-nonprofit", label: "Church / Non-Profit" },
  { value: "school-public", label: "School / Public Facility" },
  { value: "property-management", label: "Property Management Company" },
  { value: "other", label: "Other" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function AssessmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrors(json.errors ?? {});
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
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required error={errors.name?.[0]} />
        <Field label="Email" name="email" type="email" required error={errors.email?.[0]} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" error={errors.phone?.[0]} />
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
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Field label="Property Address" name="propertyAddress" error={errors.propertyAddress?.[0]} />

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

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
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
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
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
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
