"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";
import { usePathname, useRouter } from "next/navigation";
import { languages } from "@/lib/constants";

const Languagedropdown = () => {
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const router = useRouter();
  const pathname = usePathname();
  const languageRef = useRef(null);
  const locale = useLocale();
  const direction = getLangDir(locale);
  const [languageOpen, setLanguageOpen] = useState(false);

  const handleLanguageHoverStart = () => {
    if (timeoutRefs.current.language) {
      clearTimeout(timeoutRefs.current.language);
      delete timeoutRefs.current.language;
    }
    setLanguageOpen(true);
  };

  const handleLanguageChange = (langCode: string) => {
    router.push(pathname.replace(/^\/(en|fr|ar)/, `/${langCode}`));
  };

  const handleLanguageHoverEnd = () => {
    timeoutRefs.current.language = setTimeout(() => {
      setLanguageOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  return (
    <div
      ref={languageRef}
      className="relative"
      onMouseEnter={handleLanguageHoverStart}
      onMouseLeave={handleLanguageHoverEnd}
    >
      <Popover open={languageOpen} onOpenChange={setLanguageOpen}  >
        <PopoverTrigger asChild dir={direction} className="hover:text-[#0E4815] hover:bg-white dark:hover:bg-gray-800">
          <div className="flex items-center gap-1 p-2 rounded-md hover:bg-muted transition-colors cursor-pointer">
            <Globe className="h-5 w-5" />
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                languageOpen && "transform rotate-180"
              )}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-36 bg-white dark:bg-gray-800" sideOffset={8} dir={direction} >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`cursor-pointer p-2 hover:bg-gray-200 hover:text-[#0E4815] rounded-md ${
                direction === "rtl" ? "text-right" : ""
              }`}
            >
              <span className="flex items-center justify-between w-full ">
                {lang.name} ({lang.code})
              </span>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Languagedropdown;
