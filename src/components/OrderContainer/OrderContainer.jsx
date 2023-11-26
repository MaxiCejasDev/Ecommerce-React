import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useBag } from '../../Context/BagProvider';
import { useState } from 'react';


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
  const {bag,setBag} = useBag()
  const handleForm = (evt)=>{
    setFormData({
      ...formData,
      [evt.target.name] : evt.target.value
    })
  }
  
  const handleFormOrder = ()=>{
    setFormOrder(!formOrder)
  }

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
      console.log('aca rey')
    }
    else{
    setFormError({...formError,emailvalidation:false})
    const db = getFirestore()
    const orderCollection = collection(db,"orders")
    addDoc(orderCollection,order)
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
                src="https://drive.google.com/uc?export=download&id=1Rm-2jrgy930Ekdp1vBjqSOs9AaEt0qr5"
                alt=""
              />
            </button>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="flex justify-center items-center py-4">
              <img
                className="h-[24px]"
                src="https://drive.google.com/uc?export=download&id=14LJ79IawbMHuhm8ETSmxuKuDdpcucDSL"
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
        <>
        <div className="flex justify-center items-center">
          <h3 className='font-poppins text-lg mt-4'>PEDIDO TOTAL</h3>
        </div>
        <form onSubmit={order} className="h-content flex flex-col items-center justify-center font-poppins text-neutral-500">
         
            
            <label className='pt-2' htmlFor="name">Nombre</label>
            <input name='name' onChange={handleForm} className="px-2 py-2 border-l-[1px] border-b-[1px] border-neutral-800 text-neutral-800 focus:outline-blue-500" type="text" required/>
           
            
            <label className='pt-2' htmlFor="lastname">Apellido</label>
            <input name='lastname' onChange={handleForm} className="px-2 py-2 border-l-[1px] border-b-[1px] border-neutral-800 text-neutral-800 focus:outline-blue-500" type="text" required/>
            
          
          
            <label className='pt-2' htmlFor="phone">Numero de telefono</label>
            <input name='phone' onChange={handleForm} className="px-2 py-2 border-l-[1px] border-b-[1px] border-neutral-800 text-neutral-800 focus:outline-blue-500" type="number" required/>
            {formError.phonelength?<p className="text-red-600 h-10 text-sm">Minimo 8 caracteres</p>:''}
        
          
            <label className='pt-2' htmlFor="email">Email</label>
            <input name='email' onChange={handleForm} className="px-2 py-2 border-l-[1px] border-b-[1px] border-neutral-800 text-neutral-800 focus:outline-blue-500" type="email" required/>
          
      
            <label htmlFor='emailrepeated' className='pt-2'>Repetir Email</label>
            <input name='emailrepeated' onChange={handleForm}  className="px-2 py-2 border-l-[1px] border-b-[1px] border-neutral-800 text-neutral-800 focus:outline-blue-500" type="email" required/>
           {formError.emailvalidation? <p className='text-red-600 h-10 text-sm'>Los correos no coinciden</p>:''}
  
          <input className='py-4 px-24 my-6 rounded-sm bg-black font-bold text-white border-[1px] border-neutral-900 hover:bg-white hover:text-black' type="submit" placeholder='Realizar pedido'/>
        </form>
        </>
      }
      </div>
      
      
    </>
  );
};
