import { useEffect } from "react";
import { useHoldingsQuery } from "./services/api"

const Holdings = ()=>{

const {data,error , isLoading} = useHoldingsQuery();


if(isLoading)
    return <div>Loading ...</div>
if(error)
    return <div>Error ...</div>

return (
         <div className="col-12 p-0">
                  <div className="border border-1">
                    <div className="title ">Top holdings</div>
                    <div className="data-container">
                      {" "}
                      <table className="w-100">
                        <tbody>
                         {data?.map((i,indx)=>(
                             <tr key={indx}>
                            <td>{i.TopHoldingsTable}</td>
                          </tr>
                         ))}
                          
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
    )
}

export default Holdings; 