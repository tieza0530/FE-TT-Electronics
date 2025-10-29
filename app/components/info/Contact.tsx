"use client"
import { Button } from "@/components/ui/button"
import { IoLocationOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { ArrowUpIcon } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react";

export const Contact = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className=" flex justify-end mr-8 gap-2">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-white text-black border-2 text-xs hover:bg-neutral-200 rounded-xl"><FiPhone />Hotline</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle >Liên hệ với Chúng Tôi</DialogTitle>
                        <hr />
                    </DialogHeader>
                    <div className="text-sm">
                        <p className="p-2 border rounded-xl mb-3"><strong>Gọi mua: </strong>037 3388 097</p>
                        <p className="p-2 border rounded-xl"><strong>Bảo hành: </strong>037 3388 097</p>
                    </div>
                    <hr />
                    <DialogFooter className="justify-end">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Đóng
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Link href="https://www.facebook.com/profile.php?id=61567018625765" target="_blink">
                <Button className="bg-white text-black border-2 text-xs hover:bg-neutral-200 rounded-xl"><FaFacebookMessenger className="text-blue-600" /> Chat FB</Button>
            </Link>
            <Link href="/" target="_blink">
                <Button className="bg-white text-black border-2 text-xs hover:bg-neutral-200 rounded-xl"><LuMessagesSquare className="text-blue-600" />Zalo</Button>
            </Link>
            <Link href="https://maps.app.goo.gl/xSShbyWhgopdWuoP7" target="_blink">
                <Button className="bg-white text-black border-2 text-xs hover:bg-neutral-200 rounded-xl"><IoLocationOutline className="text-green-400" /> Maps</Button>
            </Link>
            <div className={`transition-transform  ${visible ? "translate-y-0 " : "translate-y-10 opacity-0" }`}>
                <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
                    <ArrowUpIcon />
                </Button>
            </div>
        </div>
    )
}