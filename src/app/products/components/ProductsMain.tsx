"use client"

import CardGlobal from "@/components/CardGlobal"
import Pagination from "@/components/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsLoading from "./ProductsLoading";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

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

type IProductsResponse = {
    results: TypeProducts[];
    count: number;
    next: string | null;
    previous: string | null;
}
function ProductsMain() {
    const [products, setProducts] = useState<IProductsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = searchParams.get("page") || "1";

    useEffect(() => {
        const fetchProducts = () => {
            setLoading(true)
            axios.get(`http://5.144.132.115:8003/store-api/products-public/?page=${currentPage}`)
                .then(response => setProducts(response.data))
                .catch(() => toast.error("خطا در دریافت اطلاعات"))
                .finally(() => setLoading(false))
        }
        fetchProducts()
    }, [currentPage])

    const handleChangePage = (changePge: number) => {
        router.push(`?page=${changePge}`)
    }

    return (
        <>
            {loading ? <ProductsLoading /> : <ProductsList products={products?.results || []} />}
            <Pagination
                count={products?.count || 0}
                handleChangePage={handleChangePage}
                currentPage={currentPage}/>
        </>
    )
}

export default ProductsMain

function ProductsList({ products }: { products: TypeProducts[] }) {
    return (
        <div className="overal-products gap-2 md:gap-4 mb-4 lg:mb-8">
            {products.map((item: TypeProducts) =>
                <CardGlobal key={item.id} {...item} />
            )}
        </div>
    )
}