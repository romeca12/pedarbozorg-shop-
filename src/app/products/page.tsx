import CardGlobal from "@/components/CardGlobal"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "محصولات",
}

function prodcuts() {
  return (
    <div className="mt-20 md:mt-[131px] mb-56 md:mb-16">
      <aside></aside>
      <main>
        <div className="top mb-2 gap-4 flex flex-col">
          <div className="search relative border-custom rounded-2xl">
            <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
            <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
          </div>
          <div className="fillters flex">
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-action-product cursor-pointer">
              <img src="./icons/filter.svg" alt="فیلتر" className="shadow-action-product" />
              <span className="text-primary text-sm shadow-action-product">فیلترها</span>
            </span>
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-action-product cursor-pointer">
              <img src="./icons/sort.svg" alt="مرتب" className="shadow-action-product" />
              <span className="text-primary text-sm shadow-action-product">مرتب سازی</span>
            </span>
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