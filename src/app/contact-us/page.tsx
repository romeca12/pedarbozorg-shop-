import TopPageBackground from "@/components/TopPageBackground";
import { Metadata } from "next";
import FormContact from "./components/FormContact";


export const metadata: Metadata = {
    title: "تماس باما"
}

const countactUs = () => {
    return (
        <>
            <TopPageBackground name="تماس باما" />
            <main className="mb-56 md:mb-32">
                <div className="bg-white rounded-2xl p-4 lg:p-8 mb-2 md:mb-[26px]">
                    <h2 className="text-center mb-6 lg:mb-10 text-primary text-xl font-medium">ارسال پیام به پدربزرگ</h2>
                    <FormContact />
                </div>


                <div className="flex flex-col gap-y-2 md:gap-y-[26px]">
                    <div className="flex flex-col lg:flex-row gap-[15px]">

                        <div className="flex flex-col items-center text-text-gray p-4 lg:p-8 rounded-2xl bg-white border-custom lg:flex-1">
                            <img src="./icons/call.svg" alt="تماس" className="w-16 h-16 mb-6" />
                            <h3 className="mb-6 lg:mb-10 text-primary text-xl">تلفن های تماس</h3>
                            <div className="mb-4 flex justify-between w-full">
                                <h4>تلفن فروشگاه:</h4>
                                <span>۰۲۱-۴۴۶۱۲۷۵۲</span>
                            </div>
                            <div className="mb-4 flex justify-between w-full">
                                <h4>تلفن سفارشات:</h4>
                                <span>۰۲۱-۴۴۸۹۹۲۱۰</span>
                            </div>
                            <div className="flex justify-between w-full">
                                <h4>تلفن همراه مدیر عامل:</h4>
                                <span>۰۹۱۹۴۰۶۰۸۰۵</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:justify-center p-4 lg:p-8 rounded-2xl bg-white border-custom lg:flex-1">
                            <img src="./icons/sms.svg" alt="تماس" className="w-16 h-16 mb-6" />
                            <h3 className=" text-primary text-xl mb-6 lg:mb-10">ایمیل</h3>
                            <h4 className="text-[#626262]">Pedarbozorg.busiuness@gmail.com</h4>
                        </div>

                        <div className="flex flex-col items-center lg:justify-center p-4 lg:p-8 rounded-2xl bg-white border-custom lg:flex-1">
                            <img src="./icons/location.svg" alt="تماس" className="w-16 h-16 mb-6" />
                            <h3 className=" text-primary text-xl mb-6 lg:mb-10">آدرس فروشگاه مرکزی</h3>
                            <h4 className="text-[#626262] text-center">تهران،جنت آباد مرکزی، خیابان کبیری طامه(شاهین شمالی) ۲۰ متری گلستان غربی،پلاک ۱۵</h4>
                        </div>
                    </div>


                    <img src="./images/image 17.svg" alt="نقشه" className="h-auto rounded-2xl max-h-[350px]" />

                </div>
            </main>
        </>
    )
}

export default countactUs;