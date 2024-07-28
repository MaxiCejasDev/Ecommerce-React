import { useState } from "react"
import { Link } from "react-router-dom"


export const ItemCounter = ({productStock,handleAddBag,purchase}) => {
    const [counter, setCounter] = useState(1)
    const onAdd = ()=>{
        setCounter(counter + 1)
    }
    const onSubstract = ()=>{
        setCounter(counter - 1 )
    }
    
  

  return (
    <div className="flex justify-center items-center flex-col">
       
        <div className="flex">
        
            <button className="button-counter h-[30px] w-[30px] font-poppins shadow-lg shadow-neutral-300 border-[1px] border-neutral-300 bg-neutral-900 rounded-sm text-white mr-2" disabled={counter <= 1 || purchase} onClick={onSubstract}>-</button>
            <p className="font-bold text-lg">{counter}</p>
            <button className="button-counter h-[30px] w-[30px] font-poppins shadow-lg shadow-neutral-300 border-[1px] border-neutral-300 bg-neutral-900 rounded-sm text-white ml-2" disabled={counter >= productStock || purchase} onClick={onAdd}>+</button>
        </div>
        <p className=""><span className="font-poppins font-bold text-neutral-800">Stock:</span>{productStock}</p>
        {purchase?(<Link to={'/bag'} className="font-semibold flex justify-center items-cemter rounded-[12px] items-center bg-green-800 w-[80%] sm:w-[300px] h-[60px] text-white shadow-md shadow-neutral-400 text-[12px] text-base">Ver productos en bolsa
        
        </Link>):
        (<button onClick={()=>handleAddBag(counter)} className="font-semibold flex justify-center rounded-[12px] mt-2 hover:bg-white hover:text-black hover:border-[1px] hover:border-black button-hover  items-center bg-black w-[80%] text-white shadow-md shadow-neutral-400 sm:w-[300px] h-[60px] text-base">
            Agregar Producto
        
        </button> )}
        
        
    </div>
  )
}
 