// app/confirmation/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function ThankYouStep() {
  const t = useTranslations("RegisterPage.step4");

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-800 p-4 pb-56">
      <div className="w-full  text-center  p-6 rounded-lg flex flex-col items-center justify-center gap-12  ">
        <BadgeCheck className="h-36 w-36 text-[#0E4815]" />
        <h2 className="text-4xl font-bold">{t("title")}</h2>

        <p className="text-muted-foreground text-xl ">{t("subtitle1")}</p>
        <p className="text-muted-foreground text-xl">{t("subtitle2")}</p>
        <div className="space-y-2">
        <p className="text-[#AE9113] flex items-center justify-center gap-1">
          <span>✉️</span> {t("subsubtitle1")}
        </p>
        <p className="text-[#AE9113] flex items-center justify-center gap-1">
          <span>💬</span> {t("subsubtitle2")}
        </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full bg-[#0E4815] text-white hover:bg-[#0a3610] ">
              {t("button1")}
            </Button>
          </Link>
          <Link href="/support" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full bg-transparent border-[#0E4815] text-[#0E4815] hover:bg-[#0E4815] hover:text-white "
            >
              {t("button2")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
