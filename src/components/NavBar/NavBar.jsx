import { useState } from "react"
import { CartWidget } from "../CartWidget/CartWidget"
import { NavCategory } from "../NavCategory/NavCategory"
import { NavLink } from "react-router-dom"
import { NavBarMobile } from "../NavBarMobile/NavBarMobile"

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownMenu = (event)=>{
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <div className="bg-darkpure absolute z-10 md:static h-[60px] w-full flex items-center justify-between md:justify-aroundbag">
        <div className="md:overflow-hidden md:h-[80px] grow md:grow-0 md:flex md:items-center">
          <li className="text-white list-none">
            <img onClick={dropdownMenu} className="md:hidden relative h-[32px] w-[32px] ml-2" src="/nav-icon/menu.svg" alt="" />
            {isOpen && <NavBarMobile isOpen={isOpen} dropdownMenu={dropdownMenu}/>}
            <NavLink to={'./'} activeclassname='currentCategory'><img className="hidden md:h-[90px] md:w-[90px] md:block md:overflow-hidden" src="/logo.png" alt="Logo image" /></NavLink>
            </li>
        </div>
        <div className="md:hidden">
          <NavLink to={'./'} activeclassname='currentCategory'><img className="h-[90px] w-[90px] overflow-hidden" src="/logo.png" alt="Logo image" /></NavLink>
        </div>
        <div className="md:grow md:flex md:items-center">
          <div className="">
              <a onClick={dropdownMenu} className="md:text-neutral-200 hidden md:font-semibold md:font-poppins md:px-[20px] md:text-base md:flex md:items-center" href="./">Categorias <img className={isOpen?"md:h-[20px] md:rotate-90 md:duration-300 md:block hidden":"md:h-[20px] md:duration-300 md:block hidden"} src="/nav-icon/arrow.svg" alt="" /></a>
              {isOpen && <NavCategory/>}
          </div>
        </div>
        <CartWidget/>
      </div> 
    </>
  )
}
