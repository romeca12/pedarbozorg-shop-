"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function orders() {

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['جاری', 'تحویل شده', 'لغو شده'];

  return (
    <div className="px-2 py-4 sm:px-4 lg:p-8 bg-white rounded-2xl border-custom">

      <div className="flex gap-x-2">
        <Link href="/profile" className="lg:hidden">
          <Image src="/images/arrow-right.svg" alt="بازگشت" width={24} height={24} />
        </Link>
        <span className="text-primary">لیست سفارش ها</span>
      </div>

      <div className="mt-[17px]">
        <div className="lg:hidden text-text-gray-two flex justify-around">
          {tabs.map((item, index) =>
            <span
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer ${activeTab === index ? "text-primary" : ""} `}
              key={index}>
              {item}
            </span>
          )}
        </div>

        <div className="hidden lg:flex mt-[17px] flex-wrap justify-center gap-6 sm:justify-between sm:gap-0 items-center">
          <div className="flex gap-x-2 items-center sm:w-fit" onClick={() => setActiveTab(0)}>
            <span className="flex flex-col items-center gap-y-2">
              <Image src="/icons/box-time.svg" alt="جاری" width={64} height={64} />
              <span className="text-primary leading-[140%]">جاری</span>
            </span>
            <span className="relative">
              {activeTab === 0 ?
                <Image src="/icons/Vector1676.svg" alt="پس زمینه" width={70} height={82} />
                : <Image src="/icons/vector12.svg" alt="پس زمینه" width={70} height={82} />
              }
              <span className={`${activeTab === 0 ? "text-white" : "text-primary"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl`}>8</span>
            </span>
          </div>

          <div className="flex gap-x-2 items-center sm:w-fit" onClick={() => setActiveTab(1)}>
            <span className="flex flex-col items-center gap-y-2">
              <Image src="/icons/box-tick.svg" alt="جاری" width={64} height={64} />
              <span className="text-primary leading-[140%]">ارسال شده</span>
            </span>
            <span className="relative">
              {activeTab === 1 ?
                <Image src="/icons/Vector1676.svg" alt="پس زمینه" width={70} height={82} />
                : <Image src="/icons/vector12.svg" alt="پس زمینه" width={70} height={82} />
              }
              <span className={`${activeTab === 1 ? "text-white" : "text-primary"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl`}>8</span>
            </span>
          </div>

          <div className="flex gap-x-2 items-center sm:w-fit" onClick={() => setActiveTab(2)}>
            <span className="flex flex-col items-center gap-y-2">
              <Image src="/icons/box-remove.svg" alt="جاری" width={64} height={64} />
              <span className="text-primary leading-[140%]">لغو شده</span>
            </span>
            <span className="relative">
              {activeTab === 2 ?
                <Image src="/icons/Vector1676.svg" alt="پس زمینه" width={70} height={82} />
                : <Image src="/icons/vector12.svg" alt="پس زمینه" width={70} height={82} />
              }
              <span className={`${activeTab === 2 ? "text-white" : "text-primary"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl`}>8</span>
            </span>
          </div>
        </div>

        <div className="mt-2 lg:mt-4 h-0.5 bg-white-light relative">
          <span
            style={{ transform: `translateX(${activeTab * -100}%)` }}
            className="h-0.5 bg-primary w-1/3 absolute duretion-300-ms"
          ></span>
        </div>
      </div>


      <div className="mt-4">


        <div className="bg-sky-100 pt-2 pb-6 flex flex-col gap-y-4 border-b">

          <div className="flex justify-between items-center">
            <div className="flex gap-x-4">
              <span className="text-primary">در سف بررسی</span>
              <span className="flex gap-x-2">
                <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                <Image src="/icons/Frame 1674.svg" alt="در صف بررسی" width={8} height={8} />
                <Image src="/icons/Frame 1674.svg" alt="در صف بررسی" width={8} height={8} />
              </span>
            </div>
            <span className="text-sm text-text-gray-two">۱۴۱۰/۰۹/۰۸</span>
          </div>
          <div className="flex flex-wrap">
            <span className="ml-2 text-sm text-text-gray-two whitespace-nowrap mb-3 sm:mb-0">شماره سفارش</span>
            <span className="ml-4 text-gray-three">۲۳۹۴۷۸۲۹۳</span>
            <div>
              <span className="ml-2 text-sm text-text-gray-two">مبلغ</span>
              <span className="ml-2 text-gray-three">۳۴۵٬۰۰۰</span>
              <Image src="/icons/tooman-1.svg" className="inline" alt="تومان" width={16} height={16} />
            </div>
          </div>
          <div className="flex justify-between">
            <Image src="/images/image-popular-product.svg" alt="محصول" width={80} height={80} />
            <span className="flex gap-x-2 items-center pt-0.5 px-3 self-end bg-red-500">
              <span className="text-primary text-sm">چزئیات سفارش</span>
              <Image src="/icons/arrow-left.svg" alt="چزئیات" width={20} height={20} />
            </span>
          </div>
        </div>





        <div></div>
        <div></div>
      </div>

    </div>
  )
}

export default orders