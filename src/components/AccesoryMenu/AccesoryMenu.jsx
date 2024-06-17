import { Link } from "react-router-dom"
export const AccesoryMenu = ()=>{
    return(
    <div className="h-[280px] w-[320px] absolute left-[260px] grid grid-rows-4 top-0 bg-darklight z-20">
    
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/portatil'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="/category-icon/laptop.svg" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Portatil</p>
    </div>
    </Link>
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/camara'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="/category-icon/webcam.svg" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Camara</p>
    </div>
    </Link>
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/tablet'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="/category-icon/tab.svg" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Tablet</p>
    </div>
    </Link>
    <Link className="flex items-center justify-center hover:bg-neutral-800" to={'/category/monitor'}>
    <div className="flex">
        <img className="h-[20px] w-[20px]" src="/category-icon/monitor.svg" alt="" />
        <p className="text-white font-poppins ml-2 text-sm">Monitor</p>
    </div>
    </Link>
    </div>
    )
}
