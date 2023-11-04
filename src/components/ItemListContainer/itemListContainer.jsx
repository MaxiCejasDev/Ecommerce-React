import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { productFetch } from '../helper/products'
import { ItemList } from '../ItemList/ItemList'




export const ItemListContainer = () => {
  const { cid }= useParams()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  useEffect(()=>{
    productFetch()
    .then((res)=>{
      const data = res.filter(array=>array.category === cid)
      setProducts(data.map((category)=>{ 
        return category.products}))
      
      })
    .finally(()=>{
      setLoading(false)
    })
    
    
  },[cid])

  return (
    <div className='h-[calc(100vh-60px)]'>
      <ItemList products={products} categoryId={cid} loading={loading}/>
    </div> 
  )
}
