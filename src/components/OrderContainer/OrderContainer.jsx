import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useBag } from '../../Context/BagProvider';
import { useState } from 'react';
import { OrderForm } from '../OrderForm/OrderForm';


export const OrderContainer = ({ totalOrder }) => {
  const [formOrder,setFormOrder] = useState(true)
  const [formError,setFormError] = useState({phonelength: false,emailvalidation: false})
  const [formData,setFormData] = useState({
    name:'',
    lastname: '',
    phone: '',
    email:'',
    emailrepeated:''
  })
  const {bag,setBag,setOrderId} = useBag()
  // Form input value
  const handleForm = (evt)=>{
    setFormData({
      ...formData,
      [evt.target.name] : evt.target.value
    })
  }
  
  const handleFormOrder = ()=>{
    setFormOrder(!formOrder)
  }
  // Set order to firebase database and validacion of form
  const order = (e)=>{
    e.preventDefault()
    const order = {}
    order.buyer = formData
    order.items = bag.map(({id,name,price,amount})=>({id:id,name:name,price:price,amount:amount}))
    order.total = totalOrder

    if(formData.phone.length < 8){
      setFormError({...formError,phonelength:true})

    }
    else if(formData.email != formData.emailrepeated){
      setFormError({...formError,emailvalidation:true,phonelength:false})
    }
    else{
    setFormError({...formError,emailvalidation:false})
    const db = getFirestore()
    const orderCollection = collection(db,"orders")
    addDoc(orderCollection,order)
    .then(({id})=>{
      setOrderId(id)
    })
    .catch(error => console.log(error))
    .finally(()=>setBag([]))
    }
  } 
  
  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-60px)] lg:w-[80%] bg-white flex-col">
        {formOrder?
        <div className="w-full px-10">
          <div className="flex items-center justify-center pt-16">
            <h2 className="font-poppins text-xl">TOTAL DEL PEDIDO</h2>
          </div>
          <div className="grid grid-rows-3 lg:mt-16 h-[120px] px-2">
            <div className="flex items-center justify-between font-poppins text-lg">
              <p>Productos</p>
              <p>${totalOrder}</p>
            </div>
            <div className="flex items-center justify-between font-poppins text-lg">
              <p>Envio</p>
              <p>{totalOrder >= 40000 ? "$0" : "$6000"}</p>
            </div>
            <div className="flex items-center justify-between font-poppins text-lg">
              <p className="font-semibold">Total:</p>
              <p>${totalOrder >= 40000 ? totalOrder : totalOrder + 6000}</p>
            </div>
          </div>
          <div className="border-b-[1px] border-neutral-200 flex items-center flex-col justify-center pb-10 pt-10">
            <button
              onClick={handleFormOrder}
              className="bg-darklight cursor-pointer relative flex py-3 min-w-[50%] max-w-[50%] lg:min-w-[70%] lg:max-w-[70%] text-white font-poppins text-sm sm:text-base lg:text-xl justify-center items-center rounded-2xl"
            >
              Realizar compra
              <img
                className="sm:h-[24px] sm:w-[32px] h-[16px] w-[16px]"
                src="/icons/arrow-white.svg"
                alt=""
              />
            </button>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="flex justify-center items-center py-4">
              <img
                className="h-[24px]"
                src="/details-icon/truck.svg"
                alt=""
              />
              <p className="text-greenlight ml-2 font-poppins text-sm">
                Envio gratis en compras mayores a $40.000
              </p>
            </div>
            <hr className="bg-neutral-200 w-[90%]" />
          </div>
        </div>
        : 
        <OrderForm order={order} formError={formError} handleForm={handleForm}/>
      }
      </div>
      
      
    </>
  );
};