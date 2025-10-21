import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

type TPropsLogout = {
    popUpLogout: boolean,
    setPopUpLogout: Dispatch<SetStateAction<boolean>>,
}

function Logout({popUpLogout, setPopUpLogout} : TPropsLogout) {

    return (
        <>
            <div className={`bg-pop-up z-20 fixed w-full h-full inset-0 ${popUpLogout?"block":"hidden"}`}
                onClick={() => setPopUpLogout(false)}></div>

            <div className={`${popUpLogout? "top-1/2" : "top-[120%]"} space-y-6 z-30 pop-up w-[calc(100%-32px)] max-w-[498px] bg-white p-6 border-custom rounded-2xl shrink-0 content-center transition-all duration-500`}>
                <div className="flex justify-between">
                    <span className="text-xl text-primary">خروج از حساب کاربری</span>
                    <Image src="/images/remove.svg" alt="بستن" width={32} height={32}
                        onClick={() => setPopUpLogout(false)} />
                </div>
                <p className="text-gray-five">برای سفارش و مشاهده سبد خرید بایستی وارد حساب خود باشید</p>
                <div className="float-end">
                    <button className="danger-btn border-type-four"
                        onClick={() => setPopUpLogout(false)}>انصراف</button>
                    <button className="mr-4 success-btn">خروج از حساب</button>
                </div>
            </div>
        </>
    )
}

export default Logout