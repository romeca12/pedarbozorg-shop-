import { createContext, Dispatch, SetStateAction } from "react";

type ICreateContext = {
    cart: { id: number }[],
    setCart: Dispatch<SetStateAction<{ id: number }[]>>
}
export const AppContext = createContext({} as ICreateContext);