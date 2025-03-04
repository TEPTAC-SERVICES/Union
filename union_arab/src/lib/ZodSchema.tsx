import { useTranslations } from "next-intl";
import * as z from "zod";

// Base schema with common fields that both roles share

export const CreateMembershipSchema = () => {
  const t = useTranslations("RegisterPage");

  return z.discriminatedUnion("selection", [
    // Affiliate Membership schema
    z.object({
      selection: z.literal("Affiliate"),
      firstname: z.string().min(1, t("step2.firstnameplaceholder")),
      lastname: z.string().min(1, t("step2.lastnameplaceholder")),
      email: z.string().email(t("step2.emailplaceholder")),
      cin: z.string().min(1, t("step2.cinplaceholder")),
      country: z.string().min(1, t("step2.countryplaceholder")),
      number: z.string().min(1, t("step2.numberplaceholder")),
      number2: z
        .string()
        .optional()
        .transform((val) => val?.trim() || undefined),
      document: z.instanceof(File, {
        message: t("step2.documenterror"),
      }),
    }),

    // Union Membership schema
    z.object({
      selection: z.literal("Active"),
      firstname: z.string().min(1, t("step2.firstnameplaceholder")),
      lastname: z.string().min(1, t("step2.lastnameplaceholder")),
      email: z.string().email(t("step2.emailplaceholder")),
      cin: z.string().min(1, t("step2.cinplaceholder")),
      country: z.string().min(1, t("step2.countryplaceholder")),
      number: z.string().min(1, t("step2.numberplaceholder")),
      number2: z
        .string()
        .optional()
        .transform((val) => val?.trim() || undefined),
      document: z.instanceof(File, {
        message: t("step2.documenterror"),
      }),
      establishment: z.string().min(1, t("step2.establishmentplaceholder")),
      establishment_country: z.string().min(1, t("step2.countryplaceholder")),
      number_of_employees: z.string().min(1, t("step2.employeesplaceholder")),
      max_capital: z.string().min(1, t("step2.max_capitalplaceholder")),
      
    }),
  ]);
};
