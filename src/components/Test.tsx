"use client";
import { useState } from "react";

export default function PriceFilter() {
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(42409000);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= maxPrice) setMinPrice(value);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= minPrice) setMaxPrice(value);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Inputs */}
            <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col items-center border rounded-xl px-4 py-2">
                    <span className="text-sm">از</span>
                    <input
                        type="text"
                        value={minPrice.toLocaleString("fa-IR")}
                        readOnly
                        className="text-center outline-none bg-transparent"
                    />
                    <span className="text-sm">تومان</span>
                </div>
                <div className="flex flex-col items-center border rounded-xl px-4 py-2">
                    <span className="text-sm">تا</span>
                    <input
                        type="text"
                        value={maxPrice.toLocaleString("fa-IR")}
                        readOnly
                        className="text-center outline-none bg-transparent"
                    />
                    <span className="text-sm">تومان</span>
                </div>
            </div>

            {/* Range Slider */}
            <div className="relative w-full">
                {/* Track */}
                <div className="absolute top-1/2 -translate-y-1/2 h-2 w-full bg-gray-200 rounded-full"></div>
                {/* Active Range */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 h-2 bg-green-700 rounded-full"
                    style={{
                        left: `${(minPrice / 42409000) * 100}%`,
                        right: `${100 - (maxPrice / 42409000) * 100}%`,
                    }}
                ></div>
                {/* Min */}
                <input
                    type="range"
                    min={0}
                    max={42409000}
                    value={minPrice}
                    onChange={handleMinChange}
                    className="absolute w-full appearance-none bg-transparent pointer-events-auto"
                />
                {/* Max */}
                <input
                    type="range"
                    min={0}
                    max={42409000}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="absolute w-full appearance-none bg-transparent pointer-events-auto"
                />
            </div>

            {/* Labels */}
            <div className="flex justify-between text-sm mt-2">
                <span>گرانترین</span>
                <span>ارزانترین</span>
            </div>
        </div >
    );
}





// 'use client';

// import { useState } from 'react';

// export default function PriceFilter() {
//     const [minPrice, setMinPrice] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(1000000);

//     const handleMinChange = (e: any) => {
//         const value = Math.min(Number(e.target.value), maxPrice);
//         setMinPrice(value);
//     };

//     const handleMaxChange = (e: any) => {
//         const value = Math.max(Number(e.target.value), minPrice);
//         setMaxPrice(value);
//     };

//     const formatPrice = (price: any) => {
//         return new Intl.NumberFormat('fa-IR').format(price);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//             <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-bold text-center mb-6">فیلتر قیمت</h2>

//                 <div className="relative mb-8">
//                     {/* خط زمینه */}
//                     <div className="absolute h-1.5 bg-gray-300 rounded-full w-full top-1/2 -translate-y-1/2"></div>

//                     {/* خط فعال */}
//                     <div
//                         className="absolute h-1.5 bg-blue-500 rounded-full top-1/2 -translate-y-1/2"
//                         style={{
//                             left: `${(minPrice / 1000000) * 100}%`,
//                             right: `${100 - (maxPrice / 1000000) * 100}%`
//                         }}
//                     ></div>

//                     {/* دایره حداقل قیمت */}
//                     <input
//                         type="range"
//                         min="0"
//                         max="1000000"
//                         value={minPrice}
//                         onChange={handleMinChange}
//                         className="absolute w-full h-3 appearance-none opacity-0 z-20 cursor-pointer"
//                     />
//                     <div
//                         className="absolute w-5 h-5 rounded-full border-4 border-white shadow-md z-10 top-1/2 -translate-y-1/2"
//                         style={{ left: `${(minPrice / 1000000) * 100}%` }}
//                     ></div>

//                     {/* دایره حداکثر قیمت */}
//                     <input
//                         type="range"
//                         min="0"
//                         max="1000000"
//                         value={maxPrice}
//                         onChange={handleMaxChange}
//                         className="absolute w-full h-3 appearance-none opacity-0 z-20 cursor-pointer"
//                     />
//                     <div
//                         className="absolute w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md z-10 top-1/2 -translate-y-1/2"
//                         style={{ left: `${(maxPrice / 1000000) * 100}%` }}
//                     ></div>
//                 </div>

//                 <div className="flex justify-between mb-4 text-sm text-gray-600">
//                     <span>ارزانترین</span>
//                     <span>گرانترین</span>
//                 </div>

//                 <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <span className="font-bold text-blue-600">{formatPrice(minPrice)}</span>
//                     {' - '}
//                     <span className="font-bold text-blue-600">{formatPrice(maxPrice)}</span>
//                     <span className="mr-2">تومان</span>
//                 </div>
//             </div>
//         </div>
//     );
// }