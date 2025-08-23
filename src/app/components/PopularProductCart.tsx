export default function PopularProductCart() {
    return (
        <div>
            <div className="font-extrabold flex items-center justify-center mb-4 lg:mb-8">
                <img src="./images/flower-slider-right.svg" alt="گل1" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
                <h3 className="text-primary mx-4 text-base lg:text-2xl font-black">پرفروش ترین محصولات</h3>
                <img src="./images/flower-slider-left.svg" alt="گل2" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
            </div>
            <div className="gap-2 lg:gap-4 flex flex-wrap justify-center">
                {Array(10).fill(1).map((_, item) =>
                    <div key={item} className="flex items-center rounded-2xl p-2 gap-2 lg:p-4 lg:gap-4 bg-white hover:shadow-lg transition-all duration-400 popular-product-cart">
                        <img src="./images/1.svg" alt={`${item + 1}`} className="w-9 h-[45px] lg:h-[62px]     " />
                        <img src="./images/image-best-seller.svg" alt={`${item + 1}`} className="w-16 h-16 lg:h-[120px] lg:w-[120px]" />
                        <h4 className="text-base lg:text-xl font-black text-primary ml-7">آرد نخودچی</h4>
                    </div>
                )}
            </div>
            <div className="grid place-content-center">
                <button className="bg-primary text-white py-2 px-3 lg:px-4 lg:py-2.5 text-sm lg:text-base rounded-lg font-black mt-4 lg:mt-8">مشاهده همه</button>
            </div>
        </div>
    )
}