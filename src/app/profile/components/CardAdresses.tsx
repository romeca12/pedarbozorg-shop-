import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { TPopUpAddAdress } from "../comments/AddAdress"

type TPropsCardAdresses = {
    setPopUpDelete: Dispatch<SetStateAction<boolean>>,
    setPopUpAddAdress: Dispatch<SetStateAction<TPopUpAddAdress>>
}

function CardAdresses({ setPopUpDelete, setPopUpAddAdress }: TPropsCardAdresses) {
    return (
        <div className="pt-4 border-t-type-three flex justify-between">
            <div>
                <span className="text-sm text-gray-five">قم/ خیابان امام موسی صدر/ کوچه ۷۷/ فرعی ۶</span>
                <div className="mt-4 flex flex-col gap-y-[14px] text-xs">
                    <div className="flex gap-x-4 items-center">
                        <Image src="/icons/user.svg" alt="کاربر" width={16} height={16} />
                        <span className="text-gray-five">صبا وطن دوست</span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <Image src="/icons/call-two.svg" alt="تلفن" width={16} height={16} />
                        <span className="text-gray-five">۰۹۱۲۳۴۵۶۷۸۹</span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <Image src="/icons/signpost.svg" alt="تابلوی راهنما" width={16} height={16} />
                        <span className="text-gray-five">۱۸</span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <Image src="/icons/mail-box.svg" alt="صندوق پستی" width={16} height={16} />
                        <span className="text-gray-five">۲۳۲۹۴۸۷۳۳۰۰</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 self-center">
                <button className="w-8 h-8 flex justify-center items-center bg-background hover:bg-green-light duration-300 transition-colors rounded-lg">
                    <Image src="/icons/edit-two.svg" onClick={() => setPopUpAddAdress({ status: true, title: "ویرایش آدرس", operation: "ذخیره" })} alt="ویرایش" width={20} height={20} />
                </button>
                <button className="w-8 h-8 flex justify-center items-center bg-red-four hover:bg-red-five duration-300 transition-colors rounded-lg">
                    <Image src="/icons/trash-two.svg" onClick={() => setPopUpDelete(true)} alt="حذف" width={20} height={20} />
                </button>
            </div>
        </div>
    )
}

export default CardAdresses