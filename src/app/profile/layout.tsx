import Image from "next/image"
import UserDestrict from "./components/UserDestrict"

function Profilelayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <aside className="flex flex-col gap-y-4 mt-24 lg:mt-[181px] mb-56 w-full lg:max-w-[368px]">
                <section className="flex flex-col gap-y-6 lg:gap-y-8 overflow-hidden relative p-4 lg:p-8 rounded-2xl bg-white border-custom">
                    <Image src="/icons/bg-Vector-profile.svg" className="absolute -top-[14px] lg:top-0 right-0" alt="پس زمینه" width={311} height={315} />
                    <div className="flex justify-between items-center pl-1.5 z-[1]">
                        <div className="flex gap-2 flex-col">
                            <span className="text-xl text-primary">مهرآسا حاتمی</span>
                            <span className="text-text-gray">09123456789</span>
                        </div>
                        <Image src="/icons/edit.svg" alt="ویرایش" className="cursor-pointer" width={20} height={20} />
                    </div>
                    <div className="flex justify-between items-center pl-1.5">
                        <div className="flex flex-col gap-y-2">
                            <span className="text-primary">کیف پول</span>
                            <span className="text-text-gray flex gap-x-2 items-center lg:text-xl">۲۳۴٬۹۴۸<Image src="./icons/tooman-2.svg" alt="تومان" className="lg:w-[27px] lg:h-[18px]" width={19} height={12} /></span>
                        </div>
                        <Image src="/icons/add.svg" alt="اضافه کردن" className="cursor-pointer bg-[#b1cdc0] rounded-[7px]" width={20} height={20} />
                    </div>
                </section>
                <UserDestrict />
            </aside>
            <main>
                <div></div>
            </main>
        </>
    )
}

export default Profilelayout