function TopPageBackground({ name }: { name: string }) {
    return (
        <>
            <div className="inline-block">
                <img src="./images/spin-luck-shop-bg-left-flower.svg" alt="" className="absolute w-[60px] h-16 top-0 right-0 lg:w-[182px] lg:h-[192px] lg:-right-3" />
                <img src="./images/spin-luck-shop-bg-right-flower.svg" alt="" className="absolute w-[60px] h-16 top-0 left-0 lg:w-[182px] lg:h-[192px] lg:top-2" />
            </div>
            <div className="font-extrabold flex items-center justify-center mt-2 mb-14 md:mt-[73px]">
                <img src="./images/flower-slider-right.svg" alt="گل1" className="hidden md:block w-[81px] h-[76px]" />
                <h1 className="text-primary md:mx-4 text-base md:text-2xl font-black">{name}</h1>
                <img src="./images/flower-slider-left.svg" alt="گل2" className="hidden md:block w-[81px] h-[76px]" />
            </div>
        </>
    )
}

export default TopPageBackground