"use client"
import Image from "next/image"
import toast from "react-hot-toast";

function ShareLink() {
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("لینک کپی شد");
    }
    
    return (
        <>
            <Image src="/icons/share.svg" alt="اشتراک گذاری" onClick={copyLink} width="40" height="40" className="cursor-pointer p-2" />
        </>
    )
}

export default ShareLink