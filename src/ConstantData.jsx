import { StaticInfo } from "./netperfromance";

const ConstantData =()=>{
    return (
        <>
     {StaticInfo.map((i,index)=>(
           <div key={index} className="border border-1 mt-4 ">
            <p className="  title p-2 ">{i.label}</p>
            <p className="p p-2 para">{i.para}</p>
        </div>
      
     ))}
        </>
    )
}

export default ConstantData;