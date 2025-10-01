import { useEffect } from "react";
import { performance } from "./netperfromance";
import {usePerformanceQuery} from './services/api';

const Table1 = ()=>{

  const {data ,isLoading , error} = usePerformanceQuery();

  if(isLoading)
    return <div>Loading...</div>
 
  if(error)
    return <div>Error... </div>

    return (
          <div className=" border border-1 mt-3">
                  <div className="perf-matrix-head">Net Performance</div>
                  <table className=" table">
                    <tbody className="table1-body">
                      <tr>
                        <th className="border border-0 text-start label-performance">
                          NET PERFORMANCE
                        </th>
                        {data?.table?.map((i, index) => (
                          <th
                            className="border border-0 text-center label-performance "
                            key={index}
                          >
                            {i.label}
                          </th>
                        ))}
                      </tr>
                      <tr>
                        <th className="border border-0 text-start label-performance">
                          LASER BEAM FUND
                        </th>
                        {data?.table?.map((i, index) => (
                          <td
                            className="border border-0 text-center funds fw-bold"
                            key={index}
                          >
                            {i.value}%
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
    )
}
export default Table1;