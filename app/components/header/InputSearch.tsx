"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoSearch } from "react-icons/io5";

export function InputSeach() {
  return (
    <div className="flex w-full items-center gap-2 relative">
      <Input type="email" placeholder="Bạn muốn tìm gì ?" className="pl-10 rounded-3xl" />
      <Button type="submit" variant="outline" className="absolute bg-inherit border-none hover:bg-inherit shadow-none ">
        <IoSearch/>
      </Button>
    </div>
  )
}
