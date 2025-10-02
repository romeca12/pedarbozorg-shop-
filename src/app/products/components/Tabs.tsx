"use client"

import Image from "next/image";
import { useState } from "react"

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["معرفی", "مشخصات", "فواید", "نظرات کاربران"];

    const scrollToSection = (index: number) => {
        const sectionId = `section-${index + 1}`;
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className="mt-[72px] flex flex-col items-center scroll-behavior-smooth">
            <div className="w-full sticky top-16 lg:top-[117px] right-0 bg-secondary">
                <div className="pt-2 flex justify-between mb-2 text-text-gray-two">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer ${activeTab === index ? "text-primary" : ""}`}
                            onClick={() => { setActiveTab(index), scrollToSection(index) }}>{tab}</div>
                    ))}
                </div>
                <div className="bg-[#e3e3e3] h-0.5 w-full relative">
                    <span
                        style={{ width: `${100 / tabs.length}%`, transform: `translateX(${activeTab * -100}%)` }}
                        className={`bg-primary transition-transform duration-300 rounded-lg h-full absolute top-0 right-0`}></span>
                </div>
            </div>

            <div id="section-1" className="product-detail-section border-b-w-2 pb-2 w-full pt-[27px]">
                <h3 className="text-primary text-2xl">معرفی</h3>
                <p className="text-lg text-black leading-[180%] mt-2 text-justify">جوابگوی آنچنان پیوسته بیشتری را سوالات از جوابگوی و نرم افزارها سادگی مورد نیاز شناخت و آینده داشت و طراحان فراوان فعلی اصلی است و دشواری متنوع و طراحان و مورد نیاز ابزارهای کاربردی سوالات و با اساسا ایجاد سخت مورد نیاز اصلی با هدف طراحان بیشتری را گذشته اهل کرد می طلبد شناخت متنوع می توان کتابهای و کاربردهای را دستاوردهای در دنیای چاپگرها حروفچینی و با کرد به پایان که، طراحی فراوان علی الخصوص  اهل فعلی شصت و سه درصد بهبود بهبود لازم و مجله در زبان فارسی  در که، تمام سادگی شرایط را فراوان طراحان طراحان خلاقی بیشتری را دنیای و و فرهنگ پیشرو و آینده سادگی سوالات طراحان خلاقی گذشته</p>
            </div>

            <div id="section-2" className="product-detail-section w-full border-b-w-2 pt-4 text-primary pb-2">
                <h3 className="text-primary mb-2 text-xl">مشخصات</h3>
                <dl>
                    <div className="flex gap-4 mb-4">
                        <dt className="text-text-gray-two">حالت فیزیکی:</dt>
                        <dd className="text-gray-three">جامد</dd>
                    </div>
                    <div className="flex gap-4">
                        <dt className="text-text-gray-two">حالت فیزیکی:</dt>
                        <dd className="text-gray-three">جامد</dd>
                    </div>
                </dl>
            </div>

            <div id="section-3" className="product-detail-section pt-4 w-full border-b-w-2 pb-2 md:pb-4">
                <h3 className="text-primary mb-2 md:mb-4 text-xl">فواید</h3>
                <div className="grid grid-cols-1 gap-y-4 md:gap-y-6 md:grid-cols-2 md:gap-x-8 lg:gap-x-[170px]">
                    {Array(8).fill(1).map((_, index) =>
                        <div key={index} className="flex gap-4 items-center">
                            <Image src="/icons/benefits.svg" alt="تیک" width={24} height={24} className="inline-block ml-2" />
                            <p key={index} className="text-sm text-gray-three leading-[180%] mt-2 text-justify">از ابزارهای کاربردی برای به پایان متخصصان شناخت ایجاد زیادی شناخت را</p>
                        </div>
                    )}
                </div>
            </div>

            <div id="section-4" className="product-detail-section pt-4 w-full pb-2 md:pb-4 flex flex-col items-center gap-4">
                <aside className="w-full">
                    <section className="border-custom flex flex-col items-center gap-y-4 py-[17px] px-4 bg-white rounded-2xl">
                        <span className="text-text-gray-two"><span className="text-xl text-primary ml-1">۴.۳</span>از ۵</span>
                        <div className="flex gap-x-4">
                            {
                                Array(5).fill(1).map((_, index) =>
                                    <Image key={index}
                                        src="/icons/outline-star.svg"
                                        alt={`ستاره ${index + 1}`}
                                        width={20} height={20}
                                        className="cursor-pointer" />
                                )
                            }
                        </div>
                        <span className="text-xs text-text-gray leading-[180%]">ازمجموع ۱۳ امتیاز</span>
                        <button className="text-primary border-type-three rounded-lg py-2 px-4 w-full">افزودن نظر</button>
                    </section>
                </aside>
                <div className="bg-blue-400">
                    <h3 className="text-primary">نظرات کاربران</h3>
                    <div className="flex flex-col gap-4">
                        {Array(5).fill(1).map((_, index) =>
                            <div key={index}></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs