"use client"
import Image from "next/image"
import { InputSeach } from "./InputSearch"
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCart } from "react-icons/pi";
import { Menu } from "./Menu";

export const Header = () => {
    return (
        <div>
            <div className="grid grid-cols-3 items-center py-2 2xl:px-80 xl:px-16 ">
                <div className="">
                    <Image src="/logo-without-background.png" alt="logo-company" width={300} height={50} />
                </div>
                <div>
                    <InputSeach />
                </div>
                <div >
                    <div className="flex justify-end items-center">
                        <TbPhoneCall className="text-3xl mr-2" />
                        <div className="text-sm">
                            <p>Tổng đài bán hàng</p>
                            <b>0373388097</b>
                        </div>
                        <AiOutlineUser className="text-3xl mx-2" />
                        <PiShoppingCart className="text-2xl " />
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}