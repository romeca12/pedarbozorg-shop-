"use client"

import CardGlobal from "@/components/CardGlobal";
import Pagination from "@/components/Pagination";
import { useContext, useEffect, useState } from "react";
import ProductsLoading from "./ProductsLoading";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import api from "@/utils/API/axios-cofig";

type TProductsResponse = {
    count: number,
    max_price: number,
    next: string | null,
    previous: string | null,
    results: TypeProducts[]
}
export type TypeProducts = {
    id: number,
    name: string,
    slug: string,
    min_price: number,
    max_price: number,
    categories: { id: number, title: string }[],
    featured_image: string,
    is_in_cart: boolean,
    min_sell_price: number,
    avg_rate: null | number,
    cheapest_variant_id: number,
    advantages: { id: number; title: string }[],
    is_available: boolean
}

// type TCategoryResponse = {
//     count: number,
//     next: string | null,
//     previous: string | null,
//     results: TypeCategory[]
// }
// type TypeCategory = {
//     id: number,
//     title: string,
//     slug: string,
//     icon: null,
//     description: string,
//     status: string
// }
function ProductsMain() {

    const [products, setProducts] = useState<TProductsResponse | null>(null)
    // const [category, setCategory] = useState<TCategoryResponse | null>(null);
    const { filterItem, setFilterItem } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams()
    const currentPage = searchParams.get("page") || "1";

    const [handleRouter, setHandleRouter] = useState(+currentPage)
    const router = useRouter()

    const isMaxPricePath = (filterItem.hiPrice || 10195200) < (products?.max_price || 10195200)
    const isMinPricePath = filterItem.lowPrice > 0

    // const queryCategories = filterItem.categories.map(item => )
    // const queryCategories = if(filterItem.categories[0]){
    // queryCategories += `&catcategories${item.id}`;
    // }

    useEffect(() => {
        setFilterItem((prev) => ({ ...prev, maxPrice: products?.max_price || 10195200 }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products?.max_price])

    // useEffect(() => {

    // }, [handleRouter, filterItem])

    useEffect(() => {
        const path = `?page=${handleRouter}${filterItem.isCheck ? "&available=true" : ""}${isMaxPricePath ? `&max_price=${filterItem.hiPrice}` : ""}${isMinPricePath ? `&min_price=${filterItem.lowPrice}` : ""}${filterItem.categories[0] ? `&categories=${filterItem.categories.join(',')}` : ""}${filterItem.sort ? `&ordering=${filterItem.sort}` : ""}`;
        router.push(path)
        setLoading(true)
        api.get(`/store-api/products-public/?page=${handleRouter}${filterItem.isCheck ? `&available=true` : ""}${isMaxPricePath ? `&max_price=${filterItem.hiPrice}` : ""}${isMinPricePath ? `&min_price=${filterItem.lowPrice}` : ""}${`${filterItem.categories.map(id => `&categories=${id}`).join('')}` || ""}${filterItem.sort ? `&ordering=${filterItem.sort}` : ""}`)
            .then(response => setProducts(response.data))
            .catch(() => toast.error("خطا در دریافت اطلاعات"))
            .finally(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleRouter, filterItem])

    return (
        <>
            {loading ? <ProductsLoading /> : <ProductsList products={products?.results || []} />}

            <Pagination
                count={products?.count || 0}
                handleChangePage={setHandleRouter}
                currentPage={currentPage} />
        </>
    )
}

export default ProductsMain

function ProductsList({ products }: { products: TypeProducts[] }) {
    return (
        <div className="overal-products mb-4 lg:mb-8">
            {products.map((item: TypeProducts) =>
                <CardGlobal key={item.id} {...item} />
            )}
        </div>
    )
}