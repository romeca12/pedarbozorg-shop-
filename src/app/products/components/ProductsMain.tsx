"use client"

import CardGlobal from "@/components/CardGlobal";
import Pagination from "@/components/Pagination";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductsLoading from "./ProductsLoading";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { AppContext } from "@/context/AppContext";

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
    categories: { "id": 1, "title": "روغن" }[],
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

    // console.log("hello world")

    useEffect(() => {
        setFilterItem((prev) => ({ ...prev, maxPrice: products?.max_price || 10195200 }))
    }, [products?.max_price])

    useEffect(() => {
        const path = `?page=${handleRouter}${filterItem.isCheck ? "&available=true" : ""}`;
        router.push(path)
    }, [handleRouter, filterItem.isCheck, filterItem.hiPrice, filterItem.lowPrice])

    useEffect(() => {
        setLoading(true)
        axios.get(`http://5.144.132.115:8003/store-api/products-public/?page=${handleRouter}${filterItem.isCheck ? `&available=true` : ""}`)
            .then(response => setProducts(response.data))
            .catch(() => toast.error("خطا در دریافت اطلاعات"))
            .finally(() => setLoading(false))
    }, [handleRouter, filterItem.isCheck, filterItem.hiPrice, filterItem.lowPrice])


    // useEffect(() => {
    //     axios.get(`http://5.144.132.115:8003/store-api/categories/`)
    //         .then(response => setCategory(response.data));
    // }, [])

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