"use client"
import Image from "next/image"

export const SectionPolicy = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
        {dataPolicy.map((items, idx) => {
            return(
                <div key={idx} className="bg-(--color-policy) py-2 px-4 rounded-sm grid grid-cols-4 items-center justify-center shadow">
                    <Image src={`/icon-policy/${items.url}`} alt={items.url} width={40} height={10} className="col-span-1"/>
                    <p className="col-span-3" dangerouslySetInnerHTML={{ __html: items.text}}>
                       
                    </p>
                </div>
            )
        })}
    </div>
  )
}

export const dataPolicy = [
    {
        "url" : "ser_1.webp",
        "text" : "Vận chuyển <strong>MIỄN PHÍ</strong> <br/> Trong khu vực <strong>TP.Hà Nội</strong> "
    },
     {
        "url" : "ser_2.webp",
        "text" : "Đổi trả <strong>MIỄN PHÍ</strong> <br/> Trong vòng <strong>30 NGÀY</strong>"
    }, {
        "url" : "ser_3.webp",
        "text" : "Tiến hành <strong>THANH TOÁN</strong> <br/> Với nhiều <strong>PHƯƠNG THỨC</strong>"
    }, {
        "url" : "ser_4.webp",
        "text" : "<strong>100% HOÀN TIỀN</strong>  <br/> nếu sản phẩm lỗi"
    },
]