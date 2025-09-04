"use client"

import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react"
import toast from "react-hot-toast";


const CardGlobal = ({ id }: { id: number }) => {
    const [like, setLike] = useState<boolean>(false);
    const { cart, setCart } = useContext(AppContext);

    const toggleCart = (productId: number) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === productId);
            if (existingProductIndex !== -1) {
                return prevCart.filter((_, index) => index !== existingProductIndex)
            }
            return [...prevCart, { id: productId }];
        });

        // toast view
        cart.find(item => item.id === id)
            ? toast.success("این کالا از سبد خریدتان حذف شد") :
            toast.success("این کالا به سبد خریدتان اضافه شد");
    };

    return (
        <div className="bg-white group p-2 md:p-4 relative cursor-pointer rounded-2xl overflow-hidden flex flex-col gap-2 border-custom product-layout">
            <div className="flex justify-between gap-2 items-center md:flex-col">
                <img src="./images/image-popular-product.svg" alt={`پرفروش ترین محصول`} className='w-[85px] h-[85px] md:w-[208px] md:h-[208px]' />
                <div className="min-w-[179px]">
                    <h3 className="text-base md:text-xl text-primary mb-2 font-black">آرد نخودچی</h3>
                    <div className='mb-2 flex justify-between items-center'>
                        <div className='bg-[#C62020] rounded-2xl flex items-center px-2 py-0.5'>
                            <span className=" text-white text-[10px] md:text-xs font-black">۶۸٪</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="text-base  md:text-xl text-[#353535]">۹,۳۸۳,۰۰۰</span>
                            <img src="./icons/tooman.svg" alt="تومان" className='w-[23px] h-[16px] my-1.5 mr-1 md:mr-2' />
                        </div>
                    </div>
                    <div className='flex justify-between py-[1px]'>
                        <span><img src="./icons/star.svg" alt="ستاره" className='inline -mt-0.5 ml-1 w-[13px] h-[13px] md:h-[17px] md:w-[17px]' /><span className='text-xs md:text-sm '>۴.۳</span></span>
                        <span className="text-gray-400 line-through text-sm">۹,۳۸۳,۰۰۰</span>
                    </div>
                </div>
            </div>
            <div className='actions flex justify-between'>
                <span className="p-1.5 md:p-0" onClick={() => setLike(!like)}>
                    {
                        like ?
                            <img src="./icons/shoping-heart-fill.svg" alt="لایک" className="w-5 h-5 active:scale-50 md:absolute md:-right-8 md:top-4 md:group-hover:right-4 transition-all duration-300 ease-in-out" /> :
                            <img src="./icons/shoping-heart-outline.svg" alt="لایک" className="active:scale-50 md:absolute md:-right-8 md:top-4 md:group-hover:right-4 transition-all duration-300 ease-in-out"/>
                    }
                </span>
                <span className="p-1.5 md:p-0" onClick={() => toggleCart(id)}>
                    {
                        cart.find(item => item.id === id) ?
                            <img src="./icons/shoping-cart-fill.svg" alt="سفارش" className="w-5 h-5 md:absolute md:-left-8 md:top-4 md:group-hover:left-4 transition-all duration-300 ease-in-out"/>
                            : <img src="./icons/shopping-cart-outline.svg" alt="سفارش" className="md:absolute md:-left-8 md:top-4 md:group-hover:left-4 transition-all duration-300 ease-in-out"/> 
                    }
                </span>
            </div>
        </div>
    )
}

export default CardGlobal