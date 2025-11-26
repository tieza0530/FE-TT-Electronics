"use client"

import { BannderCarousel } from "./BannerCarousel"
import Image from "next/image"


export const Banner = () => {
    return (
        <div className="grid grid-cols-6 mt-2 gap-2">
            <div className="col-span-4">
                <BannderCarousel />
            </div>
            <div className="col-span-2 grid grid-rows-3 gap-3 h-full py-1 cursor-pointer">
                {imgTest.map((items,idx) => {
                    return(
                        <div key={idx} className="relative w-full h-full">
                            <Image src={`/test/${items.url}`} alt={items.name} fill className="object-cover rounded-xs border-2 " />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export const imgTest = [
    {
        "url": "banner_right_1.webp",
        "name": "lap dăt"
    },
    {
        "url": "banner_right_2.png",
        "name": "lap dăt"
    },
    {
        "url": "banner_right_3.jpg",
        "name": "lap dăt"
    },
]