import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((res) => {
      
       let data = res.docs.map((item)=>{
            return{
            id:item.id,...item.data()
            }
        })
    setFeatured(data.filter((featuredProduct)=>{
        return featuredProduct.featured === true
    }))
      
    
    });
  }, []);

  return (
    <>
    <div className='h-[60px] w-full md:hidden z-0'></div>
    <div className="font-poppins h-content min-h-[calc(100vh-60px)]">

      
      <div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 md:pt-4">
          {featured.map((product) =>(
            <li key={product.id} className="bg-white shadow-[0px_5px_10px_rgba(0,0,0,.20)] hover:scale-105 duration-300">
              <Link to={`/${product.category}/detail/${product.id}`}>
              
              <div className="flex flex-col justify-center items-center pt-4 pb-10">
                <img
                  className="h-[200px] w-[200px] object-contain"
                  src={`${product.img1}`}
                  alt={`${product.name}`}
                />
                <h3 className="font-poppins text-lg text-center text-neutral-900">
                  {product.name}
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  ${product.price}
                </p>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};
