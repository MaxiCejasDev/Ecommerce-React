import React, { useContext, useEffect, useState } from "react"


const BagContext = React.createContext([])
export const useBag = ()=>{
    return useContext(BagContext)
}



export const BagProvider = ({children})=>{
    const [bag, setBag] = useState([])
    const [bagAmount,setBagAmount] = useState(0)

    const addToBag = (product)=> {
        setBag([...bag, product])

        
    }
    useEffect(()=>{


        const productAmount = bag.reduce((acc,item)=>{
                return acc + item.cantidad
            },0)
        setBagAmount(productAmount)
        
    }
    
    ,[bag])
    
    const deleteBag = ()=>{
        setBag([])
    }
    console.log(bagAmount)
    return (
        <BagContext.Provider value={{bag,addToBag,deleteBag,bagAmount}}>
            {children}
        </BagContext.Provider>
    )

}