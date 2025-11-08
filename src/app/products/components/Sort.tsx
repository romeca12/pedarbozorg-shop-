"use client"

import { AppContext } from "@/context/AppContext"
import { useSearchParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"

type TPropsSort = {
    itemsQuery: TPropsSortItems[]
}
type TPropsSortItems = {
    id: number;
    text: string;
    category: string;
}

const Sort = ({ itemsQuery }: TPropsSort) => {
    const [handleOpneSort, setHandleOpneSort] = useState(false);
    const { filterItem, setFilterItem } = useContext(AppContext)
    const searchParams = useSearchParams();
    const orderItem = searchParams.get("ordering") || "";

    useEffect(() => {
        setFilterItem((prev) => ({ ...prev, sort: orderItem }))
    }, [])

    console.log(filterItem.sort)

    return (
        <>
            <span className="py-1.5 px-3 flex gap-2 cover-shadow-success items-center cursor-pointer md:hidden" onClick={() => setHandleOpneSort(true)}>
                <img src="/icons/sort.svg" alt="مرتب" className="img-shadow-success duretion-150-ms" />
                <span className="text-primary text-sm text-shadow-success duretion-150-ms md:cursor-default">مرتب سازی</span>
            </span>
            <div>
                <div className={`cover-filter z-10 fixed top-0 right-0 left-0 bottom-0 bg-[#00000048] ${handleOpneSort ? "block" : "hidden"}`} onClick={() => setHandleOpneSort(false)}></div>

                <div className={`z-10 fixed md:static bg-white md:bg-transparent w-full right-0 left-0 p-4 pb-[35px] md:p-0 transition-[bottom] duration-300 ease ${handleOpneSort ? "bottom-0" : "-bottom-[327px]"}`}>
                    <img src="/icons/remove-gray.svg" alt="برداشتن" className="mb-4 md:hidden" onClick={() => setHandleOpneSort(false)} />
                    <div className="flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-2">
                        <span className="flex gap-x-2 items-center">
                            <img src="/icons/sort.svg" alt="مرتب" className="w-6 h-6" />
                            <span className="text-primary text-xl font-black">مرتب سازی</span>
                        </span>

                        <div className="flex gap-2 overflow-x-auto">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                {itemsQuery.map((item, index) =>
                                    <span
                                        key={item.id}
                                        className={`button-sort-product cursor-pointer ${filterItem.sort.includes(item.category) ? "button-sort-product-active" : (filterItem.sort === "" && item.id === 1) && "button-sort-product-active"}`}
                                        onClick={() => {
                                            setFilterItem((prev) => ({ ...prev, sort: item.category }))
                                            setHandleOpneSort(false)
                                        }}
                                    >
                                        {item.text}
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