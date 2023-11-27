

export const ItemDetailSelectImg = ({unSelectedImg,selectImg}) => {
    
  return (
    <>
  
        <div className="sm:w-[80%] w-full h-[calc(90vh-60px)] overflow-hidden grid grid-rows-rowdetail shadow-neutral-300 mt-[20px]">
        <div className="h-full w-full bg-white flex items-center justify-center">
          {selectImg.map((item)=>{
            return(
              <img key={item.id}
              className="object-contain w-[80$] h-[80%] sm:block sm:h-full sm:w-full"
              src={item.img}
              alt=""
            />
            )
            })}

        </div>
        <div className="w-full overflow-hidden flex">
          {unSelectedImg.map((item)=>{
            return(
              <div key={item.id} className="bg-white flex items-center justify-center w-[50%] h-full border-t-[1px] border-neutral-300">
              <img
                className="w-[80%] h-[80%] sm:max-w-[90%] sm:max-h-[90%] object-contain"
                
                src={item.img}
                alt=""
              />
            </div>
            )
          })}
        </div>
      </div>

    </>
  );
};
