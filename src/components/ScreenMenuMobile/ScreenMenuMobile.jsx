import { Link } from "react-router-dom";
export const ScreenMenuMobile = () => {
  return (
    <div className="absolute grid grid-rows-4 text-black top-[52px] border-l-[1px] border-black left-[80%] z-20 md:hidden">
      <Link className="ml-2 py-[12px]" to={'/category/silla'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="https://drive.google.com/uc?export=download&id=1ApKi_YpN8gLmRbh7966mXNl3pqMl1Ddb"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Silla</p>
      </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={'/category/auricular'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="https://drive.google.com/uc?export=download&id=1WOIYBKar69Cpyjjwge0oQWcpY4VwaOVM"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Auricular</p>
      </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={'/category/mouse'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="https://drive.google.com/uc?export=download&id=1LIHbhHB9kGcUWiBE1I_SAb233AJYv0fE"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Mouse</p>
      </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={'/category/teclado'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px] black-img"
          src="https://drive.google.com/uc?export=download&id=1ITHKWK7SjKkHBnj8-p-klOM23GO5GNUH"
          alt=""
        />
        <p className="font-poppins text-sm ml-2">Teclado</p>
      </div>
      </Link>
    </div>
  )
}
