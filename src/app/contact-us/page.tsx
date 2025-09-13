import TopPageBackground from "@/components/TopPageBackground";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "تماس باما"
}

const countactUs = () => {
    return (
        <>
            <TopPageBackground />
            <div className="font-extrabold flex items-center justify-center mt-[8px] mb-14 md:mt-[73px]">
                <img src="./images/flower-slider-right.svg" alt="گل1" className="hidden md:block w-[81px] h-[76px]" />
                <h1 className="text-primary md:mx-4 text-base md:text-2xl font-black">تماس باما</h1>
                <img src="./images/flower-slider-left.svg" alt="گل2" className="hidden md:block w-[81px] h-[76px]" />
            </div>
            {/* <div className="mb-[1000px]"></div> */}
        </>
    )
}

export default countactUs;