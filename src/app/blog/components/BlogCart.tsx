const BlogCart = () => {
    return (
        <div className="bg-white transition-shadow duration-300 hover:shadow-[0_0_18px_#3d836138] cursor-pointer flex justify-between gap-x-2 p-2 md:p-4 w-full overal-product-item rounded-lg border-custom">
            <img src="/images/image 15.svg" alt="عکس مقاله" className="w-[75px] rounded-xl img-item-blog" />
            <div className="flex flex-col justify-around box-text-blog">
                <div className="title-and-desk-blog">
                    <p className="text-primary text-xs leading-[140%] md:text-base">از روغن ماساژ در پخت و پز استفاده نکنید</p>
                    <p className="para-item-blog text-[11px] leading-[180%] text-[#626262] md:text-sm">بهبود اهل فعلی تایپ و فرهنگ پیشرو تولید شامل داشت ارائه حال چاپ نامفهوم، و کاربردهای و برای دنیای و ایپسوم ایپسوم </p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[#83C5A5] text-[10px] md:text-sm">سبک زندگی</span>
                    <div className="flex md:items-center">
                        <span className="flex ml-1 md:ml-2">
                            <span className="text-[10px] md:text-xs text-text-gray ml-[1px] md:ml-1">&apos;۳</span>
                            <img src="/icons/clock.svg" alt="" className="w-3 h-3 md:w-[18px] md:h-[18px]" />
                        </span>
                        <span className="flex md:items-center">
                            <span className="text-[10px] md:text-xs text-text-gray ml-[1px] md:ml-1">۱۴۰۶/۰۹/۰۳</span>
                            <img src="/icons/calendar-2.svg" alt="" className="w-3 h-3 md:w-[18px] md:h-[18px]" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCart