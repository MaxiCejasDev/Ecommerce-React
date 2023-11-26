import { useState } from "react";
import { ScreenMenuMobile } from "../components/ScreenMenuMobile/ScreenMenuMobile";
import { AccesoryMenuMobile } from "../components/AccesoryMenuMobile/AccesoryMenuMobile";
import { Link } from "react-router-dom";

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
          src="https://drive.google.com/uc?export=download&id=1MB6ynCf84LHjLzG5qvQlFxXIagLl17CW"
          alt=""
        />
        <Link to={'/allcategory'} className="ml-2">
          Todas las categorias
        </Link>
      </div>
      <div onClick={handleAccesoryMobileMenu} className={accesoryMobileMenu?"flex justify-start items-center relative pl-2 0 w-[150px]":"flex justify-start items-center relative pl-2 w-[150px]"}>
        <img
          className="h-[20px] w-[20px] black-img"
          src="https://drive.google.com/uc?export=download&id=1SuORGAZQ5d0viq3Q8Fkt2jYq7KKU5ATu"
          alt=""
        />
        <a className="ml-2">
          Accesorios
        </a>
        <img
          className={accesoryMobileMenu?"black-img h-[20px] w-[20px] rotate-90 duration-300":"black-img h-[20px] w-[20px] duration-300"}
          src="https://drive.google.com/uc?export=download&id=1rTVL0QwNxUGQ1S_ErjOOAHOu2poWVUdM"
          alt=""
        />
        {accesoryMobileMenu && <AccesoryMenuMobile/>}
      </div>
      <div onClick={handleScreenMobileMenu} className={screenMobileMenu?"flex justify-start items-center relative pl-2 w-[150px]":"flex justify-start items-center relative pl-2 w-[150px]"}>
        <img
          className="h-[20px] w-[20px] black-img"
          src="https://drive.google.com/uc?export=download&id=1MwLciBusePiLwX6HGfXPwtnWxfeEfLPC"
          alt=""
        />
        <a className="ml-2">
          Pantallas
        </a>
        <img
          className={screenMobileMenu?"black-img h-[20px] w-[20px] rotate-90 duration-300":"black-img h-[20px] w-[20px] duration-300"}
          src="https://drive.google.com/uc?export=download&id=1rTVL0QwNxUGQ1S_ErjOOAHOu2poWVUdM"
          alt=""
        />
        {screenMobileMenu && <ScreenMenuMobile/>}
      </div>
    </div>
  );
};
