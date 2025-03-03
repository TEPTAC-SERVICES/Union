"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
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
    // Get current path and replace language code
    // This implementation depends on your i18n configuration
    router.push(pathname.replace(/^\/(en|fr|ar)/, `/${langCode}`));
  };

  const handleLanguageHoverEnd = () => {
    timeoutRefs.current.language = setTimeout(() => {
      setLanguageOpen(false);
    }, 150); // 150ms delay
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <DropdownMenu open={languageOpen} onOpenChange={() => {}}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-1 p-2 rounded-md hover:bg-muted transition-colors">
            <Globe className="h-5 w-5" />
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                languageOpen && "transform rotate-180"
              )}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36" sideOffset={8}>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={direction === "rtl" ? "text-right" : ""}
            >
              <span className="flex items-center justify-between w-full">
                {lang.name}
                {lang.code}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Languagedropdown;
