import { Link } from "react-router-dom"
export const AccesoryMenu = ()=>{
    return(
    <div className="h-[280px] w-[320px] absolute left-[260px] grid grid-rows-4 top-0 bg-darklight z-20">
    
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/portatil'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="https://drive.google.com/uc?export=download&id=1cNvrJJ8Ad7KZaBLH8a13yy6NVOC2bgQh" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Portatil</p>
    </div>
    </Link>
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/camara'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="https://drive.google.com/uc?export=download&id=1xg8HksY5piHCn7Ep1lKuCVvK9VSu9c08" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Camara</p>
    </div>
    </Link>
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/tablet'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="https://drive.google.com/uc?export=download&id=1qUJiPjbk8CQToaHtwGo27nfQZRZdzPSR" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Tablet</p>
    </div>
    </Link>
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/monitor'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="https://drive.google.com/uc?export=download&id=1cNvrJJ8Ad7KZaBLH8a13yy6NVOC2bgQh" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Monitor</p>
    </div>
    </Link>
    </div>
    )
}
