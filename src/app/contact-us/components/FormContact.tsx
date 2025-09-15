"use client"

const FormContact = () => {
    return (
        <>
            <form className="flex flex-col gap-y-6 justify-center lg:mb-[26px]">
                <div className="flex flex-col gap-y-[17px]">
                    <div className="flex gap-x-4 items-center bg-blue-600 h-10">
                        <span className="text-[#353535]">موضوع*:</span>
                        <select name="" id="" className="flex-1 h-full bg-white rounded-2xl select-content">
                            <option value="" >انتخاب موضوع</option>
                            <option value="" selected>پیشنهاد</option>
                            <option value="">انتقاد یا شکایت</option>
                            <option value="">پیگیری سفارش</option>
                            <option value="">خدمات پس از فروش</option>
                            <option value="">امور مالی</option>
                            <option value="">مدیریت</option>
                            <option value="">سایر</option>
                        </select>
                    </div>

                    <div className="relative">
                        <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">تلفن همراه</label>
                    </div>
                </div>


                <div>
                    <div className="relative spin-cover-input">
                        <input type="text" placeholder=" " className="w-full text-primary text-base py-1 pr-2 rounded-[9px] input-spin h-10" />
                        <label className="absolute right-1 top-2 text-primary spin-phone bg-secondary px-1.5 rounded-lg transition-all duration-300 pointer-events-none">تلفن همراه</label>
                    </div>
                    <div className="relative spin-cover-input">
                        <input type="text" placeholder=" " className="w-full text-primary text-base py-1 pr-2 rounded-[9px] input-spin h-10" />
                        <label className="absolute right-1 top-2 text-primary spin-phone bg-secondary px-1.5 rounded-lg transition-all duration-300 pointer-events-none">تلفن همراه</label>
                    </div>
                    <div className="relative spin-cover-input">
                        <input type="text" placeholder=" " className="w-full text-primary text-base py-1 pr-2 rounded-[9px] input-spin h-10" />
                        <label className="absolute right-1 top-2 text-primary spin-phone bg-secondary px-1.5 rounded-lg transition-all duration-300 pointer-events-none">تلفن همراه</label>
                    </div>
                </div>


                <textarea name="" id="" className="border-custom rounded-[9px] min-h-40"></textarea>


                <div>
                    {/* <img src="" alt="" /> */}
                    <p></p>
                    <input type="file" name="" />
                </div>


                <span>
                    {/* <img src="" alt="" /> */}
                    ارسال
                </span>
            </form>
        </>
    )
}

export default FormContact