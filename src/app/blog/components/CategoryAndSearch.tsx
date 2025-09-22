"use client"

import { useState } from "react";

const Category = () => {
    const [toggleCategory, setToggleCategory] = useState(false);

    return (
        <div className="flex flex-col gap-y-2 sm:flex-row-reverse sm:gap-x-4 mb-14 sm:mb-4">
            <div className="search relative h-10 sm:h-12 border-custom rounded-2xl bg-white sm:flex-1">
                <input type="text" placeholder="جستجو.." className="h-full pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
                <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2.5 left-2" />
            </div>

            <div className="relative sm:w-[288px]">
                <div className={`bg-white absolute top-0 right-0 overflow-hidden cursor-pointer rounded-2xl border-custom transition-all duration-300 w-full ${toggleCategory ? "h-[136px]" : "h-[48px] hover:bg-[#F9F9F9]"}`}>
                    <div className="flex items-center justify-between pt-3 pr-4 pl-3" onClick={() => setToggleCategory((prev) => !prev)}>
                        <span className="text-primary">دسته بندی</span>
                        <img src="./images/arrow-left-slider.svg" alt="جهت" className={`w-6 h-6 transition-transform duration-300 ${toggleCategory && "-rotate-[90deg]"}`} />
                    </div>
                    <div className="mt-4 pr-4 gap-1.5 flex flex-col max-h-40 overflow-y-auto">
                        {Array(3).fill(1).map((_, index) =>
                            <label className="gap-x-2 flex items-center text-sm text-[#626262]" key={index}>
                                <input type="checkbox" className="w-4 h-4 checked:accent-primary" />
                                ادویه جات
                            </label>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category