"use client "
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { TVProduct } from "./typeProduct"
import Image from "next/image"
import { formatVND } from "../../convert/ConvertVND"

export function CarouselTopProductSale({ dataProducts }: { dataProducts: TVProduct[] }) {
    return (
        <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
                {dataProducts.map((items, index) => (
                    <CarouselItem key={index} className="pl-1 basis-1/4">
                        <div className="p-1">
                            <Card className="p-0 cursor-pointer rounded-sm">
                                <CardContent className="flex aspect-2/3 p-2 ">
                                    <div className="grid grid-rows-12">
                                        <div className="row-span-1">
                                            <Image src={`/brand/${items.brand}`} alt={items.name} width={90} height={50} />
                                        </div>
                                        <div className="row-span-5">
                                            <Image src={`/test/${items.images[0]}`} alt={items.name} width={200} height={200} className=" w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden" />
                                        </div>
                                        <div className="row-span-1 items-center flex gap-1 text-xs">
                                            <p className="p-1 px-2 bg-(--color-sale) text-white rounded-sm">{items.screen_size}</p>
                                            <p className="p-1 px-2 bg-(--color-sale) text-white rounded-sm">{items.refresh_rate}</p>

                                        </div>
                                        <div className="row-span-5 space-y-2">
                                            <p>{items.name}</p>
                                            <p className="text-lg font-semibold">{formatVND(items.retail_price - (items.retail_price * (items.discount_percent / 100)))}</p>
                                            <div className="flex gap-2" >
                                                <p className="text-md line-through text-gray-500">{formatVND(items.retail_price)}</p>
                                                <p className="text-red-500">(- {items.discount_percent}%)</p>
                                            </div>
                                            <p className="text-sm bg-(--color-sale) text-white text-center rounded-sm py-1">Tiết kiệm hơn so với thị trường: {formatVND(items.retail_price * (items.discount_percent / 100))}</p>
                                            <p className="h-4 w-full bg-orange-200 text-xs text-center rounded-xl text-white">còn hàng</p>

                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
