import TopPageBackground from "@/components/TopPageBackground";
import { Metadata } from "next";
import Pagination from "@/components/Pagination";
import CategoryAndSearch from "./components/CategoryAndSearch";
import BlogCart from "./components/BlogCart";


export const metadata: Metadata = {
    title: "مجله",
}

function blog() {
    return (
        <>
            <TopPageBackground name="مجله" />
            <main className="mb-60 md:mb-32">
                <CategoryAndSearch />
                <div className="overal-blogs gap-2 md:gap-4 mb-2 md:mb-4">
                    {Array(16).fill(1).map((_, index) =>
                        <BlogCart key={index} />
                    )}
                </div>
                <Pagination />
            </main>
        </>
    )
}

export default blog;