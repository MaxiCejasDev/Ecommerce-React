import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import { collection, getDocs, getFirestore,query,where } from 'firebase/firestore'




export const ItemListContainer = () => {
  const { cid }= useParams()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  
  // useEffect hook to get firebase database, this hook get the products by category.
  useEffect(()=>{
      const db = getFirestore()
      const itemCollection = collection(db,"products")
      const queryFilter = cid ? query(itemCollection, where('category', '==', cid)) : itemCollection                
        getDocs(queryFilter)
        .then(res =>{ setProducts( res.docs.map(item => ({ id: item.id , ...item.data() }) ) )})
        .catch(err => console.log(err)) 
        .finally(() => setLoading(!true))
  },[cid])
  
  return (
    <div className='max-h-fit sm:min-h-[calc(100vh-60px)] pb-4 bg-whitelight'>
      <div className='bg-black h-[60px] w-full md:hidden z-0'></div>
      <ItemList products={products} categoryId={cid} loading={loading}/>
    </div> 
  )
}
