import TopPageBackground from "@/components/TopPageBackground";
import { Metadata } from "next";
import Pagination from "@/components/Pagination";
import Category from "./components/Category";


export const metadata: Metadata = {
    title: "مجله",
}

function blog() {
    return (
        <>
            <TopPageBackground name="مجله" />
            <main>
                <div className="flex flex-col gap-y-2">
                    <div className="search relative border-custom rounded-2xl bg-white lg:flex-1">
                        <input type="text" placeholder="جستجو.." className="h-10 pr-[11px] w-full pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
                        <img src="./images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
                    </div>
                    <Category />
                </div>
                <div className="card">
                    {Array(16).fill(1).map((_, index) =>
                        <div>
                            post
                        </div>
                    )}
                </div>
                <Pagination />
            </main>
        </>
    )
}

export default blog;