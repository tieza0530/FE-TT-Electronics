import { TVProduct } from "./home/topSale/typeProduct";

export interface Brand {
  name_brand: string;
  slug: string;
}

export interface ProductCategory {
  category_name: string;
  titile: string;
  banner_url: string;
  url: string;
  brand: Brand[];
}


export const testData: ProductCategory[] = [
  {
    category_name: "ĐIỀU HÒA",
    titile: "Danh sách Điều Hòa",
    url: "icon_megamenu_1.png",
    banner_url: "slider_1.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
  {
    category_name: "ĐIỆN TỬ",
    titile: "Danh sách TIVI",
    url: "icon_megamenu_2.png",
    banner_url: "slider_2.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
  {
    category_name: "ĐIỆN LẠNH",
    titile: "Danh sách Điện Lạnh",
    url: "icon_megamenu_3.png",
    banner_url: "slider_2.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
  {
    category_name: "ĐỒ ĐIỆN GIA DỤNG",
    titile: "Danh sách ĐỒ ĐIỆN GIA DỤNG",
    url: "icon_megamenu_4.png",
    banner_url: "slider_2.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
  {
    category_name: "NHÀ BẾP - MÁY RỬA BÁT",
    titile: "Danh sách NHÀ BẾP - MÁY RỬA BÁT",
    url: "icon_megamenu_5.png",
    banner_url: "slider_2.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
  {
    category_name: "SỨC KHỎE - LỌC NƯỚC",
    titile: "Danh sách SỨC KHỎE - LỌC NƯỚC",
    url: "icon_megamenu_7.png",
    banner_url: "slider_2.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
  {
    category_name: "KINH NGHIỆM SỬ DỤNG",
    titile: "",
    url: "icon_megamenu_8.png",
    banner_url: "slider_2.webp",
    brand: [
      { name_brand: "SONY", slug: "sony" },
      { name_brand: "SAMSUNG", slug: "sony" },
      { name_brand: "TCL", slug: "sony" },
      { name_brand: "LG", slug: "sony" },
      { name_brand: "PANASONIC", slug: "sony" },
    ],
  },
];

export const itemsData = [
  "HÀNG MỚI NGUYÊN HỘP CHÍNH HÃNG",
  "BẢO HÀNH TẠI NHÀ",
  "NHẬN HÀNG KIỂM TRA THANH TOÁN TẠI NHÀ",
  "GIAO HÀNG MIỄN PHÍ LẮP ĐẶT NỘI THÀNH",
  "LỖI 1 ĐỔI 1 TRONG 30 NGÀY",
];

export const dataProducts: TVProduct[] = [
  {
    name: "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
    brand: "thuonghieu_12.jpg",
    model: "QA65LS03DAKXXV",
    series: "The Frame LS03D 2024",
    screen_size: "65 inch",
    resolution: "4K (Ultra HD)",
    display_type: "QLED",
    special_design: "Lifestyle TV (khung tranh)",
    processor: "Quantum Processor 4K",
    refresh_rate: "120 Hz",
    backlight_tech: "Dual LED",
    anti_glare: "Matte Display (chống phản sáng)",
    hdr: "Quantum HDR",
    image_enhancement: [
      "Supreme UHD Dimming",
      "Motion Xcelerator",
      "EyeComfort",
      "Quantum Dot (100% dải màu DCI-P3)",
    ],
    sound_system: {
      channels: "2.0.2CH",
      power: "40W",
      technologies: [
        "Object Tracking Sound (OTS)",
        "Dolby Atmos",
        "Q-Symphony",
        "Adaptive Sound Pro",
        "Active Voice Amplifier",
      ],
    },
    smart_os: "Tizen",
    connectivity: {
      hdmi: "4 cổng HDMI",
      usb: "2 cổng USB",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2",
      others: [
        "AirPlay 2",
        "SmartThings App control",
        "One Remote (Solar Cell)",
      ],
    },
    features: [
      "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
      "Khung viền linh hoạt (magnetic interchangeable bezel)",
      "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
      "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
      "Cảm biến ánh sáng & cảm biến chuyển động",
    ],
    dimensions: {
      with_stand: {
        width: "145.7 cm",
        height: "86.9 cm",
        depth: "26.1 cm",
      },
      without_stand: {
        width: "145.7 cm",
        height: "83.2 cm",
        depth: "5.6 cm",
      },
    },
    weight: {
      with_stand: "22.5 kg",
      without_stand: "22.1 kg",
    },
    origin: "Việt Nam",
    warranty: "24 tháng",
    release_year: "2024",
    retail_price: 22800000,
    discount_percent: 24,
    promotions:
      "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",
    images: ["ls03d.webp"],
  },
  {
    name: "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",

    brand: "thuonghieu_12.jpg",
    model: "QA65LS03DAKXXV",
    series: "The Frame LS03D 2024",
    screen_size: "65 inch",
    resolution: "4K (Ultra HD)",
    display_type: "QLED",
    special_design: "Lifestyle TV (khung tranh)",
    processor: "Quantum Processor 4K",
    refresh_rate: "120 Hz",
    backlight_tech: "Dual LED",
    anti_glare: "Matte Display (chống phản sáng)",
    hdr: "Quantum HDR",
    image_enhancement: [
      "Supreme UHD Dimming",
      "Motion Xcelerator",
      "EyeComfort",
      "Quantum Dot (100% dải màu DCI-P3)",
    ],
    sound_system: {
      channels: "2.0.2CH",
      power: "40W",
      technologies: [
        "Object Tracking Sound (OTS)",
        "Dolby Atmos",
        "Q-Symphony",
        "Adaptive Sound Pro",
        "Active Voice Amplifier",
      ],
    },
    smart_os: "Tizen",
    connectivity: {
      hdmi: "4 cổng HDMI",
      usb: "2 cổng USB",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2",
      others: [
        "AirPlay 2",
        "SmartThings App control",
        "One Remote (Solar Cell)",
      ],
    },
    features: [
      "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
      "Khung viền linh hoạt (magnetic interchangeable bezel)",
      "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
      "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
      "Cảm biến ánh sáng & cảm biến chuyển động",
    ],
    dimensions: {
      with_stand: {
        width: "145.7 cm",
        height: "86.9 cm",
        depth: "26.1 cm",
      },
      without_stand: {
        width: "145.7 cm",
        height: "83.2 cm",
        depth: "5.6 cm",
      },
    },
    weight: {
      with_stand: "22.5 kg",
      without_stand: "22.1 kg",
    },
    origin: "Việt Nam",
    warranty: "24 tháng",
    release_year: "2024",
    retail_price: 22800000,
    discount_percent: 37,
    promotions:
      "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",
    images: ["ls03d.webp"],
  },
  {
    name: "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
    brand: "thuonghieu_12.jpg",
    model: "QA65LS03DAKXXV",
    series: "The Frame LS03D 2024",
    screen_size: "65 inch",
    resolution: "4K (Ultra HD)",
    display_type: "QLED",
    special_design: "Lifestyle TV (khung tranh)",
    processor: "Quantum Processor 4K",
    refresh_rate: "120 Hz",
    backlight_tech: "Dual LED",
    anti_glare: "Matte Display (chống phản sáng)",
    hdr: "Quantum HDR",
    image_enhancement: [
      "Supreme UHD Dimming",
      "Motion Xcelerator",
      "EyeComfort",
      "Quantum Dot (100% dải màu DCI-P3)",
    ],
    sound_system: {
      channels: "2.0.2CH",
      power: "40W",
      technologies: [
        "Object Tracking Sound (OTS)",
        "Dolby Atmos",
        "Q-Symphony",
        "Adaptive Sound Pro",
        "Active Voice Amplifier",
      ],
    },
    smart_os: "Tizen",
    connectivity: {
      hdmi: "4 cổng HDMI",
      usb: "2 cổng USB",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2",
      others: [
        "AirPlay 2",
        "SmartThings App control",
        "One Remote (Solar Cell)",
      ],
    },
    features: [
      "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
      "Khung viền linh hoạt (magnetic interchangeable bezel)",
      "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
      "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
      "Cảm biến ánh sáng & cảm biến chuyển động",
    ],
    dimensions: {
      with_stand: {
        width: "145.7 cm",
        height: "86.9 cm",
        depth: "26.1 cm",
      },
      without_stand: {
        width: "145.7 cm",
        height: "83.2 cm",
        depth: "5.6 cm",
      },
    },
    weight: {
      with_stand: "22.5 kg",
      without_stand: "22.1 kg",
    },
    origin: "Việt Nam",
    warranty: "24 tháng",
    release_year: "2024",
    retail_price: 22800000,
    discount_percent: 20,
    promotions:
      "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

    images: ["ls03d.webp"],
  },
  {
    name: "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
    brand: "thuonghieu_12.jpg",
    model: "QA65LS03DAKXXV",
    series: "The Frame LS03D 2024",
    screen_size: "65 inch",
    resolution: "4K (Ultra HD)",
    display_type: "QLED",
    special_design: "Lifestyle TV (khung tranh)",
    processor: "Quantum Processor 4K",
    refresh_rate: "120 Hz",
    backlight_tech: "Dual LED",
    anti_glare: "Matte Display (chống phản sáng)",
    hdr: "Quantum HDR",
    image_enhancement: [
      "Supreme UHD Dimming",
      "Motion Xcelerator",
      "EyeComfort",
      "Quantum Dot (100% dải màu DCI-P3)",
    ],
    sound_system: {
      channels: "2.0.2CH",
      power: "40W",
      technologies: [
        "Object Tracking Sound (OTS)",
        "Dolby Atmos",
        "Q-Symphony",
        "Adaptive Sound Pro",
        "Active Voice Amplifier",
      ],
    },
    smart_os: "Tizen",
    connectivity: {
      hdmi: "4 cổng HDMI",
      usb: "2 cổng USB",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2",
      others: [
        "AirPlay 2",
        "SmartThings App control",
        "One Remote (Solar Cell)",
      ],
    },
    features: [
      "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
      "Khung viền linh hoạt (magnetic interchangeable bezel)",
      "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
      "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
      "Cảm biến ánh sáng & cảm biến chuyển động",
    ],
    dimensions: {
      with_stand: {
        width: "145.7 cm",
        height: "86.9 cm",
        depth: "26.1 cm",
      },
      without_stand: {
        width: "145.7 cm",
        height: "83.2 cm",
        depth: "5.6 cm",
      },
    },
    weight: {
      with_stand: "22.5 kg",
      without_stand: "22.1 kg",
    },
    origin: "Việt Nam",
    warranty: "24 tháng",
    release_year: "2024",
    retail_price: 22800000,
    discount_percent: 15,
    promotions:
      "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

    images: ["ls03d.webp"],
  },
  {
    name: "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
    brand: "thuonghieu_12.jpg",
    model: "QA65LS03DAKXXV",
    series: "The Frame LS03D 2024",
    screen_size: "65 inch",
    resolution: "4K (Ultra HD)",
    display_type: "QLED",
    special_design: "Lifestyle TV (khung tranh)",
    processor: "Quantum Processor 4K",
    refresh_rate: "120 Hz",
    backlight_tech: "Dual LED",
    anti_glare: "Matte Display (chống phản sáng)",
    hdr: "Quantum HDR",
    image_enhancement: [
      "Supreme UHD Dimming",
      "Motion Xcelerator",
      "EyeComfort",
      "Quantum Dot (100% dải màu DCI-P3)",
    ],
    sound_system: {
      channels: "2.0.2CH",
      power: "40W",
      technologies: [
        "Object Tracking Sound (OTS)",
        "Dolby Atmos",
        "Q-Symphony",
        "Adaptive Sound Pro",
        "Active Voice Amplifier",
      ],
    },
    smart_os: "Tizen",
    connectivity: {
      hdmi: "4 cổng HDMI",
      usb: "2 cổng USB",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2",
      others: [
        "AirPlay 2",
        "SmartThings App control",
        "One Remote (Solar Cell)",
      ],
    },
    features: [
      "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
      "Khung viền linh hoạt (magnetic interchangeable bezel)",
      "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
      "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
      "Cảm biến ánh sáng & cảm biến chuyển động",
    ],
    dimensions: {
      with_stand: {
        width: "145.7 cm",
        height: "86.9 cm",
        depth: "26.1 cm",
      },
      without_stand: {
        width: "145.7 cm",
        height: "83.2 cm",
        depth: "5.6 cm",
      },
    },
    weight: {
      with_stand: "22.5 kg",
      without_stand: "22.1 kg",
    },
    origin: "Việt Nam",
    warranty: "24 tháng",
    release_year: "2024",
    retail_price: 22800000,
    discount_percent: 24,
    promotions:
      "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

    images: ["ls03d.webp"],
  },
  {
    name: "Tivi Samsung QA65LS03DAKXXV 4K 65 inch The Frame 2024",
    brand: "thuonghieu_12.jpg",
    model: "QA65LS03DAKXXV",
    series: "The Frame LS03D 2024",
    screen_size: "65 inch",
    resolution: "4K (Ultra HD)",
    display_type: "QLED",
    special_design: "Lifestyle TV (khung tranh)",
    processor: "Quantum Processor 4K",
    refresh_rate: "120 Hz",
    backlight_tech: "Dual LED",
    anti_glare: "Matte Display (chống phản sáng)",
    hdr: "Quantum HDR",
    image_enhancement: [
      "Supreme UHD Dimming",
      "Motion Xcelerator",
      "EyeComfort",
      "Quantum Dot (100% dải màu DCI-P3)",
    ],
    sound_system: {
      channels: "2.0.2CH",
      power: "40W",
      technologies: [
        "Object Tracking Sound (OTS)",
        "Dolby Atmos",
        "Q-Symphony",
        "Adaptive Sound Pro",
        "Active Voice Amplifier",
      ],
    },
    smart_os: "Tizen",
    connectivity: {
      hdmi: "4 cổng HDMI",
      usb: "2 cổng USB",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2",
      others: [
        "AirPlay 2",
        "SmartThings App control",
        "One Remote (Solar Cell)",
      ],
    },
    features: [
      "Art Mode – trình chiếu tranh nghệ thuật khi TV tắt",
      "Khung viền linh hoạt (magnetic interchangeable bezel)",
      "Điều khiển & kết nối IoT – làm trung tâm SmartThings",
      "Chân đế điều chỉnh độ cao hoặc treo sát tường (Slim Fit Wall Mount)",
      "Cảm biến ánh sáng & cảm biến chuyển động",
    ],
    dimensions: {
      with_stand: {
        width: "145.7 cm",
        height: "86.9 cm",
        depth: "26.1 cm",
      },
      without_stand: {
        width: "145.7 cm",
        height: "83.2 cm",
        depth: "5.6 cm",
      },
    },
    weight: {
      with_stand: "22.5 kg",
      without_stand: "22.1 kg",
    },
    origin: "Việt Nam",
    warranty: "24 tháng",
    release_year: "2024",
    retail_price: 22800000,
    discount_percent: 20,
    promotions:
      "Lắp đặt miễn phí khi giao hàng tại nhà Liên hệ để có giá tốt nhất",

    images: ["ls03d.webp"],
  },
];
