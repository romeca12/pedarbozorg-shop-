import CardGlobal from "@/components/CardGlobal"
import TitleSection from "@/components/TitleSection"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <>
            <div className="text-primary text-sm flex justify-start items-center">
                <Link href="/">
                    <span className="p-3 cursor-pointer">پدر بزرگ</span>
                </Link>/
                <Link href="/blog">
                    <span className="p-3 cursor-pointer">ادویه جات</span>
                </Link>/
                <span className="p-3 cursor-pointer">آرد نخودچی</span>
            </div>


            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-2 justify-end w-full">
                    <Image src="/icons/notification.svg" alt="اعلان" width="40" height="40" className="cursor-pointer p-2" />
                    <Image src="/icons/share.svg" alt="اشتراک گذاری" width="40" height="40" className="cursor-pointer p-2" />
                    <Image src="/icons/shoping-heart-outline.svg" alt="لایک" width="40" height="40" className="cursor-pointer p-2" />
                </div>

                <div className="bg-green-400 flex flex-col gap-2 w-[312px] max-w-full">
                    <img src="/images/image-popular-product.svg" alt="عکس محصول" className="rounded-2xl border-custom w-full bg-white" />
                    <div className="flex gap-2 justify-center">
                        {Array(4).fill(1).map((_, index) =>
                            <img
                                src="/images/image-popular-product.svg"
                                alt="عکس محصول"
                                key={index}
                                className="w-full rounded-2xl border-custom"
                            />
                        )}
                    </div>
                </div>

                <div>
                </div>

            </div>
            <div></div>


            <div className="mt-16">
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