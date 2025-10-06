"use client"

import Image from "next/image"
import { useState } from "react";


function Buy() {

    const [addCart, setAddCart] = useState([0, 0, 0]);

    const updateCart = (index: number, value: number) => {
        const newCart = [...addCart];
        newCart[index] = value;
        setAddCart(newCart);
    }

    return (
        <>
            {!true ?
                <section className="fixed z-[2] gap-y-2 bottom-0 right-0 left-0 w-full bg-white lg:bg-[#ffffff99] py-[17px] px-4 rounded-2xl border-custom flex flex-col items-center">
                    <Image src="/images/logo.svg" alt="لوگو" width={60} height={56} className="hidden" />
                    <div className="gap-x-2 bg-blue-400 hidden">
                        ۲٬۰۳۴٬۰۰۰
                        <Image src="/icons/tooman.svg" alt="تومان" width={21} height={21} />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full h-28 overflow-y-scroll px-2">
                        {Array(3).fill(1).map((_, index) =>
                            <div key={index} className="flex gap-x-2 items-center pt-2 border-t-type-two buy-single-product">
                                <div className="w-1/2 flex gap-x-2 items-center">
                                    <Image
                                        src="/images/image-best-seller.svg"
                                        alt={`عکس محصول-${index + 1}`} width={64} height={64}
                                        className="rounded-lg" />
                                    <h3 className="text-primary leading-[140%]">آرد نخودچی ۲۰۰ گرمی</h3>

                                </div>
                                <div className="flex-1 w-1/2 flex gap-x-2 justify-end items-center">
                                    <div className="h-[60px] max-w-[108px] flex flex-col items-center justify-evenly">
                                        <span className="text-primary">۲٬۰۹۸٬۰۰۰</span>
                                        <div className="flex justify-between items-center gap-x-2">
                                            <span className="text-[10px] bg-[#C62020] rounded-2xl text-white py-1 px-2">۶۸٪</span>
                                            <span className="text-sm text-[#ADADAD] line-through">۱۹٬۳۸۳٬۰۰۰</span>
                                        </div>
                                    </div>
                                    <div className="h-[72px] w-auto flex justify-end items-center">
                                        {addCart[index] === 0 ?
                                            <span
                                                className="ec-hover-btn w-10 h-10 p-2 rounded-lg bg-primary cursor-pointer"
                                                onClick={() => updateCart(index, 1)}
                                            >
                                                <Image
                                                    src="/icons/add-to-cart.svg"
                                                    alt={`خرید-${index + 1}`}
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                            :
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-[#353535] text-xl pt-0.5 w-7 h-7 flex justify-center">{addCart[index]}</span>
                                                <div className="flex flex-col gap-y-2">
                                                    <span onClick={() => updateCart(index, addCart[index] + 1)} className="bg-background rounded-lg p-1.5 cursor-pointer">
                                                        <Image src="/icons/add.svg"
                                                            alt="اضافه"
                                                            width={20} height={20}
                                                        />
                                                    </span>
                                                    <span onClick={() => updateCart(index, 0)} className="w-8 h-8 rounded-lg p-1.5 bg-background  cursor-pointer">
                                                        <Image src="/icons/trash.svg"
                                                            alt="حذف"
                                                            width={20} height={20}
                                                        />
                                                    </span>
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="bg-primary ec-hover-btn w-full rounded-lg gap-x-2 py-2 px-4 flex justify-center items-center text-white">
                        افزودن پک به سبد خرید
                        <Image src="/icons/add-to-cart.svg" alt="خرید پک" width={24} height={24} />
                    </button>
                </section> :
                <section className="bg-white border-custom py-[17px] px-4 fixed z-[2] bottom-0 right-0 left-0 w-full">
                    <h5 className="text-text-gray-two mb-2 text-center bg-amber-300">ناموجود</h5>
                    <button className="bg-primary ec-hover-btn w-full rounded-lg gap-x-2 py-2 px-4 flex justify-center items-center text-white">
                        افزودن پک به سبد خرید
                        <Image src="/icons/add-to-cart.svg" alt="خرید پک" width={24} height={24} />
                    </button>
                </section>
            }
        </>
    )
}

export default Buy  