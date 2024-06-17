import { useState } from "react";
import { Link } from "react-router-dom";
import { ScreenMenuMobile } from "../ScreenMenuMobile/ScreenMenuMobile";
import { AccesoryMenuMobile } from "../AccesoryMenuMobile/AccesoryMenuMobile";

export const NavCategoryMobile = () => {
  const [screenMobileMenu,setScreenMobileMenu] = useState(false)
  const [accesoryMobileMenu,setAccesoryMobileMenu] = useState(false)
  const handleScreenMobileMenu = ()=>{
    setScreenMobileMenu(!screenMobileMenu)
    setAccesoryMobileMenu(false)
  }
  const handleAccesoryMobileMenu = ()=>{
    setAccesoryMobileMenu(!accesoryMobileMenu)
    setScreenMobileMenu(false)
  }

  return (
    <div className="h-[40%] border-l-[1px] ml-2 border-black grid grid-rows-3">
      <div className="flex justify-start items-center pl-2">
        <img
          className="h-[20px] w-[20px] black-img"
          src="/icons/noteCategory.svg"
          alt=""
        />
        <Link to={'/allcategory'} className="ml-2">
          Todas las categorias
        </Link>
      </div>
      <div onClick={handleAccesoryMobileMenu} className={accesoryMobileMenu?"flex justify-start items-center relative pl-2 0 w-[150px]":"flex justify-start items-center relative pl-2 w-[150px]"}>
        <img
          className="h-[20px] w-[20px] black-img"
          src="/icons/plugCategory.svg"
          alt=""
        />
        <a className="ml-2">
          Accesorios
        </a>
        <img
          className={accesoryMobileMenu?"black-img h-[20px] w-[20px] rotate-90 duration-300":"black-img h-[20px] w-[20px] duration-300"}
          src="/icons/arrowCategory.svg"
          alt=""
        />
        {accesoryMobileMenu && <AccesoryMenuMobile/>}
      </div>
      <div onClick={handleScreenMobileMenu} className={screenMobileMenu?"flex justify-start items-center relative pl-2 w-[150px]":"flex justify-start items-center relative pl-2 w-[150px]"}>
        <img
          className="h-[20px] w-[20px] black-img"
          src="/icons/screenCategory.svg"
          alt=""
        />
        <a className="ml-2">
          Pantallas
        </a>
        <img
          className={screenMobileMenu?"black-img h-[20px] w-[20px] rotate-90 duration-300":"black-img h-[20px] w-[20px] duration-300"}
          src="/icons/arrowCategory.svg"
          alt=""
        />
        {screenMobileMenu && <ScreenMenuMobile/>}
      </div>
    </div>
  );
};
