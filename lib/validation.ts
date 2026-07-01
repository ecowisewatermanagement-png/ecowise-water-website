import { z } from "zod";

/** Honeypot field: real users never fill this in; bots often do. */
const honeypot = z.string().max(0).optional().or(z.literal(""));

export const assessmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").optional().or(z.literal("")),
  propertyType: z
    .enum([
      "apartment-community",
      "hoa",
      "commercial",
      "church-nonprofit",
      "school-public",
      "property-management",
      "other",
    ])
    .optional(),
  propertyAddress: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  company: honeypot,
});

export type AssessmentInput = z.infer<typeof assessmentSchema>;
