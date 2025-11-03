"use client"

import Image from "next/image"
import { useState } from "react"
import Sort from "./Sort";
import Pagination from "@/components/Pagination";
import CommentSingleProduct from "./CommentSingleProduct";
import Buy from "./Buy";
import BoxAsideTwo from "./BoxAsideTwo";

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["معرفی", "مشخصات", "فواید", "نظرات کاربران"];
    const sortItems = ["جدیدترین", "مفیدترین"];

    const scrollToSection = (index: number) => {
        const sectionId = `section-${index + 1}`;
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className="mt-[60px] flex flex-col items-center mb-12">
            <div className="w-full sticky top-16 lg:top-[117px] right-0 self-start bg-secondary ">
                <div className="max-w-[493px] pt-2 xl:pt-6 flex justify-between mb-2 xl:mb-6 text-text-gray-two">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer ${activeTab === index ? "text-primary" : ""}`}
                            onClick={() => { setActiveTab(index), scrollToSection(index) }}>{tab}</div>
                    ))}
                </div>
                <div className="bg-[#e3e3e3] h-0.5 relative max-w-[493px]">
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

            <div id="section-4" className="product-detail-section pt-4 w-full md:pb-4 flex flex-col lg:flex-row-reverse lg:items-start gap-4">
                <BoxAsideTwo />
                <div className="flex-1">
                    <h3 className="text-primary text-xl mb-4">نظرات کاربران</h3>
                    <div className="flex justify-between items-center mb-4">
                        {/* <Sort sortItems={sortItems} activeItem={0} /> */}
                        <span className="text-text-gray pl-3">۱۴ نظر</span>
                    </div>
                    <div className="flex flex-col border-b-type-two mb-4">
                        {Array(5).fill(1).map((_, index) =>
                            <div key={index} className="border-t py-4">
                                <div className="mb-2 flex gap-6 items-center">
                                    <span className="flex rounded-[23px] items-center bg-green-600 gap-x-2 text-white py-0.5 px-2 leading-[140%]">
                                        ۴
                                        <img src="/icons/star.svg" alt="ستاره" className="w-4 h-4" />
                                    </span>
                                    <span className="text-text-gray-two text-sm">۲۳ مهر ۱۴۰۴</span>
                                    <span className="text-text-gray-two text-sm">پروین مظفری</span>
                                </div>
                                <p className="border-t-and-b py-2 text-black text-justify leading-[180%]">اهل طراحان موجود امید شرایط و سطر از علی الخصوص  شرایط شناخت با، که، متنوع سخت که بهبود متن موجود ساختگی کتابهای طراحی جوابگوی که، و سطر گرافیک داشت لورم راهکارها متخصصان اصلی اهل از ابزارهای کاربردی کرد علی الخصوص  و فرهنگ پیشرو در نامفهوم، ارائه ایپسوم</p>
                                <div className="flex justify-between items-center p-1.5 mt-2">
                                    <img src="/icons/flag.svg" alt="پرچم" className="w-5 h-5" />
                                    <div className="flex justify-between gap-x-2">
                                        <span className="flex items-center text-text-gray gap-x-1.5">
                                            ۱
                                            <img src="/icons/dislike.svg" alt="دیسلایک" className="w-5 h-5" />
                                        </span>
                                        <span className="flex items-center text-text-gray gap-x-1.5">
                                            ۲۳۴
                                            <img src="/icons/like.svg" alt="لایک" className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* <Pagination /> */}
                </div>
            </div>
        </div>
    )
}

export default Tabs