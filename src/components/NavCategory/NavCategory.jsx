import { useState } from "react"
import {AccesoryMenu} from "../AccesoryMenu/AccesoryMenu"
import { ScreenMenu } from "../ScreenMenu/ScreenMenu"
import { Link } from "react-router-dom"








export const NavCategory = () => {
    const [accesoryMenu, setAccesoryMenu] = useState(false)
    const [screenMenu, setScreenMenu] = useState(false)
    const handleScreenMenu = ()=>{
        setScreenMenu(!screenMenu)
        setAccesoryMenu(false)
    }
    const handleAccesoryMenu = ()=>{
        setAccesoryMenu(!accesoryMenu)
        setScreenMenu(false)
    }

  return (
    <div className="md:h-[220px] md:w-[300px] md:bg-darklight md:absolute md:top-[50px] md:block hidden">
        <div className="p-[40px]">
            <div className="py-3 w-full flex items-center">
                <Link to={'/allcategory'} className="flex">
                    <img className="h-[20px] w-[20px]" src="/icons/noteCategory.svg" alt="" />
                    <p className="text-white font-poppins text-sm ml-2">Todas las categorias</p>
                </Link>
                
            </div>
            <div onClick={handleScreenMenu} className="py-4 w-full flex items-center relative cursor-pointer">
                <div className="flex grow">
                    <img className="h-[20px] w-[20px]" src="/icons/plugCategory.svg" alt="" />
                    <p className="text-white font-poppins text-sm ml-2">Accesorios</p>
                </div>
                <img className={screenMenu?"h-[24px] w-[24px] absolute duration-[0.25s] right-0 rotate-0":"h-[24px] duration-[0.25s] w-[24px] absolute right-0 rotate-90"} src="/icons/arrowCategory.svg" alt="" />
                {screenMenu && <ScreenMenu/>}
            </div>
            <div onClick={handleAccesoryMenu} className="py-4 w-full flex items-center relative cursor-pointer">
                <div className="flex grow">
                    <img className="h-[20px] w-[20px]" src="/icons/screenCategory.svg" alt="" />
                    <p className="text-white font-poppins text-sm ml-2">Pantallas</p>
                </div>
                <img className={accesoryMenu?"h-[24px] w-[24px] absolute duration-[0.25s] right-0 rotate-0":"h-[24px] duration-[0.25s] w-[24px] absolute right-0 rotate-90"} src="/icons/arrowCategory.svg" alt="" />
                {accesoryMenu && <AccesoryMenu/>}
            </div>
        </div>
    </div>
  )
}

