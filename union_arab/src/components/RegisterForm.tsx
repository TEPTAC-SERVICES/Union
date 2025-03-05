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
import { Checkbox } from "./ui/checkbox";
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

  const formSchema = z.object({
    selection: z.string().min(1, t("step1.error")),
    firstname: z.string().min(1, t("step2.firstnameplaceholder")),
    lastname: z.string().min(1, t("step2.lastnameplaceholder")),
    email: z.string().email(t("step2.emailplaceholder")),
    cin: z.string().min(1, t("step2.cinplaceholder")),
    contry: z.string().min(1, t("step2.contryplaceholder")),
    number: z.string().min(1, t("step2.numberplaceholder")),
    number2: z.string().min(1, t("step2.number2placeholder")),
    document: z.instanceof(File, {
      message: t("step2.documenterror"),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selection: "",
      firstname: "",
      lastname: "",
      email: "",
      cin: "",
      contry: "",
      number: "",
      number2: "",
      document: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values);
    // Handle form submission
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Step 1 */}
          <div className={cn(step === 1 ? "block" : "hidden")}>
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
                      <FormItem className="flex items-center space-x-24 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="option1"
                            className="border-[#AF9113] text-[#AF9113]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal font-amiri text-xl">
                          {t("step1.role1")}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="option2"
                            className="border-[#AF9113] text-[#AF9113]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal font-amiri text-xl">
                          {t("step1.role2")}
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
                <FormItem className="mt-">
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
            <CountrySelect />
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
            <DocumentInput />
            <div className="flex gap-4 mb-5 w-full justify-between items-center">
              <Button
                variant={"outline"}
                className="border-[#0E4815]
               text-[#0E4815] font-bold px-4 py-2 bg-white dark:bg-gray-800"
                onClick={() => setStep((prev) => prev - 1)}
              >
                {t("step2.button2")}
              </Button>
              <Button
                type="submit"
                onClick={async () => {
                  const isValid = await form.trigger([
                    "firstname",
                    "lastname",
                    "email",
                    "cin",
                    "number",
                    "number2",
                    "contry",
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

          <div className={cn(step === 3 ? " space-y-5 flex flex-col " : "hidden")}>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("step3.checkbox")}
              </label>
           
            </div>
            <div className="flex gap-4 mb-5 w-full justify-between items-center">
              <Button
                variant={"outline"}
                className="border-[#0E4815]
               text-[#0E4815] font-bold px-4 py-2 bg-white dark:bg-gray-800"
                onClick={() => setStep((prev) => prev - 1)}
              >
                {t("step3.button2")}
              </Button>
              <Button
                type="submit"
                onClick={async () => {
                  const isValid = await form.trigger([
                    "firstname",
                    "lastname",
                    "email",
                    "cin",
                    "number",
                    "contry",
                    "document",
                  ]);
                  if (isValid) {
                    setStep((prev) => prev + 1);
                  }
                }}
                className="mt-4 text-lg text-white font-amiri bg-[#0E4815] hover:bg-[#092F0E] px-4 py-2"
              >
                {t("step3.button1")}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
