"use client"

import { Banner } from "./components/home/banner/Banner";
import { ListBrand } from "./components/home/brand/ListBrand";
import { ProductsOfCategory } from "./components/home/listProducts/ProductsOfCategory";
import { SectionPolicy } from "./components/home/sectionPolicy/SectionPolicy";
import { TopProductsSale } from "./components/home/topSale/TopProductsSale";
import { dataProducts } from "./components/home/topSale/TopProductsSale";

export default function Home() {
  return (
    <div className="2xl:px-80 xl:px-16">
      <Banner />
      <ListBrand />
      <TopProductsSale />
      <ProductsOfCategory dataProducts={dataProducts} category={testData} />
      <SectionPolicy />
    </div>
  );
}


export interface Brand {
  name_brand: string
  slug: string
}

export interface ProductCategory {
  titile: string
  banner_url: string
  url: string
  brand: Brand[]
}

export const testData: ProductCategory= 
  {
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
  }
