import { useEffect, useState } from "react";
import { useBag } from "../../Context/BagProvider";
import { OrderContainer } from "../OrderContainer/OrderContainer";
import { Link } from "react-router-dom";


export const BagContainer = () => {
  const { bag,deleteBag,orderId } = useBag();
  const [totalPrice, setTotalPrice] = useState(0)
  

  useEffect(()=>{
    const handleOrderTotal = ()=>{
    setTotalPrice(bag.reduce((acc,item)=>{ return acc += item.price },0))
    
  }

  handleOrderTotal()
 


  },[bag,totalPrice])
  

  return (
    <> 
      <div className='bg-black h-[60px] w-full md:hidden z-0'></div>
      {
        bag.length?
      
      <div className="w-full bg-whitelight lg:h-content max-h-content min-h-[calc(100vh-60px)] flex justify-center">
        <div className="grid sm:grid-cols-1 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-full bg-whitelight w-full max-w-[1440px]">
          <div className="bg-whitelight">
            <div className="h-[70px] flex items-center justify-center">
              <h2 className="text-center font-poppins text-xl">PRODUCTOS AGREGADOS</h2>
            </div>
            <div className="max-h-[calc(100vh-130px)] overflow-y-scroll">
              <ul className="grid grid-rows-2 sm:px-20 lg:pb-0 pb-4 px-2 py-2 h-full w-full gap-y-4">
                {bag.map((product)=>(
                  <li key={product.id} className="sm:h-[150px] h-[120px] w-full bg-white rounded-2xl flex">
                    <div className="w-[15%] flex justify-center items-center">
                      <img className="sm:h-[100px] sm:w-[100px] h-[80px] w-[80px] ml-4 object-contain" src={product.img} alt="" />
                    </div>
                    <div className="w-[55%] flex flex-col h-full justify-center ml-4">
                      <p className="font-poppins text-sm font-bold mt-2 ml-6">{product.name}</p>
                      <p className="font-poppins text-sm text-neutral-700 mt-2 ml-6">${product.price}</p>
                      <p className="font-poppins text-sm mt-2 ml-6">Cantidad: {product.amount}</p>
                    </div>
                    <div className="w-[30%] flex items-center justify-center">
                      <button onClick={()=> deleteBag(product.id)} className="flex items-center">
                                <img src="https://drive.google.com/uc?export=download&id=1QF_28JC1vd_lyvwdJJDkAUyFTfnWZ7-8" className="cursor-pointer h-[30px] w-[30px] bg-red-100 rounded-lg p-1"/>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <OrderContainer totalOrder={totalPrice}></OrderContainer>
        </div>
      </div>: 
      <div className="font-poppins flex flex-col items-center justify-center h-[calc(100vh-60px)]">
        {orderId?<p>Tu orden de compra: {orderId}</p>:''}
        <h2 className="text-4xl font-semibold text-center">No hay productos agregados</h2>
        <Link to={'/allcategory'} className="py-4 px-20 bg-whitelight text-black border-[1px] border-black mt-8 flex items-center justify-center">
          Ver productos
          <img className="black-img h-[24px] w-[24px]" src="https://drive.google.com/uc?export=download&id=1Rm-2jrgy930Ekdp1vBjqSOs9AaEt0qr5" alt="" />
          </Link>
      </div>
      }
    </>
  );
};
