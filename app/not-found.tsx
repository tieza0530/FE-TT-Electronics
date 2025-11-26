"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const route = useRouter()
    return (
        <div className="min-h-96 flex items-center justify-center bg-neutral-100">
            <div className="text-center flex flex-col gap-4">
                <p className="text-9xl font-semibold">404</p>
                <p>Oops! Trang bạn tìm không tồn tại!</p>
                <Button className="bg-(--color-main) hover:bg-main/80" onClick={() => route.push('/')}>Trang Chủ</Button>
            </div>
        </div>
    )
}