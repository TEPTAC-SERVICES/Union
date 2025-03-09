"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Arab_contries } from "@/lib/constants";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useLocale, useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PhoneNumberInput = () => {
  const { control } = useFormContext();
  const arabCountries = Arab_contries();
  const t = useTranslations("RegisterPage");
  const locale = useLocale();
  const direction = getLangDir(locale);

  return (
    <FormField
      control={control}
      name="number"
      render={({ field }) => {
        // Find matching country based on current field value
        const selectedCountry =
          arabCountries.find((country) =>
            field.value?.startsWith(country.dialCode)
          ) || arabCountries.find((c) => c.dialCode === "+966");

        // Split the phone number into country code and local number
        const countryCode = selectedCountry?.dialCode || "+966";
        const localNumber = field.value?.replace(countryCode, "") || "";

        const handleCountryChange = (dialCode: string) => {
          // Combine new country code with existing local number
          const newValue = dialCode + localNumber;
          field.onChange(newValue);
        };

        const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          // Combine selected country code with new phone number
          const newValue = countryCode + e.target.value;
          field.onChange(newValue);
        };

        return (
          <FormItem>
            <FormLabel>{t("step2.number")}</FormLabel>
            <div 
              className={cn(
                "flex-row-reverse flex items-center", 
              )}
            >
              <Select value={countryCode} onValueChange={handleCountryChange} dir={direction}>
                <FormControl>
                  <SelectTrigger 
                    className={cn(
                      "w-[180px] bg-white dark:bg-gray-800 border-muted-foreground py-[1.2rem] text-muted-foreground rounded-s-none rounded-e-md",
                      
                    )}
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-muted-foreground bg-white dark:bg-gray-800">
                  {arabCountries.map((country) => (
                    <SelectItem 
                      key={country.dialCode} 
                      value={country.dialCode}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center justify-center w-full gap-5">
                        <span className="dark:text-white text-gray-800">
                          {country.dialCode}
                        </span>
                        <Image 
                          src={country.flag} 
                          alt={country.value} 
                          width={20} 
                          height={20} 
                        />
                        
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Phone Number Input */}
              <FormControl className="flex-1">
                <Input
                  placeholder={t("step2.numberplaceholder")}
                  value={localNumber}
                  onChange={handlePhoneChange}
                  type="tel"
                  dir={direction}
                  className={cn(
                    "border-muted-foreground bg-white dark:bg-gray-800 rounded-e-none rounded-s-md",
                   
                  )}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default PhoneNumberInput;