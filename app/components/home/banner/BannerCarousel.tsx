"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function BannderCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full cursor-pointer"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent >
        {imgTest2.map((items, idx) => {
          return (
            <CarouselItem key={idx}>
              <div className="p-1">
                <Card className="overflow-hidden p-0">
                  <CardContent className="relative w-full aspect-video p-0">
                    <Image src={`/test/${items.url}`} alt={items.name} fill className="object-cover " priority={idx === 0}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}

      </CarouselContent>
      <CarouselPrevious className="left-4 rounded-sm bg-neutral-100" />
      <CarouselNext className="right-4 rounded-sm bg-neutral-100" />
    </Carousel>
  )
}



export const imgTest2 = [
    {
        "url": "slider_4.webp",
        "name": "lap dăt"
    },
    {
        "url": "slider_2.jpg",
        "name": "lap dăt"
    },
    {
        "url": "slider_3.jpg",
        "name": "lap dăt"
    },
]