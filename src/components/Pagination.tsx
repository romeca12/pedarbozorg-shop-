const Pagination = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-2 h-10 text-primary text-sm md:text-base cursor-pointer">
                <img src="./images/arrow-right-slider.svg" alt="جهت راست" className="w-5 h-5 mx-1.5" />
                <span className="active-text bg-primary text-white px-3 h-full flex justify-center items-center rounded-lg hover:bg-[#336D51] md:px-4">۱</span>
                <span className="px-3 h-full flex justify-center items-center md:px-4">۲</span>
                <span className="px-3 h-full flex justify-center items-center md:px-4">۳</span>
                <span className="text-base">...</span>
                <span className="px-3 h-full flex justify-center items-center md:px-4">۷۸</span>
                <img src="./images/arrow-left-slider.svg" alt="جهت چپ" className="w-5 h-5 mx-1.5" />
            </div>
        </>
    )
}

export default Pagination