import { NavLink } from "react-router-dom";
import { NavCategoryMobile } from "../NavCategoryMobile/NavCategoryMobile";
import { useState } from "react";

export const NavBarMobile = ({ isOpen, dropdownMenu }) => {
  const [categorys,setCategorys] = useState(false)
  const handleCategorys = ()=>{
    setCategorys(!categorys)
  } 
  return (
    <>
      {isOpen && (
        <div className="bg-white fixed top-0 z-10 h-screen w-full md:hidden font-poppins overflow-hidden">
          <ul className="flex text-black flex-col h-full pl-4 pt-2">
            <li>
              <img
                className="h-[30px] w-[30px] cursor-pointer"
                onClick={dropdownMenu}
                src="/nav-icon/close.svg"
                alt=""
              />
            </li>
            <li className="pt-6">
              <NavLink to={"./"} activeclassname="currentCategory">
                Inicio
              </NavLink>
            </li>
            <li className="pt-6">
              <NavLink to={"/about"} activeclassname="currentCategory">
                Nosotros
              </NavLink>
            </li>

            <li className="pt-6 h-full">
              <a onClick={handleCategorys} className="flex items-center">
                Categorias
                <img
                  className={categorys?"black-img h-[20px] w-[20px] duration-300 rotate-90":"black-img h-[20px] w-[20px] duration-300"}
                  src="/icons/arrowCategory.svg"
                  alt=""
                />
              </a>
              {categorys && <NavCategoryMobile/>}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
