"use client"

import Image from "next/image";
import { usePathname } from "next/navigation"
import { useRef, useState } from "react";

const Share = () => {
    const pathname = usePathname()
    const textRef = useRef<HTMLParagraphElement>(null);
    const [copy, setCopy] = useState(false);

    async function copyText() {
        if (textRef.current) {
            await navigator.clipboard.writeText(textRef.current.innerText);
        }
    }
    function handleCopy() {
        setTimeout(() => {
            setCopy(false)
        }, 1200)
    }

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
                    <h3 ref={textRef} className="text-primary py-1 px-2 rounded-lg bg-secondarytwo whitespace-nowrap">{`http://localhost:3000${pathname}`}</h3>
                </div>
                <span className="transition-colors duration-300 hover:bg-[#C1E2D2] w-8 h-8 bg-secondarytwo rounded-lg">
                    {!copy ? <Image src="/icons/copy.svg"
                        width={32}
                        height={32}
                        alt="کپی کردن"
                        onClick={() => { copyText(); setCopy(true); handleCopy() }}
                        className="p-1.5 cursor-pointer"
                    /> : <Image src="/icons/check-svgrepo-com.svg"
                        width={32}
                        height={32}
                        alt="کپی شد"
                        className="p-1.5"
                    />}
                </span>
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