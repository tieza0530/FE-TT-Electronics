"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Marquee from "react-fast-marquee"
import { CarouselTopProductSale } from "./CarouselTopProductSale"
import { TVProduct } from "./typeProduct"
import { useEffect, useState } from "react"
import { FormatTime } from "../../convert/FormatTime"

export const TopProductsSale = () => {
    const route = useRouter()
      const [timeSale, setTimeSale] = useState(70);

    useEffect(() => {
        setTimeout(() => { if (timeSale > 0) setTimeSale(timeSale - 1) }, 1000)
    })
    console.log()
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



export const itemsData = [
    "HÀNG MỚI NGUYÊN HỘP CHÍNH HÃNG",
    "BẢO HÀNH TẠI NHÀ",
    "NHẬN HÀNG KIỂM TRA THANH TOÁN TẠI NHÀ",
    "GIAO HÀNG MIỄN PHÍ LẮP ĐẶT NỘI THÀNH",
    "LỖI 1 ĐỔI 1 TRONG 30 NGÀY",
]

export const dataProducts: TVProduct[] = [
    {
        "name": "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
        "brand": "thuonghieu_12.jpg",
        "model": "QA65LS03DAKXXV",
        "series": "The Frame LS03D 2024",
        "screen_size": "65 inch",
        "resolution": "4K (Ultra HD)",
        "display_type": "QLED",
        "special_design": "Lifestyle TV (khung tranh)",
        "processor": "Quantum Processor 4K",
        "refresh_rate": "120 Hz",
        "backlight_tech": "Dual LED",
        "anti_glare": "Matte Display (chống phản sáng)",
        "hdr": "Quantum HDR",
        "image_enhancement": [
            "Supreme UHD Dimming",
            "Motion Xcelerator",
            "EyeComfort",
            "Quantum Dot (100% dải màu DCI-P3)"
        ],
        "sound_system": {
            "channels": "2.0.2CH",
            "power": "40W",
            "technologies": [
                "Object Tracking Sound (OTS)",
                "Dolby Atmos",
                "Q-Symphony",
                "Adaptive Sound Pro",
                "Active Voice Amplifier"
            ]
        },
        "smart_os": "Tizen",
        "connectivity": {
            "hdmi": "4 cổng HDMI",
            "usb": "2 cổng USB",
            "wifi": "WiFi 5",
            "bluetooth": "Bluetooth 4.2",
            "others": [
                "AirPlay 2",
                "SmartThings App control",
                "One Remote (Solar Cell)"
            ]
        },
        "features": [
            "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
            "Khung viền linh hoạt (magnetic interchangeable bezel)",
            "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
            "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
            "Cảm biến ánh sáng & cảm biến chuyển động"
        ],
        "dimensions": {
            "with_stand": {
                "width": "145.7 cm",
                "height": "86.9 cm",
                "depth": "26.1 cm"
            },
            "without_stand": {
                "width": "145.7 cm",
                "height": "83.2 cm",
                "depth": "5.6 cm"
            }
        },
        "weight": {
            "with_stand": "22.5 kg",
            "without_stand": "22.1 kg"
        },
        "origin": "Việt Nam",
        "warranty": "24 tháng",
        "release_year": "2024",
        "retail_price": 22800000,
        "discount_percent": 24,
        "promotions": "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",
        "images": [
            "ls03d.webp",
        ],

    },
    {
        "name": "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",

        "brand": "thuonghieu_12.jpg",
        "model": "QA65LS03DAKXXV",
        "series": "The Frame LS03D 2024",
        "screen_size": "65 inch",
        "resolution": "4K (Ultra HD)",
        "display_type": "QLED",
        "special_design": "Lifestyle TV (khung tranh)",
        "processor": "Quantum Processor 4K",
        "refresh_rate": "120 Hz",
        "backlight_tech": "Dual LED",
        "anti_glare": "Matte Display (chống phản sáng)",
        "hdr": "Quantum HDR",
        "image_enhancement": [
            "Supreme UHD Dimming",
            "Motion Xcelerator",
            "EyeComfort",
            "Quantum Dot (100% dải màu DCI-P3)"
        ],
        "sound_system": {
            "channels": "2.0.2CH",
            "power": "40W",
            "technologies": [
                "Object Tracking Sound (OTS)",
                "Dolby Atmos",
                "Q-Symphony",
                "Adaptive Sound Pro",
                "Active Voice Amplifier"
            ]
        },
        "smart_os": "Tizen",
        "connectivity": {
            "hdmi": "4 cổng HDMI",
            "usb": "2 cổng USB",
            "wifi": "WiFi 5",
            "bluetooth": "Bluetooth 4.2",
            "others": [
                "AirPlay 2",
                "SmartThings App control",
                "One Remote (Solar Cell)"
            ]
        },
        "features": [
            "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
            "Khung viền linh hoạt (magnetic interchangeable bezel)",
            "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
            "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
            "Cảm biến ánh sáng & cảm biến chuyển động"
        ],
        "dimensions": {
            "with_stand": {
                "width": "145.7 cm",
                "height": "86.9 cm",
                "depth": "26.1 cm"
            },
            "without_stand": {
                "width": "145.7 cm",
                "height": "83.2 cm",
                "depth": "5.6 cm"
            }
        },
        "weight": {
            "with_stand": "22.5 kg",
            "without_stand": "22.1 kg"
        },
        "origin": "Việt Nam",
        "warranty": "24 tháng",
        "release_year": "2024",
        "retail_price": 22800000,
        "discount_percent": 37,
        "promotions": "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất"
        , "images": [
            "ls03d.webp",
        ]

    },
    {
        "name": "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
        "brand": "thuonghieu_12.jpg",
        "model": "QA65LS03DAKXXV",
        "series": "The Frame LS03D 2024",
        "screen_size": "65 inch",
        "resolution": "4K (Ultra HD)",
        "display_type": "QLED",
        "special_design": "Lifestyle TV (khung tranh)",
        "processor": "Quantum Processor 4K",
        "refresh_rate": "120 Hz",
        "backlight_tech": "Dual LED",
        "anti_glare": "Matte Display (chống phản sáng)",
        "hdr": "Quantum HDR",
        "image_enhancement": [
            "Supreme UHD Dimming",
            "Motion Xcelerator",
            "EyeComfort",
            "Quantum Dot (100% dải màu DCI-P3)"
        ],
        "sound_system": {
            "channels": "2.0.2CH",
            "power": "40W",
            "technologies": [
                "Object Tracking Sound (OTS)",
                "Dolby Atmos",
                "Q-Symphony",
                "Adaptive Sound Pro",
                "Active Voice Amplifier"
            ]
        },
        "smart_os": "Tizen",
        "connectivity": {
            "hdmi": "4 cổng HDMI",
            "usb": "2 cổng USB",
            "wifi": "WiFi 5",
            "bluetooth": "Bluetooth 4.2",
            "others": [
                "AirPlay 2",
                "SmartThings App control",
                "One Remote (Solar Cell)"
            ]
        },
        "features": [
            "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
            "Khung viền linh hoạt (magnetic interchangeable bezel)",
            "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
            "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
            "Cảm biến ánh sáng & cảm biến chuyển động"
        ],
        "dimensions": {
            "with_stand": {
                "width": "145.7 cm",
                "height": "86.9 cm",
                "depth": "26.1 cm"
            },
            "without_stand": {
                "width": "145.7 cm",
                "height": "83.2 cm",
                "depth": "5.6 cm"
            }
        },
        "weight": {
            "with_stand": "22.5 kg",
            "without_stand": "22.1 kg"
        },
        "origin": "Việt Nam",
        "warranty": "24 tháng",
        "release_year": "2024",
        "retail_price": 22800000,
        "discount_percent": 20,
        "promotions": "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

        "images": [
            "ls03d.webp",
        ]
    },
    {
        "name": "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
        "brand": "thuonghieu_12.jpg",
        "model": "QA65LS03DAKXXV",
        "series": "The Frame LS03D 2024",
        "screen_size": "65 inch",
        "resolution": "4K (Ultra HD)",
        "display_type": "QLED",
        "special_design": "Lifestyle TV (khung tranh)",
        "processor": "Quantum Processor 4K",
        "refresh_rate": "120 Hz",
        "backlight_tech": "Dual LED",
        "anti_glare": "Matte Display (chống phản sáng)",
        "hdr": "Quantum HDR",
        "image_enhancement": [
            "Supreme UHD Dimming",
            "Motion Xcelerator",
            "EyeComfort",
            "Quantum Dot (100% dải màu DCI-P3)"
        ],
        "sound_system": {
            "channels": "2.0.2CH",
            "power": "40W",
            "technologies": [
                "Object Tracking Sound (OTS)",
                "Dolby Atmos",
                "Q-Symphony",
                "Adaptive Sound Pro",
                "Active Voice Amplifier"
            ]
        },
        "smart_os": "Tizen",
        "connectivity": {
            "hdmi": "4 cổng HDMI",
            "usb": "2 cổng USB",
            "wifi": "WiFi 5",
            "bluetooth": "Bluetooth 4.2",
            "others": [
                "AirPlay 2",
                "SmartThings App control",
                "One Remote (Solar Cell)"
            ]
        },
        "features": [
            "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
            "Khung viền linh hoạt (magnetic interchangeable bezel)",
            "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
            "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
            "Cảm biến ánh sáng & cảm biến chuyển động"
        ],
        "dimensions": {
            "with_stand": {
                "width": "145.7 cm",
                "height": "86.9 cm",
                "depth": "26.1 cm"
            },
            "without_stand": {
                "width": "145.7 cm",
                "height": "83.2 cm",
                "depth": "5.6 cm"
            }
        },
        "weight": {
            "with_stand": "22.5 kg",
            "without_stand": "22.1 kg"
        },
        "origin": "Việt Nam",
        "warranty": "24 tháng",
        "release_year": "2024",
        "retail_price": 22800000,
        "discount_percent": 15,
        "promotions": "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

        "images": [
            "ls03d.webp",
        ]
    },
    {
        "name": "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
        "brand": "thuonghieu_12.jpg",
        "model": "QA65LS03DAKXXV",
        "series": "The Frame LS03D 2024",
        "screen_size": "65 inch",
        "resolution": "4K (Ultra HD)",
        "display_type": "QLED",
        "special_design": "Lifestyle TV (khung tranh)",
        "processor": "Quantum Processor 4K",
        "refresh_rate": "120 Hz",
        "backlight_tech": "Dual LED",
        "anti_glare": "Matte Display (chống phản sáng)",
        "hdr": "Quantum HDR",
        "image_enhancement": [
            "Supreme UHD Dimming",
            "Motion Xcelerator",
            "EyeComfort",
            "Quantum Dot (100% dải màu DCI-P3)"
        ],
        "sound_system": {
            "channels": "2.0.2CH",
            "power": "40W",
            "technologies": [
                "Object Tracking Sound (OTS)",
                "Dolby Atmos",
                "Q-Symphony",
                "Adaptive Sound Pro",
                "Active Voice Amplifier"
            ]
        },
        "smart_os": "Tizen",
        "connectivity": {
            "hdmi": "4 cổng HDMI",
            "usb": "2 cổng USB",
            "wifi": "WiFi 5",
            "bluetooth": "Bluetooth 4.2",
            "others": [
                "AirPlay 2",
                "SmartThings App control",
                "One Remote (Solar Cell)"
            ]
        },
        "features": [
            "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
            "Khung viền linh hoạt (magnetic interchangeable bezel)",
            "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
            "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
            "Cảm biến ánh sáng & cảm biến chuyển động"
        ],
        "dimensions": {
            "with_stand": {
                "width": "145.7 cm",
                "height": "86.9 cm",
                "depth": "26.1 cm"
            },
            "without_stand": {
                "width": "145.7 cm",
                "height": "83.2 cm",
                "depth": "5.6 cm"
            }
        },
        "weight": {
            "with_stand": "22.5 kg",
            "without_stand": "22.1 kg"
        },
        "origin": "Việt Nam",
        "warranty": "24 tháng",
        "release_year": "2024",
        "retail_price": 22800000,
        "discount_percent": 24,
        "promotions": "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

        "images": [
            "ls03d.webp",
        ]
    },
    {
        "name": "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
        "brand": "thuonghieu_12.jpg",
        "model": "QA65LS03DAKXXV",
        "series": "The Frame LS03D 2024",
        "screen_size": "65 inch",
        "resolution": "4K (Ultra HD)",
        "display_type": "QLED",
        "special_design": "Lifestyle TV (khung tranh)",
        "processor": "Quantum Processor 4K",
        "refresh_rate": "120 Hz",
        "backlight_tech": "Dual LED",
        "anti_glare": "Matte Display (chống phản sáng)",
        "hdr": "Quantum HDR",
        "image_enhancement": [
            "Supreme UHD Dimming",
            "Motion Xcelerator",
            "EyeComfort",
            "Quantum Dot (100% dải màu DCI-P3)"
        ],
        "sound_system": {
            "channels": "2.0.2CH",
            "power": "40W",
            "technologies": [
                "Object Tracking Sound (OTS)",
                "Dolby Atmos",
                "Q-Symphony",
                "Adaptive Sound Pro",
                "Active Voice Amplifier"
            ]
        },
        "smart_os": "Tizen",
        "connectivity": {
            "hdmi": "4 cổng HDMI",
            "usb": "2 cổng USB",
            "wifi": "WiFi 5",
            "bluetooth": "Bluetooth 4.2",
            "others": [
                "AirPlay 2",
                "SmartThings App control",
                "One Remote (Solar Cell)"
            ]
        },
        "features": [
            "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
            "Khung viền linh hoạt (magnetic interchangeable bezel)",
            "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
            "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
            "Cảm biến ánh sáng & cảm biến chuyển động"
        ],
        "dimensions": {
            "with_stand": {
                "width": "145.7 cm",
                "height": "86.9 cm",
                "depth": "26.1 cm"
            },
            "without_stand": {
                "width": "145.7 cm",
                "height": "83.2 cm",
                "depth": "5.6 cm"
            }
        },
        "weight": {
            "with_stand": "22.5 kg",
            "without_stand": "22.1 kg"
        },
        "origin": "Việt Nam",
        "warranty": "24 tháng",
        "release_year": "2024",
        "retail_price": 22800000,
        "discount_percent": 20,
        "promotions": "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

        "images": [
            "ls03d.webp",
        ]
    },
]