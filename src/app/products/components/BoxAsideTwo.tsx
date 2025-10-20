"use client"

import Image from "next/image"
import Buy from "./Buy"
import CommentSingleProduct from "./CommentSingleProduct"

import { Dispatch, SetStateAction, useState } from "react"

function BoxAsideTwo() {

    const [handleComment, setHandleComment] = useState(false);

    return (
        <>
            <aside className="lg:w-[360px] lg:sticky lg:top-[125px] lg:mt-[90px] lg:gap-y-2 lg:flex lg:flex-col">
                <section>
                    {true ?
                        <section className="lg:sticky top-0 right-0 border-custom flex flex-col items-center gap-y-4 py-[17px] px-4 bg-white rounded-2xl">
                            <span className="text-text-gray-two">
                                <span className="text-xl text-primary ml-1">۴.۳</span>از ۵</span>
                            <div className="flex gap-x-4">
                                {
                                    Array(5).fill(1).map((_, index) =>
                                        <Image key={index}
                                            src="/icons/outline-star.svg"
                                            alt={`ستاره ${index + 1}`}
                                            width={20} height={20}
                                        />
                                    )
                                }
                            </div>
                            <span className="text-xs text-text-gray leading-[180%]">ازمجموع ۱۳ امتیاز</span>
                            <button className="text-primary border-type-three rounded-lg py-2 px-4 w-full transition-colors duration-300 hover:bg-[#E0F1E9]"
                                onClick={() => setHandleComment(true)}>افزودن نظر</button>
                        </section> :
                        <section className="border-custom flex flex-col items-center gap-y-4 py-[17px] px-4 bg-white rounded-2xl">
                            <div className="flex gap-x-4">
                                {Array(5).fill(1).map((_, index) =>
                                    <Image key={index}
                                        src="/icons/outline-star.svg"
                                        alt={`ستاره ${index + 1}`}
                                        width={20} height={20}
                                        className="cursor-pointer"
                                    />)}
                            </div>
                            <span className="text-xs text-text-gray leading-[180%]">هنوز امتیازی ثبت نشده است</span>
                            <button className="text-primary border-type-three rounded-lg py-2 px-4 w-full transition-colors duration-300 hover:bg-[#E0F1E9]"
                                onClick={() => setHandleComment(true)}>افزودن نظر</button>
                        </section>
                    }
                </section>
                <Buy />
            </aside>
            <CommentPopUp
                handleComment={handleComment}
                setHandleComment={setHandleComment} />
        </>
    )
}

export default BoxAsideTwo

type IPropsCommentPopUp = {
    handleComment: boolean,
    setHandleComment: Dispatch<SetStateAction<boolean>>
}

function CommentPopUp({ handleComment, setHandleComment }: IPropsCommentPopUp) {
    return (
        <>
            <div
                className={`fixed z-20 top-0 bottom-0 right-0 left-0 w-full h-full transition-all
                    duration-300 bg-pop-up ${handleComment ? "block" : "hidden"}`}
                onClick={() => setHandleComment(false)}
            ></div>
            <div className={`w-[662px] max-w-[90%] bg-white z-30 rounded-2xl p-6 flex flex-col gap-y-6 transition-all duration-[600ms] pop-up ${handleComment ? "top-1/2" : "top-[140%]"}`}>
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl text-primary leading-[140%]">افزودن نظر</h4>
                    <Image src="/images/remove.svg" alt="بستن"
                        width={32}
                        height={32}
                        onClick={() => setHandleComment(false)} />
                </div>
                <div className="flex items-center flex-col gap-y-4">
                    <h4 className="text-primary">امتیاز</h4>
                    <div className="flex gap-x-4">
                        {Array(5).fill(1).map((_, index) =>
                            <Image key={index}
                                src="/icons/outline-star.svg"
                                alt={`ستاره ${index + 1}`}
                                width={20} height={20}
                                className="cursor-pointer"
                            />)}
                    </div>
                </div>
                <div>
                    <h4 className="text-primary mb-2">نظر</h4>
                    <div className="relative w-full">
                        <textarea name="" placeholder=" " className="w-full text-input rounded-[9px] h-[90px] resize-none px-2 pt-3 input-spin"></textarea>
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-xl transition-all duration-300 pointer-events-none">متن نظر</label>
                    </div>
                </div>
                <div className="flex  gap-x-2 items-center">
                    <input type="checkbox" className="w-4 h-4 checked:accent-primary" />
                    <span className="text-sm text-gray-three">ارسال نظر بصورت ناشناس</span>
                </div>
                <div className="mr-auto">
                    <button className="px-4 py-2 rounded-lg text-red-one transition-colors duration-300
                    hover:bg-red-two border-type-four"
                        onClick={() => setHandleComment(false)}>انصراف</button>
                    <button className="mr-4 text-white bg-primary ec-hover-btn rounded-lg px-4 py-2">ارسال</button>
                </div>
            </div>
        </>
    )
}