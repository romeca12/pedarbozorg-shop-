"use client"
import { useState } from "react"

export default function Spin() {
    const [value, setVavlue] = useState<string>("");
    const [spin, setSpin] = useState<number>(0);

    const inputChange = (amount: string) => {
        if (/^\d*$/.test(amount) && amount.length <= 11) {
            setVavlue(amount);
        }
    }
    const verify = () => {
        const result = value.split("").map(Number);
        if (result[0] === 0 && result[1] === 9 && result.length === 11) {
            // setVavlue("");
            const res = Math.floor((Math.random() * 901)) + 600;
            setSpin(res);
            console.log(res)
        } else {
            console.log("false")
        }

    }
    return (
        <div className="flex justify-evenly items-center relative mt-40 max-md:flex-col-reverse max-md:mb-14 max-md:justify-center max-md:mt-16 max-md:items-center">
            <div className="flex flex-col">
                <h1 className="text-[40px] font-black text-primary mb-10 max-md:text-2xl max-md:mb-4">گردونه شانس پدربزرگ</h1>
                <span className="mb-4 text-[#757575] text-sm">شماره همراه خود را وارد کنید</span>
                <input type="text" placeholder="شماره همراه" className="mb-6 text-primary text-base py-1 pr-2 rounded-[9px] input-spin h-10"
                    onChange={(e) => inputChange(e.target.value)} value={value} />
                <button className="bg-primary rounded-lg py-2 px-4 text-white" onClick={verify}>چرخاندن</button>
            </div>
            <div className="to-blue-600 relative">
                <img style={{ rotate: `${spin}deg` }} src="./images/spin.svg" alt="" className="w-[429px] h-[427px] max-md:w-[280px] max-md:h-[278px] transition duration-1000 ease-in-out" />
                <img src="./images/spin-center.svg" alt="" className="absolute spin-center w-[76px] h-[88px] -rotate-[15deg]" />
            </div>
        </div>
    )
}

const PopUp = () => {

}