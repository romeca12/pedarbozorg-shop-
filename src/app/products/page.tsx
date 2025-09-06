import CardGlobal from "@/components/CardGlobal"
import { Metadata } from "next"
import Sort from "./components/Sort"
import Filter from "./components/Filter"

export const metadata: Metadata = {
  title: "محصولات",
}

function prodcuts() {
  return (
    <div className="mt-20 md:mt-[131px] mb-56 md:mb-16">
      <aside className="bg-blue-500 w-full z-10 flex flex-col fixed bottom-0 right-0 left-0">
        {/* <Filter /> */}
      </aside>
      <main>
        <div className="top mb-2 md:mb-4 gap-4 flex flex-col">
          <div className="search relative border-custom rounded-2xl bg-white">
            <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
            <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
          </div>
          <div className="fillters flex select-none items-center md:justify-center">
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-action-product cursor-pointer items-center md:hidden">
              <img src="./icons/filter.svg" alt="فیلتر" className="shadow-action-product w-5 h-5 md:h-6 md:w-6" />
              <span className="text-primary text-sm shadow-action-product md:text-xl md:font-black">فیلترها</span>
            </span>
            <Sort/>
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