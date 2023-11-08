import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productFetch } from "../helper/products";
import { ItemCounter } from "../Hooks/ItemCounter/ItemCounter";
import { useBag } from "../../Context/BagProvider";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
  const { cid, pid } = useParams();
  const [detailLoading, setDetailLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [purchase, setPurchase] = useState(false);
  const { addToBag, bagAmount, setBagAmount } = useBag();

  const handleAddBag = (count) => {
    addToBag({
      id: product.id,
      img: product.img1,
      nombre: product.nombre,
      precio: product.precio * count,
      cantidad: count,
    });

    setPurchase(true);
  };

  useEffect(() => {
    productFetch()
      .then((res) => {
        setTimeout(() => {
          const category = res.find((cat) => cat.category === cid);
          const foundProduct = category.products.find((p) => p.id === pid);
          setProduct(foundProduct);
        }, 2000);
      })
      .finally(() => {
        setDetailLoading(!true);
      });
  }, [cid, pid]);

  return (
    <div className={detailLoading?'h-[calc(100vh-60px)] bg-black flex justify-center items-center':''}>
      {detailLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 h-[calc(90vh-60px)] justify-items-center mt-[20px]">
          <div className="w-[80%] h-full overflow-hidden grid grid-rows-rowdetail">
            <div className="h-full w-full border-[1px] border-black">
              <img
                className="object-contain h-full w-full"
                src={product.img1}
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden flex border-b-[1px] border-black">
              <div className="border-l-[1px] flex items-center justify-center w-[50%] h-full border-black">
                <img
                  className="max-w-[90%] max-h-[90%]"
                  src={product.img2}
                  alt=""
                />
              </div>
              <div className="border-l-[1px] flex items-center justify-center w-[50%] h-full border-r-[1px] border-black">
                <img
                  className="max-w-[90%] max-h-[90%]"
                  src={product.img3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full self-start mt-[20px]">
            <h3 className="text-3xl font-poppins">{product.nombre}</h3>
            <p className="font-poppins text-[15px]">${product.precio}</p>
            <ItemCounter
              handleAddBag={handleAddBag}
              purchase={purchase}
              setBagAmount={setBagAmount}
              bagAmount={bagAmount}
            />
          </div>
        </div>
      )}
    </div>
  );
};
