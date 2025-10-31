import { TTabSort } from "@/components/layout/Layout";
import { createContext, Dispatch, SetStateAction } from "react";

type ICreateContext = {
    cart: { id: number }[],
    setCart: Dispatch<SetStateAction<{ id: number }[]>>,

    filterItem: {
        isCheck: boolean,
        maxPrice: number,
        hiPrice: number,
        lowPrice: number,
        categories: number[],
        sort: string
    },
    setFilterItem: Dispatch<SetStateAction<{
        isCheck: boolean,
        maxPrice: number,
        hiPrice: number,
        lowPrice: number,
        categories: number[],
        sort: string
    }>>
}
export const AppContext = createContext({} as ICreateContext);