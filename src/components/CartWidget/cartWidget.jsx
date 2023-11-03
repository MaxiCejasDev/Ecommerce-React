
import { NavLink } from "react-router-dom"

export const CartWidget = () => {
  return (
    <div className="flex items-center justify-center pr-5">
        <li className="text-white font-bold mr-5 text-[14px] list-none" href="">
        <NavLink to={'/frecuentes'} activeclassname='currentCategory'>Preguntas frecuentes</NavLink> 
        </li> 
        <div>
          <a href="./"><img className="h-[24px]" src="https://drive.google.com/uc?export=download&id=19ZtDq-qHlfCDKQ8BN2epnpYmfYEpLU8h" alt="" /></a>

        </div>
    </div>
  )
}
