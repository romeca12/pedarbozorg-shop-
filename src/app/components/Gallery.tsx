
import "@/app/globals.css";

export default function Gallery() {
    return (
        <div className="gallary mt-16 lg:mt-28 gap-2">
            <div className="flex flex-col items-center">
                <div className="mb-2">
                    <img src="./images/Frame 1779.svg" alt="" className="rounded-2xl" />
                </div>
                <div className="p-4 text-center text-[#BD483E] bg-background-gallery rounded-2xl">
                    <h3 className="text-xl font-black mb-2">روغن مخصوص سالاد</h3>
                    <p className="text-sm font-normal leading-7">حاوی قوی ترین آنتی اکسیدان های شناخته شده در دنیا</p>
                    <button className="text-white bg-[#BD483E] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="mt-14 flex flex-col items-center md:flex-col-reverse">
                <div className="mb-2">
                    <img src="./images/Frame 1779.svg" alt="" className="rounded-2xl" />
                </div>
                <div className="p-4 text-center text-[#BD483E] bg-background-gallery rounded-2xl">
                    <h3 className="text-base font-black mb-2">کره بادام درختی</h3>
                    <p className="text-sm font-normal leading-7">تهیه شده از بادادم ممتاز ایرانی</p>
                    <button className="text-white bg-[#BD483E] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-2">
                    <img src="./images/Frame 1779.svg" alt="" className=" rounded-2xl" />
                </div>
                <div className="p-4 text-center text-[#BD483E] bg-background-gallery rounded-2xl">
                    <h3 className="text-xl font-black mb-2">ارده کنجد</h3>
                    <p className="text-sm font-normal leading-7">تهیه شده به روش سنتی از کنجد ایرانی</p>
                    <button className="text-white bg-[#BD483E] mt-2 rounded-lg w-20 h-8 flex text-sm py-1.5 pr-[18px] mx-auto">
                        خرید<img src="./images/arrow-lef-whitet.svg" alt="" className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center -mt-8 md:flex-col-reverse">
                <div className="mb-2">
                    <img src="./images/Frame 1779.svg" alt="" className=" rounded-2xl" />
                </div>
                <div className="p-4 text-center text-[#BD483E] bg-background-gallery rounded-2xl">
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