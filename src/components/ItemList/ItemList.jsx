import { Link } from "react-router-dom"



export const ItemList = ({products,categoryId,loading}) => {
    
    
  return (
    <>
    <ul className='flex items-start justify-between flex-wrap'>
      {loading ? (
      <h2>Holaaaa</h2>
      ) 
      : 
      (
        products.map((element) => 
          element.map((productProperty,index)=>(
            <li key={index} className='h-[300px] w-[300px] border-[1px] border-black'>
            <div className='flex flex-col justify-center items-center '>
              <img className='h-[200px] w-[200px] object-contain' src={`${productProperty.img1}`} alt="" />
              <h3>{productProperty.nombre}</h3>
              <p>${productProperty.precio}</p>
              <button className='py-[8px] px-[20px] bg-darklight text-white font-bold'><Link to={`/${categoryId}/detail/${productProperty.id}`}>Ver Detalle</Link></button>
            </div>
          </li>
          ))
            
        ))

      }
    </ul> 
    
    
  
  </>)
}