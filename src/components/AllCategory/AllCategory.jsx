import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllCategory = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [priceFilter, setPriceFilter] = useState({
    min: 0,
    max: 0,
  });
  // Input value of Search bar 
  const handleSearchProduct = (evt) => {
    setSearchProduct(evt.target.value.toLowerCase());
  };
  // Price filtering input value 
  const handleMinMax = (e) => {
    setPriceFilter({
      ...priceFilter,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  // useEffect hook to get firebase database, this hook is to filtered price,get products of all categorys and filtered for search bar
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((res) => {
      if(searchProduct || priceFilter.min && priceFilter.max){
      setAllProducts(
        res.docs.map((item) => {
            const itemData = { id: item.id, ...item.data() }
            if (searchProduct !== "") {
              const matchProduct =  itemData.name.toLowerCase().includes(searchProduct.toLowerCase()) || itemData.category.toLowerCase().includes(searchProduct.toLowerCase());
              if (matchProduct) {
                if (parseFloat(itemData.price) >= priceFilter.min && parseFloat(itemData.price) <= priceFilter.max) {   
                  return itemData;
                } else {return itemData;}
              }
            } 
            else if (priceFilter.min <= priceFilter.max) {
              if (parseFloat(itemData.price) >= priceFilter.min &&parseFloat(itemData.price) <= priceFilter.max) {
                return itemData;
              }
            } 
          })
          .filter(Boolean))}
          else{
            setAllProducts(res.docs.map((item)=>({id:item.id,...item.data()})))
          }
    });
  }, [searchProduct, priceFilter]);
 
  return (
    <>
      <div className="bg-black h-[60px] w-full md:hidden z-0"></div>
      <div className="h-content w-full md:flex">
        <div className="md:w-[25%] pt-8 md:h-full h-content pb-2 md:pb-0 flex flex-col justify-center">
          <div className="flex flex-col">
          <label className="ml-2 font-poppins text-base font-bold" htmlFor="search">Buscar</label>
          <input
            onChange={handleSearchProduct}
            className="outline-0 border-[1px] border-neutral-400 font-poppins rounded-lg py-2 px-2 mx-2 focus:border-blue-500"
            id="search"
            type="text"
            name="search"
            placeholder="Buscar producto..."
          />
          </div>
            <div className="pt-4">
              <div className="justify-self-start self-start ml-2">
                <label className="font-poppins text-base font-bold" htmlFor="price">
                  Precio
                </label>
              </div>
              <div>
              <input
                name="min"
                id="price"
                onChange={handleMinMax}
                className="mt-2 w-30 h-10 outline-0 mx-2 rounded-lg border-[1px] border-neutral-400 text-neutral-800 font-poppins text-sm focus:border-blue-500 pl-2"
                type="number"
                placeholder="Min"
              />
              <input
                name="max"
                id="price"
                maxLength={"7"}
                onChange={handleMinMax}
                className="mt-2 w-30 h-10 outline-0 mx-2 rounded-lg border-[1px] border-neutral-400 text-neutral-800 font-poppins text-sm focus:border-blue-500 pl-2"
                type="number"
                placeholder="Max"
              />
              </div>
            </div>
        </div>
        <div className="w-full bg-whitelight h-full min-h-[calc(100vh-60px)] px-4 py-4">
          <div>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-6 gap-x-10">
              {allProducts.map((product) => {
                return (
                  <li
                    key={product.id}
                    className="bg-white shadow-lg shadow-neutral-300"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="h-[250px] w-[200px] object-contain pt-2"
                        src={`${product.img1}`}
                        alt=""
                      />
                      <h3 className="font-poppins text-lg text-center text-neutral-900">
                        {product.name}
                      </h3>
                      <p className="font-poppins text-sm text-gray-600">
                        ${product.price}
                      </p>
                      <div className="py-4">
                        <button className="bg-darklight button-hover hover:bg-white hover:text-black hover:border-[1px] hover:py-[8px] hover:border-black shadow-lg shadow-neutral-300 py-[9px] px-[30px] text-white font-bold font-poppins text-sm rounded-3xl">
                          <Link
                            className="flex"
                            to={`/${product.category}/detail/${product.id}`}
                          >
                            Ver detalles
                          </Link>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
