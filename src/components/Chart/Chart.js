import React from "react";
import './Chart.css'
import CharBar from "./ChartBar";

const Chart = (props) => {
    const valP = props.items.map(dp => dp.value);
    const totalMax = Math.max(...valP);
    console.log(props.items)
    return (
        <div className="chart">
            {props.items.map((item) => { <CharBar key={item.label} value={item.value} maxVal={totalMax} label={item.label} /> })}
        </div>
    )
}

export default Chart;