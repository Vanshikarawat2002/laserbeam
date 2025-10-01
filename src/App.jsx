import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { performance, Statistics, Fund } from "./netperfromance";
import CumulativeChart from "./CumulativeChart";
import "bootstrap/dist/css/bootstrap.min.css";
import ConstantData from "./ConstantData";
import SectorExposure from "./SectorExposure";
import MarketCapExposure from "./MarketCapEXposure";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Funds from "./Funds";
import Stats from "./Stats";
import Holdings from "./Holdings";
import NetExposure from "./NetExposure";

function App() {
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
      <Table1/>

        {/* TABLE2 */}
<Table2/>  

{/* TABLE3 */}
        <div className="row justify-content-between ">
          <div className="col-12 col-md-3 mt-3">
            <div className="container-fluid">
              <div className="row gap-3">

               <Holdings/>

               <NetExposure/>
              </div>
            </div>
          </div>

         
      <Stats/>
       <Funds/>

          <div className="col-12  col-md-6 mt-3">
            <div className="border border-1">
              <div className="title">Sector exposure</div>
              <div className="m-2 border border-1 p-3">
                <SectorExposure />
              </div>
            </div>
          </div>

          <div className="col-12  col-md-5 mt-3">
            <div className="border border-1">
              <div className="title">Market cap exposure</div>
              <div className="m-2 border border-1 p-3">
                <MarketCapExposure />
              </div>
            </div>
          </div>

          <div className="col-12 my-2 ">
            <ConstantData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
