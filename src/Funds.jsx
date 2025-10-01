import { useEffect } from "react";
import { Fund } from "./netperfromance";
import { useFundsQuery } from "./services/api";

const Funds= ()=>{

const {data,isLoading,error} = useFundsQuery();


return    <div className="col-12 col-md-4 mt-3 ">
            <div className="border border-1">
              <div className="title">The Fund</div>
              <div className="data-container">
                <table className="w-100">
                  <tbody>
                    {data?.map((i, index) => (
                      <tr className="d-flex justify-content-between" key={index}>
                        <td>{i.key}</td>
                        <td className="text-black fw-bold">{i.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
}

export default Funds;