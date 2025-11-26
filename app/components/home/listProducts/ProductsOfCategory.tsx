"use client"

import { formatVND } from "../../convert/ConvertVND"
import Image from "next/image"
import { TVProduct } from "../topSale/typeProduct"
import { ProductCategory } from "@/app/page"
import { PiShoppingCart } from "react-icons/pi";
import { Button } from "@/components/ui/button"
export const ProductsOfCategory = ({ dataProducts, category }: { dataProducts: TVProduct[], category: ProductCategory }) => {
  

    return (
        <div className="my-10">
            <div className="flex justify-between">
                <div className="bg-linear-to-r from-main to-main/70 flex items-center py-1 pl-2 pr-8 rounded-r-4xl relative">
                    <Image src={`/icon-menu/${category.url}`} alt={category.titile} width={40} height={10} className="w-10 h-12 mx-2" />
                    <span className="text-2xl font-semibold  text-white rounded-r-4xl">{category.titile}</span>
                </div>
                <div className="flex items-center gap-2">
                    {category.brand.map((items, idx) => {
                        return (
                            <div key={idx} className="border-2 rounded-4xl px-4 py-2 cursor-pointer hover:bg-neutral-200">
                                <p>{items.name_brand}</p>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
            <div className="my-4">
                <Image src={`/${category.banner_url}`} alt={category.titile} width={1280} height={300} className="w-full h-80 object-cover rounded-sm" />

            </div>
            <div className="grid grid-cols-4 gap-4 mt-7 ">
                {dataProducts.map((items, index) => (
                    <div className="p-2 rounded-sm border shadow " key={index}>
                        <div className=" grid grid-rows-12 cursor-pointer " title="xem chi tiết">
                            <div className="row-span-1">
                                <Image src={`/brand/${items.brand}`} alt={items.name} width={90} height={50} />
                            </div>
                            <div className="row-span-5 overflow-hidden">
                                <Image src={`/test/${items.images[0]}`} alt={items.name} width={200} height={200} className=" w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
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
                                {/* <div className="flex items-center">
                                    <div>
                                        <p className="bg-sale text-white text-xs font-semibold p-1 rounded-sm mr-2 ">KM</p>
                                    </div>
                                    <p className="text-sm">{items.promotions}</p>
                                </div> */}
                                <div className="grid grid-cols-3 gap-2">
                                    <Button className="bg-white border-2 hover:bg-gray-200" title="thêm giỏ hàng"><PiShoppingCart className="text-black" /></Button>
                                    <Button className="col-span-2 bg-main hover:bg-main/60" title="mua ngay">Mua ngay</Button>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}