import CardGlobal from "@/components/CardGlobal"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "محصولات",
}

function prodcuts() {
  return (
    <div className="mt-20 md:mt-[131px] mb-40">
      <aside></aside>
      <main>
        <div className="top mb-2 gap-4 flex flex-col">
          <div className="search relative border-custom rounded-2xl">
            <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
            <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
          </div>
          <div className="fillters flex">
            <span className="py-1.5 px-3 flex gap-2">
              <img src="./icons/filter.svg" alt="فیلتر" />
              <span className="text-primary text-sm">فیلترها</span>
            </span>
            <span className="py-1.5 px-3 flex gap-2">
              <img src="./icons/sort.svg" alt="مرتب" />
              <span className="text-primary text-sm">مرتب سازی</span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 product-layout">
          {Array(20).fill(1).map((_, index) =>
            <CardGlobal key={index} id={index + 1} />
          )}
        </div>
      </main>
    </div>
  )
}

export default prodcuts