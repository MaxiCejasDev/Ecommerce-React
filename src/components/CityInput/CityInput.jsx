import { useEffect, useState } from "react"


export default function CityInput({orderData,handleForm,province,city}){
    
    const [provinceSelected, setProvinceSelected] = useState({
        id: '',
        name: ''
    })
    const [citiesProvince, setCitiesProvince] = useState()
    useEffect(()=>{
      province.map(({id,name})=>{
        if(name.trim() === orderData.province.trim()){
            setProvinceSelected({
                ...provinceSelected,
                id: id,
                name: name
            })
        }
      })
    
        setCitiesProvince(city[`${provinceSelected.id}`])
     
      
    },[orderData.province])
    return(
        <>
        <select onChange={handleForm} className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]" name="city" id="city">
            <option value="" disabled selected>Ciudad</option>
            {citiesProvince && citiesProvince.map(({id,nombre})=>(
                <option key={id} value={nombre}>{nombre}</option>
            ))}
        </select>
        </>
    )
}