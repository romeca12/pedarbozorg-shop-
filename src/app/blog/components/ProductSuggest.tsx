function ProductSuggest() {
    return (
        <div className="flex items-center gap-x-2 p-2 rounded-2xl border-custom bg-white">
            <img src="/images/image-popular-product.svg" alt="محصول" className="w-16 h-16" />
            <h4 className="text-primary text-sm pl-[13px]">آرد نخودچی</h4>
            <div className="h-[60px] w-24 flex flex-col items-center justify-evenly">
                <span className="text-primary">۲٬۰۹۸٬۰۰۰</span>
                <div className="flex justify-between items-center gap-x-2">
                    <span className="text-[10px] bg-[#C62020] rounded-2xl text-white py-1 px-2">۶۸٪</span>
                    <span className="text-xs text-[#ADADAD] line-through">۱۹٬۳۸۳٬۰۰۰</span>
                </div>
            </div>
        </div>
    )
}

export default ProductSuggest