export const OrderForm = ({order,formError,handleForm}) => {
  return (
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
  )
}
