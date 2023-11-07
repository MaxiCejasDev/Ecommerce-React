import { useBag } from "../../Context/BagProvider"


export const Bag = () => {
    const {deleteBag,bag} = useBag()
    
  return (
    <>
        <div className="bg-white w-[34vw] h-[68vh] grid grid-rows-rowbag absolute top-10 right-0 z-[20] border-[1.5px] border-bagstroke">
            <div className="border-b-[1px] border-bagstroke flex justify-center items-center">
                <h3 className="text-center font-bold font-poppins text-[0.9rem]">PRODUCTOS AGREGADOS</h3>
            </div>
            <div className="overflow-y-scroll">
                <ul>
                    {bag.map((product,index)=>(
                        
                        <li key={index} className="grid grid-cols-colbag h-[100px]">
                            <div>
                                <img className="w-[80px] h-[80px] object-contain" src={`${product.img}`} alt="" />
                            </div>
                            <div>
                                <p className="font-poppins text-[0.9rem] font-bold">{product.nombre}</p>
                                <p className="font-poppins text-[15px] font-normal">${product.precio}</p>
                                <p className="font-poppins text-[15px] font-normal">Cantidad: {product.cantidad}</p>
                            </div>
                            <div className="flex items-center mb-[30px]">
                                <p className="cursor-pointer" onClick={deleteBag}>❌</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-t-[1px] border-bagstroke flex flex-col justify-center items-center">
                <button className="bg-darkpure text-white w-[80%] h-[40px] font-poppins text-[1rem]">Finalizar la compra</button>
                <button className="bg-ivorywhite mt-[8px] text-black border-[1px] border-black w-[80%] h-[40px] font-poppins text-[1rem]">Ver todos los productos</button>
            </div>
        </div>
    </>
  )
}
