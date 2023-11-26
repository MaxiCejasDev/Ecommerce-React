import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className='bg-black h-[60px] w-full md:hidden z-0'></div>
      <div className=" w-full flex font-poppins text-whitelight bg-darkpure flex-col-reverse h-content min-h-[calc(100vh-60px)] lg:flex-row pb-4">
        <div className=" h-full md:w-full lg:w-2/4">
          <div className="h-1/4 flex justify-center items-center">
              <h2 className="text-xl font-bold mb-8 lg:my-4">EQUIPATE CON<br/> LO MAS DESTACADO<br/> DEL MERCADO</h2>
          </div>
          <div className="h-3/4 grid lg:grid-cols-2 lg:grid-rows-2 gap-x-2 px-2 gap-y-4 2xl:px-36">
            <div className="flex items-center justify-center xl:place-self-end xl:justify-self-center">
              <div className="flex flex-col justify-center items-center h-[150px] w-[220px] sm:h-[200px] sm:w-[300px] overflow-hidden bg-darklight rounded-3xl">
              <img className="mb-4 h-[30px] w-[30px] white-img" src="https://drive.google.com/uc?export=download&id=1cMHB_5x3jMt_xZ_8UTi4nWPU0QGN_rCO" alt="" />
              <p className="text-base font-bold text-center">Protegemos <br/> tus datos</p>
              </div>
            </div>
            <div className="flex items-center justify-center xl:place-self-end xl:justify-self-center">
              <div className="flex flex-col justify-center items-center h-[150px] w-[220px] sm:h-[200px] sm:w-[300px] overflow-hidden bg-darklight rounded-3xl">
              <img className="mb-4 h-[30px] w-[30px] white-img" src="https://drive.google.com/uc?export=download&id=1U2qpCGMFu7N8tiVykuMEUfnNRyWWMGJy" alt="" />
              <p className="text-base font-bold text-center">Develución <br/> de productos</p>
              </div>
            </div>
            <div className="flex items-center justify-center xl:place-self-start xl:justify-self-center">
              <div className="flex flex-col justify-center items-center h-[150px] w-[220px] sm:h-[200px] sm:w-[300px] overflow-hidden bg-darklight rounded-3xl">
              <img className="mb-4 h-[30px] w-[30px] white-img" src="https://drive.google.com/uc?export=download&id=1gPHfbuaJJYGEW8NYipntpTBxlr9_EVBa" alt="" />
              <p className="text-base font-bold text-center">Observa el estado<br/>  de tu pedido</p>
              </div>
            </div>
            <div className="flex items-center justify-center xl:place-self-start xl:justify-self-center">
              <div className="flex flex-col justify-center items-center h-[150px] w-[220px] sm:h-[200px] sm:w-[300px] overflow-hidden bg-darklight rounded-3xl">
              <img className="mb-4 h-[30px] w-[30px] white-img" src="https://drive.google.com/uc?export=download&id=12UhzMCEsw0P60vapDkCNwDRoall4PnQC" alt="" />
              <p className="text-base font-bold text-center">Cuidamos<br/>  tus productos</p>
        
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col items-center pt-8 md:w-full lg:w-2/4">
            
            
            <div>
              <h2 className="font-bold text-xl">NOSOTROS</h2>
            </div>
            <div className="my-8 pb-8">
            <p className="text-base text-center lg:text-left leading-7 max-w-[540px]">
           Somos una tienda apasionada por la tecnología, un destino único para los aficionados y amantes de la innovación digital.<br/> <br/> 
           En nuestro establecimiento, ofrecemos una amplia gama de dispositivos electrónicos de última generación 
           y accesorios que reflejan la vanguardia tecnológica.
           </p>
            </div>
           <div className="pb-20">
           <Link to={'/allcategory'} className="text-black bg-whitelight hover:bg-neutral-200 py-8 rounded-3xl font-bold text-base px-14 sm:px-20 lg:px-36">Ver Productos</Link>
           </div>
           
     
           
        </div>
      </div>

              

            
          
              
           
             
           
             
          
        
                

    </>
  );
};
