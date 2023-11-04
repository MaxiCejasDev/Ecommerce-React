import { Link } from "react-router-dom"

export const NavCategory = () => {
  return (
    <div className="bg-darklight w-[45%] h-[220px] text-white flex flex-col justify-center items-center absolute top-[60px] z-10 duration-300">
        <div className="grid grid-rows-2 pt-[30px] pb-[16px] h-full">
            <div className="h-full">
                <h3 className="ml-[16px] text-fontlight font-bold">Accesorios</h3>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 h-full">
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1ITHKWK7SjKkHBnj8-p-klOM23GO5GNUH" alt="" />
               <Link to={`/category/teclado`}>Teclado</Link>
                </li>
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1LIHbhHB9kGcUWiBE1I_SAb233AJYv0fE" alt="" />
                <Link to={'/category/mouse'}>Mouse</Link> 
                </li>
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1WOIYBKar69Cpyjjwge0oQWcpY4VwaOVM" alt="" />
                <Link to={'/category/auricular'}>Auricular</Link>
                </li>
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1ApKi_YpN8gLmRbh7966mXNl3pqMl1Ddb" alt="" />
                <Link to={'/category/silla'}>Silla</Link>
                </li>
            </div>
        </div>
        <hr className="w-[90%] mx-auto"></hr>
        <div className="grid grid-rows-2 pb-[30px] pt-[16px] h-full">
            <div className="h-full">
                <h3 className="mr-[18px] text-fontlight font-bold">Pantallas</h3>
            </div>
            <div className="grid grid-cols-4 grid-rows-1">
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1HWK79HGFWccdCECDqUAMPf4bvDKpJRgC" alt="" />
                <Link to={'/category/portatil'}>Portatil</Link>
                </li>
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1xg8HksY5piHCn7Ep1lKuCVvK9VSu9c08" alt="" />
                <Link to={'/category/camara'}>Camara</Link>
                </li>
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1qUJiPjbk8CQToaHtwGo27nfQZRZdzPSR" alt="" />
                <Link to={'/category/tablet'}>Tablet</Link>
                </li>
                <li className="flex items-center px-[26px] text-[1rem] font-bold list-none" href=""><img className="mr-2 h-[1rem]" src="https://drive.google.com/uc?export=download&id=1cNvrJJ8Ad7KZaBLH8a13yy6NVOC2bgQh" alt="" />
                <Link to={'/category/monitor'}>Monitor</Link>
                </li>
            </div>
        </div>
    </div>
  )
}
