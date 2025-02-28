"use client"
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { getLangDir } from "rtl-detect";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import Caroussel_Steps from "./Caroussel_Steps";

const TestimonialCaroussel = () => {
    const locale = useLocale();
    const direction = getLangDir(locale);
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
            {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 max-w-sm h-auto">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
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
