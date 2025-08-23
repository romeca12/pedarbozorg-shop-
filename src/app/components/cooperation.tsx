export default function Cooperation() { 
    return (
        <div className="mt-10 md:mt-20">
            <div className="font-extrabold flex items-center justify-center mb-4 md:mb-8 relative bg-blue">
                <img src="./images/flower-slider-right.svg" alt="گل1" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
                <h3 className="text-primary mx-4 text-base md:text-2xl font-black">همکاری های داخلی و خارجی پدربزرگ</h3>
                <img src="./images/flower-slider-left.svg" alt="گل2" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
            </div>
            <div className="flex justify-between lg:justify-around">
                <div>
                    <img src="./icons/Zoodel.svg" alt="" className="w-[90.7px] h-16 lg:w-[143px] lg:h-[120px]" />
                    <h4 className="text-center text-xl lg:text-3xl text-[#1F4231] mt-8 font-black">زودل</h4>
                </div>
                <div>
                    <img src="./icons/Austria.svg" alt="" className="w-[90.7px] h-16 lg:w-[143px] lg:h-[120px]" />
                    <h4 className="text-center text-xl lg:text-3xl text-[#1F4231] mt-8 font-black">اتریش</h4>
                </div>
                <div>
                    <img src="./icons/Switzerland.svg" alt="" className="w-[90.7px] h-16 lg:w-[143px] lg:h-[120px]" />
                    <h4 className="text-center text-xl lg:text-3xl text-[#1F4231] mt-8 font-black">سوئیس</h4>
                </div>
            </div>
        </div>
    )
}