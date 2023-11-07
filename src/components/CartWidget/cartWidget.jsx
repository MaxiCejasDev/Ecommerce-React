
import { NavLink } from "react-router-dom"
import { Bag } from "../Bag/Bag"
import { useState } from "react"

export const CartWidget = () => {
  const [bagOpen, setBagOpen] = useState(false)
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
          {bagOpen?(<Bag/>):''}
          </a>
        </div>
    </div>
  )
}
