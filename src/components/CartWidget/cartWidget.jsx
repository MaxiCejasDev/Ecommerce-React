import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const CartWidget = () => {
  return (
    <>
      <div className="relative flex items-center z-10 text-lg font-bold text-primary">
        1
        <img
          className="h-[36px] z-10 cursor-pointer"
          src="https://drive.google.com/uc?export=download&id=1K8SCnewzPZOZQ2X8MznirCiH8O5czwFj"
          alt="Cart Icon"/>
        <ItemListContainer greeting='Hola 😎'/>
        </div>
        
    </>
  );
};
