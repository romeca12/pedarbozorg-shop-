import CardGlobal from "@/components/CardGlobal"
import { Metadata } from "next"
import Sort from "./components/Sort"
import Filters from "./components/Filters"
import FilterMobile from "./components/FilterMobile"
import Pagination from "@/components/Pagination"
import "@/app/globals.css"
import axios from "axios"

export const metadata: Metadata = {
  title: "محصولات",
}

export type TypeProducts = {
  id: number,
  name: string,
  slug: string,
  min_price: number,
  max_price: number,
  categories: { "id": 1, "title": "روغن" }[],
  featured_image: string,
  is_in_cart: boolean,
  min_sell_price: number,
  avg_rate: null | number,
  cheapest_variant_id: number,
  advantages: { id: number; title: string }[],
  is_available: boolean
}

async function prodcuts() {

  const productsList = await axios('http://5.144.132.115:8003/store-api/products-public');

  const sortItems = ["پربازدیدترین", "پرفروش‌ترین", "محبوب‌‌ترین", "ارزان‌ترین", "گران‌ترین"];

  return (
    <div className="mt-20 md:mt-[131px] mb-56 md:mb-16 xl:flex xl:gap-x-4">
      <aside className="hidden xl:flex xl:flex-col gap-4 xl:w-[272px] sticky top-0 right-0">
        <Filters />
      </aside>

      <main className="xl:flex-1">
        <div className="top mb-2 md:mb-4 gap-4 flex flex-col xl:flex-row">
          <div className="search relative border-custom rounded-2xl bg-white lg:flex-1">
            <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
            <img src="/images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
          </div>
          <div className="fillters flex select-none items-center md:justify-center md:flex-col">
            <div className="hidden xl:hidden w-full md:block mb-4">
              <Filters />
            </div>
            <FilterMobile />
            <Sort sortItems={sortItems} activeItem={1} />
          </div>
        </div>

        <div className="overal-products gap-2 md:gap-4 mb-4 lg:mb-8">
          {productsList.data.results.map((item: TypeProducts) =>
            <CardGlobal key={item.id} {...item} />
          )}
        </div>
        <Pagination />
      </main>
    </div>
  )
}

export default prodcuts