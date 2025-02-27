"use client"
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious ,  type CarouselApi} from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";
import Autoplay from "embla-carousel-autoplay"
import Caroussel_Steps from "./Caroussel_Steps";

  
  
  

  const NewsCaroussel = () => {
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
            {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[1/2] md:aspect-[5/2] items-center justify-center p-6">
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
                className="absolute bottom-0 left-1/2 -translate-x-1 mb-4" 
            />

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default NewsCaroussel
