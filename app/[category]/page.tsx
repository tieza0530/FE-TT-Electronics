"use client"

import { useParams } from "next/navigation"

export default function ProductOfCategory () {
    const param = useParams()

    console.log(param.category);
    
  return (
    <div>Hello A tiến</div>
  )
}