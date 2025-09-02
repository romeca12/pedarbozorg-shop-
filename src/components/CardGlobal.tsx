"use client"

import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react"


const CardGlobal = ({ id }: { id: number }) => {
    const [like, setLike] = useState<boolean>(false);
    const { cart, setCart } = useContext(AppContext);

    const addToCart = (productId: number) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === productId);

            if (existingProductIndex !== -1) {
                const updateCart = prevCart.map((item, index) =>
                    index === existingProductIndex ? { ...item, isAdded: !item.isAdded } : item
                );
                return updateCart;
            } else {
                const newItem = { id: productId, isAdded: true }
                return [...prevCart, newItem];
            }
        });
    };
    console.log(cart.length)

    return (
        <div className="group p-2 relative cursor-pointer rounded-2xl overflow-hidden flex flex-col gap-2 border-custom product-layout bg-white">
            <div className="flex justify-between gap-2 items-center">
                <div className='flex justify-center'>
                    <img src="./images/image-popular-product.svg" alt={`پرفروش ترین محصول`} className='w-[85px] h-[85px]' />
                </div>
                <div className="w-[179px]">
                    <h3 className="text-base text-primary mb-2 font-black">آرد نخودچی</h3>
                    <div className='mb-2 flex justify-between items-center'>
                        <div className='bg-[#C62020] rounded-2xl flex items-center px-2 py-0.5'>
                            <span className=" text-white text-[10px] font-black">۶۸٪</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="text-base md:text-xl text-[#353535]">۹,۳۸۳,۰۰۰</span>
                            <img src="./icons/tooman.svg" alt="تومان" className='w-[23px] h-[16px] my-1.5 mr-1 md:mr-2' />
                        </div>
                    </div>
                    <div className='flex justify-between py-[1px]'>
                        <span><img src="./icons/star.svg" alt="ستاره" className='inline -mt-0.5 ml-1 w-[13px] h-[13px]' /><span className='text-xs  '>۴.۳</span></span>
                        <span className="text-gray-400 line-through text-sm">۹,۳۸۳,۰۰۰</span>
                    </div>
                </div>
            </div>
            <div className='actions flex justify-between'>
                <span className="p-1.5" onClick={() => setLike(!like)}>
                    <img src="./icons/shoping-heart-fill.svg" alt="لایک" className={`w-5 h-5 ${like ? "block" : "hidden"}`} />
                    <img src="./icons/shoping-heart-outline.svg" alt="لایک" className={`${like && "hidden"}`} />
                </span>
                <span className="p-1.5" onClick={() => addToCart(id)}>
                    <img src="./icons/shoping-cart-fill.svg" alt="سفارش" className={`w-5 h-5 ${cart.find(item => item.id === id)?.isAdded ? "block" : "hidden"}`} />
                    <img src="./icons/shopping-cart-outline.svg" alt="سفارش" className={`${cart.find(item => item.id === id)?.isAdded && "hidden"}`} />
                </span>
            </div>
        </div>
    )
}

export default CardGlobal