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
type TFilterItemProducts = {
    isCheck: boolean,
    maxPrice: number,
    hiPrice: number,
    lowPrice: number,
    categories: number[],
    sort: string
}
export type TTabSort = {
    id: number,
    text: string,
    category: string
}

export default function Layout({ children }: ILayoutProps) {

    const [cart, setCart] = useState<ICart[]>([]);
    const [filterItem, setFilterItem] = useState<TFilterItemProducts>({
        isCheck: false,
        maxPrice: 0,
        hiPrice: 0,
        lowPrice: 0,
        categories: [],
        sort: ""
    })
    const pathname = usePathname();
    const hideFooter = ["/spin-luck-shop"].includes(pathname);
    // const hideArrowUp = ["/products/5"].includes(pathname);


    return (
        <AppContext.Provider value={{ cart, setCart, filterItem, setFilterItem }}>
            <Header />
            <ArrowUp />
            <Container>
                {children}
            </Container>
            {!hideFooter && <Footer />}
        </AppContext.Provider>
    )
}