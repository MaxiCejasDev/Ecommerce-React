import { useState } from "react"

export const ItemCounter = ({handleAddBag}) => {
    const [counter, setCounter] = useState(1)
    const stock = 5
    const onAdd = ()=>{
        setCounter(counter + 1)
    }
    const onSubstract = ()=>{
        setCounter(counter - 1 )
    }
  return (
    <div>
        <div className="flex">
            <button className="py-[2px] px-[10px] font-bold bg-darklight text-white" disabled={counter <= 1} onClick={onSubstract}>-</button>
            <p className="font-bold">{counter}</p>
            <button className="py-[2px] px-[10px] font-bold bg-darklight text-white" disabled={counter >= stock} onClick={onAdd}>+</button>
        </div>
        <button onClick={()=>handleAddBag(counter)} className="font-bold text-lg bg-darkpure px-[30px] py-[10px] text-white">Agregar Producto</button> 
        
    </div>
  )
}
