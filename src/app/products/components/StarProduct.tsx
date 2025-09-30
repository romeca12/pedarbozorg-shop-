"use client"


import Image from "next/image"
import { useState } from "react";

function StarProduct() {
    const [handleStar, setHandleStar] = useState(false);

    return (
        <div className="flex gap-1.5 items-center">
            {handleStar ?
                <Image src="/icons/star.svg" alt="ستاره" width={20} height={20} className="cursor-pointer" onClick={() => setHandleStar(false)} />
                : <Image src="/icons/outline-star.svg" alt="ستاره" width={20} height={20} className="cursor-pointer" onClick={() => setHandleStar(true)} />
            }
            <span className="text-text-gray">۴.۳</span>
            <span className="text-text-gray-two">(۱۳)</span>
        </div>
    )
}

export default StarProduct