"use client"

import Image from "next/image"
import { useState } from "react"
import CardOrder from "../components/CardOrder";
import ProfileTopPages from "../components/ProfileTopPages";

function Orders() {

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['جاری', 'تحویل داده شده', 'لغو شده'];

  return (
    <div className="px-2 py-4 sm:px-4 lg:p-8 bg-white rounded-2xl border-custom">
      
      <ProfileTopPages title="لیست سفارش ها" />

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
              <span className="text-primary leading-[140%] cursor-pointer">جاری</span>
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
              <span className="text-primary leading-[140%] cursor-pointer">تحویل داده شده</span>
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
              <span className="text-primary leading-[140%] cursor-pointer">لغو شده</span>
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

      <div className={`current ${activeTab === 0 ? "block" : "hidden"}`}>
        {Array(1).fill(1).map((_, index) =>
          <CardOrder key={index} status="در صف بررسی" />
        )}
        {Array(1).fill(1).map((_, index) =>
          <CardOrder key={index} status="در حال پردازش" />
        )}
        {Array(1).fill(1).map((_, index) =>
          <CardOrder key={index} status="ارسال شده" />
        )}
      </div>

      <div className={`delivered ${activeTab === 1 ? "block" : "hidden"}`}>
        {Array(2).fill(1).map((_, index) =>
          <CardOrder key={index} status="ارسال شده" />
        )}
      </div>

      <div className={`canceled ${activeTab === 2 ? "block" : "hidden"}`}>
        {Array(2).fill(1).map((_, index) =>
          <CardOrder key={index} status="لغو شده" />
        )}
      </div>

    </div>
  )
}

export default Orders