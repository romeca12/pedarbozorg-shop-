"use client"

import { useState } from "react";

const Category = () => {
    const [toggleCategory, setToggleCategory] = useState(false);

    return (
        <div className={`bg-white overflow-hidden cursor-pointer rounded-2xl border-custom transition-all duration-300 ${toggleCategory ? "h-[218px]" : "h-[48px] hover:bg-[#F9F9F9]"}`}>
            <div className="flex items-center justify-between pt-3 pr-4 pl-3" onClick={() => setToggleCategory((prev) => !prev)}>
                <span className="text-primary">دسته بندی</span>
                <img src="./images/arrow-left-slider.svg" alt="جهت" className={`w-6 h-6 transition-transform duration-300 ${toggleCategory && "-rotate-[90deg]"}`} />
            </div>
            <div className="mt-4 pr-4 gap-1.5 flex flex-col max-h-40 overflow-y-auto">
                {Array(6).fill(1).map((_, index) =>
                    <label className="gap-x-2 flex items-center text-sm text-[#626262]" key={index}>
                        <input type="checkbox" className="w-4 h-4 checked:accent-primary" />
                        ادویه جات
                    </label>
                )}
            </div>
        </div>
    )
}

export default Category