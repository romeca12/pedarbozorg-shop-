import { createContext, Dispatch, SetStateAction } from "react";

type ICreateContext = {
    cart: { id: number }[],
    setCart: Dispatch<SetStateAction<{ id: number }[]>>,
    isChecked: boolean,
    setIsChecked: Dispatch<SetStateAction<boolean>>
}
export const AppContext = createContext({} as ICreateContext);