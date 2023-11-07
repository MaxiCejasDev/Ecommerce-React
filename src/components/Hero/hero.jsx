export const Hero = () => {
  return (
    <>
    <div className="grid grid-cols-2 bg-darkpure h-[calc(100vh-60px)]">
        <div className="text-white flex flex-col pl-[80px] items-start justify-center">
            <div>
                <p className="font-bold text-[1rem] mb-[2px]">Tu portal hacia al mundo digital.</p>
                <h1 className="font-bold text-[3.5rem] mb-[20px]">Magic Market</h1>
            </div>
            <div className="flex mb-[10px]">
                <a className="bg-darklight h-[65px] w-[200px] overflow-hidden flex items-center justify-center" href="">
                    <img className="h-[24px] mr-[10px]" src="https://drive.google.com/uc?export=download&id=1Sp0pxjJ5vRQOazwDgUq7-pzUA9z6evcx" alt="" />
                    <div className="ml-[10px] text-[14px]">
                        Ver todos los <br /><span className="font-bold">Productos</span>
                    </div>
                </a>
                <a className="bg-darklight h-[65px] w-[200px] overflow-hidden flex items-center justify-center ml-[10px]" href="">
                    <img className="h-[24px] mr-[10px]" src="https://drive.google.com/uc?export=download&id=1FenN8fkbCRUHOwOeOQXL6Fpk4mrRtLEm" alt="" />
                    <div className="ml-[10px] text-[14px]">
                        Ver productos <br /><span className="font-bold">Destacados</span>
                    </div>
                </a>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <figure className="relative">
                <img className="h-[270px] w-[250px] border-[1px] border-white" src="https://drive.google.com/uc?export=download&id=1omMFR5qQzYBKZIjwkObxvN-IRHmtXEzn" alt="" />
                <img className="h-[270px] w-[250px] absolute top-[140px] right-[125px] z-10 border-[1px] border-white" src="https://drive.google.com/uc?export=download&id=1omMFR5qQzYBKZIjwkObxvN-IRHmtXEzn" alt="" />
            </figure>
        </div>
    </div>
    </>
  )
}
