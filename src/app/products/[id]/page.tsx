import CardGlobal from "@/components/CardGlobal"
import TitleSection from "@/components/TitleSection"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import StarProduct from "../components/StarProduct"
import Tabs from "../components/Tabs"
import Buy from "../components/Buy"
import ShareLink from "../components/ShareLink"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {

    const { id } = await params;
    return {
        title: `محصول ${id}`,
        description: 'محصول آرد نخودچی از دسته ادویه جات در فروشگاه اینترنتی پدربزرگ',
        keywords: ['آرد نخودچی', 'ادویه جات', 'پدربزرگ', 'فروشگاه اینترنتی پدربزرگ'],
    }
}

async function page() {
    return (
        <>
            <img src="/images/spin-luck-shop-bg-right-flower.svg" alt="عکس پس زمینه" className="hidden md:block md:absolute md:-left-[15px] md:w-[426px] md:h-[400px] md:top-[35px] -z-10" />
            <div className="text-primary text-sm flex justify-start items-center">
                <Link href="/">
                    <span className="p-3 cursor-pointer">پدر بزرگ</span>
                </Link>/
                <Link href="/products">
                    <span className="p-3 cursor-pointer">ادویه جات</span>
                </Link>/
                <span className="p-3 cursor-pointer">آرد نخودچی</span>
            </div>

            <div className="xl:flex xl:gap-4">
                <div className="flex flex-col xl:items-start gap-4 items-center xl:flex-row">

                    <div className="flex gap-2 justify-end xl:flex-col-reverse w-full xl:max-w-10">
                        <Image src="/icons/notification.svg" alt="اعلان" width="40" height="40" className="cursor-pointer p-2" />
                        <ShareLink />
                        <Image src="/icons/shoping-heart-outline.svg" alt="لایک" width="40" height="40" className="cursor-pointer p-2" />
                    </div>

                    <div className="flex flex-col gap-2 min-w-[312px]">
                        <img src="/images/image-popular-product.svg" alt="عکس محصول" className="rounded-2xl border-custom w-full bg-white" />
                        <div className="flex gap-2 justify-center">
                            {Array(4).fill(1).map((_, index) =>
                                <Image
                                    src="/images/image-popular-product.svg"
                                    alt="عکس محصول"
                                    key={index}
                                    className="rounded-2xl border-custom bg-white"
                                    width={72}
                                    height={72}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="pb-4 border-b flex items-center justify-between">
                            <h1 className="text-primary text-2xl">آرد نخودچی</h1>
                            <div className="flex items-center gap-4">
                                <span className="text-primary text-sm">۱۴ نظر</span>
                                <StarProduct />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="mb-4 text-primary">توضیحات</h2>
                            <p className="text-[#626262] text-justify">از ابزارهای کاربردی برای به پایان متخصصان شناخت ایجاد زیادی شناخت رااز ابزارهای کاربردی برای متخصصان شناخت ایجاد زیادی شناخت را</p>
                        </div>
                        <div className="mt-4 text-primary">
                            <h2 className="text-primary mb-4">مشخصات</h2>
                            <dl>
                                <div className="flex gap-4 mb-2">
                                    <dt className="text-text-gray-two">حالت فیزیکی:</dt>
                                    <dd className="text-gray-three">جامد</dd>
                                </div>
                                <div className="flex gap-4">
                                    <dt className="text-text-gray-two">حالت فیزیکی:</dt>
                                    <dd className="text-gray-three">جامد</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="text-sm text-text-gray mt-4 grid grid-cols-2 md:grid-cols-4 gap-y-2">
                            <div className="flex gap-2 items-center flex-col">
                                <img src="/icons/moneys2.svg" alt="قیمت مناسب" />
                                <span>قیمت مناسب</span>
                            </div>
                            <div className="flex gap-2 items-center flex-col">
                                <img src="/icons/tick-square2.svg" alt="تضمین سلامت" />
                                <span>تضمین اصالت</span>
                            </div>
                            <div className="flex gap-2 items-center flex-col">
                                <img src="/icons/tree2.svg" alt="طبیعی" />
                                <span>۱۰۰ ٪ طبیعی</span>
                            </div>
                            <div className="flex gap-2 items-center flex-col">
                                <img src="/icons/truck-time2.svg" alt="ارسال سریع و رایگان" />
                                <span>ارسال سریع و رایگان</span>
                                <p className="text-center">سفارش بالای ۷۰۰ هزار تومان تهران
                                    سفارش بالای ۸۵۰ تومان شهرستان‌ها</p>
                            </div>
                        </div>
                    </div>
                </div>
                <aside>
                    <Buy />
                </aside>
            </div>

            <Tabs />

            <div className="mb-56 md:mb-48">
                <TitleSection title="محصولات مرتبط" />
                <div className="overal-products gap-2 md:gap-4 mb-4 lg:mb-8">
                    {Array(8).fill(1).map((_, index) =>
                        <CardGlobal key={index} id={index + 1} />
                    )}
                </div>
                <Link href="/products" className="flex justify-center">
                    <button className="text-white bg-primary transition-colors duration-300 hover:bg-hover-btn rounded-lg px-4 py-2">مشاهده همه محصولات</button>
                </Link>
            </div>
        </>
    )
}

export default page