"use client"

import { Dispatch, SetStateAction, useState } from "react";

type IPropsFilters = {
    setHandleOpneFilter?: Dispatch<SetStateAction<boolean>>
}

const Filters = ({ setHandleOpneFilter }: IPropsFilters) => {
    const [toggleCategory, setToggleCategory] = useState(false);
    const [togglePrice, setTogglePrice] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000)

    const ViewRemoveFilter = () => {
        if (minPrice !== 0 || maxPrice !== 1000000) return true
    }

    const removeFilter = () => {
        setMinPrice(0)
        setMaxPrice(1000000)
    }

    const handleMaXChange = (e: string) => {
        const rangeValue = Number(e)
        if (rangeValue >= minPrice) setMaxPrice(rangeValue)
    }
    const handleMinChange = (e: string) => {
        const rangeValue = Number(e)
        if (rangeValue <= maxPrice) setMinPrice(rangeValue)
    }
    return (
        <>
            <div className="flex gap-x-2 items-center justify-between">
                <span className="flex gap-x-2 items-center">
                    <img src="./icons/filter.svg" alt="مرتب" className="w-6 h-6" />
                    <span className="text-primary text-xl font-black">فیلترها</span>
                </span>
                {ViewRemoveFilter() && <span className="py-1 px-3 text-[#C62020] text-sm cursor-pointer font-extrabold hover:text-shadow-[0_0_24px_#c6202099] transition-all duration-200 ease" onClick={() => {
                    removeFilter()
                    setHandleOpneFilter && setHandleOpneFilter(false)
                }}>حذف فیلترها</span>}
            </div>
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

            <div className={`bg-white overflow-hidden cursor-pointer rounded-2xl border-custom transition-all duration-300 ${togglePrice ? "h-[163px]" : "h-[48px] hover:bg-[#F9F9F9]"}`}>
                <div className="flex items-center justify-between pt-3 pr-4 pl-3" onClick={() => setTogglePrice((prev) => !prev)}>
                    <span className="flex gap-x-[5px] items-center">
                        <span className="text-primary">قیمت</span>
                        {
                            minPrice !== 0 || maxPrice !== 1000000 ?
                                <span className="w-2 h-2 bg-[#FFC436] rounded-xl"></span> : null
                        }
                    </span>
                    <img src="./images/arrow-left-slider.svg" alt="جهت" className={`w-6 h-6 transition-transform duration-300 ${togglePrice && "-rotate-[90deg]"}`} />
                </div>
                <div className="mt-4 px-4 flex flex-col items-center">
                    <div className="mb-6 flex gap-x-2 h-9 text-sm text-[#383838] w-full">
                        <div className="relative flex-1">
                            <input type="text" value={minPrice} readOnly className="w-full h-full pr-2 pl-8 rounded-[9px] input-spin" />
                            <label className="absolute text-[10px] right-3.5 -top-2 bg-white px-1 rounded-lg transition-all duration-300 pointer-events-none">از</label>
                            <img src="./icons/تومان.svg" alt="تومان" className="absolute left-2 bottom-[11px]" />
                        </div>
                        <div className="relative flex-1">
                            <input type="text" value={maxPrice} readOnly className="w-full h-full pr-2 pl-8 rounded-[9px] input-spin" />
                            <label className="absolute text-[10px] right-3.5 -top-2 px-1 bg-white rounded-lg transition-all duration-300">تا</label>
                            <img src="./icons/تومان.svg" alt="تومان" className="absolute left-2 bottom-[11px]" />
                        </div>
                    </div>
                    <div className="bg-primary relative w-full bg-pri h-1 mb-4 flex justify-center rounded-full">
                        <input
                            type="range"
                            min={0}
                            max={1000000}
                            value={maxPrice}
                            onChange={(e) => handleMaXChange(e.target.value)}
                            className="bg-primary cursor-pointer absolute top-1/2 -translate-y-1/2 h-0 w-full appearance-none range-product"
                        />
                        <input
                            type="range"
                            min={0}
                            max={1000000}
                            value={minPrice}
                            onChange={(e) => handleMinChange(e.target.value)}
                            className="bg-primary w-full absolute cursor-pointer top-1/2 -translate-y-1/2 h-0 appearance-none range-product"
                        />
                    </div>
                    <div className="relative w-full flex justify-between text-sm text-gray-600">
                        <span className="text-xs text-text-gray">ارزانترین</span>
                        <span className="text-xs text-text-gray">گرانترین</span>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center justify-between pr-4 pl-3 border-custom rounded-2xl h-12 transition-colors duration-300 hover:bg-[#F9F9F9]">
                <span className="text-primary">فقط کالاهای موجود</span>
                <label className="product-toggle w-11 h-[22px] cursor-pointer relative">
                    <input type="checkbox" className="opacity-0 w-0 h-0 product-toggle-checkbox" />
                    <span className="absolute transition-all duration-300 cover-roller rounded-2xl w-full h-full top-0 left-0 bg-[#BFBFBF]"></span>
                </label>
            </div>
        </>
    )
}

export default Filters