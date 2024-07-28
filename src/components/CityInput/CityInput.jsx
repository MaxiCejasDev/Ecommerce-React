import { useEffect, useState } from "react"


export default function CityInput({orderData,handleForm,province,city}){
    
    const [provinceSelected, setProvinceSelected] = useState({
        id: '',
        name: ''
    })
    const [citiesProvince, setCitiesProvince] = useState()
    useEffect(()=>{
       const selectedProvince = province.find(({ name }) => name.trim() === orderData.province.trim());

        if (selectedProvince) {
            setProvinceSelected({
                id: selectedProvince.id,
                name: selectedProvince.name
            });
            setCitiesProvince(city[selectedProvince.id] || []);
        }
        
     
      
    },[orderData.province])
    return(
        <>
        <select onChange={handleForm} className="w-full pl-2 py-4 rounded-[8px] border-[1px] text-[#888888] border-darklight bg-transparent outline-2 outline-[#0EA5E9]" name="city" id="city">
            <option className="text-xs" value="" disabled selected>Ciudad</option>
            {citiesProvince?.map(({id,nombre})=>(
                <option className="text-xs" key={id} value={nombre}>{nombre}</option>
            ))}
        </select>
        </>
    )
}