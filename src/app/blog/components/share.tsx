"use client"

import { usePathname } from "next/navigation"

const Share = () => {
    const pathname = usePathname()
    return (
        <div className="my-16 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
                <span className="text-text-gray">اشتراک گذاری:</span>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <img src="/icons/twitter.svg" alt="ایکس" className="w-8 h-8 cursor-pointer" />
                    <img src="/icons/instagram.svg" alt="اینستاگرام" className="w-8 h-8 cursor-pointer" />
                    <img src="/icons/linkedin.svg" alt="لینکدین" className="w-8 h-8 cursor-pointer" />
                    <img src="/icons/eitaa-svgrepo-com 1.svg" alt="ایتا" className="w-7 h-7 cursor-pointer" />
                    <img src="/icons/telegram.svg" alt="تلگرام" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center gap-x-2">
                <span className="text-text-gray whitespace-nowrap">لینک مطلب:</span>
                <div className="overflow-x-hidden flex justify-end">
                    <h3 className="text-primary py-1 px-2 rounded-lg bg-secondarytwo whitespace-nowrap">{`http://localhost:3000${pathname}`}</h3>
                </div>
                {<img src="/icons/copy.svg" alt="کپی کردن" className="p-1.5 bg-secondarytwo rounded-lg w-8 h-8 cursor-pointer" />}
            </div>

            <div className="flex items-center gap-x-2">
                <span className="text-text-gray">برچسب‌ها:</span>
                <div className="flex flex-wrap gap-2">
                    {Array(6).fill(1).map((_, item) =>
                        <span key={item} className="text-primary bg-secondarytwo px-2 py-1.5 rounded-lg cursor-pointer">روغن</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Share