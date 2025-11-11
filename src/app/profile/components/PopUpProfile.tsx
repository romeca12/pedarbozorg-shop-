import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

type TProps = {
    popUp: boolean,
    setPopUp: Dispatch<SetStateAction<boolean>>,
    title: string,
    desc: string,
    operation: string
}

function PopUpProfile({ popUp, setPopUp, title , desc, operation }: TProps) {

    return (
        <>
            <div className={`bg-pop-up z-20 fixed w-full h-full inset-0 ${popUp ? "block" : "hidden"}`}
                onClick={() => setPopUp(false)}></div>

            <div className={`${popUp ? "top-1/2" : "top-[120%]"} space-y-6 z-30 pop-up w-[calc(100%-32px)] max-w-[498px] bg-white p-6 border-custom rounded-2xl shrink-0 content-center transition-all duration-500`}>
                <div className="flex justify-between">
                    <span className="text-xl text-primary">{title}</span>
                    <Image src="/images/remove.svg" alt="بستن" width={32} height={32}
                        onClick={() => setPopUp(false)} />
                </div>
                <p className="text-gray-five">{desc}</p>
                <div className="float-end">
                    <button className="danger-btn border-type-four"
                        onClick={() => setPopUp(false)}>انصراف</button>
                    <button className="mr-4 success-btn">{operation}</button>
                </div>
            </div>
        </>
    )
}

export default PopUpProfile