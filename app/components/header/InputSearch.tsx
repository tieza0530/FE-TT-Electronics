import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoSearch } from "react-icons/io5";

export function InputSeach() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        <IoSearch />
      </Button>
    </div>
  )
}
