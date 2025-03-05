"use client"
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getLangDir } from "rtl-detect";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Caroussel_Steps from "./Caroussel_Steps";
import TestimonialCarousselFrame from "./TestimonialCarousselFrame";
const TestimonialCaroussel = () => {
    const locale = useLocale();
    const direction = getLangDir(locale);
    const t = useTranslations("HomePage.testimonial.content");
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    
    return (
        <Carousel 
            className="max-w-7xl py-10 relative mx-auto" // Added relative here
            opts={{ direction }}
            plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            setApi={setApi}
        >
            <CarouselContent>
            {[1,2,3,4,5].map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 max-w-sm h-auto aspect-square">
            <TestimonialCarousselFrame
              name={t(`name${index + 1}`)}
              job={t(`job${index + 1}`)}
              comment={t(`comment${index + 1}`)}
            />
          </CarouselItem>
        ))}
            </CarouselContent>
            
            {/* Moved Caroussel_Steps outside of CarouselContent */}
            <Caroussel_Steps 
                current={current} 
                total={count} 
                className="absolute bottom-0 left-1/2 -translate-x-1 mb-4 "
                stepcolor="#0E4815"
            />

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default TestimonialCaroussel
