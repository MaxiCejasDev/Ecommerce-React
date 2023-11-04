import { useParams,} from "react-router-dom"
import { useEffect, useState } from "react"
import { productFetch } from "../helper/products"
export const ItemDetailContainer = () => {
  const { cid,pid } = useParams()
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    productFetch()
    .then((res)=>{
      const category = res.find((cat)=> cat.category === cid)
      const foundProduct = category.products.find((p)=> p.id === pid)
      setProduct(foundProduct)
    })
  }, [cid,pid])
  
  return (
    <>
    <div className="grid grid-cols-2">
     <div className="w-full h-screen  overflow-hidden grid grid-rows-2">
        <div className="">
          <img className="object-cover h-full" src={product.img1} alt="" />
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img className="object-cover h-full" src={product.img2} alt="" />
          </div>
          <div>
            <img className="object-cover h-full" src={product.img3} alt="" />
          </div>
        </div>
     </div>
     <div className="w-full">
      <h3 className="text-3xl">{product.nombre}</h3>
      <p className="font-bold">${product.precio}</p>
     </div>

    </div>
      
      
    </>
  )
}
