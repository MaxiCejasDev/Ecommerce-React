export const OrderForm = ({formBlurFunctions,handleForm}) => {
  const {handleNameBlur,
    handleLastnameBlur,
    handleEmailBlur,
    handlePhoneBlur,
    handleAddressBlur,
  formError} = formBlurFunctions
  console.log(formError)
  return (
    <>
  <form className="h-full w-full flex flex-col px-4 gap-y-6 py-10" action="">
    <div className="w-full h-[50px] flex justify-between relative">
      <div className="h-[50px] w-[50px] bg-[#0EA5E9] rounded-full flex justify-center items-center">
        <img className="w-[30px] h-[30px]" src="/icons/check.svg" alt="Check icon" />
        
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
    <div className="flex gap-x-2 relative">
      <input onChange={handleForm} onBlur={handleNameBlur} autoComplete="off" name="name" className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Nombre"/>
      {formError.nameHasError && <p className="text-red-600 text-xs top-full left-2 absolute">Ingrese su nombre</p>}
      <input onChange={handleForm} onBlur={handleLastnameBlur} autoComplete="off" name="lastname" className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Apellido"/>
      {formError.lastnameHasError && <p className="text-red-600 text-xs top-full left-[calc(50%+0.5rem)] absolute">Ingrese su apellido</p>}
    </div>
    <div className="relative">
      <input onChange={handleForm} onBlur={handleEmailBlur} autoComplete="off" name="email" className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Correo electronico" />
      {formError.emailHasError && <p className="text-red-600 text-xs top-full left-2 absolute">Ingrese un email valido</p>}
    </div>
    <div className="flex gap-x-2 relative">
      <input onChange={handleForm} autoComplete="off" name="province" className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Provincia"/>
      <input onChange={handleForm} autoComplete="off" name="city" className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Ciudad"/>
    </div>
    <div className="flex gap-x-2 relative">
      <div className="w-[80px] flex rounded-[8px] justify-center items-center border-[1px] border-[#BCBCBC] text-[#888888] py-4"><p>+54</p></div>
      <input onChange={handleForm} onBlur={handlePhoneBlur} autoComplete="off" name="phone" className="py-4 pl-2 rounded-[8px] w-full border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Número de telefono"/>
      {formError.phoneHasError && <p className="text-red-600 text-xs top-full left-2 absolute">Ingrese valores numericos</p>}
    </div>
    <div className="relative">
      <input onChange={handleForm} onBlur={handleAddressBlur} autoComplete="off" name="address" className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" type="text" placeholder="Dirección de domicilio" />
      {formError.addressHasError && <p className="text-red-600 text-xs top-full left-2 absolute">Ingrese una dirección valida</p>}
    </div>
    <button className="py-4 px-10 bg-darkpure text-white rounded-[12px] hover:bg-darklight font-bold text-lg">Confirmar</button>
  </form>
  </>
  )
}
