import Image from "next/image"
import PopUpProfile from "./PopUpProfile"
import { Dispatch, SetStateAction, useState } from "react"

function CardMessage() {

    const [deleteItem, setDeleteItem] = useState(false);
    return (
        <>
            <div className="p-2 space-y-2 pb-4 border-b-w-2">
                <div className="flex justify-between items-center">
                    <span className="text-primary text-sm">سفارش شما ثبت شد</span>
                    <span className="text-xs text-text-gray-two">۱۴۰۹/۰۹/۰۸</span>
                </div>
                <p className="text-xs text-gray-three">سفارش شما درحال پردازش می‌باشد و پس از تایید تحویل پست خواهد شد</p>
                <div className="flex gap-x-2 justify-end py-1.5">
                    <Image
                        src="/icons/trash-two.svg"
                        alt="حذف"
                        className="px-1.5 cursor-pointer"
                        onClick={() => setDeleteItem(true)}
                        width={32} height={32} />
                    <span className="flex gap-x-2 px-3 cursor-pointer">
                        <span className="text-primary text-sm">جزئیات سفارش</span>
                        <Image src="/icons/arrow-left.svg" alt="چزئیات" width={20} height={20} />
                    </span>
                </div>
            </div>
            <PopUpProfile
                setPopUp={setDeleteItem}
                popUp={deleteItem}
                title="حذف پیغام"
                desc="آیا از حذف این پیغام اطمینان دارید؟"
                operation="حذف پیغام"
            />
        </>
    )
}

export default CardMessage