import { Link } from "react-router-dom"
import {Loader} from "../Loader/Loader"


export const ItemList = ({products,categoryId,loading}) => {
    
    
  return (
    <>
    <ul className={loading?'h-[calc(100vh-60px)] bg-black flex justify-center items-center' :'grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 px-4 pt-4'}>
      {loading? (
      <Loader/>
      ) 
      : 
      (
        products.map((product,index) => 
            <li key={index} className='bg-white sm:shadow-lg sm:shadow-neutral-300' >
            <div className='flex flex-col justify-center items-center'>
              <img className='h-[250px] w-[200px] object-contain pt-2' src={`${product.img1}`} alt="" />
              <h3 className="font-poppins text-lg text-center text-neutral-900">{product.name}</h3>
              <p className="font-poppins text-sm text-gray-600">${product.price}</p>
              <div className="pb-4">
                <button className='bg-darklight button-hover hover:bg-white hover:text-black hover:border-[1px] hover:py-[8px] hover:border-black shadow-lg shadow-neutral-300 py-[9px] px-[30px] text-white font-bold font-poppins text-sm rounded-3xl'>
                  <Link className="flex" to={`/${categoryId}/detail/${product.id}`}>Ver detalles
                  </Link>
                  </button>
              </div>
              
            </div>
          </li>   
        ))
      }
    </ul> 
  </>)
}