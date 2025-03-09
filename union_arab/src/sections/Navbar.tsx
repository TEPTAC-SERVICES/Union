import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { MobileMenu } from "../components/navbar/MobileMenu";

import Languagedropdown from "@/components/navbar/Languagedropdown";
import MenuItemsDesktop from "@/components/navbar/MenuItemsDesktop";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <header className="bg-white dark:bg-gray-800 w-full h-32 z-20 flex items-center justify-between px-12 shadow-sm shadow-muted-foreground fixed">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="transition-transform hover:scale-105"
        />
      </Link>

      <MenuItemsDesktop />

      <div className="hidden md:flex gap-5 items-center ">
        <Languagedropdown />
        <ThemeToggle />
      </div>

      <div className="gap-5 hidden 2xl:flex">
        <Link href="/login">
          <Button className="text-white bg-[#0E4815] hover:bg-[#0a3610] font-bold px-6 py-2 rounded-md transition-all hover:shadow-md">
            <span className="flex items-center gap-1">{t("login")}</span>
          </Button>
        </Link>
        <Link href="/register">
          <Button
            variant="outline"
            className="text-[#0E4815] border-[#0E4815]  bg-transparent hover:bg-[#0E4815] hover:text-white font-bold px-6 py-2 rounded-md transition-all hover:shadow-md"
          >
            <span className="flex items-center gap-1">{t("register")}</span>
          </Button>
        </Link>
      </div>

      <MobileMenu className="2xl:hidden" />
    </header>
  );
};

export default Navbar;
