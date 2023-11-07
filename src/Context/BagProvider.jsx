import React, { useContext, useState } from "react"


const BagContext = React.createContext([])
export const useBag = ()=>{
    return useContext(BagContext)
}

export const BagProvider = ({children})=>{
    const [bag, setBag] = useState([])


    const addToBag = (product)=> {
        setBag([...bag, product])
    }

    const deleteBag = ()=>{
        setBag([])
    }


    return (
        <BagContext.Provider value={{bag,addToBag,deleteBag}}>
            {children}
        </BagContext.Provider>
    )

}