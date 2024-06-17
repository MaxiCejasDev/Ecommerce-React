import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <>
    <div className="hero-container md:grid md:grid-cols-2 md:bg-darkpure h-screen md:h-[calc(100vh-60px)]">
        <div className="sm:text-white flex flex-col md:pl-[80px] md:items-start justify-center items-center h-full">
            <div>
                <p className="md:font-bold md:text-sm md:text-[1rem] md:mb-[2px] hidden">Tu portal hacia al mundo digital.</p>
                <h1 className="text-white md:text-left text-center font-bold text-[3.5rem] md:mb-[20px] mt-8 md:mt-0">Magic <br className="md:hidden"/>Market</h1>
            </div>
            <div className="flex mb-[10px] flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-end mt-10 md:mt-0">
                <Link to={'/allcategory'} className="h-[65px] w-64 mt-2 bg-whitelight text-black md:text-white 
                md:bg-darklight md:h-[65px] md:w-[200px] md:overflow-hidden flex items-center justify-center
                md:rounded-none rounded-md md:border-none border-2 border-black">
                    <img className="md:h-[20px] md:w-[20px] lg:h-[24px] lg:mr-[10px] md:block hidden" src="/hero/baghero.svg" alt="" />
                    <div className="ml-[10px] md:text-sm md:text-[14px] md:font-normal font-bold">
                        Ver todos los <br className="md:block hidden"/><span className="sm:font-bold">Productos</span>
                    </div>
                    <img className="md:hidden black-img w-[24px] h-[24px] ml-2" src="/icons/arrow-white.svg" alt="" />
                </Link>
                <Link to={'/featured'} className="h-[65px] w-64 mt-2 bg-whitelight text-black md:text-white 
                md:bg-darklight md:h-[65px] md:w-[200px] md:overflow-hidden flex items-center justify-center md:mt-2 lg:ml-[10px]
                md:rounded-none rounded-md md:border-none border-2 border-black">
                    <img className="md:h-[20px] md:w-[20px] lg:h-[24px] lg:mr-[10px] md:block hidden" src="/hero/fire.svg" alt="" />
                    <div className="md:ml-[10px] md:text-sm md:text-[14px] md:font-normal font-bold">
                        <span className="hidden md:inline-block">Ver productos</span><span className="md:hidden">Productos </span><br className="md:flex hidden"/><span className="sm:font-bold">Destacados</span>
                    </div>
                    <img className="md:hidden black-img w-[24px] h-[24px] ml-2" src="/hero/fire.svg" alt="" />
                </Link>
            </div>
        </div>
        <div className="md:flex md:justify-center md:items-center hidden">
            <figure className="relative">
                <img className="md:h-[180px] md:w-[160px] lg:h-[200px] lg:w-[180px] xl:h-[270px] xl:w-[250px] border-[1px] border-white" src="/hero/laptophero.jpg" alt="" />
                <img className="md:h-[180px] md:w-[160px] lg:h-[200px] lg:w-[180px] xl:h-[270px] xl:w-[250px] absolute top-[140px] right-[125px] z-10 border-[1px] border-white" src="/hero/laptophero.jpg" alt="" />
            </figure>
        </div>
    </div>
    </>
  )
}
