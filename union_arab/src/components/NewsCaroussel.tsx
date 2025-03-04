"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";
import Autoplay from "embla-carousel-autoplay";
import Caroussel_Steps from "./Caroussel_Steps";
import CarousselFrame from "./NewsCarousselFrame";
import { news } from "@/lib/constants";

const NewsCaroussel = () => {
  const locale = useLocale();
  const direction = getLangDir(locale);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="w-full py-10 relative" // Added relative here
      opts={{ direction }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      setApi={setApi}
    >
      <CarouselContent>
        {news.map((item, index) => (
          <CarouselItem key={index}>
            <CarousselFrame
              className="aspect-1/2 md:aspect-5/2 w-full"
              Imagesrc={item.image}
              title={item.title}
              subtitle={item.content}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Moved Caroussel_Steps outside of CarouselContent */}
      <Caroussel_Steps
        current={current}
        total={count}
        className="absolute bottom-0 left-1/2 -translate-x-1 mb-4"
      />

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default NewsCaroussel;
