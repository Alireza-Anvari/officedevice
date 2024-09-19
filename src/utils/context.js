import { createContext } from "react"

export const context=createContext({
    sectionRefs:[],
    modalHandler:()=>{},
    modal:false,
    setModal:()=>{},
    details:{}


})