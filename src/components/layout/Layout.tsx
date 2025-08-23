"use client"

import { AppContext } from "@/context/AppContext"
import { useState } from "react"
import Container from "../Container"

type ILayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    const [value, setValue] = useState<string>("result");
    return (
        <AppContext.Provider value={{ value }}>
            <Container>
                {children}
            </Container>
        </AppContext.Provider>
    )
}