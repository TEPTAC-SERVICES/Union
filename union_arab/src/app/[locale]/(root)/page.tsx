import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import { flags } from "@/lib/constants";
import * as motion from "motion/react-client";
import { getLangDir } from "rtl-detect";
import NewsCaroussel from "@/components/NewsCaroussel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCaroussel from "@/components/TestimonialCaroussel";
import { cn } from "@/lib/utils";


const Home = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const direction = getLangDir(locale);
  return (
    <div className=" min-h-screen  bg-white dark:bg-gray-800">
      {/* Hero */}
      <div className=" h-auto flex flex-col items-center justify-center py-16 bg-linear-to-r from-[#0E4815]/15 via-[#AF9113]/15 to-[#0E4815]/15 relative gap-12 text-center">
        <Image
          src="/bglogo.svg"
          width={620}
          height={620}
          alt="logo"
          className="absolute top-15"
        />
        <h1 className=" animated-gradient-text font-amiri font-bold text-[max(6vw,80px)]">
          {t("Hero.title")}
        </h1>
        <p className="text-black dark:text-white text-[50px] font-amiri font-bold max-w-4xl ">
          {t("Hero.subtitle")}
        </p>
        <div className="flex gap-5 flex-col md:flex-row font-amiri ">
          <Button className="text-white bg-[#0E4815] px-12 py-8 font-bold text-xl hover:bg-[#0a3610]   z-10">
            {t("Hero.button2")}
            <ArrowUpLeft
              className={cn(
                "text-white",
                direction === "ltr" ? "rotate-y-180" : ""
              )}
            />
          </Button>
          <Button
            variant="outline"
            className="text-[#0E4815] border-[#0E4815] px-12 py-8 bg-transparent font-bold text-xl z-10
              hover:bg-[#0E4815] hover:text-white transition-all duration-200"
          >
            {t("Hero.button1")}
            <ArrowUpLeft
              className={cn("  ", direction === "ltr" ? "rotate-y-180" : "")}
            />
          </Button>
        </div>
      </div>
      {/* Flags */}
      <div className="flex overflow-hidden px-36 py-24 h-52 flex-row items-center justify-center relative pl-[25rem] bg-white dark:bg-gray-800">
        {/* Double the content for seamless looping */}

        <motion.div
          animate={{
            x: direction === "rtl" ? "25.25%" : "-25.25%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-none gap-52 items-center "
        >
          {Array.from({ length: flags.length * 4 }).map((_, index) => {
            const flag = flags[index % flags.length];
            return (
              <Image
                key={index}
                src={flag.flag}
                width={120}
                height={80}
                alt={flag.name}
                className="shrink-0"
              />
            );
          })}
        </motion.div>
      </div>
      {/* news */}
      <div className=" py-20  lg:px-36 px-16 bg-white dark:bg-gray-800">
        <p className="text-center font-amiri text-[50px] font-bold">
          {t("news.title1")}
          <span className="font-bold text-[#AF9113]">{t("news.title2")}</span>
        </p>
        <NewsCaroussel />
      </div>
      {/*details*/}
      <div className="py-20 px-16 lg:px-36 bg-white dark:bg-gray-800">
        <Accordion
          type="single"
          collapsible
          className="w-full border-[#0E4815] "
        >
          <AccordionItem
            value="1"
            className="border-b-[1px] border-muted-foreground"
          >
            <AccordionTrigger className="font-amiri font-bold text-4xl text-black dark:text-white">
              <div className="flex gap-10 text-black dark:text-white">
                <Image
                  src="/details/scan-eye.svg"
                  width={43}
                  height={43}
                  alt="vision"
                />
                {t("details.vision.title")}
              </div>
            </AccordionTrigger>
            <AccordionContent className="font-amiri text-muted-foreground text-2xl">
              {t("details.vision.content")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="2"
            className="border-b-[1px] border-muted-foreground"
          >
            <AccordionTrigger className="font-amiri font-bold text-4xl">
              <div className="flex gap-10 text-black dark:text-white">
                <Image
                  src="/details/messages-square.svg"
                  width={43}
                  height={43}
                  alt="message"
                />
                {t("details.message.title")}
              </div>
            </AccordionTrigger>
            <AccordionContent className="font-amiri text-muted-foreground text-2xl">
              {t("details.message.content")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="3"
            className="border-b-[1px] border-muted-foreground"
          >
            <AccordionTrigger className="font-amiri font-bold text-4xl">
              <div className="flex gap-10 text-black dark:text-white">
                <Image
                  src="/details/goal.svg"
                  width={43}
                  height={43}
                  alt="goals"
                />
                {t("details.goals.title")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside font-amiri text-muted-foreground text-2xl">
                <li>{t("details.goals.content.1")}</li>
                <li>{t("details.goals.content.2")}</li>
                <li>{t("details.goals.content.3")}</li>
                <li>{t("details.goals.content.4")}</li>
                <li>{t("details.goals.content.5")}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="4"
            className="border-b-[1px] border-muted-foreground"
          >
            <AccordionTrigger className="font-amiri font-bold text-4xl">
              <div className="flex gap-10 text-black dark:text-white">
                <Image
                  src="/details/sparkles.svg"
                  width={43}
                  height={43}
                  alt="values"
                />
                {t("details.values.title")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside font-amiri text-muted-foreground text-2xl">
                <li>{t("details.values.content.1")}</li>
                <li>{t("details.values.content.2")}</li>
                <li>{t("details.values.content.3")}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* testimonials */}
      <div className="py-20 px-16 lg:px-36 bg-white dark:bg-gray-800">
        <p className="text-center font-amiri text-[50px] font-bold">
          {t("testimonial.title1")}
          <span className="font-bold text-[#AF9113]">
            {" "}
            {t("testimonial.title2")}
          </span>
        </p>
        <TestimonialCaroussel />
      </div>
      {/*download*/}
      <div className="py-20 px-16 lg:px-36 bg-white dark:bg-gray-800">
        <div className="py-20  bg-linear-to-r px-20 from-[#0E4815]/15 via-[#AF9113]/15 to-[#0E4815]/15 rounded-2xl">
          <h1 className="animated-gradient-text font-amiri font-bold text-5xl p-4">
            {t("download.title")}
          </h1>
          <p className="font-amiri text-muted-foreground font-bold text-2xl p-4">
            {t("download.content")}
          </p>
          <div className="flex w-full justify-end  gap-10">
          <Button 
          asChild
          className="bg-black hover:bg-gray-900 text-white h-auto py-3 px-5 rounded-xl"
        >
          <a href="#"  className="flex items-center">
            <div className="flex-1 text-right">
              <p className="text-xs opacity-80">احصل عليه من</p>
              <p className="text-lg font-semibold">جوجل بلاي</p>
            </div>
            <Image
              src="/googleplay.svg"
              width={32}
              height={32}
              alt="googleplay"
            />
          </a>
        </Button>
        
        {/* App Store Button */}
        <Button 
          asChild
          className="bg-black hover:bg-gray-900 text-white h-auto py-3 px-5 rounded-xl"
        >
          <a href="#" dir="rtl" className="flex items-center">
            <div className="flex-1 ">
              <p className="text-xs opacity-80">تنزيل من</p>
              <p className="text-lg font-semibold">متجر آبل</p>
            </div>
           <Image
              src="/Apple.svg"
              width={32}
              height={32}
              alt="apple"
            />
          </a>
        </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
