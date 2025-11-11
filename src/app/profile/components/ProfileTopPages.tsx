import Image from "next/image"
import Link from "next/link"

function ProfileTopPages({ title }: { title: string }) {
    return (
        <div className="flex gap-x-2">
            <Link href="/profile" className="lg:hidden">
                <Image src="/images/arrow-right.svg" alt="بازگشت" width={24} height={24} />
            </Link>
            <span className="text-primary">{title}</span>
        </div>
    )
}

export default ProfileTopPages