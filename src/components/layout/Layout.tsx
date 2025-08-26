"use client"

import { AppContext } from "@/context/AppContext"
import { useState } from "react"
import Container from "../Container"
import { usePathname } from "next/navigation"
import Footer from "../Footer"

type ILayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    const pathname = usePathname();
    const hideFooter = ["/spin-luck-shop"].includes(pathname);
    const [value, setValue] = useState<string>("result");
    return (
        <AppContext.Provider value={{ value }}>
            <Container>
                {children}
            </Container>
            {!hideFooter && <Footer />}
        </AppContext.Provider>
    )
}