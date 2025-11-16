import Image from "next/image"

function CardOrder({ status }: { status: string }) {
    return (
        <div className="mt-4 pt-2 pb-6 flex flex-col gap-y-4 profile-orders-card">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-4">
                    <span className={`text-primary ${status === "لغو شده" ? "text-red-one" : "text-primary"}`}>{status}</span>
                    {(() => {
                        switch (status) {
                            case "ارسال شده":
                                return (
                                    <span className="flex gap-x-2">
                                        <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                                        <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                                        <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                                    </span>
                                )
                            case "در حال پردازش":
                                return (
                                    <span className="flex gap-x-2">
                                        <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                                        <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                                        <Image src="/icons/Frame 1674.svg" alt="در صف بررسی" width={8} height={8} />
                                    </span>
                                )
                            case "در صف بررسی":
                                return (
                                    <span className="flex gap-x-2">
                                        <Image src="/icons/Frame 1675.svg" alt="در صف بررسی" width={8} height={8} />
                                        <Image src="/icons/Frame 1674.svg" alt="در صف بررسی" width={8} height={8} />
                                        <Image src="/icons/Frame 1674.svg" alt="در صف بررسی" width={8} height={8} />
                                    </span>
                                )
                            default:
                                return null;
                        }
                    })()}
                </div>
                <span className="text-sm text-text-gray-two">۱۴۱۰/۰۹/۰۸</span>
            </div>
            <div className="flex flex-wrap">
                <span className="ml-2 text-sm text-text-gray-two whitespace-nowrap">شماره سفارش</span>
                <span className="ml-4 text-gray-three">۲۳۹۴۷۸۲۹۳</span>
                <div>
                    <span className="ml-2 text-sm text-text-gray-two">مبلغ</span>
                    <span className="ml-2 text-gray-three">۳۴۵٬۰۰۰</span>
                    <Image src="/icons/tooman-1.svg" className="inline" alt="تومان" width={16} height={16} />
                </div>
            </div>
            <div className="flex justify-between">
                <Image src="/images/image-popular-product.svg" alt="محصول" width={80} height={80} />
                <span className="flex gap-x-2 items-center pt-0.5 px-3 self-end">
                    <span className="text-primary text-sm">جزئیات سفارش</span>
                    <Image src="/icons/arrow-left.svg" alt="چزئیات" width={20} height={20} />
                </span>
            </div>
        </div>
    )
}

export default CardOrder