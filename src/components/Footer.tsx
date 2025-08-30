export default function Footer() {
    return (
        <div className="bg-footer-one mt-36 md:mt-0 bg-secondarytwo md:bg-transparent relative">
            <img src="./images/footer-flower.svg" alt="" className="hidden lg:block absolute left-0 top-20 rotate-6"/>
            <div className="flex flex-col md:flex-row md:items-center md:justify-evenly md:translate-y-20">
                <div className="relative">
                    <img src="./images/bg-back.svg" alt="" className="-mt-36 md:mt-0 w-full md:max-w-[437px] md:max-h-[441px]" />
                    <div className="absolute top-[50%] -translate-y-[95%] md:-translate-y-[30%] md:top-24 flex flex-col items-center justify-center w-full gap-2 md:gap-4">
                        <img src="./images/Layer_1.svg" alt="" className="w-[76px] h-[76px] md:h-[138px] md:w-[138px]" />
                        <p className="w-[80%] sm:w-1/2 text-xs md:text-base text-primary text-center leading-6 md:w-[284px] md:h-[207px]">بزرگترین لذت ما این است که بتوانیم سهمی ولو اندک در سلامت و بهداشت روحی و جسمی و روش تغذیه خانواده ها داشته باشیم. دوست داریم همانند پدربزرگ ها ، هر آنچه که می دانیم ، بی منت در اختیار جامعه قرار دهیم. به همین جهت نام پدربزرگ را برای استارت اپ خود انتخاب کردیم.</p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-8 text-primary px-4 z-[1]">
                    <div className="top">
                        <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
                            <li className="bg-background inline text-sm py-1.5 px-3 rounded-lg whitespace-nowrap">صفحه اصلی</li>
                            <li className="bg-background inline text-sm py-1.5 px-3 rounded-lg">محصولات</li>
                            <li className="bg-background inline text-sm py-1.5 px-3 rounded-lg">بلاک</li>
                            <li className="bg-background inline text-sm py-1.5 px-3 rounded-lg whitespace-nowrap">درباره ما</li>
                            <li className="bg-background inline text-sm py-1.5 px-3 rounded-lg whitespace-nowrap">تماس باما</li>
                        </ul>
                    </div>
                    <div className="bottom flex flex-col items-center gap-2 md:flex-row-reverse md:items-center md:justify-center">
                        <div className="flex flex-col gap-2 md:max-w-[385px]">
                            <div className="px-4 py-2 bg-background rounded-2xl flex justify-center items-center">
                                <h5 className="text-xs whitespace-nowrap">فروشگاه مرکزی</h5>
                                <p className="text-sm  px-2 text-center">تهران،جنت آباد مرکزی، خیابان کبیری طامه(شاهین شمالی) ۲۰ متری گلستان غربی،پلاک ۱۵</p>
                                <img src="./icons/location.svg" alt="" />
                            </div>
                            <div className="py-2 px-4 flex justify-between items-center bg-background rounded-2xl">
                                <h5 className="text-xs">تلفن فروشگاه</h5>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">۰۲۱-۴۴۶۱۲۷۵۲</p>
                                    <img src="./icons/shop.svg" alt="" />
                                </div>
                            </div>
                            <div className="py-2 px-4 flex justify-between items-center bg-background rounded-2xl">
                                <h5 className="text-xs">تلفن سفارشات</h5>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">۰۲۱-۴۴۸۹۹۲۱۰</p>
                                    <img src="./icons/shopping-bag.svg" alt="" />
                                </div>
                            </div>
                            <div className="py-2 px-4 flex justify-between items-center bg-background rounded-2xl">
                                <h5 className="text-xs">همراه مدیر عامل</h5>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">۰۹۱۹۴۰۶۰۸۰۵</p>
                                    <img src="./icons/mobile.svg" alt="" />
                                </div>
                            </div>
                            <div className="py-2 px-4 flex justify-end items-center bg-background rounded-2xl gap-2">
                                <p className="text-sm">Pedarbozorg.busiuness@gmail.com</p>
                                <img src="./icons/shopping-bag.svg" alt="" />
                            </div>
                        </div>
                        <div className="bg-background flex justify-around items-center p-4 gap-4 rounded-2xl md:flex-col md:gap-[68px] w-full md:w-auto">
                            <img src="./icons/NL4af3EG 1.svg" alt="" className="w-[79px] h-[81px]" />
                            <img src="./icons/نماد-اطمینان-1 1.svg" alt="" className="w-[60px] h-[87px]" />
                        </div>
                        <div className="flex items-center gap-8 mt-6 mb-8 md:mt-0 md:mb-0 md:flex-col md:bg-background md:gap-[37.5px] rounded-2xl px-4 py-8">
                            <img src="./icons/telegram.svg" alt="" className="w-7 h-7 md:w-[43px] md:h-[43px]" />
                            <img src="./icons/instagram.svg" alt="" className="w-7 h-7 md:w-[43px] md:h-[43px]" />
                            <img src="./icons/Eitaa.svg" alt="" className="w-7 h-7 md:w-[43px] md:h-[43px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 pb-11 md:translate-y-32 text-[#83C5A5]">
                <p className="text-center text-sm leading-7 md:text-lg">تمامی حقوق مادی و معنوی این سامانه متعلق به فروشگاه <span className="font-semibold text-primary">پدربزرگ</span> می‌باشد</p>
                <p className="hidden md:block text-center text-lg mt-4">طراحی شده توسط گروه فنی و مهندسی <span className="font-semibold text-[#3F3681] underline">کدینتو</span></p>
            </div>
        </div>
    )
}