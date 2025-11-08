import Image from "next/image"
import Link from "next/link"
import CardSliderProfile from "./components/CardSliderProfile"
import MessageSliderProfile from "./components/MessageSliderProfile"

function profile() {
  return (
    <div>

      <div className="p-4 lg:p-8 bg-white rounded-2xl border-custom">
        <div className="flex justify-between items-center">
          <span className="text-primary">لیست سفارش ها</span>
          <Link href="/" className="flex gap-x-2 py-1.5 px-3">
            <span className="text-sm text-primary">مشاهده همه</span>
            <Image src="/icons/arrow-left.svg" alt="سمت چپ" width={20} height={20} />
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:gap-y-0 items-center">
          <div className="flex gap-x-2 items-center w-fit">
            <span className="flex flex-col items-center gap-y-2">
              <Image src="/icons/box-time.svg" alt="جاری" width={64} height={64} />
              <span className="text-primary leading-[140%]">جاری</span>
            </span>
            <span className="relative">
              <Image src="/icons/vector12.svg" alt="پس زمینه" width={70} height={82} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl">8</span>
            </span>
          </div>
          <div className="flex gap-x-2 items-center w-fit">
            <span className="flex flex-col items-center gap-y-2">
              <Image src="/icons/box-tick.svg" alt="جاری" width={64} height={64} />
              <span className="text-primary leading-[140%]">ارسال شده</span>
            </span>
            <span className="relative">
              <Image src="/icons/vector12.svg" alt="پس زمینه" width={70} height={82} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl">8</span>
            </span>
          </div>
          <div className="flex gap-x-2 items-center w-fit">
            <span className="flex flex-col items-center gap-y-2">
              <Image src="/icons/box-remove.svg" alt="جاری" width={64} height={64} />
              <span className="text-primary leading-[140%]">لغو شده</span>
            </span>
            <span className="relative">
              <Image src="/icons/vector12.svg" alt="پس زمینه" width={70} height={82} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl">8</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-4 lg:p-8 rounded-2xl border-custom">
        <div className="flex justify-between items-center mb-6">
          <span className="text-primary text-base">آخرین پیغام‌ها</span>
          <Link href="/" className="flex gap-x-2 py-1.5 px-3">
            <span className="text-sm text-primary">مشاهده همه</span>
            <Image src="/icons/arrow-left.svg" alt="سمت چپ" width={20} height={20} />
          </Link>
        </div>

        <MessageSliderProfile navigationKey="1"/>

      </div>

      <div className="bg-white mt-4 py-4 lg:py-8 rounded-2xl border-custom">
        <div className="flex justify-between items-center px-4 lg:px-8 mb-6">
          <span className="text-primary">لیست علاقه مندی ها</span>
          <Link href="/" className="flex gap-x-2 py-1.5 px-3">
            <span className="text-sm text-primary">مشاهده همه</span>
            <Image src="/icons/arrow-left.svg" alt="سمت چپ" width={20} height={20} />
          </Link>
        </div>
        <CardSliderProfile navigationKey="2" />
      </div>

      <div className="bg-white mt-4 py-4 lg:py-8 rounded-2xl border-custom">
        <div className="text-primary mb-6 px-4 lg:px-8">آخرین بازدید ها</div>
        <CardSliderProfile navigationKey="3" />
      </div>

    </div>
  )
}

export default profile