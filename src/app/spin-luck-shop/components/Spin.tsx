"use client"
import { useEffect, useState } from "react"
import Background from "./BgSpinLuckShop";

export default function Spin() {
    const [value, setVavlue] = useState<string>("");
    const [spin, setSpin] = useState<number>(0);
    const [data, setData] = useState<object>({});

    const inputChange = (amount: string) => {
        if (/^\d*$/.test(amount) && amount.length <= 11) {
            setVavlue(amount);
        }
    }
    const verify = () => {
        const result = value.split("").map(Number);
        if (result[0] === 0 && result[1] === 9 && result.length === 11) {
            // setVavlue("");
            const randomSpin = Math.floor((Math.random() * 360)) + 721;
            setSpin(randomSpin);
            // console.log(randomSpin);
            switch (true) {
                case (randomSpin >= 721 && randomSpin <= 750):
                    console.log(1, randomSpin);
                    setSpin(0);
                    console.log(1, randomSpin);
                    break;
                case (randomSpin >= 751 && randomSpin <= 780):
                    console.log(2, randomSpin);
                    break;
                case (randomSpin >= 781 && randomSpin <= 810):
                    console.log(3, randomSpin);
                    break;
                case (randomSpin >= 811 && randomSpin <= 840):
                    console.log(4, randomSpin);
                    break;
                case (randomSpin >= 841 && randomSpin <= 870):
                    console.log(5, randomSpin);
                    break;
                case (randomSpin >= 871 && randomSpin <= 900):
                    console.log(6, randomSpin);
                    break;
                case (randomSpin >= 901 && randomSpin <= 930):
                    console.log(7, randomSpin);
                    break;
                case (randomSpin >= 731 && randomSpin <= 960):
                    console.log(8, randomSpin);
                    break;
                case (randomSpin >= 961 && randomSpin <= 990):
                    console.log(9, randomSpin);
                    break;
                case (randomSpin >= 991 && randomSpin <= 1020):
                    console.log(10, randomSpin);
                    break;
                case (randomSpin >= 1021 && randomSpin <= 1050):
                    console.log(11, randomSpin);
                    break;
                case (randomSpin >= 1051 && randomSpin <= 1080):
                    console.log(12, randomSpin);
                    break;
                default:
                    console.log("مگه میشه")
            }
        } else {
            console.log("false")
        }
    }

    return (
        <>
            <div className="flex justify-evenly items-center relative mt-40 max-md:flex-col-reverse max-md:mb-14 max-md:justify-center max-md:mt-16 max-md:items-center max-md:gap-4">
                <div className="flex flex-col max-md:w-full">
                    <h1 className="text-[40px] font-black text-primary mb-10 max-md:text-2xl max-md:mb-4">گردونه شانس پدربزرگ</h1>
                    <span className="mb-4 text-[#757575] text-sm">شماره همراه خود را وارد کنید</span>
                    <input type="text" placeholder="شماره همراه" className="mb-6 text-primary text-base py-1 pr-2 rounded-[9px] input-spin h-10"
                        onChange={(e) => inputChange(e.target.value)} value={value} />
                    <button className="bg-primary rounded-lg py-2 px-4 text-white" onClick={verify}>چرخاندن</button>
                </div>
                <div className="relative">
                    <img style={{ rotate: `${spin}deg` }} src="./images/spin.svg" alt="" className="w-[429px] h-[427px] max-md:w-[280px] max-md:h-[278px] transition duration-1000 ease-in-out" />
                    <img src="./images/spin-center.svg" alt="" className="absolute spin-center w-[76px] h-[88px] -rotate-[0deg]" />
                </div>
            </div>
            <PopUp />
        </>
    )
}

const PopUp = () => {
    return (
        <>
            <div className="bg-[#42414134] fixed w-full h-auto top-0 right-0 left-0 bottom-0 z-10"></div>
            <div className="fixed top-0 right-0 w-[662px] bg-white rounded-2xl flex max-w-[90%] z-20">
                <div>
                    <h2></h2>
                    <img src="" alt="" />
                </div>
                <img src="./images/spin-null.svg" alt="" />
                <span></span>
                <p></p>
            </div>
        </>
    )
}