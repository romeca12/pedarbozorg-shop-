"use client"

import { TypeProducts } from "@/app/products/components/ProductsMain";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { useContext, useState } from "react"
import toast from "react-hot-toast";

const CardGlobal = (props: TypeProducts) => {
    const [like, setLike] = useState<boolean>(false);
    const { cart, setCart } = useContext(AppContext);

    const cartItem = cart.find(item => item.id === props.id);

    const toggleCart = (productId: number) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === productId);
            if (existingProductIndex !== -1) {
                return prevCart.filter((_, index) => index !== existingProductIndex)
            }
            return [...prevCart, { id: productId }];
        });
        
        const result = cart.find(item => item.id === props.id);
        if (result) {
            toast.success("این کالا از سبد خریدتان حذف شد");
        } else {
            toast.success("این کالا به سبد خریدتان اضافه شد");
        }
    };

    return (
        <div className="bg-white group transition-shadow duration-300 hover:shadow-[0_0_18px_#3d836138] p-2 md:p-4 md:pb-2 relative cursor-pointer rounded-2xl overflow-hidden flex flex-col gap-2 border-custom">
            <Link href="/products/5">
                <div className="flex justify-between gap-2 items-center overal-product-item">
                    <img src="/images/image-popular-product.svg" alt="پرفروش ترین محصول" className='w-[85px] h-[85px] img-cart-product' />
                    <div className="min-w-[179px] md:w-full">
                        <h3 className="text-base md:text-xl text-primary mb-2 font-black">{props.name}</h3>
                        <div className='mb-2 flex justify-between items-center'>
                            <div className='bg-[#C62020] rounded-2xl flex items-center'>
                                <span className={`text-white text-[10px] md:text-xs font-black px-2 ${props.min_price - props.min_price && "py-0.5"}`}>
                                    {props.min_price === props.min_sell_price ? null : ((props.min_sell_price - props.min_price) / props.min_sell_price) * 100}
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <span className="text-base  md:text-xl text-[#353535]">{props.is_available ? props.min_price : "ناموجود"}</span>
                                {props.is_available && <img src="/icons/tooman.svg" alt="تومان" className='w-[23px] h-[16px] my-1.5 mr-1 md:mr-2' />}
                            </div>
                        </div>
                        <div className='flex justify-between py-[1px]'>
                            <span><img src="/icons/star.svg" alt="ستاره" className='inline -mt-0.5 ml-1 w-[13px] h-[13px] md:h-[17px] md:w-[17px]' /><span className='text-xs md:text-sm'>{props.avg_rate || 'بدون امتیاز'}</span></span>
                            <span className="text-gray-400 line-through text-sm">{props.min_price === props.min_sell_price ? null : props.min_sell_price}</span>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='actions flex justify-between p-1.5 md:p-0'>
                <span onClick={() => setLike((prevLike) => !prevLike)}>
                    {
                        like ?
                            <img src="/icons/shoping-heart-fill.svg" alt="لایک" className="w-5 h-5 active:scale-50 md:absolute md:-right-8 md:top-4 md:group-hover:right-4 transition-all duration-300 ease-in-out" /> :
                            <img src="/icons/shoping-heart-outline.svg" alt="لایک" className="active:scale-50 md:absolute md:-right-8 md:top-4 md:group-hover:right-4 transition-all duration-300 ease-in-out" />
                    }
                </span>
                <span onClick={() => toggleCart(props.id)}>
                    {
                        cartItem ?
                            <img src="/icons/shoping-cart-fill.svg" alt="سفارش" className="w-5 h-5 md:absolute md:-left-8 md:top-4 md:group-hover:left-4 transition-all duration-300 ease-in-out" />
                            : <img src="/icons/shopping-cart-outline.svg" alt="سفارش" className="md:absolute md:-left-8 md:top-4 md:group-hover:left-4 transition-all duration-300 ease-in-out" />
                    }
                </span>
            </div>
        </div>
    )
}

export default CardGlobal