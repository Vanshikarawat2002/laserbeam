import { useEffect } from "react";
import { netExposure } from "./netperfromance";
import { useExposureQuery } from "./services/api";

const NetExposure =()=>{

    const {data,error,isLoading}= useExposureQuery();

    if(isLoading)
        return <div>Loading...</div>

    if(error)
        return <div>Failed ...</div>

    return (
         <div className="col-12 p-0 ">
                          <div className="border border-1">
                            {" "}
                            <div className="title ">Net exposure</div>
                            <div className="data-container">
                              <table className="w-100">
                                <tbody>
                                  {data?.netExposure?.map((i, index) => (
                                    <tr  className="d-flex justify-content-between" key={index}>
                                      <td>{i.key}</td>
                                      <td className="text-black fw-bold">{i.value}%</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
    )
}

export default NetExposure