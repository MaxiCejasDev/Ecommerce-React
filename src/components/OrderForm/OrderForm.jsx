export const OrderForm = ({order,formError,handleForm}) => {
  console.log(order,formError,handleForm)
  return (
    <>
    {/* <div className="flex justify-center items-center">
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
  </form> */}
  <form className="h-full w-full flex flex-col px-4 gap-y-6 py-10" action="">
    <div className="w-full h-[50px] flex justify-between relative">
      <div className="h-[50px] w-[50px] bg-[#0EA5E9] rounded-full flex justify-center items-center">
        <img className="w-[30px] h-[30px]" src="/icons/check.svg" alt="" />
        
      </div>
      <div className="absolute h-[2px] w-[178px] left-[50px] bg-black top-[calc(50%-2px)]"></div>
      <div className="h-[50px] w-[50px] bg-[#EDEDED] text-[#8D8D8D] rounded-full flex justify-center items-center">
        <p className="font-semibold text-lg">2</p>
      </div>
      <div className="absolute h-[2px]  left-[278px] w-[178px] bg-[#8D8D8D] top-[calc(50%-2px)]"></div>
      <div className="h-[50px] w-[50px] bg-[#EDEDED] text-[#8D8D8D] rounded-full flex justify-center items-center">
        <p className="font-semibold text-lg">3</p>
        
      </div>
    </div>
    <div className="flex gap-x-2">
      <input className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Nombre"/>
      <input className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Apellido"/>
    </div>
    <div>
      <input className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Correo electronico" />
    </div>
    <div className="flex gap-x-2">
      <input className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Provincia"/>
      <input className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Ciudad"/>
    </div>
    <div className="flex gap-x-2">
      <div className="w-[80px] flex rounded-[8px] justify-center items-center border-[1px] border-[#BCBCBC] text-[#888888] py-4"><p>+54</p></div>
      <input className="py-4 pl-2 rounded-[8px] w-full border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Número de telefono"/>
    </div>
    <div>
      <input className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Dirección de domicilio" />
    </div>
    <button className="py-4 px-10 bg-darkpure text-white rounded-[12px] hover:bg-darklight font-bold text-lg">Confirmar</button>
  </form>
  </>
  )
}
