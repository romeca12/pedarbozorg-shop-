"use client"

import { AppContext } from "@/context/AppContext"
import { useState } from "react"
import Container from "../Container"
import { usePathname } from "next/navigation"
import Footer from "../Footer"
import Header from "../Header"
import ArrowUp from "../ArrowUp"


type ILayoutProps = {
    children: React.ReactNode;
}
type ICart = {
    id: number;
}

export default function Layout({ children }: ILayoutProps) {

    const [cart, setCart] = useState<ICart[]>([]);
    const pathname = usePathname();
    const hideFooter = ["/spin-luck-shop"].includes(pathname);
    const hideArrowUp = ["/products/5"].includes(pathname);
    return (
        <AppContext.Provider value={{ cart, setCart }}>
            <Header />
            {!hideArrowUp && <ArrowUp />}
            <Container>
                {children}
            </Container>
            {!hideFooter && <Footer />}
        </AppContext.Provider>
    )
}