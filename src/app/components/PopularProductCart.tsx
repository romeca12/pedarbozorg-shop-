import TitleSection from "@/components/TitleSection"

export default function PopularProductCart() {
    return (
        <div>
            <TitleSection title="پرفروش ترین محصولات" />
            <div className="gap-2 lg:gap-4 popular-product-card">
                {Array(11).fill(1).map((_, item) =>
                    <div key={item} className="flex items-center rounded-2xl p-2 gap-2 lg:p-4 lg:gap-4 bg-white hover:shadow-lg transition-all duration-400 border-custom">
                        <img src="/images/1.svg" alt={`${item + 1}`} className="w-9 h-[45px] lg:h-[62px]" />
                        <img src="/images/image-best-seller.svg" alt={`${item + 1}`} className="w-16 h-16 lg:h-[120px] lg:w-[120px]" />
                        <h4 className="text-base lg:text-xl font-black text-primary ml-7">آرد نخودچی</h4>
                    </div>
                )}
            </div>
            <div className="grid place-content-center">
                <button className="bg-primary text-white py-2 px-3 lg:px-4 lg:py-2.5 text-sm lg:text-base rounded-lg font-black mt-4 lg:mt-8 transition-colors duration-300 hover:bg-hover-btn">مشاهده همه</button>
            </div>
        </div>
    )
}