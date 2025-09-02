import { createContext, Dispatch, SetStateAction } from "react";

type ICreateContext = {
    cart: { isAdded: boolean, id: number }[],
    setCart: Dispatch<SetStateAction<{ isAdded: boolean, id: number }[]>>
}
export const AppContext = createContext({} as ICreateContext);