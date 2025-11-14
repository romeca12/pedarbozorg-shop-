"use client"

const FormContact = () => {
    return (
        <>
            <form className="flex flex-col gap-y-6 justify-center">

                <div className="flex flex-col gap-[17px] md:flex-row">
                    <div className="flex gap-x-4 items-center h-10 md:w-1/2">
                        <span className="text-[#353535]">موضوع*:</span>
                        <select name="" id="" className="flex-1 h-full bg-white rounded-lg select-content text-input text-lg pr-4 pb-1">
                            <option>انتخاب موضوع</option>
                            <option selected>پیشنهاد</option>
                            <option>انتقاد یا شکایت</option>
                            <option>پیگیری سفارش</option>
                            <option>خدمات پس از فروش</option>
                            <option>امور مالی</option>
                            <option>مدیریت</option>
                            <option>سایر</option>
                        </select>
                    </div>

                    <div className="relative md:w-1/2">
                        <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">نام و نام خانوادگی</label>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    <div className="relative w-full">
                        <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">email@gmail.com</label>
                    </div>
                    <div className="relative w-full">
                        <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">تلفن تماس</label>
                    </div>
                    <div className="relative w-full">
                        <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" />
                        <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">شاره سفارش</label>
                    </div>
                </div>


                <div className="relative w-full">
                    <textarea name="" id="" placeholder=" " className="w-full text-input rounded-[9px] min-h-40 resize-none px-2 pt-3 input-spin"></textarea>
                    <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">متن پیام*</label>
                </div>

                <div className="border-type-two rounded-[9px] p-4 lg:py-12 lg:px-[70px] flex flex-col lg:flex-row lg:justify-between items-center gap-y-4">
                    <img src="./icons/document-upload.svg" alt="" />
                    <p className="text-center text-text-gray">حداکثر ۵ تصویر jpeg یا PNG حداکثر یک مگابایت، یک ویدیو MP4 حداکثر ۵۰ مگابایت</p>
                    <label htmlFor="file" className="relative flex rounded-lg border-upload items-center justify-center py-2 px-4 gap-x-2">
                        <img src="./icons/export.svg" alt="" />
                        <span className="text-primary">بارگذاری عکس یا ویدئو</span>
                        <input id="file" type="file" className="absolute opacity-0 w-0 h-full" />
                    </label>
                </div>


                <button type="submit" className="bg-primary flex self-end py-2 px-4 gap-x-2 rounded-lg">
                    <img src="./icons/send.svg" alt="ارسال" />
                    <span className="text-white">ارسال</span>
                </button>
            </form>
        </>
    )
}

export default FormContact