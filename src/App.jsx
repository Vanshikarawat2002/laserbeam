import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { performance, NetExposure, Statistics, Fund } from "./netperfromance";
import CumulativeChart from "./CumulativeChart";
import "bootstrap/dist/css/bootstrap.min.css";
import ConstantData from "./ConstantData";
import SectorExposure from "./SectorExposure";
import MarketCapExposure from "./MarketCapEXposure";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-black">
        <div className="container-xxl ">
          <h1 className="h3 text-white py-3 fs-6 fw-bolder">
            THE LASER BEAM FUND
          </h1>
        </div>
      </div>

      <div className="container">
        <h4 className="perf-title">
          Laser Beam Capital Disruption Fund — Performance
        </h4>

        {/* TABLE1 */}
        <div className=" border border-1 mt-3">
          <div className="perf-matrix-head">Net Performance</div>
          <table className="perf-matrix">
            <tbody>
              <tr>
                <th className="border border-0 label-performance">
                  NET PERFORMANCE
                </th>
                {performance.map((i, index) => (
                  <th className="border border-0 label-performance" key={index}>
                    {i.name}
                  </th>
                ))}
              </tr>
              <tr>
                <th className="border border-0 label-performance">
                  LASER BEAM FUND
                </th>
                {performance.map((i, index) => (
                  <td className="border border-0 funds fw-bold" key={index}>
                    {i.per}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* TABLE2 */}
        <div className="my-3 border border-1">
          <div className="title">Cumulative performance</div>
          <div className="m-2 border border-1 p-3">
            <CumulativeChart className="canvas" />
          </div>
        </div>

        <div className="row gap-1 justify-content-between">
          <div className="col-6 col-md-3">
            <div className="container-fluid">
              <div className="row gap-3">
                <div className="col-12 border border-1 p-0">
                  <div className="title ">Top holdings</div>
                  <div className="data-container">
                    {" "}
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td>Alphabet</td>
                        </tr>
                        <tr>
                          <td>Alphabet</td>
                        </tr>
                        <tr>
                          <td>Alphabet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 border border-1 p-0">
                  <div className="title ">Net exposure</div>
                  <div className="data-container">
                    <table className="w-100">
                      <tbody>
                        {NetExposure.map((i, index) => (
                          <tr key={index}>
                            <td>{i.name}</td>
                            <td className="text-black fw-bold">{i.per}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 border border-1 p-0">
            <div className="title ">Statistics</div>
            <div className="data-container">
              {" "}
              <table className="w-100">
                <tbody>
                  {Statistics.map((i, index) => (
                    <tr key={index}>
                      <td>{i.name}</td>
                      <td className="text-black fw-bold">{i.per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-6 col-md-4 border border-1 p-0">
            <div className="title">The Fund</div>
            <div className="data-container">
              <table className="w-100">
                <tbody>
                  {Fund.map((i, index) => (
                    <tr key={index}>
                      <td>{i.name}</td>
                      <td className="text-black fw-bold">{i.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-3 justify-content-between">
            <div className="col-6 border border-1 p-0">
              <div className="title">Sector exposure</div>
              <div className="m-2 border border-1 p-3">
                <SectorExposure />
              </div>
            </div>
            <div className="col-5 border border-1 p-0">
              <div className="title">Market cap exposure</div>
              <div className="m-2 border border-1 p-3">
                <MarketCapExposure />
              </div>
            </div>
          </div>
        </div>

        <ConstantData />
      </div>
    </div>
  );
}

export default App;
