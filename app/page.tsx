"use client"

import { dataProducts, testData } from "./components/dataTest";
import { Banner } from "./components/home/banner/Banner";
import { ListBrand } from "./components/home/brand/ListBrand";
import { ProductsOfCategory } from "./components/home/listProducts/ProductsOfCategory";
import { SectionPolicy } from "./components/home/sectionPolicy/SectionPolicy";
import { TopProductsSale } from "./components/home/topSale/TopProductsSale";

export default function Home() {
  return (
    <div className="2xl:px-80 xl:px-16">
      <Banner />
      <ListBrand />
      <TopProductsSale />
      <ProductsOfCategory dataProducts={dataProducts} category={testData[1]} />
      <SectionPolicy />
    </div>
  );
}


