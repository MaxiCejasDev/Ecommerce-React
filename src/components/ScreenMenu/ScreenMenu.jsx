import { Link } from "react-router-dom";
export const ScreenMenu = () => {
  return (
    <div className="h-[280px] w-[320px] absolute left-[260px] grid grid-rows-4 top-0 bg-darklight z-20">
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/silla'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="/category-icon/chair.svg"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Silla</p>
      </div>
      </Link>
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/auricular'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="/category-icon/headphone.svg"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Auricular</p>
      </div>
      </Link>
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/mouse'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="/category-icon/mouse.svg"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Mouse</p>
      </div>
      </Link>
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/teclado'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="/category-icon/keyboard.svg"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Teclado</p>
      </div>
      </Link>
    </div>
  );
};
