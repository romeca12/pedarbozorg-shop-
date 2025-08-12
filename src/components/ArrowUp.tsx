"use client"

import "@/app/globals.css"

import { useEffect, useState } from "react"

export default function ArrowUp() {
    const [arrowUp, setArrowUp] = useState<boolean>(false);

    useEffect(() => {
        const ArrowUp = () => {
            if (window.scrollY > 350) {
                setArrowUp(true)
            } else {
                setArrowUp(false)
            }
        }

        window.addEventListener("scroll", ArrowUp);

        return () => {
            window.removeEventListener("scroll", ArrowUp);
        };
    }
        , [])
    return (
        <>
            <div className={`w-10 h-10 fixed -left-16 bottom-20 bg-background rounded-lg p-2 tran-arrow-up shadow ${arrowUp ? "left-6" : ""}`} onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}>
                <img src="./images/arrow-up.svg" alt="" className="w-6 h-6" />
            </div>
        </>
    )
}