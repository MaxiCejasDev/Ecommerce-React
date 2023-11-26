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
    <div className='bg-black h-[60px] w-full md:hidden z-0'></div>
    <div className="font-poppins bg-darklight h-content min-h-[calc(100vh-60px)]">
      <div className="h-[20%] pt-4 md:pl-4 flex items-center justify-center lg:block">
        <div className="text-white text-lg md:text-2xl lg:text-4xl text-center border-white border-[1px] w-[70%] sm:w-[75%] md:w-[500px] flex justify-center items-center h-[80px]">
          <h2 className="flex items-center justify-center">Productos destacados <img className="ml-2 h-[24px] w-[24px] lg:h-[40px] lg:w-[40px]" src="https://drive.google.com/uc?export=download&id=1g3kHfxWx6S1GlFdNKzbM4alRU3OvTZi_" alt="" /></h2>
        </div>
      </div>
      <div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 pt-4 px-4">
          {featured.map((product) => {
           return <li key={product.id} className="bg-white">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-[200px] w-[200px] object-contain pt-2"
                  src={`${product.img1}`}
                  alt=""
                />
                <h3 className="font-poppins text-lg text-center text-neutral-900">
                  {product.name}
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  ${product.price}
                </p>
                <div className="pb-4">
                  <button className="bg-darklight button-hover hover:bg-white hover:text-black hover:border-[1px] hover:py-[8px] hover:border-black shadow-lg shadow-neutral-300 py-[9px] px-[30px] text-white font-bold font-poppins text-sm rounded-3xl">
                    <Link className="flex" to={`/${product.category}/detail/${product.id}`}>
                      Ver detalles <img className="white-img h-[20px] w-[20px] ml-2" src="https://drive.google.com/uc?export=download&id=1LsPC_PH_z_7EmsH6YSlSiw_A6VzY-K2Z" alt="" />
                    </Link>
                  </button>
                </div>
              </div>
            </li>;
          })}
        </ul>
      </div>
    </div>
    </>
  );
};
