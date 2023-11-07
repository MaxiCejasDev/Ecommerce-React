import { useState } from "react"
import { CartWidget } from "../CartWidget/CartWidget"
import { NavCategory } from "../NavCategory/NavCategory"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownMenu = (event)=>{
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <div className="bg-darkpure h-[60px] w-full flex items-center justify-around border-b-[1px] border-white">
        <div className="overflow-hidden h-[80px] flex items-center">
          <li className="text-white list-none">
            <NavLink to={'./'} activeclassname='currentCategory'><img className="h-[116px]" src="https://drive.google.com/uc?export=download&id=13CH_TGZzP7Fw_MLvOWzMgSRjrO-6QndO" alt="" /></NavLink>
            </li>
        </div>
        <div className="grow flex items-center">
          <li className="text-white font-bold px-[20px] text-[14px] list-none">
            <NavLink to={'/nosotros'} activeclassname="currentCategory">Nosotros</NavLink>
          </li>
          <div className="">
              <a onClick={dropdownMenu} className="text-white font-bold px-[20px] text-[14px] flex items-center overflow-hidden" href="./">Categorias <img className={isOpen?"h-[20px] mt-1 rotate-90 duration-300":"h-[20px] mt-1 duration-300"} src="https://drive.google.com/uc?export=download&id=1rTVL0QwNxUGQ1S_ErjOOAHOu2poWVUdM" alt="" /></a>
              {isOpen && <NavCategory/>}
          </div>
          <li className="text-white font-bold px-[20px] text-[14px] list-none" href="./">
            <NavLink to={'./comentarios'} activeclassname="currentCategory">Comentarios</NavLink>
          </li>
        </div>
        <CartWidget/>
      </div> 
    </>
  )
}
