import CardGlobal from "@/components/CardGlobal"
import { Metadata } from "next"
import Sort from "./components/Sort"
import Filters from "./components/Filters"
import FilterMobile from "./components/FilterMobile"
import Pagination from "@/components/Pagination"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "محصولات",
}

function prodcuts() {
  return (
    <div className="mt-20 md:mt-[131px] mb-56 md:mb-16 lg:flex lg:gap-x-4">
      <aside className="hidden lg:block lg:w-[200px] xl:w-[272px] sticky top-0 right-0">
        <Filters />
        <img src="./images/Products Banner 1.svg" alt="بنر محصولات" className="mt-4" />
      </aside>
      <main className="flex-1">
        <div className="top mb-2 md:mb-4 gap-4 flex flex-col lg:flex-row lg:justify-center">
          <div className="search relative border-custom rounded-2xl bg-white lg:flex-1">
            <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
            <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
          </div>
          <div className="fillters flex select-none items-center md:justify-center md:flex-col">
            <div className="hidden lg:hidden w-full md:block mb-4">
              <Filters />
            </div>
            <FilterMobile />
            <Sort />
          </div>
        </div>
        <div className="overal-products gap-2 md:gap-4 mb-4 lg:mb-8">
          {Array(20).fill(1).map((_, index) =>
            <CardGlobal key={index} id={index + 1} />
          )}
        </div>
        <Pagination />
      </main>
    </div>
  )
}

export default prodcuts