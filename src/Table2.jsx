import CumulativeChart from "./CumulativeChart"

const Table2 = ()=>{
    return (
        <div className="my-3 border border-1">
          <div className="title">Cumulative performance</div>
          <div className="m-2 border border-1 p-3">
            <CumulativeChart className="canvas" />
          </div>
        </div>
    )
}

export default Table2