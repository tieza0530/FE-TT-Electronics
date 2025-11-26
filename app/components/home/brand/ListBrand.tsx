"use client"
import Image from "next/image"

export const ListBrand = () => {
    return (
        <div className="grid grid-cols-8 gap-1 items-center justify-center">
            {ItemsBrand.map((items, idx) => {
                return (
                    <div className="col-span-1 p-3 hover:scale-110 transition-transform duration-500 ease-in-out object-cover cursor-pointer" key={idx}>
                        <Image src={`/brand/${items.url}`} alt={items.name} width={140} height={20}  />
                    </div>
                )
            })}
        </div>
    )
}

export const ItemsBrand = [
    {
        "url": "thuonghieu_1.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_2.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_3.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_4.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_5.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_6.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_7.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_8.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_9.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_10.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_11.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_12.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_13.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_14.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_15.jpg",
        "name": "thuonghieu_1"
    },
    {
        "url": "thuonghieu_16.jpg",
        "name": "thuonghieu_1"
    },

]