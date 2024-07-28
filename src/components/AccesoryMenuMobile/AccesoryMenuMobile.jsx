import { Link } from "react-router-dom";
export const AccesoryMenuMobile = () => {
  return (
    <div className="absolute grid grid-rows-4 text-black top-[52px] border-l-[1px] border-black left-full z-20 md:hidden">
      <Link className="ml-2 py-[12px]" to={"/category/portatil"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="/category-icon/laptop.svg"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Portatil</p>
        </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={"/category/camara"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="/category-icon/webcam.svg"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Camara</p>
        </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={"/category/tablet"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="/category-icon/tab.svg"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Tablet</p>
        </div>
      </Link>
      <Link className="ml-2 py-[12px]" to={"/category/monitor"}>
        <div className="flex">
          <img
            className="h-[20px] w-[20px] black-img"
            src="/category-icon/monitor.svg"
            alt=""
          />
          <p className="font-poppins text-sm ml-2">Monitor</p>
        </div>
      </Link>
    </div>
  );
};
