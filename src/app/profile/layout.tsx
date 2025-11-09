"use client"

import Image from "next/image"
import UserDestrict from "./components/UserDestrict"
import Logout from "./components/Logout"
import Link from "next/link"
import { useState } from "react"
import IncreaseWallet from "./components/IncreaseWallet"
import { usePathname } from "next/navigation"


function Profilelayout({ children }: { children: React.ReactNode }) {

    const [popUpLogout, setPopUpLogout] = useState(false);
    const [popUpWallet, setPopUpWallet] = useState(false);
    const pathname = usePathname();
    const profile = ['/profile'].includes(pathname);

    return (
        <div className="lg:flex gap-4 mb-56 md:mb-32">
            {profile && < aside className="flex flex-col gap-y-4 w-full lg:max-w-[368px]">
                <section className="flex flex-col gap-y-6 lg:gap-y-8 overflow-hidden relative p-4 lg:p-8 rounded-2xl bg-white border-custom">
                    <Image src="/icons/bg-Vector-profile.svg" className="absolute -top-[14px] lg:top-0 right-0" alt="پس زمینه" width={311} height={315} />
                    <div className="flex justify-between items-center pl-1.5 z-[1]">
                        <div className="flex gap-2 flex-col">
                            <span className="text-xl text-primary">مهرآسا حاتمی</span>
                            <span className="text-text-gray">09123456789</span>
                        </div>
                        <Link href="/profile/personal-info">
                            <Image src="/icons/edit.svg" alt="ویرایش" className="cursor-pointer" width={20} height={20} />
                        </Link>
                    </div>
                    <div className="flex justify-between items-center pl-1.5">
                        <div className="flex flex-col gap-y-2">
                            <span className="text-primary">کیف پول</span>
                            <span className="text-text-gray flex gap-x-2 items-center lg:text-xl">۲۳۴٬۹۴۸<Image src="./icons/tooman-2.svg" alt="تومان" className="lg:w-[27px] lg:h-[18px]" width={19} height={12} /></span>
                        </div>
                        <Image
                            src="/icons/add.svg"
                            alt="اضافه کردن"
                            className="cursor-pointer bg-[#b1cdc0] rounded-[7px]"
                            width={20} height={20}
                            onClick={() => setPopUpWallet(true)} />
                    </div>
                </section>
                <UserDestrict setPopUpLogout={setPopUpLogout} />
            </aside>}

            {!profile && < aside className="hidden lg:flex flex-col gap-y-4 w-full lg:max-w-[368px]">
                <section className="flex flex-col gap-y-6 lg:gap-y-8 overflow-hidden relative p-4 lg:p-8 rounded-2xl bg-white border-custom">
                    <Image src="/icons/bg-Vector-profile.svg" className="absolute -top-[14px] lg:top-0 right-0" alt="پس زمینه" width={311} height={315} />
                    <div className="flex justify-between items-center pl-1.5 z-[1]">
                        <div className="flex gap-2 flex-col">
                            <span className="text-xl text-primary">مهرآسا حاتمی</span>
                            <span className="text-text-gray">09123456789</span>
                        </div>
                        <Link href="/profile/personal-info">
                            <Image src="/icons/edit.svg" alt="ویرایش" className="cursor-pointer" width={20} height={20} />
                        </Link>
                    </div>
                    <div className="flex justify-between items-center pl-1.5">
                        <div className="flex flex-col gap-y-2">
                            <span className="text-primary">کیف پول</span>
                            <span className="text-text-gray flex gap-x-2 items-center lg:text-xl">۲۳۴٬۹۴۸<Image src="./icons/tooman-2.svg" alt="تومان" className="lg:w-[27px] lg:h-[18px]" width={19} height={12} /></span>
                        </div>
                        <Image
                            src="/icons/add.svg"
                            alt="اضافه کردن"
                            className="cursor-pointer bg-[#b1cdc0] rounded-[7px]"
                            width={20} height={20}
                            onClick={() => setPopUpWallet(true)} />
                    </div>
                </section>
                <UserDestrict setPopUpLogout={setPopUpLogout} />
            </aside>}
            <div className="mt-4 lg:mt-0 lg:flex-auto">
                <main>
                    {children}
                </main>
                <IncreaseWallet
                    setPopUpWallet={setPopUpWallet}
                    popUpWallet={popUpWallet}
                />
                <Logout
                    setPopUpLogout={setPopUpLogout}
                    popUpLogout={popUpLogout}
                />
            </div >
        </div >
    )
}

export default Profilelayout