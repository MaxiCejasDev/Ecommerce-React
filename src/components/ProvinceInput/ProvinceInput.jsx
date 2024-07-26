

export default function ProvinceInput ({handleform,province}){

    return(<>
        <select onChange={handleform} className="w-full pl-2 py-4 rounded-[8px] border-[1px] border-[#BCBCBC] bg-transparent outline-2 outline-[#0EA5E9]"  name="province" id="province">
            <option value="" disabled selected>Provincia</option>
            {province.map(({id,name})=>(
                <option key={id} value={name}>{name}</option>
            ))}
        </select>
    </>)
}