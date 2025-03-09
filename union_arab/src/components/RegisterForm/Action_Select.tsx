import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getLangDir } from "rtl-detect";
import { useLocale, useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const Action_Select = () => {
  const { control } = useFormContext();
  const t = useTranslations("RegisterPage");
  const locale = useLocale();
  const direction = getLangDir(locale);
  
  return (
    <FormField
      control={control}
      name="action_type"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{t("step2.action_type.title")}</FormLabel>
          <div className="flex flex-col gap-2">
            <Select
            
              value={field.value?.type || ""}
              onValueChange={(value) => {
                if (value === "other") {
                  field.onChange({ type: "other", custom: "" });
                } else {
                  field.onChange({ type: value });
                }
              }}
              dir={direction}
            >
              <SelectTrigger className="border-muted-foreground py-5 text-muted-foreground">
                <SelectValue placeholder={t("step2.action_type.title")} />
              </SelectTrigger>
              <SelectContent className="border-muted-foreground bg-white dark:bg-gray-800">
                <SelectGroup>
                  <SelectItem
                    className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground"
                    value="financing"
                  >
                    {t("step2.action_type.options.financing")}
                  </SelectItem>
                  <SelectItem
                    className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground"
                    value="training"
                  >
                    {t("step2.action_type.options.training")}
                  </SelectItem>
                  <SelectItem
                    className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground"
                    value="marketing"
                  >
                    {t("step2.action_type.options.marketing")}
                  </SelectItem>
                  <SelectItem value="other">
                    {t("step2.action_type.options.other")}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {field.value?.type === "other" && (
              <Input
                placeholder={t("step2.action_type.placeholder")}
                value={field.value?.custom || ""}
                onChange={(e) =>
                  field.onChange({
                    ...field.value,
                    custom: e.target.value,
                  })
                }
                className="border-muted-foreground text-muted-foreground dark:bg-gray-800"
              />
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Action_Select;