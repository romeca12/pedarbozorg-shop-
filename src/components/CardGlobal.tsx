const CardGlobal = () => {
    return (
        <div className="w-full group p-2 relative cursor-pointer rounded-2xl overflow-hidden bg-blue-400">
            <div className="flex bg-red-400 justify-between">
                <div className='flex justify-center mb-2'>
                    <img src="./images/image-popular-product.svg" alt={`پرفروش ترین محصول`} className='w-[85px] h-[85px] md:w-[208px] md:h-[208px]' />
                </div>
                <div>
                    <h3 className="text-xl text-primary mb-2 font-black">آرد نخودچی</h3>
                    <div className='mb-2 flex justify-between items-center'>
                        <div className='bg-[#C62020] rounded-2xl flex items-center px-2 py-0.5'>
                            <span className=" text-white text-xs font-black">۶۸٪</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="text-base md:text-xl text-[#353535]">۹,۳۸۳,۰۰۰</span>
                            <img src="./icons/tooman.svg" alt="تومان" className='w-[23px] h-[16px] my-1.5 mr-1 md:mr-2' />
                        </div>
                    </div>
                    <div className='flex justify-between py-[1px]'>
                        <span><img src="./icons/star.svg" alt="ستاره" className='inline -mt-0.5 ml-1 w-5 h-5' /><span className='text-sm'>۴.۳</span></span>
                        <span className="text-gray-400 line-through text-sm">۹,۳۸۳,۰۰۰</span>
                    </div>
                </div>
            </div>
            <div className='actions'>
                <img src="./icons/shoping-heart-fill.svg" alt="لایک" className='absolute hidden' />
                <img src="./icons/shoping-heart-outline.svg" alt="لایک" className='absolute w-5 h-5 right-4 md:-right-8 md:group-hover:right-4 transition-all duration-300 ease-in-out' />
                <img src="./icons/shoping-cart-fill.svg" alt="سفارش" className='absolute hidden' />
                <img src="./icons/shopping-cart-outline.svg" alt="سفارش" className='absolute w-5 h-5 left-4 md:-left-8 md:group-hover:left-4 transition-all duration-300 ease-in-out' />
            </div>
        </div>
    )
}

export default CardGlobal