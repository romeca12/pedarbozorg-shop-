"use client"

import { useState } from "react"

const Filter = () => {
    const [handleOpneFilter, setHandleOpneFilter] = useState(false);
    const [openAccordion, setopenAccordion] = useState(false);

    return (
        <>
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-action-product cursor-pointer items-center md:hidden" onClick={() => setHandleOpneFilter(true)}>
                <img src="./icons/filter.svg" alt="فیلتر" className="shadow-action-product w-5 h-5 md:h-6 md:w-6" />
                <span className="text-primary text-sm shadow-action-product md:text-xl md:font-black">فیلترها</span>
            </span>
            <div className={`cover-filter z-10 fixed top-0 right-0 left-0 bottom-0 bg-[#00000048] ${handleOpneFilter ? "block" : "hidden"}`} onClick={() => setHandleOpneFilter(false)}></div>

            <aside className={`bg-white w-full z-10 flex flex-col fixed right-0 left-0 p-4 h-[579px] gap-y-4 transition-[bottom] duration-300 ease ${handleOpneFilter ? "bottom-0" : "-bottom-[579px]"}`}>
                <img src="./icons/remove-gray.svg" alt="برداشتن" className="w-6 h-6" onClick={() => setHandleOpneFilter(false)} />
                <div className="flex gap-x-2 items-center justify-between">
                    <span className="flex gap-x-2 items-center">
                        <img src="./icons/filter.svg" alt="مرتب" className="w-6 h-6" />
                        <span className="text-primary text-xl font-black">فیلترها</span>
                    </span>
                    <span className="py-1.5 px-3 text-[#C62020] text-sm cursor-pointer font-extrabold hover:text-shadow-[0_0_24px_#c6202099] transition-all duration-200 ease">حذف فیلترها</span>
                </div>
                <div className="category cursor-pointer p-3 pr-4 rounded-2xl border-custom hover:bg-[#F9F9F9] transition-colors duration-300">
                    <div className="flex items-center justify-between" onClick={() => setopenAccordion((prev) => !prev)}>
                        <span className="text-primary">دسته بندی</span>
                        <img src="./images/arrow-left-slider.svg" alt="جهت" className="w-6 h-6" /> 
                    </div>
                    <div className={`transition-all duration-300 ${openAccordion ? "h-auto mt-4 active" : "max-h-0 overflow-hidden"}`}>
                        {Array(6).fill(1).map((_, index) =>
                            <span className="" key={index}>
                                <input type="checkbox" />
                                ادویه جات
                            </span>
                        )}
                    </div>
                </div>
                <div className="price"></div>
                <div className="only-available-commodity"></div>
            </aside>
        </>
    )
}

export default Filter