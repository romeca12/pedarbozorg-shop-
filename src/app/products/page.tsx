import { Metadata } from "next"
import Sort from "./components/Sort"
import Filters from "./components/Filters"
import FilterMobile from "./components/FilterMobile"
import ProductsMain from "./components/ProductsMain"

export const metadata: Metadata = {
  title: "محصولات",
}

function prodcuts() {

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
            <Sort />
          </div>
        </div>
        <ProductsMain />
      </main>
    </div>
  )
}

export default prodcuts