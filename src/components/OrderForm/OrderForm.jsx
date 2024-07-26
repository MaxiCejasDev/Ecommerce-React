import { useEffect, useState } from "react"
import ProvinceInput from "../ProvinceInput/ProvinceInput"
import CityInput from "../CityInput/CityInput"

export const OrderForm = ({notCompleteForm,orderData,order,formBlurFunctions,handleForm}) => {
  const {handleNameBlur,
    handleLastnameBlur,
    handleEmailBlur,
    handlePhoneBlur,
    handleAddressBlur,
  formError} = formBlurFunctions
  const [province, setProvince] = useState([])
  const [city, setCity] = useState([])
  useEffect(()=>{
  fetch('https://apis.datos.gob.ar/georef/api/provincias')
  .then((res)=>{
  if(res){
    return res.json()
  }
  else{
  throw new Error('Error al obtener provincias')
  }})
  .then((data)=>{
    
      const provinceData = data.provincias.map((item)=>{
        return {
          id: item.id,
          name: item.nombre,
          city: []
        }
      })
      setProvince(provinceData)
  })
  .catch(err=> console.error(err))
  },[])
  useEffect(()=>{
    if (province.length > 0) {
      Promise.all(province.map((item) => {
        return fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${item.id}&campos=nombre&max=100`)
          .then((res) => res.json())
          .then((data) => {
            return {
              provinceId: item.id,
              cities: data.localidades
            }
          })
      }))
      .then((results) => {
        const cityData = results.reduce((acc, result) => {
          acc[result.provinceId] = result.cities
          return acc
        }, {})
        setCity(cityData)
      })
      .catch(err => console.error(err))
    }
    
  },[province])

  return (
    <>
  <form onSubmit={order} className="h-full w-full flex flex-col px-4 gap-y-6 py-10" action="">

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
      <ProvinceInput handleform={handleForm} province={province}/>
      <CityInput orderData={orderData} handleForm={handleForm} province={province} city={city}/>
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
    {notCompleteForm && <p className="text-red-600 text-xs mx-auto">Completa todos los datos para confirmar</p>}
    <button type="submit" className="py-4 px-10 bg-darkpure text-white rounded-[12px] hover:bg-darklight font-bold text-lg">Confirmar</button>
  </form>
  </>
  )
}
