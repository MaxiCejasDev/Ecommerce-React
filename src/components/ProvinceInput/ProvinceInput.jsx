

export default function ProvinceInput ({handleform,province}){

    return(<>
        <select onChange={handleform} className="w-full pl-2 py-4 rounded-[8px] border-[1px] text-[#888888] border-darklight bg-transparent outline-2 outline-[#0EA5E9]"  name="province" id="province">
            <option className="text-xs" value="" disabled selected>Provincia</option>
            {province.map(({id,name})=>(
                <option className="text-xs" key={id} value={name}>{name}</option>
            ))}
        </select>
    </>)
}