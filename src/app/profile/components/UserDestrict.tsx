"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function UserDestrict() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <section className="bg-white flex flex-col gap-y-2 lg:gap-y-4 p-4 lg:p-8 rounded-2xl border-custom">
      <Link href="/profile" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile" ?
            <Image src="/icons/home-2.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/home-3.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="پس زمینه" width={32} height={32} />
          }

        </span>
        <span className="text-primary text-sm lg:text-xl">حساب من در یک نگاه</span>
      </Link>
      <Link href="/profile/orders" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile/orders" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile/orders" ?
            <Image src="/icons/box-1.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/box.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
          }
        </span>
        <span className="text-primary text-sm lg:text-xl">سفارش‌ها</span>
      </Link>
      <Link href="/profile/favorite" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile/favorite" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile/favorite" ?
            <Image src="/icons/shoping-heart-fill.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/heart.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
          }
        </span>
        <span className="text-primary text-sm lg:text-xl">لیست علاقه‌مندی من</span>
      </Link>
      <Link href="/profile/adresses" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile/adresses" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile/adresses" ?
            <Image src="/icons/location-1.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/location.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
          }
        </span>
        <span className="text-primary text-sm lg:text-xl">آدرس‌ها</span>
      </Link>
      <Link href="/profile/notification" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile/notification" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile/notification" ?
            <Image src="/icons/sms-active.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/sms.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
          }
        </span>
        <span className="text-primary text-sm lg:text-xl">پیغام‌ها</span>
      </Link>
      <Link href="/profile/comments" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile/comments" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile/comments" ?
            <Image src="/icons/message-text-active.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/message-text.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
          }
        </span>
        <span className="text-primary text-sm lg:text-xl">نظرات</span>
      </Link>
      <Link href="/profile/personal-info" className="pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {pathname === "/profile/personal-info" ?
            <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" /> :
            null}
          {pathname === "/profile/personal-info" ?
            <Image src="/icons/user-square-active.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} /> :
            <Image src="/icons/user-square.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
          }
        </span>
        <span className="text-primary text-sm lg:text-xl">مشخصات حساب کاربری</span>
      </Link>
      <div className="cursor-pointer pr-3 lg:pr-0 flex gap-x-2 items-center">
        <span className="relative w-8 h-8 lg:w-10 lg:h-10 cursor-pointer">
          {false && <img src="/icons/bg-destrict-icon.svg" className="absolute top-0 right-0 h-full w-full" alt="پس زمینه" />}
          <Image src="/icons/logout.svg" className="p-1.5 relative z-[1] lg:p-2 lg:w-10 lg:h-10" alt="ناحیه کاربری" width={32} height={32} />
        </span>
        <span className="text-red-one text-sm lg:text-xl">خروج از حساب</span>
      </div>
    </section>
  )
}

export default UserDestrict