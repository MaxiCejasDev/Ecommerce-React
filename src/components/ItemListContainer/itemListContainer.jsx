import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import { collection, getDocs, getFirestore } from 'firebase/firestore'




export const ItemListContainer = () => {
  const { cid }= useParams()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  
  useEffect(()=>{
      const db = getFirestore()
      const itemCollection = collection(db,"products")
      getDocs(itemCollection)
      .then((res)=>{
        
        setProducts(res.docs.map((item)=>(
          {id:item.id,...item.data()}
          
          )
        ).filter((product)=>product.category === cid)
        )
      })
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(!true))
  },[cid])
  
  return (
    <div className='max-h-fit sm:min-h-[calc(100vh-60px)] bg-whitelight'>
      <div className='bg-black h-[60px] w-full md:hidden z-0'></div>
      <ItemList products={products} categoryId={cid} loading={loading}/>
    </div> 
  )
}
