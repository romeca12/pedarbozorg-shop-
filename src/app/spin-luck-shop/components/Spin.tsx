"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Background from "./BgSpinLuckShop";
import toast, { Toaster } from "react-hot-toast";

export default function Spin() {
    const [value, setVavlue] = useState<string>("");
    const [spin, setSpin] = useState<number>(0);
    const [isPopUp, setIsPopUp] = useState<boolean>(false);
    const [resultSpin, setResultSpin] = useState<number>(0);


    const inputChange = (amount: string) => {
        if (/^\d*$/.test(amount) && amount.length <= 11) {
            setVavlue(amount);
        }
    }
    const verify = () => {
        const result = value.split("").map(Number);
        if (result[0] === 0 && result[1] === 9 && result.length === 11) {
            setVavlue("");
            const randomSpin = Math.floor((Math.random() * 360)) + 721;
            setSpin(randomSpin);
            switch (true) {
                case (randomSpin >= 721 && randomSpin <= 750):
                    setResultSpin(1);
                    break;
                case (randomSpin >= 751 && randomSpin <= 780):
                    setResultSpin(2);
                    break;
                case (randomSpin >= 781 && randomSpin <= 810):
                    setResultSpin(3);
                    break;
                case (randomSpin >= 811 && randomSpin <= 840):
                    setResultSpin(4);
                    break;
                case (randomSpin >= 841 && randomSpin <= 870):
                    setResultSpin(5);
                    break;
                case (randomSpin >= 871 && randomSpin <= 900):
                    setResultSpin(6);
                    break;
                case (randomSpin >= 901 && randomSpin <= 930):
                    setResultSpin(7);
                    break;
                case (randomSpin >= 731 && randomSpin <= 960):
                    setResultSpin(8);
                    break;
                case (randomSpin >= 961 && randomSpin <= 990):
                    setResultSpin(9);
                    break;
                case (randomSpin >= 991 && randomSpin <= 1020):
                    setResultSpin(10);
                    break;
                case (randomSpin >= 1021 && randomSpin <= 1050):
                    setResultSpin(11);
                    break;
                case (randomSpin >= 1051 && randomSpin <= 1080):
                    setResultSpin(12);
                    break;
                // default:
                //     console.log("مگه میشه")
            }
            setTimeout(() => {
                setIsPopUp(true);
            }, 1200);
        } else if (result.length === 0) {
            toast.error("شماره تلفن نباید خالی باشد");
        }
        else if (result[0] !== 0 || result[1] !== 9 || result.length !== 11) {
            toast.error("شماره همراه وارد شده معتبر نیست");
        }
        /////////////////////////////
        
        // if (value!=='09123456789') return toast.error('شماره موبایل صحیح را وارد کنید');
        //     setVavlue("");
        //     const randomSpin = Math.floor((Math.random() * 360)) + 721;
        //     setSpin(randomSpin);
        //     switch (true) {
        //         case (randomSpin >= 721 && randomSpin <= 750):
        //             setResultSpin(1);
        //             break;
        //         case (randomSpin >= 751 && randomSpin <= 780):
        //             setResultSpin(2);
        //             break;
        //         case (randomSpin >= 781 && randomSpin <= 810):
        //             setResultSpin(3);
        //             break;
        //         case (randomSpin >= 811 && randomSpin <= 840):
        //             setResultSpin(4);
        //             break;
        //         case (randomSpin >= 841 && randomSpin <= 870):
        //             setResultSpin(5);
        //             break;
        //         case (randomSpin >= 871 && randomSpin <= 900):
        //             setResultSpin(6);
        //             break;
        //         case (randomSpin >= 901 && randomSpin <= 930):
        //             setResultSpin(7);
        //             break;
        //         case (randomSpin >= 731 && randomSpin <= 960):
        //             setResultSpin(8);
        //             break;
        //         case (randomSpin >= 961 && randomSpin <= 990):
        //             setResultSpin(9);
        //             break;
        //         case (randomSpin >= 991 && randomSpin <= 1020):
        //             setResultSpin(10);
        //             break;
        //         case (randomSpin >= 1021 && randomSpin <= 1050):
        //             setResultSpin(11);
        //             break;
        //         case (randomSpin >= 1051 && randomSpin <= 1080):
        //             setResultSpin(12);
        //             break;
        //         // default:
        //         //     console.log("مگه میشه")
        //     }
        //     setTimeout(() => {
        //         setIsPopUp(true);
        //     }, 1200);
        

    }

    return (
        <>
            <div className="flex justify-evenly items-center relative mt-40 max-md:flex-col-reverse max-md:mb-0 max-md:justify-center max-md:mt-16 max-md:items-center max-md:gap-4">
                <div className="flex flex-col max-md:w-full">
                    <h1 className="text-[40px] font-black text-primary mb-10 max-md:text-2xl max-md:mb-3">گردونه شانس پدربزرگ</h1>
                    <span className="mb-4 text-[#757575] text-sm">شماره همراه خود را وارد کنید</span>
                    <div className="relative mb-6 spin-cover-input">
                        <label htmlFor="text">
                            <input type="text" placeholder=" " className="w-full text-primary text-base py-1 pr-2 rounded-[9px] input-spin h-10"
                                onChange={(e) => inputChange(e.target.value)} value={value} />
                            <label className="absolute right-1 top-2 text-primary spin-phone bg-secondary px-1.5 rounded-lg transition-all duration-300 pointer-events-none">تلفن همراه</label>
                        </label>
                    </div>
                    <button className="bg-primary rounded-lg py-2 px-4 text-white" onClick={verify}>چرخاندن</button>
                </div>
                <div className="relative">
                    <img style={{ rotate: `${spin}deg` }} src="./images/spin.svg" alt="" className="w-[429px] h-[427px] max-md:w-[280px] max-md:h-[278px] transition duration-1000 ease-in-out" />
                    <img src="./images/spin-center.svg" alt="" className="absolute spin-center w-[76px] h-[88px] -rotate-[0deg]" />
                </div>
            </div>
            <Toaster position="top-left" />
            {isPopUp && <PopUp setIsPopUp={setIsPopUp} setSpin={setSpin} resultSpin={resultSpin} />}
        </>
    )
}

type IPropsPopUp = {
    setIsPopUp: Dispatch<SetStateAction<boolean>>,
    setSpin: Dispatch<SetStateAction<number>>
    resultSpin: number;
}
const PopUp = ({ setIsPopUp, setSpin, resultSpin }: IPropsPopUp) => {
    const closeAndReset = () => {
        setIsPopUp(false);
        setSpin(0);
    }

    return (
        <div className="flex justify-center">
            <div className="bg-[#42414163] fixed w-full h-auto top-0 right-0 left-0 bottom-0 z-10" onClick={closeAndReset}></div>
            <div className="fixed top-[19%] w-[662px] gap-6 text-primary bg-white rounded-2xl flex flex-col items-center p-6 max-w-[90%] z-20">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-xl">نتیجه گردونه شانس شما</h2>
                    <img src="./images/remove.svg" alt="" className="w-8 h-8" onClick={closeAndReset} />
                </div>
                <img src="./images/spin-null.svg" alt="" className="w-[216px] h-[196px]" />
                <span className="text-xl">{resultSpin}</span>
                <p className="text-sm text-[#757575]">امیدواریم در تجربیات بعدی بیشتر خوشحالتان کنیم</p>
            </div>
        </div>
    )
}