"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Button } from "@/components/ui/button";

export function Menu() {
    const visibleCount = 3;
    const [startIndex, setStartIndex] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const itemWidth = 160;

    const handleNext = () => {
        if (startIndex + visibleCount < dataMenu.length) {
            setStartIndex((prev) => prev + 1);
            setOffsetX((prev) => prev - itemWidth);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => prev - 1);
            setOffsetX((prev) => prev + itemWidth);
        }
    };

    return (
        <div className="relative flex items-center bg-(--color-main) text-white py-1 overflow-hidden 2xl:px-96 xl:px-32">
            <div className="w-3/4 overflow-hidden">

                <motion.div
                    animate={{ x: offsetX }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                    className="flex items-center whitespace-nowrap"
                >
                    {dataMenu.map((item, idx) => (
                        <div
                            key={idx}
                            className=" flex-none w-160px flex items-center cursor-pointer hover:text-yellow-400 transition px-3 "
                            style={{ minWidth: itemWidth }}
                        >

                            <Image
                                src={`/icon-menu/${item.icon}`}
                                alt={item.name}
                                width={22}
                                height={22}
                            />
                            <p className="ml-2 text-sm whitespace-nowrap">{item.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="w-1/4 flex justify-around items-center gap-2 pr-4 relative z-10 bg-(--color-main)">
                <div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 transition disabled:opacity-30"
                    >
                        <GrPrevious className="text-white" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNext}
                        disabled={startIndex + visibleCount >= dataMenu.length}
                        className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 transition disabled:opacity-30"
                    >
                        <GrNext className="text-white" />
                    </Button>
                </div>
                <motion.div
                    className="flex items-center bg-white p-1 rounded cursor-pointer shadow-sm"
                    style={{ transformOrigin: "center center" }}
                    animate={{
                        rotate: [0, -4, 4, -3, 3, 0],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/gift.webp"
                        alt="gift"
                        width={22}
                        height={22}
                    />
                    <p className="text-yellow-500 font-me select-none ml-2">KHUYẾN MÃI</p>
                </motion.div>
            </div>
        </div>
    );
}

export const dataMenu = [
    { name: "ĐIỀU HÒA", icon: "icon_megamenu_1.png" },
    { name: "ĐIỆN TỬ", icon: "icon_megamenu_2.png" },
    { name: "ĐIỆN LẠNH", icon: "icon_megamenu_3.png" },
    { name: "ĐỒ ĐIỆN GIA DỤNG", icon: "icon_megamenu_4.png" },
    { name: "NHÀ BẾP - MÁY RỬA BÁT", icon: "icon_megamenu_5.png" },
    { name: "SỨC KHỎE - LỌC NƯỚC", icon: "icon_megamenu_7.png" },
    { name: "KINH NGHIỆM SỬ DỤNG", icon: "icon_megamenu_8.png" },
];
