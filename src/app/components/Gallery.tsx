
import "@/app/globals.css";

export default function Gallery() {
    return (
        <div className="gallary mt-16 lg:mt-28 gap-2 md:gap-4">
            <div className="flex flex-col items-center md:flex-col-reverse md:gap-4 md:order-2 md:mb-[31px]">
                <div className="mb-2 md:mb-0">
                    <img src="./images/Frame 1781.svg" alt="" className="rounded-2xl" />
                </div>
                <div className="p-4 md:py-[29.5px] text-center text-[#5375C2] bg-[#E5EDFF] rounded-2xl w-full max-w-[272px]">
                    <h3 className="text-xl font-black mb-2">روغن مخصوص سالاد</h3>
                    <p className="text-sm font-normal leading-7">حاوی قوی ترین آنتی اکسیدان های شناخته شده در دنیا</p>
                    <button className="text-white bg-[#5375C2] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="mt-14 flex flex-col items-center md:flex-col-reverse md:order-4 md:gap-4 md:mb-[69px]">
                <div className="mb-2 md:mb-0">
                    <img src="./images/Frame 1780.svg" alt="" className="rounded-2xl" />
                </div>
                <div className="p-4 md:py-11 text-center text-[#DB7A18] bg-[#f5eee7] rounded-2xl w-full max-w-[272px]">
                    <h3 className="text-base font-black mb-2">کره بادام درختی</h3>
                    <p className="text-sm font-normal leading-7">تهیه شده از بادادم ممتاز ایرانی</p>
                    <button className="text-white bg-[#DB7A18] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center md:order-1 md:gap-2 md:mt-[54px]">
                <div className="mb-2">
                    <img src="./images/Frame 1779.svg" alt="" className=" rounded-2xl" />
                </div>
                <div className="p-4 md:py-[29.5px] md:px-[45px] text-center text-[#3D8361] bg-[#E7F2F5] rounded-2xl w-full max-w-[272px]">
                    <h3 className="text-xl font-black mb-2">ارده کنجد</h3>
                    <p className="text-sm font-normal leading-7">تهیه شده به روش سنتی از کنجد ایرانی</p>
                    <button className="text-white bg-[#3D8361] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center -mt-3.5 sm:mt-0 md:order-3 md:gap-2 md:mt-[29.5px]">
                <div className="mb-2">
                    <img src="./images/Frame 1780-1.svg" alt="" className=" rounded-2xl" />
                </div>
                <div className="p-4 md:py-[92.5px] text-center text-[#BD483E] bg-background-gallery rounded-2xl w-full max-w-[272px]">
                    <h3 className="text-base font-black mb-2">روغن کنجد فرابکر</h3>
                    <p className="text-sm font-normal leading-7">تهیه روز باپرس سرد فقط با تصفیه فیزیکی</p>
                    <button className="text-white bg-[#BD483E] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}