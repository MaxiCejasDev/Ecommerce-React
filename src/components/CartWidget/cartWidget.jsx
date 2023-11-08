
import { NavLink } from "react-router-dom"
import { Bag } from "../Bag/Bag"
import { useState } from "react"
import { useBag } from "../../Context/BagProvider"


export const CartWidget = () => {
  const [bagOpen, setBagOpen] = useState(false)
  const {bagAmount} = useBag()
  const handleOpenBag = (e)=>{
    e.preventDefault()
    setBagOpen(!bagOpen)
  }

  return (
    <div className="flex items-center justify-center pr-5">
        <li className="text-white font-bold mr-5 text-[14px] list-none" href="">
        <NavLink to={'/frecuentes'} activeclassname='currentCategory'>Preguntas frecuentes</NavLink> 
        </li> 
        <div>
          <a href="./" className="relative" onClick={handleOpenBag}><img className="h-[24px]" src="https://drive.google.com/uc?export=download&id=19ZtDq-qHlfCDKQ8BN2epnpYmfYEpLU8h" alt="" />
          {bagOpen?<Bag/>:''}
          <p className="absolute bottom-4 left-4 bg-darklight border-[0.2px] border-white font-poppins text-white font-bold text-[0.6rem] w-[16px] h-[16px] text-center rounded-[50%]">{bagAmount}</p>
          </a>
        </div>
    </div>
  )
}

