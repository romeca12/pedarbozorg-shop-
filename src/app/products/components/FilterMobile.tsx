"use client"

import { useState } from "react";
import Filters from "./Filters";

const FilterMobile = () => {
    const [handleOpneFilter, setHandleOpneFilter] = useState(false);

    return (
        <>
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-action-product cursor-pointer items-center md:hidden" onClick={() => setHandleOpneFilter(true)}>
                <img src="./icons/filter.svg" alt="فیلتر" className="shadow-action-product w-5 h-5 md:h-6 md:w-6" />
                <span className="text-primary shadow-action-product md:text-xl md:font-black">فیلترها</span>
            </span>
            <div className={`cover-filter z-10 fixed top-0 right-0 left-0 bottom-0 bg-[#00000048] ${handleOpneFilter ? "block" : "hidden"}`} onClick={() => setHandleOpneFilter(false)}></div>

            <div className={`bg-white w-full z-10 flex flex-col fixed right-0 left-0 p-4 h-[576px] gap-y-4 transition-[bottom] duration-300 ease ${handleOpneFilter ? "bottom-0" : "-bottom-[576px]"}`}>
                <img src="./icons/remove-gray.svg" alt="برداشتن" className="w-6 h-6" onClick={() => setHandleOpneFilter(false)} />
                <Filters setHandleOpneFilter={setHandleOpneFilter}/>
            </div>
        </>
    )
}

export default FilterMobile