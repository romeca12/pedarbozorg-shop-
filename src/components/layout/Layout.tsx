"use client"

import { AppContext } from "@/context/AppContext"
import { useState } from "react"
import Container from "../Container"
import { usePathname } from "next/navigation"
import Footer from "../Footer"

type ILayoutProps = {
    children: React.ReactNode
}
interface ICart {
    id: number,
    isAdded: boolean,
}

export default function Layout({ children }: ILayoutProps) {
    const [cart, setCart] = useState<ICart[]>([]);
    const pathname = usePathname();
    const hideFooter = ["/spin-luck-shop"].includes(pathname);
    return (
        <AppContext.Provider value={{ cart, setCart }}>
            <Container>
                {children}
            </Container>
            {!hideFooter && <Footer />}
        </AppContext.Provider>
    )
}