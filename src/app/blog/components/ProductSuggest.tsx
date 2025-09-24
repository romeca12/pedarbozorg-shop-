function ProductSuggest() {
    return (
        <div className="flex items-center gap-x-2 p-2 rounded-2xl border-custom bg-white">
            <img src="/images/image-popular-product.svg" alt="محصول" className="w-16 h-16"/>
            <h4 className="text-primary text-sm">آرد نخودچی</h4>
            <div>
                <span>۲٬۰۹۸٬۰۰۰</span>
                <div>
                    <span>۱۹٬۳۸۳٬۰۰۰</span>
                    <span>۶۸٪</span>
                </div>
            </div>
        </div>
    )
}

export default ProductSuggest