"use client"
import Image from "next/image"

export const Header = () => {
    return(
        <div className="py-2 2xl:px-80 xl:px-36 ">
            <div>
                <Image src="/logo-without-background.png" alt="logo-company" width={300} height={50}/>
            </div>
            <div>

            </div>
        </div>
    )
}