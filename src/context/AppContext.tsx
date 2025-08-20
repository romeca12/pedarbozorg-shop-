import { createContext } from "react";

type ICreateContext = {
    value: string;
}

export const AppContext = createContext({} as ICreateContext);