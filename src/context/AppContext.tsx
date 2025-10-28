import { createContext, Dispatch, SetStateAction } from "react";

type ICreateContext = {
    cart: { id: number }[],
    setCart: Dispatch<SetStateAction<{ id: number }[]>>,

    filterItem: {
        isCheck: boolean,
        maxPrice: number,
        hiPrice: number,
        lowPrice: number,
        categories: number[]
    },
    setFilterItem: Dispatch<SetStateAction<{
        isCheck: boolean,
        maxPrice: number,
        hiPrice: number,
        lowPrice: number,
        categories: number[]
    }>>
}
export const AppContext = createContext({} as ICreateContext);