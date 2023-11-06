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
    


    return (
        <BagContext.Provider value={{bag,addToBag}}>
            {children}
        </BagContext.Provider>
    )

}