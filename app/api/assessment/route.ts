import { assessmentSchema } from "@/lib/validation";
import { sendLeadEmail } from "@/lib/email";

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  "apartment-community": "Apartment Community",
  hoa: "Homeowners Association (HOA)",
  commercial: "Commercial Property",
  "church-nonprofit": "Church / Non-Profit",
  "school-public": "School / Public Facility",
  "property-management": "Property Management Company",
  other: "Other",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = assessmentSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, phone, propertyType, propertyAddress, message } = parsed.data;

  await sendLeadEmail({
    subject: `New free assessment request from ${name}`,
    formName: "assessment",
    fields: {
      Name: name,
      Email: email,
      Phone: phone,
      "Property Type": propertyType ? PROPERTY_TYPE_LABELS[propertyType] : undefined,
      "Property Address": propertyAddress,
      Message: message,
    },
  });

  return Response.json({ success: true });
}
