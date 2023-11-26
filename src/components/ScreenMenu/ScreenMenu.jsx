import { Link } from "react-router-dom";
export const ScreenMenu = () => {
  return (
    <div className="h-[280px] w-[320px] absolute left-[260px] grid grid-rows-4 top-0 bg-darklight z-20">
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/silla'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="https://drive.google.com/uc?export=download&id=1ApKi_YpN8gLmRbh7966mXNl3pqMl1Ddb"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Silla</p>
      </div>
      </Link>
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/auricular'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="https://drive.google.com/uc?export=download&id=1WOIYBKar69Cpyjjwge0oQWcpY4VwaOVM"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Auricular</p>
      </div>
      </Link>
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/mouse'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="https://drive.google.com/uc?export=download&id=1LIHbhHB9kGcUWiBE1I_SAb233AJYv0fE"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Mouse</p>
      </div>
      </Link>
      <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/teclado'}>
      <div className="flex">
        <img
          className="h-[20px] w-[20px]"
          src="https://drive.google.com/uc?export=download&id=1ITHKWK7SjKkHBnj8-p-klOM23GO5GNUH"
          alt=""
        />
        <p className="text-white font-poppins ml-2 text-sm">Teclado</p>
      </div>
      </Link>
    </div>
  );
};
