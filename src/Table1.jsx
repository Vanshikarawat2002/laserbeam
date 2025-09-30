import { performance } from "./netperfromance";

const Table1 = ()=>{
    return (
          <div className=" border border-1 mt-3">
                  <div className="perf-matrix-head">Net Performance</div>
                  <table className=" table">
                    <tbody className="table1-body">
                      <tr>
                        <th className="border border-0 text-start label-performance">
                          NET PERFORMANCE
                        </th>
                        {performance.map((i, index) => (
                          <th
                            className="border border-0 text-center label-performance "
                            key={index}
                          >
                            {i.name}
                          </th>
                        ))}
                      </tr>
                      <tr>
                        <th className="border border-0 text-start label-performance">
                          LASER BEAM FUND
                        </th>
                        {performance.map((i, index) => (
                          <td
                            className="border border-0 text-center funds fw-bold"
                            key={index}
                          >
                            {i.per}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
    )
}
export default Table1;