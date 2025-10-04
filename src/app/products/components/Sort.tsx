"use client"

import { useState } from "react"

type IPropsSort = {
    sortItems: string[],
    activeItem?: number
}

const Sort = ({ sortItems, activeItem }: IPropsSort) => {
    const [handleOpneSort, setHandleOpneSort] = useState<boolean>(false);

    return (
        <>
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-action-product items-center cursor-pointer md:hidden" onClick={() => setHandleOpneSort(true)}>
                <img src="/icons/sort.svg" alt="مرتب" className="shadow-action-product" />
                <span className="text-primary text-sm shadow-action-product">مرتب سازی</span>
            </span>
            <div>
                <div className={`cover-filter z-10 fixed top-0 right-0 left-0 bottom-0 bg-[#00000048] ${handleOpneSort ? "block" : "hidden"}`} onClick={() => setHandleOpneSort(false)}></div>

                <div className={`z-10 fixed md:static bg-white md:bg-transparent w-full right-0 left-0 p-4 pb-[35px] md:p-0 transition-[bottom] duration-300 ease ${handleOpneSort ? "bottom-0" : "-bottom-[327px]"}`}>
                    <img src="/icons/remove-gray.svg" alt="برداشتن" className="mb-4 md:hidden" onClick={() => setHandleOpneSort(false)} />
                    <div className="flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-2">
                        <span className="flex gap-x-2 items-center">
                            <img src="/icons/sort.svg" alt="مرتب" className="w-6 h-6 md:cursor-pointer" />
                            <span className="text-primary text-xl font-black">مرتب سازی</span>
                        </span>

                        <div className="flex gap-2 overflow-x-auto">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                {sortItems.map((item, index) =>
                                    <span
                                        key={index}
                                        className={`button-sort-product cursor-pointer ${index === activeItem ? "button-sort-product-active" : ""}`}
                                        onClick={()=> setHandleOpneSort(false)}
                                    >
                                        {item}
                                    </span>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sort