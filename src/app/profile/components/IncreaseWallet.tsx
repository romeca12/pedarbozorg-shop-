import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"

type TPropsIncreaseWallet = {
    popUpWallet: boolean,
    setPopUpWallet: Dispatch<SetStateAction<boolean>>
}

function IncreaseWallet({ setPopUpWallet, popUpWallet }: TPropsIncreaseWallet) {

    const [InputPrice, setInputPrice] = useState<{item:string, index:number | null}>({ item: "", index: null })
    const priceReady = ["۵۰٬۰۰۰", "۱۰۰٬۰۰۰", "۲۰۰٬۰۰۰", "۵۰۰٬۰۰۰"];

    const handleChoosePrice = (item: string, index: number) => {
        setInputPrice({ item, index })
    }

    return (
        <>
            <div className={`bg-pop-up z-20 fixed w-full h-full inset-0 ${popUpWallet ? "block" : "hidden"}`}
                onClick={() => setPopUpWallet(false)}></div>

            <div className={`${popUpWallet ? "top-1/2" : "top-[130%]"} space-y-6 z-30 pop-up w-[calc(100%-32px)] max-w-[662px] bg-white p-6 border-custom rounded-2xl shrink-0 content-center transition-all duration-500`}>
                <div className="flex justify-between">
                    <span className="text-xl text-primary">افزایش اعتبار کیف پول</span>
                    <Image src="/images/remove.svg" alt="بستن" width={32} height={32}
                        onClick={() => setPopUpWallet(false)} />
                </div>
                <p className="text-gray-three">مبلغ مورد نظر خود را برای افزایش اعتبار کیف پول خود وارد کنید</p>
                <div className="flex gap-y-4 flex-col items-center">
                    <div className="relative w-[180px]">
                        <input value={InputPrice.item} onChange={(self) => setInputPrice((prev)=>({...prev, item: self.target.value }))} type="text" placeholder=" " className="pl-8 w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">مبلغ</label>
                        <Image src="/icons/tooman-1.svg" alt="تومان"
                            width={20} height={20}
                            className="absolute left-2 top-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex gap-x-4">
                        {priceReady.map((item, index) =>
                            <span
                                key={index}
                                onClick={() => handleChoosePrice(item, index)}
                                className={`${InputPrice.index === index ? "border-type-three" : "border-type-five"} hover:bg-yellow-two transition-colors duration-300 text-sm text-primary cursor-pointer gap-x-2 flex rounded-lg px-3 py-1.5`}>
                                {item}
                                <Image
                                    src="/icons/tooman-square-light.svg" alt="تومان"
                                    width={20} height={20} />
                            </span>
                        )}
                    </div>
                </div>
                <div className="float-end">
                    <button className="danger-btn border-type-four"
                        onClick={() => setPopUpWallet(false)}>انصراف</button>
                    <button className="mr-4 success-btn">افزایش موجودی</button>
                </div>
            </div>
        </>
    )
}

export default IncreaseWallet