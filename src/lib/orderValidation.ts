import { z } from "zod";
import type { MarketCode } from "@/types";

export const orderFormSchema = z.object({
  firstName: z.string().trim().min(1, "required"),
  lastName: z.string().trim().min(1, "required"),
  email: z.string().trim().min(1, "required").email("invalidEmail"),
  phone: z.string().trim().min(1, "required"),
  countryCode: z.enum(["TN", "FR", "IT"]),
  city: z.string().trim().min(1, "required"),
  address: z.string().trim().min(1, "required"),
  postalCode: z.string().trim(),
  note: z.string().trim(),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;

export function validatePhone(phone: string, countryCode: MarketCode): string | null {
  const cleaned = phone.replace(/[\s\-().]/g, "");
  if (cleaned.length < 8) return "invalidPhone";

  switch (countryCode) {
    case "TN":
      if (!/^(\+216|216|0)?[2-9]\d{7}$/.test(cleaned)) return "invalidPhone";
      break;
    case "FR":
      if (!/^(\+33|33|0)[1-9]\d{8}$/.test(cleaned)) return "invalidPhone";
      break;
    case "IT":
      if (!/^(\+39|39|0)?3\d{8,9}$/.test(cleaned) && !/^(\+39|39|0)?0\d{6,10}$/.test(cleaned)) {
        return "invalidPhone";
      }
      break;
  }
  return null;
}

export function validateOrderForm(values: OrderFormValues): Partial<Record<keyof OrderFormValues, string>> {
  const result = orderFormSchema.safeParse(values);
  const errors: Partial<Record<keyof OrderFormValues, string>> = {};

  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof OrderFormValues;
      if (field && !errors[field]) errors[field] = issue.message;
    }
  }

  const phoneError = validatePhone(values.phone, values.countryCode);
  if (phoneError) errors.phone = phoneError;

  return errors;
}
