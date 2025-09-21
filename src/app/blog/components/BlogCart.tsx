const BlogCart = () => {
    return (
        <div className="flex gap-x-2 bg-blue-300 p-2 w-[380px]">
            <img src="./images/image 15.svg" alt="عکس مقاله" className="w-[80px] rounded-xl" />
            <div>
                <div>
                    <a href="#">از روغن ماساژ در پخت و پز استفاده نکنید</a>
                    <p className="hidden"></p>
                </div>
                <div className="flex justify-between">
                    <span>پیشگیری و درمان</span>
                    <div className="flex">
                        <span className="flex">
                            '۳<img src="./icons/clock.svg" alt="" />
                        </span>
                        <span className="flex">
                            ۱۴۰۶/۰۹/۰۳<img src="./icons/calendar-2.svg" alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCart