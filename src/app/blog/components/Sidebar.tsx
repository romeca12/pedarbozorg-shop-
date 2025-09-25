import Link from "next/link"
import ProductSuggest from "./ProductSuggest"

function Sidebar() {
    return (
        <aside className="hidden xl:flex  xl:flex-col xl:gap-y-4 xl:w-[272px] self-start sticky top-[122px] mt-6">
            <div>
                <h3 className="mb-4 text-center text-primary">محصولات پیشنهادی پدربزرگ</h3>
                <div className="flex flex-col gap-y-2 mb-2">
                    {Array(2).fill(1).map((_, index) =>
                        <ProductSuggest key={index} />
                    )}
                </div>
                <Link href="/products" className="flex justify-center">
                    <button className="text-white transition-colors duration-300 hover:bg-hover-btn bg-primary rounded-lg px-3 py-1.5">فروشگاه</button>
                </Link>
            </div>
            <img src="/images/Products Banner 2.svg" alt="بنر محصولات" className="w-full" />
        </aside>
    )
}

export default Sidebar