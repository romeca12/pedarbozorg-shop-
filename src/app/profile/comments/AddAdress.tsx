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

            <div className={`${popUp.status ? "top-1/2" : "top-[150%]"} space-y-6 z-30 pop-up w-[calc(100%-32px)] max-w-[662px] bg-white p-6 border-custom rounded-2xl shrink-0 content-center transition-all duration-500`}>

                <div className="flex justify-between">
                    <span className="text-xl text-primary">{popUp.title}</span>
                    <Image src="/images/remove.svg" alt="بستن" width={32} height={32}
                        onClick={() => setPopUp((prev) => ({ ...prev, status: false }))} />
                </div>

                <div className="space-y-4">
                    <div className="relative w-full">
                        <textarea name="" id="" required placeholder=" " className="w-full text-input rounded-[9px] min-h-[90px] resize-none px-2 pt-3 input-spin"></textarea>
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">نشانی پستی*</label>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex gap-x-4 items-center h-10 sm:w-1/2">
                            <span className="text-[#353535] text-lg">استان*:</span>
                            <select required name="" id="" className="flex-1 h-full bg-white rounded-lg select-content text-input text-lg pr-4 pb-1">
                                <option selected>قم</option>
                                <option>شیراز</option>
                                <option>تهران</option>
                            </select>
                        </div>

                        <div className="flex gap-x-4 items-center h-10 sm:w-1/2">
                            <span className="text-[#353535] text-lg">شهر*:</span>
                            <select required name="" id="" className="flex-1 h-full bg-white rounded-lg select-content text-input text-lg pr-4 pb-1">
                                <option selected>قم</option>
                                <option>شیراز</option>
                                <option>تهران</option>
                            </select>
                        </div>
                        {/* <div className="relative md:w-1/2">
                        <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">نام و نام خانوادگی</label>
                    </div> */}
                    </div>

                    <div className="flex gap-4 flex-wrap justify-center">

                        <div className="flex gap-x-4 items-center h-10">
                            <span className="text-[#353535] text-lg">منطقه*:</span>
                            <select required name="" id="" className="w-[114px] h-full bg-white rounded-lg select-content text-input text-lg pr-4 pb-1">
                                <option selected>قم</option>
                                <option>شیراز</option>
                                <option>تهران</option>
                            </select>
                        </div>
                        <div className="relative w-[91px]">
                            <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
                            <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">پلاک*</label>
                        </div>
                        <div className="relative w-[91px]">
                            <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" />
                            <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">واحد</label>
                        </div>
                        <div className="relative w-[192px] sm:flex-1">
                            <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
                            <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-primary">مشخصات تحویل گیرنده</div>

                    <div className="flex items-center gap-2 text-sm text-gray-three">
                        <input type="checkbox" className="w-4 h-4 checked:accent-primary" />
                        تحویل گیرنده خودم هستم
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="relative">
                            <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
                            <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">نام*</label>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
                            <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">نام خانوادگی</label>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
                            <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">شماره همراه*</label>
                        </div>
                    </div>
                </div>

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