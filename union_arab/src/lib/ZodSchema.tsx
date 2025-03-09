import { useTranslations } from "next-intl";
import * as z from "zod";

// Base schema with common fields that both roles share

export const CreateMembershipSchema = () => {
  const t = useTranslations("RegisterPage");
  return z.object({
    member_type: z
      .enum(["Affiliate", "Active", "Expert"])
      .refine(() => true, { message: t("step1.error") }),
    entity_name: z.string().min(1, t("step2.entity_nameplaceholder")),
    entity_type: z.string().min(1, t("step2.entity_type.placeholder")),

    action_type: z
      .discriminatedUnion("type", [
        z.object({
          type: z.enum(["financing", "training", "marketing"]),
          custom: z.string().optional(),
        }),
        z.object({
          type: z.literal("other"),
          custom: z.string().min(1, { message: "Custom action type required" }),
        }),
      ])
      .default({ type: "financing" })
      .refine((val) => val.type !== "other" || !!val.custom, {
        message: "Custom action type required",
        path: ["custom"],
      }),

    establishment_name: z
      .string()
      .min(1, t("step2.establishment_nameplaceholder")),
    establishment_country: z
      .string()
      .min(1, t("step2.establishment_countryplaceholder")),
    number: z.string().min(1, t("step2.numberplaceholder")),
    email: z.string().email(t("step2.emailplaceholder")),
    website: z.string().min(1, t("step2.websiteplaceholder")),
    delegation: z.string().min(1, t("step2.delegationplaceholder")),
    name: z.string().min(1, t("step2.nameplaceholder")),
    job: z.string().min(1, t("step2.jobplaceholder")),
    document: z.instanceof(File, {
      message: t("step2.documenterror"),
    }),
  });

  /*   return z.discriminatedUnion("selection", [
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
  ]); */
};
