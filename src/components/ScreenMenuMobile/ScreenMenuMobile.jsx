import { Link } from "react-router-dom";
export const ScreenMenuMobile = () => {
  return (
    <div className="absolute grid grid-rows-4 text-black top-[52px] border-l-[1px] border-black left-[80%] z-20 md:hidden">
      <Link className="ml-2 py-[12px]" to={'/category/silla'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="/category-icon/chair.svg"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Silla</p>
      </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={'/category/auricular'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="/category-icon/headphone.svg"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Auricular</p>
      </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={'/category/mouse'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="/category-icon/mouse.svg"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Mouse</p>
      </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={'/category/teclado'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="/category-icon/keyboard.svg"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Teclado</p>
      </div>
      </Link>
    </div>
  )
}
