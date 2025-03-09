"use client"
import { useFormContext } from 'react-hook-form'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { getLangDir } from 'rtl-detect'
import { useLocale } from 'next-intl'
import { Arab_contries } from '@/lib/constants'


export function CountrySelect({ name, label, placeholder }: { name: string; label: string; placeholder: string }) {
  const { control } = useFormContext()
  const locale = useLocale();
    const direction = getLangDir(locale);

  
    const countriesTranslated = Arab_contries()


  // Sort the list based on the current locale’s collator
  countriesTranslated.sort((a, b) => a.label.localeCompare(b.label, locale));

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value} >
              <SelectTrigger dir={direction} className="border-muted-foreground py-5">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="border-muted-foreground bg-white dark:bg-gray-800">
                {countriesTranslated.map((country) => (
                  <SelectItem
                    key={country.value}
                    value={country.value}
                    dir={direction}
                    className="border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground"
                  >
                    <p className="text-muted-foreground">{country.label}</p>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
