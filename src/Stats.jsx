import { Statistics } from "./netperfromance";
import { useStatsQuery } from "./services/api";
import { useEffect } from "react";

const Stats=()=>{

    const {data,isLoading, error} = useStatsQuery();

    if(isLoading)
        return <div>Loading Stats...</div>
    
    if(error)
        return <div>Failed...</div>




return  <div className="col-12 col-md-4 mt-3">
                <div className="border border-1">
                  <div className="title ">Statistics</div>
                  <div className="data-container">
                    {" "}
                    <table className="w-100">
                      <tbody>
                        {data?.map((i, index) => (
                          <tr  className="d-flex justify-content-between" key={index}>
                            <td>{i.key}</td>
                            {i.value!=null && <td className="text-black fw-bold">{i.value}%</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
}

export default Stats;