import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemCounter } from "../Hooks/ItemCounter/ItemCounter";
import { useBag } from "../../Context/BagProvider";
import { Loader } from "../Loader/Loader";
import {doc,getDoc,getFirestore} from "firebase/firestore"
import { ItemDetailSelectImg } from "../ItemDetailSelectImg/ItemDetailSelectImg";

export const ItemDetailContainer = () => {
  const { pid } = useParams();
  const [detailLoading, setDetailLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [purchase, setPurchase] = useState(false);
  const { addToBag, bagAmount, setBagAmount} = useBag();


  const [selectImg,setSelectImg] = useState([])
  const [unSelectedImg,setUnSelectedImg] = useState([])



  const handleSelectImg = (evt)=>{
    const filterSelectImg = selectImages.filter((item)=> parseFloat(item.id) === parseFloat(evt.target.value) )
    setSelectImg(filterSelectImg)
    const filterUnSelected = selectImages.filter((item)=> parseFloat(item.id) !== parseFloat(evt.target.value))  
    setUnSelectedImg(filterUnSelected)
  }


    const selectImages = [
      {id: 1, img: product.img1},
      {id: 2, img: product.img2},
      {id: 3, img: product.img3}
    ]
   

  const handleAddBag = (count) => {
        addToBag({
          category: product.category,
          id: pid,
          img: product.img1,
          name: product.name,
          price: product.price * count,
          amount: count,
        });
    setPurchase(true);
  };  

  useEffect(()=>{
    const db = getFirestore()
    const itemProduct = doc(db,"products",pid)
    getDoc(itemProduct)
    .then((prod)=>{
      setProduct(prod.data())
      setSelectImg([...selectImg,{id:1,img:prod.data().img1}])
    setUnSelectedImg([...unSelectedImg,{id:2,img:prod.data().img2},{id:3,img:prod.data().img3}])
    })
    .catch((error)=>console.log(error))
    .finally(()=>{
    setDetailLoading(!true)
    }
    )
  },[pid])






  

  return (
    <>
    <div className='bg-black h-[60px] w-full md:hidden z-0'></div>
    <div className={detailLoading?'min-h-[calc(100vh-60px)] bg-black flex justify-center items-center':''}>
      {detailLoading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 h-[calc(100vh-60px)] mb-[600px] sm:mb-[500px] md:mb-0 bg-whitelight justify-items-center">
          <ItemDetailSelectImg product={product} unSelectedImg={unSelectedImg} selectImg={selectImg}/>
          <div className="w-full px-10 h-full mt-8 md:mt-0 pt-[50px] bg-white">
            <h3 className="text-2xl font-poppins font-bold pb-2 ml-4">{product.name}</h3>
            <p className="font-poppins text-[16px] text-neutral-600 font-bold pb-20 ml-4">${product.price}</p>
            <ul className="h-[150px] w-full grid grid-cols-2 sm:grid-cols-3 gap-x-4 mb-20 gap-y-2 sm:mb-4 sm:gap-y-0">

            {selectImages.map((item)=>{
            return(
              
              <li className="h-[100px] w-[80%] flex items-center justify-center relative overflow-hidden" key={item.id}>
                
                <input name="select" id={item.id === 1?'img1':item.id === 2?'img2':item.id === 3?'img3':''} onChange={handleSelectImg} type="radio" value={item.id}/>
                <label className="h-full w-full overflow-hidden flex items-center justify-center  border-[1px] border-neutral-300" htmlFor={item.id === 1?'img1':item.id === 2?'img2':item.id === 3?'img3':''}>
                 <img className="object-contain w-[80px] h-[80px] cursor-pointer" src={item.img} alt=""/>
                </label>
                
        
              </li>
              )
            })}
            </ul>
            <ItemCounter
              productStock={product.stock}
              handleAddBag={handleAddBag}
              purchase={purchase}
              setBagAmount={setBagAmount}
              bagAmount={bagAmount}
            />
          </div>
        </div>
      )}
    </div>
    </>
  );
};
