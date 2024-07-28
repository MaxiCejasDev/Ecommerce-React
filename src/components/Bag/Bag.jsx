import { Link } from "react-router-dom";
import { useBag } from "../../Context/BagProvider";

export const Bag = ({ bagOpen, handleOpenBag }) => {
  const { deleteBag, bag } = useBag();

  return (
    
      <>
      {bag.length && bagOpen >= 1 ? (
        <>
        <div className="md:hidden h-[60px] w-[40px] absolute top-[-20px] right-10 z-50 flex items-center justify-center">
        <img
          onClick={handleOpenBag}
          className="object-contain mt-[1px]"
          src="/nav-icon/close.svg"
          alt=""
        />
      </div>
        <div className="bg-white h-screen w-screen pt-10 left-0 md:left-auto top-[-19px] md:w-[34vw] md:pt-0 md:h-[68vh] grid grid-rows-rowbag md:rounded-bl-2xl md:rounded-br-2xl fixed md:absolute md:top-10 md:right-[-11px] z-[20] md:border-[1.5px] md:border-bagstroke">
          
          <div className="md:border-b-[1px] md:border-bagstroke flex justify-center items-center pt-8 md:pt-0">
            <h3 className="text-center font-bold font-poppins md:text-[0.9rem] text-base">
              PRODUCTOS AGREGADOS
            </h3>
          </div>
          <div className="overflow-y-scroll">
            <ul className="pl-2 pt-2">
              {bag.map((product, index) => (
                <li key={index} className="grid grid-cols-colbag h-[100px]">
                  <div>
                    <img
                      className="w-[80px] h-[80px] object-contain"
                      src={`${product.img}`}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-poppins text-base">{product.name}</p>
                    <p className="font-poppins text-sm text-neutral-600">
                      ${product.price}
                    </p>
                    <p className="font-poppins text-sm text-neutral-600">
                      Cantidad: {product.amount}
                    </p>
                  </div>
                  <div className="flex items-center mb-[30px]">
                    <img
                      src="/icons/trash.svg"
                      className="cursor-pointer h-[30px] w-[30px] bg-red-100 rounded-lg p-1"
                      onClick={() => deleteBag(product.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-[1px] border-bagstroke flex flex-col justify-center items-center">
            <Link
              to={"/bag"}
              className="bg-darklight flex items-center justify-center text-white w-[80%] h-[40px] font-poppins text-[1rem] rounded-2xl shadow-lg shadow-neutral-200"
            >
              Finalizar la compra
            </Link>
            <Link
              to={"/bag"}
              className="bg-ivorywhite flex items-center justify-center mt-[8px] text-black border-[1px] border-neutral-500 w-[80%] h-[40px] font-poppins text-[1rem] rounded-2xl"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
        </>
      ) : (
        <>
        
        <div className="bg-white w-[180px] h-[60px] sm:w-[240px] sm:h-[80px] flex items-center justify-center absolute top-[30px] right-0 z-[20] border-2 border-neutral-400">
          
          <p className="font-poppins text-base sm:text-lg text-center">CARRITO VACIO</p>
        </div>
        </>
      )}
    </>
  );
};
