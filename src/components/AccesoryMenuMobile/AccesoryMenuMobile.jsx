import { Link } from "react-router-dom";
export const AccesoryMenuMobile = () => {
  return (
    <div className="absolute grid grid-rows-4 text-black top-[52px] border-l-[1px] border-black left-[85%] z-20 md:hidden">
      <Link className="ml-2 py-[12px]" to={"/category/silla"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="https://drive.google.com/uc?export=download&id=1cNvrJJ8Ad7KZaBLH8a13yy6NVOC2bgQh"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Portatil</p>
        </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={"/category/auricular"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="https://drive.google.com/uc?export=download&id=1xg8HksY5piHCn7Ep1lKuCVvK9VSu9c08"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Camara</p>
        </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={"/category/mouse"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="https://drive.google.com/uc?export=download&id=1qUJiPjbk8CQToaHtwGo27nfQZRZdzPSR"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Tablet</p>
        </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={"/category/teclado"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="https://drive.google.com/uc?export=download&id=1cNvrJJ8Ad7KZaBLH8a13yy6NVOC2bgQh"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Monitor</p>
        </div>
      </Link>
    </div>
  );
};
