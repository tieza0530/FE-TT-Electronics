"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Marquee from "react-fast-marquee"
import { CarouselTopProductSale } from "./CarouselTopProductSale"
import { useEffect, useState } from "react"
import { FormatTime } from "../../convert/FormatTime"
import { dataProducts, itemsData } from "../../dataTest"

export const TopProductsSale = () => {
    const route = useRouter()
      const [timeSale, setTimeSale] = useState(70);

    useEffect(() => {
        setTimeout(() => { if (timeSale > 0) setTimeSale(timeSale - 1) }, 1000)
    })
    return (
        <div className="bg-main p-4 rounded-sm mt-4">
            <div className="grid grid-cols-5 items-center text-center">
                <div className="col-span-1">
                    <span className="flex font-semibold text-2xl text-yellow-200">TOP SALE LỚN
                        <Image src="/flash.webp" alt="flash" width={20} height={20} className="w-10 h-10 animate-bounce " />
                    </span>
                </div>
                <div className="col-span-3 overflow-hidden ">
                    <Marquee gradient={false} pauseOnHover speed={150}>
                        {itemsData.map((items, idx) => {
                            return (
                                <div key={idx} className="text-md text-yellow-200 mx-40 cursor-pointer" onClick={() => route.push('/')}>
                                    <p>{items.split(',')}</p>
                                </div>
                            )
                        })}
                    </Marquee>

                </div>
                <div className="col-span-1 text-white font-semibold">
                    <p>{timeSale == 0 ? "Chương trình kết thúc" : <span className="text-lg">{FormatTime(timeSale)}</span> } </p>
                </div>

            </div>
            <div>
                <CarouselTopProductSale dataProducts={dataProducts} />
            </div>
        </div>
    )
}



