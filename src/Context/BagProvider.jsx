import React, { useContext, useEffect, useState } from "react"


const BagContext = React.createContext([])
export const useBag = ()=>{
    return useContext(BagContext)
}



export const BagProvider = ({children})=>{
    const [bag, setBag] = useState([])
    const [bagAmount,setBagAmount] = useState(0)

    const addToBag = (product)=> {
        
        const updateBagAmount = bag.map((item)=>{
            if(item.id === product.id){
                setBagAmount(bagAmount + product.amount)
                return{
                    ...item,
                    price: item.price += product.price * product.amount,
                    amount: item.amount += product.amount
                }
                
            }
            else{
                return item
            }

        })
        if(!updateBagAmount.some((item)=> item.id === product.id)){
            setBag([...bag, product])
        }

        

        
    }
    useEffect(()=>{
        

        const productAmount = bag.reduce((acc,item)=>{
                return acc + item.amount
            },0)
        setBagAmount(productAmount)
        
    }
    
    ,[bag])
    
    const deleteBag = (productId)=>{
        const productRefresh = bag.filter((item)=> item.id !== productId)
        setBag(productRefresh)
    }
    
    return (
        <BagContext.Provider value={{bag,addToBag,deleteBag,bagAmount,setBag}}>
            {children}
        </BagContext.Provider>
    )

}