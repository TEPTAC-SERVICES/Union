import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { getLangDir } from 'rtl-detect'
import { useLocale, useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
const Entity_Select = () => {
    const { control } = useFormContext()
    const  t = useTranslations("RegisterPage")
    const locale = useLocale();
      const direction = getLangDir(locale);
  
  return (
    <FormField
    control={control}
    name="entity_type"
    render={({ field }) => (
      <FormItem className="space-y-3" >
        <FormLabel>{t("step2.entity_type.title")}</FormLabel>
        <Select
          value={field.value}
          onValueChange={field.onChange}
          dir={direction}
        >
          <SelectTrigger className="border-muted-foreground py-5">
            <SelectValue placeholder={t("step2.entity_type.title")} />
          </SelectTrigger>
          <SelectContent className="border-muted-foreground bg-white dark:bg-gray-800">
            <SelectGroup>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="government">
                {t("step2.entity_type.options.government")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="regional_organizations">
                {t("step2.entity_type.options.regional_organizations")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="private_companies">
                {t("step2.entity_type.options.private_companies")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="associations">
                {t("step2.entity_type.options.associations")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="small_projects">
                {t("step2.entity_type.options.small_projects")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="consulting_offices">
                {t("step2.entity_type.options.consulting_offices")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="chambers_of_commerce">
                {t("step2.entity_type.options.chambers_of_commerce")}
              </SelectItem>
              <SelectItem  className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground" value="expert_houses">
                {t("step2.entity_type.options.expert_houses")}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

export default Entity_Select
