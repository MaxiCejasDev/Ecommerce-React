import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { productFetch } from '../helper/products'
import { Link } from 'react-router-dom'



export const ItemListContainer = () => {
  const { cid }= useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState({})
  useEffect(()=>{
    productFetch()
    .then((res)=>{
      setProduct(res.filter(item=>item.categoria === cid))
    })
    .finally(()=>{
      setIsLoading(false)
    })
    
    
  },[cid])

  return (
    <>  
      <ul className='flex items-start justify-between flex-wrap h-[calc(100vh-60px)]'>
        {isLoading ? (
        <h2>Holaaaa</h2>
        ) 
        : 
        (
          product.map((categoria) => (
            categoria.products.map((producto, index) => (
              <li key={index}className='h-[300px] w-[300px] border-[1px] border-black'>
                <div className='flex flex-col justify-center items-center '>
                  <img className='h-[200px] w-[200px] object-contain' src={`${producto.img1}`} alt="" />
                  <h3>{producto.nombre}</h3>
                  <p>${producto.precio}</p>
                  <button className='py-[8px] px-[20px] bg-darklight text-white font-bold'><Link to={`/detail/${producto.id}`}>Ver Detalle</Link></button>
                </div>
              </li>
              
            ))
          ))
        )}
      </ul>
      
    </>
  )
}
