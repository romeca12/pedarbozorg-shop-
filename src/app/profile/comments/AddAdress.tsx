import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

export type TPopUpAddAdress = {
    status: boolean;
    title: string;
    operation: string;
}

type TPropsAddAdress = {
    popUp: TPopUpAddAdress,
    setPopUp: Dispatch<SetStateAction<TPopUpAddAdress>>,
}

function AddAdress({ popUp, setPopUp }: TPropsAddAdress) {

    return (
        <>
            <div className={`bg-pop-up z-20 fixed w-full h-full inset-0 ${popUp.status ? "block" : "hidden"}`}
                onClick={() => setPopUp((prev) => ({ ...prev, status: false }))}></div>

            <div className={`${popUp.status ? "top-1/2" : "top-[120%]"} space-y-6 z-30 pop-up w-[calc(100%-32px)] max-w-[498px] bg-white p-6 border-custom rounded-2xl shrink-0 content-center transition-all duration-500`}>
                <div className="flex justify-between">
                    <span className="text-xl text-primary">{popUp.title}</span>
                    <Image src="/images/remove.svg" alt="بستن" width={32} height={32}
                        onClick={() => setPopUp((prev) => ({ ...prev, status: false }))} />
                </div>
                <p className="text-gray-five">
                    برای افزودن آدرس جدید لطفا به بخش «مدیریت آدرس‌ها» در تنظیمات پروفایل خود مراجعه کنید.
                </p>
                <div className="float-end">
                    <button className="danger-btn border-type-four"
                        onClick={() => setPopUp((prev) => ({ ...prev, status: false }))}>انصراف</button>
                    <button className="mr-4 success-btn">
                        {popUp.operation}
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddAdress