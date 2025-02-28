"use client"

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import countries from 'i18n-iso-countries'
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
import { useLocale, useTranslations } from "next-intl"
import { getLangDir } from "rtl-detect"

export function CountrySelect() {
  const t = useTranslations("RegisterPage")
  const locale = useLocale()
  const direction = getLangDir(locale)
  const { control } = useFormContext()
  const [countryList, setCountryList] = useState<Array<{ value: string; label: string }>>([])

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const localeModule = await import(`i18n-iso-countries/langs/${locale}.json`)
        countries.registerLocale(localeModule)
      } catch (error) {
        console.log(error)
        const enModule = await import('i18n-iso-countries/langs/en.json')
        countries.registerLocale(enModule)
      }

      const countryCodes = Object.keys(countries.getAlpha2Codes())
      const countryOptions = countryCodes.map((code) => ({
        value: code,
        label: countries.getName(code, locale) || code,
      }))

      countryOptions.sort((a, b) => a.label.localeCompare(b.label, locale))
      setCountryList(countryOptions)
    }

    loadCountries()
  }, [locale])

  return (
    <FormField
      control={control}
      name="contry"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("step2.contryplaceholder")}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value} >
              <SelectTrigger dir={direction} className='border-muted-foreground'>
                <SelectValue placeholder={t("step2.contryplaceholder")} />
              </SelectTrigger>
              <SelectContent className='border-muted-foreground bg-white dark:bg-gray-800  '>
                {countryList.map((country) => (
                  <SelectItem 
                  className='border-muted-foreground bg-white dark:bg-gray-800 text-muted-foreground '
                    key={country.value} 
                    value={country.value}
                    dir={direction}
                  >
                    <p className='text-muted-foreground'>{country.label}</p>
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