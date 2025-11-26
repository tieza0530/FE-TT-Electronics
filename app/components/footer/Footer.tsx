"use client"
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <div>
            <div className="bg-(--color-main) text-white grid grid-cols-5 py-10 2xl:px-80 xl:px-16 ">
                <div className="col-span-2  flex flex-col gap-3 text-sm">
                    <p className="text-lg font-semibold">CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ KỸ THUẬT TRƯỜNG PHÁT</p>
                    <p><strong>Mã số thuế :</strong> 0109918856</p>
                    <p><strong>Địa chỉ :</strong> Thôn Đại Tảo, Xã Đa Phúc, TP Hà Nội</p>
                    <p><strong>Điện thoại :</strong> 037 3388 097</p>
                    <p><strong>Email:</strong> dienmaytruongphat368@gmail.com</p>
                    <div className="w-fit">
                        <div className="flex items-center gap-2 bg-white text-black p-3 rounded-4xl text-xl font-semibold hover:scale-105 cursor-pointer" title="gọi ngay">
                            <FiPhoneCall />
                            <p>037 3388 097</p>
                        </div>
                    </div>
                </div>
                <div className="text-sm ">
                    <ul className="list-disc pl-4 space-y-1">
                        <p className="text-lg font-semibold">Chính sách</p>
                        <li>Chính sách bảo mật</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách đổi trả</li>
                        <li>Quy định sử dụng</li>
                        <li>Phương thức thanh toán</li>
                        <li>Hướng dẫn mua trả góp</li>
                        <li>Quan Điểm kinh doanh</li>
                    </ul>
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <ul className="list-disc pl-4 space-y-2">
                        <p className="text-lg font-semibold">Hỗ trợ</p>
                        <li>Bán hàng: 037 3388 097</li>
                        <li>Bảo hành - khiếu nại: <br /> 037 3388 097</li>
                        <li>Chăm sóc khách hàng: <br /> 037 3388 097</li>
                    </ul>
                </div>
                <div className=" space-y-2">
                    <p className="text-lg font-semibold">Mạng Xã Hội</p>
                    <div className="flex gap-4 text-3xl ">
                        <Link href="https://www.facebook.com/profile.php?id=61567018625765" target="_blink">
                            <FaFacebookSquare />
                        </Link>
                        <Link href="/">
                            <SiZalo />
                        </Link>
                        <Link href="/">
                            <IoLogoYoutube />
                        </Link>
                        <Link href="/">
                            <FaInstagram />
                        </Link>
                    </div>
                    <Image src="/logo-bct.webp" alt="logo-bct" width={120} height={50} />
                </div>
            </div>
            <div className="flex justify-center py-1 border-y-2 bg-main/80 text-white text-sm">
                <p>Bản quyền thuộc về : Siêu thị Điện Máy Trường Thủy</p>
            </div>
            <div className="text-center py-1  bg-(--color-main) text-white pb-20">
                <p className=" text-2xl font-semibold py-4">CẢM ƠN SỰ ỦNG HỘ CỦA KHÁCH HÀNG KHẮP MỌI MIỀN ĐẤT NƯỚC</p>
                <p>Sản phẩm chính hãng – Giá tốt – Thanh toán linh hoạt – Bảo hành dài lâu – Hỗ trợ trọn đời</p>
            </div>
        </div>
    )
}