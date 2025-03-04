import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";
import { CountrySelect } from "./ContrySelect";
import DocumentInput from "./DocumentInput";

import RegisterFormStep3 from "./RegisterFormStep3";
import { CreateMembershipSchema } from "@/lib/ZodSchema";
export function RegisterForm({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const t = useTranslations("RegisterPage");
  const locale = useLocale();
  const direction = getLangDir(locale);

  const formSchema = CreateMembershipSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      selection: "" as "Affiliate" | "Active",
      firstname: "",
      lastname: "",
      email: "",
      cin: "",
      country: "",
      number: "",
      number2: "",
      establishment: "",
      establishment_country: "",
      number_of_employees: "",
      max_capital: "",
      document: undefined,
    },
    shouldUnregister: true,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", { ...values });

    // Add proper form submission logic here
    try {
      // Example API call
      // await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // });

      // Show success message or redirect
      alert("Form submitted successfully!");
      // You could redirect here or show a success message
      setStep(4);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  }
  /*   console.log("radio value : ", form.watch("selection"));
   */

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Step 1 */}
          <div className={cn(step === 1 ? "block " : "hidden")}>
            <FormField
              control={form.control}
              name="selection"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      dir={direction}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 accent-primary"
                    >
                      <FormItem className="flex items-center space-x-4 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="Affiliate"
                            className="border-[#AF9113] text-[#AF9113]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal font-amiri text-xl">
                          {t("step1.Affiliate Membership")}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-4 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="Active"
                            className="border-[#AF9113] text-[#AF9113]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal font-amiri text-xl">
                          {t("step1.Active Membership")}
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end">
              <Button
                type="button"
                onClick={async () => {
                  const isValid = await form.trigger("selection");
                  if (isValid) {
                    setStep((prev) => prev + 1);
                  }
                }}
                className="mt-4 text-lg text-white font-amiri bg-[#0E4815] hover:bg-[#092F0E] px-4 py-2"
              >
                {t("step1.button")}
              </Button>
            </div>
          </div>

          {/* Step 2 */}

          <div className={cn(step === 2 ? "block space-y-5" : "hidden")}>
            <div className="flex  gap-4 w-full flex-col lg:flex-row ">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{t("step2.firstname")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("step2.firstnameplaceholder")}
                        {...field}
                        className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{t("step2.lastname")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("step2.lastnameplaceholder")}
                        {...field}
                        className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.emailplaceholder")}
                      {...field}
                      className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cin"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.cin")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.cinplaceholder")}
                      {...field}
                      className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CountrySelect
              name="country"
              label={t("step2.country")}
              placeholder={t("step2.countryplaceholder")}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.number")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.numberplaceholder")}
                      {...field}
                      className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number2"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.number2")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.number2placeholder")}
                      {...field}
                      className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("selection") === "Active" && (
              <FormField
                control={form.control}
                name="establishment"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>{t("step2.establishment")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("step2.establishmentplaceholder")}
                        {...field}
                        className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {form.watch("selection") === "Active" && (
              <CountrySelect
                name="establishment_country"
                label={t("step2.establishment_country")}
                placeholder={t("step2.establishment_countryplaceholder")}
              />
            )}
            {form.watch("selection") === "Active" && (
              <FormField
                control={form.control}
                name="number_of_employees"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>{t("step2.number_of_employees")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("step2.number_of_employeesplaceholder")}
                        {...field}
                        className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {form.watch("selection") === "Active" && (
              <FormField
                control={form.control}
                name="max_capital"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>{t("step2.max_capital")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("step2.max_capitalplaceholder")}
                        {...field}
                        className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <DocumentInput />
            <div className="flex gap-4 mb-5 w-full justify-between items-center">
              <Button
                variant={"outline"}
                className="border-[#0E4815]
               text-[#0E4815] font-bold px-4 py-2 bg-white dark:bg-gray-800"
                onClick={() => {
                  form.clearErrors();
                  setStep((prev) => prev - 1);
                }}
              >
                {t("step2.button2")}
              </Button>
              <Button
                type="button"
                onClick={async () => {
                  const isValid = await form.trigger([
                    "firstname",
                    "lastname",
                    "email",
                    "cin",
                    "number",
                    "number2",
                    "country",
                    "document",
                  ]);
                  if (isValid) {
                    setStep((prev) => prev + 1);
                  }
                }}
                className="mt-4 text-lg text-white font-amiri bg-[#0E4815] hover:bg-[#092F0E] px-4 py-2"
              >
                {t("step2.button1")}
              </Button>
            </div>
          </div>

          {/* Step 3 */}
          <RegisterFormStep3 step={step} setStep={setStep} />
        </form>
      </Form>
    </FormProvider>
  );
}
