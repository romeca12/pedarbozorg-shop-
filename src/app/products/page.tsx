import CardGlobal from "@/components/CardGlobal"
import { Metadata } from "next"
import Sort from "./components/Sort"
import Filters from "./components/Filters"
import FilterMobile from "./components/FilterMobile"

export const metadata: Metadata = {
  title: "محصولات",
}

function prodcuts() {
  return (
    <div className="mt-20 md:mt-[131px] mb-56 md:mb-16 lg:flex lg:gap-x-4">
      <aside className="hidden lg:flex lg:flex-col lg:gap-y-4 lg:w-[200px] xl:w-[272px] sticky">
        <Filters />
        <img src="./images/Products Banner 1.svg" alt="" />
      </aside>
      <main className="flex-1">
        <div className="top mb-2 md:mb-4 gap-4 flex flex-col lg:flex-row lg:justify-center">
          <div className="search relative border-custom rounded-2xl bg-white lg:flex-1">
            <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
            <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
          </div>
          <div className="fillters flex select-none items-center md:justify-center md:flex-col">
            <div className="hidden lg:hidden w-full md:flex flex-col gap-2 mb-4">
              <Filters />
            </div>
            <FilterMobile />
            <Sort />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 product-layout mb-4 lg:mb-8">
          {Array(20).fill(1).map((_, index) =>
            <CardGlobal key={index} id={index + 1} />
          )}
        </div>
        <div className="flex justify-center items-center gap-2 h-10 text-primary text-sm md:text-base cursor-pointer">
          <img src="./images/arrow-right-slider.svg" alt="جهت راست" className="w-5 h-5 mx-1.5" />
          <span className="active-text bg-primary text-white px-3 h-full flex justify-center items-center rounded-lg hover:bg-[#336D51] md:px-4">۱</span>
          <span className="px-3 h-full flex justify-center items-center md:px-4">۲</span>
          <span className="px-3 h-full flex justify-center items-center md:px-4">۳</span>
          <span className="text-base">...</span>
          <span className="px-3 h-full flex justify-center items-center md:px-4">۷۸</span>
          <img src="./images/arrow-left-slider.svg" alt="جهت چپ" className="w-5 h-5 mx-1.5" />
        </div>
      </main>
    </div>
  )
}

export default prodcuts