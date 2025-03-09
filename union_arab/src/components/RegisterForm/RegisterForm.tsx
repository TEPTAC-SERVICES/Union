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
import Entity_Select from "./Entity_Select";
import Action_Select from "./Action_Select";
import PhoneNumberInput from "./PhoneNumberInput";
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
      member_type: "" as "Affiliate" | "Active" | "Expert",
      entity_name: "",
      entity_type: ""  as "government" | "regional_organizations" | "private_companies" |"associations" | "small_projects" |"consulting_offices" |"chambers_of_commerce" |"expert_houses" ,
      action_type: { type: "financing" },
      establishment_name: "",
      establishment_country: "",
      delegation: "",
      name: "",
      email: "",
      job: "",
      number: "",
      website: "",
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
 

/*   console.log("form values : ", form.getValues());*/  
    return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Step 1 */}
          <div className={cn(step === 1 ? "block " : "hidden")}>
            <FormField
              control={form.control}
              name="member_type"
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
                      <FormItem className="flex items-center space-x-4 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="Expert"
                            className="border-[#AF9113] text-[#AF9113]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal font-amiri text-xl">
                          {t("step1.Expert Membership")}
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
                  const isValid = await form.trigger("member_type");
                  if (isValid) {
                    setStep((prev) => prev + 1);
                    form.clearErrors();
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
              <FormField
                control={form.control}
                name="entity_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{t("step2.entity_name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("step2.entity_nameplaceholder")}
                        {...field}
                        className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <Entity_Select />
            <Action_Select />
            
         
            <FormField
              control={form.control}
              name="establishment_name"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.establishment_name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.establishment_nameplaceholder")}
                      {...field}
                      className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CountrySelect
              name="establishment_country"
              label={t("step2.establishment_country")}
              placeholder={t("step2.establishment_countryplaceholder")}
            />
           
           <PhoneNumberInput />
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
              name="website"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.website")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.websiteplaceholder")}
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
              name="delegation"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.delegation")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.delegationplaceholder")}
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
              name="name"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.nameplaceholder")}
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
              name="job"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>{t("step2.job")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("step2.jobplaceholder")}
                      {...field}
                      className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
         
           

            

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
                    "entity_name",
                    "entity_type",
                    "action_type",
                    "action_type",
                    "establishment_name",
                    "establishment_country",
                    "number",
                    "email",
                    "website",
                    "delegation",
                    "name",
                    "job",
                    "document",

                  ]);
                  if (isValid) {
                    setStep((prev) => prev + 1);
                    form.clearErrors();
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
